<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryCollection('articles').order('created_at', 'DESC').all())

useSeoMeta({
  title: 'Alec Lima - Levando a programação a outro nível',
  description: 'Tudo sobre minhas ideias e projetos',
})
</script>

<template>
  <h1>OLA ALEC LIMA ESSE É SEU SITE JOVEM</h1>

  <div v-for="article in articles" :key="article.id">
      <a :href="article.path">
        {{ article.title }}
      </a>
  </div>

</template>
