<script setup lang="ts">
import { ref } from "vue";
import { BalInput, BalText } from "@baloise/design-system-components-vue";

const myName = ref<string | undefined>();

function updateName(event: BalEvents.BalInputChange) {
  myName.value = event.detail;
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
