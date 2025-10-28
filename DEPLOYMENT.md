# 🚀 HƯỚNG DẪN DEPLOY - Render & Vercel

**Tên miền production:**
- 🌐 **Frontend:** https://seo.helios.id.vn
- 🔌 **Backend API:** https://api.helios.id.vn

---

## 📋 CHUẨN BỊ

### Files đã được tạo sẵn:
- ✅ `backend/Dockerfile` - Docker image cho Render
- ✅ `backend/.dockerignore` - Optimize Docker build
- ✅ `frontend/vercel.json` - Vercel configuration
- ✅ `render.yaml` - Render auto-deploy config

### Yêu cầu:
- GitHub repository
- Tài khoản Render (free tier)
- Tài khoản Vercel (free tier)
- Quyền quản lý DNS cho helios.id.vn

---

## 🎯 BƯỚC 1: DEPLOY BACKEND (Render)

### Option A: Deploy qua Dashboard (Đơn giản nhất)

1. **Đăng nhập Render:**
   - Truy cập: https://dashboard.render.com
   - Sign in với GitHub

2. **Tạo Web Service:**
   - Click **"New +"** → **"Web Service"**
   - Connect repository: `IS207.Q13-seminar`
   - Nếu chưa connect, click "Configure account" để authorize GitHub

3. **Cấu hình Service:**
   ```
   Name: seo-analyzer-api
   Region: Singapore
   Branch: main
   Root Directory: backend
   Runtime: Docker
   ```

4. **Environment Variables** (Thêm trong tab Environment):
   ```
   NODE_ENV=production
   PORT=3000
   PUPPETEER_HEADLESS=true
   PUPPETEER_TIMEOUT=30000
   CORS_ORIGIN=https://seo.helios.id.vn
   ```

5. **Create Web Service** → Render sẽ tự động build và deploy

6. **Đợi deploy xong** (3-5 phút):
   - Logs sẽ hiển thị quá trình build
   - Xem "🚀 Server running on http://localhost:3000"
   - Service URL: `https://seo-analyzer-api.onrender.com`

### Option B: Deploy qua Blueprint (Auto)

1. Đảm bảo `render.yaml` đã push lên repository

2. Render Dashboard → **"Blueprints"** → **"New Blueprint Instance"**

3. Connect repository `IS207.Q13-seminar`

4. Render tự động đọc `render.yaml` và tạo service

---

## 🎨 BƯỚC 2: DEPLOY FRONTEND (Vercel)

### Option A: Deploy qua Dashboard (Khuyến nghị)

1. **Đăng nhập Vercel:**
   - Truy cập: https://vercel.com/dashboard
   - Sign in với GitHub

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - Tìm repository: `IS207.Q13-seminar`
   - Click **"Import"**

3. **Cấu hình Project:**
   ```
   Project Name: seo-analyzer
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables:**
   
   Click **"Environment Variables"** và thêm:
   ```
   Name: VITE_API_BASE_URL
   Value: https://api.helios.id.vn/api
   Environment: Production
   
   Name: NODE_ENV
   Value: production
   Environment: Production
   ```

5. **Deploy:**
   - Click **"Deploy"**
   - Đợi build xong (1-2 phút)
   - Vercel URL: `https://seo-analyzer-xxx.vercel.app`

### Option B: Deploy qua CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd frontend
vercel --prod

# Follow prompts và chọn settings tương tự Option A
```

---

## 🌐 BƯỚC 3: CẤU HÌNH CUSTOM DOMAIN

### A. Backend - api.helios.id.vn

1. **Trong Render Dashboard:**
   - Vào service `seo-analyzer-api`
   - Tab **"Settings"** → **"Custom Domain"**
   - Click **"Add Custom Domain"**
   - Nhập: `api.helios.id.vn`
   - Click **"Save"**

2. **Render sẽ hiển thị DNS record cần add:**
   ```
   Type: CNAME
   Name: api
   Value: seo-analyzer-api.onrender.com
   ```

### B. Frontend - seo.helios.id.vn

1. **Trong Vercel Dashboard:**
   - Vào project `seo-analyzer`
   - Tab **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Nhập: `seo.helios.id.vn`
   - Click **"Add"**

2. **Vercel sẽ hiển thị DNS record:**
   ```
   Type: CNAME
   Name: seo
   Value: cname.vercel-dns.com
   ```

### C. Cấu hình DNS tại Provider

Đăng nhập vào DNS management cho `helios.id.vn` và thêm 2 records:

**Record 1: Backend**
```
Type: CNAME
Name: api
Target/Value: seo-analyzer-api.onrender.com
TTL: 3600 (hoặc Auto)
```

**Record 2: Frontend**
```
Type: CNAME
Name: seo
Target/Value: cname.vercel-dns.com
TTL: 3600 (hoặc Auto)
```

**⏳ Đợi DNS propagate:** 5-30 phút

---

## ✅ BƯỚC 4: KIỂM TRA DEPLOYMENT

### Test Backend API

```bash
# Health check
curl https://api.helios.id.vn/

