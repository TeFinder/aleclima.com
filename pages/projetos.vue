<script lang="ts" setup>
useSeoMeta({
  title: 'Alec Lima - Projetos',
})

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
</script>

<template>
  <main class="container px-8 py-8">
    <h1 class="font-bold text-4xl text-gray-800 mb-8 font-sans bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
      Lugares por onde deixei a minha marca.
    </h1>
    <p class="text-[#323232] font-semibold dark:text-primary/50">
      Ao longo do tempo trabalhei em alguns projetos, aqui está alguns deles:
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects" :key="project.id"
        class="rounded-lg mt-8 hover:bg-black/5 cursor-pointer transition-all duration-200 hover:-translate-y-1"
      >
        <div class="p-6 h-full">
          <img
            class="h-12 rounded-full"
            :src="project.urlImage"
            alt="image-project"
          >
          <h2 class="text-xl font-semibold text-gray-800 mb-2 dark:text-primary">
            {{ project.name }}
          </h2>
          <p class="dark:text-primary leading-relaxed">
            {{ project.description }}
          </p>
          <a :href="project.link.href" target="_blank" class="text-blue-500 flex items-center gap-2 mt-2">
            <Icon name="bi:link" />
            {{ project.link.href }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
