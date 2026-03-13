<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-16 overflow-hidden">
      <!-- Background Blobs -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="blob blob-1" />
        <div class="blob blob-2" />
        <div class="blob blob-3" />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <span class="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              桌面应用下载
            </span>
          </h1>
          <p
            class="text-xl text-gray-600"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          >
            发现并下载 Windows 和 macOS 桌面应用程序
          </p>
        </div>

        <!-- Search Bar -->
        <div
          class="max-w-2xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        >
          <SearchBar v-model="searchQuery" />
        </div>

        <!-- Category Filter -->
        <div
          class="flex justify-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        >
          <CategoryFilter />
        </div>
      </div>
    </section>

    <!-- Featured Apps (when no filters applied) -->
    <section
      v-if="!searchQuery && selectedCategory === 'all'"
      class="py-8"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Icon name="heroicons:star-solid" class="text-yellow-500" />
          精选应用
        </h2>
        <AppList :apps="featuredApps" />
      </div>
    </section>

    <!-- All Apps -->
    <section class="py-8 pb-20">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">
            <span v-if="searchQuery">搜索结果</span>
            <span v-else-if="selectedCategory !== 'all'">{{ getCategoryName(selectedCategory) }}</span>
            <span v-else>全部应用</span>
            <span class="text-gray-400 font-normal text-lg ml-2">({{ filteredApps.length }})</span>
          </h2>
        </div>

        <AppList :apps="filteredApps" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { filteredApps, featuredApps, selectedCategory, searchQuery, getCategoryName } = useApps()

useSeoMeta({
  title: '桌面应用下载',
  description: '下载 Windows 和 macOS 桌面应用程序。浏览我们的效率工具、开发工具、设计工具和系统工具。',
  ogTitle: '桌面应用下载',
  ogDescription: '下载 Windows 和 macOS 桌面应用程序。',
  twitterTitle: '桌面应用下载',
  twitterDescription: '下载 Windows 和 macOS 桌面应用程序。'
})
</script>

<style scoped>
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: blob 7s infinite;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -10%;
  left: -5%;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #ec4899, #f472b6);
  top: 20%;
  right: -5%;
  animation-delay: 2s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
  bottom: -10%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 10px) scale(1.05);
  }
}
</style>