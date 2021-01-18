<template>
  <div id="app" class="max-w-screen-md h-full mx-auto text-black dark:text-white bg-white dark:bg-black leading-relaxed">
    <the-header/>
    <slot/>
    <the-footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from "~/components/Partials/TheHeader";
import TheFooter from "~/components/Partials/TheFooter";
import layoutStore from "~/data/layoutStore";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      layoutStore.updateWindowWidth();
    }
  }

};
</script>
