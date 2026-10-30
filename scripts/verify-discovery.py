"""Validate rendered discovery files and metadata using only Python's stdlib."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree as ET
import json
import sys


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_count = 0
        self.descriptions = []
        self.canonicals = []
        self.links = []
        self.data = []
        self.in_json = False
        self.json_text = ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title':
            self.title_count += 1
        if tag == 'meta' and attrs.get('name') == 'description':
            self.descriptions.append(attrs.get('content', ''))
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs['href'])
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True
            self.json_text = ''

    def handle_data(self, data):
        if self.in_json:
            self.json_text += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.in_json:
            self.data.append(json.loads(self.json_text))
            self.in_json = False


site = Path(sys.argv[1] if len(sys.argv) > 1 else '_site')
paths = ['', 'writing/', 'notes/', 'reports/agentic-rl/', 'reports/embodied-ai-reading-plan.html',
         'reports/diffusion_tutorial.html', 'reports/ai-reviewer.html',
         'reports/llm_cs_rankings.html', 'reports/ica-proposal.html', 'papers/reviewer_comparison.html']
for path in paths:
    file = site / path
    if file.is_dir():
        file /= 'index.html'
    source = file.read_text()
    parsed = Metadata()
    parsed.feed(source)
    assert parsed.title_count == 1, (path, 'title count', parsed.title_count)
    assert len(parsed.descriptions) == 1 and parsed.descriptions[0], (path, 'description')
    assert parsed.canonicals == ['https://feijianghan.com/' + path], (path, parsed.canonicals)
    assert parsed.data, (path, 'missing structured data')
    assert '{% include' not in source, (path, 'unrendered include')
    assert '{{ entry.' not in source, (path, 'unrendered metadata')

home = (site / 'index.html').read_text()
for post in ('2115463997537255835', '6a300c2e00000000060363b6', '6983f11e000000000d009446'):
    assert post in home, ('missing community post', post)
assert '<h1>Resources</h1>' in home
assert 'Community discussions</' not in home
assert 'href="/#resources"' in home
assert 'class="chinese-notes-scroll"' in home
assert 'class="resources-scroll"' in home
assert 'Browse all writing, tutorials, and reading guides' not in home
assert '以下 9 篇笔记均为中文' not in home
assert 'NLPer @ UMD' in home and 'NLPer @ UPenn' not in home
assert '>Misc<' not in home
assert 'October 2026' in home and 'Released <strong>ICA Lens</strong>' in home
assert home.count('data-note-id=') == 9
notes = (site / 'notes/index.html').read_text()
assert notes.count('data-note-id=') == 9
for rendered in (home, notes):
    assert 'Rednote blogs' in rendered
    assert rendered.count('class="note-english"') == 9
    assert 'class="language-label">中文</span>' not in rendered
    assert '中文 Chinese' in rendered
    metadata = Metadata()
    metadata.feed(rendered)
    catalog = next(node for data in metadata.data for node in data.get('@graph', []) if node.get('@id') == 'https://feijianghan.com/notes/#catalog')
    assert len(catalog['itemListElement']) == 9
    assert all(len(row['item']['alternateName']) > 35 for row in catalog['itemListElement'])
assert notes.count('class="note-description"') == 9
for post in ('6ac26805000000001a031356', '6ab96013000000001b01c8eb', '6a7306710000000033013eac',
             '6a65d8d6000000001c00f767', '6a02a71b000000000702e368', '69cb60e4000000001a036780', '68e942a9000000000402adf7'):
    assert post in home and post in notes, ('missing Chinese note', post)

class ResourceReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.current = None
        self.links = {}
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'li' and 'resource-item' in attrs.get('class', '').split():
            self.current = attrs['id']
            self.links[self.current] = []
        if tag == 'a' and self.current:
            self.links[self.current].append(attrs.get('href', ''))
    def handle_endtag(self, tag):
        if tag == 'li':
            self.current = None

references = ResourceReferences()
references.feed(home)
for resource, post in [('agentic-rl', '2115463997537255835'), ('paperforge', '6a300c2e00000000060363b6'), ('best-papers', '6983f11e000000000d009446')]:
    assert any(post in url for url in references.links['resource-' + resource]), ('discussion mismatch', resource)
assert len(references.links) == 7
guide = (site / 'reports/agentic-rl/index.html').read_text()
assert 'id="full-reading-outline"' in guide
assert guide.count('<section><h3>') == 9

robots = RobotFileParser()
robots.parse((site / 'robots.txt').read_text().splitlines())
for bot in ('Googlebot', 'bingbot', 'OAI-SearchBot'):
    assert robots.can_fetch(bot, 'https://feijianghan.com/writing/')
assert robots.site_maps() == ['https://feijianghan.com/sitemap.xml']

sitemap = ET.parse(site / 'sitemap.xml')
urls = [e.text for e in sitemap.iter() if e.tag.endswith('}loc')]
assert all(u.startswith('https://feijianghan.com/') for u in urls), urls
assert 'https://feijianghan.com/writing/' in urls
for path in paths:
    assert 'https://feijianghan.com/' + path in urls, ('not in sitemap', path)
feed = ET.parse(site / 'writing-feed.xml')
assert len(feed.findall('.//item')) == 5
assert 'https://feijianghan.com/writing/' in (site / 'llms.txt').read_text()
print('Discovery verified: 10 pages with unique canonicals and valid JSON-LD; 7 resources with correctly matched discussions; 9 Chinese notes; 9 static reading sessions; HTTPS sitemap, robots, directory, and feed.')
