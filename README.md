# SEO Analyzer - Full Stack Application# AIO Analyzer Tool



Ứng dụng phân tích SEO và AI Search optimization được xây dựng với Vue 3 (Frontend) và Express.js + Puppeteer (Backend).AI Search Optimization Checker - Công cụ phân tích SEO và tối ưu cho AI Search.



## 📋 Tổng quan## 🚀 Tech Stack



SEO Analyzer là công cụ phân tích website tự động, giúp đánh giá các yếu tố SEO quan trọng:### Frontend

- **Vue 3** - Composition API với `<script setup>`

- ✅ JSON-LD Structured Data- **Vite 7** - Build tool & dev server

- ✅ Author Information- **Tailwind CSS v4** - Styling

- ✅ Meta Description (độ dài tối ưu)

- ✅ Headings Structure (H1, H2, H3)### Backend

- ✅ Open Graph Tags- **Express.js 5** - Web framework

- ✅ Canonical URL- **Puppeteer 24** - Headless browser crawler

- **Cheerio** - HTML parser

**Điểm số:** 0-100% dựa trên weighted scoring algorithm.- **Node.js** - Runtime environment



## 🏗️ Kiến trúc hệ thống## 📁 Cấu Trúc Project



``````

┌─────────────────┐         HTTP          ┌─────────────────┐IS207.Q13-seminar/

│                 │ ◄──────────────────► │                 │├── backend/              # Backend API

│  Vue 3 Frontend │    POST /api/analyze  │  Express Backend││   ├── src/

│  (Port 5173)    │                       │  (Port 3000)    ││   │   ├── index.js              # Server entry

│                 │                       │                 ││   │   ├── routes/               # API routes

└─────────────────┘                       └────────┬────────┘│   │   ├── controllers/          # Request handlers

                                                   ││   │   ├── services/             # Business logic

                                                   ▼│   │   └── utils/                # Helpers

                                          ┌────────────────┐│   └── package.json

                                          │   Puppeteer    ││

                                          │  (Headless     │├── src/                  # Frontend source

                                          │   Chromium)    ││   ├── components/

                                          └────────┬───────┘│   │   ├── features/             # Feature components

                                                   ││   │   ├── layout/               # Layout components

                                                   ▼│   │   └── ui/                   # UI primitives

                                          ┌────────────────┐│   ├── services/                 # API services

                                          │    Cheerio     ││   └── main.js

                                          │  (HTML Parser) ││

                                          └────────────────┘├── public/               # Static assets

```└── package.json          # Frontend dependencies

```

## 🚀 Công nghệ sử dụng

## 🛠️ Cài Đặt & Chạy

### Frontend

- **Vue 3.5.22** - Composition API, Script Setup### Yêu Cầu

- **Vite 7.1.11** - Build tool- Node.js >= 18.x

- **Tailwind CSS 4.1.16** - Styling- npm >= 9.x

- **Axios 1.13.1** - HTTP client

- **Reka UI 2.6.0** - Headless components### Quick Start



### Backend**1. Clone repository**

- **Express.js 5.1.0** - Web framework```bash

- **Puppeteer 24.26.1** - Browser automationgit clone <repository-url>

- **Cheerio 1.1.2** - HTML parsingcd IS207.Q13-seminar

- **CORS 2.8.5** - Cross-origin support```

- **dotenv 17.2.3** - Environment config

**2. Cài đặt Frontend**

## 📁 Cấu trúc dự án```bash

npm install

``````

IS207.Q13-seminar/

├── frontend/                    # Vue 3 frontend application**3. Cài đặt Backend**

│   ├── src/```bash

│   │   ├── components/cd backend

│   │   │   ├── layout/         # AppNavbar, AppHero, AppFooternpm install

│   │   │   ├── features/       # AnalyzerForm, ResultChecklistcd ..

│   │   │   └── ui/             # BaseSpinner, BaseAlert, ScoreCircle```

│   │   ├── services/           # API services (analyzerService.js)

│   │   ├── composables/        # Vue composables**4. Chạy Project**

│   │   ├── constants/          # Constants

│   │   ├── App.vueMở 2 terminal:

│   │   └── main.js

│   ├── public/                 # Static assets**Terminal 1 - Backend:**

│   ├── index.html```bash

│   ├── vite.config.jscd backend

│   ├── tailwind.config.jsnpm run dev

│   ├── package.json```

│   └── README.md               # Frontend documentationBackend chạy tại: http://localhost:3000

│

├── backend/                     # Express backend API**Terminal 2 - Frontend:**

│   ├── src/```bash

│   │   ├── index.js            # Server entry pointnpm run dev

│   │   ├── routes/             # API routes```

│   │   ├── controllers/        # Request handlersFrontend chạy tại: http://localhost:5173

│   │   ├── services/           # Business logic + Puppeteer

│   │   └── utils/              # Parsers, validators, scoring## 📖 Tài Liệu

│   ├── .env

