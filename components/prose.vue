<template>
  <div class="prose-wrapper">
    <div class="prose dark:prose-invert prose-pre:bg-zinc-800 dark:prose-pre:bg-zinc-50/10">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="css">
.prose-wrapper {
  @apply relative;
}
</style>
