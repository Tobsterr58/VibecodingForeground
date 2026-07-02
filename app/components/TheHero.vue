<script setup lang="ts">
const count = ref(999)

onMounted(() => {
  const start = 999
  const end = 7
  const duration = 3800
  const startTime = performance.now()

  function tick(now: number) {
    const t = Math.min(1, (now - startTime) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    count.value = Math.round(start + (end - start) * eased)
    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      count.value = end
    }
  }

  requestAnimationFrame(tick)
})
</script>

<template>
  <section
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-b-[3rem] bg-[#0b0b0e] px-6 text-center md:rounded-b-[4rem]"
  >
    <div class="mx-auto flex max-w-4xl flex-col items-center">
      <h1 class="font-display text-6xl font-bold leading-[0.98] tracking-tight text-white sm:text-7xl md:text-8xl">
        Váš projekt<br />
        zrealizujeme za<br />
        <span class="tabular-nums text-accent drop-shadow-[0_0_50px_rgba(124,108,255,0.55)]">{{ count }}</span> dní
      </h1>

      <div class="mt-14 grid max-w-2xl gap-8 text-center text-sm leading-relaxed text-white/50 sm:grid-cols-2">
        <p>
          Klasické agentury potřebují <strong class="text-white">měsíce analýz</strong>, než vůbec začnou stavět.
        </p>
        <p>
          Díky <strong class="text-white">AI-native vývoji</strong> dodáváme hotová řešení už za
          <strong class="text-white">týdny</strong>.
        </p>
      </div>
    </div>

    <span
      class="absolute bottom-6 left-8 origin-left -rotate-90 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-white/25"
    >
      foreground.cz
    </span>

    <a
      href="#sjed-dolu"
      class="absolute bottom-10 right-8 hidden animate-bounce-slow flex-col items-center gap-2 text-white/40 md:flex"
    >
      <span class="text-xs uppercase tracking-[0.2em]">Sjeď dolů</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
  </section>

  <RevealParagraph
    id="sjed-dolu"
    text="Radikální snížení nákladů a času: Díky integrovanému AI vývoji dodáváme hotová řešení ne za měsíce, ale za týdny, což otevírá dveře k inovacím i pro firmy s menšími rozpočty."
  />
</template>
