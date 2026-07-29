# Silhouette Vessels and Soft Dividers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace outline ceramic art with varied silhouette vessels and soften section-wave boundaries without changing page content.

**Architecture:** `CeramicMark` remains the single reusable SVG primitive but gains distinct silhouette profiles and decorative bands. `SectionDivider` keeps its existing SVG wave and receives a non-interactive blur layer in CSS so every existing section transition inherits the softer treatment.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Vitest, Testing Library.

## Global Constraints

- Keep existing Ivory, Brick Red, Gold, Green, and Jet Black palette.
- Preserve all existing page copy, links, GSAP behavior, and reduced-motion support.
- Decorative art remains aria-hidden and must not create mobile horizontal overflow.

---

### Task 1: Add varied silhouette-vessel contracts

**Files:**
- Modify: `src/components/visuals/CeramicVisuals.tsx`
- Modify: `src/components/visuals/CeramicVisuals.test.tsx`

**Interfaces:**
- Consumes: `CeramicMark({ variant: "vase" | "bowl" | "cup" })`.
- Produces: `CeramicMark` SVGs that expose `data-ceramic-part="body"` and distinctive vessel details.

- [x] **Step 1: Write the failing test**

```tsx
expect(container.querySelector('[data-ceramic-variant="vase"] [data-ceramic-part="band"]')).toBeInTheDocument();
expect(container.querySelector('[data-ceramic-variant="vase"] [data-ceramic-part="highlight"]')).toBeInTheDocument();
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm.cmd test -- src/components/visuals/CeramicVisuals.test.tsx`

Expected: FAIL because the silhouette vessel has no `band` or `highlight` parts.

- [x] **Step 3: Write minimal implementation**

```tsx
<path data-ceramic-part="band" d="..." stroke="var(--paper)" />
<path data-ceramic-part="highlight" d="..." fill="currentColor" fillOpacity=".16" />
```

- [x] **Step 4: Run test to verify it passes**

Run: `npm.cmd test -- src/components/visuals/CeramicVisuals.test.tsx`

Expected: PASS.

### Task 2: Soften every wave divider

**Files:**
- Modify: `src/app/globals.css`
- Test: `src/components/visuals/SectionDivider.test.tsx`

**Interfaces:**
- Consumes: existing `SectionDivider({ fill })` SVG.
- Produces: wave boundaries with a blurred duplicate path behind the crisp shape, with no layout effect.

- [x] **Step 1: Write the failing test**

```tsx
expect(container.querySelector('[data-section-curve-blur]')).toHaveAttribute("fill", "var(--foreground)");
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm.cmd test -- src/components/visuals/SectionDivider.test.tsx`

Expected: FAIL because no blurred path is rendered.

- [x] **Step 3: Write minimal implementation**

```tsx
<path data-section-curve-blur fill={fill} d={curvePath} className="section-divider-blur" />
```

```css
.section-divider-blur { filter: blur(10px); opacity: .34; }
```

- [x] **Step 4: Run tests and visual checks**

Run: `npm.cmd test -- src/components/visuals/SectionDivider.test.tsx src/components/visuals/CeramicVisuals.test.tsx`

Expected: PASS; confirm at 390px and desktop that the wave has no hard seam or overflow.

### Task 3: Verify the landing page

**Files:**
- Verify: `src/components/sections/Hero.tsx`, `src/components/sections/UseCases.tsx`, `src/components/sections/TechStack.tsx`

- [x] **Step 1: Run the full quality suite**

Run: `npm.cmd test`, `npm.cmd run lint`, `npm.cmd run build`.

- [x] **Step 2: Inspect local page**

Confirm each vessel reads as a ceramic silhouette and mobile layout has `scrollWidth <= innerWidth`.
