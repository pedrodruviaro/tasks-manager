<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'
import TasksCard from '@/components/Tasks/TasksCard.vue'
import TasksList from '@/components/Tasks/TasksList.vue'
import { useTasksStore } from '@/stores/tasks'
import { onMounted } from 'vue'

const tasksStore = useTasksStore()
onMounted(async () => await tasksStore.getTasks('completed'))
</script>

<template>
  <MainContent :loading="tasksStore.loading" title="Completadas">
    <TasksList>
      <TasksCard
        v-for="task in tasksStore.tasks"
        :key="task.id"
        :task="task"
        :completed="true"
      />
    </TasksList>
  </MainContent>
</template>
