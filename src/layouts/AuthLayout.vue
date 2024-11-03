<script setup lang="ts"></script>

<template>
  <div>
    <header class="border"><p class="text-red-400 font-bold">header</p></header>
    <div class="grid grid-cols-[1fr_4fr]">
      <aside class="border">
        <div class="grid gap-2 text-red-400 font-bold">
          <RouterLink to="/tasks/all">Tarefas</RouterLink>
          <RouterLink to="/tasks/complete">Completadas</RouterLink>
          <RouterLink to="/tasks/today">Hoje</RouterLink>
          <div>---------</div>
          <p>Projetos</p>
          <RouterLink to="/tasks/projects/1">Projeto 1</RouterLink>
          <RouterLink to="/tasks/projects/2">Projeto 2</RouterLink>
        </div>
      </aside>
      <main class="border">
        <slot />
      </main>
    </div>
    <footer class="border"><p class="text-red-400 font-bold">footer</p></footer>
  </div>
</template>
