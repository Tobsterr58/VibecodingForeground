<script setup lang="ts">
const categories = [
  {
    icon: '🌐',
    name: 'Rychlé weby, e-shopy a portály',
    items: [
      { title: 'Rychlé MVP', desc: 'Rychlé přetavení nápadu do funkční aplikace pro první investory a trh.' },
      { title: 'Klientské a pacientské portály', desc: 'Bezpečné zóny pro zákazníky na správu dokumentů.' },
      { title: 'Automatizované rezervační systémy', desc: 'Kalendáře na míru s platební bránou a notifikacemi.' },
      { title: 'Jednoúčelové e-shopy a lieviky', desc: 'Bleskově nasazené stránky pro prodej konkrétních kampaňových produktů.' },
      { title: 'Generátory vstupních stránek', desc: 'Platformy, kde si klient dynamicky skládá vlastní landing pages.' }
    ]
  },
  {
    icon: '🏢',
    name: 'Interní systémy, CRM a HR',
    items: [
      { title: 'Ultra-custom CRM systémy', desc: 'Lehká databáze zákazníků přizpůsobená přesně procesům firmy.' },
      { title: 'B2B objednávkové portály', desc: 'Privátní prostředí pro velkoobchodní partnery na přímé objednávky.' },
      { title: 'Intranety a znalostní báze', desc: 'Zabezpečené místo pro firemní dokumenty a postupy.' },
      { title: 'Evidence docházky a dovolených', desc: 'Jednoduchá aplikace pro zaměstnance na sledování času.' },
      { title: 'Řízení skladových zásob', desc: 'Sledování zboží s automatickými upozorněními na nízké stavy.' },
      { title: 'Generování faktur a smluv', desc: 'Rychlé vytvoření hotových PDF dokumentů ze základních parametrů.' },
      { title: 'Digitální onboarding', desc: 'Automatizovaný průvodce pro zaškolení nových zaměstnanců.' }
    ]
  },
  {
    icon: '📊',
    name: 'Data, analytika a dashboardy',
    items: [
      { title: 'Zákaznické analytické dashboardy', desc: 'Vizuální propojení dat z účetnictví a marketingu na jednu obrazovku.' },
      { title: 'Nástroje na web scraping', desc: 'Automatický sběr dat a sledování cen konkurence na trhu.' },
      { title: 'Automatizované e-mailové reporty', desc: 'Aplikace, která odesílá managementu týdenní souhrny KPI.' },
      { title: 'Segmentace zákazníků', desc: 'Skripty na inteligentní roztřídění databáze podle chování uživatelů.' },
      { title: 'Sledovače výkonnosti', desc: 'Nástroje na motivaci a měření výkonu obchodního týmu.' },
      { title: 'Kalkulačky na míru', desc: 'ROI nebo úvěrové kalkulačky nasazené na webu pro efektivní sběr leadů.' }
    ]
  },
  {
    icon: '🤖',
    name: 'Automatizace, AI integrace a boti',
    items: [
      { title: 'AI chatboti na firemních datech', desc: 'Podpora 24/7 natrénovaná exkluzivně z interních dokumentů klienta.' },
      { title: 'Automatizace e-mailového outreachu', desc: 'Personalizované oslovování nových klientů generované umělou inteligencí.' },
      { title: 'Třídění dotazů', desc: 'AI aplikace, která přečte maily z info@ a přidělí je správnému oddělení.' },
      { title: 'Voiceboti', desc: 'Hlasoví asistenti schopní přijímat telefonické rezervace a zapisovat je do systému.' },
      { title: 'Automatický překlad webů', desc: 'Skripty na dynamický a kontextově správný překlad e-shopů do jiných jazyků.' }
    ]
  },
  {
    icon: '✍️',
    name: 'Marketingové nástroje a tvorba obsahu',
    items: [
      { title: 'Generátory blogů v tone-of-voice', desc: 'Aplikace na tvorbu SEO článků ladících s identitou značky.' },
      { title: 'Úprava produktových fotek', desc: 'Skripty pro hromadné odstraňování pozadí stovek obrázků najednou.' },
      { title: 'Cross-platform tvorba příspěvků', desc: 'Generování obsahu na FB, Instagram a LinkedIn z jednoho textu.' },
      { title: 'Generátory Lead Magnetů', desc: 'Nástroj na automatické sestavení personalizovaného e-booku z dotazníku.' },
      { title: 'Personalizované pozdravy', desc: 'Systém na odesílání automatických přání a nabídek zákazníkům.' }
    ]
  },
  {
    icon: '🧩',
    name: 'Specifické aplikace a niche řešení',
    items: [
      { title: 'Platformy pro e-learning', desc: 'Řešení pro vzdělávací agentury s vyhodnocováním testů.' },
      { title: 'Systémy na sběr zpětné vazby', desc: 'Automatizované NPS dotazníky posílané po dokončení nákupu.' },
      { title: 'Custom task management', desc: 'Interní „Trello“ vytvořené přesně na specifický workflow agentury.' },
      { title: 'API integrační mosty', desc: 'Skripty zajišťující bezproblémovou komunikaci mezi starými systémy a moderním webem.' }
    ]
  }
]

const activeIndex = ref(0)
const totalCount = categories.reduce((sum, c) => sum + c.items.length, 0)
</script>

<template>
  <section class="bg-ink px-6 pb-32">
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <span class="text-xs uppercase tracking-[0.2em] text-white/40">Katalog</span>
        <h2 class="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
          {{ totalCount }} inovativních řešení
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-white/50">
          Konkrétní ukázky toho, co pro klienty stavíme. Vyberte si kategorii.
        </p>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-3">
        <button
          v-for="(category, index) in categories"
          :key="category.name"
          type="button"
          class="rounded-full border px-5 py-2.5 text-sm transition"
          :class="
            activeIndex === index
              ? 'border-accent bg-accent/10 text-white'
              : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
          "
          @click="activeIndex = index"
        >
          <span class="mr-2">{{ category.icon }}</span>{{ category.name }}
        </button>
      </div>

      <div class="mt-14 grid gap-4 sm:grid-cols-2">
        <div
          v-for="item in categories[activeIndex].items"
          :key="item.title"
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
        >
          <h3 class="font-display text-lg text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/50">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
