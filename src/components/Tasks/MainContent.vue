<script setup lang="ts">
import TasksCard from '@/components/Tasks/TasksCard.vue'
import TasksList from '@/components/Tasks/TasksList.vue'

const props = defineProps<{
  loading: boolean
  title: string
}>()
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl lg:text-3xl mb-4">{{ props.title }}</h1>
    <TasksList>
      <TasksCard />
    </TasksList>
  </div>
</template>
