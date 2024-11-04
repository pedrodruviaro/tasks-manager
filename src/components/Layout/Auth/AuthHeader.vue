<script setup lang="ts">
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
</script>

<template>
  <nav
    class="flex h-16 items-center justify-between gap-2 border-b bg-muted/40 px-6"
  >
    <span class="font-mono font-semibold text-lg">TasksManager</span>

    <Avatar>
      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </nav>
</template>
