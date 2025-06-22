<template>
  <ViewWinners />
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'

import ViewWinners from "@components/views/ViewWinners.vue"

useHead({
  title: 'Scholarship winners',
  meta: [
    { name: 'description', content: 'Scholarship winners list' },
    { name: 'keywords', content: 'scholarship, winners, list' },
  ],
  link: [{ rel: 'canonical', href: 'https://yourwebsite.com/current-page' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://yourwebsite.com",
        "name": "Your Site Name",
      }),
    },
  ],

})

</script>
