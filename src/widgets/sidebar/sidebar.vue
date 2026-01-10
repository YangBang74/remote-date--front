<script setup lang="ts">
import { Home, BarChart, Settings, Users, MessageCircle } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/ui/sidebar'
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar'

const { state } = useSidebar()

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Friends',
    url: '/friends',
    icon: Users,
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: MessageCircle,
  },
  {
    title: 'Statistics',
    url: '/statistics',
    icon: BarChart,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader class="h-14 border-b flex justify-center">
      <h1 class="font-bold text-xl px-2">
        <Transition name="slide-left" mode="out-in">
          <span v-if="state === 'expanded'" class="whitespace-nowrap">REMOTE DATE</span>
          <span v-else>R</span>
        </Transition>
      </h1>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <Transition name="slide-left" mode="out-in">
            <RouterLink
              v-if="state === 'expanded'"
              to="/profile"
              class="flex items-center gap-3 px-2 py-2 my-2 bg-muted rounded-md">
              <Avatar v-if="state === 'expanded'">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span class="text-sm font-medium whitespace-nowrap">John Doe</span>
            </RouterLink>
            <RouterLink v-else to="/profile" class="flex items-center gap-3 py-2 my-2 rounded-md">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </RouterLink>
          </Transition>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
}
</style>
