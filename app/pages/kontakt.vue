<template>
  <div>
    <TheHeader />

    <!-- Jeden slide s ČB fotkou (placeholder) -->
    <section class="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3a3a3a,transparent_55%),radial-gradient(circle_at_75%_70%,#232323,transparent_50%)] grayscale" />
      <div class="absolute inset-0 bg-ink/70" />

      <div class="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-32 md:grid-cols-2 md:items-end">
        <div>
          <span class="text-xs uppercase tracking-[0.2em] text-white/40">Kontakt</span>
          <h1 class="mt-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
            Pojďme společně<br />rozjet váš nápad.
          </h1>
        </div>

        <div class="flex flex-col gap-4 text-lg text-white/70 md:items-end md:text-right">
          <a href="mailto:info@foreground.cz" class="transition hover:text-white">info@foreground.cz</a>
          <a href="tel:+420000000000" class="transition hover:text-white">+420 000 000 000</a>
          <span class="text-white/40">Praha, Česká republika</span>
        </div>
      </div>

      <span class="absolute bottom-4 right-6 z-10 text-[11px] text-white/25">
        fotka — placeholder, doplní se ČB fotografie
      </span>
    </section>
  </div>
</template>
