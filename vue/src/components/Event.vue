<script setup lang="ts">
import { ref } from "vue";
import { BalInput, BalText } from "@baloise/design-system-next-components-vue";
import { Events } from "@baloise/design-system-next-components";

const myName = ref<string | undefined>();

function updateName(event: Events.BalInputChange) {
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
