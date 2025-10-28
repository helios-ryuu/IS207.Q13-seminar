<!-- Item trong danh sách kiểm tra với status badge -->

<script setup>
const props = defineProps({
  label: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true,
    validator: (value) => ['success', 'error', 'warning'].includes(value)
  },
  message: { 
    type: String, 
    required: true 
  }
  // TODO: Thêm props mới
  // clickable: { type: Boolean, default: false },
  // expandable: { type: Boolean, default: false },
  // progress: { type: Number, default: null }
});

// ============================================================
// EMITS
// ============================================================
// TODO: Thêm events
// const emit = defineEmits(['click', 'expand'])

// ============================================================
// DATA
// ============================================================
// Map icon theo trạng thái
const ICON_MAP = {
  success: '✓',
  error: '✗',
  warning: '⚠'
};

// Map CSS classes theo trạng thái
const STATUS_CLASSES = {
  success: {
    icon: 'icon-success bg-green-400/10',
    badge: 'bg-green-400/10 text-green-400'
  },
  error: {
    icon: 'icon-error bg-red-400/10',
    badge: 'bg-red-400/10 text-red-400'
  },
  warning: {
    icon: 'icon-warning bg-yellow-400/10',
    badge: 'bg-yellow-400/10 text-yellow-400'
  }
};

// Map badge labels
const BADGE_LABELS = {
  success: 'Pass',
  error: 'Fail',
  warning: 'Warning'
};
</script>

<template>
  <div class="checklist-item">
    <!-- Icon trạng thái -->
    <div :class="[
      'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold',
      STATUS_CLASSES[status].icon
    ]">
      {{ ICON_MAP[status] }}
    </div>

    <!-- Nội dung chính -->
    <div class="flex-1 min-w-0">
      <p class="text-white font-medium text-sm">{{ label }}</p>
      <p class="text-gray-400 text-xs mt-0.5">{{ message }}</p>
      
      <!-- TODO: Slot cho expanded details -->
      <!-- <div v-if="expanded" class="mt-2">
        <slot name="details" />
      </div> -->
    </div>

    <!-- Badge trạng thái -->
    <div :class="[
      'flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium',
      STATUS_CLASSES[status].badge
    ]">
      {{ BADGE_LABELS[status] }}
    </div>

    <!-- TODO: Slot cho actions -->
    <!-- <div v-if="$slots.actions" class="flex-shrink-0 ml-2">
      <slot name="actions" />
    </div> -->
  </div>
</template>

<style scoped>
/* Animation được định nghĩa trong main.css (.checklist-item) */
/* Có thể thêm hover effects, click effects ở đây */

/* TODO: Thêm clickable styles */
/* .checklist-item.clickable {
  cursor: pointer;
}
.checklist-item.clickable:hover {
  transform: translateX(4px);
} */
</style>
