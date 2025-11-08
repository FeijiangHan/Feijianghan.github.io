<span class='anchor' id='future'></span>

# ❤️ Future Research Directions

In addition to continuing my current research interests, I am also eager to explore several new directions.

## 1. Fundamental Model Enhancement

First, while inference-time adaptations are effective, I believe that scaling or optimizing models during training will eventually surpass these approaches. As resources allow, I plan to shift my focus from inference-time tweaks to optimizing models during training. 

Second, I aim to use interpretability not only to explain model behavior but also to improve training processes. For instance, insights from the attention-sink mechanism (since 2022) have led to advancements in KV-cache optimization, quantization-aware training, and extensions to VLMs. I intend to develop explainable methods in the following areas: (1) Understanding how information flows within the model—e.g., optimizing layer and head interactions; (2) Understanding how token generation works—e.g., introducing interpretable decoding control; (3) Understanding how reasoning functions—e.g., enabling smaller models to compete with larger ones and orchestrating efficient interactions between reasoning and non-reasoning components.

Finally, as LLM research has advanced more rapidly than multimodal research, I am also particularly interested in Multimodal LLMs. This includes identifying and addressing limitations in current MLLM architectures, and developing more effective and efficient methods for processing multimodal information, especially in addressing challenges like visual redundancy and modality alignment.

## 2. AI for Scientific Discovery

The next frontier is applying (M)LLMs to scientific discovery and applications, focusing on: (1) Discovering valuable new application areas as LLM capabilities continue to expand; (2) Adapting and optimizing models for specific scientific domains; (3) Tackling problems from multiple perspectives: (a) Unknown problems (building new benchmarks); (b) Known problems with: simple evaluation but challenging solutions (developing effective methods), or high-cost evaluation (developing efficient methods); easy solutions but complex evaluation requirements (e.g., designing reward for RLVR).