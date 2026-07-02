<script setup lang="ts">
const x = ref(-9999)
const y = ref(-9999)

function onMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-40 hidden md:block"
    :style="{
      background: `radial-gradient(450px circle at ${x}px ${y}px, rgba(124, 108, 255, 0.06), transparent 55%)`,
      mixBlendMode: 'screen'
    }"
  />
</template>
