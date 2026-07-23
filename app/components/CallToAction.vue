<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    text?: string
    button?: string
  }>(),
  {
    title: 'Pojďme spolupracovat.',
    text: 'Máte nápad nebo projekt, který chcete posunout dál? Ozvěte se nám — nezávazně probereme, co pro vás dokážeme postavit a jak rychle.',
    button: 'Chci spolupracovat'
  }
)

const CONTACT_EMAIL = 'tobias.stec@4g.cz'
const CONTACT_PHONE_DISPLAY = '+420 777 636 100'
const CONTACT_PHONE_TEL = '+420777636100'
</script>

<template>
  <section class="relative overflow-hidden bg-ink px-6 py-32 md:px-16 md:py-40">
    <!-- Neonové matné záře — bez ohraničení, jen barvy, které zničehonic naběhnou -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-1/4 top-4 h-[26rem] w-[26rem] -translate-x-1/2 animate-float rounded-full bg-accent/25 blur-[130px]" />
      <div
        class="absolute right-1/4 top-1/2 h-[24rem] w-[24rem] translate-x-1/2 animate-float rounded-full bg-accent-pink/20 blur-[130px]"
        style="animation-delay: -3s"
      />
      <div
        class="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 animate-float rounded-full bg-accent-cyan/15 blur-[140px]"
        style="animation-delay: -5s"
      />
    </div>

    <!-- Přechody do ztracena — barvy jemně vystoupí z černé a zase do ní zapadnou -->
    <div class="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-ink to-transparent" />
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink to-transparent" />

    <div class="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
      <svg width="130" height="28" viewBox="0 0 110 24" fill="none" class="text-white/70">
        <path
          d="M2 12 L15 4 L28 20 L41 4 L54 20 L67 4 L80 20 L93 4 L106 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h2 class="mt-8 font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl">
        {{ title.replace(/\.$/, '') }}<span class="text-accent">.</span>
      </h2>

      <p class="mt-8 max-w-2xl text-lg text-white/60 sm:text-xl">{{ text }}</p>

      <NuxtLink
        to="/spoluprace"
        class="group mt-12 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 font-display text-base font-medium text-ink transition hover:bg-accent hover:text-white"
      >
        {{ button }}
        <span
          aria-hidden="true"
          class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
        >
          →
        </span>
      </NuxtLink>

      <!-- Přímý kontakt jako sekundární možnost -->
      <div class="mt-10 flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-8">
        <a
          :href="`mailto:${CONTACT_EMAIL}`"
          class="text-white/55 transition hover:text-accent-cyan"
        >
          {{ CONTACT_EMAIL }}
        </a>
        <span class="hidden text-white/20 sm:inline">•</span>
        <a
          :href="`tel:${CONTACT_PHONE_TEL}`"
          class="text-white/55 transition hover:text-accent-cyan"
        >
          {{ CONTACT_PHONE_DISPLAY }}
        </a>
      </div>
    </div>
  </section>
</template>
