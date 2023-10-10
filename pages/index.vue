<script setup>
const msg = ref('Hello World!')
const color = ref('red')
function toggleColor () {
  if (color.value === 'red') {
    color.value = 'blue'
  } else {
    color.value = 'red'
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="toggleColor">Change color</button>
</template>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