# Kết quả mong đợi:
{
  "message": "AIO Analyzer API",
  "version": "1.0.0",
  "endpoints": {
    "analyze": "POST /api/analyze"
  }
}
```

```bash
# Test analyze endpoint
curl -X POST https://api.helios.id.vn/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://vnexpress.net"}'
```

### Test Frontend

1. Mở browser: **https://seo.helios.id.vn**
2. Nhập URL: `https://vnexpress.net`
3. Click **"Analyze"**
4. Kiểm tra kết quả hiển thị đúng

### Test CORS Integration

- Frontend phải call được backend API
- Không có CORS errors trong Console
- Kết quả từ backend hiển thị trên frontend

---

## � BƯỚC 5: AUTO-DEPLOYMENT (CI/CD)

### Backend (Render)

✅ **Tự động deploy khi:**
- Push code lên branch `main`
- Merge pull request
- Manual trigger trong dashboard

**Kiểm tra:**
- Render Dashboard → Service → "Events" tab
- Xem deployment history

### Frontend (Vercel)

✅ **Tự động deploy khi:**
- Push lên `main` → Production deployment
- Push lên branch khác → Preview deployment
- Tạo Pull Request → Preview deployment với unique URL

**Kiểm tra:**
- Vercel Dashboard → Deployments
- Mỗi commit có unique preview URL

---

## 🛠️ TROUBLESHOOTING

### Backend Issues

**Lỗi: "Puppeteer Chrome not found"**
```
✅ Dockerfile đã cài sẵn Chromium
Kiểm tra Render logs xem có lỗi install dependencies không
```

**Lỗi: "CORS policy error"**
```bash
# Kiểm tra environment variable trong Render
CORS_ORIGIN=https://seo.helios.id.vn

# Không có http/https sai, không có trailing slash
```

**Lỗi: "Service Unavailable"**
```
- Xem Render logs
- Kiểm tra health check passing
- Verify PORT=3000 trong env vars
```

### Frontend Issues

**Lỗi: "API calls fail / Network error"**
```bash
# Kiểm tra Vercel environment variables
VITE_API_BASE_URL=https://api.helios.id.vn/api

# Rebuild sau khi đổi env vars:
Vercel Dashboard → Deployments → ... → Redeploy
```

**Lỗi: "Build failed"**
```
- Kiểm tra Vercel build logs
- Verify Root Directory = frontend
- Verify Build Command = npm run build
- Verify Output Directory = dist
```

### DNS Issues

**Domain chưa work sau 30 phút:**
```bash
# Check DNS propagation
nslookup api.helios.id.vn
nslookup seo.helios.id.vn

# Hoặc dùng online tool:
https://dnschecker.org

# Xóa DNS cache local:
ipconfig /flushdns (Windows)
sudo dscacheutil -flushcache (Mac)
```

---

## � MONITORING

### Render

**Dashboard → Service → Metrics:**
- CPU usage
- Memory usage
- Response times
- Request count

**Logs:**
- Real-time logs trong "Logs" tab
- Filter by level: Info, Error, Warning

### Vercel

**Dashboard → Project → Analytics:**
- Visitors
- Page views
- Performance metrics
- Web Vitals scores

**Runtime Logs:**
- Dashboard → Project → Logs
- Function invocations
- Errors

---

## 🔐 SECURITY CHECKLIST

- ✅ HTTPS enabled automatically (Render & Vercel)
- ✅ CORS configured with production domain
- ✅ Environment variables secured (không commit .env)
- ✅ Security headers configured (vercel.json)
- ✅ No API keys exposed in frontend code
- ✅ DNS CAA records (optional, khuyến nghị)

---

## 💰 PRICING (Free Tier)

### Render Free Tier
- ✅ 750 hours/month (đủ cho 1 service chạy 24/7)
- ⚠️ Service sleep sau 15 phút không activity
- ⚠️ Cold start ~30s khi wake up
- 💡 Upgrade to Starter ($7/mo) để luôn running

### Vercel Free Tier
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS & CDN
- ✅ Preview deployments
- 💡 Pro ($20/mo) nếu cần analytics chi tiết

---

## 📝 QUICK COMMANDS

### Rebuild Backend (Render)
```bash
# Manual deploy trong Dashboard
Services → seo-analyzer-api → Manual Deploy → "Deploy latest commit"
```

