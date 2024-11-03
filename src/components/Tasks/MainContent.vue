<script setup lang="ts">
const props = defineProps<{
  loading: boolean
  title: string
}>()
</script>

<template>
  <div>
    <h2 class="font-bold">{{ props.title }}</h2>
    <slot />
  </div>
</template>
