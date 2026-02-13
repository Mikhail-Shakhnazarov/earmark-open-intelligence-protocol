# Earmark Open Intelligence Protocol

**Version 1.0** | Berlin, February 2026

## Introduction (a readme for the readme), a note from the author:

This project is built **for collaboration**. The Open Intelligence Protocol is an open, evolving framework — dive in, contribute, and help shape how we think about machine-intelligible systems. This is not a commercial product. It is a public demonstration of a practice that can be offered commercially. The ideas described here cannot be copyrighted; the specification text itself is licensed under CC BY 4.0.

**Author’s suggestion for human readers:** 01_DARK is preferred. 02_LIGHT is for daylight — it will hurt your eyes. Start with 01, the Manifest (it’s a table of contents), then read 02, the Introduction for humans. After that, if you want to experience it differently, load the complete corpus into NotebookLM or a similar tool and let the system analyze its own logic. You’ll see how the protocol becomes a lens through which the lens itself can be understood. It’s meta, and it works. Let the chatbot explain it. Ask questions. Be maximally curious if you want to. This is version 1 — a proof by demonstration.

For current project needs, and to see how you can contribute, contact me. It’s also good enough to simply go build something on your own. So do that — and let’s talk.

I want to stress something burried in section 5:

> The protocol serves anyone who needs language model output to be reliable, verifiable, and accumulative rather than disposable. This includes individual practitioners maintaining personal knowledge systems, teams that need consistent governed output across members and tools, and developers building applications that require structured, verifiable text generation.
>
> The protocol does not require specialized technical knowledge beyond literacy and the willingness to maintain structured text. The skill is teachable. The tools are available.
>
> The barrier is conceptual, not technical: the belief that structural thinking about one's own knowledge requires institutional support. It does not. The public library, not the scholar's study, is the historical parallel.


## Overview

The **Earmark Open Intelligence Protocol** is a formal specification for structuring, verifying, and governing machine-intelligible systems. This repository contains the complete protocol specification as a series of conceptual and technical documents, designed to serve as both a reference implementation and a durable publication surface.

The protocol establishes a framework for:
- Corpus manifestation and semantic integrity
- Runtime explanation and structural obligations
- Coordinate systems for epistemic governance
- Signage standards and design language principles

## Contents

The protocol specification consists of eight primary documents:

1. **./01_CORPUS_MANIFEST.pdf** — Foundational concepts and corpus structure
2. **./02_PROTOCOL_INTRODUCTION.pdf** — Protocol overview and core principles
3. **./03_EXPLAINED_RUNTIME.pdf** — Runtime behavior and operational semantics
4. **./04_STRUCTURAL_OBLIGATIONS.pdf** — Structural requirements and constraints
5. **./05_COORDINATE_SYSTEM.pdf** — Spatial and logical coordinate frameworks
6. **./06_EPISTEMIC_GOVERNANCE.pdf** — Knowledge representation and governance
7. **./07_INTRINSIC_SIGNAGE.pdf** — Marking and annotation standards
8. **./08_TERSE_STYLE.pdf** — Specification style and documentation norms

## License

This work is licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

**Attribution:** Mikhail Shakhnazarov, Berlin, February 2026

For full legal details, see [LICENSE](./LICENSE).

**Scope:** This license applies to the protocol specification documents themselves. Artifacts, systems, or data produced using the Earmark Open Intelligence Protocol are not automatically subject to this license and may be governed by their own separate terms.

## How to Use This Repository

- **For reading:** Download the PDFs from this repository or access them directly through GitHub's file viewer.
- **For reference:** Each document is numbered sequentially and should be read in order for comprehensive understanding.
- **For implementation:** Refer to the specification as a normative guide when building systems that implement the protocol.

## Version and Maintenance

This is the **initial release (v1.0)** of the Earmark Open Intelligence Protocol. The specification is considered stable for publication and reference purposes.

---


