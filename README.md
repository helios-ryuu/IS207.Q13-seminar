<p align="center">
  <a href="https://www.uit.edu.vn/" title="Trường Đại học Công nghệ Thông tin">
    <img src="https://i.imgur.com/WmMnSRt.png" alt="Trường Đại học Công nghệ Thông tin | University of Information Technology">
  </a>
</p>
<h1 align="center"><b>IS207 - PHÁT TRIỂN ỨNG DỤNG WEB</b></h1>

## BẢNG MỤC LỤC
* [Giới thiệu môn học](#giới-thiệu-môn-học)
* [Giới thiệu đồ án seminar](#giới-thiệu-đồ-án-seminar)
* [Seminar](#seminar)
* [Thành viên nhóm](#thành-viên-nhóm)
* [Tính năng chính](#tính-năng-chính)
* [Công nghệ sử dụng](#công-nghệ-sử-dụng)
* [Cấu trúc dự án](#cấu-trúc-dự-án)
* [Kiến trúc hệ thống](#kiến-trúc-hệ-thống)
* [Cài đặt phần mềm](#cài-đặt-phần-mềm)
* [Khởi chạy dự án](#khởi-chạy-dự-án)
* [Deployment](#deployment)
* [Security](#security)

## GIỚI THIỆU MÔN HỌC
* **Tên môn học**: Phát triển ứng dụng web - Web Application Development
* **Mã môn học**: IS207
* **Lớp học**: IS207.Q13
* **Năm học**: HK1 2025-2026
* **Giảng viên hướng dẫn:** ThS. **Tạ Việt Phương**
* **Email:** *phuongtv@uit.edu.vn*

---

## GIỚI THIỆU ĐỒ ÁN SEMINAR
* **Tên đồ án:** MelTech AIO Analyzer Tool - AI Search Optimization Checker
* **Mô tả:** Ứng dụng full-stack phân tích tự động các yếu tố SEO quan trọng của website, giúp tối ưu hóa cho cả công cụ tìm kiếm truyền thống và AI Search Engine mới.
* **Production URLs:**
  - 🌐 Frontend: https://seo.helios.id.vn
  - 🔌 Backend API: https://api.helios.id.vn

---

## SEMINAR
**Chủ đề:** SEO trang web trong thời đại ngày nay khi có AI Search. Cần làm gì để cải thiện quảng bá, tăng tiếp cận trang web cả trên AI Search và SEO. Trình bày một số cách thực hiện, phương pháp bao gồm kỹ thuật và nội dung.

**Links:**
- 📦 Repository: https://github.com/helios-ryuu/IS207.Q13-seminar
- 🚀 Live Demo: https://seo.helios.id.vn
- 📖 Documentation: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## THÀNH VIÊN NHÓM
| STT |   MSSV   |           Họ và Tên |                                                      Github |                  Email |
|-----|:--------:|--------------------:|------------------------------------------------------------:|-----------------------:|
| 1   | 23520641 | Nguyễn Văn Mạnh Huy |                         [HuynFZ](https://github.com/HuynFZ) | 23520641@gm.uit.edu.vn |
| 2   | 23521434 |         Ngô Tiến Sỹ |               [helios-ryuu](https://github.com/helios-ryuu) | 23521367@gm.uit.edu.vn |
| 3   | 23521030 |  Nguyễn Lê Bảo Ngọc |               [ngochoccode](https://github.com/ngochoccode) | 23521030@gm.uit.edu.vn |
| 4   | 23520698 |  Nguyễn Thành Khang | [Nguyen-Thanh-Khang](https://github.com/Nguyen-Thanh-Khang) | 23520698@gm.uit.edu.vn |
| 5   | 23521417 |        Lê Vĩnh Thái |     [VinhThaideptraia](https://github.com/VinhThaideptraia) | 23521417@gm.uit.edu.vn |
| 6   | 23520753 |      Phạm Nhật Khoa |                     [Khoa0216](https://github.com/Khoa0216) | 23520753@gm.uit.edu.vn |
| 7   | 23520982 |      Nguyễn Văn Nam |               [Sinister-VN](https://github.com/Sinister-VN) | 23520982@gm.uit.edu.vn |

---

## TÍNH NĂNG CHÍNH

### 🎯 Phân Tích SEO Toàn Diện

1. **✅ JSON-LD Structured Data**
   - Kiểm tra schema markup
   - Validate author information
   - Check publication date

2. **✅ Meta Description Analysis**
   - Đánh giá độ dài (50-160 ký tự)
   - Character count
   - Optimization suggestions

3. **✅ Headings Structure**
   - Phân tích H1, H2, H3 hierarchy
   - Count số lượng mỗi loại heading
   - Validate structure

4. **✅ Open Graph Tags**
   - Validate OG meta tags
   - Check social media preview
   - Image, title, description validation

5. **✅ Canonical URL**
   - Kiểm tra canonical tag
   - Prevent duplicate content issues

6. **✅ SEO Score**
   - Tính điểm tổng thể 0-100%
   - Weighted scoring algorithm
   - Performance metrics

### 🚀 Công Nghệ & Performance

- **Real-time Analysis:** Kết quả trong 10-30 giây
- **Headless Browser:** Puppeteer crawl JavaScript-rendered content
- **Responsive UI:** Tối ưu cho desktop, tablet, mobile
- **Modern Stack:** Vue 3 + Express 5 + Node.js 22

---

## CÔNG NGHỆ SỬ DỤNG

### Frontend

1. **Ngôn ngữ & Framework:**
   - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+)
   - [Vue.js 3.5](https://vuejs.org/) - Progressive JavaScript Framework
   - Composition API với `<script setup>`

2. **Build Tool & Development:**
   - [Vite 7.1](https://vitejs.dev/) - Next Generation Frontend Tooling
   - HMR (Hot Module Replacement)

3. **Styling:**
   - [Tailwind CSS 4.1](https://tailwindcss.com/) - Utility-first CSS Framework
   - Responsive Design
   - Dark Mode Support

4. **UI Components & Libraries:**
   - [Reka UI 2.6](https://reka-ui.com/) - Headless UI Components
   - [Axios 1.13](https://axios-http.com/) - HTTP Client

5. **Deployment:**
   - [Vercel](https://vercel.com/) - Static Site Hosting
   - Auto-deployment từ GitHub
   - Custom Domain Support

### Backend

1. **Runtime & Language:**
   - [Node.js 22.x](https://nodejs.org/) - JavaScript Runtime
   - JavaScript (CommonJS)

2. **Framework:**
   - [Express.js 5.1](https://expressjs.com/) - Web Application Framework
   - RESTful API Architecture

3. **Web Scraping & Parsing:**
   - [Puppeteer 24.26](https://pptr.dev/) - Headless Browser Automation
   - Crawl JavaScript-rendered content
   - Screenshot capability
   - [Cheerio 1.1](https://cheerio.js.org/) - Fast, flexible HTML parser

4. **Utilities:**
   - [CORS 2.8](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing
   - [dotenv 17.2](https://www.npmjs.com/package/dotenv) - Environment Variables
   - [nodemon 3.1](https://nodemon.io/) - Auto-restart Development Server

5. **Deployment:**
   - [Render](https://render.com/) - Cloud Platform
   - Docker Container
   - Auto-deployment từ GitHub
   - Custom Domain Support

### DevOps & Tools

1. **Version Control:**
   - [Git](https://git-scm.com/)
   - [GitHub](https://github.com/) - Repository Hosting

2. **Containerization (Optional):**
   - [Docker](https://www.docker.com/)
   - Docker Compose

3. **CI/CD:**
   - Auto-deployment qua Vercel (Frontend)
   - Auto-deployment qua Render (Backend)
   - GitHub Webhooks

### Performance & Optimization

- **Frontend:**
  - Code Splitting
  - Lazy Loading
  - Tree Shaking (Vite)
  - Asset Optimization

- **Backend:**
  - Request validation
  - Error handling
  - Timeout configuration
  - Resource cleanup (Puppeteer)

---

## CẤU TRÚC DỰ ÁN

```
IS207.Q13-seminar/
├── backend/                          # Express Backend API
│   ├── src/
│   │   ├── index.js                 # Server entry point
│   │   ├── routes/
│   │   │   └── analyze.js           # API routes
│   │   ├── controllers/
│   │   │   └── analyzeController.js # Request handlers
│   │   ├── services/
│   │   │   ├── crawlerService.js    # Puppeteer crawler
│   │   │   └── analyzerService.js   # SEO analysis logic
│   │   └── utils/
│   │       ├── parser.js            # HTML parsing utilities
│   │       ├── scoring.js           # Score calculation
│   │       └── validator.js         # Input validation
│   ├── .env.example                 # Environment template
│   ├── .dockerignore                # Docker ignore rules
│   ├── Dockerfile                   # Docker configuration
│   ├── package.json                 # Dependencies & scripts
│   └── README.md                    # Backend documentation
│
├── frontend/                         # Vue 3 Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── features/            # Feature components
│   │   │   │   ├── AnalyzerForm.vue      # URL input form
│   │   │   │   └── ResultChecklist.vue   # Results display
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── AppNavbar.vue         # Navigation bar
│   │   │   │   ├── AppHero.vue           # Hero section
│   │   │   │   └── AppFooter.vue         # Footer
│   │   │   └── ui/                  # UI primitives
│   │   │       ├── BaseSpinner.vue       # Loading spinner
│   │   │       ├── BaseAlert.vue         # Alert messages
│   │   │       └── ScoreCircle.vue       # Score display
│   │   ├── services/
│   │   │   └── analyzerService.js   # API client
│   │   ├── App.vue                  # Root component
│   │   └── main.js                  # Entry point
│   ├── public/                      # Static assets
│   │   └── favicon.ico
│   ├── index.html                   # HTML template
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── vercel.json                 # Vercel deployment config
│   ├── package.json                # Dependencies & scripts
│   └── README.md                   # Frontend documentation
│
├── render.yaml                      # Render Blueprint config
├── DEPLOYMENT.md                    # Deployment guide
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## KIẾN TRÚC HỆ THỐNG

```
┌─────────────────────────────────────────────────────────────┐
│                      PRODUCTION ARCHITECTURE                 │
└─────────────────────────────────────────────────────────────┘

                    ┌──────────────────┐
                    │      User        │
                    │    (Browser)     │
                    └────────┬─────────┘
                             │
                             │ HTTPS
                             ▼
              ┌──────────────────────────────┐
              │    Vercel CDN + Edge         │
              │  (seo.helios.id.vn)          │
              │                              │
              │  ┌────────────────────────┐  │
              │  │   Vue 3 Frontend       │  │
              │  │   - Vite Build         │  │
              │  │   - Tailwind CSS       │  │
              │  │   - Static Assets      │  │
              │  └────────────────────────┘  │
              └──────────────┬───────────────┘
                             │
                             │ HTTPS POST
                             │ /api/analyze
                             ▼
              ┌──────────────────────────────┐
              │    Render Cloud Platform     │
              │  (api.helios.id.vn)          │
              │                              │
              │  ┌────────────────────────┐  │
              │  │   Express Backend      │  │
              │  │   - REST API           │  │
              │  │   - CORS Config        │  │
              │  │   - Error Handler      │  │
              │  └──────────┬─────────────┘  │
              │             │                 │
              │             ▼                 │
              │  ┌────────────────────────┐  │
              │  │   Puppeteer Service    │  │
              │  │   - Headless Chrome    │  │
              │  │   - Page Navigation    │  │
              │  │   - JavaScript Render  │  │
              │  └──────────┬─────────────┘  │
              │             │                 │
              │             ▼                 │
              │  ┌────────────────────────┐  │
              │  │   Cheerio Parser       │  │
              │  │   - HTML Extraction    │  │
              │  │   - SEO Data Parse     │  │
              │  │   - Score Calculation  │  │
              │  └────────────────────────┘  │
              └──────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    DATA FLOW DIAGRAM                         │
└─────────────────────────────────────────────────────────────┘

User Input (URL)
      │
      ├──► Frontend Validation
      │
      ├──► POST /api/analyze
      │
      └──► Backend Receives Request
              │
              ├──► URL Validation
              │
              ├──► Puppeteer Launch Browser
              │      │
              │      ├──► Navigate to URL
              │      ├──► Wait for Page Load
              │      └──► Get HTML Content
              │
              ├──► Cheerio Parse HTML
              │      │
              │      ├──► Extract JSON-LD
              │      ├──► Get Meta Tags
              │      ├──► Count Headings
              │      ├──► Get OG Tags
              │      └──► Get Canonical URL
              │
              ├──► Calculate SEO Score
              │
              └──► Return JSON Response
                     │
                     └──► Frontend Display Results
```

---

## CÀI ĐẶT PHẦN MỀM

### Yêu cầu hệ thống
- [X] [Node.js](https://nodejs.org/) >= 22.x
- [X] [npm](https://www.npmjs.com/) >= 9.x
- [X] [Git](https://git-scm.com/)
- [X] ~200MB disk space (cho Chromium của Puppeteer)

### Tùy chọn (cho development)
- [ ] [Docker Desktop](https://www.docker.com/) - Containerization
- [ ] [VS Code](https://code.visualstudio.com/) - Code editor
- [ ] [Postman](https://www.postman.com/) - API testing

### Hướng dẫn cài đặt Node.js

1. **Tải Node.js**
   - Truy cập [https://nodejs.org/](https://nodejs.org/)
   - Tải phiên bản **LTS 22.x**

2. **Cài đặt**
   - Chạy file installer
   - Chọn "Add to PATH" trong quá trình cài đặt
   - Hoàn tất cài đặt

3. **Kiểm tra cài đặt**
   ```cmd
   node -v
   npm -v
   ```

---

## KHỞI CHẠY DỰ ÁN

### Yêu Cầu Trước Khi Chạy
- Node.js >= 22.x đã được cài đặt
- npm >= 9.x
- Git đã được cài đặt

### Bước 1: Clone Repository

```bash
git clone https://github.com/helios-ryuu/IS207.Q13-seminar.git
cd IS207.Q13-seminar
```

### Bước 2: Setup Backend

```bash
cd backend
npm install

# Tạo file .env từ template
cp .env.example .env
```

**Cấu hình `backend/.env`:**
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
PUPPETEER_TIMEOUT=60000
PUPPETEER_HEADLESS=true
```

**Chạy backend:**
```bash
npm run dev
```

✅ Backend sẽ chạy tại: **http://localhost:3000**

### Bước 3: Setup Frontend

Mở terminal mới:

```bash
cd frontend
npm install

# Tạo file .env từ template
cp .env.example .env
```

**Cấu hình `frontend/.env`:**
```env
VITE_API_BASE_URL=http://localhost:3000/api
NODE_ENV=development
```

**Chạy frontend:**
```bash
npm run dev
```

✅ Frontend sẽ chạy tại: **http://localhost:5173**

### Bước 4: Truy Cập Ứng Dụng

Mở trình duyệt và truy cập: **http://localhost:5173**

### Lưu ý quan trọng
> ⚠️ **Backend phải chạy trước Frontend** để API có thể kết nối
> 
> 💡 **Lần chạy đầu tiên:** Puppeteer sẽ tự động tải Chromium (~170MB), quá trình này có thể mất vài phút

---

## DEPLOYMENT

Xem hướng dẫn chi tiết trong **[DEPLOYMENT.md](./DEPLOYMENT.md)**

### Quick Summary

**Backend (Render):**
- Platform: Render
- Runtime: Docker
- URL: https://api.helios.id.vn
- Auto-deploy từ GitHub main branch

**Frontend (Vercel):**
- Platform: Vercel
- Framework: Vite
- URL: https://seo.helios.id.vn
- Auto-deploy từ GitHub main branch

**Custom Domains:**
- Frontend CNAME: `seo → cname.vercel-dns.com`
- Backend CNAME: `api → seo-analyzer-api.onrender.com`

---

## SECURITY

**✅ Đã implement:**
- CORS configuration
- URL validation
- Error handling
- HTTPS (production)
- Security headers (Vercel)

**⚠️ Chưa có (TODO):**
- Rate limiting
- Authentication
- Request throttling
- Logging system