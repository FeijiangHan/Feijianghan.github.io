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

I'm a Computer Science Master's student at the University of Pennsylvania<img src='./images/upenn.png' style="width: 1.35em;">, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications. **I'm graduating in Fall 2026 and currently applying for Ph.D. programs.**

I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/) at the University of Pennsylvania. I also collaborate with [Xiaodong Yu](https://www.xiaodongyu.me/) from AMD GenAI and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) at Peking University.

My journey has been hands-on and interdisciplinary: I started with backend engineering (C++ 2021), then moved into high-performance computing (HPC 2022-2023) and systems optimization, and then shifted toward frontend development and HCI/visualization research (2023). In my senior year (2024), I fell in love with NLP, and throughout my master's program (2025), I have been working full-time on LLMs. Most of the NLP work listed below was completed in this and the previous year.

My research centers on advancing Large Language Models (LLMs) and Multimodal LLMs through approaches that are ***E**ffective*, ***E**fficient*, and ***E**xplainable*. I currently focus on:

- **Unlocking LLMs' Internal Mechanisms**: Designing training-free & inference-time optimization methods grounded in attention patterns, activations, representations, token logits, and prompting mechanisms. I'm particularly interested in making models more interpretable while improving their performance (Where + What + How + Why)
- **Pushing Application Boundaries**: Building impactful systems in security, code understanding, and scientific automation, with measurable real-world outcomes. I believe in creating practical solutions that address open-end and unexplored real-world challenges.
- **Advancing Model Evolution**: Developing data synthesis and curation pipelines to overcome annotation & data collection bottlenecks, and exploring post-training optimization (SFT, RL) and distillation to make smaller models competitive (data, training, distillation, pruning)

Previously, I worked on reinforcement learning in crowdsensing systems and contributed to HCI research, which shaped my perspective on building practical AI solutions. This experience led me to co-found [Savable Koupon AI](https://www.koupon.ai/), where we're revolutionizing e-commerce through AI-powered price tracking, LLM-based product analysis, and intelligent recommendation systems.

You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>`Google Scholar`</a>.

{% include_relative includes/future.md %}

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}
