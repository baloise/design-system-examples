<script setup lang="ts">
import { computed, ref } from 'vue'
import { BalCard, BalHeading } from '@baloise/design-system-components-vue'
import { balCapitalize, balClaimNumber, balCurrency } from '@baloise/web-app-pipes-vue'

const title = ref('baloise')
const claimNumber = ref('73001217169')
const amount = ref(1234567.89)

const capitalizedTitle = computed(() => balCapitalize(title.value))
const formatedClaimNumber = computed(() => balClaimNumber(claimNumber.value))
const formatedAmount = computed(() => balCurrency(amount.value))
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalHeading title level="h4" space="bottom">Pipes / Filters</BalHeading>
    <p>
      balCapitalize('baloise') => <b>{{ capitalizedTitle }}</b>
    </p>
    <p>
      balClaimNumber('73001217169') =>
      <b>{{ formatedClaimNumber }}</b>
    </p>
    <p>
      balCurrency(1234567.89) => <b>{{ formatedAmount }}</b>
    </p>
  </BalCard>
</template>