│   ├── package.json- [API Specification](./API-SPECIFICATION.md) - Chi tiết API endpoints

│   └── README.md               # Backend documentation- [Setup Guide](./SETUP-GUIDE.md) - Hướng dẫn cài đặt chi tiết

│- [Code Conventions](./CONVENTIONS.md) - Naming conventions

├── .gitignore- [Project Structure](./STRUCTURE.md) - Chi tiết components

└── README.md                    # This file

```## ✨ Features



## 🛠️ Cài đặt và Chạy dự án- ✅ Phân tích JSON-LD structured data

- ✅ Kiểm tra meta description

### Yêu cầu hệ thống- ✅ Đếm headings (H1, H2, H3)

- ✅ Validate Open Graph tags

- **Node.js** >= 20.19.0 hoặc >= 22.12.0- ✅ Check canonical URL

- **npm** hoặc yarn- ✅ Tính điểm tổng thể (0-100)

- **~200MB** disk space (cho Chromium)- ✅ Real-time analysis với Puppeteer

- ✅ Responsive UI

### 1. Clone repository

## 🔧 Scripts

```bash

git clone <repository-url>### Frontend

cd IS207.Q13-seminar```bash

```npm run dev      # Development server

npm run build    # Production build

### 2. Cài đặt Backendnpm run preview  # Preview production build

```

```bash

cd backend### Backend

npm install```bash

```cd backend

npm run dev      # Development với nodemon

Puppeteer sẽ tự động download Chromium (~170MB).npm start        # Production

```

**Cấu hình `.env`:**

## 🌐 API Usage

```properties

PORT=3000**Endpoint:** `POST http://localhost:3000/api/analyze`

NODE_ENV=development

CORS_ORIGIN=http://localhost:5173**Request:**

PUPPETEER_TIMEOUT=30000```json

PUPPETEER_HEADLESS=true{

```  "url": "https://example.com/article"

}

### 3. Cài đặt Frontend```



```bash**Response:**

cd ../frontend```json

