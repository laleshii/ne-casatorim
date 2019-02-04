<template>
  <div>
    <Header/>
    <section class="container">
      <div class="mt-8 mb-8 ml-4 mr-4 w-full">

        <h3 class="font-pennellino font-normal text-6xl bg-flowers-1">
          {{ $t('accommodation') }}
        </h3>
        <p
          class="font-serif mt-8 max-w-sm mx-auto"
          v-html="$t('accommodation_details1')">
        </p><br/>
        <div class="text-center">
          <a class="font-serif text-xl text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/ZR7aWxjjQ172">
            Hotel Anna
          </a><br/>
          <a class="font-serif text-xl text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/P3gwZ19knv52">
            Hotel Anna Junior
          </a>
        </div>
        <p
          class="font-serif mt-8 max-w-sm mx-auto"
          v-html="$t('accommodation_details2')">
        </p>
        <p
          class="font-serif mt-8 max-w-sm mx-auto"
          v-html="$t('accommodation_details3')">
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
