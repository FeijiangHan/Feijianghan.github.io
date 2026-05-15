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

<style>
/* ─── ① Typewriter cursor ─── */
.tw-cursor { display: inline-block; animation: tw-blink .8s step-end infinite; }
.tw-cursor::after { content: '|'; }
@keyframes tw-blink { 50% { opacity: 0; } }

/* ─── ② Scroll fade-in ─── */
.fi-hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .6s ease, transform .55s ease;
  will-change: opacity, transform;
}
.fi-visible { opacity: 1 !important; transform: translateY(0) !important; }

/* ─── ③ Smooth <details> ─── */
details > summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: .45em;
  padding: .4em 0;
  user-select: none;
}
details > summary::-webkit-details-marker,
details > summary::marker { display: none; content: ''; }
details > summary::before {
  content: '▶';
  font-size: .6em;
  color: #5B6E91;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
  flex-shrink: 0;
}
details[open] > summary::before { transform: rotate(90deg); }
details > div {
  overflow: hidden;
  transition: max-height .42s cubic-bezier(.4,0,.2,1), opacity .35s ease;
}
</style>

I am an incoming CS Ph.D. student at the University of Maryland <img src='./images/umd.png' style="width: 1.35em;">, where I will be advised by [Prof. Furong Huang](https://furong-huang.com/). I received my master's degree from the University of Pennsylvania <img src='./images/upenn.png' style="width: 1.35em;">, where I worked with [Prof. Chris Callison-Burch](https://www.cis.upenn.edu/~ccb/), [Prof. Lyle Ungar](https://www.cis.upenn.edu/~ungar/), [Delip Rao](https://deliprao.com/), and [Dr. Xiaodong Yu](https://www.xiaodongyu.me/).

**Goal:** Build mechanism-guided AI systems that can understand the world, improve themselves, and still remain understandable and controllable to people. 

**Research Interest:** {LLMs, VLMs, VLAs, Cognitive Science}

**Research Question:** How can we more accurately understand models (e.g., how knowledge is stored, how training dynamics shape representations, how fine-tuning changes behavior, how attention, representations, and circuits interact)? Can these insights serve as first principles for designing better AI systems (e.g., better training, collaboration, and self-evolution)?

My work spans two complementary directions:


<div style="display: flex; gap: 2em; align-items: flex-start; margin: 2em 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px; max-width: 500px;">
    <img src="/images/research-pipeline.png" alt="Research Pipeline: Effective • Efficient • Explainable" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.5em; color: #666; font-size: 0.9em; font-style: italic; text-align: center;">From understanding → to reliable impact → to continual improvement</p>
  </div>
  <div style="flex: 1; min-width: 300px;">
    <ul style="list-style: none; padding-left: 0; margin: 0;">
      <li style="margin-bottom: 1.5em;">
        <strong>1. Mechanism-driven Understanding and Optimization</strong>: I study the internals of LLMs and VLMs. I believe interpretability should help us optimize and control models, not just describe them after the fact. Recent work includes understanding why attention sinks emerge and how to exploit them (<a href="https://arxiv.org/abs/2505.11739">ZeroTuning, ICLR 2026</a>), diagnosing comprehension failures through the lens of attention (<a href="https://arxiv.org/abs/2504.09402v2">SSR, ICASSP 2026</a>), and building the first unified actionable framework for actionable MI (<a href="https://arxiv.org/abs/2601.14004">Locate, Steer, and Improve, ACL 2026</a>).<br>
        <!-- <span style="color: red;">(More: <a href="#why-i-care-about-interpretability" style="color: red;">Why I care about interpretability</a>)</span> -->
         <span style="font-size: 0.95em; color: #6B7280;">
          (<a href="#why-i-care-about-interpretability" style="color: #5B6E91;">Why I care about interpretability</a>)
        </span>
      </li>
      <li>
        <strong>2. Model Adaptation and Alignment</strong>: I adapt foundation models into domain experts for settings where general models still struggle. Recent work includes the first fully LaTeX-derived layout annotation pipeline for large-scale document understanding (<a href="https://www.cis.upenn.edu/~ccb/publications/latex2layout.pdf">LaTeX2Layout, AAAI 2026</a>), LLM-based systems for million-token malicious code analysis (<a href="https://arxiv.org/abs/2504.13811v3">WebShell Detection, COLM 2025</a>; <a href="https://arxiv.org/abs/2512.05288">WebShell Classification, AAAI 2026</a>), and efficient and effective verifier for scientific claim verification (<a href="https://arxiv.org/abs/2604.01652">ThinknCheck, NLDB 2026</a>).<br>
        <span style="font-size: 0.95em; color: #6B7280;">
          (<a href="#why-i-care-about-model-adaptation" style="color: #5B6E91;">Why I care about model adaptation</a>)
        </span>
      </li>
    </ul>
  </div>
</div>

I am also the co-founder of [Savable Koupon AI](https://www.koupon.ai/), where we work on AI-powered price tracking, product analysis, and recommendation systems for e-commerce. I also serve as a reviewer for conferences including **ICLR**, **ICML**, **ACL**, **CVPR**, **COLM**, and **AAAI**.

<!-- You can find my publications on <a href='https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ'> Google Scholar</a>. -->

I enjoy mentoring undergraduate and master's students on research projects. I also offer free guidance to Chinese students applying to master's and PhD programs in the US — feel free to check out my [Xiaohongshu](https://www.xiaohongshu.com/user/profile/5f96bb470000000001009db4){:target="_blank"} where I share application tips and research advice.

Feel free to reach out for collaboration or just to say hi. Email me at feijianghan [at] gmail [dot] com (it's <span id="contact-local-time" data-timezone="{{ site.contact_timezone | default: 'America/New_York' }}">—</span> for me right now).


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

<script>
document.addEventListener('DOMContentLoaded', function () {

  /* ══ ① Typewriter — bio opening paragraph ══ */
  !function () {
    var anchor = document.getElementById('about-me');
    if (!anchor) return;
    var el = anchor.nextElementSibling;
    while (el && el.tagName !== 'P') el = el.nextElementSibling;
    if (!el) return;

    // Tokenize innerHTML into chars vs. HTML tags vs. entities
    function tokenize(html) {
      var t = [], i = 0, end;
      while (i < html.length) {
        if (html[i] === '<') {
          end = html.indexOf('>', i);
          if (end < 0) { t.push({ h: 0, v: html[i++] }); continue; }
          t.push({ h: 1, v: html.slice(i, end + 1) }); i = end + 1;
        } else if (html[i] === '&') {
          end = html.indexOf(';', i);
          if (end < 0) { t.push({ h: 0, v: html[i++] }); continue; }
          t.push({ h: 0, v: html.slice(i, end + 1) }); i = end + 1;
        } else {
          t.push({ h: 0, v: html[i++] });
        }
      }
      return t;
    }

    var tokens = tokenize(el.innerHTML);
    el.innerHTML = '<span class="tw-t"></span><span class="tw-cursor" aria-hidden="true"></span>';
    var txt = el.querySelector('.tw-t'), cur = el.querySelector('.tw-cursor');
    var i = 0, buf = '';

    function step() {
      if (i >= tokens.length) {
        txt.innerHTML = buf;
        setTimeout(function () { cur.style.animation = 'none'; cur.style.opacity = 0; }, 1800);
        return;
      }
      // HTML tags appear instantly; chars appear one at a time
      while (i < tokens.length && tokens[i].h) buf += tokens[i++].v;
      if (i < tokens.length) buf += tokens[i++].v;
      txt.innerHTML = buf;
      setTimeout(step, 18);
    }
    setTimeout(step, 350);
  }();

  /* ══ ② Scroll fade-in for sections and paper cards ══ */
  !function () {
    if (!window.IntersectionObserver) return;
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('fi-visible');
        e.target.classList.remove('fi-hidden');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.07 });

    Array.from(document.querySelectorAll('h1, h2, .paper-box, details')).forEach(function (el) {
      // Skip navigation, sidebar, and masthead elements
      if (el.closest('nav, header, .masthead, .sidebar')) return;
      // Skip elements already visible in the initial viewport
      if (el.getBoundingClientRect().top <= vh) return;
      el.classList.add('fi-hidden');
      io.observe(el);
    });
  }();

  /* ══ ③ Smooth <details> expand / collapse ══ */
  document.querySelectorAll('details').forEach(function (det) {
    var sum = det.querySelector('summary'), con = det.querySelector('div');
    if (!sum || !con) return;

    // Set initial state without transition flash
    con.style.maxHeight = det.open ? con.scrollHeight + 'px' : '0';
    con.style.opacity   = det.open ? '1' : '0';

    sum.addEventListener('click', function (e) {
      e.preventDefault();
      if (det.open) {
        // ── Closing ──
        con.style.maxHeight = con.scrollHeight + 'px';
        requestAnimationFrame(function () {
          con.style.maxHeight = '0';
          con.style.opacity   = '0';
        });
        con.addEventListener('transitionend', function h(ev) {
          if (ev.propertyName !== 'max-height') return;
          det.removeAttribute('open');
          con.removeEventListener('transitionend', h);
        });
      } else {
        // ── Opening ──
        det.setAttribute('open', '');
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            con.style.maxHeight = con.scrollHeight + 'px';
            con.style.opacity   = '1';
          });
        });
        con.addEventListener('transitionend', function h(ev) {
          if (ev.propertyName !== 'max-height') return;
          con.style.maxHeight = 'none'; // allow content to reflow freely
          con.removeEventListener('transitionend', h);
        });
      }
    });
  });

});
</script>

