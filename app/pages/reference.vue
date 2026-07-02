<script setup lang="ts">
const clients = [
  {
    image: 'https://images.unsplash.com/photo-1593419528756-3cdfa1615b86?w=1600&q=80&fit=crop&auto=format',
    label: 'Športové oblečenie',
    title: 'Atex',
    subtitle: 'Web a e-shop pro sportovní značku',
    description: 'Športové oblečenie a doplnky s dôrazom na kvalitu a dizajn pre aktívny životný štýl.',
    link: 'atexsport.cz'
  },
  {
    image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&q=80&fit=crop&auto=format',
    label: 'Priemyselná výroba',
    title: 'PZK',
    subtitle: 'Prezentace pro strategického dodavatele',
    description: 'Dodávky špičkových materiálov a technické riešenia pre veľké korporácie a nadnárodné spoločnosti, s vlastnou výrobnou halou a materiálovou skúšobňou.',
    link: 'pzk.cz'
  },
  {
    image: 'https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?w=1600&q=80&fit=crop&auto=format',
    label: 'Sieťotlač a potlač',
    title: 'Servis Centrum',
    subtitle: 'Web pro tiskové studio',
    description: 'Sieťotlač, digitálna a tampónová potlač pre firmy aj jednotlivcov v Brne a okolí.',
    link: 'sc-brno.cz'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=1600&q=80&fit=crop&auto=format',
    label: 'Klimatizácia a bazénová technika',
    title: 'Microwell',
    subtitle: 'Web pro distributora klimatizační techniky',
    description: 'Distribúcia klimatizačných systémov, tepelných čerpadiel a bazénovej techniky, vrátane servisu a odborného poradenstva.',
    link: 'microwell.sk'
  },
  {
    image: 'https://images.unsplash.com/photo-1653280668407-50b18ec4ef42?w=1600&q=80&fit=crop&auto=format',
    label: 'Stavebníctvo',
    title: 'Thermoservis',
    subtitle: 'Prezentace stavební společnosti',
    description: 'Stavebná spoločnosť realizujúca pozemné stavby a rekonštrukcie na kľúč.',
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
      Fotografie jsou dočasné ukázkové obrázky (Unsplash) podle oboru klienta — nahradí se reálnými
      screenshoty projektů.
    </p>
  </div>
</template>
