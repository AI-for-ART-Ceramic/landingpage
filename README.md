# 🎨 Lanna AI  – Landing Page

Landing Page สำหรับโครงการ **Lanna AI**
พัฒนาด้วย **Next.js, React, TypeScript และ Tailwind CSS**
---

## 🚀 Getting Started

### Prerequisites

* **Node.js** เวอร์ชัน 20.x ขึ้นไป
* **npm** (Node Package Manager)

---

### Installation

1. Clone Repository

```bash
git clone https://github.com/AI-for-ART-Ceramic/landingpage.git
cd landingpage
```

1. Install Dependencies

```bash
npm install
```

---

## 💻 Development

เริ่มต้น Development Server:

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่
👉 [http://localhost:3000](http://localhost:3000)

สามารถแก้ไขหน้าเว็บได้ที่ไฟล์
`src/app/page.tsx`
ระบบจะ **Hot Reload / Auto Update** ทันทีเมื่อมีการแก้ไขไฟล์

---

### Available Scripts

* `npm run dev` – รัน Development Server
* `npm run build` – Build สำหรับ Production
* `npm run start` – รัน Production Server
* `npm run lint` – ตรวจสอบคุณภาพโค้ดด้วย ESLint

---

## 📦 Production Build

Build แอปพลิเคชันสำหรับ Production:

```bash
npm run build
```

ไฟล์ที่ผ่านการ Optimize แล้วจะถูกสร้างในโฟลเดอร์ `.next`

### ทดสอบ Production Build บนเครื่อง

```bash
npm run start
```

Production Server จะรันที่
👉 [http://localhost:3000](http://localhost:3000)

---

## 🚢 Deployment

### Deploy ด้วย Vercel

* เชื่อมต่อ Git Repository นี้กับ **Vercel**
* เมื่อ Merge โค้ดเข้า Branch `main`
* ระบบจะ **Deploy อัตโนมัติ (Auto Deploy)**

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16
* **Language:** TypeScript
* **UI Library:** React 19
* **Styling:** Tailwind CSS 4
* **Animation:** Framer Motion
* **Icons:** Lucide React

---

## 🗂️ Project Structure

```bash
landingpage/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # Home page
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   ├── privacy-policy/ # Privacy Policy page
│   │   └── terms-of-service/ # Terms of Service page
│   └── components/         # Reusable React components
│       ├── Features.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       └── TechStack.tsx
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Scripts & dependencies
```

---

## builded with ❤️ by Lanna AI Team
