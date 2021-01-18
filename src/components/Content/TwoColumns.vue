<template>
  <div class="relative grid grid-cols-10 gap-5 mb-5 z-20">
    <div :class="leftClasses">
      <slot name="left" />
    </div>
    <div :class="rightClasses" >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import layoutStore from "~/data/layoutStore";

export default {
  props: {
    reverse: Boolean
  },
  computed: {
    isXS() {
      return layoutStore.isXS;
    },
    leftClasses() {
      if (layoutStore.isXS) {
        return 'col-span-10 mx-5 text-right' + (this.reverse ? ' order-last' : '');
      }
      else {
        return this.reverse ? 'col-span-6 text-right' : 'col-span-4 ml-5 text-right';
      }
    },
    rightClasses() {
      if (layoutStore.isXS) {
        return 'col-span-10 mx-5 text-right z-20';
      }
      else {
        return (this.reverse ? 'col-span-4 mr-5' : 'col-span-6') + ' z-20';
      }
    }
  }
}
</script>

<style>
</style>
