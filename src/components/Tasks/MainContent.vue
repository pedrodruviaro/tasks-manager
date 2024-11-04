<script setup lang="ts">
const props = defineProps<{
  loading: boolean
  title: string
}>()
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl lg:text-3xl">{{ props.title }}</h1>
    <slot />
  </div>
</template>
