<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category.id"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2"
      :class="[
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
          : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-gray-100 border border-gray-200/50'
      ]"
      @click="setCategory(category.id)"
    >
      <Icon :name="category.icon" size="18" />
      {{ category.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { allCategories: categories, selectedCategory, setCategory } = useApps()
</script>