<template>
  <div :class="backgroundClass" class="flex flex-wrap sm:flex-nowrap p-5 pb-12">
    <div :class="decoratorClassLeft">
      <SvgIcon name="lips" />
      <SvgIcon name="lashes" />
      <SvgIcon name="lips" />
      <SvgIcon name="lashes" />
    </div>
    <div class="flex-grow flex flex-col">
      <div class="flex-1 grid place-content-center">&middot; &nbsp; &middot; &nbsp; &middot;</div>
      <div class="flex-1 flex flex-col sm:flex-row items-center text-center font-mono">
        <g-link to="/" class="flex-1 my-2 sm:my-0 invisible transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">Artystki</g-link>
        <g-link to="/kontakt" class="flex-1 my-2 sm:my-0 transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">Kontakt</g-link>
        <g-link to="/" class="flex-1 my-2 sm:my-0 invisible transform hover:scale-110 hover:text-gray-dark dark-hover:text-gray-light">o nas</g-link>
      </div>
      <div class="flex-1 flex flex-row place-items-center text-center mt-2 sm:mt-0">
        <div class="flex-1"></div>
        <div class="flex-1">
          <div> &middot; © {{ new Date().getFullYear() }} &middot; </div>
          <MFLogo />
        </div>
        <div class="flex-1">
          <g-link to="https://www.instagram.com/muafamilia/" class="m-2 inline-block">
            <SvgIcon name="instagram" />
          </g-link>
          <g-link to="https://www.facebook.com/muafamilia/" class="m-2 inline-block">
            <SvgIcon name="facebook" />
          </g-link>
        </div>
      </div>
    </div>
    <div :class="decoratorClassRight">
      <SvgIcon name="lashes" />
      <SvgIcon name="lips" />
      <SvgIcon name="lashes" />
      <SvgIcon name="lips" />
    </div>
  </div>
</template>

<script>
import MFLogo from "~/components/Partials/MFLogo";
import SvgIcon from "~/components/Content/SvgIcon";
import layoutStore from "~/data/layoutStore";

export default {
  components: { MFLogo, SvgIcon },
  computed: {
    backgroundClass() {
      return layoutStore.backgroundClass;
    },
    backgroundColor() {
      return layoutStore.backgroundColor;
    },
    foregroundColor() {
      return layoutStore.foregroundColor;
    },
    decoratorClassLeft() {
      if (layoutStore.isXS) {
        return 'hidden';
      } else {
        return 'flex-grow-0';
      }
    },
    decoratorClassRight() {
      if (layoutStore.isXS) {
        return 'flex flex-row justify-center w-full';
      } else {
        return 'flex-grow-0';
      }
    }
  }
}
</script>

<style />>
