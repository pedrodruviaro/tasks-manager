import type { Timestamp } from 'firebase/firestore'

export interface Task {
  id: string
  userId: string
  title: string
  description?: string
  completed: boolean
  isUrgent?: boolean
  projectId?: string
  dueDate: Timestamp
  createdAt: Timestamp
}

export interface Project {
  id: string
  userId: string
  completed: boolean
  title: string
  description?: string
  createdAt: Timestamp
}
