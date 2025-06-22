<template>
  <DataTable
      :value="tableRows"
      class="flex flex-col justify-center h-full"
      scrollable
      scrollHeight="calc(100vh - 120px)"
  >
    <Column
      v-for="column in tableColumns"
      :key="column.field"
      :field="column.field"
      :header="column.header"
    >
      <template #body>
        <Skeleton height="3rem" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, Column, Skeleton } from "primevue";

interface ITableSkeletonProps {
  rows: number
  tableColumns: {
    field: string
    header: string
  }[]
}

const props = defineProps<ITableSkeletonProps>()

const tableRows = ref(new Array(props.rows))
</script>
