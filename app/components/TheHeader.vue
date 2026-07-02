<script setup lang="ts">
const links = [
  { label: 'Domů', to: '/' },
  { label: 'Služby', to: '/sluzby' },
  { label: 'Reference', to: '/reference' },
  { label: 'O nás', to: '/o-nas' },
  { label: 'Kontakt', to: '/kontakt' }
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-white/5 bg-ink/50 px-6 py-5 backdrop-blur-xl md:px-12"
  >
    <NuxtLink to="/" class="font-display text-lg font-semibold tracking-tight text-white">
      Foreground
    </NuxtLink>

    <nav class="hidden items-center gap-8 text-sm text-white/70 md:flex">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="transition hover:text-white"
        active-class="text-white"
        exact-active-class="text-white"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <NuxtLink
      to="/kontakt"
      class="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
    >
      Nezávazná konzultace
    </NuxtLink>
  </header>
</template>
