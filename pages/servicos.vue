<script lang="ts" setup>
useSeoMeta({
  title: 'Alec - Conheça meus serviços',
  description: 'Serviços',
})

const services = [
  { id: 1, name: 'Dashboard', description: 'Visualize indicadores personalizados em tempo real para tomar decisões estratégicas.' },
  { id: 2, name: 'Aplicações', description: 'Desenvolva aplicativos completos com recursos avançados e interfaces intuitivas.' },
  { id: 3, name: 'Integrações', description: 'Conecte APIs e outras ferramentas do seu dia a dia em uma experiência unificada.' },
]
</script>

<template>
  <section class="container flex justify-center flex-col items-center">
    <header class="h-[80vh] w-full flex items-start justify-center flex-col">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
        Transformo Suas Ideias em Sistemas Sob Medida
      </h1>
      <p>Eu posso ajudar você a desenvolver o sistema ideal para seu negócio.</p>
      <Button />
    </header>
    <div class="h-[70vh] w-full flex items-start justify-center flex-col">
      <h2 class="text-4xl font-bold bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
        O que posso desenvolvedor para você
      </h2>
      <p>Soluções tecnológicas personalizadas para otimizar seus processos e impulsionar seu negócio</p>
      <section class="grid grid-cols-2 w-full gap-4">
        <div
          v-for="service in services" :key="service.id"
          class="mt-4 max-h-72  dark:text-primary border-solid border-2 border-black/10 p-4 rounded-md"
        >
          <p class="text-1xl text-black font-bold dark:text-primary">
            {{ service.name }}
          </p>
          <p class="max-w-[100%] text-1xl">
            {{ service.description }}
          </p>
        </div>
      </section>
    </div>
    <Budget />
  </section>
</template>
