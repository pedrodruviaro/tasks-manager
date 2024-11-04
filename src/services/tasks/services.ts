import type { Task } from '@/types/entities'

export default () => ({
  async getAll() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      const t = JSON.parse(tasks) as Task[]

      const filtered = t.filter(task => !task.completed)
      return filtered
    }

    return null
  },

  async getCompleted() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      const t = JSON.parse(tasks) as Task[]
      console.log(t)

      const filtered = t.filter(task => task.completed)

      return filtered
    }

    return null
  },

  async getAllToday() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      const t = JSON.parse(tasks) as Task[]

      const filtered = t.filter(task => !task.completed)
      return filtered
    }

    return null
  },

  async getAllByProject() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      const t = JSON.parse(tasks) as Task[]

      const filtered = t.filter(task => !task.completed)
      return filtered
    }

    return null
  },

  // async removeOne(id: string) {},

  // async completeOne(id: string) {},
})
