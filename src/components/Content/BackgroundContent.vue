<template>
  <div class="absolute big-font text-gray-light dark:text-gray-dark z-0 w-6/12">
    <p v-if="position === '1'" style="transform: translate(-36px, -15px)">
      <slot />
    </p>
    <p v-if="position === '2'" :style="style2">
      <slot />
    </p>
    <p v-if="position === '3'" :style="style3">
      <slot />
    </p>
  </div>

</template>

<script>
import layoutStore from "~/data/layoutStore";

export default {
  props: {
    position: String
  },
  computed: {
    style2() {
      if (layoutStore.windowWidth < 828) {
        const delta = 645 - (828 - layoutStore.windowWidth);
        return `transform: translate(${delta}px, 50px)`;
      } else {
        return 'transform: translate(640px, 50px)';
      }
    },
    style3() {
      if (layoutStore.isXS) {
        const delta = 420 - (828 - layoutStore.windowWidth);
        return `transform: translate(${delta}px, -80px)`;
      } else if (layoutStore.windowWidth < 828) {
        const delta = 160 - (828 - layoutStore.windowWidth);
        return `transform: translate(${delta}px, -90px)`;
      } else {
        return 'transform: translate(160px, -90px)';
      }
    },
  }
}
</script>

<style>
</style>
