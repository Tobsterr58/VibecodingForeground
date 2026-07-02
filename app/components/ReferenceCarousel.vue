<script setup lang="ts">
interface Client {
  image: string
  label: string
  title: string
  subtitle: string
  description: string
  link: string
}

const props = defineProps<{ clients: Client[] }>()
const n = props.clients.length

// Base box size (the active card's rendered size) — everything else is a
// scaled-down, rotated, receded copy of this same box, so the "mini"
// thumbnails stay proportional instead of using a separate layout.
const baseWVw = 60
const baseHVh = 72
const miniVw = 6
// How far (vw from center) the side cards saturate toward — larger pushes the
// mini thumbnails closer to the page edges.
const spreadVw = 46

const wrapper = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const progress = ref(0)
const isTouch = ref(false)

// Desktop: normal vertical page scroll through a tall wrapper drives progress.
function updateFromScroll() {
  if (!wrapper.value) return
  const vh = window.innerHeight
  const rect = wrapper.value.getBoundingClientRect()
  const scrollable = rect.height - vh
  progress.value = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateFromScroll()
    ticking = false
  })
}

// Mobile: direct one-finger horizontal drag on the carousel itself.
let dragging = false
let dragStartX = 0
let dragStartProgress = 0

function onTouchStart(e: TouchEvent) {
  dragging = true
  dragStartX = e.touches[0].clientX
  dragStartProgress = progress.value
}

function onTouchMove(e: TouchEvent) {
  if (!dragging) return
  const dx = e.touches[0].clientX - dragStartX
  const delta = -(dx / (window.innerWidth * 0.7)) * ((n - 1) / (n - 1))
  progress.value = Math.min(1, Math.max(0, dragStartProgress + delta))
  e.preventDefault()
}

function onTouchEnd() {
  dragging = false
}

onMounted(() => {
  isTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (isTouch.value) {
    stage.value?.addEventListener('touchmove', onTouchMove, { passive: false })
  } else {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateFromScroll()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  stage.value?.removeEventListener('touchmove', onTouchMove)
})

const continuousIndex = computed(() => progress.value * (n - 1))

function metricsFor(index: number) {
  const dist = index - continuousIndex.value
  const absDist = Math.abs(dist)

  // Narrow cosine falloff: only the card nearest the center is large, every
  // other one collapses to a mini square within roughly half an index step.
  const falloffWidth = 0.55
  const t = Math.min(1, absDist / falloffWidth)
  const shape = Math.cos((t * Math.PI) / 2)
  const scale = (miniVw + (baseWVw - miniVw) * shape) / baseWVw

  const rotateY = Math.max(-60, Math.min(60, dist * -50))
  // Gentle depth only — a shallow translateZ keeps the 3D wheel tilt without
  // foreshortening the side cards back toward the center.
  const translateZ = -absDist * 60
  // Saturating spread: a side card slides out quickly to just past the active
  // card's edge, then fans toward the page edge as it gets further away.
  const translateX = spreadVw * Math.tanh(dist / 1.15)
  const opacity = Math.max(0.5, 1 - absDist * 0.22)
  const zIndex = Math.round(10 - absDist)

  return {
    transform: `translate(-50%, -50%) translateX(${translateX}vw) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity: String(opacity),
    zIndex
  }
}
</script>

<template>
  <div ref="wrapper" class="relative bg-ink" :style="{ height: isTouch ? '100vh' : `${n * 90}vh` }">
    <div
      ref="stage"
      class="sticky top-0 h-screen touch-pan-y overflow-hidden"
      style="perspective: 1600px"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        v-for="(client, index) in clients"
        :key="client.title"
        class="absolute left-1/2 top-1/2 will-change-transform"
        :style="{ width: `${baseWVw}vw`, height: `${baseHVh}vh`, ...metricsFor(index) }"
      >
        <ReferenceCard
          :image="client.image"
          :label="client.label"
          :title="client.title"
          :subtitle="client.subtitle"
          :description="client.description"
          :link="client.link"
        />
      </div>

      <span
        v-if="isTouch"
        class="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/30"
      >
        potáhni prstem →
      </span>
    </div>
  </div>
</template>
