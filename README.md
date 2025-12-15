# Landing Page AI for ART Ceramic  

Landing Page ทันสมัยที่สร้างด้วย Next.js, React, TypeScript และ Tailwind CSS

## 🚀 เริ่มต้นใช้งาน (Getting Started)

### สิ่งที่ต้องมี (Prerequisites)

- Node.js เวอร์ชั่น 20.x ขึ้นไป
- Package manager `npm`

### การติดตั้ง (Installation)

1. Clone repository:

<!-- end list -->

```bash
git clone https://github.com/AI-for-ART-Ceramic/landingpage.git
cd landingpage
```

2. Install dependencies:

<!-- end list -->

```bash
npm install
```

## 💻 การพัฒนา (Development)

รัน development server:

```bash
npm run dev
```

เปิด [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) ใน Browser เพื่อดูผลลัพธ์
 สามารถเริ่มแก้ไขหน้าเว็บได้โดยแก้ไฟล์ `src/app/page.tsx` หน้าเว็บจะ Auto-update ให้ทันทีที่คุณแก้ไขไฟล์

### Scripts ที่ใช้ได้

- `npm run dev` - เริ่ม Development server
- `npm run build` - Build application สำหรับ Production
- `npm run start` - เริ่ม Production server
- `npm run lint` - รัน ESLint เพื่อตรวจสอบคุณภาพโค้ด

## 📦 Build สำหรับ Production

Build application สำหรับ Production:

```bash
npm run build
```

คำสั่งนี้จะสร้าง Production build ที่ Optimize แล้วไว้ในโฟลเดอร์ `.next`

### ทดสอบ Production Build บนเครื่อง (Locally)

หลังจาก Build เสร็จ คุณสามารถทดสอบ Production build บนเครื่องได้โดยใช้คำสั่ง:

```bash
npm run start
```

Production server จะเริ่มทำงานที่ [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

## 🚢 การ Deployment

### Deploy บน Vercel

- ใช้งาน git repository นี้กับ Vercel git merge เข้า branch `main`เเล้ว Vercel จะทำการ Deploy อัตโนมัติ

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** React 19
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📝 Project Structure (โครงสร้างโปรเจกต์)

```
landingpage/
├── public/          # ไฟล์ Static ต่างๆ
├── src/
│   ├── app/         # โฟลเดอร์ App ของ Next.js
│   │   ├── page.tsx                 # หน้า Home
│   │   ├── layout.tsx              # Layout หลัก (Root layout)
│   │   ├── globals.css             # Global styles
│   │   ├── privacy-policy/         # หน้า Privacy policy
│   │   └── terms-of-service/       # หน้า Terms of service
│   └── components/  # React components
│       ├── Features.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       └── TechStack.tsx
├── next.config.ts   # การตั้งค่า Next.js
├── tsconfig.json    # การตั้งค่า TypeScript
└── package.json     # รายชื่อ Dependencies และ Scripts
```
