<!-- Loading spinner với các size khác nhau (sm/md/lg) -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { 
    type: String, 
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
});

// Map kích thước sang Tailwind classes
const sizeClasses = computed(() => ({
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
}[props.size] || 'w-10 h-10'));
//   secondary: 'border-gray-500/30 border-t-gray-500',
//   white: 'border-white/30 border-t-white'
// }[props.variant]))
</script>

<template>
  <div class="flex items-center justify-center">
    <div :class="[sizeClasses, 'relative']">
      <!-- Vòng quay bên ngoài -->
      <div class="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin-slow"></div>
      
      <!-- Chấm sáng ở giữa -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
      </div>
    </div>

    <!-- TODO: Thêm label nếu có -->
    <!-- <span v-if="label" class="ml-3 text-sm text-gray-400">
      {{ label }}
    </span> -->
  </div>
</template>

<style scoped>
/* Animation được định nghĩa trong main.css */
/* Có thể override hoặc thêm custom animation ở đây */
</style>
