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

I'm a computer science graduate student at the University of Pennsylvania <img src='./images/upenn.png' style="width: 1.35em;">, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications in AI for Science.

<!-- **[Note] I am actively applying for Fall 2026 CS Ph.D. programs.** -->

My academic interests and journey have been driven by a persistent question: *How* and *Why* do complex systems work?

I first explored this in systems research (OS internal mechanisms), then in HCI (human cognitive principles), and later in IoT and crowdsourcing (collective intelligence), before realizing that **Natural Language Processing** is where I am most excited to pursue these questions.

Since 2024, I have led multiple LLM/VLM research projects as first or primary author and founded my first AI product with over 100K users. These experiences convinced me that language models sit at the intersection of my interests in complex systems, computation, and human cognition. I am captivated not only by what these models can do, but also by the challenge of looking under the hood and adapting them to solve real-world problems using **principled, effective, efficient, and explainable methods.**

This desire has shaped my Master’s studies and motivates my goal of making a long-term contribution to the field. At Penn, I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/). I also collaborate with [Dr. Xiaodong Yu](https://www.xiaodongyu.me/) from AMD GenAI and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) from Peking University.

My research centers on advancing (M)LLMs through ***E**ffective*, ***E**fficient*, and ***E**xplainable* methods. I currently focus on:

- **Unlocking LLMs' Internal Mechanisms**: Designing training and inference-time optimization methods grounded in internal mechanisms (e.g., attention patterns, residuals, activations, representations, and token logits). I am particularly interested in making models more interpretable while also improving their task-agnostic performance.

> **Note.** I do not view training-free methods as an end in themselves, but as byproducts of interpretability-driven analysis that surfaces new insights into model behavior. In the long run, I believe sufficiently scaled training-based approaches can internalize many of these optimization patterns, but current black-box practices often slow our ability to understand and guide them.

- **Pushing Application Boundaries**: Building impactful systems (e.g., for security, code understanding, and scientific automation) with measurable real-world impact. I believe in creating practical solutions that tackle open-ended and underexplored real-world challenges.

> **Note.** I am interested in introducing genuine novelty—new tasks and datasets, new annotation pipelines, new methods, and new evaluation metrics—and in developing insights that generalize beyond a single application domain.

- **Advancing Model Evolution**: Developing data synthesis and curation pipelines to overcome annotation and data collection bottlenecks, and exploring post-training optimization (SFT, RL) and distillation to make smaller models competitive through better data, training, distillation, and pruning.

> **Note.** I am also deeply interested in agentic systems and model self-evolution. As AI-generated content increasingly dominates the web, I aim to understand how models can continually evolve and acquire new capabilities by learning from their own generated outputs.

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we build AI-driven price tracking, LLM-based product analysis, and recommendation systems for e-commerce.

I serve as a reviewer for top-tier venues including **ACL**, **CVPR**, **AAAI**

All NLP work listed below was completed in 2025-2026.
You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar</a>.

{% include_relative includes/future.md %}

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}
