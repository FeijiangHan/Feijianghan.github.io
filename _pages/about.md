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

I'm a Computer Science Master's student at the University of Pennsylvania<img src='./images/upenn.png' style="width: 1.35em;">, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications (AI4Science).
**[Note] I am actively applying for Ph.D. programs for Fall 2026 admission.**

At Penn, I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/). I also collaborate with [Dr. Xiaodong Yu](https://www.xiaodongyu.me/) from AMD GenAI and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) from Peking University.

My journey through diverse areas of computer science: Backend Engineering (C++, 2021) -> High-Performance Computing (with [Prof. Xu Liu, NCSU](https://xl10.github.io/), 2022-2023) -> Human-Computer Interaction (with [Prof. Ying Zhao, CSU](https://faculty.csu.edu.cn/zhaoying/en/index.htm), 2023-2024) -> IoT & Reinforcement Learning (with [Prof. Anfeng Liu, CSU](https://faculty.csu.edu.cn/liuanfeng/en/index.htm), 2023-2024). In my senior year (2024), I fell in love with NLP and have since dedicated my master's program to research on LLMs and VLMs. All NLP work listed below was completed in 2024-2025.

My research centers on advancing LLMs and Multimodal LLMs through ***E**ffective*, ***E**fficient*, and ***E**xplainable* methods. I currently focus on:

- **Unlocking LLMs' Internal Mechanisms**: Designing training-free & inference-time optimization methods grounded in attention patterns, activations, representations, token logits, and prompting mechanisms. I'm particularly interested in making models more interpretable while improving their performance (Where + What + How + Why)
- **Pushing Application Boundaries**: Building impactful systems in security, code understanding, and scientific automation, with measurable real-world outcomes. I believe in creating practical solutions that address open-end and unexplored real-world challenges.
- **Advancing Model Evolution**: Developing data synthesis and curation pipelines to overcome annotation & data collection bottlenecks, and exploring post-training optimization (SFT, RL) and distillation to make smaller models competitive (data, training, distillation, pruning)

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we build AI-driven price tracking, LLM-based product analysis, and recommendation systems for e-commerce.

You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar</a>.

{% include_relative includes/future.md %}

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}
