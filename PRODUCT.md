# Product

## Register

brand

## Users

SMB owners and operators in Thailand — retail/e-commerce, real estate, education, and craft businesses — who need to automate customer conversations across LINE, Facebook, and Instagram, the primary channels Thai consumers use to talk to businesses. Largely non-technical decision-makers evaluating whether to trust an AI tool with their customer relationships; they need concrete proof, not abstract AI promises. Bilingual audience: Thai and English content both need to feel native.

## Product Purpose

Lanna AI turns customer conversations into business intelligence: a 24/7 AI chatbot with context-aware smart buying agents, real-time sales and sentiment analytics dashboards, and AI-generated product imagery (via Google Gemini), so SMBs can scale customer engagement without scaling headcount. The landing page's job is to get a visitor to understand that value quickly and click through to "Get Started" or launch the connected app (Ceramix / chat.lanna-ai.com). Success = fast comprehension → trust → click-through.

## Brand Personality

Warm & trustworthy. Grounded in Lanna heritage (Northern Thailand) and ceramic-art roots — an approachable, reliable, locally-rooted business partner, not a cold global tech vendor. Confident about the AI capability, but that confidence is expressed through concrete outcomes and craft, not hype or jargon.

## Anti-references

- **Generic AI-SaaS cliché**: cold blue gradients, gradient text, tiny uppercase tracked eyebrows, identical icon-in-a-box cards, the templated 2025-AI-startup look.
- **Stiff corporate/enterprise**: navy-and-grey palettes, dense jargon, overly formal tone — feels built for a Fortune 500 IT department, not a Thai SMB owner.

## Design Principles

1. **Warmth over hype** — communicate AI capability through concrete outcomes (response time, conversion %, hours saved), not buzzwords.
2. **Prove it with use cases** — lean on real vertical stories (e-commerce, real estate, education) over abstract claims; SMB buyers need proof before trusting an AI vendor.
3. **Bilingual parity** — Thai and English must both read as native, complete copy, never like a translation afterthought.
4. **Heritage-rooted, not costume** — Lanna and ceramic-craft identity shows up through color and material feel, not literal cultural iconography or cliché.
5. **One clear path to action** — every section should build toward "Get Started" or launching the connected app, not just inform.

## Accessibility & Inclusion

WCAG AA baseline: solid text contrast (especially colored text/icons on the ivory background and white cards), full keyboard navigation, `prefers-reduced-motion` alternatives for all Framer Motion reveal animations, and properly labeled bilingual controls (e.g. the language toggle needs an accessible name in both languages).

## Current Implementation

Single-page Next.js / React site (Tailwind CSS v4) at `/`, plus standalone `/privacy-policy` and `/terms-of-service` pages. Bilingual EN/TH via a `LanguageContext` toggle in the navbar (globe icon) — no locale routing, all copy lives in `src/utils/translations.ts`.

**Page structure:** Navbar → Hero → Features → Use Cases → Tech Stack → Footer.

- **Navbar** — sticky pill nav, anchor links to Features / Tech Stack / Use Cases, language toggle, "Launch Ceramix" CTA → `ceramix.lanna-ai.com` (desktop); mobile menu adds "Launch App" → `chat.lanna-ai.com`.
- **Hero** — badge + bilingual headline/description + "Get Started Now" (→ Ceramix) and "Explore Features" (→ `#features`) CTAs. Interactive animated demo panel with two tabs: an auto-advancing simulated LINE conversation for a ceramics shop ending in a Gemini-generated product image, and a mock sentiment/sales analytics dashboard (total sales, conversion rate, sentiment gauge, live per-channel feed for LINE OA / Facebook Messenger / Instagram Direct).
- **Features** — 6 cards: AI Chatbot (24/7 + context-aware smart buying agent), Business Intelligence (orders, peak times, demographics), Generative AI Images (Google Gemini), Smart Dashboard, Enterprise Security (verified LINE/Facebook webhooks), Strategic Recommendations.
- **Use Cases** — 3 vertical stories matching the target personas, each with a headline metric: E-Commerce Automation on LINE OA (95% response-time cut), Real Estate Assistant (3.2x qualified leads), Educational Consultant (87% student conversion). "View Case Study" button is currently decorative — not yet linked to real case-study content.
- **Tech Stack** — publicly displays the product's stack as a trust signal: Frontend (Next.js, React, Tailwind CSS, SWR, Framer Motion), Backend (Python, FastAPI, PostgreSQL, Redis, SQLAlchemy), AI Core (Google Gemini, OpenAI GPT-4o, LangChain, Sentiment NLP), Infrastructure (Docker, Nginx, webhook security, microservices).
- **Footer** — brick-red band; Product links (Features, Technology, Login → `chat.lanna-ai.com`), Legal links (Privacy Policy, Terms of Service, Data Deletion → mailto `aiforartceramic@gmail.com`), version tag.
- **Legal pages** — bilingual Privacy Policy and Terms of Service.

**Visual/brand system (implemented):**

- Palette: ivory background `#FAFAEC`, jet-black foreground `#2B333B`, brick-red primary `#B93327`, gold secondary `#FFD609`, jungle-green accent `#5CAD5C` — deliberately warm, not the cold-blue AI-SaaS default.
- Type: Google Sans (Latin) + Noto Sans Thai, bold weight and tight tracking on headings.
- Ceramic-craft motifs: hand-drawn SVG vessel shapes (vase/urn/bowl/cup/tall) as decorative marks, a recurring "conversation path" line-and-dot motif linking sections, a clay-textured dot-grid background, and "clay button" CTAs with a solid drop-shadow lip instead of a soft SaaS shadow — heritage shows up structurally, not as literal iconography.
- Motion: GSAP entrance reveals + Framer Motion tab transitions, all gated behind `prefers-reduced-motion` (see `globals.css`).
- Accessibility: keyboard-operable ARIA tabs in the Hero demo, bilingual-labeled language toggle, visible focus rings, reduced-motion fallback.

**Not yet built:** dedicated case-study pages behind "View Case Study"; all dashboard/chat mockup content is static/simulated, not wired to live data.
