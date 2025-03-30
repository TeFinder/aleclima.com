<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
</script>

<template>
  <div v-for="project in projects" :key="project.id">
    <a :href="project.link.href" target="_blank">
      {{ project.name }} - {{ project.description }}
    </a>
  </div>
</template>
