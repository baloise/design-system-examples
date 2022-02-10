<script setup lang="ts">
import { ref } from 'vue'
import { BalCard, BalHeading } from '@baloise/design-system-components-vue'
import HelloWorld, { onConfirm } from '../components/HelloWorld.vue'

const count = ref(0)

const confirm: onConfirm = (value: string) => {
  console.log('onConfirm', value)
  count.value = count.value + 1
}
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalHeading level="h4" space="none" title>Vue Starter Kit</BalHeading>
    <BalHeading color="info" level="h5" space="bottom" subtitle data-test-id="count-message">
      The button was called {{ count }} times!
    </BalHeading>

    <p>Welcome to our Baloise Starter Kit for the Vue Framework.</p>

    <hello-world :message="'Tony Stark'" @onConfirm="confirm($event)"></hello-world>
  </BalCard>
</template>
