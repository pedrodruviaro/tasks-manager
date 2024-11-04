export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  is_urgent?: boolean
  project_id: string
  due_date: Date
  createdAt: Date
}

export interface Project {
  id: string
  completed: boolean
  title: string
  description?: string
  createdAt: Date
}
