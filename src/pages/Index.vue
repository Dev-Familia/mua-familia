<template>
  <Layout>
    <h5 class="py-32 sm:py-64 m-0 text-center animate-pulse" aria-hidden="true">VVV</h5>

    <BackgroundContent position="1">01</BackgroundContent>
    <TwoColumns>
      <template #left>
        <h3 class="l">Makijaże<br/>
          ślubne<br/>
          okoliczno-<br/>
          ściowe</h3>
        <p class="pt-0 sm:pt-4">Ślub niewątpliwie jest bardzo ważnym wydarzeniem w&nbsp;życiu każdej kobiety.
          Chociaż jest też wiele innych okazji, przy których pragniesz wyglądać zjawiskowo,
          to&nbsp;jednak zaufanie Panien Młodych, w&nbsp;tym wyjątkowym dla nich dniu
          w&nbsp;którym wybierają jedną z&nbsp;nas na&nbsp;swoje wsparcie, jest dla nas
          najlepszym potwierdzeniem nie tylko posiadanych umiejętności, ale także tego
          jak dobrze się ze&nbsp;sobą&nbsp;czujemy.</p>
        <p>Niezależnie od okoliczności w&nbsp;jakich możemy Ci pomóc, jeśli tak jak nam,
          zależy Tobie na dobrym samopoczuciu, wyślij nam&nbsp;wiadomość:</p>
      </template>
      <template #right>
        <g-image src="~/assets/images/makijaze-slubne-katarzyna-mrozek.jpg"
                 alt="Makijaż ślubny przygotowany przez Kasię Mrożek"
                 class="float-right" />
      </template>
    </TwoColumns>

    <TwoColumns>
      <template #left>
        <g-link to="/kontakt" class="inline-block" @click="track('umów')">
          <PrimaryButton>Um<br />ów</PrimaryButton>
        </g-link>
      </template>
      <template #right>
        <SecondaryButton class="hidden">Port<br/>fOlio</SecondaryButton>
      </template>
    </TwoColumns>

    <h5 class="py-32 sm:py-64 m-0 text-center" aria-hidden="true">===</h5>

    <BackgroundContent position="2">02</BackgroundContent>
    <TwoColumns reverse>
      <template #left>
        <g-image src="~/assets/images/makijaze-sesyjne-agnieszka-krzyzowska.jpg"
                 alt="Makijaż z sesji zdjęciowej przygotowany przez Agnieszkę Krzyżowską"
                 class="float-left" />
      </template>
      <template #right>
        <h3 class="l">Makijaże
          sesyjne<br/>
          komercyjne<br/>
          biznesowe</h3>
        <p class="pt-0 sm:pt-4">Uwielbiamy malować modelki (także modeli) na sesje zdjęciowe!
          Jednakże często trafiają się osoby, które mają znacznie mniejsze doświadczenie przed
          obiektywem. Czy masz obawy przez swoją pierwszą sensualną sesją czy organizujesz
          sesję zdjęciową dla zarządu firmy, wiesz, że w&nbsp;takiej sytuacji ważna będzie
          profesjonalna pomoc w&nbsp;przygotowaniach na długo przed pierwszym błyskiem fleszy.
          Pracujemy z&nbsp;klientami indywidualnymi przy prywatnych sesjach, pracujemy na
          sesjach komercyjnych np. dla tak dużych firm jak InPost czy Bytom. I&nbsp;oczywiście
          pracujemy przy tym wszystkim, co może się zadziać pomiędzy...</p>
        <p>Jeśli chcesz byśmy współpracowały także z&nbsp;Tobą, napisz&nbsp;do&nbsp;nas:</p>
      </template>
    </TwoColumns>

    <TwoColumns reverse>
      <template #left>
        <g-link to="/kontakt" class="inline-block" @click="track('rezerwuj')">
          <PrimaryButton>Reze<br />rwuJ</PrimaryButton>
        </g-link>
      </template>
      <template #right>
        <SecondaryButton class="hidden">Reali<br/>zAcje</SecondaryButton>
      </template>
    </TwoColumns>

    <h5 class="py-32 sm:py-64 m-0 text-center" aria-hidden="true">xXx</h5>

    <BackgroundContent position="3">03</BackgroundContent>
    <TwoColumns>
      <template #left>
        <h3 class="l">Makijaże<br/>
          kreatywne</h3>
        <p class="pt-0 sm:pt-4">Makijaże to dla nas coś więcej niż praca. Dzięki nim mamy możliwość stworzenia
          także czegoś nowego, co będzie żyło nawet krócej niż motyl. To jedna
          z&nbsp;najbardziej ulotych form sztuk wizualnych, gdzie czasami nasze dzieła
          przestają istnieć po zrobieniu zaledwie kilku zdjęć. Przynajmniej dzięki nim
          wszyscy mamy możliwość zobaczenia tego, co na&nbsp;żywo widziało kilka osób
          pracujących gdzieś tam, często w&nbsp;malutkim&nbsp;pokoiku, z&nbsp;dala
          od&nbsp;innych.</p>
        <p>Jeśli interesuje Ciebie zrobienie kiedyś czegoś wspólnie z&nbsp;nami,
          odezwij&nbsp;się:</p>
      </template>
      <template #right>
        <g-image src="~/assets/images/makijaze-kreatywne-katarzyna-zielinska.jpg"
                 alt="Makijaż artystyczny przygotowany przez Kasię Zielińską"
                 class="float-right" />
      </template>
    </TwoColumns>

    <TwoColumns>
      <template #left>
        <g-link to="/kontakt" class="inline-block" @click="track('współpracuj')">
          <PrimaryButton>Współ<br />prAcuj</PrimaryButton>
        </g-link>
      </template>
      <template #right>
        <SecondaryButton class="hidden">Twór<br/>czOść</SecondaryButton>
      </template>
    </TwoColumns>

    <h5 class="py-32 sm:py-64 m-0 text-center animate-pulse" aria-hidden="true">AAA</h5>

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
import PrimaryButton from '~/components/Forms/PrimaryButton';
import SecondaryButton from '~/components/Forms/SecondaryButton';
import TwoColumns from '~/components/Content/TwoColumns';
import BackgroundContent from '~/components/Content/BackgroundContent';

export default {
  metaInfo: {
    title: "Start"
  },
  components: {
    PrimaryButton,
    SecondaryButton,
    TwoColumns,
    BackgroundContent
  },
  methods: {
    track(linkName) {
      this.$gtm.trackEvent({
        category: "Start",
        action: "click",
        label: linkName,
        value: 10
      });
     }
    // ,
    // checkLater(linkName) {
    //   this.$gtm.trackEvent({
    //     category: "Start",
    //     action: "click",
    //     label: linkName,
    //     value: 10
    //   });
    //
    // }
  }
};
</script>
