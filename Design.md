# Lanna AI Landing Page — Design System

เอกสารนี้อธิบายหลักการออกแบบและกติกาภาพรวมของ Landing Page Lanna AI เพื่อให้การต่อยอดหน้าเว็บยังคงภาษา visual เดียวกัน โดยอ้างอิงจาก implementation ปัจจุบันใน `src/`.

## 1. แนวคิดหลัก

**Studio ของดินและบทสนทนา** — Lanna AI แปลบทสนทนาของลูกค้าให้เป็นข้อมูลเชิงธุรกิจ จึงใช้ภาษาภาพของงานเซรามิกและเส้นทางการสนทนามาช่วยเล่าเรื่อง แทนภาพลักษณ์ AI SaaS ที่แข็งหรือเป็นเทคนิคล้วน ๆ

บุคลิกของแบรนด์:

- อบอุ่นและเป็นมนุษย์ (ivory, paper, soft shadow)
- มีน้ำหนักและความมั่นใจ (brick red, jet black, bold heading)
- มีชีวิตแต่ไม่รบกวนการอ่าน (subtle GSAP scroll motion)
- เชื่อมงานคราฟต์กับเทคโนโลยี (ceramic SVG + dashboard/chat demo)

## 2. โครงสร้างหน้า

ลำดับของหน้า Home (`src/app/page.tsx`) มีหน้าที่เป็น narrative เดียวต่อเนื่อง:

| ส่วน | วัตถุประสงค์ | องค์ประกอบหลัก |
| --- | --- | --- |
| Navbar | การนำทางและ CTA ไป Ceramix | floating pill nav, language switcher, mobile menu |
| Hero | บอกคุณค่าและสาธิตผลิตภัณฑ์ทันที | headline, CTA, interactive chat/dashboard demo |
| Features | อธิบายความสามารถแบบ flow | numbered feature rows, curved dividers, conversation line |
| Use cases | แสดงผลลัพธ์และบริบทธุรกิจ | dark story section, outcome cards, integration proof |
| Tech stack | สร้างความน่าเชื่อถือด้านเทคโนโลยี | technical ledger, technology pills |
| Footer | ปิดหน้าอย่างชัดเจนและให้ทางไปต่อ | product/legal links, version, data-deletion contact |

Section ต่าง ๆ ใช้เส้นแบ่ง SVG ที่โค้งต่างรูปแบบเพื่อให้จังหวะของหน้าไม่ซ้ำกัน และหลีกเลี่ยงเส้นตรงแข็ง ๆ.

## 3. สี

สีถูกกำหนดเป็น CSS variables ใน `src/app/globals.css` และควรเรียกผ่าน Tailwind tokens (`bg-primary`, `text-foreground` ฯลฯ) แทนการใส่ hex ใหม่ใน component.

| Token | ค่า | หน้าที่ |
| --- | --- | --- |
| `--background` | `#FAFAEC` | Ivory background หลัก |
| `--foreground` | `#2B333B` | Jet black สำหรับข้อความและ dark section |
| `--primary` | `#B93327` | Brick red: primary CTA, icon, footer |
| `--primary-hover` | `#96281F` | state กด/hover ของสีแดง |
| `--secondary` | `#FFD609` | Gold: accent, underline, offset shadow |
| `--secondary-hover` | `#E0BC08` | gold hover |
| `--accent` | `#5CAD5C` | Green: status และ signal เชิงบวก |
| `--muted` | `#E4E4D9` | surface/line รอง |
| `--muted-foreground` | `#5D6B78` | body copy รอง |
| `--paper` | `#FFFEF7` | card และ demo surface |

กติกาการใช้สี:

- ใช้แดงเป็น action สำคัญ ไม่ใช้กับข้อความทุกจุด
- ใช้ทองเป็น highlight หรือ motion cue ไม่ใช่พื้นหลักของ section
- ใช้ green เฉพาะสถานะ positive เช่น online/validated
- dark section ใช้ `--foreground` และใช้ card สี paper เพื่อรักษา contrast
- Footer ใช้ `--primary` พร้อมข้อความขาวและ accent ทอง

## 4. Typography

### Font stack

- Sans: `Google Sans`, fallback เป็น `Noto Sans Thai`
- Mono: `Geist Mono` สำหรับ index, labels และ technical pills
- English emphasis: `font-serif italic` สำหรับคำที่ต้องการน้ำหนักเชิง editorial เช่น Business Intelligence

