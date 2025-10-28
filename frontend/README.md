# SEO Analyzer - Frontend

Ứng dụng phân tích SEO được xây dựng với Vue 3, Vite và Tailwind CSS.

## 🚀 Công nghệ sử dụng

- **Vue 3.5.22** - Progressive JavaScript Framework với Composition API
- **Vite 7.1.11** - Next Generation Frontend Tooling
- **Tailwind CSS 4.1.16** - Utility-first CSS Framework
- **Axios 1.13.1** - Promise-based HTTP Client
- **Reka UI 2.6.0** - Headless UI Components

## 📁 Cấu trúc thư mục

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/        # Layout components (Navbar, Hero, Footer)
│   │   ├── features/      # Feature components (Form, Results)
│   │   └── ui/            # Reusable UI components
│   ├── services/          # API services
│   ├── composables/       # Vue composables
│   ├── constants/         # Constants and configuration
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
├── public/                # Static assets
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Cài đặt

### Yêu cầu hệ thống

- Node.js >= 20.19.0 hoặc >= 22.12.0
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**

```bash
npm install
```

2. **Cấu hình môi trường:**

File `.env` đã được cấu hình sẵn:

```properties
VITE_API_BASE_URL=http://localhost:3000/api
NODE_ENV=development
VITE_ENABLE_DEVTOOLS=false
```

## 🏃 Chạy ứng dụng

### Development Mode

```bash
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:5173

### Production Build

```bash
npm run build
```

Build output sẽ được tạo trong thư mục `dist/`

### Preview Production Build

```bash
npm run preview
```

## 🔌 API Integration

Frontend kết nối với backend API thông qua:

- **Base URL:** `http://localhost:3000/api`
- **Endpoint:** `POST /analyze`
- **Timeout:** 60 seconds

### API Request Format

```javascript
{
  url: "https://example.com"
}
```

### API Response Format

```javascript
{
  url: "https://example.com",
  score: 85,
  hasJsonLd: true,
  hasAuthor: true,
  hasMetaDescription: true,
  metaDescriptionLength: 156,
  h1Count: 1,
  h2Count: 5,
  h3Count: 8,
  hasOgTags: true,
  hasCanonical: true
}
```

## 📦 Components

### Layout Components

- **AppNavbar** - Navigation bar với logo và title
- **AppHero** - Hero section với headline và description
- **AppFooter** - Footer với copyright

### Feature Components

- **AnalyzerForm** - Form nhập URL và submit analysis
- **ResultChecklist** - Hiển thị kết quả phân tích SEO

### UI Components

- **BaseSpinner** - Loading spinner animation
- **BaseAlert** - Alert messages (success/error)
- **ScoreCircle** - Circular progress indicator
- **ChecklistItem** - Single checklist item với icon

## 🎨 Styling

Dự án sử dụng Tailwind CSS v4 với:

- Utility-first approach
- Custom color palette (lime-500 primary)
- Responsive design
- Dark/light mode support

## 🔧 Configuration Files

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173
  }
})
```

### tailwind.config.js

```javascript
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## 🐛 Troubleshooting

### Port đã được sử dụng

Nếu port 5173 đã được sử dụng:

```bash
# Dừng process đang chạy trên port 5173
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process -Force
```

### Backend không kết nối được

Đảm bảo backend đang chạy:

```bash
# Từ thư mục gốc
cd backend
npm run dev
```

Backend phải chạy tại port 3000.

### Dependencies lỗi

Xóa node_modules và cài đặt lại:

```bash
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 📝 Development Guidelines

### Code Style

- Sử dụng Composition API với `<script setup>`
- Component names theo PascalCase
- Props và events theo camelCase
- Comments ngắn gọn và rõ ràng

### Component Structure

```vue
<script setup>
// Imports
// Props/Emits
// Composables
// Reactive state
// Functions
</script>

<template>
  <!-- Template -->
</template>
```

## 🚀 Deployment

### Build cho production

```bash
npm run build
```

### Deploy tới hosting

Output trong `dist/` có thể deploy tới:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### Environment Variables cho Production

Cập nhật `.env.production`:

```properties
VITE_API_BASE_URL=https://your-backend-api.com/api
NODE_ENV=production
```

## 📄 License

ISC License - Dự án học tập IS207.Q13

## 👥 Contributors

Nhóm sinh viên UIT - IS207.Q13
