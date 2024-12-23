<script setup>
import { ref, computed } from "vue";
// const glob = import.meta.glob("@/assets/images/room-*.png", { eager: true });
// const imgList = ["a", "b", "c"];
// const config = useRuntimeConfig();
const config = useRuntimeConfig();
const baseURL = config.app.baseURL;

const roomImages = computed(() => {
  const rooms = ["a", "b", "c", "d"];
  const nums = [1, 2, 3, 4, 5];

  const result = rooms.reduce((acc, roomId) => {
    acc[`room${roomId.toUpperCase()}`] = nums.reduce((obj, num) => {
      obj[num] = {
        desktop: `${baseURL}images/room-${roomId}-${num}.png`,
        mobile: `${baseURL}images/room-${roomId}-sm-${num}.png`,
      };
      return obj;
    }, {});

    return acc;
  }, {});

  return result;
});
</script>

<template>
  <!-- <img
    v-for="item in imgList"
    class="w-100 object-fit-cover"
    :src="getImageUrl(`room-${item}-1.png`)"
    loading="lazy"
  /> -->
  <!-- <NuxtPicture :src="`${config.public.baseURL}/room-a-1.png`" /> -->
  <img
    v-for="(num, index) in 5"
    :key="index"
    :src="roomImages.roomA[num].mobile"
    alt=""
  />
</template>
