<template>
  <div
    class="flex flex-col min-h-screen w-full bg-light-100 font-sans text-gray-700"
  >
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Raleway&display=swap');

#__nuxt {
  @apply min-h-screen w-screen;
}

h1 {
  @apply text-5xl mb-3;
}
h2 {
  @apply text-4xl mb-2;
}
h3 {
  @apply text-3xl mb-1.5;
}
h4 {
  @apply text-2xl mb-1;
}
h5 {
  @apply text-xl;
}
</style>
