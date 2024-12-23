<template>
  <div>{{ orgsData }}</div>
  <div>{{ reposData }}</div>
</template>
<script setup>
// const { data: orgsData } = await useFetch("https://api.github.com/orgs/nuxt");
// const { data: reposData } = await useFetch("https://api.github.com/orgs/repos");

const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch("https://api.github.com/orgs/nuxt"),
  useFetch("https://api.github.com/orgs/repos"),
]);
</script>
