<template>
  <div>
    <Header/>
    <section class="container">
      <div class="mt-8 mb-8 ml-4 mr-4 w-full">

        <h3 class="font-pennellino font-normal text-6xl bg-flowers-1">
          {{ $t('getting_married') }}
        </h3>

        <div class="flex flex-wrap mt-16 mb-16 w-full">
          <div class="w-full lg:w-1/3 mb-8">
            <div class="font-pennellino text-5xl pt-10 mb-4">
              {{ $t('when') }}
            </div>
            <div class="font-serif text-xl">
              24 August 2019
            </div>
            <div class="font-pennellino text-3xl pt-8 mb-2">
              {{ $t('religious_ceremony') }}
            </div>
            <div class="font-serif text-xl">
              15:00
            </div>
            <div class="font-pennellino text-3xl pt-10 mb-2">
              {{ $t('wedding_party') }}
            </div>
            <div class="font-serif text-xl">
              19:00
            </div>
          </div>
          <div class="w-full lg:w-1/3 mb-8 bg-roz h-406">
            <div class="font-pennellino text-5xl pt-10 mb-4">
              {{ $t('where') }}
            </div>
            <a class="font-serif text-xl text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/1i26WpPHgRu">
              Targu-Jiu, Romania
            </a>
            <div class="font-pennellino text-3xl pt-8 mb-2">
              {{ $t('religious_ceremony') }}
            </div>
            <div>
              <a class="font-serif text-xl text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/9shSEEwu2XF2">
                Biserica Sfintii Apostoli<br/>Petru si Pavel
              </a>
            </div>
            <div class="font-pennellino text-3xl pt-4 mb-2">
              {{ $t('wedding_party') }}
            </div>
            <div>
              <a class="font-serif text-xl text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/nkeghqFm28D2">
                Anna Riviera<br/>"Sala Flora"
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/3 mb-8">
            <div class="font-pennellino text-5xl pt-10 mb-4">
              RSVP
            </div>
            <nuxt-link
              :to="localePath('rsvp')"
              class="font-serif text-xl text-red-darker hover:text-red no-underline"
              tag="button">
              {{ $t('confirm_decline') }}
            </nuxt-link>

            <div class="font-pennellino text-5xl pt-12 mb-4">
              {{ $t('extra_info') }}
            </div>
            <nuxt-link
              :to="localePath('accommodation')"
              class="font-serif text-xl text-red-darker hover:text-red no-underline"
              tag="button">
              {{ $t('accommodation') }}
            </nuxt-link>
            <br/><br/>
            <nuxt-link
              :to="localePath('tips')"
              class="font-serif text-xl text-red-darker hover:text-red no-underline"
              tag="button">
              {{ $t('travel_tips') }}
            </nuxt-link>
          </div>
        </div>
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

.bg-roz {
  background-image: url(~assets/images/roz.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 320px 406px;
}

.h-406 {
  height: 406px;
}
</style>
