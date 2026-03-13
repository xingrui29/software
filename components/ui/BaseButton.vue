<template>
  <button
    :class="[
      'btn relative overflow-hidden transition-all duration-300',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
      { 'animate-pulse': loading }
    ]"
    :disabled="disabled || loading"
    v-motion
    :initial="{ scale: 1 }"
    :hovered="{ scale: disabled ? 1 : 1.02 }"
    :tapped="{ scale: disabled ? 1 : 0.98 }"
  >
    <span
      v-if="loading"
      class="loading loading-spinner loading-sm"
    />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false
})

const variantClasses = computed(() => ({
  'btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white':
    props.variant === 'primary',
  'btn-secondary bg-gradient-to-r from-secondary to-pink-400 hover:from-pink-400 hover:to-secondary border-none text-white':
    props.variant === 'secondary',
  'btn-accent bg-gradient-to-r from-accent to-teal-400 hover:from-teal-400 hover:to-accent border-none text-white':
    props.variant === 'accent',
  'btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white':
    props.variant === 'outline',
  'btn-ghost text-primary hover:bg-primary/10':
    props.variant === 'ghost'
}))

const sizeClasses = computed(() => ({
  'btn-sm px-4': props.size === 'sm',
  'btn-md px-6': props.size === 'md',
  'btn-lg px-8': props.size === 'lg'
}))
</script>