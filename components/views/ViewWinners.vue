<template>
  <BaseTableSkeleton
    v-if="pending"
    :rows="rowsLimit"
    :tableColumns="tableColumns"
  />
  <BaseError v-else-if="error" />
  <WinnersTable
    v-else
    :winners="winners"
    :totalItems="Number(totalItems)"
    :paginationOffset="paginationOffset"
    :rowsPerPageOptions="rowsPerPageOptions"
    :rowsLimit="rowsLimit"
    :tableColumns="tableColumns"
    @pageChange="pageHandler"
    @openDialog="dialogHandler"
  />
</template>

<script setup lang="ts">
import { useScholarshipWinners } from "@composables/useScholarshipWinners";
import { useDialog } from 'primevue/usedialog';

import type { DataTablePageEvent } from "primevue";
import type { IScholarshipWinnerAttributes } from "@models/scholarshipWinner";
import { EWinnersTableHeaders } from "@models/scholarshipWinner";

import WinnersTable from "@components//winners/WinnersTable.vue";
import BaseTableSkeleton from "@components//base/BaseTableSkeleton.vue";
import DialogWinnerInfo from "@components//dialogs/DialogWinnerInfo.vue";
import BaseError from "@components//base/BaseError.vue";

const rowsPerPageOptions = [10, 20, 50, 100]
const paginationOffset = ref(0);
const page = ref(1)
const rowsLimit = ref(rowsPerPageOptions[0])
const tableColumns = [
  {
    field: 'id',
    header: EWinnersTableHeaders.ID,
  },
  {
    field: 'attributes.winnerName',
    header: EWinnersTableHeaders.NAME,
  },
  {
    field: 'attributes.winnerPhoto',
    header: EWinnersTableHeaders.PHOTO,
  },
  {
    field: 'attributes.amountWon',
    header: EWinnersTableHeaders.PRICE,
  },
  {
    field: 'attributes.wonAt',
    header: EWinnersTableHeaders.DATE,
  },
  {
    field: 'actions',
    header: EWinnersTableHeaders.ACTIONS,
  },
]

const { winners, pending, error, totalItems } = useScholarshipWinners(page, rowsLimit)
const dialog = useDialog()

const pageHandler = async (event: DataTablePageEvent) => {
  rowsLimit.value = event.rows
  page.value = event.page + 1
  paginationOffset.value = event.first
}

const dialogHandler = (winner: IScholarshipWinnerAttributes) => {
  dialog.open(DialogWinnerInfo, {
    props: {
      header: 'Scholarship winner',
      style: {
        width: '50vw',
      },
      breakpoints:{
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    },
    data: winner
  });
}

</script>
