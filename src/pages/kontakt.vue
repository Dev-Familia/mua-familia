<template>
  <Layout>
    <h5 class="py-32 m-0 text-center animate-pulse">VVV</h5>

    <BackgroundContent position="3">01</BackgroundContent>
    <TwoColumns>
      <template #left>
        <p>Cieszymy się, że chcesz się z&nbsp;nami skontaktować.
          Zapraszamy do kontaktu poprzez Instagram bądź Facebook'a.</p>
      </template>
      <template #right>
        <div class="flex place-content-center">
        <g-link to="https://www.instagram.com/muafamilia/" class="inline-block m-6" @click="track('instagram')">
          <SvgIcon name="instagram" size="50" />
        </g-link>
        <g-link to="https://m.me/muafamilia/" class="inline-block m-6" @click="track('facebook')">
          <SvgIcon name="facebook" size="50" />
        </g-link>
        </div>
      </template>
    </TwoColumns>

    <h5 class="py-32 m-0 text-center">xXx</h5>

    <div class="flex place-content-center">
      <g-link to="/" class="inline-block" @click="track('powrót na główną')">
        <SecondaryButton>Wr<br/>óć</SecondaryButton>
      </g-link>
    </div>

    <h5 class="py-32 m-0 text-center animate-pulse">AAA</h5>

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
import TwoColumns from '~/components/Content/TwoColumns';
import BackgroundContent from '~/components/Content/BackgroundContent';
import SvgIcon from "~/components/Content/SvgIcon";
import SecondaryButton from '~/components/Forms/SecondaryButton';
import layoutStore from "~/data/layoutStore";

export default {
  metaInfo: {
    title: "Kontakt"
  },
  components: {
    TwoColumns,
    BackgroundContent,
    SvgIcon,
    SecondaryButton
  },
  computed: {
    foregroundColor() {
      return layoutStore.foregroundColor;
    }
  },
  methods: {
    track(linkName) {
      this.$gtm.trackEvent({
        category: "Kontakt",
        action: "click",
        label: linkName,
        value: 10
      });
    }
  }
};
</script>
