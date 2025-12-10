<span class='anchor' id='future'></span>

# ❤️ Future Research Directions

In addition to continuing my current research interests, I am also eager to explore several new directions.

## 1. Fundamental Model Enhancement.

I believe that training-time optimization ultimately has a deeper and longer-term impact than purely inference-time adaptations, even though the latter are often more interpretable. As resources allow, I hope to transition from inference-time tweaks toward training procedures that are explicitly informed by mechanistic insights, using interpretability not only to explain model behavior but to shape how we train and structure models. 

**For example**, recent work on attention sinks hints at how low-level observations about model internals can inform KV-cache optimization, quantization strategies, training recipes, and multimodal extensions; I see these as early examples of a broader research direction.

Concretely, I hope to develop interpretable methods in three areas:

- (1) understanding how information flows within a model, and then training models that explicitly optimize interactions across layers and heads (e.g., parameter/token pruning, dynamic layer-skipping, routing, and improved coordination between bidirectional and unidirectional attention);
- (2) understanding how token generation works, and then introducing interpretable controls over decoding (e.g., learning how models should choose decoding hyperparameters, enabling reliable multi-token prediction); and
- (3) understanding how reasoning emerges, so that smaller models can better compete with larger ones (e.g., via reinforcement learning, improved distillation, and logits-level optimization), and so that reasoning and non-reasoning components can be coordinated more efficiently.

Because progress on LLMs has outpaced advances in MLLMs, I am also particularly interested in multimodal LLMs: bringing insights and mechanisms from LLM studies into VLMs, systematically diagnosing limitations in current architectures, and developing more effective approaches to multimodal inputs, especially challenges such as hallucination, visual redundancy, cross-modal alignment, and how different modalities should contribute to intermediate representations and final predictions.

## 2. AI for Science and Scientific Research.

I am also motivated by applying (M)LLMs to scientific discovery and research. Building on my work in document understanding, claim verification, and code analysis, I hope to:

- (1) formulate real scientific problems as well-defined tasks and benchmarks that reflect the structure and uncertainty of actual scientific workflows;
- (2) adapt and optimize models for specific scientific domains through tailored post-training pipelines (e.g., SFT, RL, and distillation), with attention to deployability under realistic computational and reliability constraints; and
- (3) design robust evaluation and feedback mechanisms for settings where ground truth is expensive, delayed, or ambiguous (e.g., human-in-the-loop protocols in RL-style verification-and-reasoning setups).
