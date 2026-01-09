<span class='anchor' id='future'></span>


# ❤️ Why I LOVE Interpretability and LLMs Adaptation

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


<!-- # ❤️ Future Research Directions

In addition to continuing my current research interests, I am also eager to explore several new directions.

## 1. Fundamental Model Enhancement.

I believe that training-time optimization ultimately has a deeper and longer-term impact than purely inference-time adaptations, even though the latter are often more interpretable. As resources allow, I hope to transition from inference-time tweaks toward training procedures that are explicitly informed by mechanistic insights, using interpretability not only to explain model behavior but to shape how we train and structure models. 

> **For example**, recent work on attention sinks hints at how low-level observations about model internals can inform KV-cache optimization, quantization strategies, training recipes, and multimodal extensions; I see these as early examples of a broader research direction.

Concretely, I hope to develop interpretable methods in three areas:

- (1) understanding how information flows within a model, and then training models that explicitly optimize interactions across layers and heads (e.g., parameter/token pruning, dynamic layer-skipping, routing, and improved coordination between bidirectional and unidirectional attention);
- (2) understanding how token generation works, and then introducing interpretable controls over decoding (e.g., learning how models should choose decoding hyperparameters, enabling reliable multi-token prediction); and
- (3) understanding how reasoning emerges, so that smaller models can better compete with larger ones (e.g., via reinforcement learning, improved distillation, and logits-level optimization), and so that reasoning and non-reasoning components can be coordinated more efficiently.

Because progress on LLMs has outpaced advances in MLLMs, I am also particularly interested in multimodal LLMs: bringing insights and mechanisms from LLM studies into VLMs, systematically diagnosing limitations in current architectures, and developing more effective approaches to multimodal inputs, especially challenges such as hallucination, visual redundancy, cross-modal alignment, and how different modalities should contribute to intermediate representations and final predictions.

## 2. AI for Science and Scientific Research.

I am also motivated by applying (M)LLMs to scientific discovery and research. Building on my work in document understanding, claim verification, and code analysis, I hope to:

- (1) formulate real scientific problems as well-defined tasks and benchmarks that reflect the structure and uncertainty of actual scientific workflows;
- (2) adapt and optimize models for specific scientific domains through tailored post-training pipelines (e.g., SFT, RL, and distillation), with attention to deployability under realistic computational and reliability constraints; and
- (3) design robust evaluation and feedback mechanisms for settings where ground truth is expensive, delayed, or ambiguous (e.g., human-in-the-loop protocols in RL-style verification-and-reasoning setups). -->
