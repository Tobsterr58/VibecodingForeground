<script setup lang="ts">
interface Part {
  text: string
  color?: string
}

interface Slide {
  letter: string
  name: string
  parts: Part[]
  tags: string[]
}

const slides: Slide[] = [
  {
    letter: 'A',
    name: 'Interní systémy, CRM',
    parts: [
      { text: 'Navrhujeme ' },
      { text: 'interní systémy a CRM', color: 'text-accent' },
      { text: ' přesně podle procesů vaší firmy — bez zbytečných analýz a nákladů.' }
    ],
    tags: [
      'Ultra-custom CRM systémy',
      'B2B objednávkové portály',
      'Intranety a znalostní báze',
      'Evidence docházky a dovolených',
      'Řízení skladových zásob',
      'Generování faktur a smluv',
      'Digitální onboarding'
    ]
  },
  {
    letter: 'B',
    name: 'Dáta, Analytika a Dashboardy',
    parts: [
      { text: 'Propojíme vaše ' },
      { text: 'data, analytiku a dashboardy', color: 'text-accent-cyan' },
      { text: ' na jednu obrazovku — od účetnictví po marketing.' }
    ],
    tags: [
      'Zákaznické analytické dashboardy',
      'Web scraping a sledování konkurence',
      'Automatizované e-mailové reporty',
      'Segmentace zákazníků',
      'Výkonnostní leaderboards',
      'Kalkulačky na míru'
    ]
  },
  {
    letter: 'C',
    name: 'Automatizace',
    parts: [
      { text: 'Automatizujeme', color: 'text-accent-pink' },
      { text: ' rutinu, která zdržuje váš tým — od e-mailů po propojení starých systémů.' }
    ],
    tags: [
      'Automatizace e-mailového outreachu',
      'Automatický překlad webů',
      'Personalizované pozdravy a nabídky',
      'Automatizované NPS dotazníky',
      'API integrační mosty',
      'Custom task management'
    ]
  },
  {
    letter: 'D',
    name: 'AI Integrace a Boti',
    parts: [
      { text: 'Nasazujeme ' },
      { text: 'AI integrace a boty', color: 'text-accent' },
      { text: ' natrénované na vašich firemních datech — podpora, která nikdy nespí.' }
    ],
    tags: [
      'AI chatboti na firemních datech',
      'Voiceboti pro telefonické rezervace',
      'AI třídění dotazů z info@'
    ]
  },
  {
    letter: 'E',
    name: 'Marketingové, SEO a Tvorba obsahu',
    parts: [
      { text: 'Tvoříme ' },
      { text: 'marketingové, SEO a obsahové nástroje', color: 'text-accent-cyan' },
      { text: ', které ladí s tone-of-voice vaší značky.' }
    ],
    tags: [
      'Generátory blogů v tone-of-voice',
      'Hromadná úprava produktových fotek',
      'Cross-platform tvorba příspěvků',
      'Generátory lead magnetů'
    ]
  },
  {
    letter: 'F',
    name: 'Rychlé weby',
    parts: [
      { text: 'Dodáváme ' },
      { text: 'rychlé weby a e-shopy', color: 'text-accent-pink' },
      { text: ' od nápadu k nasazení v řádu týdnů, ne měsíců.' }
    ],
    tags: [
      'Rychlé MVP',
      'Klientské a pacientské portály',
      'Automatizované rezervační systémy',
      'Jednoúčelové e-shopy a lieviky',
      'Generátory vstupních stránek',
      'E-learning platformy'
    ]
  }
]

const panels: (HTMLElement | null)[] = []
const panelStyles = ref(
  slides.map(() => ({ transform: 'none', filter: 'none' }))
)

function setPanel(el: unknown, index: number) {
  panels[index] = el as HTMLElement | null
}

// Page-turn effect: as the next panel slides over the pinned one, the pinned
// panel tilts away (rotateX) and dims, like a book page being covered.
function update() {
  const vh = window.innerHeight
  for (let i = 0; i < slides.length - 1; i++) {
    const next = panels[i + 1]
    if (!next) continue
    const progress = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / vh))
    panelStyles.value[i] = {
      transform: `perspective(1400px) translateY(${progress * -36}px) rotateX(${progress * 7}deg) scale(${1 - progress * 0.06})`,
      filter: `brightness(${1 - progress * 0.55})`
    }
  }
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
  <section class="relative bg-ink">
    <div
      v-for="(slide, i) in slides"
      :key="slide.name"
      :ref="el => setPanel(el, i)"
      class="sticky top-0 h-screen"
    >
      <div
        class="flex h-full items-center overflow-hidden rounded-t-[2.5rem] border-t border-white/10 bg-[#0c0c11] px-6 md:px-16"
        :style="{ ...panelStyles[i], transformOrigin: 'center top', willChange: 'transform, filter' }"
      >
        <div class="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1fr_2fr]">
          <div class="flex flex-col gap-6">
            <span class="text-xs uppercase tracking-[0.2em] text-white/40">Naše služby</span>
            <span class="font-display text-7xl font-semibold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)] md:text-8xl">
              {{ slide.letter }}<span class="[-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)]">/</span>
            </span>
            <span class="text-sm tracking-widest text-white/30">
              {{ String(i + 1).padStart(2, '0') }} — {{ String(slides.length).padStart(2, '0') }}
            </span>
          </div>

          <div>
            <h3 class="font-display text-3xl font-medium leading-snug md:text-4xl lg:text-[2.75rem]">
              <span
                v-for="(part, j) in slide.parts"
                :key="j"
                :class="part.color ?? 'text-white/90'"
              >{{ part.text }}</span>
            </h3>

            <div class="mt-10 flex flex-wrap gap-3">
              <span
                v-for="tag in slide.tags"
                :key="tag"
                class="rounded-full border border-white/15 px-4 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
