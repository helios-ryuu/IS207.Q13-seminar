<!-- Component thông báo (error/success/warning/info) -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { 
    type: String, 
    default: 'error',
    validator: (value) => ['error', 'success', 'warning', 'info'].includes(value)
  },
  message: { type: String, required: true },
  title: { type: String, default: '' },
  closable: { type: Boolean, default: false }
});

const emit = defineEmits(['close']);

// Style cho từng loại alert
const alertStyles = computed(() => ({
  error: {
    bg: 'bg-red-400/10',
    border: 'border-red-400/30',
    icon: 'text-red-400',
    title: 'text-red-400',
    text: 'text-red-300/80'
  },
  success: {
    bg: 'bg-green-400/10',
    border: 'border-green-400/30',
    icon: 'text-green-400',
    title: 'text-green-400',
    text: 'text-green-300/80'
  },
  warning: {
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/30',
    icon: 'text-yellow-400',
    title: 'text-yellow-400',
    text: 'text-yellow-300/80'
  },
  info: {
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
    icon: 'text-blue-400',
    title: 'text-blue-400',
    text: 'text-blue-300/80'
  }
}[props.type]));

// Default title nếu không có
const displayTitle = computed(() => {
  if (props.title) return props.title;
  return {
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information'
  }[props.type];
});

// ============================================================
// METHODS
// ============================================================
const handleClose = () => {
  emit('close');
};

// TODO: Auto-dismiss logic
// onMounted(() => {
//   if (props.duration > 0) {
//     setTimeout(() => {
//       handleClose();
//     }, props.duration);
//   }
// });
</script>

<template>
  <div class="max-w-2xl mx-auto mt-6">
    <div 
      :class="[
        alertStyles.bg, 
        alertStyles.border, 
        'border rounded-xl p-4 flex items-start gap-3 animate-slide-up'
      ]"
    >
      <!-- Icon -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        :class="[alertStyles.icon, 'h-5 w-5 flex-shrink-0 mt-0.5']" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      <!-- Nội dung -->
      <div class="flex-1">
        <p :class="[alertStyles.title, 'font-medium']">{{ displayTitle }}</p>
        <p :class="[alertStyles.text, 'text-sm mt-1']">{{ message }}</p>
        
        <!-- TODO: Slot cho actions -->
        <!-- <div v-if="$slots.actions" class="mt-3">
          <slot name="actions" />
        </div> -->
      </div>

      <!-- Nút đóng -->
      <button 
        v-if="closable"
        @click="handleClose"
        :class="[alertStyles.icon, 'hover:opacity-70 transition-opacity']"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific animations nếu cần */
</style>
