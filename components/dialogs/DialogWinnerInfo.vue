<template>
  <div v-if="winner" class="space-y-6">
    <div class="flex items-center space-x-4">
      <NuxtImg
          :src="winner.winnerPhoto"
          :alt="winner.winnerName"
          :custom="true"
          class="w-20 h-20 rounded-full object-cover border-2 border-primary"
          v-slot="{ src, isLoaded, imgAttrs }"
      >
        <img
            v-if="isLoaded"
            v-bind="imgAttrs"
            :src="src"
            loading="lazy"
        >
        <Skeleton v-else shape="circle" size="4rem" />
      </NuxtImg>
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ winner.winnerName }}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Winner of – {{ winner.scholarshipTitle }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ formatDate(winner.wonAt) }}
        </p>
      </div>
    </div>

    <p class="text-lg font-semibold text-green-600 dark:text-green-400">
      🎉 Won ${{ winner.amountWon }}
    </p>

    <p class="text-gray-700 italic dark:text-gray-300">
      "{{ winner.testimonialText }}"
    </p>

    <div v-if="winner.testimonialVideo" class="aspect-w-16 aspect-h-9">
      <Skeleton v-if="iframeLoading" width="100%" height="150px" borderRadius="12px" />
      <iframe
          v-show="!iframeLoading"
          :src="winner.testimonialVideo"
          title="Testimonial Video"
          allowfullscreen
          class="w-full h-full rounded-lg"
          @load="onIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from "vue"
import { formatDate } from "@utils/formatDate"

import type { IScholarshipWinnerAttributes } from "@models/scholarshipWinner.js"

import { Skeleton } from "primevue"

const winner = ref<IScholarshipWinnerAttributes | null>(null)
const iframeLoading = ref(true)

const dialogRef = inject<Ref<{ data: IScholarshipWinnerAttributes }>>('dialogRef')

const onIframeLoad = () => {
  iframeLoading.value = false
}

onMounted(() => {
  if (dialogRef?.value?.data) {
    winner.value = dialogRef.value.data
  }
})

onUnmounted(() => {
  winner.value = null
})

</script>
