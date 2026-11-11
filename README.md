# شادو بايو | Shadow Bio — Endocrinology Platform

منصة طبية متعددة اللغات (عربية/إنجليزية/كردية) مخصصة لعلم الغدد الصماء، تغطي كل الهرمونات في جسم الإنسان مع وظائفها، التحاليل المخبرية، الاضطرابات، والعلاجات. تحتوي على مساعد ذكاء اصطناعي متخصص وصور طبية واقعية أصلية مولّدة بالـ AI.

---

## المميزات

- **3 لغات كاملة**: العربية، الإنجليزية، الكردية (Sorani) مع تبديل تلقائي RTL/LTR
- **موسوعة هرمونات**: 20+ هرمون في 5 مجموعات (نخامية، درقية، كظرية، بنكرياس، تناسلية)
- **لكل هرمون**: المصدر، الوظيفة، الكشف المخبري، الفوائد، اضطرابات الزيادة/النقص، العلاج
- **مساعد ذكاء اصطناعي** متخصص في الغدد الصماء يجيب باللغة المختارة
- **14 صورة طبية أصلية** مولّدة بالـ AI (ليست مسروقة)
- **رمزا الجنسين** ♂ و♀ بتصميم 3D كروم معدني
- **وضع ليلي/نهاري** اختياري
- **متجاوب بالكامل** مع الجوال والأيباد والديسكتوب

---

## التقنيات المستخدمة

- **Next.js 16** (App Router, Turbopack)
- **TypeScript 5**
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** (animations)
- **next-themes** (light/dark mode)
- **Zustand** (state management)
- **z-ai-web-dev-sdk** (AI chat completions)

---

## التشغيل محلياً (Development)

```bash
# تثبيت الحزم
bun install

# تشغيل خادم التطوير
bun run dev

# فتح المتصفح على
http://localhost:3000
```

---

## النشر الدائم (Production Deployment)

### الخيار 1: Vercel (موصى به — مجاني للنشر)

#### الخطوة 1: ارفع المشروع إلى GitHub

```bash
# في جذر المشروع
git init
git add .
git commit -m "Initial commit: Shadow Bio Endocrinology platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shadow-bio.git
git push -u origin main
```

**تأكد من رفع هذه الملفات/المجلدات:**
- `src/` (كل الكود)
- `public/` (الصور، favicon، logo)
- `prisma/` (إذا تستخدم قاعدة بيانات)
- `package.json`, `bun.lock`
- `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`
- `postcss.config.mjs`, `components.json`, `eslint.config.mjs`

**لا ترفع (موجود في .gitignore):**
- `node_modules/`
- `.next/`
- `.env*` (المتغيرات البيئية)
- `.z-ai-config` (مفاتيح الـ API)
- `dev.log`, `server.log`

#### الخطوة 2: اضبط متغيرات البيئة على Vercel

في لوحة Vercel → مشروعك → Settings → Environment Variables، أضف:

| المتغير | القيمة | الوصف |
|---------|--------|--------|
| `ZAI_BASE_URL` | `https://api.z.ai/api/paas/v4` | رابط API للذكاء الاصطناعي |
| `ZAI_API_KEY` | (مفتاحك من Z.ai) | مفتاح الـ API |
| `DATABASE_URL` | (إن استخدمت Prisma) | رابط قاعدة بيانات PostgreSQL |

للحصول على مفتاح Z.ai API:
1. سجّل في **z.ai**
2. أنشئ مشروع API
3. انسخ `baseUrl` و `apiKey`

#### الخطوة 3: انشر على Vercel

1. اذهب إلى **vercel.com** → Sign Up with GitHub
2. **Add New Project** → اختر repository `shadow-bio`
3. اترك الإعدادات الافتراضية (Vercel يكتشف Next.js تلقائياً)
4. **Deploy** — يستغرق 1-3 دقائق
5. ستحصل على رابط دائمي: `https://shadow-bio.vercel.app`

#### الخطوة 4 (اختياري): دومين مخصص

1. اشترِ دومين (مثل `shadowbio.com`) من Namecheap أو Cloudflare (~$10/سنة)
2. في Vercel: **Settings → Domains → Add Domain**
3. أدخل الدومين واتبع تعليمات DNS

---

### الخيار 2: Netlify

نفس الخطوات تقريباً:
1. ارفع إلى GitHub
2. اذهب إلى **netlify.com** → Sign Up with GitHub
3. **Add new site → Import an existing project**
4. اختر الـ repository
5. Build command: `bun run build` أو `npm run build`
6. Publish directory: `.next` (يكتشف Next.js تلقائياً عبر @netlify/plugin-nextjs)
7. اضبط نفس متغيرات البيئة (ZAI_BASE_URL, ZAI_API_KEY)

---

### الخيار 3: خادم VPS ذاتي (Self-hosting)

للنشر على خادم VPS (DigitalOcean, AWS EC2, etc.):

```bash
# على الخادم
git clone https://github.com/YOUR_USERNAME/shadow-bio.git
cd shadow-bio
bun install

# انسخ .env و .z-ai-config يدوياً
# ثم ابنِ
bun run build

# شغّل بـ PM2 للمحافظة على العملية
npm install -g pm2
pm2 start "bun .next/standalone/server.js" --name shadow-bio
pm2 save
pm2 startup

# استخدم Nginx كـ reverse proxy على port 3000
```

---

## متغيرات البيئة المطلوبة

```bash
# .env (للتطوير المحلي — لا ترفع إلى Git!)
DATABASE_URL=file:./db/custom.db

# .z-ai-config (للتطوير المحلي فقط — لا ترفع إلى Git!)
{
  "baseUrl": "https://api.z.ai/api/paas/v4",
  "apiKey": "YOUR_ZAI_API_KEY"
}

# على Vercel/Netlify: استخدم متغيرات البيئة في لوحة التحكم
# ZAI_BASE_URL = https://api.z.ai/api/paas/v4
# ZAI_API_KEY = YOUR_ZAI_API_KEY
```

---

## معلومات الاتصال

- **الهاتف**: 0750 152 2006
- **البريد الإلكتروني**: shadiarumar@gmail.com
- **العنوان**: أربيل، دوو سايد كركوك، كلية العلوم

---

## معلومات المشروع

- **الموضوع**: علم الغدد الصماء (Endocrinology)
- **عدد الهرمونات**: 20+
- **عدد الغدد**: 9
- **اللغات**: 3 (عربية، إنجليزية، كردية)
- **الصور**: 14 صورة أصلية مولّدة بالـ AI (1.4MB)

---

## الترخيص

هذا المشروع أصلي — كل الصور مولّدة بالذكاء الاصطناعي ومملوكة للمشروع.
© 2026 Shadow Bio. جميع الحقوق محفوظة.

---

## ملاحظات

- هذا الموقع لأغراض تعليمية فقط — ليس بديلاً عن الاستشارة الطبية المتخصصة.
- لتفعيل مساعد الذكاء الاصطناعي في الإنتاج، يجب ضبط `ZAI_API_KEY` على منصة الاستضافة.
- الصور الطبية (1.4MB) ضمن حدود الخطة المجانية على Vercel/Netlify.
