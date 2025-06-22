<template>
  <div class="flex flex-col h-screen">
    <BaseHeader />

    <main class="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto w-full">
      <NuxtPage />
    </main>

    <BaseFooter />
    <DynamicDialog />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "./components/base/BaseHeader.vue";
import BaseFooter from "./components/base/BaseFooter.vue";

</script>
