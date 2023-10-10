<script setup lang="ts">
const hanko = useHanko()
async function getCurrentUser () {
  return await hanko?.user.getCurrent().catch(() => null)
}
const user = ref(await getCurrentUser())
const loggedIn = ref(!!user.value)
hanko?.onUserLoggedOut(() => {
  loggedIn.value = false
})
hanko?.onAuthFlowCompleted(async () => {
  user.value = await getCurrentUser()
  loggedIn.value = true
})
function logout() {
  return hanko?.user.logout()
}

const items = computed(() => [
  [{
    label: user.value?.email,
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }], [{
    slot: 'logout',
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
])
</script>

<template>
  <div>
    <UContainer class="flex flex-row justify-between items-center py-4">
      <img src="https://nuxt.com/assets/design-kit/logo/full-logo-green-light.svg" alt="Nuxt logo" class="h-8 hidden dark:inline-block">
      <img src="https://nuxt.com/assets/design-kit/logo/full-logo-green-dark.svg" alt="Nuxt logo" class="h-8 dark:hidden">
      <div class="flex flex-row gap-4 items-center">
        <!-- <ULink class="text-green-500 font-semibold hover:underline" @click="logout">Logout</ULink> -->
        <ClientOnly>
          <UDropdown v-if="loggedIn" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
            <template #account="{ item }">
              <div class="text-left">
                <p>
                  Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {{ item.label }}
                </p>
              </div>
            </template>
            <template #logout="{ item }">
              <UButton @click="logout">Log out</UButton>
            </template>
            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>
              <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </template>
          </UDropdown>
          <ULink v-else class="text-green-500 font-semibold hover:underline" to="/auth/login">Login</ULink>
        </ClientOnly>
        <!-- <ULink class="text-green-500 font-semibold hover:underline" to="https://hanko.io/">Hanko</ULink>
        <ULink class="text-green-500 font-semibold hover:underline" to="https://nuxt.com/">Nuxt</ULink> -->
        <ColorModeButton />
      </div>
    </UContainer>
  </div>
</template>
