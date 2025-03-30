<script lang="ts" setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('articles').path(route.path).first()
})
</script>

<template>
   <Prose class="bg-black">
    <ContentRenderer v-if="article" :value="article" />
  </Prose>
</template>
