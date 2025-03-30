<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-black',
  },
  htmlAttrs: {
    lang: 'pt-br',
  },
})

useSeoMeta({
  title: 'Alec Lima - Levando a programação a outro nível',
  description: 'Tudo sobre minhas ideias e projetos',
})
</script>

<template>
  <div class="bg-black text-zinc-50 h-screen">
    <slot />
  </div>
</template>
