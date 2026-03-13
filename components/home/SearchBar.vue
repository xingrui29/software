<template>
  <div class="relative">
    <div class="relative">
      <Icon
        name="heroicons:magnifying-glass"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size="20"
      />
      <input
        :value="modelValue"
        type="text"
        placeholder="搜索应用名称、功能或描述..."
        class="w-full pl-12 pr-10 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 placeholder-gray-400"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <button
        v-if="modelValue"
        class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        @click="$emit('update:modelValue', '')"
      >
        <Icon name="heroicons:x-mark" size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>