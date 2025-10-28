<!-- Footer của trang web -->

<script setup>
// Có thể thêm links và social media ở đây nếu cần

</script>

<template>
  <footer class="glass-effect border-t border-dark-border/50 mt-auto">
    <div class="container mx-auto px-6 py-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Copyright -->
        <p class="text-sm text-gray-500">
          © 2025 AIO Analyzer Tool. Built with Vue 3 & Tailwind CSS by 
          <a 
            href="https://github.com/helios-ryuu" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary hover:text-primary-hover transition-colors duration-200"
          >
            @helios-ryuu
          </a>
        </p>
        
        <!-- Footer links -->
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <a 
            href="https://github.com/helios-ryuu/IS207.Q13-seminar" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-primary transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://github.com/helios-ryuu/IS207.Q13-seminar/blob/main/README.md" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-primary transition-colors duration-200"
          >
            Docs
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Component-specific styles nếu cần */
</style>
