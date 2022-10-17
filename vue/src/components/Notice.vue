<script setup lang="ts">
import { ref } from "vue";
import { BalInput, BalText } from "@baloise/design-system-components-vue";

const props = defineProps({
  color: {
    type: String,
    required: false,
  },
});

const myName = ref<string | undefined>();

function updateName(value?: string) {
  myName.value = value;
}
</script>

<template>
  <BalInput
    placeholder="Tell us your name"
    :value="myName"
    @balInput="updateName($event)"
  ></BalInput>
  <BalText>My name is {{ myName }}</BalText>
</template>
