<!-- Form nhập URL để phân tích SEO -->

<script setup>
import { ref } from 'vue';
import BaseSpinner from '../ui/BaseSpinner.vue';

const emit = defineEmits(['analyze']);

// State
const url = ref('');
const isLoading = ref(false);
const error = ref('');

// Kiểm tra URL hợp lệ
const validateUrl = (urlString) => {
  try {
    const urlObj = new URL(urlString);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

// Xử lý submit form
const handleAnalyze = () => {
  error.value = '';
  
  // Kiểm tra URL rỗng
  if (!url.value.trim()) {
    error.value = 'Please enter a URL';
    return;
  }

  // Kiểm tra định dạng URL
  if (!validateUrl(url.value)) {
    error.value = 'Please enter a valid URL (must start with http:// or https://)';
    return;
  }

  // Phát sự kiện analyze
  emit('analyze', url.value);
};

// Exposed methods cho parent component
defineExpose({
  setLoading: (loading) => { 
    isLoading.value = loading; 
  },
  clearUrl: () => { 
    url.value = ''; 
    error.value = '';
  },
});
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">
    <div class="glass-effect rounded-2xl p-8 shadow-2xl">
      <!-- Tiêu đề -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-2 text-glow">
          Analyze Your Content
        </h2>
        <p class="text-gray-400 text-sm">
          Enter a blog or article URL to check its AI Search optimization
        </p>
      </div>

      <!-- Phần nhập liệu -->
      <div class="space-y-4">
        <!-- Ô nhập URL -->
        <div class="relative">
          <input
            v-model="url"
            type="text"
            placeholder="https://example.com/your-article"
            class="w-full px-5 py-4 bg-dark-bg/60 text-white rounded-xl glow-border transition-all duration-300 text-base focus:bg-dark-bg/80"
            :disabled="isLoading"
            @keyup.enter="handleAnalyze"
          />
          
          <!-- Icon URL -->
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </div>

        <!-- Thông báo lỗi -->
        <div v-if="error" class="text-red-400 text-sm flex items-center gap-2 animate-slide-up">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ error }}
        </div>

        <!-- Nút phân tích -->
        <button
          @click="handleAnalyze"
          :disabled="isLoading"
          class="btn-primary w-full relative overflow-hidden group"
        >
          <!-- Trạng thái bình thường -->
          <span v-if="!isLoading" class="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Analyze URL
          </span>
          
          <!-- Trạng thái đang tải -->
          <span v-else class="flex items-center justify-center gap-3">
            <BaseSpinner size="sm" />
            Analyzing...
          </span>
        </button>
      </div>

      <!-- Mẹo nhanh -->
      <div class="mt-6 pt-6 border-t border-dark-border/50">
        <p class="text-xs text-gray-500 text-center">
          💡 Tip: We'll check for JSON-LD, meta tags, headings, and more
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #6B7280;
}

input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
