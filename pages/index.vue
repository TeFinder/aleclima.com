<script lang="ts" setup>
useSeoMeta({
  title: 'Alec Lima - Levando a programação a outro nível',
  description: 'Tudo sobre minhas ideias e projetos',
})
const { data: articles } = await useAsyncData('articles', () => queryCollection('articles')
  .order('created_at', 'DESC')
  .where('published', '=', true)
  .all()
)
</script>

<template>
  <section class="container">
    <h1 class="font-extrabold text-4xl text-center mt-14 font-sans text-[#323232] dark:text-primary">
      Programador e Publicitário.
    </h1>
    <p class="text-center mt-4 text-xl">
      Eu sou Alec Lima, programador e publicitário. Sou o fundador e CEO da TeFinder, onde desenvolvi meios para
      conectar recrutadores e profissionais da tecnologia.
    </p>
    <div class="flex justify-center gap-4 mt-8">
      <Icon name="bi:linkedin" class="size-6" />
      <a href="https://github.com/AlecLimaDev" target="_blank">
        <Icon name="bi:github" class="size-6" />
      </a>
    </div>
    <div v-for="article in articles" :key="article.id">
      <section class="flex items-center p-8">
        <div class="p-8">
          <p class="text-[#708090]">
            {{ article.created_at }}
          </p>
        </div>
        <div class="flex flex-col dark:hover:bg-slate-800 hover:bg-slate-100 w-full p-4 h-full cursor-pointer gap-10">
          <a :href="article.path" class="font-bold">
            {{ article.title }}
          </a>
          <p>{{ article.description }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

