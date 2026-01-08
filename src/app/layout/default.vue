<script setup lang="ts">
import { Header, Footer } from '@/widgets'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
