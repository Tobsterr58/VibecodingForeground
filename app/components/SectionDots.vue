<script setup lang="ts">
defineProps<{
  sections: { id: string; label: string }[]
  active: number
}>()

defineEmits<{ navigate: [index: number] }>()
</script>

<template>
  <div class="fixed right-5 top-1/2 z-[90] flex -translate-y-1/2 flex-col items-center gap-5 md:right-8">
    <button
      v-for="(section, index) in sections"
      :key="section.id"
      type="button"
      class="group relative flex h-5 w-5 items-center justify-center"
      :aria-label="section.label"
      @click="$emit('navigate', index)"
    >
      <span
        class="rounded-full transition-all duration-300"
        :class="
          active === index
            ? 'h-2.5 w-2.5 bg-accent shadow-[0_0_12px_rgba(124,108,255,0.7)]'
            : 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60'
        "
      />
      <span
        v-if="active === index"
        class="absolute inset-0 rounded-full border border-accent/50"
      />
      <span
        class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink/80 px-2.5 py-1 text-[11px] text-white/70 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100"
      >
        {{ section.label }}
      </span>
    </button>
  </div>
</template>
