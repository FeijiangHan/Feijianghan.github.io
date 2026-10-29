<span class='anchor' id='publications'></span>

# 📝 Publications 


<div class="publication-controls" id="publication-controls" hidden>
  <div class="publication-views" role="group" aria-label="Publication view">
    <button type="button" class="pv-btn" data-view="highlights" aria-pressed="true">Highlights</button>
    <button type="button" class="pv-btn" data-view="all" aria-pressed="false">All</button>
  </div>
  <div class="pub-filter" role="group" aria-label="Filter publications by topic">
    <button type="button" class="pf-btn" data-filter="all" aria-pressed="true">All topics</button>
    <button type="button" class="pf-btn" data-filter="1" aria-pressed="false">🔮 Mechanistic Interpretability</button>
    <button type="button" class="pf-btn" data-filter="2" aria-pressed="false">🔍 Model Adaptation</button>
    <button type="button" class="pf-btn" data-filter="3" aria-pressed="false">🌟 Earlier Work</button>
  </div>
  <p class="publication-status" id="publication-status" aria-live="polite" aria-atomic="true"></p>
</div>
<p class="publication-empty" id="publication-empty" hidden>No highlighted papers in this topic yet. <button type="button" data-show-all>View all papers in this topic</button>.</p>

<h2 class="interest-heading" data-interest="1">🔮 Research Interest 1: Actionable Mechanistic Interpretability in Large Language Models</h2>

<div class="paper-box" data-paper-id="ica-lens" data-interest="1" data-highlight="{% if site.data.publication-highlights contains 'ica-lens' %}true{% else %}false{% endif %}">

<div class='paper-box-image'>
<div><div class="badge">arXiv 2026</div><a href="https://arxiv.org/abs/2606.11722" target="_blank"><img src='images/ica_example.png' alt="Non-Gaussian interpretable directions in LLM activations" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2606.11722">Non-Gaussianity Reveals Interpretable Directions in Language Models</a></h3>

Sida Liu\*, **Feijiang Han**\*, Sarah Wiegreffe, Furong Huang

