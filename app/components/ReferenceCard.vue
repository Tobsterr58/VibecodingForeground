<script setup lang="ts">
const props = defineProps<{
  image: string
  label: string
  title: string
  subtitle: string
  description: string
  link: string
}>()

const targetUrl = computed(() => `https://${props.link}`)
</script>

<template>
  <a
    :href="targetUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink"
  >
    <img
      :src="image"
      :alt="`Náhled webu ${title}`"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover object-top brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-100"
    />

    <!-- Gradient so the bottom info block stays legible -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

    <span
      class="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
    >
      Zobrazit web
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <div class="absolute inset-x-0 bottom-0 p-6 sm:p-10">
      <div class="flex items-center justify-between gap-4 border-b border-white/25 pb-3">
        <span class="text-xs uppercase tracking-[0.15em] text-white/70">{{ label }}</span>
        <span class="text-xs text-white/60">{{ link }}</span>
      </div>
      <h3 class="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{{ title }}</h3>
      <p class="mt-1 text-sm text-white/60">{{ subtitle }}</p>
    </div>
  </a>
</template>
