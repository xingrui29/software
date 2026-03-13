<template>
  <div
    :class="[
      'card transition-all duration-300',
      glass ? 'bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl' : 'bg-base-100 shadow-lg',
      hoverable && 'hover:shadow-2xl hover:-translate-y-1',
      paddingClasses
    ]"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
  >
    <figure v-if="$slots.image" class="px-4 pt-4">
      <slot name="image" />
    </figure>
    <div class="card-body">
      <h2 v-if="title" class="card-title text-xl font-bold">
        {{ title }}
      </h2>
      <slot />
      <div v-if="$slots.actions" class="card-actions justify-end mt-4">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  glass?: boolean
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  glass: false,
  hoverable: true,
  padding: 'md'
})

const paddingClasses = computed(() => ({
  'p-0': props.padding === 'none',
  'p-2': props.padding === 'sm',
  'p-4': props.padding === 'md',
  'p-6': props.padding === 'lg'
}))
</script>