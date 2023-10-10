<script setup lang="ts">
definePageMeta({
  middleware: ['hanko-logged-out']
})
</script>

<template>
  <div>
    <hanko-auth />
  </div>
</template>
