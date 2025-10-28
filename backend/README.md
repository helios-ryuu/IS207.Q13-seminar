# SEO Analyzer - Backend API

Backend service cho SEO Analyzer Tool - phân tích SEO và AI Search optimization sử dụng Puppeteer crawler và Cheerio parser.

## 🚀 Công nghệ sử dụng

- **Express.js 5.1.0** - Fast, unopinionated web framework
- **Puppeteer 24.26.1** - Headless Chrome crawler
- **Cheerio 1.1.2** - Fast, flexible HTML parser
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **dotenv 17.2.3** - Environment configuration
- **Nodemon 3.1.10** - Auto-restart development server

## 📁 Cấu trúc thư mục

```
backend/
├── src/
│   ├── index.js                    # Express server entry point
│   ├── routes/
│   │   └── analyze.js              # API routes definition
│   ├── controllers/
│   │   └── analyzeController.js    # Request handlers
│   ├── services/
│   │   ├── analyzerService.js      # Business logic
│   │   └── crawlerService.js       # Puppeteer crawler
│   └── utils/
│       ├── parsers.js              # Cheerio HTML parsers
│       ├── validators.js           # URL validation
│       └── scoring.js              # SEO score calculation
├── .env                            # Environment variables
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🛠️ Cài đặt

### Yêu cầu hệ thống

- Node.js >= 20.19.0 hoặc >= 22.12.0
- npm hoặc yarn
- ~200MB disk space (Chromium binary)

### Các bước cài đặt

1. **Cài đặt dependencies:**

```bash
npm install
```

Puppeteer sẽ tự động download Chromium (~170MB) lần đầu.

2. **Cấu hình môi trường:**

File `.env` đã được tạo sẵn:

```properties
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
PUPPETEER_TIMEOUT=30000
PUPPETEER_HEADLESS=true
```

## 🏃 Chạy ứng dụng

### Development Mode (với Nodemon)

```bash
npm run dev
```

Server sẽ chạy tại: http://localhost:3000

Nodemon sẽ tự động restart khi có thay đổi code.

### Production Mode

```bash
npm start
```

## 📡 API Endpoints

### POST /api/analyze

Phân tích SEO cho một URL.

**Request:**

```json
{
  "url": "https://example.com/article"
}
```

**Response (Success):**

```json
{
  "success": true,
  "data": {
    "url": "https://example.com/article",
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
      "jsonLd": {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "...",
        "author": {...}
      },
      "metaDescription": "Article description...",
      "headings": {
        "h1": 1,
        "h2": 5,
        "h3": 8
      },
      "ogTags": {
        "og:title": "...",
        "og:description": "...",
        "og:image": "..."
      },
      "canonical": "https://example.com/article"
    }
  }
}
```

**Response (Error):**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_URL",
    "message": "Invalid URL format"
  }
}
```

**Error Codes:**

- `INVALID_URL` - URL không hợp lệ
- `FETCH_ERROR` - Không thể fetch URL (timeout, network error)
- `PARSE_ERROR` - Lỗi khi parse HTML

## 🧪 Testing

### Test với PowerShell

```powershell
# Test basic endpoint
$body = @{
    url = "https://vnexpress.net"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/analyze" `
    -Method Post `
    -Body $body `
    -ContentType "application/json"
```

### Test với curl

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://vnexpress.net"}'
```

### Test URLs (Vietnamese News Sites)

1. **VNExpress:** `https://vnexpress.net`
2. **Dân Trí:** `https://dantri.com.vn`
3. **ZingNews:** `https://zingnews.vn`
4. **Tuổi Trẻ:** `https://tuoitre.vn`
5. **Thanh Niên:** `https://thanhnien.vn`

### International Sites

1. **Medium:** `https://medium.com`
2. **Dev.to:** `https://dev.to`
3. **TechCrunch:** `https://techcrunch.com`

**Note:** Mỗi request mất **10-30 giây** do Puppeteer cần thời gian để:
- Launch headless browser
- Navigate to URL
- Wait for page load
- Extract HTML content

## 🔧 Scoring Algorithm

Điểm SEO được tính theo công thức weighted scoring:

| Tiêu chí | Điểm tối đa | Mô tả |
|----------|-------------|-------|
| JSON-LD Schema | 20 | Có structured data |
| Author trong JSON-LD | 15 | Có thông tin tác giả |
| Meta Description | 20 | Có và độ dài 50-160 ký tự |
| H2 Headings | 15 | Số lượng H2 trong khoảng 3-8 |
| Open Graph Tags | 15 | Có OG tags (title, description, image) |
| Canonical URL | 15 | Có canonical link |

**Tổng điểm:** 0-100%

## 🔍 Services & Utils

### CrawlerService (Puppeteer)

```javascript
// Launch headless Chrome
const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

// Navigate with 30s timeout
await page.goto(url, { 
  waitUntil: 'networkidle0',
  timeout: 30000 
})

// Extract HTML
const html = await page.content()
```

### Parsers (Cheerio)

```javascript
// Extract JSON-LD
const jsonLd = extractJsonLd($)

// Extract meta description
const metaDescription = extractMetaDescription($)

// Count headings (H1, H2, H3)
const headings = countHeadings($)

// Extract Open Graph tags
const ogTags = extractOgTags($)

// Extract canonical URL
const canonical = extractCanonical($)
```

### Validators

```javascript
// Validate URL format
const isValid = isValidUrl(url)
// Returns: true/false
```

### Scoring

```javascript
// Calculate SEO score (0-100)
const score = calculateScore(checks)
```

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng

```bash
# Kiểm tra process đang dùng port 3000
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess

# Dừng process
Stop-Process -Id <ProcessId> -Force
```

Hoặc thay đổi port trong `.env`:
```properties
PORT=3001
```

### Puppeteer lỗi "Failed to launch chrome"

Cài đặt lại Chromium:

```bash
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### CORS errors

Đảm bảo `CORS_ORIGIN` trong `.env` khớp với frontend URL:

```properties
CORS_ORIGIN=http://localhost:5173
```

### Timeout errors

Tăng timeout trong `.env`:

```properties
PUPPETEER_TIMEOUT=60000
```

## 🚀 Production Deployment

### Build & Deploy

1. Set environment to production:

```bash
NODE_ENV=production
PUPPETEER_HEADLESS=true
```

2. Install production dependencies only:

```bash
npm install --production
```

3. Start server:

```bash
npm start
```

### Recommended Hosting

- **Railway** - Easy deployment, automatic HTTPS
- **Render** - Free tier với auto-sleep
- **Heroku** - Classic PaaS (buildpack needed for Puppeteer)
- **DigitalOcean** - VPS với full control

### Docker Support (Optional)

Create `Dockerfile`:

```dockerfile
FROM node:20-slim

# Install Chromium dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Development Guidelines

### Error Handling

Tất cả errors được catch và return format nhất quán:

```javascript
try {
  // Logic
} catch (error) {
  return res.status(500).json({
    success: false,
    error: {
      code: 'ERROR_CODE',
      message: error.message
    }
  })
}
```

### Logging

Console logs cho debugging:

```javascript
console.log('🚀 Server running on http://localhost:3000')
console.log('📝 Analyzing URL:', url)
console.log('✅ Analysis complete')
```

## 📄 License

ISC License - Dự án học tập IS207.Q13

## 👥 Contributors

Nhóm sinh viên UIT - IS207.Q13