## OUTRO, a postscriptum from the author:

This corpus, this book, can be read directly (though it is dense, because the language is highly optimized for parsing), or you can load it into an LLM’s context window. The LLM reads it all at once and interprets within the bounds set by the text itself — without my intervention. The LLM ingests the entire corpus as context and responds within bounds set by the text. This is a communication medium. It is **a reverse echo chamber**, and it must be treated as such. It does not speak for me, in my voice, or on my behalf. It simply explains what the texts mean. You can ask it further questions. You can verify and share what you find. You can create and co-create. A new medium means a new form of expression means a new artform.

You can feed the outputs of one LLM into another for a while. You can do complex knowledge work, as I have done, when you have a set of well-established pipelines (you build those or you ask someone who knows how to build, or you just get creative). You cannot stack LLMs on top of each other indefinitely. They **will** hallucinate and lose reference between what is true and what is merely discussion because a context window is just a statistical measure over a certain number of tokens; it's a bounded token buffer, and without governance it becomes soup. It works better when it is engineered, like the one in this repo, or the one I used to compile and publish this repo, but it's a complex parallel process computation. The transformer architecture stack is a system that produces outputs, based on input plus current context contents. It is not a system that can evaluate its own outputs. It is a system that can evaluate the outputs of another system, and that system, or one further down the line, will need to terminate the evaluation process. That system will need to provide a termination point, and that system must be human because otherwise, we cannot evaluate the resolution. **Said simply, a system that produces outputs but cannot evaluate them is a combinatorial engine, not a knowledge system.**

This technology and practice stack scales in parallel. Human beings can cooperate. This is a literacy, and with literacy comes a proper Enlightenment — not the dark one we have been offered as the only option.

This corpus is a message about format: about how messages and information can be shared, and why it matters that we do not treat LLMs as minds, and do not let the illusion narrow our horizons. This medium comes with a literacy and a primer. The primer is open and free, here in this repository.

Regarding the practice: I believe LLMs can be used as reflection tools — to think, to cognate, perhaps — under the right conditions. I do not want to reduce this to a technical protocol for the tech industry. This is a medium, and the first message in this medium is the medium itself. McLuhan makes sense only in retrospect, always. The science for this kind of work may not yet be possible, because its concepts may need to be expressed within the new medium. Ideas and thought may become too complex to develop alone, and communities of practice will inevitably and naturally evolve. We can build infrastructure for Open Knowledge.

This is an optimistic project. We already have the components: open-source architecture, libraries, the blockchain (imagine the Wikipedia equivalent). I am not a programmer. I am a writer — look at the Git commits. I can do what is not vibe coding: second-order language instructions. That means I can code marginally better than average, slowly, and nowhere near the level of a professional developer. I make no pretense otherwise. This is an open letter in a new medium. GitHub seemed the best place, given the demands of the format. At worst, consider this an art project or a technical write-up. It may be both — that has always been the point. I look forward to the updates. 

The plain text is the author’s text. The generated text is the execution of the author’s text by a runtime. This corpus explains itself.

**P.P.S.** (Crypto / tokens): This project will never issue, sell, or promote a cryptocurrency or token (no “EARMARK coin,” ever). Blockchain may be explored only as an infrastructure primitive (e.g., integrity, provenance, distributed coordination), not as a financial product, and any such work will be documented explicitly as a design constraint to avoid conflicts of interest. No token, no coin, no fundraising via crypto — now or later. If blockchain appears here, it will be treated strictly as infrastructure (provenance, integrity, coordination), not as speculative finance. This boundary is deliberate: it protects the medium from incentive capture.


Best,

-- Mikhail

Click here for a quick demo: https://notebooklm.google.com/notebook/4b99602f-51da-4b6f-b8cb-47c5b7217731

---

**Repository:** https://github.com/Mikhail-Shakhnazarov/earmark-open-intelligence-protocol  
**License:** CC BY 4.0  
**Created:** February 2026
