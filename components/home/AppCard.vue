<template>
  <div
    class="group block bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div class="p-6">
      <!-- Header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-4">
          <div
            class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Icon :name="app.icon" class="text-white text-2xl" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold text-gray-800">
                {{ app.name }}
              </h3>
              <span v-if="app.badge"
                class="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-full">
                {{ app.badge }}
              </span>
            </div>
            <p class="text-sm text-gray-500">
              v{{ app.version }} · {{ categoryName }}
            </p>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ app.shortDescription }}
      </p>

      <!-- Features preview -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="feature in app.features" :key="feature"
          class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg">
          {{ feature }}
        </span>
      </div>

      <!-- Download buttons -->
      <div class="pt-4 border-t border-gray-100">
        <div class="flex gap-3 items-start">

          <span class="text-xs text-gray-400 mt-1 shrink-0">
            下载：
          </span>

          <div class="flex flex-wrap gap-2">
            <a v-if="app.downloads.windows" :href="getDownloadUrl(app, 'windows')" class="btn btn-sm btn-primary">
              <Icon name="mdi:microsoft-windows" size="16" />
              Windows
            </a>

            <a v-if="app.downloads.macos?.apple" :href="getDownloadUrl(app, 'macos-apple')"
              class="btn btn-sm btn-secondary">
              <Icon name="mdi:apple" size="16" />
              macOS(Apple)
            </a>

            <a v-if="app.downloads.macos?.intel" :href="getDownloadUrl(app, 'macos-intel')"
              class="btn btn-sm btn-tertiary">
              <Icon name="mdi:apple" size="16" />
              macOS(Intel)
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { App } from '~/types/app'

const props = defineProps<{
  app: App
}>()

const { getCategoryName, getDownloadUrl } = useApps()

const categoryName = computed(() => getCategoryName(props.app.category))
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>