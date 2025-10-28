

<script setup>
import { ref } from 'vue';

// Layout Components
import AppNavbar from './components/layout/AppNavbar.vue';
import AppHero from './components/layout/AppHero.vue';
import AppFooter from './components/layout/AppFooter.vue';

// UI Components
import BaseAlert from './components/ui/BaseAlert.vue';

// Feature Components
import AnalyzerForm from './components/features/AnalyzerForm.vue';
import ResultChecklist from './components/features/ResultChecklist.vue';

// Services
import { analyzeUrl } from './services/analyzerService.js';

// State
const analyzerFormRef = ref(null);
const analysisResults = ref(null);
const errorMessage = ref('');

// Xử lý phân tích URL
const handleAnalyze = async (url) => {
  // Reset trạng thái
  errorMessage.value = '';
  analysisResults.value = null;
  analyzerFormRef.value?.setLoading(true);

  try {
    console.log('🔍 Starting analysis for:', url);
    const results = await analyzeUrl(url);
    console.log('✅ Analysis completed:', results);
    analysisResults.value = results;
  } catch (error) {
    errorMessage.value = error.message || 'Failed to analyze URL. Please try again.';
    console.error('❌ Analysis error:', error);
  } finally {
    analyzerFormRef.value?.setLoading(false);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Thanh điều hướng -->
    <AppNavbar />

    <!-- Nội dung chính -->
    <main class="flex-1 container mx-auto px-6 py-12">
      <!-- Phần tiêu đề -->
      <AppHero />

      <!-- Form phân tích -->
      <div class="animate-slide-up">
        <AnalyzerForm 
          ref="analyzerFormRef"
          @analyze="handleAnalyze" 
        />
      </div>

      <!-- Thông báo lỗi (nếu có) -->
      <BaseAlert v-if="errorMessage" type="error" :message="errorMessage" />

      <!-- Kết quả phân tích (nếu có) -->
      <div v-if="analysisResults" class="animate-fade-in">
        <ResultChecklist :results="analysisResults" />
      </div>
    </main>

    <!-- Chân trang -->
    <AppFooter />
  </div>
</template>