{% include_relative includes/news.md %}

# Why I'm excited about these problems

<span id="why-i-care-about-interpretability"></span>
<details>
<summary><strong>Why I care about interpretability</strong></summary>
<div markdown="1">

TLDR: I care about explanations because they can do two things: (1) help us trust models in practice, (2) help us design better models without relying only on trial and error.

For me, interpretability starts with curiosity. I like looking at a model and asking: why did that happen?

There is a small joy in that moment. It feels a bit like watching insects as a kid. You stare for long enough, something weird happens, and suddenly there is a pattern you did not see before.

More practically, interpretability also serves a long-term goal: building AI systems that are genuinely reliable, possibly all the way to AGI or even ASI.

- If scaling eventually leads to AGI, we may get extremely capable black-box systems. Then the key question becomes safety and alignment. How do we ensure a superintelligent model consistently acts in good faith and does not quietly deceive people or cause harm?
- If scaling alone is not enough, interpretability becomes a scientific problem. Why do these models work at all? What actually drives their behavior? Which parts come from data, architecture, training dynamics, or post-training?

I often think about how physics matured. First came careful observations (Tycho Brahe). Then hypotheses (Kepler). Then principles (Newton). AI has made huge empirical progress, and I really like the current mechanistic interpretability line of work: logit lens analyses, sparse autoencoders, circuit discovery, and the recent work from Anthropic. But we are still far from that Newton stage.

