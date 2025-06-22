<template>
  <div class="card">
    <DataTable :value="tableRows">
      <Column
        v-for="column in tableColumns"
        :key="column.field"
        :field="column.field"
        :header="column.header"
      >
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
    </DataTable>
  </div>
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
