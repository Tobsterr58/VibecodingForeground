<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const cardStyle = ref<Record<string, string | number>>({})

// Cards tilt in 3D from below, straighten out as they cross the viewport
// center, then tilt away and blur out as they exit above — driven purely by
// each card's own position, no scroll-jacking.
function update() {
  if (!el.value) return
  const vh = window.innerHeight
  const rect = el.value.getBoundingClientRect()
  const center = rect.top + rect.height / 2
  const raw = (center - vh / 2) / (vh / 2 + rect.height / 2)
  const progress = Math.min(1, Math.max(-1, raw))

  const rotate = progress * 22
  const scale = 1 - Math.abs(progress) * 0.15
  const blur = Math.abs(progress) * 6
  const opacity = Math.min(1, Math.max(0, 1 - Math.abs(progress) * 1.25))

  cardStyle.value = {
    transform: `perspective(1400px) rotateX(${rotate}deg) scale(${scale})`,
    filter: `blur(${blur}px)`,
    opacity: String(opacity)
  }
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    update()
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  update()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div ref="el" class="h-full w-full will-change-transform" :style="cardStyle">
    <slot />
  </div>
</template>
