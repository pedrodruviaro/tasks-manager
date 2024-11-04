<script setup lang="ts">
import AuthSidebarLinks from '@/components/Layout/Auth/AuthSidebarLinks.vue'

const links = [
  {
    title: 'Hoje',
    to: '/tasks/today',
    icon: 'lucide:calendar',
  },
  {
    title: 'Tarefas',
    to: '/tasks/all',
    icon: 'lucide:list',
  },
  {
    title: 'Completadas',
    to: '/tasks/complete',
    icon: 'lucide:check',
  },
]

const accountLinks = [
  {
    title: 'Configurações',
    to: '/',
    icon: 'lucide:settings',
  },
  {
    title: 'Sair',
    icon: 'lucide:log-out',
  },
]
</script>

<template>
  <aside
    class="fixed flex h-full min-h-screen w-16 flex-col gap-2 border-r bg-muted/40 transition-[width] lg:w-52"
  >
    <div
      class="flex h-16 shrink-0 items-center justify-between gap-1 border-b px-2 lg:px-4"
    >
      <span class="font-bold text-lg">Menu</span>
    </div>

    <nav class="relative flex h-full flex-col justify-between gap-2">
      <div>
        <AuthSidebarLinks :links="links" />
      </div>

      <div class="border-y bg-background py-3 text-center">
        <AuthSidebarLinks :links="accountLinks" />
      </div>
    </nav>
  </aside>
</template>
