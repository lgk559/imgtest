<script setup>
import { ref, computed } from "vue";
// import { filename } from "pathe/utils";
const glob = import.meta.glob("@/assets/images/room-*.png", { eager: true });
const imgList = ["a", "b", "c"];
// const images = Object.fromEntries(
//   Object.entries(glob).map(([key, value]) => [filename(key), value.default])
// );

const roomId = ref("a");
const num = ref(1);

const config = useRuntimeConfig();
const getImageUrl = (path) => {
  return `${config.public.baseURL}/${path}`;
};

const desktopImageSrc = computed(
  () => `${config.public.baseURL}/room-${roomId.value}-${num.value}.png`
);
const mobileImageSrc = computed(
  () => `${config.public.baseURL}/room-${roomId.value}-sm-${num.value}.png`
);
</script>

<template>
  <img
    v-for="item in imgList"
    class="w-100 object-fit-cover"
    :src="getImageUrl(`room-${item}-1.png`)"
    loading="lazy"
  />
</template>
