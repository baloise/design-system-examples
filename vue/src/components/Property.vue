<script setup lang="ts">
import { ref } from "vue";
import { BalButtonColor } from "@baloise/design-system-components";
import {
  BalButton,
  BalButtonGroup,
} from "@baloise/design-system-components-vue";

const myColor = ref<BalButtonColor>("info");
</script>

<template>
  <BalButtonGroup>
    <!-- Statically set property -->
    <BalButton color="danger">My danger button</BalButton>

    <!-- Properties of type boolean do not need a value. -->
    <BalButton disabled>My disabled button</BalButton>

    <!-- Dynamically set property -->
    <BalButton :color="myColor">My info button</BalButton>
  </BalButtonGroup>
</template>
