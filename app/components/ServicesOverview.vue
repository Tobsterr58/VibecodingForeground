<script setup lang="ts">
const services = [
  { name: 'Rychlé weby, e-shopy a portály', desc: 'Od nápadu k nasazení v řádu týdnů.' },
  { name: 'Interní systémy, CRM a HR', desc: 'Nástroje na míru procesům vaší firmy.' },
  { name: 'Data, analytika a dashboardy', desc: 'Přehledy z vašich dat na jedné obrazovce.' },
  { name: 'Automatizace, AI integrace a boti', desc: 'Umělá inteligence napojená na vaše dokumenty.' },
  { name: 'Marketingové nástroje a obsah', desc: 'Nástroje, které tvoří obsah i sbírají leady.' },
  { name: 'Specifická a niche řešení', desc: 'Aplikace přesně na váš workflow.' }
]
</script>

<template>
  <section class="bg-ink px-6 py-24 md:px-16">
    <div class="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
      <div class="text-center md:text-left">
        <svg width="110" height="24" viewBox="0 0 110 24" fill="none" class="mx-auto text-white/70 md:mx-0">
          <path
            d="M2 12 L15 4 L28 20 L41 4 L54 20 L67 4 L80 20 L93 4 L106 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="mt-6 font-display text-7xl font-bold uppercase leading-[0.85] text-white sm:text-8xl">
          Co<br />nabízíme<span class="text-accent">.</span>
        </p>
      </div>

      <div>
        <h2 class="mt-4 font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
          Řešení, která reálně posouvají váš byznys<span class="text-accent">.</span>
        </h2>

        <div class="mt-10 border-t border-white/10">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.name"
            to="/sluzby"
            class="group flex items-center gap-4 border-b border-white/10 py-5 transition-[padding] duration-500 ease-out hover:px-2 hover:py-6"
          >
            <span class="font-display text-sm text-white/25 transition group-hover:text-accent">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3
                class="origin-left font-display text-lg text-white transition duration-500 ease-out group-hover:translate-x-1 group-hover:text-accent-cyan"
              >
                {{ service.name }}
              </h3>
              <p class="text-sm text-white/45 sm:max-w-xs sm:text-right">{{ service.desc }}</p>
            </div>

            <span
              aria-hidden="true"
              class="flex-none translate-x-0 text-lg text-white/25 transition duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-accent"
            >
              →
            </span>
          </NuxtLink>
        </div>

        <NuxtLink
          to="/sluzby"
          class="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
        >
          Zobrazit všechny služby a řešení
          <span aria-hidden="true" class="inline-block animate-bounce-x">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
