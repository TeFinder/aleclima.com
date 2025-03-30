<script setup lang="ts">
const route = useRoute()

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
  <div class="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
    <div class="absolute top-5 right-5">
      <ColorMode />
    </div>
    <header class="border-b border-zinc-800">
      <div class="container mx-auto px-4">
        <!-- Como usar icones -->
        <!-- <Icon name="lucide:user" class="text-emerald-500 size-4" /> -->
        <nav class="py-6">
          <ul class="flex items-center gap-8">
            <li>
              <NuxtLink
                to="/"
                class="text-lg hover:text-emerald-400 transition-colors duration-200"
                :class="{ 'text-emerald-400': route.path === '/' }"
              >
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/artigos"
                class="text-lg hover:text-emerald-400 transition-colors duration-200"
                :class="{ 'text-emerald-400': route.path === '/artigos' }"
              >
                Artigos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projetos"
                class="text-lg hover:text-emerald-400 transition-colors duration-200"
                :class="{ 'text-emerald-400': route.path === '/projetos' }"
              >
                Projetos
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>

  <Footer />
</template>
