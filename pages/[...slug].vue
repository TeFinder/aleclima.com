<script lang="ts" setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('articles').path(route.path).first()
})

useSeoMeta({
  title: `${`${article.value?.title} -`} Alec Lima`,
  ogTitle: `${`${article.value?.title} -`} Alec Lima`,
  description: article.value?.description,
  ogDescription: article.value?.description,
  twitterTitle: `${`${article.value?.title} -`} Alec Lima`,
  twitterDescription: article.value?.description,
})
</script>

<template>
  <Prose>
    <ContentRenderer v-if="article" :value="article" />
  </Prose>
</template>
