<template>
  <div class="overflow-x-hidden">
    <!-- Navbar Start -->
    <navbar-component />
    <!-- Navbar End -->

      <div class="my-10">
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-950 mx-auto text-center">Our Work's</h1>
      </div>

      <div class="mx-24 my-16">
        <div class="flex justify-center gap-5 mx-20">
          <img :src="require('../assets/portfolio/tutionmate/01.jpeg')" class="h-[300px] w-[400px] hover:drop-shadow-lg rounded" />
          <img :src="require('../assets/portfolio/tutionmate/02.jpeg')" class="h-[300px] w-[400px] hover:drop-shadow-lg rounded" />
          <img :src="require('../assets/portfolio/tutionmate/03.jpeg')" class="h-[300px] w-[400px] hover:drop-shadow-lg rounded" />
        </div>
      </div>

      <!-- Footer Start -->
      <footer-component />
      <!-- Footer End -->
    
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'ServicesView',
  components: {
    NavbarComponent,
    FooterComponent,
  },
}
</script>
