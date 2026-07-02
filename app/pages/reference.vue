<script setup lang="ts">
const clients = ['Atex', 'PZK', 'Servis Centrum', 'Microwell', 'Thermoservis']
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

    <section class="px-6 py-20">
      <div class="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
        <div
          v-for="(client, index) in clients"
          :key="client"
          class="flex cursor-default items-center gap-6 py-8 transition hover:bg-white/[0.03]"
        >
          <span class="font-display text-sm text-white/30">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="font-display text-3xl text-white/85 sm:text-4xl">{{ client }}</span>
        </div>
      </div>
    </section>
  </div>
</template>
