<!-- Hiển thị kết quả phân tích với điểm số và checklist -->

<script setup>
import { computed } from 'vue';
import ScoreCircle from '../ui/ScoreCircle.vue';
import ChecklistItem from '../ui/ChecklistItem.vue';

const props = defineProps({
  results: { 
    type: Object, 
    required: true 
  }
});

// Tạo checklist item object
const createItem = (label, hasValue, successMsg, errorMsg, isWarning = false) => ({
  label,
  status: hasValue ? 'success' : (isWarning ? 'warning' : 'error'),
  message: hasValue ? successMsg : errorMsg,
});

// Danh sách các mục kiểm tra
const checklistItems = computed(() => {
  const r = props.results;
  if (!r) return [];
  
  return [
    createItem(
      'JSON-LD Schema', 
      r.hasJsonLd, 
      'Found valid JSON-LD structured data', 
      'Missing JSON-LD structured data'
    ),
    createItem(
      'Author Information', 
      r.hasAuthor, 
      'Author metadata found', 
      'Missing author metadata'
    ),
    createItem(
      'Meta Description', 
      r.hasMetaDescription, 
      `Meta description present (${r.metaDescriptionLength} chars)`, 
      'Missing meta description'
    ),
    { 
      label: 'H2 Headings', 
      status: r.h2Count > 0 ? 'success' : 'warning', 
      message: `Found ${r.h2Count} H2 heading${r.h2Count !== 1 ? 's' : ''}` 
    },
    createItem(
      'Open Graph Tags', 
      r.hasOgTags, 
      'Open Graph tags present', 
      'Missing Open Graph tags'
    ),
    createItem(
      'Canonical URL', 
      r.hasCanonical, 
      'Canonical URL specified', 
      'No canonical URL found', 
      true // isWarning
    ),
  ];
});

// Tính điểm tổng thể (% số mục passed)
const overallScore = computed(() => {
  const passed = checklistItems.value.filter(item => item.status === 'success').length;
  const total = checklistItems.value.length;
  return Math.round((passed / total) * 100);
});

//   // Show detailed view
// };
</script>

<template>
  <div class="w-full max-w-2xl mx-auto mt-8">
    <div class="result-card">
      <!-- Tiêu đề với điểm số -->
      <div class="mb-6 text-center pb-6 border-b border-dark-border/50">
        <h3 class="text-2xl font-bold text-white mb-3">Analysis Results</h3>
        <ScoreCircle :score="overallScore" />
      </div>

      <!-- Danh sách kiểm tra -->
      <div class="space-y-2">
        <ChecklistItem
          v-for="(item, index) in checklistItems"
          :key="index"
          :label="item.label"
          :status="item.status"
          :message="item.message"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>

      <!-- Chân trang -->
      <div class="mt-6 pt-6 border-t border-dark-border/50 text-center">
        <p class="text-xs text-gray-500">
          💡 Improve your score by adding missing elements to enhance AI Search visibility
        </p>
      </div>
    </div>
  </div>
</template>
