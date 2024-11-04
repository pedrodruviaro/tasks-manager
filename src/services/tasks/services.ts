import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import type { Task } from '@/types/entities'
import type { CreateOptions } from './types'

export default () => ({
  async getAll(userId: string) {
    const db = useFirestore()

    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('completed', '==', false),
      orderBy('dueDate', 'asc'),
    )

    const querySnapshot = await getDocs(q)
    const tasks: Task[] = []

    querySnapshot.forEach(doc => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      } as Task)
    })

    return tasks
  },

  async getCompleted(userId: string) {
    const db = useFirestore()

    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('completed', '==', true),
      orderBy('dueDate', 'desc'),
    )

    const querySnapshot = await getDocs(q)
    const tasks: Task[] = []

    querySnapshot.forEach(doc => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      } as Task)
    })

    return tasks
  },

  async getAllToday(userId: string) {
    const db = useFirestore()

    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    const endOfToday = new Date()
    endOfToday.setHours(23, 59, 59, 999)

    const startTimestamp = Timestamp.fromDate(startOfToday)
    const endTimestamp = Timestamp.fromDate(endOfToday)

    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('completed', '==', false),
      where('dueDate', '>=', startTimestamp),
      where('dueDate', '<=', endTimestamp),
    )

    const querySnapshot = await getDocs(q)
    const tasks: Task[] = []

    querySnapshot.forEach(doc => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      } as Task)
    })

    return tasks
  },

  async getAllByProject() {},

  async removeOne(taskId: string) {
    const db = useFirestore()

    await deleteDoc(doc(db, 'tasks', taskId))

    return { taskId }
  },

  async completeOne(taskId: string) {
    const db = useFirestore()

    const docRef = doc(db, 'tasks', taskId)

    await updateDoc(docRef, {
      completed: true,
    })

    return { taskId }
  },

  async create({
    userId,
    title,
    description,
    completed,
    isUrgent,
    projectId,
    dueDate,
  }: CreateOptions) {
    const db = useFirestore()

    const newTask = {
      userId,
      title,
      description: description || '',
      completed,
      isUrgent: isUrgent || false,
      projectId: projectId || '',
      dueDate: Timestamp.fromDate(new Date(dueDate + 'T00:00:00')),
      createdAt: Timestamp.now(),
    }

    const docRef = await addDoc(collection(db, 'tasks'), newTask)

    return { task: { ...newTask, id: docRef.id } as Task }
  },
})
