<script setup lang="ts">
defineProps<{
  image: string
  label: string
  title: string
  subtitle: string
  description: string
  link: string
}>()
</script>

<template>
  <div class="relative h-full w-full overflow-hidden rounded-2xl bg-ink">
    <img :src="image" :alt="title" class="absolute inset-0 h-full w-full object-cover brightness-90" />

    <!-- Gradient so the bottom info block stays legible -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

    <div class="absolute inset-x-0 bottom-0 p-6 sm:p-10">
      <div class="flex items-center justify-between gap-4 border-b border-white/25 pb-3">
        <span class="text-xs uppercase tracking-[0.15em] text-white/70">{{ label }}</span>
        <span class="text-xs text-white/60">{{ link }}</span>
      </div>
      <h3 class="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{{ title }}</h3>
      <p class="mt-1 text-sm text-white/60">{{ subtitle }}</p>
    </div>
  </div>
</template>
