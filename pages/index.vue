<script setup>
const store = useHomeStore();
const { $hello } = useNuxtApp();
let selectedDate = ref(new Date());

// const fetchData = async () => {
//   const res = await fetch("/api/hello").then((res) => res.json());
//   console.log(res);
// };

const { data } = await useFetch("https://api.nuxtjs.dev/mountains");
</script>

<template>
  <div>
    <nuxt-link to="/user">user</nuxt-link>
    <nuxt-link to="/useFetch">/ useFetch</nuxt-link>
    <nuxt-link to="/useAsyncData">/ useAsyncData</nuxt-link>
    <nuxt-link to="/a-lot-of-fetch">/ a-lot-of-fetch</nuxt-link>
    <!-- home<br />
    {{ store.count }}
    <button @click="store.add">click</button>
    <ClientOnly>
      {{ $hello("janny!!") }}
    </ClientOnly>
    <VDatePicker v-model="selectedDate" />
    <p v-timeformat="1734182863109"></p>

    <br />
    <button @click="fetchData">拿資料</button> -->
    {{ data }}
  </div>
</template>
