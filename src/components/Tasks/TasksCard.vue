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
import { computed } from 'vue'

const props = defineProps<{
  task: Task
  completed?: boolean
}>()

const emits = defineEmits<{
  (e: 'complete', id: string): void
  (e: 'remove', id: string): void
}>()

const isPastDueDate = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return today > props.task.dueDate.toDate()
})
</script>

<template>
  <Card
    :class="{
      'bg-muted/80': props.completed,
      'border-destructive/90': isPastDueDate && !props.completed,
    }"
  >
    <CardHeader>
      <CardTitle class="text-lg flex items-center gap-2">
        <iconify-icon
          v-if="props.task.isUrgent"
          icon="lucide:flag"
          class="text-destructive/90"
        ></iconify-icon>
        {{ props.task.title }}</CardTitle
      >
      <CardDescription v-if="props.task.description">{{
        props.task.description
      }}</CardDescription>
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
