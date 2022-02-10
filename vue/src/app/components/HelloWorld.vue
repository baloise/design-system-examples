<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { BalButton } from '@baloise/design-system-components-vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
})

export type onConfirm = (value: string) => void

const emits = defineEmits({
  onConfirm: () => true,
} as {
  onConfirm: onConfirm
})

const title = computed(() => 'Hello ' + props.message)

const onClick = () => emits('onConfirm', props.message)
</script>

<template>
  <h2 class="title is-size-2">{{ title }}</h2>
  <BalButton @click="onClick()">Click Me</BalButton>
</template>
