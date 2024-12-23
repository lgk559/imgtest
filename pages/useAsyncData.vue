<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup>
// const { data } = await useAsyncData("mykey", () => {
//   return $fetch("https://api.nuxtjs.dev/mountains");
// });
const { data } = await useAsyncData("userInfo", () =>
  $fetch("https://api.nuxtjs.dev/mountains")
);
</script>