### Rebuild Frontend (Vercel)
```bash
# CLI
cd frontend
vercel --prod

# Hoặc trong Dashboard
Deployments → Latest → ... → Redeploy
```

### View Logs
```bash
# Render: Dashboard → Logs (real-time)
# Vercel: Dashboard → Project → Logs
```

---

## ✅ DEPLOYMENT CHECKLIST

**Trước khi deploy:**
- [ ] Code đã push lên GitHub repository
- [ ] Đã có tài khoản Render
- [ ] Đã có tài khoản Vercel
- [ ] Có quyền quản lý DNS cho helios.id.vn

**Backend (Render):**
- [ ] Service created và deployed
- [ ] Environment variables đã set
- [ ] Health check passing (green dot)
- [ ] Custom domain `api.helios.id.vn` added
- [ ] DNS CNAME record configured
- [ ] API endpoint test pass

**Frontend (Vercel):**
- [ ] Project imported và deployed
- [ ] Environment variables đã set
- [ ] Build successful
- [ ] Custom domain `seo.helios.id.vn` added
- [ ] DNS CNAME record configured
- [ ] Site accessible và working

**Integration:**
- [ ] Frontend có thể call backend API
- [ ] Không có CORS errors
- [ ] Full user flow work từ đầu đến cuối
- [ ] SSL certificates active (HTTPS)

---

## 🎯 NEXT STEPS SAU KHI DEPLOY

1. **Setup Monitoring:**
   - Thêm uptime monitoring (UptimeRobot, Pingdom)
   - Configure error alerts

2. **Performance:**
   - Enable Render CDN (nếu upgrade)
   - Setup Cloudflare (optional, cho caching)

3. **Security:**
   - Add rate limiting (nếu cần)
   - Setup WAF (Web Application Firewall)

4. **Analytics:**
   - Google Analytics
   - Plausible hoặc alternatives

---

## 📞 SUPPORT & RESOURCES

**Render:**
- Documentation: https://render.com/docs
- Status Page: https://status.render.com
- Community: https://community.render.com

**Vercel:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support
- Templates: https://vercel.com/templates

**Project:**
- GitHub Issues: (your-repo)/issues
- Local README: `README.md`, `backend/README.md`, `frontend/README.md`

---

## 🎉 HOÀN TẤT!

**Production URLs:**
- 🌐 Frontend: https://seo.helios.id.vn
- 🔌 Backend: https://api.helios.id.vn

**Test ngay:**
1. Truy cập https://seo.helios.id.vn
2. Nhập URL bất kỳ
3. Nhận kết quả phân tích SEO real-time!

---

*Last updated: October 29, 2025*

### A. Chuẩn bị

Dự án đã có:
- ✅ `backend/Dockerfile` - Docker image configuration
- ✅ `backend/.dockerignore` - Docker ignore rules
- ✅ `render.yaml` - Render service configuration

### B. Deploy bằng Render Dashboard

1. **Đăng nhập Render:** https://dashboard.render.com

2. **Tạo Web Service mới:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository: `IS207.Q13-seminar`
   - Root Directory: `backend`

3. **Cấu hình Service:**
   ```
   Name: seo-analyzer-api
   Runtime: Docker
   Region: Singapore
   Branch: main (hoặc master)
   Dockerfile Path: ./Dockerfile
   ```

4. **Environment Variables:**
   ```
   NODE_ENV=production
   PORT=3000
   PUPPETEER_HEADLESS=true
   PUPPETEER_TIMEOUT=30000
   CORS_ORIGIN=https://seo.helios.id.vn
   ```

5. **Cấu hình Custom Domain:**
   - Settings → Custom Domain
   - Add domain: `api.helios.id.vn`
   - Render sẽ cung cấp CNAME record

6. **Cấu hình DNS tại helios.id.vn:**
   ```
   Type: CNAME
   Name: api
   Value: <render-provided-domain>.onrender.com
   TTL: 3600
   ```

### C. Deploy bằng render.yaml (Auto-deploy)

1. Push `render.yaml` lên repository root

2. Render Dashboard → "Blueprint" → New Blueprint Instance

3. Connect repository và Render sẽ tự động:
   - Tạo service
   - Set environment variables
   - Deploy Docker image

4. Sau khi deploy, add custom domain `api.helios.id.vn`

---

## 🎨 2. FRONTEND - Deploy to Vercel

### A. Chuẩn bị

Dự án đã có:
- ✅ `frontend/vercel.json` - Vercel configuration
- ✅ Build script: `npm run build`
- ✅ Output directory: `dist`

### B. Deploy bằng Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy từ frontend directory:**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow prompts:**
   ```
   Set up and deploy? Yes
   Which scope? Your account
   Link to existing project? No
   Project name? seo-analyzer
   Directory: ./
   Override settings? No
   ```

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### C. Deploy bằng Vercel Dashboard

