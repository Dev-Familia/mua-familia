<template>
  <div id="top" class="text-center font-mono text-xs sm:text-base">
    <div class="p-5 grid grid-cols-6 sm:grid-cols-5 gap-3 items-center justify-around">
      <g-link to="/" class="col-start-2 col-span-4 sm:order-3 sm:col-span-1 transform hover:scale-105 hover:text-gray-dark dark-hover:text-gray-light"><MFLogo/></g-link>
      <ThemeSwitcher class="sm:order-5"></ThemeSwitcher>
      <g-link to="/artystki" class="invisible col-span-2 sm:order-1 sm:col-span-1 transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">Artystki</g-link>
      <g-link to="/o-nas" class="hidden sm:block sm:invisible scol-span-2 sm:order-2 sm:col-span-1 transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">O&nbsp;nas</g-link>
      <g-link to="/kontakt" class="col-span-2 sm:order-4 sm:col-span-1 transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">Kontakt</g-link>
    </div>
    <h6 class="px-2">Najszczęśliwsza agencja&nbsp;wizażystek z&nbsp;Krakowa</h6>
  </div>
</template>
<script>
import MFLogo from "~/components/Partials/MFLogo";
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher";

export default {
  name: 'TheHeader',
  components: { MFLogo, ThemeSwitcher }
}
</script>
