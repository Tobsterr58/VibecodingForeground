<script setup lang="ts">
withDefaults(defineProps<{ standalone?: boolean; showLink?: boolean }>(), {
  standalone: false,
  showLink: true
})

const tags = [
  'Interní systémy, CRM',
  'Data, Analytika a Dashboardy',
  'Automatizace',
  'AI Integrace a Boti',
  'Marketingové, SEO a Tvorba obsahu',
  'Rychlé weby'
]
</script>

<template>
  <section id="sluzby" class="bg-ink px-6 pb-32" :class="standalone ? 'pt-40' : ''">
    <div class="mx-auto max-w-4xl text-center">
      <span class="text-xs uppercase tracking-[0.2em] text-white/40">Služby</span>

      <h2 class="mt-6 font-display text-3xl font-medium leading-snug text-white/90 sm:text-4xl md:text-5xl">
        Navrhujeme
        <span class="text-accent">interní systémy a CRM</span>
        bez zbytečných analýz a nákladů. S
        <span class="text-accent-cyan">nekonečnými možnostmi rozšíření a napojení</span>.
      </h2>

      <div class="mt-14 flex flex-wrap items-center justify-center gap-3">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
        >
          {{ tag }}
        </span>
      </div>

      <NuxtLink
        v-if="showLink"
        to="/sluzby"
        class="mt-12 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
      >
        Zobrazit všechny služby a řešení
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>
