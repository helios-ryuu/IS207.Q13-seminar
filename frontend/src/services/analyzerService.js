// Service xử lý API calls cho analyzer

import axios from 'axios';

// Axios instance với cấu hình mặc định
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 60000, // Tăng timeout vì Puppeteer cần thời gian
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('🔵 API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Tự động unwrap data và xử lý errors
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.statusText);
    
    // Backend trả về { success: true, data: {...} }
    if (response.data?.success && response.data?.data) {
      return response.data.data;
    }
    
    return response.data;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.status, error.message);
    
    // Xử lý error từ backend
    const errorMessage = error.response?.data?.error?.message 
      || error.response?.data?.message 
      || error.message 
      || 'Failed to analyze URL';
    
    return Promise.reject(new Error(errorMessage));
  }
);

// Phân tích một URL (sử dụng API backend thật)
export const analyzeUrl = async (url) => {
  const result = await api.post('/analyze', { url });
  
  // Transform data từ backend sang format mà frontend expects
  return {
    url: result.url,
    timestamp: result.timestamp,
    score: result.score,
    // Flatten checks vào root level để tương thích với UI hiện tại
    hasJsonLd: result.checks.hasJsonLd,
    hasAuthor: result.checks.hasAuthor,
    hasMetaDescription: result.checks.hasMetaDescription,
    metaDescriptionLength: result.checks.metaDescriptionLength,
    h2Count: result.checks.h2Count,
    hasOgTags: result.checks.hasOgTags,
    hasCanonical: result.checks.hasCanonical,
    // Giữ details nếu cần
    details: result.details
  };
};

export default api;