<!-- Phần hero/tiêu đề chính của trang -->

<script setup>
// Có thể thêm props để customize title và subtitle nếu cần

</script>

<template>
  <div class="text-center mb-12 animate-fade-in">
    <!-- Tiêu đề chính -->
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
      Optimize Your Content for AI Search
    </h2>
    
    <!-- Mô tả phụ -->
    <p class="text-gray-400 text-lg max-w-2xl mx-auto">
      Analyze your blog posts and articles to ensure they're optimized for AI-powered search engines like ChatGPT, Perplexity, and Google SGE.
    </p>

    <!-- TODO: Thêm slot cho CTA buttons -->
    <!-- <div class="mt-8">
      <slot name="actions">
        <button class="btn-primary">Get Started</button>
      </slot>
    </div> -->
  </div>
</template>

<style scoped>
/* TODO: Thêm responsive font sizes */
/* @media (max-width: 640px) {
  h2 { font-size: 2rem; }
  p { font-size: 1rem; }
} */
</style>
