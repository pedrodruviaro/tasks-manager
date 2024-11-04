<script setup lang="ts">
import Skeleton from '../ui/skeleton/Skeleton.vue'

const props = defineProps<{
  loading: boolean
  title: string
}>()
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl lg:text-3xl">{{ props.title }}</h1>

    <div v-if="props.loading" class="grid gap-4">
      <Skeleton class="w-full h-16" />
      <Skeleton class="w-full h-24" />
      <Skeleton class="w-full h-24" />
      <Skeleton class="w-full h-24" />
      <Skeleton class="w-full h-24" />
    </div>

    <slot v-else />
  </div>
</template>
