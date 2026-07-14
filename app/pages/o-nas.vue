<script setup lang="ts">
const services = [
  {
    name: 'Interní systémy, CRM',
    desc: 'Nástroje na míru procesům vaší firmy.',
    detail: 'Navrhujeme a stavíme systémy přesně podle toho, jak reálně pracujete — ne naopak.'
  },
  {
    name: 'Data a analytika',
    desc: 'Dashboardy a reporty z vašich dat.',
    detail: 'Data z různých zdrojů spojíme do přehledů, díky kterým se rozhoduje rychleji a s jistotou.'
  },
  {
    name: 'AI integrace a boti',
    desc: 'Umělá inteligence napojená na vaše dokumenty.',
    detail: 'Od chatbota po automatizované zpracování dokumentů — AI nasazujeme tam, kde reálně šetří čas.'
  },
  {
    name: 'Automatizace',
    desc: 'Méně manuální práce, méně chyb.',
    detail: 'Propojíme vaše nástroje a procesy tak, aby opakující se úkoly zvládal systém, ne člověk.'
  },
  {
    name: 'Marketing a obsah',
    desc: 'SEO, obsah a nástroje na tvorbu kampaní.',
    detail: 'Kombinujeme datovou analýzu s AI nástroji pro tvorbu obsahu, který skutečně konvertuje.'
  },
  {
    name: 'Rychlé weby',
    desc: 'Od nápadu k nasazení v řádu týdnů.',
    detail: 'Moderní stack a AI ve vývoji nám umožňují dodat kvalitní web v řádu týdnů, ne měsíců.'
  }
]

interface TeamMember {
  name: string
  role: string
  contact: string
  avatar?: string
}

const team: TeamMember[] = [
  { name: 'Dávid Zeman', role: 'Jednatel společnosti', contact: 'david.zeman@4g.cz' },
  { name: 'Soňa Ryšavá', role: 'Projektový manažer', contact: 'sona.rysava@4g.cz' },
  { name: 'Tobiáš Štec', role: 'Solutions Manager & Software developer', contact: 'tobias.stec@4g.cz' },
  {
    name: 'Robert Galovič',
    role: 'Senior Full Stack Developer & Systems Specialist',
    contact: 'robert.galovic@4g.cz',
    avatar: '/team/robert.svg'
  }
]

const clients = [
  'Atex',
  'PZK',
  'Servis Centrum',
  'Microwell',
  'Thermoservis',
  "L'Oréal",
  'Medicom Clinic',
  'TopEstates',
  'Brand Promotion'
]

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
      <section id="sluzby" class="flex min-h-screen snap-start items-center px-6 py-24 md:px-16">
        <RevealSlide class="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
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
              Co<br />umíme<span class="text-accent">.</span>
            </p>
          </div>

          <div>
            <h2 class="mt-4 font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
              Řešení, která reálně posouvají váš byznys<span class="text-accent">.</span>
            </h2>

            <div class="mt-10 border-t border-white/10">
              <div
                v-for="(service, index) in services"
                :key="service.name"
                class="group border-b border-white/10 py-5 transition-[padding] duration-500 ease-out hover:px-2 hover:py-6"
              >
                <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div class="flex items-baseline gap-4">
                    <span class="font-display text-sm text-white/25 transition group-hover:text-accent">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <h3
                      class="origin-left font-display text-lg text-white transition duration-500 ease-out group-hover:scale-110 group-hover:text-accent-cyan"
                    >
                      {{ service.name }}
                    </h3>
                  </div>
                  <p class="text-sm text-white/45 sm:max-w-xs sm:text-right">{{ service.desc }}</p>
                </div>

                <div
                  class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]"
                >
                  <div class="overflow-hidden">
                    <p class="max-w-md pt-3 text-sm text-white/40 sm:ml-9">{{ service.detail }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSlide>
      </section>

      <!-- Tým -->
      <section id="tym" class="flex min-h-screen snap-start items-center px-6 py-24 md:px-16">
        <RevealSlide class="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
          <div class="text-center">
            <svg width="110" height="24" viewBox="0 0 110 24" fill="none" class="mx-auto text-white/70">
              <path
                d="M2 12 L15 4 L28 20 L41 4 L54 20 L67 4 L80 20 L93 4 L106 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mt-6 font-display text-7xl font-bold uppercase leading-[0.85] text-white sm:text-8xl">
              Náš<br />tým<span class="text-accent">.</span>
            </p>
          </div>

          <div>
            <h2 class="mt-4 font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
              Rádi vám představíme lidi, kteří stojí za každým řádkem kódu<span class="text-accent">.</span>
            </h2>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <div
                v-for="(member, index) in team"
                :key="index"
                class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="h-14 w-14 flex-none overflow-hidden rounded-full border border-white/15 bg-white/5"
                  >
                    <img
                      v-if="member.avatar"
                      :src="member.avatar"
                      :alt="member.name"
                      class="h-full w-full object-cover"
                    />
                    <div v-else class="flex h-full w-full items-center justify-center font-display text-lg text-white/70">
                      {{ initials(member.name) }}
                    </div>
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
      <section id="loga" class="flex min-h-screen snap-start items-center overflow-hidden px-6 py-24 md:px-16">
        <RevealSlide class="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
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
              Naši<br />klienti<span class="text-accent">.</span>
            </p>
          </div>

          <div>
            <h2 class="mt-4 font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
              Firmy, kterým jsme pomohli růst<span class="text-accent">.</span>
            </h2>

            <div
              class="mt-10 space-y-4"
              style="mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
            >
              <div class="marquee-row flex w-max items-center gap-4 animate-marquee-left">
                <span
                  v-for="(client, index) in [...clients, ...clients]"
                  :key="`row1-${index}`"
                  class="flex-none rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-display text-lg text-white/70 transition hover:border-white/20"
                >
                  {{ client }}
                </span>
              </div>

              <div class="marquee-row flex w-max items-center gap-4 animate-marquee-right">
                <span
                  v-for="(client, index) in [...[...clients].reverse(), ...[...clients].reverse()]"
                  :key="`row2-${index}`"
                  class="flex-none rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-display text-lg text-white/70 transition hover:border-white/20"
                >
                  {{ client }}
                </span>
              </div>
            </div>
          </div>
        </RevealSlide>
      </section>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-marquee-left {
  animation: marquee-left 38s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 42s linear infinite;
}

.marquee-row:hover {
  animation-play-state: paused;
}
</style>
