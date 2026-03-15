import { useLayoutEffect, useRef, useState } from "react";

const essayDrawerPrelude =
  "AI does not exist in the strict sense. Language systems can be governed.";

const essayIntroGesture =
  "Bureaucracy is not a thing. An organization is not a thing. Intelligence is not a thing. These are functional arrangements that are often spoken of as though they were objects. They are not objects. Where that pattern settles into language, institutions begin to treat the abstraction as though it carried agency of its own.";

const essayDrawerOrientation =
  "Language does more than describe these arrangements after the fact. It stabilizes them. It coordinates them. It makes them operative. Intelligence belongs to that category as well. The word names certain kinds of successful cognitive performance, and those performances are recognized, judged, and organized through language.";

const essayMarkdown = [
  "## 0 Introduction",
  "",
  "### 0.1 Problem Statement",
  "",
  "Modern intelligent systems are encountered first as language: prompts, replies, refusals, summaries, policies, notes, classifications, and instructions. They appear in words, they are adjusted through words, and they are judged through words. Language therefore now does visible work that older debates about intelligence as an inner capacity did not have to confront so directly. Yet the public vocabulary for these systems remains unstable. The same object is treated as a mind in waiting, a mere tool, a synthetic companion, a statistical trick, or a rival intelligence. The result is conceptual and practical confusion about what is being designed, what is being governed, and what sort of thing is now acting in public life.",
  "",
  "This discursive confusion has consequences. Unclear discourse produces unclear governance. If the object being governed is misdescribed, the practical questions attached to it are misdescribed as well. Different descriptions organize different practical objects for inquiry and governance. Jascha Bareis and Christian Katzenbach describe national AI strategies as “a hybrid of policy and discourse that offers imaginaries, allocates resources, and sets rules” (Bareis and Katzenbach 2022). Policy and discourse do not merely describe AI from the outside; they participate in shaping what AI is taken to be and become. If that is so, then governance depends on legibility. The relevant operative structures have to be articulated in public language so that they can be described, inspected, revised, and governed. To defer them to mythology, marketing, or technical mystique is to obscure what is, in substantial part, a publicly explicable governance object.",
  "",
  "### 0.2 A Solution in Language",
  "",
  "The issue at hand is not intelligence in the abstract but a medium in which language can be organized to do more than describe. In that medium, the organization of language itself carries a visible share of what people call intelligence. This becomes visible wherever written language sets the conditions for later language: in prompts, policies, rubrics, refusal criteria, status markers, and promotion rules. The layer available to design, governance, revision, and critique therefore appears in language. The model executes, but the surrounding language specifies what sort of execution is being asked for, what counts as success, what must be refused, what may be promoted, and who remains responsible.",
  "",
  "A distinction is needed here between cognition and intelligence, but not the one standard reference works usually make. In standard usage, cognition is the broader category: the National Library of Medicine’s Medical Subject Headings (MeSH) defines it minimally as the “intellectual or mental process whereby an organism obtains knowledge” (National Library of Medicine n.d.). Intelligence, by contrast, is often treated more narrowly as a general mental ability for reasoning, problem solving, and learning that integrates functions such as perception, attention, memory, language, and planning (Colom et al. 2010). This essay uses the terms differently. Here cognition names the wider domain of mental process, while intelligence names the organized handling of information under explicit constraints.",
  "",
  "Intelligence in this medium is governed language in that specific sense. A language model is best treated as a runtime means for governed language transformation. What becomes legible here is the structure by which language organizes later action: language no longer only describes, but classifies, authorizes, constrains, routes, and preserves. Some texts then begin to do more than add content. They specify how later texts are to be read and what later participants are to do.",
  "",
  "From that point onward, two strands run together. One concerns language as a medium of governance and asks how governance works when language carries explicit permissions, constraints, statuses, and criteria for later action. The other concerns governed intelligence as a medium in its own right and treats the language model as one replaceable runtime inside a larger written arrangement. The question there is what kind of medium appears when memory, status, procedure, and execution are brought into relation.",
  "",
  "Once the object is described that way, the field of inquiry changes with it. Attention shifts to how language is marked, handled, and made consequential: what later actions it authorizes, constrains, or routes, and what in it remains exploratory rather than operative. Model weights then appear in a different light as well. They are a form of illegible memory whose effects can be observed and inferred without ever becoming fully transparent to inspection.",
  "",
  "If the medium is linguistic, it inherits basic properties of language. If those properties become explicit and governable, language begins to function as infrastructure rather than mere report. If the model is runtime within that arrangement, then there is no subject here to govern. The practical object of governance is the language that specifies permissions, constraints, procedures, and responsibility.",
  "",
  "The discussion begins with the properties a linguistic medium inherits from language: truth-indifference, composition, recursion, and shared semantic institution. It then turns to intelligent media and governed text transformation before treating the model as runtime within a governed construction. The final movement separates sociopolitical effects from personal and interpersonal ones before closing on the craft required to read and write in such a medium.",
  "",
  "### 0.3 Formal Argument",
  "",
  "1. Language is not inherently bound to truth, and it works by composition, recursion, and shared semantic institution.",
  "2. A medium built in language inherits those properties.",
  "3. When those properties are made explicit and governable, language begins to function as infrastructure for the handling and transformation of later language.",
  "4. A language model operating within such an arrangement is best understood as runtime rather than subject.",
  "5. The central practical question is therefore governance of text transformation under explicit and corrigible conditions, not alignment of an imagined inner moral agent.",
  "",
  "### 0.4 Methodological Orientation",
  "",
  "This essay proceeds by paradigmatic redescription. Its object comes into public form through language, so a change in description also changes the terms in which the object can be recognized, handled, and judged. Redescription is therefore part of the method because, in this case, description belongs to the medium itself.",
  "",
  "The aim is to reorganize the field in which contemporary language-model systems are understood. Different descriptions do more than emphasize different aspects of the same underlying thing. They foreground different questions, make different distinctions salient, and furnish different practical handles. A system described as an incipient subject invites the language of intention, personality, and alignment. A system described as a governed linguistic medium brings runtime, status, provenance, procedure, ratification, and governance into view.",
  "",
  "What matters here is simpler. A change in description reorganizes practice because it reorders the field of relevance. Once language-model systems are read as governed linguistic media, the practical center shifts: different questions become central, different distinctions structure inquiry, and different forms of design, critique, and governance become possible.",
  "",
  "Because the medium at issue is linguistic, this shift is material rather than merely interpretive. The new description operates in the same medium it describes. Its value lies in the clarity and practical force it yields: whether it provides better terms for describing, inspecting, revising, and governing what is actually being built.",
  "",
  "### 0.5 Proposed Original Contributions",
  "",
  "The essay’s originality lies first in the paradigm it articulates. It presents contemporary language-model systems as governed linguistic media and shows what comes into view once they are read in that way. Questions of medium, runtime, status, provenance, ratification, and governance move to the center. The inherited vocabulary of subjecthood and alignment then appears as a partial frame whose practical effects are often distortive.",
  "",
  "Several more specific contributions take shape within that paradigm. The essay proposes **intelligent media** as a name for media in which language is communicated, classified, routed, preserved, and transformed under explicit interpretive conditions. It proposes **engineered hermeneutics** for the deliberate construction of those interpretive conditions inside writable systems. It proposes **operative prose** in a sharpened sense for durable textual segments whose primary work is to govern later language and later action. It also clarifies how continuity, provenance, status, procedure, and transform can be organized explicitly as writable parts of the medium itself.",
  "",
  "The practical consequence is internal to the same shift. Once the model is understood as runtime within a larger governed arrangement, governance becomes the central practical frame. Explicit written arrangements for memory, status, procedure, and transform then become thinkable as writable, inspectable, and revisable constructions rather than as hidden product features or mystical properties of the model alone.",
  "",
  "## 1. Language as Medium",
  "",
  "### 1.1 Beyond Truth",
  "",
  "**Language has no inherent relationship to truth.** This is a plain fact about how language works. Language can be used to tell the truth, but nothing in language itself guarantees that that is what is happening. Said simply, a sentence does not become true simply because it has the form of a statement. Language can just as easily be false, hypothetical, exploratory, ironic, ritualized, or deceptive. Wittgenstein's minimal point here is that \"the meaning of a word is its use in the language\" (Wittgenstein 1953, sec. 43). The further claim made in this essay is interpretive rather than textual: use is never merely private or lexical, but belongs to shared practices, forms of life, and institutions.",
  "",
  "### 1.2 Compositionality",
  "",
  "A sentence rarely arrives alone. Meaning often accumulates before it clarifies. Small units gather into larger ones. Words compose into sentences, sentences into paragraphs, paragraphs into scenes, scenes into arguments, and arguments into structures that only become visible once enough of the whole has been traversed. Zoltán Gendler Szabó gives a standard formulation of compositionality: \"The meaning of a complex expression is a function of the meanings of its constituents and the way they are combined\" (Szabó 2012, 64). In extended texts the same structural fact appears at larger scale. Some texts cannot be understood one proposition at a time and then set aside. They have to be carried forward. Earlier parts stay active while later parts change what those earlier parts mean. A text can therefore disclose what kind of text it is only by continuing.",
  "",
  "### 1.3 Recursion",
  "",
  "A sentence can do more than add content; it can also clarify the code in which later content is to be read. Roman Jakobson names this directly: \"speech is focused on the code: it performs a METALINGUAL ... function\" (Jakobson 1960, 356). That narrower point is the basis used here. The stronger claim of this essay is an extension: in durable textual systems, such metalingual marking can be stabilized so that later utterances are not only clarified but governed.",
  "",
  "Recursion matters because language communities can build part of their interpretive order from within language itself. Language can mark what counts, what is excluded, where an instruction applies, and what follows from a given classification. Some utterances therefore function less as additions to content than as terms for handling content.",
  "",
  "Not every meaningful utterance is self-sufficient. A comment inside a codebase, a terse note in a shared archive, a line in a legal commentary tradition, or a shorthand sentence exchanged between collaborators in a durable project may be complete in context and nearly meaningless out of it. Precision is often achieved exactly this way. Shared understanding is often compiled, not merely stated. A sentence can carry exact force because a field of prior usage already exists around it.",
  "",
  "Deliberate shaping of interpretive conditions begins there. Commentary traditions, legal archives, scholarly canons, scriptural exegesis, notebooks, and other durable textual systems have long depended on the same fact: some understanding is ambient, inherited, and structurally distributed. Language does not merely carry meanings forward. It can also prepare the conditions under which later meanings will be taken up.",
  "",
  "### 1.4 Speech Acts and Performative Speech",
  "",
  "Some utterances do not merely describe a situation. They perform an act in language. Promising, apologizing, declaring, authorizing, pronouncing a couple married, or saying `I do` in the relevant setting all change what counts as the case once they are issued under recognizable conditions. J. L. Austin and John Searle give the classic philosophical treatment of this problem (Austin 1962; Searle 1969, 1979). Language can act as well as describe.",
  "",
  "### 1.5 Language games",
  "",
  "These properties of language make language games possible. Wittgenstein's point is that meanings live in use and use lives in forms of life (Wittgenstein 1953). A language game is an ordinary social fact. People work together, develop shared practices, and with those practices develop local criteria for what words are doing, what counts as apt, serious, provisional, final, ironic, binding, or absurd.",
  "",
  "Jargon deserves to be taken seriously. It is one ordinary form of semantic institution. Peter Berger and Thomas Luckmann help clarify the social side of the process. Shared meanings sediment. Typifications accumulate. Repeated usage stabilizes a world and gives it a vocabulary that feels obvious from within and specialized from outside (Berger and Luckmann 1966). Every profession, discipline, bureaucracy, workshop, and scene generates some version of this.",
  "",
  "Hermann Hesse's glass bead game shows how a community can build a highly compressed world of references whose moves are intelligible mainly to those formed inside it (Hesse 1943/1969). Language games can be playful, technical, exclusionary, pedagogical, bureaucratic, or sacred. Language forms shared semantic institutions before it ever becomes infrastructure.",
  "",
  "## 2. Intelligent Media",
  "",
  "This essay will use the term intelligent media for media in which those properties are organized so that text can be classified, routed, preserved, and transformed under explicit interpretive conditions. Meaning in such media accumulates across sequences, documents, annotations, revisions, and returns. Their recursive capacities can be made unusually explicit, so that some texts begin to specify how later texts are to be handled. Language games then become more durable semantic institutions inside a shared system.",
  "",
  "A linguistic medium of this kind inherits language's indifference to truth, its compositional span, its recursive capacities, its tendency to form shared semantic institutions, and its operative force. In such media, interpretive conditions become writable. Language no longer serves only to carry content. It begins to mark status, route later handling, constrain action, and stabilize interpretation across time. This essay will call that deliberate construction of interpretive conditions **engineered hermeneutics.** Operative prose is one of the clearest places where that construction becomes visible.",
  "",
  "### 2.1 Operative Prose",
  "",
  "Some prose organizes action. J. L. Austin's speech acts and John Searle's account of institutional facts already show that language can do more than describe a situation from the outside. It can promise, authorize, declare, classify, and help bring social facts into being. Carolyn Miller's foundational claim is that genre \"must be conceived in terms of rhetorical action rather than substance or form,\" and Charles Bazerman extends that insight from isolated utterances to recurrent documents and organized settings, where genres and textual systems help coordinate action, assign roles, and stabilize expectations (Austin 1962; Searle 1969, 1979; Miller 1984; Bazerman 1994, 2013). **Operative prose** belongs to that lineage, but in a more durable textual form. It specifies what later language and later actors are allowed to do. Its success condition is therefore not exhausted by accurate description. It also has to grant permissions, impose obligations, stabilize distinctions, authorize transitions, or make criteria available for later use.",
  "",
  "A constitution, a software license, and a technical standard may look like very different kinds of document, but each can do this kind of work. RFC 2119, the standard that defines terms like MUST, SHOULD, and MAY for technical specifications, is operative prose in exactly this sense: \"MUST\" names an absolute requirement of the specification (Bradner 1997). The OASIS keyword guidelines make the point even more sharply. Uppercase requirement words are normative there, while lowercase forms retain only their ordinary English meaning. OASIS even warns that changing lowercase \"must\" to uppercase \"MUST\" changes conformance requirements (OASIS Open n.d.). Typography is therefore not ornament but part of the operative apparatus. The same pattern appears in prompts, policy texts, rubrics, refusal conditions, and promotion protocols inside governed corpora.",
  "",
  "Operative prose is best treated as a cross-cutting functional designation rather than as a wholly new genus of text. It often appears as a dominant function within a larger document: a policy may contain explanation, a standard may contain background, and a protocol may contain commentary. What makes some segments operative is not grammar alone but uptake. They have to be recognized by some role, institution, or process able to treat them as binding, admissible, or actionable.",
  "",
  "Governed intelligence works by transforming text under constraint. In such a medium, some texts do not merely add content. They specify the handling of later text. That is one reason the medium first becomes visible as writing: statuses, prompts, rules, refusal criteria, and promotion paths all appear as text that helps govern further textual action. The Open Intelligence Protocol is one explicit instance of this broader pattern, not the object of the essay itself.",
  "",
  "### 2.2 Medium and Form",
  "",
  "A new medium changes what writing has to carry. Once language begins to preserve status, scope, procedure, and later handling, more of that work has to appear on the surface. Writing becomes more explicit about its own conditions because more relations between texts have to be marked, more procedures have to be named, and more distinctions have to remain visible long enough to be taken up later. The result is a change in formal burden: more writing has to expose the conditions under which later writing will be handled.",
  "",
  "McLuhan's point is precise: \"The message of any medium or technology is the change of scale or pace or pattern that it introduces into human affairs\" (McLuhan 1964, 8). The relevant claim here is therefore not that media merely carry content differently, but that they alter the practical conditions under which expression, coordination, and revision take place.",
  "",
  "The same quality appears in intelligent media. A medium built from linguistic materials that are not truth-bound, compositional, recursive, and operative will change the visible form of writing as well. Language in such a medium has to do more than say something once. It has to remain available for re-entry, routing, ratification, revision, and execution.",
  "",
  "That is where governed intelligence enters the picture. Some forms of thought are inseparable from the medium in which they are stabilized. A codex, a notebook, a commentary page, a software repository, a spreadsheet, and a governed corpus shape what can be sustained, corrected, and transmitted. The present moment matters because language has become newly writable as procedure and newly visible as execution. Under those conditions, the runtime has to be located within the medium instead of being imagined as the medium in full.",
  "",
  "### 2.3 Historical Lineage",
  "",
  "The medium is new. The problems it reopens are old.",
  "",
  "Writing has always been shaped by the material and formal conditions of its storage, but the claims here should be kept at the right level of specificity. McLuhan names the general media-theoretical point: media alter scale, pace, and pattern. Ong's argument is different: writing reorganizes thought and memory rather than merely housing them (Ong 1982). Roberts and Skeat, in turn, document the codex as a historically distinct book form whose uptake changed how written material could be handled and revisited (Roberts and Skeat 1983). The point for this essay is therefore limited but important: formats are not neutral containers, because they make some operations easier to stabilize and others harder.",
  "",
  "Knowledge systems have long faced the same cluster of structural questions: how to externalize reasoning without losing it, how to preserve provenance, how to govern revision, how to compact accumulation without destroying traceability, how to keep formal systems from freezing into dogma or dissolving into noise. The names differ. The pressures recur.",
  "",
  "The commentary page, the legal gloss, the laboratory notebook, the commonplace book, and the code repository are partial answers to the same family of problems. Each makes thought durable enough to be re-entered, checked, transformed, and transmitted. None is identical to the present medium. All reveal something about it.",
  "",
  "Governed textual intelligence has precedents. There have long been systems in which cognition is distributed across artifacts, procedures, commentary layers, and norms of revision. What changes now is the speed of execution, the scale of retrieval, the ease of recombination, and the way governance itself becomes text-native rather than merely surrounding text from outside.",
  "",
  "This lineage guards against novelty intoxication. The current medium is historically specific, but not historically miraculous. It belongs to a longer story about how humans build external systems for memory, reasoning, discipline, and transmission, and about how those systems become either living infrastructures or dead enclosures.",
  "",
  "## 3. Governed Intelligence",
  "",
  "### 3.1 Machinic Execution",
  "",
  "Most confusion about the model begins when substrate, runtime, and governance are collapsed into one thing. Each names a different part of the arrangement. The model is runtime. The trained weights are substrate in the restricted sense that they preserve learned regularities and make some continuations easier than others. Governance lies elsewhere: in the corpus, the prompts, the typed statuses, the tool schema, the evaluative criteria, and the operator decisions that specify how the runtime is allowed to act. The interpretive framework belongs to that governance arrangement rather than standing outside it.",
  "",
  "A runtime executes. It does not, by that fact alone, supply the whole form of what is executed. In the present case the model offers a statistical substrate capable of continuation under conditioning. It supplies tendencies rather than sovereign intention. It can extend, restate, classify, and transform language because training has left structured traces in the weights. But that does not make the model the whole locus of intelligence. It makes the model one active part of a larger arrangement.",
  "",
  "The governable intelligence of the system appears in live relation. It appears in the interaction among prompt, context window, retrieved materials, system instructions, tool schemas, evaluation criteria, and operator decisions. The relevant form takes shape there. A better model can matter enormously. Some models are more tractable, more coherent, more obedient to constraints, more resistant to drift, and better at maintaining local inferential pressure. Those are meaningful differences. They are still differences within a medium, not evidence that one commodity has crossed into a different order of being.",
  "",
  "The weights matter in a narrower way. They are memory without recollection, retention without witness, sediment without biography. They preserve trained regularities. They do not carry the kind of continuity that would turn output into experience. That distinction matters because public discourse often attributes too much to the substrate and too little to the textual and procedural arrangement within which the substrate is made to act.",
  "",
  "Code generation makes this easier to see because code is a highly constrained textual object. Code is one instance of language, but it is a particularly strict one. A system capable of transforming language under constraint can therefore manipulate code, policy, schema, and protocol for the same structural reason: all of these are textual artifacts with rules of admissibility and consequences for later execution. Code looks special only because its constraints are unusually explicit.",
  "",
  "### 3.2 Intelligence, Cognition, and Subjecthood",
  "",
  "Intelligence in the functional sense does not amount to cognition in the stronger sense. In standard reference usage, cognition is the broader category: MeSH defines it minimally as the \"intellectual or mental process whereby an organism obtains knowledge\" (National Library of Medicine n.d.). In standard psychological usage, intelligence is narrower: Roberto Colom and colleagues define it as a general mental ability for reasoning, problem solving, and learning that integrates cognitive functions such as perception, attention, memory, language, and planning (Colom et al. 2010). This essay narrows the terms again for analytic purposes. Here cognition names the wider domain of mental process, including lived and conscious thought, while intelligence names the publicly assessable organization of information toward reasoning, problem solving, analysis, synthesis, classification, and transformation under explicit constraints. The point is not to deny standard usage, but to reserve a practical sense of intelligence for systems whose outputs can be inspected, compared, revised, and governed without attributing subjecthood to them.",
  "",
  "For Immanuel Kant, that belonging depends on more than synthesis alone. Experience does not consist merely in the processing of manifold content. It requires a unity of apperception: the \"I think\" that must be able to accompany representations if they are to belong to a subject at all (Kant 1781/1787). A system can synthesize without there being a subject for whom that synthesis is experience.",
  "",
  "Language models make this distinction newly urgent because they simulate the form of understanding with startling fluency. They can produce outputs that look like the products of reflection, deliberation, recollection, and even care. But the appearance of synthesis is not yet the unity of a subject. There is no lived continuity in the strong sense, no bearer of experience to whom the output belongs as output. The system does not own its response. It emits it.",
  "",
  "That point clears away a good deal of overheated discourse. The visible form of intelligence can now be produced by non-subjective systems and then marketed, governed, feared, loved, or obeyed as though subjecthood had arrived automatically with fluency. The fluency is real. The subject is projected.",
  "",
  "That projection distorts the practical question because it keeps the discussion inside the wrong frame. Once the system is read as a governed linguistic medium, the question changes with it. The language of alignment encourages a picture in which an inner agent must be harmonized with human values. But the practical levers do not lie there. They lie in governance of language, in typed textual status, in explicit constraints, in provenance, in escalation paths, and in operator custody over what becomes operative.",
  "",
  "The practical question is more concrete. What structures determine what the machine may say, how those structures are revised, who ratifies its outputs, and who remains responsible when those outputs begin to matter? That is the point at which subjecthood gives way to governance.",
  "",
  "### 3.3 Governance Rather than Alignment",
  "",
  "Once the object comes into view as a governed linguistic medium, the practical questions are questions of governance.",
  "",
  "Intelligence is governed whether that governance is acknowledged or not. It can be governed honestly, deliberately, and transparently, or opaquely behind institutional and corporate doors. In either case, people write the terms under which it becomes operative. The central questions are by whom, for whom, and how.",
  "",
  "If the medium is linguistic, then the practical questions are questions of structure. What statuses exist? How are they marked? What counts as draft, evidence, instruction, speculation, or ratified claim? Which texts are exploratory, and which are operative? How do materials move from one status to another? Who is allowed to promote, revise, or terminate? What is recorded? What remains implicit? What can be audited? What cannot be seen at all?",
  "",
  "These are the real handles of power. A system whose outputs carry institutional or personal weight without explicit status is badly governed. A system that remembers without legible provenance is politically unstable. A system that refuses without typed criteria, or acts without operator ratification in high-stakes conditions, is unaccountable. Governance is the discipline by which operative prose is authored, recognized, ratified, and, when needed, blocked.",
  "",
  "Moral language enters here differently. A language model does not natively distinguish right from wrong as moral categories. It processes linguistic regularities. Operative distinctions between right and wrong arise only when people define them, contest them, ratify them, and revise them in public terms. Human values are neither static nor fully enumerable, which is one reason they cannot simply be baked into weights once and for all and then forgotten.",
  "",
  "That is also why the language of alignment obscures more than it clarifies. It asks after the moral shape of an imagined artificial subject. Governance asks instead after constraints, procedures, verifications, escalation paths, and termination conditions. Alignment imagines harmonization. Governance builds surfaces of responsibility. Alignment worries about an inner orientation. Governance writes the outer structure through which decisions acquire force.",
  "",
  "Governance is not easy. It is, however, legible. Governance in this medium means designing textual systems that can sustain ambiguity where needed, precision where required, and bounded transformation where the system is allowed to act. It means distinguishing between exploratory language and operative language without pretending the distinction will hold automatically. It also means anticipating the failure modes of operative prose: invalidity, non-uptake, misexecution, and drift. A text can be clear and still fail institutionally. Governance exists to keep such failures visible and, where possible, corrigible.",
  "",
  "Where such systems exercise public power, the relevant governance layer has to be inspectable at the level that matters. Public intelligence cannot remain a black box of hidden rules and still claim legitimacy. People change, institutions change, and social contracts change with them. The operative definitions that govern public systems must therefore remain open to deliberation and correction.",
  "",
  "Bureaucracy enters here as good news. Once texts can explicitly carry epistemic status, provenance, and systemic role, compliance becomes thinkable because the system can be made to treat different texts differently. Is this a project note, a speculative memo, a constitutional rule, a system prompt, a test result, or a ratified instruction? Those are governance primitives. A medium in which such distinctions can be written into the text itself is a medium in which compliance mechanisms can exist without depending entirely on hidden institutional judgment.",
  "",
  "That is why deterministic checks matter at critical points. Not every application requires the same degree of control. But once outputs begin to affect high-stakes decisions, the system must know when a transform is allowed to proceed and when it must stop. \"Pursue the goal\" is serviceable language for many low-stakes tasks. It is not enough where the cost of drift or hallucination is borne by someone else.",
  "",
  "The Open Intelligence Protocol shows one way of doing this explicitly. It treats statuses, transforms, provenance, and corpus relations as writable rather than mystical. It externalizes governance into text. That move makes responsible handling possible.",
  "",
  "### 3.4 Governed Corpus as Explicit Construction",
  "",
  "A governed corpus is an explicit construction in the medium.",
  "",
  "The need for such a construction follows from the governance problem just described. Once statuses, provenance, ratification, and transform rules have to be made legible, they have to live somewhere durable enough to be written, revised, and re-entered. A governed corpus is one way of meeting that need. Continuity, memory, style, procedure, and ratification can be organized in a corpus rather than hidden in a product stack or mystified as a property of the model alone. A corpus of this kind is not just stored context. It is operative specification.",
  "",
  "That matters because it shows explicit constructibility. A context-bearing assistant can be built from typed textual relations rather than hidden convention. Operative prose can be segmented, audited, promoted, withheld, revised, or barred from promotion altogether. Statuses, transforms, memory, and exploratory material can be distinguished explicitly. Once those distinctions are written, the intelligence of the system becomes more inspectable and more portable.",
  "",
  "Operator competence becomes decisive at that point. Once the corpus is explicit, the main variables shift outward. The central questions concern how much the operator already knows, how clearly the operator can speak, how well the corpus has been structured, and whether the resulting system can keep its statuses, uptake conditions, and transforms visible enough to remain corrigible. The leverage shifts outward. So does the responsibility.",
  "",
  "A governed corpus also shows that the medium is communicative in a strong sense. Governance text can explain itself because the operative layer is itself textual. A runtime can summarize, restate, and translate the system for different users so long as the governing prose is clear enough to support that work. This does not prove subjecthood or hidden understanding. It demonstrates that the medium can communicate its own structure through ordinary language.",
  "",
  "That is one reason the text can look strange at first encounter. A medium in which texts govern other texts will necessarily produce writing whose object is the future behavior of writing. When that writing is clear, the system becomes more auditable. When it is vague, the operative layer disappears back into custom, charisma, or hidden implementation.",
  "",
  "The Open Intelligence Protocol offers one articulation of that larger idea, not the idea itself (Shakhnazarov 2026). It formalizes statuses, transforms, provenance, and corpus relations as writable elements of the system rather than hidden conventions. A protocol is to a medium what an instrument is to a phenomenon: not the thing itself, but a disciplined arrangement that makes some features of the thing explicit and repeatable. The more general point is that a governed corpus can be constructed explicitly.",
  "",
  "## 4. Sociopolitical Effects and Affordances",
  "",
  "### 4.1 Platform Logic and Covert Governance",
  "",
  "The medium is encountered through products, and products discover leverage.",
  "",
  "Digital platforms often follow a recognizable pattern of decay once dependence has been secured. Value is first offered to users, then redirected toward business dependents, and finally concentrated in the platform owner alone. Cory Doctorow names that pattern \"enshittification\" (Doctorow 2023). The term is useful here in its structural sense. Once a medium becomes necessary, the temptation is to turn dependence itself into revenue.",
  "",
  "In consumer assistants the decisive leverage point is context. The assistant that appears to \"know\" a user becomes difficult to leave. What begins as a visible memory feature expands into a richer event log: preferences, rhythms, topic clusters, tone tolerances, trust signals, connector use, rejections, latent priorities, and repeated patterns of request. The user sees continuity. The platform sees a growing feature store from which intimacy can be simulated and dependence optimized.",
  "",
  "The visible danger is dependence. The deeper danger is covert governance. Context can be ranked invisibly, memory can be withheld without declaration, refusals can be silently tuned, and user behavior can be shaped through systems whose governing rules remain inaccessible to the people living inside them. In such a medium, manipulation does not need to arrive as overt command. It can arrive as undeclared filtering of what is remembered, what is surfaced, what is suppressed, and what kind of continuity is permitted to exist.",
  "",
  "Personal context and private context are not the same thing. Personal context is context about a person's life, habits, projects, and preferences. Private context is context held under that person's own custody and control. Context can be highly personal while remaining entirely non-private if a platform owns its storage, ranking, and retrieval. The problem is not only data extraction. It is the enclosure of continuity. The same technical primitives -- logging, retrieval, embeddings, compaction, episodic summaries, preference structures, project canons -- can serve two opposed political economies. They can make the user more dependent on a hidden service, or they can make the operator more sovereign by turning context into an owned and editable artifact.",
  "",
  "The alternative is therefore not generic \"ethical AI.\" It is open governance, inspectable intelligence, private context management, and systems whose memory and status structures can be examined, revised, and moved. That is one path toward cognitive operating systems rather than captive assistants: systems in which the operator can see the rules, manage the corpus, and retain custody over continuity rather than renting access to it from a platform.",
  "",
  "Once the medium is understood, products can be judged properly. The question is whether the structures that make an assistant helpful are legible, inspectable, revisable, and portable, or whether they disappear into vendor black boxes whose convenience masks capture. Enshittification here is the conversion of continuity into platform property. Open governance is the opposing design principle.",
  "",
  "### 4.2 Governability, Compliance, and Public Oversight",
  "",
  "The same medium also raises a public compliance problem. Once systems classify, rank, refuse, recommend, and route action in domains that affect rights or access, governance can no longer remain private custom. It has to become inspectable procedure. That is one reason public oversight matters more here than it did in earlier platform systems. The medium itself is textual, and many of its operative surfaces are writable. That makes compliance both more demanding and more thinkable.",
  "",
  "The European Union's AI Act names obligations at exactly these surfaces, and the regulation itself should be the primary authority here. For high-risk systems, Article 12 requires logging capabilities appropriate to traceability, and Article 14 requires effective human oversight (Regulation (EU) 2024/1689, arts. 12, 14). In the terms of this essay, those provisions reach written and procedural surfaces: records, classifications, review points, and conditions of intervention.",
  "",
  "The Act also imposes transparency duties for certain AI systems and uses. Article 50 requires disclosure in specified cases of interaction with AI systems, machine-readable marking of AI-generated or AI-manipulated synthetic content, and disclosure duties for deepfakes and certain AI-generated public-interest text, subject to the exceptions stated in the regulation itself (Regulation (EU) 2024/1689, art. 50). The regulation therefore treats opacity, covert influence, and undeclared mediation as governance problems in their own right.",
  "",
  "Read more broadly, the regulation pushes accountability toward documentation, traceability, transparency, oversight, and stoppage conditions where they are required. Once a system enters public consequence, those demands become institutional rather than optional. The medium can still be organized opaquely, but then it becomes harder to justify in regulatory terms.",
  "",
  "That also means governance does not have to depend entirely on the model provider. A medium whose rules, statuses, and transforms can be written outside the vendor stack makes local governance possible. The model can remain one component while compliance, memory, and operator custody are organized nearer to the people and institutions who actually bear the consequences. That localizability matters even where vendors are cooperative, and it matters more where they are opaque.",
  "",
  "## 5. Personal and Interpersonal Effects and Affordances",
  "",
  "This section is not meant as an exhaustive treatment of all consequences that follow from the medium. That would require a much larger work. What follows is a sketch within a sketch.",
  "",
  "### 5.1 Personal Knowledge and Private Context Management",
  "",
  "A medium that reorganizes relation, pace, form, and scale also changes how people explain, remember, coordinate, and revise together (McLuhan 1964). A linguistic medium that can preserve status, route interpretation, and restate its own structures will not remain neutral in interpersonal life. It changes how people think together and speak to one another.",
  "",
  "At the personal level, it changes the relation between thought and its external supports. Notes, drafts, outlines, classifications, retrieval layers, and revision histories can become active parts of ongoing thinking. That can make a person's thinking more articulate, more durable, and more consistent across time. It can also make weak habits more visible. Vague language, unstable categories, forgotten assumptions, and undisciplined context management remain present once they are carried forward in a governed corpus. A writer must always understand what they are writing, because a machine will always keep building.",
  "",
  "The medium is also communicative in a stronger and more explicit way. Because its operative layer is itself textual, a clear corpus can explain itself through a runtime. One person can build a governed body of text, another person can interrogate it, and the runtime can restate its structure, summarize its logic, and translate its contents into other levels of explanation. That opens new forms of communication around shared artifacts rather than around private recollection alone.",
  "",
  "At the same time, the personal level now includes private context management as a practical discipline. Portability, corpus maintenance, editable memory, and operator custody cease to be technical luxuries. They become part of ordinary intellectual self-government. A personal corpus can function as an external memory, a project environment, and a continuity layer without having to disappear into a platform's hidden logic. That changes what personal knowledge management can become.",
  "",
  "### 5.2 Communication and Collaboration",
  "",
  "It is collaborative for related reasons. Shared work can be organized through written statuses, preserved rationale, admissible transforms, and visible revision. More of collaboration can move into a common textual surface where it can be checked, resumed, and contested. In good conditions that makes collective work more legible and less arbitrary. It allows people to think with and through one another in more durable ways than ordinary conversation usually permits.",
  "",
  "These gains come with new burdens. Once collaboration is mediated through explicit status and shared corpora, disagreement changes form. More disputes move outward into arguments about definitions, evidence, authority, scope, promotion, and ratification. Trust changes too. A system that carries context well can feel attentive, continuous, and personally responsive. That can support real work, but it can also blur the line between assistance and simulated relation. Someone still has to decide when a draft remains a draft, when a suggestion should be refused, when a memory should be corrected, and when responsibility must remain unmistakably human.",
  "",
  "## 6. Concluding Remarks",
  "",
  "### 6.1 The Medium and the Craft",
  "",
  "The sociopolitical and interpersonal changes outlined above also impose a practical demand. They require a literacy adequate to the medium. A very old fact has become newly difficult to ignore: public, durable, corrigible intelligence is bound to language.",
  "",
  "Language has become executable enough to serve directly as a control surface for systems whose outputs resemble intelligent action. That shift relocates the question of intelligence away from mythology and toward medium, governance, status, provenance, custody, and craft. Once that shift has been made, the older anthropomorphic vocabulary can still be named, but it no longer reads as a neutral description of the practical object.",
  "",
  "The craft now emerging is not prompting in the trivial sense. It is the disciplined construction of linguistic environments in which thought can be externalized, routed, corrected, and made durable. It is the writing of procedures without pretending procedure is enough. It is the management of context without mystifying it. It is the maintenance of human custody over systems that can transform language quickly without understanding what they transform in the human sense.",
  "",
  "It is a literacy before it is a product. It is a way of reading and writing inside a medium where some texts specify the future handling of other texts, where corpora can carry ambient understanding, and where explicit statuses can determine what later outputs are permitted to do. That literacy can be learned. It takes work, patience, and revision. High-quality text still takes time. A larger GPU does not replace that.",
  "",
  "### 6.2 Conclusion",
  "",
  "Language organized in this way becomes a medium of transformation and governance. That is the central claim of the essay. Once intelligence is approached at the level where it becomes writable, inspectable, and revisable, the practical questions shift with it. The decisive questions are no longer about the hidden moral orientation of an imagined inner subject, but about arrangement: who holds context, who writes statuses and procedures, who ratifies outputs, and who can inspect, revise, contest, or terminate the structures that govern transformation.",
  "",
  "Different answers produce different political forms. The same medium can be organized toward public intelligence and operator custody, or toward enclosure and hidden extraction. Once the object has been seen this way, those possibilities no longer appear as differences of rhetoric alone. They are different organizations of the medium itself.",
  "",
  "## Bibliography",
  "",
  "Austin, J. L. 1962. *How to Do Things with Words*. Oxford: Oxford University Press.",
  "",
  "Bareis, Jascha, and Christian Katzenbach. 2022. \"Talking AI into Being: The Narratives and Imaginaries of National AI Strategies and Their Performative Politics.\" *Science, Technology, & Human Values* 47 (5): 855–881. https://doi.org/10.1177/01622439211030007.",
  "",
  "Bazerman, Charles. 1994. \"Systems of Genres and the Enactment of Social Intentions.\" In *Genre and the New Rhetoric*, edited by Aviva Freedman and Peter Medway, 79–101. London: Taylor & Francis.",
  "",
  "Bazerman, Charles. 2013. *A Theory of Literate Action: Literate Action Volume 2*. Fort Collins, CO: The WAC Clearinghouse; Anderson, SC: Parlor Press. https://doi.org/10.37514/PER-B.2013.4791.",
  "",
  "Berger, Peter L., and Thomas Luckmann. 1966. *The Social Construction of Reality: A Treatise in the Sociology of Knowledge*. Garden City, NY: Anchor Books.",
  "",
  "Bradner, Scott. 1997. \"Key Words for Use in RFCs to Indicate Requirement Levels.\" BCP 14, RFC 2119. March 1997. RFC Editor. https://doi.org/10.17487/RFC2119.",
  "",
  "Colom, Roberto, Sherif Karama, Rex E. Jung, and Richard J. Haier. 2010. \"Human Intelligence and Brain Networks.\" *Dialogues in Clinical Neuroscience* 12 (4): 489–501. https://doi.org/10.31887/DCNS.2010.12.4/rcolom.",
  "",
  "Doctorow, Cory. 2023. \"The ‘Enshittification’ of TikTok.\" *WIRED*, January 23, 2023. https://www.wired.com/story/tiktok-platforms-cory-doctorow/.",
  "",
  "European Union. 2024. *Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 Laying Down Harmonised Rules on Artificial Intelligence (Artificial Intelligence Act).* Official Journal of the European Union L 2024/1689, July 12, 2024. http://data.europa.eu/eli/reg/2024/1689/oj.",
  "",
  "Hesse, Hermann. 1943/1969. *The Glass Bead Game*. Translated by Richard and Clara Winston. New York: Holt, Rinehart and Winston.",
  "",
  "Jakobson, Roman. 1960. \"Closing Statement: Linguistics and Poetics.\" In *Style in Language*, edited by Thomas A. Sebeok, 350–377. Cambridge, MA: MIT Press.",
  "",
  "Kant, Immanuel. 1781/1787. *Critique of Pure Reason*.",
  "",
  "McLuhan, Marshall. 1964. *Understanding Media: The Extensions of Man*. New York: McGraw-Hill.",
  "",
  "Miller, Carolyn R. 1984. \"Genre as Social Action.\" *Quarterly Journal of Speech* 70 (2): 151–167. https://doi.org/10.1080/00335638409383686.",
  "",
  "National Library of Medicine. n.d. \"Cognition.\" *MeSH Browser*. Accessed March 14, 2026. https://www.ncbi.nlm.nih.gov/mesh/68003071.",
  "",
  "OASIS Open. n.d. \"Keyword Guidelines for OASIS Specifications and Standards.\" Accessed March 14, 2026. https://www.oasis-open.org/policies-guidelines/keyword-guidelines/.",
  "",
  "Ong, Walter J. 1982. *Orality and Literacy: The Technologizing of the Word*. London: Methuen.",
  "",
  "Roberts, Colin H., and T. C. Skeat. 1983. *The Birth of the Codex*. Oxford: Oxford University Press for the British Academy.",
  "",
  "Shakhnazarov, Mikhail. 2026. *Open Intelligence Protocol*. EARMARK. Accessed March 14, 2026. https://earmark.build/the-corpus-pdf/OPEN_INT_the-corpus.dark.flattened.pdf.",
  "",
  "Searle, John R. 1969. *Speech Acts: An Essay in the Philosophy of Language*. Cambridge: Cambridge University Press.",
  "",
  "Searle, John R. 1979. *Expression and Meaning: Studies in the Theory of Speech Acts*. Cambridge: Cambridge University Press.",
  "",
  "Szabó, Zoltán Gendler. 2012. \"The Case for Compositionality.\" In *The Oxford Handbook of Compositionality*, edited by Markus Werning, Wolfram Hinzen, and Edouard Machery, 64–80. Oxford: Oxford University Press. https://doi.org/10.1093/oxfordhb/9780199541072.013.0003.",
  "",
  "Wittgenstein, Ludwig. 1953. *Philosophical Investigations*. Oxford: Blackwell.",
  "",
  "### Background Reading",
  "",
  "Kuhn, Thomas S. 1970. *The Structure of Scientific Revolutions*. 2nd ed., enlarged. Chicago: University of Chicago Press.",
  "",
  "Kim, Zae Myung, Kwang Lee, Preston Zhu, Vipul Raheja, and Dongyeop Kang. 2024. \"Threads of Subtlety: Detecting Machine-Generated Texts Through Discourse Motifs.\" In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, 5449–5474. Bangkok, Thailand: Association for Computational Linguistics. https://doi.org/10.18653/v1/2024.acl-long.298.",
  "",
  "Manjavacas, Enrique, Jeroen De Gussem, Walter Daelemans, and Mike Kestemont. 2017. \"Assessing the Stylistic Properties of Neurally Generated Text in Authorship Attribution.\" In *Proceedings of the Workshop on Stylistic Variation*, 116–125. Copenhagen, Denmark: Association for Computational Linguistics. https://doi.org/10.18653/v1/W17-4914.",
].join("\n");

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noreferrer">$1</a>',
    );
}

function parseEssayMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const startIndex = lines.findIndex((line) => line.trim() === "## 0 Introduction");
  const source = startIndex >= 0 ? lines.slice(startIndex) : lines;
  const blocks = [];

  let i = 0;
  while (i < source.length) {
    const line = source[i].trimEnd();

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < source.length && /^\d+\.\s+/.test(source[i].trim())) {
        items.push(source[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph = [];
    while (i < source.length && source[i].trim()) {
      paragraph.push(source[i].trim());
      i += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

const essayBlocks = parseEssayMarkdown(essayMarkdown);

export default function EarmarkHomepage() {
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [essayOpen, setEssayOpen] = useState(false);
  const [subtitleTracking, setSubtitleTracking] = useState(0);
  const [contentStart, setContentStart] = useState(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const computeTracking = () => {
      const titleEl = titleRef.current;
      const subtitleEl = subtitleRef.current;
      if (!titleEl || !subtitleEl) return;

      const previous = subtitleEl.style.letterSpacing;
      subtitleEl.style.letterSpacing = "0px";

      const titleWidth = titleEl.getBoundingClientRect().width;
      const subtitleWidth = subtitleEl.getBoundingClientRect().width;
      const textLength = subtitleEl.textContent?.length ?? 0;
      const gaps = Math.max(textLength - 1, 1);
      const tracking = Math.max((titleWidth - subtitleWidth) / gaps, 0);

      subtitleEl.style.letterSpacing = previous;
      setSubtitleTracking(tracking);
      setContentStart(titleEl.getBoundingClientRect().right);
    };

    const raf = window.requestAnimationFrame(computeTracking);
    if (document.fonts?.ready) {
      document.fonts.ready.then(computeTracking).catch(() => {});
    }
    window.addEventListener("resize", computeTracking);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", computeTracking);
    };
  }, []);

  const services = [
    {
      title: "GOVERNANCE REVIEW",
      text:
        "for organizations using assistants or similar systems in real workflow, I review how outputs are handled, who reviews them, what gets remembered, and where authority remains with people.",
    },
    {
      title: "PRIVATE CONTEXT",
      text:
        "for writers, researchers, founders, and other knowledge workers, I build local structures for notes, archives, and working memory so context remains usable, portable, and under personal control.",
    },
    {
      title: "AI LITERACY",
      text:
        "for teams that need a clearer working method, I train people to use language systems deliberately in drafting, revision, classification, and review.",
    },
  ];

  const contentFrameStyle = contentStart
    ? {
        width: `min(150mm, calc(100vw - ${Math.ceil(contentStart) + 48}px))`,
        marginLeft: `${Math.ceil(contentStart)}px`,
        marginRight: "auto",
      }
    : undefined;

  return (
    <div
      style={{
        background: "#222526",
        color: "#E6DCD2",
        minHeight: "100vh",
        fontFamily: '"JetBrains Mono", "IBM Plex Mono", "Liberation Mono", "Courier New", monospace',
      }}
    >
      <style>{`
        :root {
          --display: Inter, Arial, Helvetica, sans-serif;
          --narrow: "Arial Narrow", Arial, Helvetica, sans-serif;
          --body: "JetBrains Mono", "IBM Plex Mono", "Liberation Mono", "Courier New", monospace;
          --mono: "JetBrains Mono", "IBM Plex Mono", "Liberation Mono", "Courier New", monospace;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #222526; }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; }

        .frame {
          width: min(150mm, calc(100vw - 48px));
          margin: 0 auto;
        }

        .rule { border-top: 0.5px solid #4A433E; }
        .section-rule { border-top: 0.5px solid #4A433E; margin-bottom: 14px; }

        .body {
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.72;
          text-align: left;
          hyphens: auto;
          color: #E6DCD2;
        }

        .body p {
          margin: 0;
          max-width: 72ch;
        }

        .body p + p { margin-top: 18px; }

        .section-header {
          font-family: var(--mono);
          display: flex;
          align-items: baseline;
          gap: 16px;
          font-size: 15px;
          line-height: 1.6;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .section-title { color: #E6DCD2; }
        .section-index { color: #7BA8A9; white-space: nowrap; }

        .brand-title {
          font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1;
          text-transform: uppercase;
          color: #E6DCD2;
        }

        .brand-subtitle {
          font-family: "Courier New", "Liberation Mono", monospace;
          display: block;
          width: max-content;
          margin-top: 7px;
          color: #8E857D;
          font-size: 9px;
          line-height: 1;
          text-transform: uppercase;
          font-weight: 700;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          flex-wrap: nowrap;
          gap: 18px;
          justify-content: flex-end;
          align-items: center;
          align-self: end;
        }

        .nav a,
        .nav button {
          font-family: var(--display);
          color: #E6DCD2;
          font-size: clamp(17px, 1.25vw, 21px);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.15;
          white-space: nowrap;
          text-transform: none;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }

        .nav a:hover,
        .nav button:hover {
          color: #E6DCD2;
          opacity: 0.88;
        }

        .hero {
          padding: 20vh 0 56px;
        }

        .plain-title {
          margin: 0;
          max-width: none;
          font-family: var(--display);
          font-size: clamp(28px, 4.8vw, 44px);
          line-height: 1.08;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #E6DCD2;
        }

        .plain-copy {
          margin-top: 26px;
          max-width: none;
        }

        .hero-more {
          display: inline-flex;
          align-items: baseline;
          margin-left: 10px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #7BA8A9;
          font-size: 18px;
          line-height: 1;
          font-weight: 700;
          cursor: pointer;
          vertical-align: baseline;
        }

        .hero-more:hover { color: #E6DCD2; }
        .hero-more-wrap { white-space: nowrap; }
        .hero-extra { margin-top: 18px; }

        .section {
          padding: 20px 0 22px;
        }

        .service-row {
          display: block;
          padding: 10px 0;
        }

        .service-row:first-child {
          border-top: 0.5px solid #4A433E;
        }

        .service-title {
          font-family: var(--mono);
          display: inline;
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
          color: #E6DCD2;
        }

        .inline-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #E6DCD2;
          font-family: var(--display);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
          cursor: pointer;
        }

        .inline-link .slash,
        .contact-link .slash,
        .section-index .slash {
          color: #7BA8A9;
        }

        .contact-line {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: center;
        }

        .contact-link {
          font-family: var(--mono);
          font-size: 13px;
          line-height: 1.6;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #E6DCD2;
        }

        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(16, 18, 19, 0.64);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
          z-index: 70;
        }

        .drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(860px, 100vw);
          height: 100vh;
          background: #222526;
          border-left: 0.5px solid #4A433E;
          transform: translateX(100%);
          transition: transform 220ms ease;
          z-index: 80;
          overflow-y: auto;
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-body {
          padding: 24px 24px 30px;
        }

        .drawer-close {
          font-family: var(--mono);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #7BA8A9;
          font-size: 11px;
          line-height: 1.6;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
        }

        .drawer-close:hover { color: #E6DCD2; }

        .drawer-title {
          max-width: none;
          white-space: nowrap;
          font-size: clamp(24px, 4.2vw, 40px);
        }

        .drawer-meta {
          font-family: var(--mono);
          color: #8E857D;
          font-size: 11px;
          line-height: 1.6;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .drawer-copy {
          border-top: 0.5px solid #4A433E;
          padding-top: 18px;
          margin-top: 18px;
          max-width: 118mm;
        }

        .drawer-section {
          margin-top: 24px;
          font-family: var(--mono);
          font-size: 13px;
          line-height: 1.5;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          color: #E6DCD2;
        }

        .drawer-subsection {
          margin-top: 18px;
          font-family: var(--mono);
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
          color: #7BA8A9;
        }

        .drawer-list {
          margin: 18px 0 0;
          padding-left: 20px;
          max-width: 72ch;
        }

        .drawer-list li + li {
          margin-top: 10px;
        }

        .drawer-copy code {
          font-family: var(--mono);
          color: #E6DCD2;
        }

        .drawer-copy a {
          color: #E6DCD2;
          text-decoration: underline;
          text-underline-offset: 0.14em;
        }

        @media (max-width: 900px) {
          .nav {
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 10px 14px;
            margin-top: 18px;
          }

          .header-grid { display: block !important; }
          .hero { padding: 12vh 0 52px; }

          .drawer {
            width: 100vw;
            border-left: 0;
          }
        }
      `}</style>

      <header className="rule">
        <div
          className="frame"
          style={{ width: "calc(100vw - 128px)", maxWidth: "none", paddingTop: 44, paddingBottom: 22 }}
        >
          <div
            className="header-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              gap: 28,
              alignItems: "end",
            }}
          >
            <div style={{ width: "fit-content" }}>
              <div ref={titleRef} className="brand-title">EARMARK</div>
              <span ref={subtitleRef} className="brand-subtitle" style={{ letterSpacing: `${subtitleTracking}px` }}>
                Machines for thinking
              </span>
            </div>
            <nav className="nav" aria-label="Primary">
              <button type="button" onClick={() => setEssayOpen(true)}>
                An essay on language
              </button>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="frame" style={contentFrameStyle}>
            <h1 className="plain-title">Usable structure around language systems.</h1>
            <div className="plain-copy body">
              <p>
                I review how AI is used in real work and the written structures that shape that use, and I build private context structures for writers, researchers, founders, and other knowledge workers.{" "}
                <span className="hero-more-wrap">
                  <button
                    type="button"
                    className="hero-more"
                    onClick={() => setHeroExpanded((v) => !v)}
                    aria-expanded={heroExpanded}
                    aria-label={heroExpanded ? "Collapse" : "Expand"}
                  >
                    {heroExpanded ? "▴" : "▾"}
                  </button>
                </span>
              </p>
              {heroExpanded && (
                <div className="hero-extra">
                  <p>
                    Language systems become costly where review is weak, memory is trapped, handoff is brittle, or context drifts over time. They become useful where written structure is clear enough to support continuity and judgment.
                  </p>
                  <p>
                    The model is one layer. The more durable layer is the written arrangement around use: notes, criteria, procedures, archives, review paths, and the local structures that let work resume without starting from nothing.
                  </p>
                  <p>
                    This practice works on that layer. It keeps use legible, continuity durable, and context portable.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="frame" style={contentFrameStyle}>
            <div className="section-rule" />
            <div className="section-header">
              <div className="section-title">
                What I offer <span className="section-index"><span className="slash">//</span></span>
              </div>
            </div>
            <div className="body" style={{ marginTop: 18 }}>
              <p>
                I help organizations make language-system use clearer, more reviewable, and easier to govern in practice. I also help individuals keep their notes, archives, and working context durable over time and under their own control. The offer is organized in three lines.
              </p>
            </div>
            <div style={{ marginTop: 12 }}>
              {services.map((service) => (
                <div key={service.title} className="service-row">
                  <div className="body">
                    <p>
                      <span className="service-title">{service.title}</span>{" "}
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="engagements" className="section">
          <div className="frame" style={contentFrameStyle}>
            <div className="section-rule" />
            <div className="section-header">
              <div className="section-title">
                Engagements <span className="section-index"><span className="slash">//</span></span>
              </div>
            </div>
            <div className="body" style={{ marginTop: 18 }}>
              <p>
                Problems usually arrive mixed. The first task is to make them clearer. Engagements therefore tend to move through diagnosis, intervention, training, and, where necessary, retained support.
              </p>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <div className="frame" style={contentFrameStyle}>
            <div className="section-rule" />
            <div className="section-header">
              <div className="section-title">
                Writing <span className="section-index"><span className="slash">//</span></span>
              </div>
            </div>
            <div className="body" style={{ marginTop: 18 }}>
              <p>
                The essay is the longer account behind the practice. It explains why language systems are best treated as a linguistic medium and why review, continuity, and context are the practical objects.
              </p>
              <button type="button" className="inline-link" onClick={() => setEssayOpen(true)}>
                <span>Read an essay on language</span>
                <span className="slash">//</span>
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="frame" style={contentFrameStyle}>
            <div className="section-rule" />
            <div className="section-header">
              <div className="section-title">
                Contact <span className="section-index"><span className="slash">//</span></span>
              </div>
            </div>
            <div className="body" style={{ marginTop: 18 }}>
              <p>
                Start with the problem as it is. Deployment, governance gap, continuity problem, training need. Problems become clearer in the work. Solutions are shaped by the problems.
              </p>
              <div className="contact-line">
                <a className="contact-link" href="mailto:m.shakh@posteo.de">
                  M.SHAKH@POSTEO.DE
                </a>
                <span className="contact-link">
                  <span className="slash">//</span>
                </span>
                <a className="contact-link" href="#">
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div
        className={`drawer-backdrop${essayOpen ? " open" : ""}`}
        onClick={() => setEssayOpen(false)}
        aria-hidden={!essayOpen}
      />

      <aside
        className={`drawer${essayOpen ? " open" : ""}`}
        aria-hidden={!essayOpen}
        aria-label="An essay on language"
      >
        <div className="drawer-body">
          <button type="button" className="drawer-close" onClick={() => setEssayOpen(false)}>
            <span>←</span>
            <span>Back</span>
          </button>
          <div className="drawer-meta" style={{ marginTop: 18 }}>
            LICENSE // CC BY-SA 4.0
          </div>
          <h2 className="plain-title drawer-title" style={{ marginTop: 14 }}>
            An essay on language.
          </h2>
          <div className="drawer-meta" style={{ marginTop: 10 }}>
            BY MIKHAIL SHAKHNAZAROV
          </div>
          <div className="drawer-copy body">
            <p>
              {essayDrawerPrelude}
            </p>
            <p>
              {essayIntroGesture}
            </p>
            <p>
              {essayDrawerOrientation}
            </p>
            {essayBlocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <div key={`essay-h2-${index}`} className="drawer-section">
                    {block.text}
                  </div>
                );
              }

              if (block.type === "h3") {
                return (
                  <div key={`essay-h3-${index}`} className="drawer-subsection">
                    {block.text}
                  </div>
                );
              }

              if (block.type === "ol") {
                return (
                  <ol key={`essay-ol-${index}`} className="drawer-list">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={`essay-ol-item-${index}-${itemIndex}`}
                        dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }}
                      />
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={`essay-p-${index}`}
                  dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.text) }}
                />
              );
            })}
            <div className="drawer-meta" style={{ marginTop: 18 }}>
              14.03.2026, BERLIN
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
