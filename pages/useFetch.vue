<template>
  <div>
    {{ data2 }}
  </div>
</template>
<script setup>
const data2 = await useFetch("https://api.nuxtjs.dev/mountains");
</script>
