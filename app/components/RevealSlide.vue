<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const visible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = entry.isIntersecting
    },
    { threshold: 0.35 }
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="el"
    class="w-full transition-all duration-700 ease-out"
    :class="visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-[0.96] opacity-0'"
  >
    <slot />
  </div>
</template>
