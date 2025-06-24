<script  setup lang="ts">
const route = useRoute()
</script>

<template>
  <header class="">
    <div class="container px-4">
      <nav class="py-6">
        <ul class="flex items-center gap-8 font-semibold">
          <li>
            <NuxtLink
              to="/" class="text-lg hover:text-emerald-400 transition-colors duration-200"
              :class="{ 'text-emerald-400': route.path === '/' }"
            >
              Inicio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/artigos" class="text-lg hover:text-emerald-400 transition-colors duration-200"
              :class="{ 'text-emerald-400': route.path === '/artigos' }"
            >
              Artigos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projetos" class="text-lg hover:text-emerald-400 transition-colors duration-200"
              :class="{ 'text-emerald-400': route.path === '/projetos' }"
            >
              Projetos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/sobre" class="text-lg hover:text-emerald-400 transition-colors duration-200"
              :class="{ 'text-emerald-400': route.path === '/sobre' }"
            >
              Sobre mim
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
