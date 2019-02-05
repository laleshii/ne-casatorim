<template>
  <div>
    <Header/>
    <section class="container">
      <div class="mt-8 mb-8 ml-4 mr-4 w-full">
        <h1 class="font-pennellino font-normal text-6xl bg-flowers-1">
          {{ $t('travel_tips') }}
        </h1>
        <h2 class="font-pennellino font-normal text-4xl bg-flowers-1 mt-8">
          Transport
        </h2>
        <p class="font-serif mt-8 max-w-md mx-auto">
          The best way to get to Romania is probably via <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/WMUPpL3GkQo">Otopeni Airport</a> in <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/FYfUxHVpH9C2">Bucharest</a>. From there onwards you can reach <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/1i26WpPHgRu">Targu-Jiu</a> (the city where the event is happening) via car (4h), bus (5.5h) or train (5-6h).
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          Getting from Otopeni Airport to Bucharest can be done via a <b>taxi</b>. There's also <b>Uber and Taxify</b> apps available for you smartphone to make your life easier. A one way trip should be under €10.
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          Bucharest has a pretty good and extensive metro network. So if you want to spend a few days in the capital, just using the metro and Uber/Taxify should be easier than going about with the car as the traffic is quite heavy.
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          If you want to travel around the country our <b>recommendation would be to rent a car</b>. While we don't have a very extensive highway network, it's still the most convenient way to get around. <i>Tip:</i> Make sure you check out the reviews for the car rental companies. Some are known for being very picky with car "damage" (including scratches) during rental.
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          If you want to travel by <b>train</b>, take some extra time for it as the speed of travel is quite low. You can find a <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="http://www.cfr.ro/files/ddr/Anexa%201a%20-%20Harta%20generala%20retea%20CFR.pdf">map of the rail transport here</a> and can <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://www.cfrcalatori.ro/en/">buy tickets from here</a>.
        </p>

        <h2 class="font-pennellino font-normal text-4xl bg-flowers-1 mt-8">
          Payment
        </h2>

        <p class="font-serif mt-8 max-w-md mx-auto">
          You can pay with <b>any debit/credit card (AMEX excluded) at most shops and restaurants</b> however you might encounter some places where that method of payment is not available so it's <b>good to have some cash</b> (RON - Romanian Leu) with you.
        </p>

        <h2 class="font-pennellino font-normal text-4xl bg-flowers-1 mt-8">
          Where to go?
        </h2>

        <p class="font-serif mt-8 max-w-md mx-auto">
          The major cities which may be worth a visit in our opinion are:<br><br/>
          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/FYfUxHVpH9C2">Bucharest</a> - a bit more crowded but still has a lot of things to see and do<br/><br/>
          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/EaMwWC19b3J2">Sibiu</a> - ex-european capital of culture, Germanic architecture old town<br/><br/>
          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/kgMQJc3ZGjC2">Brasov</a> - it's surrounded by mountains and was a Saxon bastion<br/><br/>
          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/Awd1Cg3nnsL2">Sighisoara</a> - close to Brasov, medieval city
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          This depends on what you want to do in your trip and if you will rent a car there, but some of the things you can also consider seeing are: <br/><br/>

          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/aagCDpUHUTG2">Delta Dunarii</a> - We haven't been there just yet but this is a UNESCO protected zone and a unique type of terrain in Europe with nice bio-diversity which may disappear in the next 30-50 years<br/><br/>
          <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/8moV8Phbder">Transalpina</a> and/or <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/2x2FSjb9rrP2">Transfagarasan</a> - the mountains stretch out on most of the country so should be easy to reach them wherever you are coming from, but these roads are at around 2000m altitude and feature terrific views. Also quite a few lakes in the vecinity<br/><br/>
          <b>Valea Prahovei</b> - valley with a lot of mountain resorts on your way from Bucharest to Brasov. Check out <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/jamg64M4tt32">Sinaia</a> resort and <a class="font-serif font-bold text-red-darker hover:text-red no-underline" href="https://goo.gl/maps/S9bp41Ggg9T2">Peles Castle</a>
        </p>

        <h2 class="font-pennellino font-normal text-4xl bg-flowers-1 mt-8">
          In and around Targu-Jiu
        </h2>

        <p class="font-serif mt-8 max-w-md mx-auto">
          Our small home town is best known for being the birth place of the sculptor <b>Constantin Brancusi</b>. His Sculptural Ensemble might be a nice walk to do as it crosses 2 parks and a big chunk of the city.
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          For <b>eating out</b> we would recommend going to one of the following tried venues in no particular order: Casa Vera, Hanul Domnesc, Terasa Anna, Anna Super 2000, Pensiunea Antique. Note that most of these restaurants serve traditional food.
        </p>

        <p class="font-serif mt-8 max-w-md mx-auto">
          Outside but fairly close to the city you can try to visit one of the following points of interest: <b>Cheile Sohodolului</b>, <b>Tismana Monastery</b> or eat out at <b>Casuta din Padure</b>.
        </p>

        <h2 class="font-pennellino font-normal text-4xl bg-flowers-1 mt-8">
          Don't hesitate to contact us<br/>if you need extra tips or recommendations!
        </h2>
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
