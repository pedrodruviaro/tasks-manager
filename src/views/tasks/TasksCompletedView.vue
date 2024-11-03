<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'

/*
onMounted () => calls tasks store with filter
get loading from store
get total from store
get tasks from store 

const tasksStore = useTasksStore()
tasksStore.tasks
tasksStore.tasksCount
tasksStore.getTasks({ state: 'completed' })

*/
</script>

<template>
  <MainContent :loading="false" title="Tarefas completadas">
    <p>form</p>
    <p>lista</p>
  </MainContent>
</template>
