<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryCollection('articles')
  .order('created_at', 'DESC')
  .where('published', '=', true)
  .all())
</script>

<template>
  <div v-for="article in articles" :key="article.id">
    <a :href="article.path">
      {{ article.title }}
    </a>
  </div>
</template>
