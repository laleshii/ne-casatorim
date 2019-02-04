<template>
  <div>
    <Header/>
    <section class="container">
      <div class="mt-8 mb-8 ml-4 mr-4 w-full">

        <h3 class="font-pennellino font-normal text-6xl bg-flowers-1">
          {{ $t('travel_tips') }}
        </h3>
        <p class="font-serif mt-8 max-w-md mx-auto">
          Details coming soon.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: { Header }
}
</script>

<style scoped>
.container {
  @apply flex justify-center items-center text-center mx-auto;
}
</style>
