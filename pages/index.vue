<template>
  <section class="container">
    <div class="mt-8 mb-8">
      <h1 class="font-pennellino font-normal text-6xl">
        Talida & Rares
      </h1>
      <logo />
      <h1 class="font-pennellino font-normal text-5xl">
        24 August 2019
      </h1>

      <div class="language-menu mt-8">
        <nuxt-link
          :to="localePath('info', 'ro')"
          class="font-serif text-xl text-red-darker hover:text-red"
          tag="button">
          Romana
        </nuxt-link>
        &nbsp;-&nbsp;
        <nuxt-link
          :to="localePath('info', 'en')"
          class="font-serif text-xl text-red-darker hover:text-red"
          tag="button">
          English
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
