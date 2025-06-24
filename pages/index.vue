<script lang="ts" setup>
useSeoMeta({
  title: 'Alec Lima - Levando a programação a outro nível',
  description: 'Tudo sobre minhas ideias e projetos',
})
const { data: articles } = await useAsyncData('articles', () => queryCollection('articles')
  .order('created_at', 'DESC')
  .where('published', '=', true)
  .all())
</script>

<template>
  <section class="container">
    <div class="h-[80vh] flex flex-col items-start justify-center dark:text-primary">
      <p class="dark:text-primary mb-4 text-1xl font-bold bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
        Oi, meu nome é Alec
      </p>
      <h1 class="text-5xl font-bold bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
        Soluções digitais para tirar suas ideias do papel
      </h1>
      <p class="mt-4">
        Sou programador apaixonado por tecnologia. Se você precisa criar algo do zero, pode contar comigo para transformar desafios em soluções simples, seguras e eficientes.
      </p>
      <Button />
    </div>
    <div class="flex items-start">
      <h1 class="font-extrabold text-4xl text-center mt-14 font-sans bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
        Meus últimos artigos
      </h1>
    </div>
    <!-- <p class="text-center mt-4 text-xl">
      Meu nome é Alec Lima e Sou Programador. Sou o fundador e CEO da TeFinder, onde desenvolvi meios para divulgar vagas de tecnologias e conectar recrutadores e profissionais da tecnologia.
    </p> -->
    <!-- <div class="flex justify-center gap-4 mt-8">
      <Icon name="bi:linkedin" class="size-6" />
      <a href="https://github.com/AlecLimaDev" target="_blank">
        <Icon name="bi:github" class="size-6" />
      </a>
    </div> -->
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
  <Budget class="mt-14" />
</template>