[**Paper**](https://arxiv.org/abs/2606.11722) \| [**Code**](https://github.com/liusida/ica-lens-paper) \| [**Website**](https://liusida.github.io/ica-lens-paper/) \| [**Demo**](https://huggingface.co/spaces/EEEAILab/ICAExplorer) \| [**Blog**](https://www.alphaxiv.org/abs/2606.11722) \| [**Video**](/videos/ICA_Lens_explainer_final_captioned.mp4) \| [**X Post**](https://x.com/feijianghan/status/2112654366599504277?s=20) \| [**Hugging Face**](https://huggingface.co/papers/2606.11722)

**Relevant Chinese Blogs (RedNote):** [How This Idea Was Born — A Full Retrospective](https://www.xiaohongshu.com/discovery/item/6a2788ef000000002003b63b?source=webshare&xhsshare=pc_web&xsec_token=YB-efQkinworgcwkutTbIZHdIWjlM4ZUsScM2fsc2AQac=&xsec_source=pc_share) \| [Why I'm Skeptical About the Future of SAEs](https://www.xiaohongshu.com/discovery/item/6a2a34a00000000022022716?source=webshare&xhsshare=pc_web&xsec_token=YBOwlRa_zqd0GcxNPGwJGztNrmrgVuIQ28QpM9zeB1mjY=&xsec_source=pc_share)

**TL;DR.** Interpretable directions in LLM activations leave a non-Gaussian signature. ICA Lens recovers that structure directly, without training another sparse dictionary. Across GPT-2 Small, Gemma 2 2B, and Qwen 3.5 9B Base, the recovered directions capture coherent lexical, syntactic, and semantic patterns, and are competitive with public SAEs on interpretability, sparse reconstruction, concept prediction, and targeted probe perturbation, while fitting in minutes per layer and using 7–43× less memory.

<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="icalens_abstract">
Finding human-interpretable directions in language-model activations is important for understanding and controlling model behavior. These directions are usually discovered through indirect learning objectives such as sparse reconstruction, but it remains unclear what existing statistical structure distinguishes interpretable directions and whether that structure can be used directly for feature discovery. We find that non-Gaussianity provides such a signature: projection distributions of natural-text residual-stream activations along sparse autoencoder (SAE) decoder directions are substantially more non-Gaussian than those along random directions, with most contexts forming a concentrated background and recurring patterns often occupying one tail. This raises a natural question: if interpretable directions tend to have non-Gaussian projection distributions, can we discover them by searching for non-Gaussian directions directly in activation space, without training another sparse dictionary? To test this hypothesis, we introduce ICA Lens, a practical workflow for efficient discovery, reliable annotation, and faithful evaluation of non-Gaussian directions in LLM residual-stream activations. Across GPT-2 Small, Gemma 2 2B, and Qwen 3.5 9B Base, we find that: (1) the recovered non-Gaussian directions capture coherent lexical, syntactic, and semantic patterns under both human and LLM-based evaluation; (2) non-Gaussianity is positively associated with both human-label confidence and automated interpretability; and (3) the resulting coordinates are competitive with SAEs across interpretability, sparse reconstruction, concept prediction, and targeted probe perturbation, while fitting in minutes per layer and using 7–43× less memory. These results show that non-Gaussianity is not merely a statistical property of learned features, but a direct unsupervised signal for discovering interpretable and useful structure in activations.
</div>
</details>

<details class="paper-details paper-video-details">
<summary>🎬 Watch video</summary>
<div class="paper-abstract paper-video" id="icalens_video">
<video controls preload="metadata" style="width: 100%; border-radius: 8px; background: #000;">
<source src="/videos/ICA_Lens_explainer_final_captioned.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<p style="margin: 0.6em 0 0; color: #666; font-size: 0.9em; font-style: italic;">ICA Lens explainer video (with captions) · <a href="https://x.com/feijianghan/status/2112654366599504277?s=20" target="_blank">Discussion on X</a></p>
</div>
</details>
</div>
</div>

<div class="paper-box" data-paper-id="zerotuning" data-interest="1" data-highlight="{% if site.data.publication-highlights contains 'zerotuning' %}true{% else %}false{% endif %}">

<div class='paper-box-image'>
<div><div class="badge">ICLR 2026</div><a href="https://arxiv.org/abs/2505.11739" target="_blank"><img src='images/ZeroTuningcode.png' alt="ZeroTuning Overview" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2505.11739">ZeroTuning: Unlocking the Initial Token&#x27;s Power to Enhance Large Language Models Without Training</a></h3>

**Feijiang Han**, Xiaodong Yu, Jianheng Tang, Delip Rao, Weihua Du, Lyle Ungar

[**Paper**](https://arxiv.org/abs/2505.11739) \| [**Code & Demo**](https://github.com/FeijiangHan/ZeroTuning) \| [**Blog**](https://www.alphaxiv.org/abs/2505.11739) \| [**Poster**](/papers/ZeroTuning_Poster.pdf){:target="_blank"} \| [**Talk**](https://recorder-v3.slideslive.com/?share=107858&s=60dd615f-e5d3-4961-84f9-f95a8016a527)

**TL;DR.** Token-level attention steering can boost frozen LLMs, but prior methods often depend on fragile heuristics to find “important” task tokens. ZeroTuning shows a simpler universal control lever: tune only the initial token (e.g., &lt;BOS&gt;). With tiny head-specific biases on BOS attention logits, we can reshape downstream attention (sharpen/flatten), lower output entropy, and unlock pretrained knowledge—without any parameter updates.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="zerotuning_abstract">
Token-level attention tuning, a class of training-free methods including Post-hoc Attention Steering (PASTA, AutoPASTA) and Attention Calibration (ACT), has emerged as a promising way to improve frozen LLMs with interpretable interventions. However, these methods depend on auxiliary heuristics to identify "important" task-specific tokens, which can introduce bias and limit applicability when token importance is unclear or when using optimized kernels where attention maps are inaccessible. We propose a simpler and more elegant alternative: acting only on the initial token (e.g., &lt;BOS&gt; in LLaMA). We show theoretically that adding lightweight biases to this token's attention logits monotonically controls the entropy of the downstream attention distribution--an effect amplified by its natural function as an attention sink. Our empirical analysis reveals that this tuning process can positively affect LLMs and better unlock their pretrained knowledge, with stronger effects in early layers and distinct scaling preferences across attention heads. Building on these insights, we introduce ZeroTuning: a training-free method that improves LLM performance by applying head-specific attention adjustments to the initial token, requiring zero parameter updates. We present two variants: a supervised mode that calibrates on validation examples, and a novel unsupervised mode that directly minimizes the model's output entropy. Our method requires no KV‑cache or decoding changes, and is kernel‑agnostic (works with SDPA and FlashAttention). The method is lightweight and requires only four lines of modification to the standard LlamaAttention code. It achieves broad gains across 15 datasets and outperforms previous, more complex methods; for instance, with Llama-3.1-8B, it yields relative improvements of 19.9% on classification, 4.5% on question answering, and 2.1% on dialogue. ZeroTuning also works out-of-the-box with quantized inference and maintains its performance improvements with increasing context lengths. Our code and runnable demo are available at https://anonymous.4open.science/r/ZeroTuning.
</div>
</details>
</div>
</div>

<div class="paper-box" data-paper-id="locate-steer-improve" data-interest="1" data-highlight="{% if site.data.publication-highlights contains 'locate-steer-improve' %}true{% else %}false{% endif %}">

<div class='paper-box-image'>
<div><div class="badge">ACL 2026</div><a href="https://arxiv.org/abs/2601.14004" target="_blank"><img src='/images/llm_interpretability_overview.png' alt="Locate, Steer, and Improve" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2601.14004">Locate, Steer, and Improve: A Practical Survey of Actionable Mechanistic Interpretability in Large Language Models</a></h3>

Hengyuan Zhang, Zhihao Zhang, Mingyang Wang, Zunhai Su, Yiwei Wang, Qianli Wang, Shuzhou Yuan, Ercong Nie, Xufeng Duan, **Feijiang Han**, Qibo Xue, Zeping Yu, Chenming Shang, Xiao Liang, Jing Xiong, Hui Shen, Chaofan Tao, Zhengwu Liu, Senjie Jin, Zhiheng Xi, Dongdong Zhang, Sophia Ananiadou, Tao Gui, Ruobing Xie, Hayden Kwok-Hay So, Hinrich Schütze, Xuanjing Huang, Qi Zhang, Ngai Wong

[**Paper**](https://arxiv.org/abs/2601.14004) \| [**Repo**](https://github.com/rattlesnakey/Awesome-Actionable-MI-Survey)

**TL;DR.** This survey reframes mechanistic interpretability as an actionable pipeline, not just a diagnostic tool: first locate where behaviors live, then steer those components, and finally use the intervention to improve alignment, capability, and efficiency in LLMs.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="locate_steer_improve_abstract">
Mechanistic Interpretability (MI) has emerged as a vital approach to demystify the opaque decision-making of Large Language Models (LLMs). However, existing reviews primarily treat MI as an observational science, summarizing analytical insights while lacking a systematic framework for actionable intervention. To bridge this gap, we present a practical survey structured around the pipeline: "Locate, Steer, and Improve." We formally categorize Localizing (diagnosis) and Steering (intervention) methods based on specific Interpretable Objects to establish a rigorous intervention protocol. Furthermore, we demonstrate how this framework enables tangible improvements in Alignment, Capability, and Efficiency, effectively operationalizing MI as an actionable methodology for model optimization. With actionable mechanistic interpretability evolving at a fast pace, we pledge to keep this survey up to date, ensuring it reflects the cutting-edge advances in this area.
</div>
</details>
</div>
</div>

<div class="paper-box" data-paper-id="read-before-you-think" data-interest="1" data-highlight="{% if site.data.publication-highlights contains 'read-before-you-think' %}true{% else %}false{% endif %}">

<div class='paper-box-image'><div><div class="badge">ICASSP 2026</div><a href="https://arxiv.org/abs/2504.09402v2" target="_blank"><img src='images/SSR.png' alt="SSR+" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2504.09402v2">Read Before You Think: Mitigating LLM Comprehension Failures with Step-by-Step Reading</a></h3>

**Feijiang Han**, Hengtao Cui, Licheng Guo, Zelong Wang, Zhiyuan Lyu

[**Paper**](https://arxiv.org/abs/2504.09402v2) \| [**Blog**](https://www.alphaxiv.org/abs/2504.09402v2)

**TL;DR.** Many “reasoning” failures in LLMs are actually comprehension failures—the model misreads the question (semantic misunderstanding), so even Chain-of-Thought can’t reliably help. We introduce Step-by-Step Reading (SSR), a training-free framework that makes models read before they think: parse the question incrementally, keep each reasoning step grounded to the text, and fix backward dependencies via iterative re-contextualization.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="ssr_abstract">
Large Language Models (LLMs) often fail on complex reasoning tasks due to flawed question comprehension, not just flawed logic. This paper presents a systematic investigation into these comprehension failures. Our work yields three key insights: (1) the step-by-step principle, effective for calculation, can be migrated to the reading process to enhance comprehension; (2) increasing the proportion of question-related tokens (e.g., via repetition) succeeds by refocusing attention, a mechanism that can be explicitly controlled; and (3) backward dependencies represent a core bottleneck for decoder-only models that persists even with strong methods like Chain-of-Thought. Based on these findings, we introduce the Step-by-Step Reading (SSR) family of prompts. This multi-stage approach culminates in SSR++, a method specifically engineered to deepen model comprehension by guiding it to parse questions with finer granularity, focus attention on critical tokens, and resolve backward dependencies through iterative re-contextualization. SSR++ sets a new state-of-the-art on multiple reasoning benchmarks, and our analysis confirms it works by directly mitigating semantic misunderstanding. These results demonstrate that guiding how a model reads is a powerful and efficient method for improving its reasoning ability.
</div>
</details>
</div>
</div>


<h2 class="interest-heading" data-interest="2">🔍 Research Interest 2: Model Adaptation</h2>

<div class="paper-box" data-paper-id="webshell-detection" data-interest="2" data-highlight="{% if site.data.publication-highlights contains 'webshell-detection' %}true{% else %}false{% endif %}"> 

<div class='paper-box-image'>
<div>
<div class="badge">COLM 2025</div>
<a href="https://arxiv.org/abs/2504.13811v3" target="_blank"><img src='images/webshell_detection.png' alt="WebShell Detection Framework" class="paper-image-hover" width="100%"></a>
</div>
</div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2504.13811v3">Can LLMs handle WebShell detection? Overcoming Detection Challenges with Behavioral Function-Aware Framework</a></h3>

**Feijiang Han**, Jiaming Zhang, Chuyi Deng, Jianheng Tang, Yunhuai Liu

[**Paper**](https://arxiv.org/abs/2504.13811v3) \| [**Code**](https://github.com/FeijiangHan/LLM-for-Webshell-Detection) \| [**Blog**](https://www.alphaxiv.org/abs/2504.13811v3) \| [**Poster**](/papers/LLM_Webshell_Poster.pdf){:target="_blank"}

**TL;DR.** WebShell detection is hard for LLMs because a server-side script can span millions of tokens while the truly malicious logic is often just a tiny, obfuscated fragment—so naïvely feeding the whole file dilutes the signal and breaks context limits. We provide the first comprehensive evaluation of LLMs for WebShell detection and introduce BFAD, a behavior-driven, function-aware pipeline that helps LLMs focus on the most indicative code, yielding a +13.82% average F1 improvement and pushing both large and small LLMs toward (or beyond) prior SOTA.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="webshell_detection_abstract">
WebShell attacks, where malicious scripts are injected into web servers, pose a significant cybersecurity threat. Traditional machine learning and deep learning methods are often hampered by challenges such as the need for extensive training data, catastrophic forgetting, and poor generalization. Recently, Large Language Models (LLMs) have emerged as a powerful alternative for code-related tasks, but their potential in WebShell detection remains underexplored. In this paper, we make two major contributions: (1) a comprehensive evaluation of seven LLMs, including GPT-4, LLaMA 3.1 70B, and Qwen 2.5 variants, benchmarked against traditional sequence- and graph-based methods using a dataset of 26.59K PHP scripts, and (2) the Behavioral Function-Aware Detection (BFAD) framework, designed to address the specific challenges of applying LLMs to this domain. Our framework integrates three components: a Critical Function Filter that isolates malicious PHP function calls, a Context-Aware Code Extraction strategy that captures the most behaviorally indicative code segments, and Weighted Behavioral Function Profiling (WBFP) that enhances in-context learning by prioritizing the most relevant demonstrations based on discriminative function-level profiles. Our results show that, stemming from their distinct analytical strategies, larger LLMs achieve near-perfect precision but lower recall, while smaller models exhibit the opposite trade-off. However, all baseline models lag behind previous State-Of-The-Art (SOTA) methods. With the application of BFAD, the performance of all LLMs improves significantly, yielding an average F1 score increase of 13.82%. Notably, larger models like GPT-4, LLaMA-3.1-70B, and Qwen-2.5-Coder-14B now outperform SOTA benchmarks, while smaller models such as Qwen-2.5-Coder-3B achieve performance competitive with traditional methods. This work is the first to explore the feasibility and limitations of LLMs for WebShell detection and provides solutions to address the challenges in this task.
</div>
</details>

</div>
</div>

<div class="paper-box" data-paper-id="latex2layout" data-interest="2" data-highlight="{% if site.data.publication-highlights contains 'latex2layout' %}true{% else %}false{% endif %}"><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><a href="https://ojs.aaai.org/index.php/AAAI/article/view/40349" target="_blank"><img src='images/latex2layout.png' alt="LaTeX2Layout Pipeline" class="paper-image-hover" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://ojs.aaai.org/index.php/AAAI/article/view/40349">LaTeX2Layout: High-Fidelity, Scalable Document Layout Annotation Pipeline for Layout Detection</a></h3>

**Feijiang Han**, Zelong Wang, Bowen Wang, Xinxin Liu, Skyler Cheung, Delip Rao, Chris Callison-Burch, Lyle Ungar

[**Paper**](https://ojs.aaai.org/index.php/AAAI/article/view/40349) \| [**Code**](https://github.com/FeijiangHan/Latex2Layout-Core)

**TL;DR.** Layout detection turns a PDF into structured page understanding (bounding boxes + reading order), but current VLMs struggle mainly because high-fidelity supervision is scarce and PDF-parser-based labels are noisy and expensive. We introduce LaTeX2Layout, a scalable data-centric pipeline that extracts pixel-accurate layout ground truth directly from the LaTeX compilation process, enabling large-scale training without manual annotation.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="latex2layout_abstract">
General-purpose Vision-Language Models (VLMs) are increasingly integral to modern AI systems for document understanding, yet their ability to perform fine-grained layout analysis remains severely underdeveloped. Overcoming this limitation requires large-scale, high-fidelity training datasets. However, current annotation methods that rely on parsing rendered PDFs are costly, error-prone, and difficult to scale. We propose a different paradigm: extracting ground-truth layout directly from the LaTeX compilation process rather than the final PDF. We present LaTeX2Layout, a generalizable procedural pipeline that recovers pixel-accurate bounding boxes and reading order from compiler traces. This enables the generation of a 140K-page dataset, including 120K programmatically generated synthetic variants that more than double the layout diversity of real-world data. Using this dataset, we fine-tune an efficient 3B-parameter VLM with an easy-to-hard curriculum that accelerates convergence. Our model achieves Kendall's tau=0.95 for reading order and mAP@50=0.91 for element grounding, delivering nearly 200% relative improvement over strong zero-shot baselines such as GPT-4o and Claude-3.7.
</div>
</details>
</div>
</div>

<div class="paper-box" data-paper-id="webshell-classification" data-interest="2" data-highlight="{% if site.data.publication-highlights contains 'webshell-classification' %}true{% else %}false{% endif %}"><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><a href="https://arxiv.org/abs/2512.05288" target="_blank"><img src='images/webshell_family.png' alt="WebShell Family Classification" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2512.05288">Beyond Detection: A Comprehensive Benchmark and Study on Representation Learning for Fine-Grained Webshell Family Classification</a></h3>

**Feijiang Han**

[**Paper**](https://arxiv.org/abs/2512.05288) \| [**Code & Dataset**](https://github.com/FeijiangHan/Beyond-Webshell-Detection) \| [**Slides**](https://drive.google.com/file/d/1I3xKf1_lf8VIGlwMGgqWWxTUvFnNW3Po/view?usp=sharing) \| [**Video**](https://drive.google.com/file/d/1PAljf0YjWgnBRUHhmDZDvjU-CmAcglqr/view?usp=sharing)

**TL;DR.** While WebShell detection answers “malicious or not,” real-world defense also needs attribution and tracking: WebShells come in diverse families with different behaviors and variants. We are the first to systematically study representation learning for automated WebShell family classification.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="webshell_family_abstract">
Malicious WebShells represent a severe and evolving threat, compromising critical digital infrastructures and endangering public services in sectors such as healthcare and finance. While the research community has achieved considerable success in WebShell detection (distinguishing malicious from benign samples), we argue it is time to advance from passive detection to a new stage of in-depth analysis and proactive defense. A promising and critical direction is the automation of WebShell family classification: identifying the specific malware lineage to understand an adversary's tactics and enable a precise, rapid response. This crucial task, however, remains a largely unexplored area that currently relies on slow, manual expert analysis. To address this gap, we present the first systematic study to automate WebShell family classification. Our method begins with extracting dynamic function call traces to capture inherent behaviors that are resistant to common encryption and obfuscation. To enhance the scale and diversity of our dataset for a more stable evaluation, we augment these real-world traces with new variants synthesized by a Large Language Model (LLM). These augmented traces are then abstracted into sequences, graphs, and trees, providing a foundation to benchmark a comprehensive suite of representation methods. Our evaluation spans classic sequence-based embeddings (CBOW, GloVe), transformers (BERT, SimCSE), and a range of structure-aware algorithms, including Graph Kernels, Graph Edit Distance, Graph2Vec, and various Graph Neural Networks.
</div>
</details>
</div>
</div>


<div class="paper-box" data-paper-id="thinkncheck" data-interest="2" data-highlight="{% if site.data.publication-highlights contains 'thinkncheck' %}true{% else %}false{% endif %}">
  <div class='paper-box-image'>
    <div>
      <div class="badge">NLDB 2026</div>
      <a href="https://arxiv.org/abs/2604.01652" target="_blank">
        <img src='images/thinkncheck.png' alt="ThinknCheck: Grounded Claim Verification" class="paper-image-hover" width="100%">
      </a>
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://arxiv.org/abs/2604.01652">ThinknCheck: Grounded Claim Verification with Compact, Reasoning-Driven, and Interpretable Models</a></h3>

Delip Rao, **Feijiang Han**, Chris Callison-Burch

[**Paper**](https://arxiv.org/abs/2604.01652) \| [**Poster**](/papers/ThinknCheck-Poster-printv2.pdf){:target="_blank"}

**TL;DR.** Efficient scientific claim verification is essential for trustworthy literature review and retrieval—but most strong verifiers are large, expensive, and hard to interpret. We develop ThinknCheck, a compact “reason first, then decide” verifier, and summarize best practices for making small LLMs reliable and interpretable on document-grounded claim verification.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="thinkncheck_abstract">
We present ThinknCheck, a 1B-parameter verifier for grounded claim verification that first produces a short, structured rationale and then a binary verdict. We construct LLMAggreFact-Think, a 24.1k reasoning-augmented training set derived from LLMAggreFact, and fine-tune a 4-bit Gemma3 model to follow this format. On LLMAggreFact, ThinknCheck attains 78.1 balanced accuracy (BAcc), surpassing MiniCheck-7B (77.4) with 7x fewer parameters; removing the reasoning step reduces BAcc to 57.5. On SciFact, ThinknCheck reaches 64.7 BAcc, a +14.7 absolute gain over MiniCheck-7B. By contrast, zero-shot chain-of-thought on the base Gemma3-1B harms accuracy relative to direct answers, and preference optimization with a simple format+accuracy reward underperforms supervised reasoning. A qualitative audit of generated rationales indicates current verification datasets over-reward lexical overlap and under-test multi-sentence and numerical reasoning. To probe the latter, we introduce GSMClaims and a domain-specialized variant, ThinknCheck-Science, which improves across benchmarks, including 61.0\% accuracy on GSMClaims. Overall, explicit, supervised reasoning enables compact verifiers that are competitive while remaining resource-efficient and interpretable.
</div>
</details>

</div>
</div>


<h2 class="interest-heading" data-interest="3">🌟 Earlier Work: Crowdsourcing, Federated & Continual Learning, HCI</h2>

<div class="paper-box" data-paper-id="cql-mab" data-interest="3" data-highlight="{% if site.data.publication-highlights contains 'cql-mab' %}true{% else %}false{% endif %}"><div class='paper-box-image'><div><div class="badge">Information Sciences 2023</div><a href="https://www.sciencedirect.com/science/article/abs/pii/S0020025523010290" target="_blank"><img src='images/cqlmab.png' alt="CQL-MAB Overview" class="paper-image-hover" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0020025523010290">Credit and quality intelligent learning based multi-armed bandit scheme for unknown worker selection in multimedia MCS</a></h3>
Jianheng Tang, **Feijiang Han**, Kejia Fan, et al.  


**TL;DR.** High-quality training data is the bottleneck for modern multimodal and foundation models, and mobile crowd sensing (MCS) is a scalable way to collect it—but platforms must recruit workers before knowing who is trustworthy or produces high-quality data. We formulate this as an online decision-making problem under uncertainty and propose CQL-MAB, a bandit-style RL scheme that learns workers’ credit (honesty) and quality (data utility) from feedback and selects workers cost-effectively with incentive guarantees.


<details class="paper-details">
<summary>Abstract</summary>
<div class="paper-abstract" id="cql_mab_abstract">
The field of intelligent multimedia systems, which rely heavily on multimodal models trained on large amounts of high-quality data, has been revolutionized by the use of deep learning. One promising approach to collect such multimodal data is Mobile Crowd Sensing (MCS). However, MCS platforms face a significant challenge in selecting both high-credit and high-quality workers at low cost due to the Post-Unknown Worker Recruitment (PUWR) problem. The PUWR problem makes it difficult to determine the credits and qualities of workers in advance, which can lead to the recruitment of dishonest or low-quality workers. This problem severely affects the quality and quantity of MCS data collection, posing a serious threat to the security and robustness of large-scale multimedia models. To address this issue, we propose a Credit and Quality Learning based Multi-Armed Bandit (CQL-MAB) scheme, which consists of a novel credit identification algorithm, a fine-grained worker quality calculation method, and a two-stage reward-based Multi-Armed Bandit (MAB) for worker selection in reverse auction. The theoretical proof shows that the CQL-MAB scheme achieves the truthfulness, individual rationality, and efficiency of the auction mechanism. A large number of simulation experiments on real data traces are conducted to demonstrate the outstanding performance of CQL-MAB.
</div>
</details>
</div>
</div>


<div id="earlier-work-list" data-interest="3" markdown="1">

- ``UBICOMP 2025`` [CALM: A Ubiquitous Crowdsourced Analytic Learning Mechanism for Continual Service Construction with Data Privacy Preservation](https://dl.acm.org/doi/abs/10.1145/3729473)  
Kejia Fan, Yuwei Huang, Jiayi He, **Feijiang Han**, Jianheng Tang, et al.

- ``arXiv 2025`` [APFL: Analytic Personalized Federated Learning via Dual-Stream Least Squares](https://arxiv.org/abs/2508.10732)  
Kejia Fan, Jianheng Tang, Zixuan Yang, **Feijiang Han**, Jiayi Li, et al.

- ``arXiv 2025`` [ACU: Analytic Continual Unlearning for Efficient and Exact Forgetting with Privacy Preservation](https://arxiv.org/abs/2505.12239)  
Jianheng Tang, Haotian Zhuang, Dongxiao Fang, Jiayi Li, **Feijiang Han**, et al.

- ``Information Sciences 2024`` [MAB-RP: A Multi-Armed Bandit based workers selection scheme for accurate data collection in crowdsensing](https://www.sciencedirect.com/science/article/abs/pii/S0020025524004675)  
Yuwei Lou, Jianheng Tang, **Feijiang Han**, Anfeng Liu, et al.

- ``Information and Software Technology 2024`` [Fctree: Visualization of function calls in execution](https://www.sciencedirect.com/science/article/pii/S0950584924001502)  
Fei Zhou, Yifan Fan, Shengchao Lv, Lingxiao Jiang, Zhuo Chen, Jingui Yuan, **Feijiang Han**, et al.

- ``IEEE IoT Journal 2023`` [CRL-MABA: a completion rate learning-based accurate data collection scheme in large-scale energy internet](https://ieeexplore.ieee.org/abstract/document/10375700)  
Kejia Fan, Jianheng Tang, Wenbin Xie, **Feijiang Han**, Yuwei Huang, et al.

- ``IEEE IoT Journal 2023`` [BTV-CMAB: A bi-directional trust verification-based combinatorial multiarmed bandit scheme for mobile crowdsourcing](https://ieeexplore.ieee.org/abstract/document/10302275/)  
Jianheng Tang, Kejia Fan, Wenbin Xie, **Feijiang Han**, et al.

- ``Computer Communications 2023`` [A Semi-supervised Sensing Rate Learning based CMAB scheme to combat COVID-19 by trustful data collection in the crowd](https://www.sciencedirect.com/science/article/pii/S0140366423001433)  
Jianheng Tang, Kejia Fan, Wenbin Xie, Lingxiao Zeng, **Feijiang Han**, et al.

</div>
