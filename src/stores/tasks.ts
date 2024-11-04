import { acceptHMRUpdate, defineStore } from 'pinia'
import { useServices } from '@/composables/useServices'
import { ref } from 'vue'
import type { Task } from '@/types/entities'

export type GetTasksOptions = 'all' | 'completed' | 'today'

export const useTasksStore = defineStore('tasks', () => {
  const services = useServices()

  const loading = ref(false)
  const loadingActions = ref(false)
  const tasks = ref<Task[]>([])

  const getTasks = async (state: GetTasksOptions) => {
    try {
      loading.value = true

      let response

      switch (state) {
        case 'all':
          response = await services.tasks.getAll()
          break
        case 'completed':
          response = await services.tasks.getCompleted()
          break
        case 'today':
          response = await services.tasks.getAllToday()
          break
        default:
          throw new Error('Invalid getter')
      }

      if (!response) return

      tasks.value = response
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const removeTask = async (id: string) => {
    try {
      loadingActions.value = true
      // call services later

      const idx = tasks.value.findIndex(t => t.id === id)
      tasks.value.splice(idx, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks.value))
    } catch (error) {
      console.error(error)
    } finally {
      loadingActions.value = false
    }
  }

  const completeTask = async (id: string) => {
    try {
      loadingActions.value = true

      const task = tasks.value.find(t => t.id === id)
      if (!task) return

      task.completed = true

      // call services

      const idx = tasks.value.findIndex(t => t.id === id)
      tasks.value.splice(idx, 1)
    } catch (error) {
      console.error(error)
    } finally {
      loadingActions.value = false
    }
  }

  return {
    loading,
    tasks,
    getTasks,
    removeTask,
    completeTask,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