### Heading

- `section-title-studio`: `clamp(2.2rem, 5vw, 4.8rem)`, weight 800, tight tracking
- Thai headings ใช้ `Noto Sans Thai`, weight 700, line-height 1.12 และ tracking -0.02em
- Hero heading ใช้ขนาด responsive และจัดข้อความเป็นกลุ่มความหมาย ไม่บังคับ line break ที่ทำให้มือถือเสียรูป

### Body และ metadata

- Body copy ใช้ `text-muted-foreground`, line-height relaxed
- Kicker/eyebrow ใช้ตัวพิมพ์ใหญ่, tracking กว้าง, ขนาดเล็ก
- Index/technical data ใช้ mono เพื่อแยกข้อมูลจากคำเล่าเรื่อง

## 5. Layout และ responsive

### Container และ spacing

- ใช้ `max-w-7xl` เป็น content container มาตรฐาน
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `clamp(4.5rem, 9vw, 8rem)`
- Navbar fixed ด้านบนและเว้นพื้นที่ Hero ด้วย padding top

### Breakpoints

| ช่วง | แนวทาง |
| --- | --- |
| Mobile `<640px` | one-column, ลด radius/shadow, ปิด hover-only dependency, headline wrap ได้ |
| Tablet `sm` | เพิ่ม demo padding และ text size บางส่วน |
| Desktop `md+` | แสดง navigation เต็มรูปแบบ |
| Desktop `lg+` | ใช้ editorial two-column layout, decorative ceramics และ story cards 3 คอลัมน์ |

ข้อกำหนด responsive:

- ห้ามเกิด horizontal overflow
- Chat demo ต้องแสดงเนื้อหาทั้งหมดในกรอบโดยไม่พึ่ง scrollbar ภายใน
- Mobile menu ใช้ tap interaction ได้ครบ; ไม่พึ่ง hover
- Decorative ceramic marks ถูกซ่อนเมื่อพื้นที่ไม่พอ ไม่ให้ทับเนื้อหา

## 6. Component language

### Floating navigation

Navbar เป็น translucent ivory pill (`backdrop-blur`) มี border บางและ shadow นุ่ม Link hover ยกขึ้นเล็กน้อยและเผย gold underline.

### CTA

`cta-clay` คือปุ่มหลัก: brick red, pill radius, shadow แบบชั้นดิน (`0 8px 0`) และยกขึ้นเมื่อ hover. `cta-clay-secondary` เป็นปุ่มรองสี paper ที่เปลี่ยนเป็น gold เมื่อ hover.

### Product demo

Hero demo ใช้ shell สี paper ที่มี shadow, gold offset และ tabs สองแบบ:

- **AI Smart Agent**: แสดงลำดับแชท, typing state และ image preview
- **Sentiment Analytics**: แสดง dashboard เชิงสถิติ

ห้ามแทน demo ด้วย screenshot ที่อ่านข้อความหรือ responsive ไม่ได้ หากจำเป็นต้องเพิ่ม visual ให้ใช้ CSS/SVG หรือ asset ที่มีสิทธิ์ใช้ชัดเจน.

### Ceramic primitives

`CeramicMark` ใน `src/components/visuals/CeramicVisuals.tsx` คือ SVG ภาชนะใช้ซ้ำได้ มี variants `vase`, `urn`, `tall`, `bowl`, `cup`.

หลักการ:

- ใช้เป็น background/decorative anchor ไม่ใช่ข้อมูลสำคัญ
- กำหนดสีผ่าน `currentColor` เช่น `text-primary/10`
- ใช้ shadow แบบเบา (`drop-shadow`) และลาย band สี paper
- อย่าวางติดขอบเนื้อหาจน clip หรือชนกับ divider

`ConversationPath` เป็นเส้น SVG โค้งที่แทนเส้นทางข้อมูล/บทสนทนา ส่วน `InsightRing` ใช้เป็นวงข้อมูลด้านหลัง Hero.

### Dividers

`SectionDivider` มี 4 variants: `swell`, `deep`, `ripple`, `clay`.

- สลับรูปทรงระหว่าง section ที่ติดกัน
- ตั้ง `fill` ให้ตรงกับพื้น section ถัดไป
- blur path ชั้นหลังสร้างเงาขอบนุ่ม
- หลีกเลี่ยงใช้ variant ซ้ำต่อเนื่องเกินหนึ่งครั้ง

