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

I am an incoming PhD student in the Department of Computer Science at the University of Maryland <img src='./images/umd.png' style="width: 1.35em;">, where I will be advised by [Prof. Furong Huang](https://furong-huang.com/). Previously, I earned my master's degree in computer science from the University of Pennsylvania <img src='./images/upenn.png' style="width: 1.35em;">, where I had the privilege of collaborating with [Prof. Chris Callison-Burch](https://www.cis.upenn.edu/~ccb/), [Prof. Lyle Ungar](https://www.cis.upenn.edu/~ungar/), [Delip Rao](https://deliprao.com/), and [Dr. Xiaodong Yu](https://www.xiaodongyu.me/).

My research centers on advancing (M)LLMs with **Effective, Efficient, and Explainable** methods. I care about building models that work better, run cheaper, and fail more predictably. I want to understand why they work, when they break, and how we can steer them with confidence.

Today, a lot of progress comes from large-scale black-box scaling. It works, but it often hides the reasons behind progress and makes reliability harder to reason about. At the same time, scaling alone is starting to feel more incremental. That's why I focus on two complementary directions:

<div style="display: flex; gap: 2em; align-items: flex-start; margin: 2em 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px; max-width: 500px;">
    <img src="/images/research-pipeline.png" alt="Research Pipeline: Effective • Efficient • Explainable" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.5em; color: #666; font-size: 0.9em; font-style: italic; text-align: center;">From understanding → to reliable impact → to continual improvement</p>
  </div>
  <div style="flex: 1; min-width: 300px;">
    <ul style="list-style: none; padding-left: 0; margin: 0;">
      <li style="margin-bottom: 1.5em;">
        <strong>1. Mechanism-driven Understanding (Interpretability + optimization)</strong>: I study what is happening inside LLMs and VLMs, and how those internal signals can be used to improve them. I look at attention patterns, residual streams, activations, representations, and logits. My goal is not interpretability as a visualization layer, but interpretability that changes how we optimize and control models.<br>
        <!-- <span style="color: red;">(More: <a href="#why-i-care-about-interpretability" style="color: red;">Why I care about interpretability</a>)</span> -->
         <span style="font-size: 0.95em; color: #6B7280;">
          (<a href="#why-i-care-about-interpretability" style="color: #5B6E91;">Why I care about interpretability</a>)
        </span>
      </li>
      <li>
        <strong>2. Model Adaptation/Alignment (From base models to real experts)</strong>: I work on adapting foundation models to specific domains and building systems with measurable impact. I'm interested in task-agnostic adaptation pipelines where we can introduce real scientific novelty, including post-training (SFT, RL, self-distillation), efficiency methods (quantization, pruning, layer skipping, routing), and system-level tools like retrieval and evaluation. I also like going deep into specific scientific problems, where novelty often comes from new tasks, synthetic data, automated agent systems, and sometimes further architectural optimization.<br>
        <span style="font-size: 0.95em; color: #6B7280;">
          (<a href="#why-i-care-about-model-adaptation" style="color: #5B6E91;">Why I care about model adaptation</a>)
        </span>
      </li>
    </ul>
  </div>
</div>

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we build AI-driven price tracking, LLM-based product analysis, and recommendation systems for e-commerce. I serve as a reviewer for top conferences like **ICLR**, **ICML**, **ACL**, **CVPR**, **COLM**, **AAAI**.

<!-- You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'> Google Scholar</a>. -->

Feel free to reach out for collaboration or just to say hi. Shoot me an email: feijianghan@gmail.com (it's <span id="contact-local-time" data-timezone="{{ site.contact_timezone | default: 'America/New_York' }}">—</span> for me right now).

<script>
(function() {
  var el = document.getElementById('contact-local-time');
  if (!el) return;
  var tz = el.getAttribute('data-timezone') || 'America/New_York';
  function update() {
    try {
      var formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      el.textContent = formatter.format(new Date());
    } catch (e) {
      el.textContent = '—';
    }
  }
  update();
  setInterval(update, 60000);
})();
</script>

{% include_relative includes/news.md %}

# Why I'm excited about these problems

<span id="why-i-care-about-interpretability"></span>
<details>
<summary><strong>Why I care about interpretability</strong></summary>
<div markdown="1">

Interpretability, for me, begins with curiosity. I like watching a system and asking: *why did that happen?* It feels a bit like being a kid observing insects. You stare long enough, and suddenly a pattern appears. That moment of “wait, that’s weird” makes me happy.

More practically, interpretability also serves a long-term goal: building AI systems that are genuinely reliable, possibly all the way to AGI or even ASI.

- If scaling eventually leads to AGI, we may get extremely capable black-box systems. Then the key question becomes safety and alignment. How do we ensure a superintelligent model consistently acts in good faith and does not quietly deceive people or cause harm?
- If scaling alone still fails to reach AGI, we will need deeper answers. Why do these models work at all? What factors truly drive their performance?

Good explanations help us trust models in practice. They also help us design better models based on principles, not just trial and error.

I often think about how physics matured. First came careful observations (Tycho Brahe). Then hypotheses (Kepler). Then principles (Newton). In AI, we have made huge empirical progress, and many interpretability papers open up trained models and look for circuits. I love and respect that line of work, like logit-lens analyses for LLMs/VLMs, sparse autoencoders (SAEs), and recent mechanistic interpretability work from Anthropic. But we still lack "Newton-style" first principles.

I want to ask questions that start at the level of training dynamics and model architecture.

Why do compositional features and circuits appear at all? Why do we sometimes see sparsity, low-rank structure, or neatly separated factors after training? Can we connect those outcomes to the dynamics of gradient-based learning, instead of only collecting evidence after the fact?

For example, I like the ICLR 2025 oral paper [Learning Dynamics of LLM Finetuning](https://openreview.net/forum?id=tPNHOoZFl9) and ICLR 2026 oral paper [Why DPO is a Misspecified Estimator and How to Fix It](https://openreview.net/forum?id=btEiAfnLsX), which helps explain why SFT can lead to hallucinations and why DPO performance may degrade over time.

My hope is that interpretability can slowly move from biology-style observation to physics-style reasoning. If that shift happens, it will feel like a real change of era.

In the near term, I believe a key priority is turning insights into actionable model improvements, so interpretability becomes more than analysis for its own sake.

<div style="margin: 2em 0; text-align: center;">
  <img src="/images/llm_interpretability_overview.png" alt="Actionable Mechanistic Interpretability Framework" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <p style="margin-top: 0.8em; color: #666; font-size: 0.9em; font-style: italic; max-width: 900px; margin-left: auto; margin-right: auto;">Actionable Mechanistic Interpretability: From Localizing and Steering to Model Improvement<br><span style="font-size: 0.85em;">(Figure from the survey "Locate, Steer, and Improve: A Practical Survey of Actionable Mechanistic Interpretability in Large Language Models")</span></p>
</div>

</div>
</details>

<span id="why-i-care-about-model-adaptation"></span>
<details>
<summary><strong>Why I care about model adaptation</strong></summary>
<div markdown="1">

I also spend a lot of time thinking about adaptation.

Scaling has worked, but the returns may slow down. It is unlikely that every new GPT-n will feel as dramatic as earlier leaps. At the same time, we have already had LLMs in the real world for several years, yet there are still many specialized tasks they cannot do well. Pretraining will never perfectly cover every niche, workflow, or kind of expertise.

So I care about a practical question: how do we turn a strong base model into a system that is genuinely useful for a specific need?

I think about this in two layers, as illustrated below:

<div style="margin: 2em 0; text-align: center;">
  <img src="/images/model_adaptation_overview.png" alt="Model Adaptation Overview" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <p style="margin-top: 0.8em; color: #666; font-size: 0.9em; font-style: italic; max-width: 900px; margin-left: auto; margin-right: auto;">Novelty in Model Adaptation: Task-Specific vs Task-Agnostic Approaches</p>
</div>

Rich Sutton's ["The Bitter Lesson"](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) keeps proving true in the LLM era: general methods that leverage compute, such as search and learning, consistently outperform methods that rely on human priors and hand-crafted knowledge. With that in mind, I want to improve the task-agnostic pipeline. That includes post-training methods like SFT, RL, and distillation; inference efficiency methods such as quantization, pruning, layer skipping, and routing; and system components like retrieval, evaluation, and benchmarks, because the workflow around a model often matters as much as the model itself. As these external workflows (aka 'Harness') become more important, I am also increasingly interested in agent systems.

Second, I want to take these tools into real domains and make them work end to end. This idea is not new; it was central in the BERT era and remains central now. Beyond popular areas like coding and document analysis, I think many domains that rely on careful human judgment could benefit from LLM-based specialists. Malware or virus detection is one example.

Some people see this direction as "just engineering" because it centers on data and training. I am drawn to it because I believe that kind of engineering can carry real scientific novelty.

Sometimes the novelty lies in how you get data when data is scarce. Sometimes it lies in how you design synthetic data that teaches the right behavior. Sometimes it lies in how you change representations or architectures when the base model cannot capture a key dependency. Sometimes it lies in how a new industrial need becomes a new research question.

In the long run, I am optimistic about a system view of intelligence. If we can build many strong, efficient specialists, and let them collaborate as agents, we may reach broad capability in a way that is easier to maintain, easier to adapt, and easier to interpret than betting everything on a single monolithic model.

</div>
</details>

{% include_relative includes/pub.md %}

{% include_relative includes/honors.md %}

<!-- {% include_relative includes/others.md %} -->

{% include_relative includes/notes.md %}

{% include_relative includes/schedule.md %}

# Misc

Beyond research, I enjoy writing and sharing knowledge. I maintain a blog on [Xiaohongshu](https://www.xiaohongshu.com/user/profile/5f96bb470000000001009db4){:target="_blank"} where I share research experiences, lecture summaries, insights, and paper discussions. I find that writing helps me think more clearly and connect with others in the community.

I also practice traditional Chinese martial arts, including [Tai Chi](https://en.wikipedia.org/wiki/Tai_chi){:target="_blank"}, and health qigong practices such as [Mawangdui Daoyin](https://en.wikipedia.org/wiki/Yangsheng_(Daoism)){:target="_blank"}. These practices help me maintain balance and focus, both physically and mentally.