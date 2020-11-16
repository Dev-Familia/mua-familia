<template>
  <div>
    <g-image
      class="mx-auto"
      src="~/assets/images/logo-mf.png"
      width="500"
      alt="Logo agencji MUA Familia"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MFLogo',
  props: {
    width: {
      type: String,
      default: '500'
    }
  }
}
</script>

<style scoped/>
