# EARMARK
## MACHINES FOR THINKING

---

**DESIGN LANGUAGE**
*Visual Identity and Compilation Logic*

(c) 2026 Mikhail Shakhnazarov. All rights reserved.

---

This document is the authoritative specification for the visual identity and compilation logic of the Earmark Project Surface. It defines the Structural Transposition from Obsidian Markdown to the final compiled PDF. (c) Mikhail Shakhnazarov 2026

## INTRODUCTION // 01

## STRUCTURAL TRANSPOSITION // 02

The design acts as a 1:1 transposition of the governed corpus (Obsidian) into a formal surface: 1. Level 1 Header (# ) -> External Header: Reserved for major terminal sections (e.g., "ENDNOTES"). Prominent all-caps scaling. 2. Level 2 Header (## ) -> Section Header Block: Heavy anchor, all-caps, with numeric index and rule. 3. Level 3 Header (### ) -> Structural Emphasis: Semibold lead-in "System Marker" to pivot themes without a break. 4. Level 4 Header (#### ) -> Minor Heading: Small-scale bold technical heading for sub-components.

## DATA STRUCTURES // 04

Tables

- Markup: Strictly GFM-compliant pipe tables.
- Header: Required. Bolding of labels is handled by the renderer.
- Visuals:
- Font: Courier New (Fixed-width).
- Density: Single-spaced text within cells to maximize information density.
- Alignment: Strictly Left-Aligned (`TA_LEFT`). Justification is forbidden to preserve readability.
- Cell Rules: Clean, minimal. Double-weight horizontal line below header (1pt), standard weight at the very bottom (0.5pt). No vertical borders.
- Spacing:
- Horizontal: Increased padding (8mm/22pt) between columns.
- Vertical: Increased padding between rows (2mm/6pt) to clearly delineate semantic boundaries without borders.
- Logic: Tables represent "States" or "Comparisons" within the
Private Semantic Institution.

## SYSTEM MARKERS // 05

1 Level 2 headers (`## TITLE // 0X`) serve as Institutional Signage. Level 3 headers (`### 1`) are System Markers used for logical enumeration within the manifesto or handbook projections. All headers must be rendered with "Keep with Next" logic to prevent orphan positioning at page boundaries. 5. List Item (- or +) -> Governed List: Indented technical points with hanging indents (text aligns 6mm right of the bullet). Total left indent of 12mm. 6. Paragraph -> Body Layer: The descriptive content, justified, using technical sans-serif. 7. Horizontal Rule (---) -> Thematic Break: Spacer or vertical air to separate major blocks of thought.

## CORE PALETTE // 05

- Paper: #F8F6F1 (Warm off-white, Le Corbusier inspired).
- Ink: #1E1E1E (Rich charcoal/black for primary text).
- Mid: #7A7A7A (Grey for metadata and secondary labels).
- Rule: #BFBFBF (Light grey for hair rules).
- Accent: #D15421 (Red-orange, used for numeric indexing and page numbers).
## TYPOGRAPHY // 06

- Primary Technical (Body): Courier New (or Liberation Mono). The "Fixed-Width" blueprint feel that governs the content rhythm.
- Structural Emphasis (Markup: `### `): Courier New Bold. Same size as body text. Used for "System Markers."
- Secondary Technical (Metadata): Courier (or Nimbus Mono PS). A thicker, "Ink-heavy" typewriter vibe for autoridad labels and copyright.
- Headers (External/Section): Arial Narrow Bold (or Liberation Sans Narrow). Extremely efficient; "Label" aesthetic for high-authority anchors.
- Minor Heading (Markup: `#### `): Arial Narrow Bold. Size ~9pt.
## BRANDING LOGIC // 07

The "Logo" Wherever the branding appears (Title Page), it must follow the

Equal-Length Alignment rule: 1. Line 1 (Brand): "EARMARK" in Arial Narrow Bold (Large, ~26pt). 2. Line 2 (Tagline): "MACHINES FOR THINKING" in Courier New (Small, ~8pt). 3. Execution: The Tagline's character spacing must be programmatically adjusted so its horizontal footprint matches Line 1 exactly.

Section Headers

Format: `SECTION TITLE // 0X`

- Title: Uppercase Courier, Ink color. Prominent scale (~11.5pt) to anchor the page.
- Separator: ` // ` in Accent color.
- Index: 2-digit number (e.g., `01`) in Accent color.
- Layout: Separated by a `0.5pt` rule above the text. Total block height ~18mm.
- Pagination: Section headers must never be the final element on a page (Keep With Next).
- Font: Headers use Arial Narrow Bold for the main title, metadata uses Courier.
## LAYOUT CONFIGURATION // 08

- Margins: 32mm (Left), 28mm (Right), 30mm (Top), 28mm (Bottom).
- Horizontal Sizing: All structural elements (rules, headers) align to the frame width (150mm).
- Hair Rules: Weight `0.5pt`, typically used with `2mm` space before and `8mm` space after to initiate content layers.
- Body Text: Size `9.5pt`, Leading `14.7pt` (1.55x). Justified alignment.
- Governed Lists: Left indent 12mm, hanging indent 6mm (bullet at 6mm from left frame edge).
- Structural Spacing:
- Space before H3: ~10pt.
- Space after H3: ~4pt.
- Page Footer:
- Left: "EARMARK" (Consolas, Grey).
- Right: `// 0X` (Consolas, Accent).
- Rule: Full-width faint rule (`0.3pt`) exactly `8mm` above the page bottom edge. Metadata text is positioned below the rule.
## COMPILATION RULES // 09

1. [E1..E8] Tags: Must be rendered in Bold within the flow of text. 2. Markdown Bold: `text` resolves to the bold weight of the primary sans-serif. 3. ASCII Compliance: All content must be strictly ASCII-compliant. Non-ASCII characters (e.g., smart quotes, specialized dashes, or emojis) must be programmatically sanitized or transposed to their closest ASCII equivalents to maintain the "Machine Processable" aesthetic. 4. Atmosphere: No "AI vibes"; no generic conversational tone. The final artifact must look like a high-end compiler output or a technical manual.

---

(c) 2026 Mikhail Shakhnazarov. All rights reserved.
