<script setup lang="ts">
import { ref } from 'vue'
import { BalCard, BalHeading, BalButton, balModalController } from '@baloise/design-system-components-vue'
import ConfirmModal from '../components/ConfirmModal.vue'

async function openModal() {
  const modal = await balModalController.create({
    component: ConfirmModal,
    componentProps: {
      firstName: 'Peter',
      lastName: 'Parker',
    },
  })
  return modal.present()
}
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalHeading title level="h4" space="bottom">Modal</BalHeading>

    <BalButton @click="openModal()">Open Modal</BalButton>
  </BalCard>
</template>
