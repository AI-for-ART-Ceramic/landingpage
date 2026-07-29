# 1. Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# ติดตั้ง dependencies ตาม package.json
COPY package*.json ./
# The image build intentionally excludes .git and must resolve optional native
# packages for the Linux target without running the Husky prepare hook.
RUN npm install --ignore-scripts --include=optional

# Copy โค้ดทั้งหมดและทำการ Build
COPY . .

ARG NEXT_PUBLIC_VERSION=dev
ENV NEXT_PUBLIC_VERSION=$NEXT_PUBLIC_VERSION
ARG NEXT_PUBLIC_EVALUATION_FORM_URL
ENV NEXT_PUBLIC_EVALUATION_FORM_URL=$NEXT_PUBLIC_EVALUATION_FORM_URL
RUN npm run build

# 2. Production Stage (Runner)
FROM node:20-alpine AS runner
WORKDIR /app

# ตั้งค่า Environment
ENV NODE_ENV=production
# --- จุดสำคัญ: สั่งให้ Next.js Standalone รันที่พอร์ต 3030 จริงๆ ---
ENV PORT=3030
ENV HOSTNAME="0.0.0.0"

# สร้าง Non-root user เพื่อความปลอดภัย (Security Best Practice)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy เฉพาะไฟล์ที่จำเป็นจาก Stage builder (ช่วยให้ Image เล็กมาก)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# สลับไปใช้ User ที่สร้างไว้
USER nextjs

# ประกาศพอร์ตที่ต้องการใช้งาน
EXPOSE 3030

# คำสั่งรันแอปพลิเคชัน
CMD ["node", "server.js"]
