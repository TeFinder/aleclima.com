<script lang=ts setup>
import WhatsappIcon from '~/components/icons/whatsapp-icon.vue'

useSeoMeta({
  title: 'Alec Lima - Orçamento',
})

const arrayValues = [
  { id: 1, title: 'Resposta Rápida', description: 'Respondo em até 2 horas durante o horário comercial' },
  { id: 2, title: 'Orçamento Grátis', description: 'Análise completa do seu projeto sem custo algum' },
  { id: 3, title: 'Proposta Detalhada', description: 'Orçamento completo com prazos e especificações técnicas' },
]
</script>

<template>
  <section class="container flex items-center justify-center h-[60vh] flex-col">
    <h1 class="text-4xl font-bold text-gray-800 mb-8 font-sans bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
      Solicite um orçamento personalizado
    </h1>
    <p class="dark:text-primary">
      Entre em contato diretamente pelo WhatsApp para solicitar seu orçamento personalizado. Vou responder rapidamente com uma proposta sob medida para seu projeto.
    </p>
    <button data-slot="button" class="whitespace-nowrap mt-14 font-normal disabled:pointer-events-none cursor-pointer disabled:opacity-50 :pointer-events-none shrink-0  outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-emerald-500/10 ring ring-emerald-500 text-emerald-600 shadow-md transition-[box-shadow] duration-300 hover:shadow-lg hover:shadow-emerald-500/25 focus-visible:ring-emerald-500/50 dark:focus-visible:ring-emerald-500/40 dark:bg-emerald-500/5 dark:text-emerald-400 dark:ring-emerald-500/50 dark:shadow-emerald-500/10 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/10  rounded-md  items-center gap-3 px-8 py-4 text-lg">
      <WhatsappIcon class="flex gap-4" />
    </button>
    <div class="mt-14">
      <p class="dark:text-primary">
        Horário de atendimento: Segunda a Sexta, 9h às 18h
      </p>
    </div>
    <section class="flex gap-4 mt-14">
      <div
        v-for="arrayValue in arrayValues"
        :key="arrayValue.id" class="flex justify-between gap-4 border-2 p-4 flex-col rounded-md border-gray-500/20"
      >
        <p class="font-sans font-bold dark:text-primary">
          {{ arrayValue.title }}
        </p>
        <p> {{ arrayValue.description }}</p>
      </div>
    </section>
  </section>
</template>
