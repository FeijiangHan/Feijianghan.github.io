# Feijiang Han’s homepage

Source for [feijianghan.com](https://feijianghan.com), built with Jekyll and published through GitHub Pages.

## Editing the homepage

| Location | Purpose |
| --- | --- |
| `_pages/about.md` | Introduction, research interests, philosophy, and personal notes |
| `_includes/sections/news.md` | News entries, newest first; fixed-height scroll area |
| `_includes/sections/publications.md` | Complete publication content, figures, abstracts, and video |
| `_data/publication-highlights.yml` | Paper IDs selected for the default Highlights view |
| `_includes/sections/honors.md` | Honors and awards |
| `_includes/sections/notes.md` | Reading guides, research tools, explorations, and experiences |
| `_data/navigation.yml` | Links to existing homepage sections |
| `_data/profile-links.yml` | Social and contact links for desktop and mobile |
| `_config.yml` | Personal profile, analytics, and Jekyll settings |
| `_includes/social-icon.html` | Local SVG icon definitions |
| `_sass/_home.scss` | Homepage layout, responsive styles, and interactive states |
| `assets/js/home.js` | Publication filters, accessible navigation, pronunciation, and local time |
| `scripts/serve.sh` | Local Jekyll preview |
| `_data/writing.yml` | Shared article titles, descriptions, canonical paths, and writing-directory entries |
| `_includes/discovery-head.html` | Article metadata and JSON-LD shared by standalone reports |
| `_pages/writing.html` | Public writing and reading-guide directory |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `writing-feed.xml` | Crawler rules, generated sitemap, content directory, and writing feed |

Each full paper has a stable `data-paper-id` and a topic (`data-interest="1"`, `"2"`, or `"3"`). Add its ID to `_data/publication-highlights.yml` to highlight it. Highlights and topic filters work independently. All publications remain visible when JavaScript is unavailable.

Public URLs under `images/`, `papers/`, `reports/`, and `videos/` are intentionally retained so previously shared links keep working. Unused personal image variants are in `images/archive/`. Theme support styles and licensed fonts remain in `_sass/vendor/` and `assets/fonts/`.

## Local development

With Ruby and Bundler installed:

```sh
bundle install
bash scripts/serve.sh
```

To build without starting a server:

```sh
bundle exec jekyll build
```

The GitHub Actions verification workflow builds the site using the official GitHub Pages Jekyll action. No citation crawler or automatic GitHub profile updater is used.

Standalone HTML reports use `layout: null` front matter and the shared discovery include; their original designs and interactions remain self-contained. The Agentic RL guide also includes a readable outline generated from its existing session data, so the nine-session plan is present in the initial HTML. Update that outline alongside the session data when editing the curriculum. `llms.txt` is an optional content directory, not a search-ranking mechanism. No social engagement counts or article publication dates are inferred.

## Restoring the previous design

The `backup/pre-refinement-2026-10-29` branch preserves the complete version before the first refinement pass, at commit `6ffcffc79172c8bca8e07a0cf5d1e2f521fcc195`. It can be compared with `main` or used as a restore source without rewriting history.

## Credits

The original theme is based on AcadHomepage, Minimal Mistakes, and Academic Pages. Their MIT license notices are retained. Font Awesome artwork is distributed under its applicable OFL/MIT/CC BY licenses; Academicons artwork is distributed under its OFL license. X and Xiaohongshu marks come from Simple Icons (CC0). Brand marks identify their respective services.
