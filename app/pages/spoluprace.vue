<script setup lang="ts">
useHead({ title: 'Spolupráce — Foreground' })

const CONTACT_EMAIL = 'tobias.stec@4g.cz'
const CONTACT_PHONE_DISPLAY = '+420 777 636 100'
const CONTACT_PHONE_TEL = '+420777636100'

const services = [
  'Rychlé weby, e-shopy a portály',
  'Interní systémy, CRM a HR',
  'Data, analytika a dashboardy',
  'Automatizace, AI integrace a boti',
  'Marketingové nástroje a obsah',
  'Nevím / poradíte mi'
]

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const errors = reactive<Record<string, string>>({})
const submitted = ref(false)

function validate() {
  errors.name = form.name.trim() ? '' : 'Vyplňte prosím jméno.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? '' : 'Zadejte platný e-mail.'
  errors.message = form.message.trim() ? '' : 'Napište prosím pár slov k projektu.'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  if (!validate()) return

  const lines = [
    `Jméno: ${form.name}`,
    form.company ? `Firma: ${form.company}` : null,
    `E-mail: ${form.email}`,
    form.phone ? `Telefon: ${form.phone}` : null,
    form.service ? `Oblast: ${form.service}` : null,
    '',
    form.message
  ].filter(line => line !== null)

  const subject = `Poptávka spolupráce — ${form.name}`
  const body = lines.join('\n')
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  submitted.value = true
  window.location.href = mailto
}
</script>

<template>
  <div>
    <TheHeader />

    <section class="relative min-h-screen overflow-hidden bg-ink px-6 pb-24 pt-32 md:px-16">
      <!-- Ambientní záře ve stylu webu -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/4 top-10 h-96 w-96 animate-float rounded-full bg-accent/20 blur-[130px]" />
        <div
          class="absolute bottom-0 right-1/4 h-80 w-80 animate-float rounded-full bg-accent-cyan/15 blur-[130px]"
          style="animation-delay: -3s"
        />
      </div>

      <div class="relative z-10 mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-start">
        <!-- Levý sloupec: úvod + přímý kontakt -->
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
          <h1 class="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] text-white sm:text-7xl">
            Pojďme<br />spolu<span class="text-accent">.</span>
          </h1>

          <p class="mt-6 max-w-md text-lg text-white/55">
            Vyplňte formulář a ozveme se vám zpět. Nebo nás rovnou kontaktujte — reagujeme rychle
            a bez zbytečných průtahů.
          </p>

          <div class="mt-10 flex flex-col items-center gap-3 md:items-start">
            <a
              :href="`mailto:${CONTACT_EMAIL}`"
              class="font-display text-2xl text-white transition hover:text-accent-cyan"
            >
              {{ CONTACT_EMAIL }}
            </a>
            <a
              :href="`tel:${CONTACT_PHONE_TEL}`"
              class="text-lg text-white/60 transition hover:text-white"
            >
              {{ CONTACT_PHONE_DISPLAY }}
            </a>
          </div>
        </div>

        <!-- Pravý sloupec: formulář -->
        <div class="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <form v-if="!submitted" novalidate class="flex flex-col gap-6" @submit.prevent="submit">
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="flex flex-col gap-2 text-sm">
                <span class="text-white/70">Jméno a příjmení *</span>
                <input
                  v-model="form.name"
                  type="text"
                  class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent/60"
                  placeholder="Jan Novák"
                />
                <span v-if="errors.name" class="text-xs text-accent-pink">{{ errors.name }}</span>
              </label>

              <label class="flex flex-col gap-2 text-sm">
                <span class="text-white/70">Firma</span>
                <input
                  v-model="form.company"
                  type="text"
                  class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent/60"
                  placeholder="Vaše firma s.r.o."
                />
              </label>

              <label class="flex flex-col gap-2 text-sm">
                <span class="text-white/70">E-mail *</span>
                <input
                  v-model="form.email"
                  type="email"
                  class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent/60"
                  placeholder="jan@firma.cz"
                />
                <span v-if="errors.email" class="text-xs text-accent-pink">{{ errors.email }}</span>
              </label>

              <label class="flex flex-col gap-2 text-sm">
                <span class="text-white/70">Telefon</span>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent/60"
                  placeholder="+420 …"
                />
              </label>
            </div>

            <label class="flex flex-col gap-2 text-sm">
              <span class="text-white/70">O jakou oblast máte zájem?</span>
              <select
                v-model="form.service"
                class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-accent/60"
              >
                <option value="" class="bg-ink">Vyberte oblast…</option>
                <option v-for="service in services" :key="service" :value="service" class="bg-ink">
                  {{ service }}
                </option>
              </select>
            </label>

            <label class="flex flex-col gap-2 text-sm">
              <span class="text-white/70">Popište váš projekt *</span>
              <textarea
                v-model="form.message"
                rows="5"
                class="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent/60"
                placeholder="Co byste rádi vytvořili nebo vyřešili?"
              />
              <span v-if="errors.message" class="text-xs text-accent-pink">{{ errors.message }}</span>
            </label>

            <button
              type="submit"
              class="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-display text-base font-medium text-ink transition hover:bg-accent hover:text-white"
            >
              Odeslat poptávku
              <span
                aria-hidden="true"
                class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </button>

            <p class="text-xs text-white/35">
              Odesláním se otevře váš e-mailový klient s předvyplněnou zprávou na
              {{ CONTACT_EMAIL }}.
            </p>
          </form>

          <!-- Stav po odeslání -->
          <div v-else class="flex flex-col items-center gap-6 py-10 text-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-accent-cyan">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h2 class="font-display text-2xl text-white">Díky za zprávu<span class="text-accent">.</span></h2>
            <p class="max-w-sm text-white/55">
              Otevřeli jsme vám e-mailového klienta s předvyplněnou zprávou. Pokud se neotevřel,
              napište nám prosím přímo na
              <a :href="`mailto:${CONTACT_EMAIL}`" class="text-accent-cyan hover:text-white">{{ CONTACT_EMAIL }}</a>.
            </p>
            <NuxtLink
              to="/"
              class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              Zpět na úvod
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
