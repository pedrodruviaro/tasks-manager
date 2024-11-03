import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  return {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
