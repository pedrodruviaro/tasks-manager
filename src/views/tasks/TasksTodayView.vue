<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'
import TaskForm from '@/components/Tasks/TaskForm.vue'
import TasksCard from '@/components/Tasks/TasksCard.vue'
import TasksList from '@/components/Tasks/TasksList.vue'
import { useTasksStore } from '@/stores/tasks'
import { onMounted } from 'vue'

const tasksStore = useTasksStore()
onMounted(async () => await tasksStore.getTasks('today'))
</script>

<template>
  <MainContent :loading="tasksStore.loading" title="Hoje">
    <TaskForm />

    <TasksList>
      <TasksCard
        v-for="task in tasksStore.tasks"
        :key="task.id"
        :task="task"
        @remove="id => tasksStore.removeTask(id)"
        @complete="id => tasksStore.completeTask(id)"
      />
    </TasksList>
  </MainContent>
</template>
