<script setup lang="ts">
const route = useRoute()

const mobileMenuOpen = ref(false)

const navigation = [
  { title: 'Início', href: '/' },
  { title: 'Artigos', href: '/artigos' },
  { title: 'Projetos', href: '/projetos' },
  { title: 'Sobre mim', href: '/sobre' },
]
function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-zinc-50 font-poppins dark:bg-[#181D27]">
    <nav aria-label="Top" class="mx-auto max-w-6xl flex items-center justify-between py-6 px-4">
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
          @click="mobileMenuOpen = true"
        >
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-2">
        <NuxtLink
          v-for="item in navigation"
          :key="item.title"
          :to="item.href"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          :class="{ 'bg-accent text-accent-foreground': route.path === item.href }"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </nav>

    <Teleport to="body">
      <div v-if="mobileMenuOpen" class="lg:hidden">
        <div
          class="fixed inset-0 z-40 bg-black bg-opacity-25"
          @click="mobileMenuOpen = false"
        />
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-zinc-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Fechar menu</span>
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-zinc-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.title"
                  :to="item.href"
                  class="w-full text-left inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  :class="{ 'bg-accent text-accent-foreground': route.path === item.href }"
                  @click="closeMobileMenu"
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>
