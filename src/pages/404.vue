<template>
  <Layout>
    <h5 class="py-32 m-0 text-center animate-pulse">VVV</h5>

    <h4 class="text-center">PuściutKo...</h4>

    <p class="text-center mx-5">
      Tutaj nie udało nam się jeszcze nic zmalować i strona nie istnieje...<br/>
      Ale z nami zaraz wrócisz do rzeczywistości.
    </p>

    <h5 class="py-32 m-0 text-center animate-pulse">AAA</h5>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Błąd"
  },

  created() {
    setTimeout(() => {
      this.$router.push('/');
    }, 10000);

  }
};
</script>

<style scoped>
</style>
