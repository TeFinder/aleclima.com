<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
</script>

<template>
  <main class="container mx-auto px-8 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">
      Projetos
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
        <a :href="project.link.href" target="_blank" class="block p-6 h-full">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ project.name }}</h2>
          <p class="text-gray-600 leading-relaxed">{{ project.description }}</p>
        </a>
      </div>
    </div>
  </main>
</template>
