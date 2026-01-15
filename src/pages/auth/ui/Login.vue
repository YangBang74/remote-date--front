<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Input,
  Button,
  Label,
} from '@/shared/ui'

const emit = defineEmits<{
  (e: 'register'): void
}>()
</script>
<template>
  <Card class="w-full max-w-md">
    <CardHeader>
      <CardTitle class="text-2xl font-bold">Login</CardTitle>
      <CardDescription>Login to your account to continue</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="flex flex-col items-stretch justify-center gap-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input type="email" placeholder="Email" />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input type="password" variant="password" placeholder="Password" />
          <button type="button" class="text-left hover:text-muted-foreground transition">
            Forgot password?
          </button>
        </div>
        <Button class="w-full">Login</Button>
        <div class="space-y-2">
          <p class="text-center text-sm text-muted-foreground">
            Don't have an account? <button type="button" class="text-foreground hover:text-primary/80 transition" @click="emit('register')">Register</button>
          </p>
        </div>
      </form>
    </CardContent>
  </Card>
</template>
