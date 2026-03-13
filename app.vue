<template>
  <div class="min-h-screen flex flex-col bg-white">
    <TheHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${config.siteName}` : config.siteName
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>