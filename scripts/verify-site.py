"""Check the rendered homepage, including links affected by source reorganization."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.duplicates = []
        self.links = []
        self.assets = []
        self.in_nav = False
        self.nav_links = []
        self.paper_ids = []
        self.empty_links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            if attrs['id'] in self.ids:
                self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])
        if tag == 'nav':
            self.in_nav = True
        if tag == 'a':
            href = attrs.get('href')
            if href == '':
                self.empty_links.append(attrs)
            if href:
                self.links.append(href)
                if self.in_nav:
                    self.nav_links.append(href)
        if tag in ('img', 'script', 'source', 'audio') and attrs.get('src'):
            self.assets.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') in ('stylesheet', 'icon', 'manifest', 'apple-touch-icon'):
            self.assets.append(attrs['href'])
        if 'data-paper-id' in attrs:
            self.paper_ids.append(attrs['data-paper-id'])

    def handle_endtag(self, tag):
        if tag == 'nav':
            self.in_nav = False


site = Path(sys.argv[1] if len(sys.argv) > 1 else '_site')
source = (site / 'index.html').read_text()
page = Page()
page.feed(source)
assert not page.duplicates, f'Duplicate IDs: {page.duplicates}'
assert not page.empty_links, 'Empty links remain'
for href in page.nav_links:
    parsed = urlsplit(href)
    assert parsed.fragment in page.ids, f'Missing navigation target: {href}'
for src in page.assets:
    parsed = urlsplit(src)
    if not parsed.scheme and not parsed.netloc:
        assert (site / unquote(parsed.path.lstrip('/'))).is_file(), f'Missing asset: {src}'
assert len(page.paper_ids) == 9, f'Expected all 9 full publication entries, got {len(page.paper_ids)}'
assert len(set(page.paper_ids)) == 9
assert 'Chris Callison-Burch' in source and 'Lyle Ungar' in source and 'Delip Rao' in source and 'Xiaodong Yu' in source
assert 'University of Pennsylvania' in source and 'University of Maryland' in source
assert 'show_paper_citations' not in source and 'gs_data.json' not in source
assert 'github.com/RayeRen/RayeRen' not in source
assert '{%' not in source and '{{' not in source, 'Unrendered Liquid expression'
print(f'Homepage verified: {len(page.paper_ids)} full papers, {len(page.nav_links)} working navigation links, {len(page.assets)} local/external assets checked.')
