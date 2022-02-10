<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { BalCard, BalHeading } from '@baloise/design-system-components-vue'
import { AgGridVue } from '@ag-grid-community/vue3'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

const columnDefs = ref<any>(null)
const rowData = ref<any>(null)
const modules = ref([ClientSideRowModelModule])

onBeforeMount(() => {
  columnDefs.value = [{ field: 'make' }, { field: 'model' }, { field: 'price' }]

  rowData.value = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ]
})
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalHeading title level="h4" space="bottom">Table</BalHeading>
    <AgGridVue
      style="width: 100%; height: 300px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="modules"
    ></AgGridVue>
  </BalCard>
</template>
