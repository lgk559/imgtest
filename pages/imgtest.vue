<script setup>
import { ref, computed } from "vue";
const glob = import.meta.glob("@/assets/images/room-*.png", { eager: true });
const imgList = ["a", "b", "c"];

const config = useRuntimeConfig();
const getImageUrl = (path) => {
  return `${config.public.baseURL}/${path}`;
};
</script>

<template>
  <!-- <img
    v-for="item in imgList"
    class="w-100 object-fit-cover"
    :src="getImageUrl(`room-${item}-1.png`)"
    loading="lazy"
  /> -->
  <NuxtPicture src="/room-a-1.png" />
</template>
