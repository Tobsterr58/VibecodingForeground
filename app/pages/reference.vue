<script setup lang="ts">
const clients = [
  {
    image: '/references/atex.jpg',
    label: 'Sportovní oblečení',
    title: 'Atex',
    subtitle: 'Web a e-shop pro sportovní značku',
    description: 'Sportovní oblečení a doplňky s důrazem na kvalitu a design pro aktivní životní styl.',
    link: 'atexsport.cz',
    tags: ['E-shop', 'Web na míru', 'Produktový katalog']
  },
  {
    image: '/references/pzk.jpg',
    label: 'Průmyslová výroba',
    title: 'PZK',
    subtitle: 'Prezentace pro strategického dodavatele',
    description: 'Dodávky špičkových materiálů a technická řešení pro velké korporace a nadnárodní společnosti, s vlastní výrobní halou a materiálovou zkušebnou.',
    link: 'pzk.cz',
    tags: ['Firemní web', 'B2B prezentace']
  },
  {
    image: '/references/servis-centrum.jpg',
    label: 'Sítotisk a potisk',
    title: 'Servis Centrum',
    subtitle: 'Web pro tiskové studio',
    description: 'Sítotisk, digitální a tamponový potisk pro firmy i jednotlivce v Brně a okolí.',
    link: 'sc-brno.cz',
    tags: ['Web na míru', 'Katalog služeb']
  },
  {
    image: '/references/microwell.jpg',
    label: 'Klimatizace a bazénová technika',
    title: 'Microwell',
    subtitle: 'Web pro distributora klimatizační techniky',
    description: 'Distribuce klimatizačních systémů, tepelných čerpadel a bazénové techniky, včetně servisu a odborného poradenství.',
    link: 'microwell.sk',
    tags: ['Web na míru', 'Produktový portál', 'Vícejazyčnost']
  },
  {
    image: '/references/thermoservis.jpg',
    label: 'Stavebnictví',
    title: 'Thermoservis',
    subtitle: 'Prezentace stavební společnosti',
    description: 'Stavební společnost realizující pozemní stavby a rekonstrukce na klíč.',
    link: 'thermoservis.cz',
    tags: ['Firemní web', 'Prezentace']
  }
]

// Vlastní „view" kurzor — místo ukazovátka se nad náhledem objeví odznak
// „Zobrazit web", který plynule dobíhá za myší. Nad štítky se skryje.
const cursor = reactive({ x: 0, y: 0, tx: 0, ty: 0 })
const overCard = ref(false)
const overText = ref(false)
// Nad textem odznak schováme (aby ho nezakrýval) — text se místo toho zvýrazní.
const showCursor = computed(() => overCard.value && !overText.value)
let raf = 0

function onMove(e: MouseEvent) {
  cursor.tx = e.clientX
  cursor.ty = e.clientY
}

function loop() {
  cursor.x += (cursor.tx - cursor.x) * 0.18
  cursor.y += (cursor.ty - cursor.y) * 0.18
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div>
    <TheHeader />

    <!-- Vlastní kurzor -->
    <div
      class="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      :style="{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }"
    >
      <div
        class="relative flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-300 ease-out"
        :class="showCursor ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
      >
        <!-- Žhnoucí barevné pozadí v naší paletě -->
        <div class="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-br from-accent via-accent-pink to-accent-cyan opacity-70 blur-lg" />
        <!-- Tmavý skleněný podklad -->
        <div
          class="relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-full border border-white/15 bg-ink/75 font-display text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-md"
        >
          <span>Zobrazit<span class="text-accent-cyan">.</span></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-accent-cyan">
            <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Banner -->
    <section class="relative flex h-[70vh] min-h-[420px] items-center justify-center overflow-hidden bg-ink">
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute left-1/3 top-1/4 h-[28rem] w-[28rem] animate-float rounded-full bg-accent/25 blur-[110px]"
        />
        <div
          class="absolute right-1/4 bottom-0 h-80 w-80 animate-float rounded-full bg-accent-pink/20 blur-[110px]"
          style="animation-delay: -2.5s"
        />
        <div
          class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#08080b_75%)]"
        />
      </div>

      <div class="relative z-10 px-6 text-center">
        <span class="text-xs uppercase tracking-[0.2em] text-white/40">Reference</span>
        <h1 class="mt-6 font-display text-4xl font-medium text-white sm:text-5xl md:text-6xl">
          Vybíráme si klienty,<br class="hidden sm:block" />
          se kterými nás baví pracovat.
        </h1>
      </div>
    </section>

    <!-- Náhledy projektů pod sebou, na celou šířku -->
    <section class="bg-ink">
      <div
        v-for="(client, index) in clients"
        :key="client.title"
        class="group relative h-screen min-h-[560px] w-full overflow-hidden md:cursor-none"
        @mouseenter="overCard = true"
        @mouseleave="overCard = false"
      >
        <!-- Screenshot webu -->
        <img
          :src="client.image"
          :alt="`Náhled webu ${client.title}`"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover [filter:grayscale(0.55)] transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:[filter:grayscale(0)]"
        />

        <!-- Ztmavení pro čitelnost textu -->
        <div class="absolute inset-0 bg-ink/25" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-transparent" />

        <!-- Roztažený odkaz na reálný web (primární klik) -->
        <a
          :href="`https://${client.link}`"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute inset-0 z-10 md:cursor-none"
          :aria-label="`Otevřít web ${client.title}`"
        />

        <!-- Obsah vlevo dole -->
        <div class="pointer-events-none relative z-20 flex h-full items-end">
          <div class="w-full px-6 pb-12 md:px-16 md:pb-16">
            <div
              class="pointer-events-auto max-w-xl md:cursor-default"
              @mouseenter="overText = true"
              @mouseleave="overText = false"
            >
              <!-- Rostoucí akcentová linka — reakce na hover -->
              <span class="mb-5 block h-px w-10 bg-white/30 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-accent-cyan" />

              <span class="text-xs uppercase tracking-[0.25em] text-accent-cyan">
                {{ String(index + 1).padStart(2, '0') }} · {{ client.label }}
              </span>

              <h2
                class="mt-4 font-display text-5xl font-bold leading-[0.95] text-white transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:[text-shadow:0_0_35px_rgba(124,108,255,0.55)] sm:text-6xl md:text-7xl"
              >
                {{ client.title }}<span class="text-accent">.</span>
              </h2>

              <p class="mt-3 font-display text-lg text-white/70 transition-colors duration-500 group-hover:text-white">
                {{ client.subtitle }}
              </p>

              <p class="mt-4 max-w-lg text-white/60 transition-colors duration-500 group-hover:text-white/85">
                {{ client.description }}
              </p>

              <!-- Štítky — proklik na /sluzby -->
              <div class="mt-6 flex flex-wrap gap-2">
                <NuxtLink
                  v-for="tag in client.tags"
                  :key="tag"
                  to="/sluzby"
                  class="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs text-white/75 backdrop-blur transition hover:border-accent hover:bg-accent/10 hover:text-white md:cursor-pointer"
                >
                  {{ tag }}
                </NuxtLink>
              </div>

              <span class="mt-5 block text-xs uppercase tracking-[0.2em] text-white/40">
                {{ client.link }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p class="mx-auto max-w-5xl px-6 py-[8vh] text-center text-xs text-white/25">
      Náhledy jsou reálné screenshoty webů klientů. Kliknutím na náhled se otevře skutečná stránka
      projektu.
    </p>

    <CallToAction />
  </div>
</template>
