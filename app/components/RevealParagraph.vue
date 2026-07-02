<script setup lang="ts">
const props = defineProps<{ text: string }>()

const rawWords = props.text.split(' ')
const words = rawWords.map((word, i) => (i < rawWords.length - 1 ? `${word} ` : word))

// All hidden until mounted — the shuffle runs client-side only (see below),
// so server and client render the same "nothing revealed" state and avoid
// a hydration mismatch.
const thresholds = ref<number[]>(words.map(() => 1))

const wrapper = ref<HTMLElement | null>(null)
const progress = ref(0)

// The wrapper is much taller than the viewport; the inner panel is sticky,
// so it stays pinned on screen for the whole scroll range while progress
// (and therefore the reveal) advances — only once the wrapper's extra
// height is scrolled through does the page continue past it.
function update() {
  if (!wrapper.value) return
  const rect = wrapper.value.getBoundingClientRect()
  const scrollable = rect.height - window.innerHeight
  progress.value = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 1
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
  // Evenly spaced reveal points assigned to a shuffled word order: this
  // keeps the reveal order random while guaranteeing a smooth, consistent
  // pace — plain per-word Math.random() has enough variance with ~30
  // samples that thresholds can clump near 0, revealing most of the text
  // almost instantly.
  const order = words.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  const next = new Array(words.length)
  order.forEach((wordIndex, position) => {
    next[wordIndex] = words.length > 1 ? position / (words.length - 1) : 0
  })
  thresholds.value = next

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
  <div ref="wrapper" class="relative h-[240vh] bg-ink">
    <div class="sticky top-0 flex h-screen items-center justify-center px-6">
      <p class="mx-auto max-w-5xl text-center font-display text-4xl font-bold leading-snug sm:text-5xl md:text-6xl">
        <span
          v-for="(word, i) in words"
          :key="i"
          class="transition-colors duration-500"
          :class="progress >= thresholds[i] ? 'text-white' : 'text-ink'"
          >{{ word }}</span
        >
      </p>
    </div>
  </div>
</template>
