<template>
  <section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6">
    <!-- Placeholder for the future "A.I. efekt" — glowing blobs behind the headline -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-accent/30 blur-[120px]"
      />
      <div
        class="absolute right-1/4 top-2/3 h-96 w-96 animate-float rounded-full bg-accent-cyan/20 blur-[120px]"
        style="animation-delay: -3s"
      />
    </div>

    <div class="relative z-10 flex max-w-4xl flex-col items-center text-center">
      <span
        class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60"
      >
        AI-native vývojové studio
      </span>

      <h1 class="font-display text-6xl font-semibold leading-[1.05] text-white sm:text-7xl md:text-8xl">
        Máte
        <span
          class="animate-gradient-x bg-gradient-to-r from-accent via-accent-pink to-accent-cyan bg-200% bg-clip-text text-transparent"
        >
          nápad?
        </span>
      </h1>

      <p class="mt-8 max-w-xl text-lg text-white/60">
        Proměníme ho v hotové řešení — rychleji, levněji a s AI zabudovanou
        v každém kroku vývoje.
      </p>
    </div>

    <a
      href="#sjed-dolu"
      class="absolute bottom-10 flex animate-bounce-slow flex-col items-center gap-2 text-white/40"
    >
      <span class="text-xs uppercase tracking-[0.2em]">Sjeď dolů</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
  </section>

  <section id="sjed-dolu" class="bg-ink px-6 pb-32 pt-8">
    <p class="mx-auto max-w-3xl text-center text-xl leading-relaxed text-white/80 sm:text-2xl">
      Radikální snížení nákladů a času: Díky integrovanému AI vývoji
      dodáváme hotová řešení ne za měsíce, ale za týdny, což otevírá dveře
      k inovacím i pro firmy s menšími rozpočty.
    </p>
  </section>
</template>
