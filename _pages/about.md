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

I'm a Computer Science Master's student at the University of Pennsylvania<img src='./images/upenn.png' style="width: 1.35em;">, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications in AI for Science.
<!-- **[Note] I am actively applying for Fall 2026 CS Ph.D. programs.** -->

My academic interests and journey have been driven by a persistent question: *How* and *Why* do complex systems work?

I have explored this across systems (OS internals with [Prof. Xu Liu, NCSU](https://xl10.github.io/)), HCI/Visualization (human cognition with [Prof. Ying Zhao](https://faculty.csu.edu.cn/zhaoying/en/index.htm)), and IoT/Crowdsourcing (collective intelligence with [Prof. Anfeng Liu](https://faculty.csu.edu.cn/liuanfeng/en/index.htm)). This consistent search for an underlying method, whether in machines or the human mind, has ultimately led me to **natural language processing (NLP)**.

Since mid-2024, I have led multiple LLM/VLM projects resulting in six NLP papers and founded my first AI product with over 100K users. These experiences convinced me that language models sit at the intersection of my interests in complex systems, computation, and human cognition. I am captivated not only by what these models can do, but also by the challenge of looking under the hood and adapting them to solve real-world problems using **principled, effective, efficient, and explainable methods**.

At Penn, I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/). I also collaborate with [Dr. Xiaodong Yu](https://www.xiaodongyu.me/) from AMD GenAI and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) from Peking University.

My research centers on advancing LLMs and Multimodal LLMs through ***E**ffective*, ***E**fficient*, and ***E**xplainable* methods. I currently focus on:

- **Unlocking LLMs' Internal Mechanisms**: Designing training-free & inference-time optimization methods grounded in attention patterns, activations, representations, token logits, and prompting mechanisms. I'm particularly interested in making models more interpretable while improving their performance. **I view training-free methods not as an end in themselves, but as byproducts of interpretability-driven analysis that surfaces new insights into model behavior.** In the long run, I believe sufficiently scaled training-based approaches can internalize many of these optimization patterns, but current black-box practices often slow down our ability to understand and guide them.
- **Pushing Application Boundaries**: Building impactful systems in security, code understanding, and scientific automation, with measurable real-world outcomes. I believe in creating practical solutions that address open-end and unexplored real-world challenges.
- **Advancing Model Evolution**: Developing data synthesis and curation pipelines to overcome annotation & data collection bottlenecks, and exploring post-training optimization (SFT, RL) and distillation to make smaller models competitive (data, training, distillation, pruning)

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we build AI-driven price tracking, LLM-based product analysis, and recommendation systems for e-commerce.

I serve as a reviewer for top-tier venues including **ACL**, **CVPR**, and **AAAI**.

All NLP work listed below was completed in 2024-2025.
You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar</a>.

{% include_relative includes/future.md %}

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}
