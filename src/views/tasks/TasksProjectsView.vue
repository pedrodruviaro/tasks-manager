<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/*
onMounted () => calls tasks store with filter
get loading from store
get total from store
get tasks from store 

const tasksStore = useTasksStore()
tasksStore.tasks
tasksStore.tasksCount
tasksStore.getTasks({ state: 'project', projectId: 1 })
*/
</script>

<template>
  <MainContent :loading="false" :title="`Projeto ${route.params.id}`">
    <p>form</p>
    <p>lista</p>
  </MainContent>
</template>
