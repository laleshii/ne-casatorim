<template>
  <section class="container">
    <div class="mt-8 mb-8">
      <h1 class="font-pennellino text-6xl">
        Talida & Rares
      </h1>
      <logo />
      <h1 class="font-pennellino text-5xl">
        24 August 2019
      </h1>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head: {
    title: '24 August 2019 - Talida & Rares'
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
