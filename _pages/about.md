---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm a Computer Science Master's student at the University of Pennsylvania, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications. I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/) at the University of Pennsylvania.

My research is dedicated to advancing Large Language Models and Multimodal LLMs through **E**ffective, **E**fficient, and **E**xplainable approaches. I'm particularly focused on:

- **Unlocking LLMs' Internal Mechanisms**: Developing training-free optimization methods by understanding and enhancing attention patterns, representations, logits, and prompting mechanisms
- **Pushing LLM Application Boundaries**: Developing innovative applications and benchmarking in security, code understanding, and scientific research automation
- **Advancing Model Evolution**: Building novel approaches for data synthesis and training optimization

You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar <strong><span id='total_cit'></span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).


# 🔥 News
- *July 2025*: &nbsp;🎉 Paper accepted to **COLM 2025** - "LLMs for WebShell Detection"
- *June 2025*: &nbsp;🎉 Paper accepted to **MOSS@ICML2025** - "ZeroTuning: Enhancing LLMs Without Training"

# 📝 Publications 

{% include paper_list.html %}

# 🎖 Honors and Awards
- *2024* Xiaomi Special Scholarship (Top 10 university-wide)
- *2024* Outstanding Graduate of the Class of 2024
- *2023* National Scholarship for Outstanding Students (Top 5)

# 📖 Education
- *2024.09 - 2026.12 (Expected)*, Master of Science in Computer Science, University of Pennsylvania
- *2020.09 - 2024.06*, Bachelor of Engineering in Computer Science, Peking University

# 💬 Research Experience

# 💬 Internship