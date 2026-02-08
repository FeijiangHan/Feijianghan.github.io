<span class='anchor' id='publications'></span>

# 📝 Selected Publications 

*For a complete list of publications, please visit my [Google Scholar](https://scholar.google.com.hk/citations?user=PEJ5x3EAAAAJ)*

## 🔮 Research Interest 1: Uncovering NLP & LLM Internal Mechanism and Interpretability

<div class='paper-box'>

<div class='paper-box-image'>
<div><div class="badge">ICLR 2026</div><a href="https://arxiv.org/abs/2505.11739" target="_blank"><img src='images/ZeroTuningcode.png' alt="ZeroTuning Overview" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

[ZeroTuning: Unlocking the Initial Token's Power to Enhance Large Language Models Without Training](https://arxiv.org/abs/2505.11739)

**Feijiang Han**, Xiaodong Yu, Jianheng Tang, Delip Rao, Weihua Du, Lyle Ungar

[**Paper**](https://arxiv.org/abs/2505.11739) \| [**Code & Demo**](https://github.com/FeijiangHan/ZeroTuning) \| [**Blog**](https://www.alphaxiv.org/abs/2505.11739) \| [**Poster**](/papers/ZeroTuning_Poster.pdf){:target="_blank"}

**TL;DR.** Training-free attention tuning can boost frozen LLMs, but prior methods often depend on fragile heuristics to find “important” task tokens. ZeroTuning shows a simpler universal control lever: tune only the initial token (e.g., &lt;BOS&gt;). With tiny head-specific biases on BOS attention logits, we can reshape downstream attention (sharpen/flatten), lower output entropy, and unlock pretrained knowledge—without any parameter updates.

**Key Points:**
- Lightweight + practical: ~4-line change, no KV-cache / decoding changes, kernel-agnostic (works with SDPA & FlashAttention), and works with quantized inference.
- Strong, broad gains: across 15 datasets, e.g., on Llama-3.1-8B: +19.9% (classification), +4.5% (QA), +2.1% (dialogue); MT-Bench improves 7.804 → 7.966.
- Why it works (mechanism insights): BOS acts as an attention sink, so tuning it gives monotonic control of attention entropy; effects are stronger in earlier layers and heterogeneous across heads (up-effective vs. down-effective). Includes supervised calibration and an unsupervised entropy-minimization variant.

<div class="paper-interaction" onclick="toggleAbstract('zerotuning_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="zerotuning_abstract">
Token-level attention tuning, a class of training-free methods including Post-hoc Attention Steering (PASTA, AutoPASTA) and Attention Calibration (ACT), has emerged as a promising way to improve frozen LLMs with interpretable interventions. However, these methods depend on auxiliary heuristics to identify "important" task-specific tokens, which can introduce bias and limit applicability when token importance is unclear or when using optimized kernels where attention maps are inaccessible. We propose a simpler and more elegant alternative: acting only on the initial token (e.g., &lt;BOS&gt; in LLaMA). We show theoretically that adding lightweight biases to this token's attention logits monotonically controls the entropy of the downstream attention distribution--an effect amplified by its natural function as an attention sink. Our empirical analysis reveals that this tuning process can positively affect LLMs and better unlock their pretrained knowledge, with stronger effects in early layers and distinct scaling preferences across attention heads. Building on these insights, we introduce ZeroTuning: a training-free method that improves LLM performance by applying head-specific attention adjustments to the initial token, requiring zero parameter updates. We present two variants: a supervised mode that calibrates on validation examples, and a novel unsupervised mode that directly minimizes the model's output entropy. Our method requires no KV‑cache or decoding changes, and is kernel‑agnostic (works with SDPA and FlashAttention). The method is lightweight and requires only four lines of modification to the standard LlamaAttention code. It achieves broad gains across 15 datasets and outperforms previous, more complex methods; for instance, with Llama-3.1-8B, it yields relative improvements of 19.9% on classification, 4.5% on question answering, and 2.1% on dialogue. ZeroTuning also works out-of-the-box with quantized inference and maintains its performance improvements with increasing context lengths. Our code and runnable demo are available at https://anonymous.4open.science/r/ZeroTuning.
</div>
</div>
</div>


<div class='paper-box'>

<div class='paper-box-image'><div><div class="badge">ICASSP 2026</div><a href="https://arxiv.org/abs/2504.09402v2" target="_blank"><img src='images/SSR.png' alt="SSR+" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

[Read Before You Think: Mitigating LLM Comprehension Failures with Step-by-Step Reading](https://arxiv.org/abs/2504.09402v2)

**Feijiang Han**, Hengtao Cui, Licheng Guo, Zelong Wang, Zhiyuan Lyu

[**Paper**](https://arxiv.org/abs/2504.09402v2) \| [**Blog**](https://www.alphaxiv.org/abs/2504.09402v2)

**TL;DR.** Many “reasoning” failures in LLMs are actually comprehension failures—the model misreads the question (semantic misunderstanding), so even Chain-of-Thought can’t reliably help. We introduce Step-by-Step Reading (SSR), a training-free framework that makes models read before they think: parse the question incrementally, keep each reasoning step grounded to the text, and fix backward dependencies via iterative re-contextualization.

**Key Points**:
- Identified *Semantic Misunderstanding* as a core reasoning bottleneck that persists even with CoT, stemming from the inherent constraints of the unidirectional attention mechanism.
- Explained the effectiveness of prompt repetition through the lens of Attention: it helps models suppress focus on low-semantic tokens (e.g., punctuation) and redistribute attention to critical information.
- Proposed a training-free framework to resolve these issues by: (1) applying step-by-step reading logic, (2) automatically steering attention to key tokens via self-reference, and (3) resolving backward dependencies through iterative re-contextualization. 

<div class="paper-interaction" onclick="toggleAbstract('ssr_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="ssr_abstract">
Large Language Models (LLMs) often fail on complex reasoning tasks due to flawed question comprehension, not just flawed logic. This paper presents a systematic investigation into these comprehension failures. Our work yields three key insights: (1) the step-by-step principle, effective for calculation, can be migrated to the reading process to enhance comprehension; (2) increasing the proportion of question-related tokens (e.g., via repetition) succeeds by refocusing attention, a mechanism that can be explicitly controlled; and (3) backward dependencies represent a core bottleneck for decoder-only models that persists even with strong methods like Chain-of-Thought. Based on these findings, we introduce the Step-by-Step Reading (SSR) family of prompts. This multi-stage approach culminates in SSR++, a method specifically engineered to deepen model comprehension by guiding it to parse questions with finer granularity, focus attention on critical tokens, and resolve backward dependencies through iterative re-contextualization. SSR++ sets a new state-of-the-art on multiple reasoning benchmarks, and our analysis confirms it works by directly mitigating semantic misunderstanding. These results demonstrate that guiding how a model reads is a powerful and efficient method for improving its reasoning ability.
</div>
</div>
</div>

## 🔍 Research Interest 2: Model Adaptation

<div class='paper-box'> 

<div class='paper-box-image'>
<div>
<div class="badge">COLM 2025</div>
<a href="https://arxiv.org/abs/2504.13811v3" target="_blank"><img src='images/webshell_detection.png' alt="WebShell Detection Framework" class="paper-image-hover" width="100%"></a>
</div>
</div>

<div class='paper-box-text' markdown="1">

[Can LLMs handle WebShell detection? Overcoming Detection Challenges with Behavioral Function-Aware Framework](https://arxiv.org/abs/2504.13811v3)

**Feijiang Han**, Jiaming Zhang, Chuyi Deng, Jianheng Tang, Yunhuai Liu

[**Paper**](https://arxiv.org/abs/2504.13811v3) \| [**Blog**](https://www.alphaxiv.org/abs/2504.13811v3) \| [**Poster**](/papers/LLM_Webshell_Poster.pdf){:target="_blank"}

**TL;DR.** WebShell detection is hard for LLMs because a server-side script can span millions of tokens while the truly malicious logic is often just a tiny, obfuscated fragment—so naïvely feeding the whole file dilutes the signal and breaks context limits. We provide the first comprehensive evaluation of LLMs for WebShell detection and introduce BFAD, a behavior-driven, function-aware pipeline that helps LLMs focus on the most indicative code, yielding a +13.82% average F1 improvement and pushing both large and small LLMs toward (or beyond) prior SOTA.

**Task:** input = {server-side script / PHP file} → output = {WebShell / Benign}.

<div class="paper-interaction" onclick="toggleAbstract('webshell_detection_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="webshell_detection_abstract">
WebShell attacks, where malicious scripts are injected into web servers, pose a significant cybersecurity threat. Traditional machine learning and deep learning methods are often hampered by challenges such as the need for extensive training data, catastrophic forgetting, and poor generalization. Recently, Large Language Models (LLMs) have emerged as a powerful alternative for code-related tasks, but their potential in WebShell detection remains underexplored. In this paper, we make two major contributions: (1) a comprehensive evaluation of seven LLMs, including GPT-4, LLaMA 3.1 70B, and Qwen 2.5 variants, benchmarked against traditional sequence- and graph-based methods using a dataset of 26.59K PHP scripts, and (2) the Behavioral Function-Aware Detection (BFAD) framework, designed to address the specific challenges of applying LLMs to this domain. Our framework integrates three components: a Critical Function Filter that isolates malicious PHP function calls, a Context-Aware Code Extraction strategy that captures the most behaviorally indicative code segments, and Weighted Behavioral Function Profiling (WBFP) that enhances in-context learning by prioritizing the most relevant demonstrations based on discriminative function-level profiles. Our results show that, stemming from their distinct analytical strategies, larger LLMs achieve near-perfect precision but lower recall, while smaller models exhibit the opposite trade-off. However, all baseline models lag behind previous State-Of-The-Art (SOTA) methods. With the application of BFAD, the performance of all LLMs improves significantly, yielding an average F1 score increase of 13.82%. Notably, larger models like GPT-4, LLaMA-3.1-70B, and Qwen-2.5-Coder-14B now outperform SOTA benchmarks, while smaller models such as Qwen-2.5-Coder-3B achieve performance competitive with traditional methods. This work is the first to explore the feasibility and limitations of LLMs for WebShell detection and provides solutions to address the challenges in this task.
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><a href="" target="_blank"><img src='images/latex2layout.png' alt="LaTeX2Layout Pipeline" class="paper-image-hover" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

[LaTeX2Layout: High-Fidelity, Scalable Document Layout Annotation Pipeline for Layout Detection](https://www.cis.upenn.edu/~ccb/publications/latex2layout.pdf)

**Feijiang Han**, Zelong Wang, Bowen Wang, Xinxin Liu, Skyler Cheung, Delip Rao, Chris Callison-Burch, Lyle Ungar

[**Paper**](https://www.cis.upenn.edu/~ccb/publications/latex2layout.pdf) \| [**Code & Dataset**] (Release Due: 2026.3.1)

**TL;DR.** Layout detection turns a PDF into structured page understanding (bounding boxes + reading order), but current VLMs struggle mainly because high-fidelity supervision is scarce and PDF-parser-based labels are noisy and expensive. We introduce LaTeX2Layout, a scalable data-centric pipeline that extracts pixel-accurate layout ground truth directly from the LaTeX compilation process, enabling large-scale training without manual annotation.

**Task:** input = {PDF document} → output = {page elements’ bounding boxes + reading order (optionally OCR)}.

<div class="paper-interaction" onclick="toggleAbstract('latex2layout_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="latex2layout_abstract">
General-purpose Vision-Language Models (VLMs) are increasingly integral to modern AI systems for document understanding, yet their ability to perform fine-grained layout analysis remains severely underdeveloped. Overcoming this limitation requires large-scale, high-fidelity training datasets. However, current annotation methods that rely on parsing rendered PDFs are costly, error-prone, and difficult to scale. We propose a different paradigm: extracting ground-truth layout directly from the LaTeX compilation process rather than the final PDF. We present LaTeX2Layout, a generalizable procedural pipeline that recovers pixel-accurate bounding boxes and reading order from compiler traces. This enables the generation of a 140K-page dataset, including 120K programmatically generated synthetic variants that more than double the layout diversity of real-world data. Using this dataset, we fine-tune an efficient 3B-parameter VLM with an easy-to-hard curriculum that accelerates convergence. Our model achieves Kendall's tau=0.95 for reading order and mAP@50=0.91 for element grounding, delivering nearly 200% relative improvement over strong zero-shot baselines such as GPT-4o and Claude-3.7.
</div>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><a href="" target="_blank"><img src='images/webshell_family.png' alt="WebShell Family Classification" class="paper-image-hover" width="100%"></a></div></div>

<div class='paper-box-text' markdown="1">

[Beyond Detection: A Comprehensive Benchmark and Study on Representation Learning for Fine-Grained Webshell Family Classification](https://arxiv.org/abs/2512.05288)

**Feijiang Han**

[**Paper**](https://arxiv.org/abs/2512.05288) \| [**Video (AI)**](https://drive.google.com/file/d/1PAljf0YjWgnBRUHhmDZDvjU-CmAcglqr/view?usp=sharing) \| [**Slide (AI)**](https://drive.google.com/file/d/1I3xKf1_lf8VIGlwMGgqWWxTUvFnNW3Po/view?usp=sharing) \| [**Code & Dataset**] (Release Due: 2026.3.1)

**TL;DR.** While WebShell detection answers “malicious or not,” real-world defense also needs attribution and tracking: WebShells come in diverse families with different behaviors and variants. We are the first to systematically study representation learning for automated WebShell family classification.

**Task:** given a WebShell → predict its family ID.

**Key Points**:
- Benchmark: the first systematic study of representation learning for fine-grained WebShell family classification.
- Behavioral view: dynamic function-call traces + LLM-augmented variants for robust behavioral analysis.
- Key finding: structural representations (especially tree-based GNNs / Tree-GAT) consistently outperform sequence models for family attribution.

<div class="paper-interaction" onclick="toggleAbstract('webshell_family_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="webshell_family_abstract">
Malicious WebShells represent a severe and evolving threat, compromising critical digital infrastructures and endangering public services in sectors such as healthcare and finance. While the research community has achieved considerable success in WebShell detection (distinguishing malicious from benign samples), we argue it is time to advance from passive detection to a new stage of in-depth analysis and proactive defense. A promising and critical direction is the automation of WebShell family classification: identifying the specific malware lineage to understand an adversary's tactics and enable a precise, rapid response. This crucial task, however, remains a largely unexplored area that currently relies on slow, manual expert analysis. To address this gap, we present the first systematic study to automate WebShell family classification. Our method begins with extracting dynamic function call traces to capture inherent behaviors that are resistant to common encryption and obfuscation. To enhance the scale and diversity of our dataset for a more stable evaluation, we augment these real-world traces with new variants synthesized by a Large Language Model (LLM). These augmented traces are then abstracted into sequences, graphs, and trees, providing a foundation to benchmark a comprehensive suite of representation methods. Our evaluation spans classic sequence-based embeddings (CBOW, GloVe), transformers (BERT, SimCSE), and a range of structure-aware algorithms, including Graph Kernels, Graph Edit Distance, Graph2Vec, and various Graph Neural Networks.
</div>
</div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Project</div>
      <a href="/papers/ThinknCheck-Poster-printv2.pdf" target="_blank">
        <img src='images/thinkncheck.png' alt="ThinknCheck: Grounded Claim Verification" class="paper-image-hover" width="100%">
      </a>
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

ThinknCheck: Grounded Claim Verification with Compact, Reasoning-Driven, and Interpretable Models

Delip Rao, **Feijiang Han**, Chris Callison-Burch

[**Poster**](/papers/ThinknCheck-Poster-printv2.pdf){:target="_blank"} \| [**Paper**] (Coming Soon)

**TL;DR.** Efficient scientific claim verification is essential for trustworthy literature review and retrieval—but most strong verifiers are large, expensive, and hard to interpret. We develop ThinknCheck, a compact “reason first, then decide” verifier, and summarize best practices for making small LLMs reliable and interpretable on document-grounded claim verification.

**Task:** input = {Document, Claim} → output = {True / False}.

**Key Points**:
- 1B-scale, 4-bit **ThinknCheck** verifier trained to “reason first, then decide” for scientific claim verification
- New reasoning-augmented datasets **LLMAggreFact-Think** and **GSMClaims** for document-grounded scientific and arithmetic claims
- Small model **matches or surpasses** larger specialized verifiers (e.g., MiniCheck-7B) while providing short, interpretable rationales

<div class="paper-interaction" onclick="toggleAbstract('thinkncheck_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="thinkncheck_abstract">
We present ThinknCheck, a 1B-parameter verifier for grounded claim verification that first produces a short, structured rationale and then a binary verdict. We construct LLMAggreFact-Think, a 24.1k reasoning-augmented training set derived from LLMAggreFact, and fine-tune a 4-bit Gemma3 model to follow this format. On LLMAggreFact, ThinknCheck attains 78.1 balanced accuracy (BAcc), surpassing MiniCheck-7B (77.4) with 7x fewer parameters; removing the reasoning step reduces BAcc to 57.5. On SciFact, ThinknCheck reaches 64.7 BAcc, a +14.7 absolute gain over MiniCheck-7B. By contrast, zero-shot chain-of-thought on the base Gemma3-1B harms accuracy relative to direct answers, and preference optimization with a simple format+accuracy reward underperforms supervised reasoning. A qualitative audit of generated rationales indicates current verification datasets over-reward lexical overlap and under-test multi-sentence and numerical reasoning. To probe the latter, we introduce GSMClaims and a domain-specialized variant, ThinknCheck-Science, which improves across benchmarks, including 61.0\% accuracy on GSMClaims. Overall, explicit, supervised reasoning enables compact verifiers that are competitive while remaining resource-efficient and interpretable.
</div>

</div>
</div>


## 🌟 Research Interest 3: Other Topics (HCI, Big Data Visualization, IoT, Federated and Continual Learning)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Information Sciences 2023</div><a href="https://www.sciencedirect.com/science/article/abs/pii/S0020025523010290" target="_blank"><img src='images/cqlmab.png' alt="CQL-MAB Overview" class="paper-image-hover" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

[Credit and quality intelligent learning based multi-armed bandit scheme for unknown worker selection in multimedia MCS](https://www.sciencedirect.com/science/article/abs/pii/S0020025523010290)  
Jianheng Tang, **Feijiang Han**, Kejia Fan, et al.  


**TL;DR.** High-quality training data is the bottleneck for modern multimodal and foundation models, and mobile crowd sensing (MCS) is a scalable way to collect it—but platforms must recruit workers before knowing who is trustworthy or produces high-quality data. We formulate this as an online decision-making problem under uncertainty and propose CQL-MAB, a bandit-style RL scheme that learns workers’ credit (honesty) and quality (data utility) from feedback and selects workers cost-effectively with incentive guarantees.

**Why this is RL:** it’s a contextual multi-armed bandit: repeatedly choose “arms” (workers), observe stochastic rewards (credit/quality), and minimize regret while respecting budget/auction constraints.

**Task:** input = {workers’ bids + streaming feedback from their submitted data} → output = {selected worker set (and payments) each round}.

**Key Points:**
- CQL-MAB: jointly models credit (trustworthiness) and quality (data utility) as rewards for bandit-based recruitment under budget.
- Two-stage / two-level reward UCB to pick workers while continuously updating beliefs about unknown workers.
- Proven properties in reverse auctions: truthfulness, individual rationality, and computational efficiency, plus strong empirical performance (revenue/regret).

<div class="paper-interaction" onclick="toggleAbstract('cql_mab_abstract')">
📑 Click to see abstract
</div>
<div class="paper-abstract" id="cql_mab_abstract">
The field of intelligent multimedia systems, which rely heavily on multimodal models trained on large amounts of high-quality data, has been revolutionized by the use of deep learning. One promising approach to collect such multimodal data is Mobile Crowd Sensing (MCS). However, MCS platforms face a significant challenge in selecting both high-credit and high-quality workers at low cost due to the Post-Unknown Worker Recruitment (PUWR) problem. The PUWR problem makes it difficult to determine the credits and qualities of workers in advance, which can lead to the recruitment of dishonest or low-quality workers. This problem severely affects the quality and quantity of MCS data collection, posing a serious threat to the security and robustness of large-scale multimedia models. To address this issue, we propose a Credit and Quality Learning based Multi-Armed Bandit (CQL-MAB) scheme, which consists of a novel credit identification algorithm, a fine-grained worker quality calculation method, and a two-stage reward-based Multi-Armed Bandit (MAB) for worker selection in reverse auction. The theoretical proof shows that the CQL-MAB scheme achieves the truthfulness, individual rationality, and efficiency of the auction mechanism. A large number of simulation experiments on real data traces are conducted to demonstrate the outstanding performance of CQL-MAB.
</div>
</div>
</div>


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

<style>
.paper-interaction {
    margin-top: 10px;
    padding: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.paper-interaction:hover {
    background-color: #e0e0e0;
}

.paper-image-hover {
    cursor: pointer;
}

.paper-image, .paper-abstract {
    display: none;
    margin-top: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 4px;
    border: 1px solid #e9ecef;
}

.paper-abstract {
    font-size: 0.9em;
    line-height: 1.6;
    text-align: justify;
}

.paper-image.active, .paper-abstract.active {
    display: block;
}

/* 论文列表样式 */
li code {
    background-color: #f8f9fa;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #495057;
    margin-right: 4px;
    border: 1px solid #e9ecef;
}

li {
    margin-bottom: 15px;
    line-height: 1.6;
}

li a {
    color: #0366d6;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

li a:hover {
    color: #0056b3;
    text-decoration: underline;
}
</style>

<script>
function toggleAbstract(abstractId) {
    const abstract = document.getElementById(abstractId);
    if (abstract) {
        abstract.classList.toggle('active');
    }
}
</script>