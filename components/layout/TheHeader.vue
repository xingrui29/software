<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo & Brand -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group"
        >
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <Icon
              name="heroicons:cube-solid"
              class="text-white text-xl"
            />
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ config.siteName }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useAppConfig()
</script>