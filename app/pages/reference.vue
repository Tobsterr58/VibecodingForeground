<script setup lang="ts">
const clients = [
  {
    image: '/references/atex.jpg',
    label: 'Sportovní oblečení',
    title: 'Atex',
    subtitle: 'Web a e-shop pro sportovní značku',
    description: 'Sportovní oblečení a doplňky s důrazem na kvalitu a design pro aktivní životní styl.',
    link: 'atexsport.cz'
  },
  {
    image: '/references/pzk.jpg',
    label: 'Průmyslová výroba',
    title: 'PZK',
    subtitle: 'Prezentace pro strategického dodavatele',
    description: 'Dodávky špičkových materiálů a technická řešení pro velké korporace a nadnárodní společnosti, s vlastní výrobní halou a materiálovou zkušebnou.',
    link: 'pzk.cz'
  },
  {
    image: '/references/servis-centrum.jpg',
    label: 'Sítotisk a potisk',
    title: 'Servis Centrum',
    subtitle: 'Web pro tiskové studio',
    description: 'Sítotisk, digitální a tamponový potisk pro firmy i jednotlivce v Brně a okolí.',
    link: 'sc-brno.cz'
  },
  {
    image: '/references/microwell.jpg',
    label: 'Klimatizace a bazénová technika',
    title: 'Microwell',
    subtitle: 'Web pro distributora klimatizační techniky',
    description: 'Distribuce klimatizačních systémů, tepelných čerpadel a bazénové techniky, včetně servisu a odborného poradenství.',
    link: 'microwell.sk'
  },
  {
    image: '/references/thermoservis.jpg',
    label: 'Stavebnictví',
    title: 'Thermoservis',
    subtitle: 'Prezentace stavební společnosti',
    description: 'Stavební společnost realizující pozemní stavby a rekonstrukce na klíč.',
    link: 'thermoservis.cz'
  }
]
</script>

<template>
  <div>
    <TheHeader />

    <!-- Banner: placeholder for the future AI-generated vizuál -->
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

      <span class="absolute bottom-4 right-6 text-[11px] text-white/25">
        vizuál banneru — placeholder, doplní se AI generovaná fotka
      </span>
    </section>

    <ReferenceCarousel :clients="clients" />

    <p class="mx-auto max-w-5xl px-6 py-[8vh] text-center text-xs text-white/25">
      Náhledy jsou reálné screenshoty webů klientů. Kliknutím na kartu se otevře skutečná stránka
      projektu.
    </p>
  </div>
</template>
