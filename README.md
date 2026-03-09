<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/365ed53f-8476-4eae-9a08-a6e4ede48047" />

# 🎨 Lanna AI  – Landing Page

Landing Page สำหรับโครงการ **Lanna AI**
## website depoly on : [https://lanna-ai.com/](https://lanna-ai.com/)

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
* `npm run format` – จัดรูปแบบโค้ดด้วย Prettier

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

* **Framework:** Next.js 16.0.10
* **Language:** TypeScript 5
* **UI Library:** React 19.2.1
* **Styling:** Tailwind CSS 4
* **Animation:** Framer Motion 12
* **Icons:** Lucide React
* **Utilities:** clsx, tailwind-merge
* **Linting:** ESLint 9 + Prettier
* **Git Hooks:** Husky + lint-staged

---

## 🗂️ Project Structure

```bash
landingpage/
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Home page
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── privacy-policy/      # Privacy Policy page
│   │   └── terms-of-service/    # Terms of Service page
│   ├── components/              # Reusable React components
│   │   ├── sections/            # Section components
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── TechStack.tsx
│   │   └── ui/                  # UI components
│   ├── context/                 # React Context
│   │   └── LanguageContext.tsx
│   ├── lib/                     # Utilities & constants
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── utils/                   # Helper utilities
│       └── translations.ts
├── Dockerfile                   # Docker configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Scripts & dependencies
```

## 🐳 Docker Deployment

### Build Docker Image

Build image with name: `landingpage:0.1.0`

```bash
docker build -t landingpage:0.1.0 .
```

### Run Docker Container

Run container with name: `landingpage_container`

```bash
docker run -d -p 3050:3000 --name landingpage_container landingpage:0.1.0
```

เข้าถึงแอปพลิเคชันได้ที่:
👉 [http://localhost:3050](http://localhost:3050)
---

## 📝 License

This project is private and proprietary.

---

## 💬 Support

หากมีปัญหาหรือคำถาม กรุณาติดต่อทีม Lanna AI

---

**Built with ❤️ by Lanna AI Team**
