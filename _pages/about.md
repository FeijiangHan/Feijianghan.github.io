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

I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/) at the University of Pennsylvania. I also collaborate with [Xiaodong Yu](https://www.xiaodongyu.me/) from AMD and Jianheng Tang and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) at Peking University.

My research is dedicated to advancing Large Language Models and Multimodal LLMs through **E**ffective, **E**fficient, and **E**xplainable approaches. I'm particularly focused on:

- **Unlocking LLMs' Internal Mechanisms**: Developing training-free optimization methods by understanding and enhancing attention patterns, representations, logits, and prompting mechanisms
- **Pushing LLM Application Boundaries**: Developing innovative applications and benchmarking in security, code understanding, and scientific research automation
- **Advancing Model Evolution**: Building novel approaches for data synthesis and training optimization

Previously, I worked on reinforcement learning in crowdsensing systems and contributed to HCI research, which shaped my perspective on building interesting and practical AI solutions. This drive led me to co-found [Savable AI](https://www.savable.ai/)<img src='./images/savableai.png' style="width: 4em;">, where we're developing intelligent systems to revolutionize e-commerce. Our AI technology 1/ discovers and validates the best deals through advanced price tracking, 2/ leverages LLMs to analyze product information and verify coupons, and 3/ powers a smart recommendation system that helps users find exactly what they need at the best price.

You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar</a>.


{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

{% include_relative includes/others.md %}

{% include_relative includes/schedule.md %}