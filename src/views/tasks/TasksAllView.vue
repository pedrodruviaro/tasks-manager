<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'
import TaskForm from '@/components/Tasks/TaskForm.vue'
import TasksCard from '@/components/Tasks/TasksCard.vue'
import TasksList from '@/components/Tasks/TasksList.vue'
import { useTasksStore } from '@/stores/tasks'
import { computed, onMounted } from 'vue'
import type { Task } from '@/types/entities'

type Grouped = {
  [date: string]: Task[]
}

const tasksStore = useTasksStore()
onMounted(async () => await tasksStore.getTasks('all'))

const groupedTasks = computed(() => {
  const grouped: Grouped = {}

  const copied = tasksStore.tasks
  copied.sort((a, b) => a.dueDate.toMillis() - b.dueDate.toMillis())

  tasksStore.tasks.forEach(task => {
    const date = task.dueDate.toDate().toLocaleDateString('pt-BR')

    if (!grouped[date]) grouped[date] = []
    grouped[date].push(task)
  })

  return grouped
})
</script>

<template>
  <MainContent :loading="tasksStore.loading" title="Todas as tarefas">
    <TaskForm />

    <TasksList v-for="(tasks, date) in groupedTasks" :key="date" class="pb-3">
      <h2 class="font-bold">{{ date }}</h2>
      <TasksCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @remove="id => tasksStore.removeTask(id)"
        @complete="id => tasksStore.completeTask(id)"
      />
    </TasksList>
  </MainContent>
</template>
