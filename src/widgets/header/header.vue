<script setup lang="ts">
import { Button } from '@/shared/ui'

const navItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Friends',
    to: '/friends',
  },
  {
    label: 'Groups',
    to: '/groups',
  },
  {
    label: 'Messages',
    to: '/messages',
  },
]
</script>

<template>
  <header class="bg-linear-to-r from-primary/10 shadow-sm to-secondary sticky">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <h1 class="font-bold text-xl">REMOTE DATE</h1>
      <nav class="flex gap-4">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="flex items-center flex-end">
        <Button>Login</Button>
      </div>
    </div>
  </header>
</template>
