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

I'm a computer science graduate student at the University of Pennsylvania `<img src='./images/upenn.png' style="width: 1.35em;">`, working on Large Language Models (LLMs), Vision-Language Models (VLMs), and NLP applications in AI for Science.

At Penn, I'm fortunate to be advised by [Prof. Chris Callison-Burch](https://www.linkedin.com/in/chris-callison-burch/), [Prof. Lyle Ungar](http://linkedin.com/in/lyle-ungar-b061474/), and [Delip Rao](https://www.linkedin.com/in/deliprao/). I also collaborate with [Dr. Xiaodong Yu](https://www.xiaodongyu.me/) (AMD GenAI) and [Prof. Yunhuai Liu](https://cs.pku.edu.cn/info/1234/2111.htm) (Peking University).

My research centers on advancing (M)LLMs with **Effective, Efficient, and Explainable** methods. I care about building models that work better, run cheaper, and fail more predictably. Just as importantly, I want to understand why they work, when they break, and how we can steer them with confidence.

Today, a lot of progress comes from large-scale training and black-box iteration. It works, but it often hides the reasons behind progress and makes reliability harder to reason about. At the same time, scaling alone is starting to feel more incremental. That's why I focus on two complementary directions:

<div style="display: flex; gap: 2em; align-items: flex-start; margin: 2em 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px; max-width: 500px;">
    <img src="/images/research-pipeline.png" alt="Research Pipeline: Effective • Efficient • Explainable" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.5em; color: #666; font-size: 0.9em; font-style: italic; text-align: center;">From understanding → to reliable impact → to continual improvement</p>
  </div>
  <div style="flex: 1; min-width: 300px;">
    <ul style="list-style: none; padding-left: 0; margin: 0;">
      <li style="margin-bottom: 1.5em;">
        <strong>1. Mechanism-driven Understanding (Interpretability + optimization)</strong>: I study what is happening inside LLMs and VLMs, and how those internal signals can be used to improve models. I look at attention patterns, residual streams, activations, representations, and logits. My goal is not interpretability as a visualization layer. My goal is interpretability that changes how we optimize and control models.<br>
        <span style="font-size: 0.9em;">(More: <a href="#why-i-care-about-interpretability">Why I care about interpretability</a>)</span>
      </li>
      <li>
        <strong>2. Model Adaptation (From base models to real experts)</strong>: I work on adapting foundation models to specific domains and building systems with measurable impact. I'm interested in task-agnostic adaptation pipelines where we can inject real scientific novelty, including post-training (SFT, RL, distillation), efficiency methods (quantization, pruning, layer skipping, routing), and system-level tooling like retrieval and evaluation. I also like going deep into real domains, where novelty often comes from new tasks, synthetic data, and sometimes further architecture optimization.<br>
        <span style="font-size: 0.9em;">(More: <a href="#why-i-care-about-model-adaptation">Why I care about model adaptation</a>)</span>
      </li>
    </ul>
  </div>
</div>

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we build AI-driven price tracking, LLM-based product analysis, and recommendation systems for e-commerce. I serve as a reviewer for top-tier venues including **ICLR**, **ACL**, **CVPR**, **AAAI**.

You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'>Google Scholar</a>.

<!-- {% include_relative includes/future.md %} -->

{% include_relative includes/news.md %}

# Why I'm excited about these problems

`<span id="why-i-care-about-interpretability">`

## Why I care about interpretability

Interpretability, for me, begins with curiosity. I like watching a system and asking: *why did that happen?* It feels like being a kid observing insects. You stare long enough, and suddenly a pattern shows up. That moment of “wait, that’s weird” makes me happy.

More rationally, interpretability also serves a long-term goal: building AI systems that are truly reliable, possibly all the way to AGI or even ASI.

- If scaling eventually leads to AGI, we may get extremely capable black-box systems. Then the key question becomes safety and alignment. How do we ensure a superintelligent model consistently acts in good faith, and does not quietly deceive people to do harm?
- If scaling alone still fails to reach AGI, we will need deeper answers. Why do these models work at all? What factors truly drive their performance?

Good explanations help us trust models in practice. They also guide us to design better models based on principles, not just trial and error.

I often think about how physics matured. First came careful observations (Tycho Brahe). Then hypotheses (Kepler). Then principles (Newton). In AI, we have made huge empirical progress, many interpretability papers open a trained model and hunt for circuits. I respect that work. But we still lack “Newton-style” first principles.

I want to ask questions that start from the training process and the architecture.

Why do compositional features and circuits appear at all? Why do we sometimes see sparsity, low-rank structure, or neatly separated factors after training? Can we connect those outcomes to the equations of gradient-based learning, instead of only collecting evidence after the fact?

My hope is that interpretability can slowly move from biology-style observation to physics-style reasoning. If that shift happens, it will feel like a real change of era.

`<span id="why-i-care-about-model-adaptation">`

## Why I care about model adaptation

I also spend a lot of energy thinking about adaptation. Partly because I do not believe “general” intelligence comes for free.

Scaling has worked, but the returns can slow down. It is unlikely that every new GPT-n will feel as shocking as the earlier jump from GPT-4. At the same time, we have already had LLMs in the real world for several years, but there are still many specialized tasks they cannot do well. Pretraining will never perfectly cover every niche, every workflow, or every kind of expertise.

So I care about a practical question. How do we turn a strong base model into a model that is genuinely useful for a specific need?

I think about this in two layers.

First, I want to improve the general “base-to-expert” pipeline. That includes post-training methods like SFT, RL, and distillation. It also includes inference efficiency, such as quantization, pruning, layer skipping, and routing. I also care about retrieval, evaluation, and benchmarks, because the workflow around a model often matters as much as the model itself.

Second, I want to take these tools into real domains and make them work end-to-end. This idea is not new. It was central in the BERT era, and it is still central now. Beyond popular areas like coding and document analysis, I think many domains that rely on careful human judgment could benefit from LLM-based specialists. Malware or virus detection is one example.

Some people see this direction as “just engineering.” I get why. It often involves messy data and lots of iteration. But I am drawn to it because I believe engineering can carry real scientific novelty.

Sometimes the novelty is how you get data when data is scarce. Sometimes it is how you design synthetic data that teaches the right behavior. Sometimes it is how you change representations or architectures when the base model cannot capture a key dependency. Sometimes it is how a new industrial need becomes a new research question.

In the long run, I am optimistic about a system view of intelligence. If we can build many strong, efficient specialists, and let them collaborate as agents, we may reach broad capability in a way that is easier to maintain, easier to adapt, and easier to interpret than betting everything on a single monolithic model.

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}
