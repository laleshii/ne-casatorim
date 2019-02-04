<template>
  <div>
    <Header />
    <section class="container">
      <div class="mt-8 mb-8 ml-4 mr-4 w-full">
        <h1 class="font-pennellino font-normal text-6xl bg-flowers-1">
          RSVP
        </h1>

        <div v-if="submitted">
          <h2 class="font-pennellino font-normal text-4xl mt-8 mb-8 mr-2 ml-2">
            {{ $t('answer_submitted') }}<br/>
          </h2>
        </div>
        <div v-else>
          <div class="flex flex-wrap w-full lg:w-2/3 align-center mx-auto">
            <div class="w-1/2 p-4">
              <div
                class="font-serif shadow-md rounded text-32 p-4 cursor-pointer"
                :class="{ 'bg-orange-lightest': coming === true }"
                @click="imComing">
                {{ $t('im_coming') }}<br/>
                🙂
              </div>
            </div>
            <div class="w-1/2 p-4">
              <div
                class="font-serif shadow-md rounded text-32 p-4 cursor-pointer"
                :class="{ 'bg-orange-lightest': coming === false }"
                @click="imNotComing">
                {{ $t('im_not_coming') }}<br/>
                🙁
              </div>
            </div>
          </div>

          <div v-if="coming === true">
            <h2 class="font-pennellino font-normal text-4xl mt-8 mb-8 mr-2 ml-2">
              {{ $t('thank_you_for_coming') }}<br/>
            </h2>
          </div>
          <div v-if="coming === false">
            <h2 class="font-pennellino font-normal text-4xl mt-8 mb-8 mr-2 ml-2">
              {{ $t('were_sorry') }}
            </h2>
          </div>
          <div v-if="coming !== null">
            <GuestForm
            v-for="(guest, index) in guests"
            :key="index"
            :guest="guest"
            :index="index"
            @deleted="deleteGuest(guest)"
            :can-delete="index !== 0"/>
            <div class="mt-8">
              <button
                v-if="guests.length < 5"
                class="font-serif bg-transparent hover:bg-red-darkest text-red-darker font-semibold hover:text-white py-2 px-4 border border-red-darker hover:border-transparent rounded"
                @click="addGuest">
                +1
              </button>
              <button
                class="font-serif bg-red-darker hover:bg-red-darkest text-white font-bold py-2 px-4 rounded"
                :disabled="loading"
                @click="submitAnswer">
                {{ buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import GuestForm from '~/components/GuestForm.vue'

export default {
  components: { Header, GuestForm },
  data() {
    return {
      coming: null,
      loading: false,
      submitted: false
    }
  },
  computed: {
    guests() {
      return this.$store.state.guests.list
    },
    buttonText() {
      return this.loading ? this.$t('please_wait') : this.$t('send_answer')
    }
  },
  methods: {
    imComing() {
      if (this.coming !== true) {
        this.coming = true
        this.$store.commit('guests/clear')
        this.addGuest()
      }
    },
    imNotComing() {
      if (this.coming !== false) {
        this.coming = false
        this.$store.commit('guests/clear')
        this.addGuest()
      }
    },
    addGuest() {
      this.$store.commit('guests/add', {
        name: '',
        coming: this.coming,
        menu: this.coming ? 'standard' : ''
      })
    },
    deleteGuest(guest) {
      this.$store.commit('guests/remove', guest)
    },
    async submitAnswer() {
      this.loading = true
      for (let i = 0; i <= this.guests.length; i++) {
        const guest = this.guests[i]
        try {
          await this.$axios.$post(
            'https://api.airtable.com/v0/appLP27H6wssZbaRM/RSVPs?maxRecords=3&view=Grid%20view',
            {
              fields: {
                Coming: this.coming,
                Menu: guest.menu,
                Name: guest.name
              }
            },
            {
              headers: {
                Authorization: 'Bearer keybNC1CEJe0OUwc5'
              }
            }
          )
        } catch {}
      }
      this.submitted = true
    }
  }
}
</script>

<style scoped>
.container {
  @apply flex justify-center items-center text-center mx-auto;
}
</style>
