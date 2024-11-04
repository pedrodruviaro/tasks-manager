<script setup lang="ts">
import MainContent from '@/components/Tasks/MainContent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <MainContent :loading="false" :title="`Projeto ${route.params.id}`">
  </MainContent>
</template>
