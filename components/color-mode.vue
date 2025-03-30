<script setup>
import { computed, onMounted, ref } from 'vue'

const colorMode = useColorMode()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const otherTheme = computed(() => {
  return colorMode.value === 'dark' ? 'light' : 'dark'
})

function toggleTheme() {
  colorMode.preference = otherTheme.value
}
</script>

<template>
  <button
    type="button"
    :aria-label="mounted ? `Mudar para tema ${otherTheme}` : 'Alternar tema'"
    class="group rounded-full px-3 py-3 transition"
    @click="toggleTheme"
  >
    <IconsSunIcon
      class="size-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-emerald-50 [@media(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-emerald-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600"
    />
    <IconsMoonIcon
      class="hidden size-5 stroke-emerald-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-emerald-500/30 [@media_not_(prefers-color-scheme:dark)]:stroke-emerald-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-400"
    />
  </button>
</template>