The questions I want to ask are closer to training dynamics and model architecture. Why do compositional features and circuits appear after training? Why do we sometimes see sparsity, low-rank structure, or cleanly separated factors inside a model? Can we explain these outcomes from gradient-based learning, instead of only opening the model after training and collecting evidence?

This is why I like papers such as [Learning Dynamics of LLM Finetuning](https://openreview.net/forum?id=tPNHOoZFl9) and [Why DPO is a Misspecified Estimator and How to Fix It](https://openreview.net/forum?id=btEiAfnLsX). They try to explain concrete failure modes in post-training, such as why SFT can increase hallucination and why DPO can degrade over time.

My hope is that interpretability can slowly move from biology-style observation to physics-style reasoning. 
In the near term, I care most about making interpretability actionable. A good explanation should help us localize the issue, steer the behavior, and improve the model.

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

The other question I keep coming back to is adaptation.

Scaling has worked, but the returns may slow down. It is unlikely that every new GPT-n will feel as dramatic as earlier leaps. At the same time, we have already had LLMs in the real world for several years, yet there are still many specialized tasks they cannot do well. Pretraining will never perfectly cover every niche, workflow, or kind of expertise.

So I care about a practical question: how do we turn a strong base model into a system that is actually useful for a specific need?

I think about this in two layers, as illustrated below:

<div style="margin: 2em 0; text-align: center;">
  <img src="/images/model_adaptation_overview.png" alt="Model Adaptation Overview" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <p style="margin-top: 0.8em; color: #666; font-size: 0.9em; font-style: italic; max-width: 900px; margin-left: auto; margin-right: auto;">Novelty in Model Adaptation: Task-Specific vs Task-Agnostic Approaches</p>
</div>

The first layer is the general adaptation pipeline. Rich Sutton's [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) still feels relevant in the LLM era: methods that make good use of compute, search, and learning tend to win over hand-crafted priors. With that in mind, I want to improve the task-agnostic pipeline. That includes post-training methods like SFT, RL, and distillation; inference efficiency methods such as quantization, pruning, layer skipping, and routing; and system components like retrieval, evaluation, and benchmarks, because the workflow around a model often matters as much as the model itself. As these external workflows (aka 'Harness') become more important, I am also increasingly interested in agent systems.

The second layer is taking these tools into real domains and making them work end to end. This idea is not new. It was already important in the BERT era, and it is still important now. Beyond popular areas like coding and document understanding, I think many domains that depend on careful human judgment could benefit from LLM-based specialists. Malware and virus detection are good examples.

Some people see this direction as just engineering because it often starts with data, training, and systems. I am drawn to it because I believe that kind of engineering can carry real scientific novelty.

Sometimes the novelty lies in how you get data when data is scarce. Sometimes it lies in how you design synthetic data that teaches the right behavior. Sometimes it lies in how you change representations or architectures when the base model cannot capture a key dependency. Sometimes it lies in how a new industrial need becomes a new research question.

In the long run, I am optimistic about a system view of intelligence. Instead of relying only on one monolithic model, we may build many strong and efficient specialists, then let them collaborate. That kind of system could be easier to adapt, easier to maintain, and easier to inspect.

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