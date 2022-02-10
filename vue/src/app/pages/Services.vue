<script setup lang="ts">
import { balSnackbarController, balToastController } from '@baloise/design-system-components'
import { BalCard, BalHeading, BalButton, BalButtonGroup } from '@baloise/design-system-components-vue'

function createToast() {
  balToastController.create({ message: 'I am a nice Toast!' })
}

function createSnackbar() {
  balSnackbarController.create({
    icon: 'github',
    subject: 'Snackbar Title',
    message: 'I am the body of a nice snackbar',
  })
}
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalHeading title level="h4" space="bottom">Services</BalHeading>

    <BalButtonGroup>
      <BalButton @click="createToast()">Create Toast</BalButton>
      <BalButton @click="createSnackbar()">Create Snackbar</BalButton>
    </BalButtonGroup>
  </BalCard>
</template>