npm install{

```  "success": true,

  "data": {

**Cấu hình `.env`:**    "url": "https://example.com/article",

    "score": 85,

```properties    "checks": {

VITE_API_BASE_URL=http://localhost:3000/api      "hasJsonLd": true,

NODE_ENV=development      "hasAuthor": true,

VITE_ENABLE_DEVTOOLS=false      "hasMetaDescription": true,

```      "metaDescriptionLength": 155,

      "h2Count": 5,

### 4. Chạy ứng dụng      "hasOgTags": true,

      "hasCanonical": true

**Terminal 1 - Backend:**    }

  }

```bash}

cd backend```

npm run dev

```## 🎨 UI Components



Backend sẽ chạy tại: http://localhost:3000- `BaseSpinner` - Loading spinner

- `BaseAlert` - Alert messages

**Terminal 2 - Frontend:**- `ScoreCircle` - Circular progress

- `ChecklistItem` - Checklist items

```bash- `AnalyzerForm` - URL input form

cd frontend- `ResultChecklist` - Results display

npm run dev

```## 🔐 Environment Variables



Frontend sẽ chạy tại: http://localhost:5173### Frontend (`.env`)

```env

### 5. Truy cập ứng dụngVITE_API_BASE_URL=http://localhost:3000/api

NODE_ENV=development

Mở trình duyệt: **http://localhost:5173**VITE_ENABLE_DEVTOOLS=false

```

## 🧪 Testing

### Backend (`backend/.env`)

### Test Backend API```env

PORT=3000

**PowerShell:**NODE_ENV=development

CORS_ORIGIN=http://localhost:5173

```powershellPUPPETEER_TIMEOUT=30000

$body = @{ url = "https://vnexpress.net" } | ConvertTo-JsonPUPPETEER_HEADLESS=true

Invoke-RestMethod -Uri "http://localhost:3000/api/analyze" ````

    -Method Post -Body $body -ContentType "application/json"

```## 📝 Development Notes



**curl:**- Backend sử dụng Puppeteer - lần đầu chạy sẽ tải Chromium (~170MB)

- Timeout mặc định: 60 giây cho mỗi analysis

```bash- CORS đã được config cho development

curl -X POST http://localhost:3000/api/analyze \- Vue DevTools đã tắt (có thể bật lại trong vite.config.js)

  -H "Content-Type: application/json" \

  -d '{"url":"https://vnexpress.net"}'## 🐛 Troubleshooting

```

### Port đã được sử dụng

### Test URLs```bash

# Thay đổi port trong .env hoặc backend/.env

- **VNExpress:** https://vnexpress.net```

- **Dân Trí:** https://dantri.com.vn

- **Medium:** https://medium.com### Puppeteer không chạy

- **Dev.to:** https://dev.to```bash

cd backend

## 📡 API Documentationnpm install puppeteer --force

```

### POST /api/analyze

### Frontend không kết nối Backend

**Request:**- Kiểm tra backend đang chạy

- Kiểm tra VITE_API_BASE_URL trong .env

```json- Restart dev server sau khi sửa .env

{

  "url": "https://example.com"## 👥 Contributors

}

```IS207.Q13 - Seminar Project



**Response:**## 📄 License



```jsonISC

{
  "success": true,
  "data": {
    "url": "https://example.com",
    "timestamp": "2025-10-29T10:30:00.000Z",
    "score": 85,
    "checks": {
      "hasJsonLd": true,
      "hasAuthor": true,
      "hasMetaDescription": true,
      "metaDescriptionLength": 155,
      "h2Count": 5,
      "hasOgTags": true,
      "hasCanonical": true
    },
    "details": {
      "jsonLd": {...},
      "metaDescription": "...",
      "headings": { "h1": 1, "h2": 5, "h3": 8 },
      "ogTags": {...},
      "canonical": "..."
    }
  }
}
```

## 🔧 Development

### Frontend Development

```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development

```bash
cd backend
npm run dev          # Start with nodemon (auto-restart)
npm start            # Production mode
```

### Code Style

- **Frontend:** Composition API, `<script setup>`, Tailwind utilities
- **Backend:** Express middleware pattern, async/await
- **Comments:** Ngắn gọn, rõ ràng, 1-2 dòng

## 🐛 Troubleshooting

### Port đã được sử dụng

**Dừng tiến trình Node.js:**

```powershell
Get-Process -Name node | Stop-Process -Force
```

**Kiểm tra port cụ thể:**

```powershell
# Backend (port 3000)
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess

# Frontend (port 5173)
Get-NetTCPConnection -LocalPort 5173 | Select-Object OwningProcess
```

### Backend không kết nối

1. Kiểm tra backend đang chạy: http://localhost:3000
2. Kiểm tra CORS trong `backend/.env`:
   ```
   CORS_ORIGIN=http://localhost:5173
   ```
3. Kiểm tra frontend `.env`:
   ```
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

### Puppeteer lỗi

```bash
cd backend
Remove-Item -Recurse -Force node_modules
npm install
```

### Dependencies lỗi

```bash
# Frontend
cd frontend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Backend
cd ../backend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 🚀 Production Deployment

### Frontend

**Build:**

```bash
cd frontend
npm run build
```

Output: `frontend/dist/`

**Deploy to:**
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

**Update `.env.production`:**

```properties
VITE_API_BASE_URL=https://your-api-domain.com/api
NODE_ENV=production
```

### Backend

**Environment:**

```properties
PORT=3000
NODE_ENV=production
PUPPETEER_HEADLESS=true
CORS_ORIGIN=https://your-frontend-domain.com
```

**Deploy to:**
- Railway
- Render
- Heroku (với Puppeteer buildpack)
- DigitalOcean

**Start:**

```bash
cd backend
npm install --production
npm start
```

## 📊 Performance Notes

- **Mỗi request:** 10-30 giây (do Puppeteer fetch + render)
- **Timeout:** 60 giây
- **Concurrent requests:** Không giới hạn (có thể thêm rate limiting)
- **Memory:** ~200MB mỗi Puppeteer instance

## 🔒 Security

- ✅ CORS configured
- ✅ URL validation
- ✅ Error handling
- ⚠️ Chưa có: Rate limiting, Authentication
- ⚠️ Chưa có: Request throttling

**Production cần thêm:**
- Helmet.js cho security headers
- Rate limiting (express-rate-limit)
- Input sanitization
- Logging (winston, morgan)

## 📄 License

ISC License - Dự án học tập IS207.Q13

## 👥 Contributors

Nhóm sinh viên UIT - IS207.Q13

## 📚 Documentation

- **Root README:** Tổng quan và hướng dẫn setup
- **frontend/README.md:** Chi tiết frontend (components, styling, deployment)
- **backend/README.md:** Chi tiết backend (API, services, deployment)

## 🎯 Roadmap

### Hoàn thiện
- ✅ Frontend với Vue 3 + Tailwind CSS
- ✅ Backend với Express + Puppeteer
- ✅ API integration
- ✅ SEO scoring algorithm
- ✅ Error handling
- ✅ Documentation

### Tiếp theo (optional)
- ⬜ Rate limiting
- ⬜ Caching (Redis)
- ⬜ Database lưu lịch sử phân tích
- ⬜ User authentication
- ⬜ Export results (PDF, CSV)
- ⬜ Batch analysis (multiple URLs)
- ⬜ Scheduled analysis
- ⬜ Email notifications

## 🆘 Support

Nếu gặp vấn đề:

1. Kiểm tra logs trong terminal
2. Đọc **Troubleshooting** section
3. Kiểm tra `.env` configuration
4. Xóa `node_modules` và cài lại
5. Kiểm tra Node.js version

## 🙏 Acknowledgments

- **Vue.js Team** - Amazing framework
- **Puppeteer Team** - Browser automation
- **Tailwind CSS** - Utility-first CSS
- **Express.js** - Minimalist web framework
