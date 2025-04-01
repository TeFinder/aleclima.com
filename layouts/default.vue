<script setup lang="ts">
const route = useRoute()

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
      <div class="flex">
        <h1 class="text-2xl font-bold dark:text-green-500 text-green-300">@Alec</h1>
      </div>
      <header class="border-zinc-800">
        <div class="container px-4">
          <nav class="py-6">
            <ul class="flex items-center gap-8 font-semibold">
              <li>
                <NuxtLink to="/" class="text-lg hover:text-emerald-400 transition-colors duration-200"
                  :class="{ 'text-emerald-400': route.path === '/' }">
                  Inicio
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/artigos" class="text-lg hover:text-emerald-400 transition-colors duration-200"
                  :class="{ 'text-emerald-400': route.path === '/artigos' }">
                  Artigos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/projetos" class="text-lg hover:text-emerald-400 transition-colors duration-200"
                  :class="{ 'text-emerald-400': route.path === '/projetos' }">
                  Projetos
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
