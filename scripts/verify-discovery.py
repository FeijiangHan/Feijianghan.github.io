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
paths = ['', 'writing/', 'reports/agentic-rl/', 'reports/embodied-ai-reading-plan.html',
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
print('Discovery verified: 9 pages with unique canonicals and valid JSON-LD; 3 social posts; 9 static reading sessions; HTTPS sitemap, robots, directory, and 5-entry feed.')