## 7. Motion

ใช้สองระบบร่วมกัน:

| ระบบ | ใช้กับ |
| --- | --- |
| GSAP + ScrollTrigger | reveal, path draw, divider entry, slow parallax ceramic |
| Framer Motion | tab content, mobile menu, message appearance, interaction เล็ก ๆ |

`useGsapReveal` ทำงานกับ data attributes:

- `data-gsap-reveal` — fade/translate reveal ครั้งเดียวเมื่อ scroll ถึง
- `data-gsap-float` — parallax เบา (`yPercent: -8`)
- `data-gsap-divider` — scale/slide divider เข้า
- `data-gsap-path` — draw SVG path ด้วย stroke dash

Motion guideline:

- ใช้ easing ที่นุ่ม เช่น `power4.out`, `power3.inOut`, `sine.inOut`
- ไม่ใช้ scroll-jacking หรือ pin section เพื่อความสวยงามอย่างเดียว
- Motion ต้องช่วยนำสายตา ไม่แข่งกับเนื้อหา
- ทุก effect ต้อง cleanup เมื่อ component unmount (`gsap.matchMedia().revert()`)

## 8. Accessibility และ localization

- UI รองรับอังกฤษและไทยผ่าน `LanguageProvider`; เก็บภาษาที่เลือกไว้ใน `localStorage`
- ปุ่ม icon-only ต้องมี `aria-label`
- Tabs ใน demo ใช้ `role="tablist"`, `role="tab"`, `role="tabpanel"` และ keyboard navigation ด้วย Arrow/Home/End
- focus ใช้ gold outline ความหนา 3px
- external link เปิดแท็บใหม่ต้องใช้ `rel="noopener noreferrer"`
- `prefers-reduced-motion: reduce` ต้องทำให้เนื้อหาแสดงทันทีและปิด/ลด transition กับ animation
- ตัวเลขผลลัพธ์ใน use case ระบุว่าเป็น illustrative example/ตัวอย่างประกอบ หากไม่มีแหล่งอ้างอิงจริง

## 9. Content rules

- รักษา copy หลักที่ผ่านการอนุมัติแล้ว; เปลี่ยนเฉพาะเมื่อได้รับ brief ด้าน content
- Headline ต้องสื่อผลลัพธ์ของธุรกิจ ไม่ใช้ jargon ของโมเดลมากเกินไป
- ทุก CTA ต้องมี destination จริง ยกเว้น component ที่ถูกระบุชัดเจนว่าเป็น demo-only
- Case study ที่ใช้ metric ตัวอย่างต้องไม่ทำให้เข้าใจว่าเป็นผลลูกค้าจริง
- Social proof ต้องใช้โลโก้, testimonial หรือชื่อบริษัทที่ได้รับอนุญาตเท่านั้น

## 10. Checklist ก่อนส่งงาน

- [ ] สีมาจาก design tokens เดิม ไม่มี hex ใหม่โดยไม่มีเหตุผล
- [ ] ตรวจ desktop และ mobile โดยเฉพาะ Hero, demo, divider และ footer
- [ ] ไม่มี content/decorative element ทับกันหรือ overflow แนวนอน
- [ ] CTA, anchor links, language switcher และ mobile menu ทำงาน
- [ ] ตรวจ reduced motion และ keyboard focus
- [ ] รัน `npm test`, `npm run lint` และ `npm run build`
- [ ] ตรวจ visual หลัง build/deploy เมื่อมีการแก้ font, animation หรือ responsive layout

## 11. ไฟล์อ้างอิง

- Global tokens และ component styles: `src/app/globals.css`
- โครงหน้า: `src/app/page.tsx`
- Font และ viewport: `src/app/layout.tsx`
- Hero/demo: `src/components/sections/Hero.tsx`
- Navigation/footer: `src/components/sections/Navbar.tsx`, `src/components/sections/Footer.tsx`
- Main sections: `src/components/sections/Features.tsx`, `UseCases.tsx`, `TechStack.tsx`
- Visual primitives: `src/components/visuals/CeramicVisuals.tsx`, `SectionDivider.tsx`
- Scroll motion: `src/hooks/useGsapReveal.ts`
