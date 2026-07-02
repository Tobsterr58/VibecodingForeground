<script setup lang="ts">
const services = [
  { icon: '🏢', name: 'Interní systémy, CRM', desc: 'Nástroje na míru procesům vaší firmy.' },
  { icon: '📊', name: 'Data a analytika', desc: 'Dashboardy a reporty z vašich dat.' },
  { icon: '🤖', name: 'AI integrace a boti', desc: 'Umělá inteligence napojená na vaše dokumenty.' },
  { icon: '⚙️', name: 'Automatizace', desc: 'Méně manuální práce, méně chyb.' },
  { icon: '✍️', name: 'Marketing a obsah', desc: 'SEO, obsah a nástroje na tvorbu kampaní.' },
  { icon: '🌐', name: 'Rychlé weby', desc: 'Od nápadu k nasazení v řádu týdnů.' }
]

const team = [
  { name: 'Robert', role: 'Pozice — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se' }
]

const clients = ['Atex', 'PZK', 'Servis Centrum', 'Microwell', 'Thermoservis']

function initials(name: string) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>

<template>
  <div>
    <TheHeader />

    <!-- Úvod -->
    <section class="bg-ink px-6 pb-24 pt-40">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-xs uppercase tracking-[0.2em] text-white/40">O nás</span>
        <h1 class="mt-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
          Jsme malý tým, který staví produkty rychle — s AI zabudovanou do každého kroku vývoje.
        </h1>
        <p class="mt-6 text-lg text-white/55">
          Nejsme klasická agentura s dlouhými analýzami a pomalým vývojem. Spojujeme zkušenost
          se softwarem a AI nástroje tak, aby řešení bylo hotové za týdny, ne měsíce.
        </p>
      </div>
    </section>

    <!-- Od roku 2014 -->
    <section class="border-t border-white/10 bg-ink px-6 py-24">
      <div class="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <span class="font-display text-7xl font-semibold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)] sm:text-8xl">
          2014
        </span>
        <p class="max-w-xl text-lg text-white/55">
          Od roku 2014 stavíme digitální produkty pro firmy napříč obory — a poslední roky do
          každého projektu integrujeme AI, abychom je dodávali rychleji a levněji.
        </p>
      </div>
    </section>

    <!-- Přehled služeb -->
    <section class="border-t border-white/10 bg-ink px-6 py-24">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-center font-display text-3xl font-medium text-white sm:text-4xl">
          Čím se zabýváme
        </h2>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="service in services"
            :key="service.name"
            class="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <span class="text-2xl">{{ service.icon }}</span>
            <h3 class="mt-4 font-display text-lg text-white">{{ service.name }}</h3>
            <p class="mt-2 text-sm text-white/50">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ukázka prací -->
    <section class="border-t border-white/10 bg-ink px-6 py-24">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-center font-display text-3xl font-medium text-white sm:text-4xl">
          Ukázka prací
        </h2>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="(client, index) in clients"
            :key="client"
            to="/reference"
            class="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
          >
            <div
              class="absolute inset-0 opacity-40 transition group-hover:opacity-60"
              :class="index % 2 === 0
                ? 'bg-gradient-to-br from-accent/60 via-ink to-ink'
                : 'bg-gradient-to-br from-accent-cyan/50 via-ink to-ink'"
            />
            <span class="absolute bottom-4 left-5 font-display text-xl text-white">{{ client }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Tým -->
    <section class="border-t border-white/10 bg-ink px-6 py-24">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-center font-display text-3xl font-medium text-white sm:text-4xl">
          Tým
        </h2>
        <div class="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div v-for="(member, index) in team" :key="index" class="flex flex-col items-center text-center">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-xl text-white/70"
            >
              {{ initials(member.name) }}
            </div>
            <span class="mt-4 text-white">{{ member.name }}</span>
            <span class="mt-1 text-xs text-white/40">{{ member.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Loga -->
    <section class="border-t border-white/10 bg-ink px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <p class="text-center text-xs uppercase tracking-[0.2em] text-white/40">Spolupracujeme s</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <span
            v-for="client in clients"
            :key="client"
            class="font-display text-lg text-white/30 grayscale transition hover:text-white/60"
          >
            {{ client }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
