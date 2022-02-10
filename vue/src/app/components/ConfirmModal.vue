<script setup lang="ts">
import { defineProps } from 'vue'
import {
  balModalController,
  BalButton,
  BalModalBody,
  BalModalHeader,
  BalButtonGroup,
} from '@baloise/design-system-components-vue'

defineProps({
  firstName: { type: String },
  lastName: { type: String },
})

const closeModal = () => balModalController.dismiss()
</script>

<template>
  <BalModalHeader>Modal Title</BalModalHeader>
  <BalModalBody>
    <p>My firstname is "{{ firstName }}" and my lastname is "{{ lastName }}"!</p>
    <BalButtonGroup position="right" class="mt-5">
      <BalButton color="link" @click="closeModal()">Cancel</BalButton>
      <BalButton color="primary" @click="closeModal()">Okay</BalButton>
    </BalButtonGroup>
  </BalModalBody>
</template>
