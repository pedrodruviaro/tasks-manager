<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import { v4 as uuidv4 } from 'uuid'
import { ref, watchEffect } from 'vue'
import type { Task } from '@/types/entities'

const props = defineProps<{
  projectId?: string
}>()

const title = ref('')
const date = ref('')
const isUrgent = ref(false)

watchEffect(() => console.log(date.value))

const handleSubmit = () => {
  const newTask: Task = {
    title: title.value,
    due_date: new Date(`${date.value}T00:00:00Z`).toISOString(),
    createdAt: new Date(),
    completed: false,
    id: uuidv4(),
    project_id: props.projectId || '',
    is_urgent: isUrgent.value,
    description: '',
  }

  console.log(newTask)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex gap-2">
      <Input
        v-model="title"
        type="text"
        placeholder="Estudar 1h..."
        class="flex-2"
      />
      <Input v-model="date" type="date" class="flex-1" />
    </div>
    <div class="flex gap-2 justify-between mt-2">
      <div class="flex items-center gap-2">
        <Switch v-model="isUrgent" />
        <Label for="airplane-mode">Urgente</Label>
      </div>
      <Button>Criar</Button>
    </div>
  </form>
</template>
