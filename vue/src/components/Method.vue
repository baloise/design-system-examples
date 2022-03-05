<script setup lang="ts">
import { ref } from "vue";
import {
  ProxyComponent,
  BalSelect,
  BalSelectOption,
  BalButton
} from "@baloise/design-system-components-vue";
import { Components } from "@baloise/design-system-components";

const mySelect = ref<ProxyComponent<Components.BalSelect>>();

function chooseTennis() {
  if (mySelect.value) {
    mySelect.value.$el.select("tennis");
  }
}
</script>

<template>
  <BalSelect ref="mySelect" placeholder="Choose your hobby">
    <BalSelectOption label="Tennis" value="tennis">Tennis</BalSelectOption>
    <BalSelectOption label="Soccer" value="soccer">Soccer</BalSelectOption>
    <BalSelectOption label="Other" value="other">Other</BalSelectOption>
  </BalSelect>
  <BalButton class="mt-4" @click="chooseTennis()">Choose Tennis</BalButton>
</template>