1. **Đăng nhập Vercel:** https://vercel.com/dashboard

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import Git Repository: `IS207.Q13-seminar`
   - Root Directory: `frontend`

3. **Cấu hình Build:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://api.helios.id.vn/api
   NODE_ENV=production
   VITE_ENABLE_DEVTOOLS=false
   ```

5. **Deploy:**
   - Click "Deploy"
   - Vercel sẽ build và deploy

6. **Cấu hình Custom Domain:**
   - Settings → Domains
   - Add domain: `seo.helios.id.vn`
   - Vercel sẽ cung cấp DNS records

7. **Cấu hình DNS tại helios.id.vn:**
   ```
   Type: CNAME
   Name: seo
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

---

## 📝 3. DNS CONFIGURATION

### Tại DNS Provider (helios.id.vn)

Thêm 2 CNAME records:

**Backend API:**
```
Type: CNAME
Name: api
Value: <your-render-service>.onrender.com
TTL: 3600
```

**Frontend:**
```
Type: CNAME
Name: seo
Value: cname.vercel-dns.com
TTL: 3600
```

### Verify DNS Propagation

```bash
# Check backend
nslookup api.helios.id.vn

# Check frontend
nslookup seo.helios.id.vn
```

---

## 🧪 4. TESTING DEPLOYMENT

### Backend Health Check

```bash
curl https://api.helios.id.vn/
```

Expected response:
```json
{
  "message": "AIO Analyzer API",
  "version": "1.0.0",
  "endpoints": {
    "analyze": "POST /api/analyze"
  }
}
```

### Backend API Test

```bash
curl -X POST https://api.helios.id.vn/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://vnexpress.net"}'
```

### Frontend Test

1. Visit: https://seo.helios.id.vn
2. Enter URL: `https://vnexpress.net`
3. Click "Analyze"
4. Verify results display correctly

---

## 🔄 5. CI/CD AUTO-DEPLOYMENT

### Render (Backend)

Auto-deploy khi:
- Push to `main` branch
- Merge pull request
- Manual trigger từ dashboard

### Vercel (Frontend)

Auto-deploy khi:
- Push to `main` branch (Production)
- Push to other branches (Preview)
- Pull request (Preview deployment)

---

## 📊 6. MONITORING & LOGS

### Render Dashboard

- **Logs:** Dashboard → Service → Logs tab
- **Metrics:** CPU, Memory, Response time
- **Health:** Auto health checks every 30s

### Vercel Dashboard

- **Analytics:** Functions, bandwidth, requests
- **Logs:** Runtime logs, build logs
- **Performance:** Web Vitals, lighthouse scores

---

## 🔒 7. SECURITY CHECKLIST

- ✅ HTTPS enabled (automatic on both platforms)
- ✅ CORS configured with production domain
- ✅ Environment variables secured
- ✅ Security headers configured (vercel.json)
- ✅ No secrets in repository
- ✅ .env files gitignored

---

## 🚨 8. TROUBLESHOOTING

### Backend Issues

**Puppeteer fails:**
```bash
# Check Render logs for Chromium installation
# Ensure Dockerfile has all dependencies
```

**CORS errors:**
```bash
# Verify CORS_ORIGIN in Render environment variables
# Should be: https://seo.helios.id.vn
```

### Frontend Issues

**API calls fail:**
```bash
# Check VITE_API_BASE_URL in Vercel environment variables
# Should be: https://api.helios.id.vn/api
```

**Build fails:**
```bash
# Check Vercel build logs
# Verify package.json scripts
```

---

## 📞 9. SUPPORT

**Render:**
- Docs: https://render.com/docs
- Status: https://status.render.com

**Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

## ✅ 10. DEPLOYMENT CHECKLIST

**Backend (Render):**
- [ ] Repository connected
- [ ] Dockerfile working
- [ ] Environment variables set
- [ ] Custom domain added: api.helios.id.vn
- [ ] DNS CNAME configured
- [ ] Health check passing
- [ ] API endpoint tested

**Frontend (Vercel):**
- [ ] Repository connected
- [ ] Build successful
- [ ] Environment variables set
- [ ] Custom domain added: seo.helios.id.vn
- [ ] DNS CNAME configured
- [ ] Site accessible
- [ ] API integration working

**Final:**
- [ ] Full flow tested end-to-end
- [ ] DNS propagated globally
- [ ] SSL certificates active
- [ ] Monitoring enabled
- [ ] Auto-deploy verified

---

**🎉 Deployment Complete!**

Frontend: https://seo.helios.id.vn  
Backend: https://api.helios.id.vn
