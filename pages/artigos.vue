<script lang="ts" setup>
useSeoMeta({
  title: 'Alec Lima - Artigos',
})

const { data: articles } = await useAsyncData('articles', () => queryCollection('articles')
  .order('created_at', 'DESC')
  .where('published', '=', true)
  .all())
</script>

<template>
  <section>
    <h1 class="font-semibold text-4xl text-[#323232] font-sans bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
      Escrevendo sobre programação e coisas legais.
    </h1>
    <p class="text-xl text-[#708090]">
      Todos os meus pensamentos sobre programação e muito mais, reunidos aqui.
    </p>
  </section>
  <div class="mt-8 grid-cols-2 grid gap-4 border-l-4 xl:grid-cols-2 lg:grid-cols-2">
    <div v-for="article in articles" :key="article.id">
      <section class="flex items-center flex-wrap p-8">
        <div class="p-8">
          <p class="text-[#708090]">
            {{ article.created_at }}
          </p>
        </div>
        <div class="flex flex-col hover:bg-slate-100/10 w-full p-4 h-full cursor-pointer gap-10">
          <a :href="article.path" class="font-bold">
            {{ article.title }}
          </a>
          <p>{{ article.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>
