import TasksServices from '@/services/tasks/services'

export function useServices() {
  return {
    tasks: TasksServices(),
  }
}
