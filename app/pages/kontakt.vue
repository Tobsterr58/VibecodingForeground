<template>
  <div>
    <TheHeader />

    <section class="relative flex min-h-screen items-stretch overflow-hidden bg-ink">
      <div class="grid w-full md:grid-cols-2">
        <div class="flex flex-col items-center justify-center gap-8 px-6 py-32 text-center md:px-16">
          <div>
            <svg width="110" height="24" viewBox="0 0 110 24" fill="none" class="mx-auto text-white/70">
              <path
                d="M2 12 L15 4 L28 20 L41 4 L54 20 L67 4 L80 20 L93 4 L106 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] text-white sm:text-7xl">
              Kontakt<span class="text-accent">.</span>
            </p>
          </div>

          <p class="max-w-md text-lg text-white/55">
            Pojďme společně rozjet váš nápad. Ozvěte se nám — reagujeme rychle a bez zbytečných
            průtahů.
          </p>

          <div class="flex flex-col items-center gap-3">
            <a
              href="mailto:info@4g.cz"
              class="font-display text-2xl text-white transition hover:text-accent-cyan"
            >
              info@4g.cz
            </a>
            <a href="tel:+420604177709" class="text-lg text-white/60 transition hover:text-white">
              +420 604 177 709
            </a>
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-accent">Sídlo společnosti</p>
            <p class="mt-2 font-display text-xl text-white">FOREGROUND, s.r.o.</p>
            <p class="mt-1 text-white/60">Cejl 37/62, 602 00 Brno — Zábrdovice</p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Cejl+37%2F62%2C+602+00+Brno"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative block min-h-[420px] md:min-h-0"
        >
          <!-- Mapa je zafixovaná (bez interakce) — bod tak zůstává vždy přesně na adrese -->
          <iframe
            title="Mapa — sídlo FOREGROUND, s.r.o., Cejl 37/62, Brno"
            class="pointer-events-none absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.9)_contrast(0.85)]"
            src="https://www.google.com/maps?ll=49.1992001,16.6250040&z=17&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            tabindex="-1"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent md:bg-gradient-to-r md:from-ink/50 md:via-transparent md:to-transparent"
          />

          <!-- Barevný bod přesně nad šedotónovou mapou, mapa je zafixovaná, takže se bod nikdy neroztáhne od adresy -->
          <div class="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <span class="absolute inset-0 -m-3 animate-ping rounded-full bg-accent/40" />
            <span class="absolute inset-0 -m-1.5 rounded-full bg-accent/50 blur-md" />
            <span class="relative block h-4 w-4 rounded-full bg-accent shadow-[0_0_0_4px_rgba(8,8,11,0.55)]" />
          </div>

          <span
            class="pointer-events-none absolute right-5 top-24 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
          >
            Otevřít v Mapách
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  </div>
</template>
