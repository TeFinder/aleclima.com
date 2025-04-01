<script lang="ts" setup>
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-[#FAFAFA] dark:text-primary dark:bg-[#181D27]">
    <div class="border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40 container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <NuxtLink href="/">
            Início
          </NuxtLink>
          <NuxtLink href="/projetos">
            Projetos
          </NuxtLink>
          <NuxtLink href="/artigos">
            Artigos
          </NuxtLink>
        </div>
        <p class="text-center text-xs text-zinc-600 dark:text-zinc-400">
          &copy; {{ currentYear }} Alec Lima. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
