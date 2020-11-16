<template>
  <div id="app" class="px-2 text-gray-300 dark:bg-black">
    <slot />
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
export default {
  data: function() {
    return {
      theme: "dark"
    };
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    }
  }
};
</script>
