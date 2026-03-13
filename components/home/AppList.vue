<template>
  <div>
    <!-- Empty state -->
    <div
      v-if="apps.length === 0"
      class="text-center py-16"
    >
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <Icon name="heroicons:magnifying-glass" class="text-gray-400" size="32" />
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">未找到应用</h3>
      <p class="text-gray-500 mb-4">请尝试调整搜索或筛选条件</p>
      <button
        class="btn btn-outline btn-primary"
        @click="clearFilters"
      >
        清除筛选
      </button>
    </div>

    <!-- App grid -->
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AppCard
        v-for="app in apps"
        :key="app.id"
        :app="app"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { App } from '~/types/app'

defineProps<{
  apps: App[]
}>()

const { clearFilters } = useApps()
</script>