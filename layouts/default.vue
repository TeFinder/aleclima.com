<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased ',
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
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#181D27] text-zinc-900 dark:text-zinc-50">
    <section class="flex justify-evenly items-center mx-4">
      <Logo />
      <Header />
      <div class="flex">
        <ColorMode />
      </div>
    </section>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
  <Footer />
</template>
