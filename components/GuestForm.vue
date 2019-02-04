<template>
  <div class="mb-4">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/3 lg:text-right">
        <label class="block font-serif text-grey-dark text-sm mb-2 mt-2 mr-2" for="contact">
          {{ $t('name') }}
        </label>
      </div>
      <div class="w-full lg:w-1/3 relative">
        <div v-if="canDelete" @click="triggerDelete" class="remove">x</div>
        <input
          class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          ref="contact"
          type="text"
          :value="guest.name"
          @keyup="updateName" />
      </div>
      <div class="w-full lg:w-1/3 text-center lg:text-left">
        <div
          v-if="guest.coming"
          class="inline-block text-xs mr-auto ml-auto mt-2 lg:mt-1 lg:mr-0 lg:ml-2 text-left">
          <label class="inline-block mb-1 text-left">
            <input
              type="radio"
              value="standard"
              :name="`menu${index}`"
              @click="standardMenu"
              :checked="guest.menu == 'standard'" />
            {{ $t('menu_standard') }}
          </label><br/>
          <label class="inline-block">
            <input
              type="radio"
              :name="`menu${index}`"
              value="vegetarian"
              @click="vegetarianMenu"
              :checked="guest.menu == 'vegetarian'" />
            {{ $t('menu_vegetarian') }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    guest: {
      type: Object,
      required: true
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    standardMenu() {
      this.$store.commit('guests/setStandardMenu', this.guest)
    },
    vegetarianMenu() {
      this.$store.commit('guests/setVeggieMenu', this.guest)
    },
    updateName() {
      this.$store.commit('guests/updateName', {
        guest: this.guest,
        name: this.$refs.contact.value
      })
    },
    triggerDelete() {
      this.$emit('deleted')
    }
  }
}
</script>

<style scoped>
.remove {
  @apply cursor-pointer font-mono font-bold;
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 8px;
  color: red;
}
</style>
