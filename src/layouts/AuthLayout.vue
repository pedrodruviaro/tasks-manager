<script setup lang="ts">
import AuthHeader from '@/components/Layout/Auth/AuthHeader.vue'
import AuthSidebar from '@/components/Layout/Auth/AuthSidebar.vue'
</script>

<template>
  <AuthSidebar />
  <div class="ml-16 flex flex-col transition-[margin] lg:ml-52">
    <AuthHeader />

    <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <slot />
    </main>
  </div>
</template>
