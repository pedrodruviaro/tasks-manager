<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import { useServices } from '@/composables/useServices'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const props = defineProps<{
  projectId?: string
}>()

const title = ref('')
const date = ref('')
const isUrgent = ref(false)

const services = useServices()
const tasksStore = useTasksStore()

const handleSubmit = async () => {
  const response = await services.tasks.create({
    dueDate: date.value,
    title: title.value,
    completed: false,
    isUrgent: isUrgent.value,
    projectId: props.projectId || '',
    userId: 'LhXn65LUDFNho6kTRmRHHVoRqdE2',
  })

  if (!response) return

  tasksStore.tasks.unshift(response.task)
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
        <Switch @update:checked="isUrgent = !isUrgent" />
        <Label for="airplane-mode">Urgente</Label>
      </div>
      <Button>Criar</Button>
    </div>
  </form>
</template>
