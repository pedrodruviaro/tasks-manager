<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Button from '@/components/ui/button/Button.vue'
import type { Task } from '@/types/entities'

const props = defineProps<{
  task: Task
  completed?: boolean
}>()

const emits = defineEmits<{
  (e: 'complete', id: string): void
  (e: 'remove', id: string): void
}>()
</script>

<template>
  <Card :class="{ 'bg-muted/80': props.completed }">
    <CardHeader>
      <CardTitle class="text-lg">{{ props.task.title }}</CardTitle>
      <CardDescription v-if="props.task.description">{{
        props.task.description
      }}</CardDescription>
      {{ props.task.completed }}
    </CardHeader>
    <CardContent v-if="!props.completed">
      <div class="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          @click="emits('complete', props.task.id)"
        >
          <iconify-icon icon="lucide:check"></iconify-icon>
        </Button>

        <Button
          variant="destructive"
          size="icon"
          @click="emits('remove', props.task.id)"
        >
          <iconify-icon icon="lucide:trash"></iconify-icon>
        </Button>

        <!-- <Button variant="ghost" size="icon">
          <iconify-icon icon="lucide:flag" style="color: red"></iconify-icon>
        </Button> -->
      </div>
    </CardContent>
  </Card>
</template>
