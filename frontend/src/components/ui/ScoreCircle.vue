<!-- Vòng tròn hiển thị điểm số với màu sắc theo mức độ -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
  score: { 
    type: Number, 
    required: true,
    validator: (value) => value >= 0 && value <= 100
  }
});

// SVG circle settings
const CIRCLE_RADIUS = 40;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
// Tính toán màu sắc dựa trên điểm số
// >= 80: Excellent (green)
// >= 50: Good (yellow)
// < 50: Needs work (red)
const scoreColor = computed(() => 
  props.score >= 80 ? 'text-green-400' : 
  props.score >= 50 ? 'text-yellow-400' : 'text-red-400'
);

// Nhãn văn bản mô tả
const scoreLabel = computed(() => 
  props.score >= 80 ? 'Excellent' : 
  props.score >= 50 ? 'Good' : 'Needs Work'
);

// Tính toán offset cho SVG circle (hiệu ứng progress)
// offset = circumference - (circumference * percentage)
const strokeDashoffset = computed(() => 
  CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * props.score) / 100
);

// TODO: Computed cho size variants
// const sizeClasses = computed(() => ({
//   sm: { svg: 'w-16 h-16', text: 'text-lg' },
//   md: { svg: 'w-24 h-24', text: 'text-2xl' },
//   lg: { svg: 'w-32 h-32', text: 'text-3xl' }
// }[props.size]))
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <!-- Vòng tròn progress -->
    <div class="relative">
      <svg class="w-24 h-24 transform -rotate-90">
        <!-- Vòng nền (background circle) -->
        <circle 
          :cx="48" 
          :cy="48" 
          :r="CIRCLE_RADIUS" 
          stroke="currentColor" 
          stroke-width="6" 
          fill="none" 
          class="text-dark-border" 
        />
        
        <!-- Vòng progress (animated) -->
        <circle 
          :cx="48" 
          :cy="48" 
          :r="CIRCLE_RADIUS" 
          stroke="currentColor" 
          stroke-width="6" 
          fill="none"
          :class="scoreColor"
          :stroke-dasharray="CIRCLE_CIRCUMFERENCE"
          :stroke-dashoffset="strokeDashoffset"
          class="transition-all duration-1000 ease-out"
          style="filter: drop-shadow(0 0 8px currentColor);"
        />
      </svg>
      
      <!-- Điểm số ở giữa -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span :class="['text-2xl font-bold', scoreColor]">
          {{ score }}%
        </span>
      </div>
    </div>
    
    <!-- Nhãn văn bản -->
    <div class="text-left">
      <p class="text-sm text-gray-400">Overall Score</p>
      <p :class="['text-lg font-semibold', scoreColor]">
        {{ scoreLabel }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* SVG circle animation được xử lý bởi Tailwind transitions */
/* Có thể thêm custom keyframe animation nếu cần */
</style>
