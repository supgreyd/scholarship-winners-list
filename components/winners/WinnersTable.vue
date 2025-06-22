<template>
  <DataTable
      :value="winners"
      paginator
      :rows="rowsLimit"
      :rowsPerPageOptions="rowsPerPageOptions"
      :totalRecords="totalItems"
      @page="onPageChange"
      tableStyle="min-width: 50rem"
      :first="paginationOffset"
      :lazy="true"
      scrollable
      scrollHeight="calc(100vh - 180px)"
      class="flex flex-col justify-center h-full"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
      currentPageReportTemplate="{first} - {last} / {totalRecords}"
  >
    <Column
        v-for="column in tableColumns"
        :key="column.field"
        :field="column.field"
        :header="column.header">
      <template v-if="column.header === EWinnersTableHeaders.PHOTO"
                #body="slotProps">
        <img
            :src="slotProps.data.attributes.winnerPhoto"
            :alt="slotProps.data.attributes.winnerName"
            class="w-12 h-12 rounded-full object-cover border-2 border-primary"
            loading="lazy"
        />
      </template>
      <template v-if="column.header === EWinnersTableHeaders.DATE"
                #body="slotProps">
        <p>{{ formatDate(slotProps.data.attributes.wonAt) }}</p>
      </template>
      <template v-if="column.header === EWinnersTableHeaders.PRICE"
                #body="slotProps">
        <p class="text-lg font-semibold text-green-600">
          ${{ slotProps.data.attributes.amountWon }}
        </p>
      </template>
      <template v-if="column.header === EWinnersTableHeaders.ACTIONS"
                #body="slotProps">
        <Button @click="() => onOpenDialog(slotProps.data.attributes)" label="Details" />
      </template>
    </Column>
  </DataTable>
</template>
<script setup lang="ts">

import { formatDate } from "@utils/formatDate";

import type { IScholarshipWinnerResource, IScholarshipWinnerAttributes } from "@models/scholarshipWinner";
import type { DataTablePageEvent } from "primevue";

import { EWinnersTableHeaders } from "@models/scholarshipWinner";

import { DataTable, Column, Button } from "primevue";

interface WinnersTableProps {
  winners: IScholarshipWinnerResource[]
  totalItems: number
  paginationOffset: number
  rowsPerPageOptions: number[]
  rowsLimit: number
  tableColumns: {
    field: string
    header: string
  }[]
}

defineProps<WinnersTableProps>()

const emit = defineEmits<{
  (event: 'pageChange', e: DataTablePageEvent): void
  (event: 'openDialog', data: IScholarshipWinnerAttributes): void
}>()

const onPageChange = (e: DataTablePageEvent) => {
  emit('pageChange', e)
}

const onOpenDialog = (data: IScholarshipWinnerAttributes) => {
  emit('openDialog', data)
}

</script>
