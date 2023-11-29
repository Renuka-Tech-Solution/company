<template>
  <div class="overflow-x-hidden">
    <!-- Navbar Start -->
    <navbar-component />
    <!-- Navbar End -->

    <!-- Description Start -->
    <div class="lg:flex h-[100vh] md:h-[500px] md:w-[100vw] lg:h-[350px] lg:w-[100vw] my-10 mx-10 lg:mx-10 lg:my-10">
        <div class="flex-wrap py-14 px-10 sm:py-8 md:mx-10 md:px-5 lg:px-0">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mx-auto">Opportunities for you</h1>
            <p class="text-xl lg:text-2xl font-semibold text-black my-4">We believes in working as a team of Professionals who acts and works responsibly for its clients.</p>
            <p class="text-xl lg:text-2xl font-semibold text-black mx-auto pt-10">“A career at Keypress offers more than your expectation.”</p>
        </div>
        <div class="bg-interviewBg bg-cover bg-center mx-auto md:mx-auto lg:mx-16 h-[200px] w-[350px] sm:h-[300px] sm:w-[500px] lg:h-[300px] lg:w-[900px]"></div>
    </div>
    <!-- Description End -->

    <!-- Career Description Start -->
    <div class="bg-gray-100 py-10 justify-center item-center">
        <div class="flex-wrap mx-12 mb-3">
          <h1 class="font-Glory text-center font-bold text-blue-900 text-3xl pb-3 md:pb-2 sm:text-4xl lg:text-5xl lg:pb-2">Our Job Offers</h1>
          <p class="text-center font-semibold text-lg md:text-xl">Join over in The Future of Work, The easiest way to get your new job.</p>
        </div>
        <!-- <div class="mx-12 sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-16 lg:py-8"> -->
        <div class="mx-12 sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-2 md:mx-28 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:py-8">
          <div class="bg-white transition duration-200 ease-in-out hover:shadow-xl w-full rounded-2xl shadow-gray-500 py-8 pl-8 my-9 sm:my-4 md:my-5 md:pt-10 md:pl-10">
            <h1 class="text-2xl md:text-3xl font-semibold">Laravel Developer</h1>
            <p class="text-base md:text-lg pt-2 pb-5">Freshers & Experienced</p>
            <button class="bg-blue-600 px-3 py-2 lg:px-5 lg:py-2 lg:mx-auto rounded-lg text-base md:text-lg text-white text-semibold hover:bg-blue-900">
              <router-link to="/apply">Apply Now</router-link>
            </button>
          </div>
          <div class="bg-white transition duration-200 ease-in-out hover:shadow-xl w-full rounded-2xl shadow-gray-500 py-8 pl-8 my-9 sm:my-4 md:my-5 md:pt-10 md:pl-10">
            <h1 class="text-2xl md:text-3xl font-semibold">API Developer</h1>
            <p class="text-base md:text-lg pt-2 pb-5">Freshers & Experienced</p>
            <button class="bg-blue-600 px-3 py-2 lg:px-5 lg:py-2 lg:mx-auto rounded-lg text-base md:text-lg text-white text-semibold hover:bg-blue-900">
              <router-link to="/apply">Apply Now</router-link>
            </button>
          </div>
          <div class="bg-white transition duration-200 ease-in-out hover:shadow-xl w-full rounded-2xl shadow-gray-500 py-8 pl-8 my-9 sm:my-4 md:my-5 md:pt-10 md:pl-10">
            <h1 class="text-2xl md:text-3xl font-semibold">Web Designer</h1>
            <p class="text-base md:text-lg pt-2 pb-5">Freshers & Experienced</p>
            <button class="bg-blue-600 px-3 py-2 lg:px-5 lg:py-2 lg:mx-auto rounded-lg text-base md:text-lg text-white text-semibold hover:bg-blue-900">
              <router-link to="/apply">Apply Now</router-link>
            </button>
          </div>
          <div class="bg-white transition duration-200 ease-in-out hover:shadow-xl w-full rounded-2xl shadow-gray-500 py-8 px-10 pl-8 my-9 sm:my-4 md:my-5 md:pt-10 md:pl-10">
            <h1 class="text-2xl md:text-3xl font-semibold">Full Stack Developer</h1>
            <p class="text-base md:text-lg pt-2 pb-5">Freshers & Experienced</p>
            <button class="bg-blue-600 px-3 py-2 lg:px-5 lg:py-2 lg:mx-auto rounded-lg text-base md:text-lg text-white text-semibold hover:bg-blue-900">
              <router-link to="/apply">Apply Now</router-link>
            </button>
          </div>
        </div>
    </div>
    <!-- Career Description End -->
    
    <!-- Footer Start -->
    <footer-component />
    <!-- Footer Start -->
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: "ContactView",
  components: {
    NavbarComponent,
    FooterComponent
  },
}
</script>
