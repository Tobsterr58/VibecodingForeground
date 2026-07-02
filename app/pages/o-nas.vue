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
  { name: 'Robert', role: 'Pozice — doplní se', contact: 'e-mail — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se', contact: 'e-mail — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se', contact: 'e-mail — doplní se' },
  { name: 'Člen týmu', role: 'Pozice — doplní se', contact: 'e-mail — doplní se' }
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

const sections = [
  { id: 'uvod', label: 'Úvod' },
  { id: 'od-2014', label: 'Od 2014' },
  { id: 'sluzby', label: 'Služby' },
  { id: 'prace', label: 'Práce' },
  { id: 'tym', label: 'Tým' },
  { id: 'loga', label: 'Loga' }
]

const activeIndex = ref(0)
const containerEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function navigateTo(index: number) {
  document.getElementById(sections[index].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = sections.findIndex(s => s.id === entry.target.id)
          if (idx !== -1) activeIndex.value = idx
        }
      })
    },
    { root: containerEl.value, threshold: 0.5 }
  )
  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer!.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div>
    <TheHeader />
    <SectionDots :sections="sections" :active="activeIndex" @navigate="navigateTo" />

    <div ref="containerEl" class="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-ink">
      <!-- Úvod -->
      <section id="uvod" class="flex min-h-screen snap-start items-center px-6 pt-24">
        <RevealSlide class="mx-auto max-w-3xl text-center">
          <span class="text-xs uppercase tracking-[0.2em] text-white/40">O nás</span>
          <h1 class="mt-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
            Jsme malý tým, který staví produkty rychle — s AI zabudovanou do každého kroku vývoje.
          </h1>
          <p class="mt-6 text-lg text-white/55">
            Nejsme klasická agentura s dlouhými analýzami a pomalým vývojem. Spojujeme zkušenost
            se softwarem a AI nástroje tak, aby řešení bylo hotové za týdny, ne měsíce.
          </p>
        </RevealSlide>
      </section>

      <!-- Od roku 2014 -->
      <section id="od-2014" class="flex min-h-screen snap-start items-center px-6">
        <RevealSlide class="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <span
            class="font-display text-7xl font-semibold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)] sm:text-8xl"
          >
            2014
          </span>
          <p class="max-w-xl text-lg text-white/55">
            Od roku 2014 stavíme digitální produkty pro firmy napříč obory — a poslední roky do
            každého projektu integrujeme AI, abychom je dodávali rychleji a levněji.
          </p>
        </RevealSlide>
      </section>

      <!-- Přehled služeb -->
      <section id="sluzby" class="flex min-h-screen snap-start items-center px-6">
        <RevealSlide class="mx-auto max-w-5xl">
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
        </RevealSlide>
      </section>

      <!-- Ukázka prací -->
      <section id="prace" class="flex min-h-screen snap-start items-center px-6">
        <RevealSlide class="mx-auto max-w-5xl">
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
                :class="
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-accent/60 via-ink to-ink'
                    : 'bg-gradient-to-br from-accent-cyan/50 via-ink to-ink'
                "
              />
              <span class="absolute bottom-4 left-5 font-display text-xl text-white">{{ client }}</span>
            </NuxtLink>
          </div>
        </RevealSlide>
      </section>

      <!-- Tým -->
      <section id="tym" class="flex min-h-screen snap-start items-center px-6 py-24 md:px-16">
        <RevealSlide class="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
          <div>
            <svg width="110" height="24" viewBox="0 0 110 24" fill="none" class="text-white/70">
              <path
                d="M2 12 L15 4 L28 20 L41 4 L54 20 L67 4 L80 20 L93 4 L106 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mt-6 font-display text-7xl font-bold uppercase leading-[0.85] text-white sm:text-8xl">
              Tý<br />m<span class="text-accent">.</span>
            </p>
          </div>

          <div>
            <h2 class="font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
              Úzce spolupracujeme s vaším vývojovým týmem<span class="text-accent">.</span>
            </h2>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <div
                v-for="(member, index) in team"
                :key="index"
                class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-lg text-white/70"
                  >
                    {{ initials(member.name) }}
                  </div>
                  <div>
                    <p class="font-display text-lg text-accent-cyan">{{ member.name }}</p>
                    <p class="text-sm text-white/45">{{ member.role }}</p>
                  </div>
                </div>
                <p class="mt-4 text-sm font-medium text-accent-pink">{{ member.contact }}</p>
              </div>
            </div>
          </div>
        </RevealSlide>
      </section>

      <!-- Loga -->
      <section id="loga" class="flex min-h-screen snap-start items-center px-6">
        <RevealSlide class="mx-auto max-w-4xl">
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
        </RevealSlide>
      </section>
    </div>
  </div>
</template>
