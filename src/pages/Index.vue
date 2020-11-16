<template>
  <Layout>
      <div class="container mx-auto h-screen">
        <div class="flex h-full justify-center items-center">
          <main class="flex-shrink my-4 prose-lg dark:prose-dark">
            <MFLogo />
            <h1>Przebudowujemy się...</h1>
            <h2>Już niedługo najszczęśliwsza agencja wizażystek powróci 😊</h2>
            <p>Jeżeli jesteś zainteresowana makijażem ślubnym, okolicznościowym lub sesyjnym możesz do nas napisać poprzez:</p>
            <div class="mt-4">
              <ul class="flex justify-center">
                <li class="px-6">
                  <a
                    href="https://www.facebook.com/muafamilia/"
                    target="_blank"
                    title="Facebook"
                  >
                    <font-awesome :icon="['fab', 'facebook-square']" color="#0078ff" size="2x"/>
                  </a>
                </li>
                <li class="px-6">
                  <a
                      href="https://www.instagram.com/muafamilia/"
                      target="_blank"
                      title="Instagram"
                  >
                    <font-awesome :icon="['fab', 'instagram']" color="#dd2a7b" size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MFLogo from '~/components/Partials/MFLogo.vue';

export default {
  metaInfo: {
    title: "Strona w przebudowie"
  },
  components: {
    MFLogo
  }
};
</script>
