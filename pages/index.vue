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
    <h1 class="font-extrabold text-4xl text-center mt-14 font-sans text-[#323232]">
      Programador e Publicitário.
    </h1>
    <p class="text-center mt-4 text-xl">
      Eu sou Alec Lima, programador e publicitário. Sou o fundador e CEO da TeFinder, onde desenvolvi meios para
      conectar recrutadores e profissionais da tecnologia.
    </p>
    <div class="flex justify-center gap-4 mt-8"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 16 16">
        <path fill="#f0eaea"
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
        <path fill="currentColor"
          d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8" />
      </svg>
    </div>
    <div v-for="article in articles" :key="article.id">
      <section class="flex items-center p-8">
        <div class="p-8">
          <p class="text-[#708090]">
            {{ article.created_at }}
          </p>
        </div>
        <div class="flex flex-col hover:bg-slate-100 w-full p-4 h-full cursor-pointer gap-10">
          <a :href="article.path" class="font-bold">
            {{ article.title }}
          </a>
          <p>{{ article.description }}</p>
        </div>
      </section>
    </div>
  </section>
</template>
