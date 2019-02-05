const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '24 August 2019 - Talida & Rares',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css', '~/assets/css/general.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'ro'],
        defaultLocale: 'ro',
        vueI18n: {
          fallbackLocale: 'ro',
          messages: {
            en: {
              accommodation: 'Accommodation',
              accommodation_details1: 'In case you are coming from outside of town, we will reserve a room for you on the date of the event (24th of August, 2019) at one of the following hotels:',
              accommodation_details2: 'A little bit <b>closer to the event date</b>, we will get in contact with you with the exact <b>room booking details</b>. That way you can decide if you want to book any extra days before or after the event.',
              accommodation_details3: 'If you have any <b>special requests</b> regarding accommodation please let us know in advance and we will be happy to help.',
              answer_submitted: 'Thank you for your answer!',
              confirm_decline: 'Confirm / Decline',
              home: 'Home',
              extra_info: 'Extra info',
              getting_married: "We're getting married!",
              im_coming: "I'll be there",
              im_not_coming: "I can't make it",
              menu_standard: 'Standard menu',
              menu_vegetarian: 'Vegetarian menu',
              name: 'Name',
              please_wait: 'Please wait',
              religious_ceremony: 'Religious ceremony',
              send_answer: 'Send answer',
              thank_you_for_coming: "We're delighted you are joining us!",
              travel_tips: 'Travel tips',
              transport: 'Transport',
              wedding_party: 'Wedding party',
              welcome: 'Welcome',
              were_sorry: "We're sorry you could not make it!",
              when: 'When?',
              where: 'Where?'
            },
            ro: {
              accommodation: 'Cazare',
              accommodation_details1: 'In cazul in care veniti din afara orasului, va vom rezerva o camera pentru data evenimentului (24 August 2019) la unul din urmatoarele hoteluri:',
              accommodation_details2: 'Un pic <b>mai aproape de eveniment</b>, va vom contacta cu <b>detaliile exacte legate de rezervarea camerei</b>. In felul asta va puteti decide daca vreti sa rezervati alte zile inainte sau dupa eveniment.',
              accommodation_details3: 'Daca aveti <b>cereri speciale</b> legate de cazare va rugam sa ne anuntati din timp si va vom ajuta cu cea mai mare placere.',
              answer_submitted: 'Va multumim pentru raspuns!',
              confirm_decline: 'Raspunde invitatiei',
              home: 'Acasa',
              welcome: 'Bine ati venit',
              extra_info: 'Alte info',
              getting_married: 'Ne casatorim!',
              im_coming: "Vin si eu",
              im_not_coming: "Nu pot ajunge",
              menu_standard: 'Meniu standard',
              menu_vegetarian: 'Meniu vegetarian',
              name: 'Nume',
              please_wait: 'Va rugam asteptati',
              religious_ceremony: 'Ceremonia religioasa',
              send_answer: 'Trimite raspunsul',
              thank_you_for_coming: 'Ne bucuram ca veti fi alaturi de noi!',
              travel_tips: '',
              transport: 'Transport',
              wedding_party: 'Petrecerea',
              were_sorry: 'Ne pare rau ca nu puteti ajunge!',
              when: 'Cand?',
              where: 'Unde?'
            }
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    dir: 'docs'
  }
}
