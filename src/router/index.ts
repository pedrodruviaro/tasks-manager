import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/tasks',
    },
    {
      path: '/tasks/',
      name: 'tasks',
      component: () => import('@/views/tasks/TasksView.vue'),
      children: [
        {
          path: 'all',
          name: 'tasks-all',
          component: () => import('@/views/tasks/TasksAllView.vue'),
        },
        {
          path: 'complete',
          name: 'tasks-completed',
          component: () => import('@/views/tasks/TasksCompletedView.vue'),
        },
        {
          path: 'today',
          name: 'tasks-today',
          component: () => import('@/views/tasks/TasksTodayView.vue'),
        },
        {
          path: 'projects/:id',
          name: 'tasks-projects',
          component: () => import('@/views/tasks/TasksProjectsView.vue'),
        },
      ],
    },
  ],
})

export default router
