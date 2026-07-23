<script setup lang="ts">
// Jemné podsvícení řízené kurzorem. Barva se řídí aktivní sekcí (prop `color`)
// a při přechodu mezi sekcemi plynule přechází. Pozice se aktualizuje přes
// transform (levné), barva má vlastní CSS transition.
withDefaults(defineProps<{ color?: string }>(), {
  color: 'rgba(124,108,255,0.12)'
})

const SIZE = 640
const HALF = SIZE / 2

const tx = ref(-9999)
const ty = ref(-9999)
const x = ref(-9999)
const y = ref(-9999)
let raf = 0

function onMove(e: MouseEvent) {
  tx.value = e.clientX
  ty.value = e.clientY
}

function loop() {
  x.value += (tx.value - x.value) * 0.12
  y.value += (ty.value - y.value) * 0.12
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    class="pointer-events-none fixed left-0 top-0 z-[40] hidden rounded-full md:block"
    :style="{
      width: `${SIZE}px`,
      height: `${SIZE}px`,
      transform: `translate3d(${x - HALF}px, ${y - HALF}px, 0)`,
      background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
      transition: 'background 0.7s ease',
      mixBlendMode: 'screen'
    }"
  />
</template>
