<template>
    <div class="overflow-x-hidden">
        <!-- Navbar Start -->
        <navbar-component />
        <!-- Navbar End -->

        <!-- Description Start -->
        <div class="bg-serviceBg bg-cover bg-center h-[500px] md:h-[400px] lg:h-[400px] lg:w-[100vw]">
            <div class="flex-col items-center justify-center mx-10 py-28">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mx-auto text-center">Our Services</h1>
                <p class="text-xl sm:text-2xl font-semibold text-white mx-auto text-center pt-4">With our real love and genuine passion for an optimized & robust solution, we offer wide range of services</p>
            </div>
        </div>
        <!-- Description End -->

        <!-- Service Card Start -->
        <div class="flex-wrap items-center justify-center mx-10 my-10">
            <div class="flex flex-wrap my-4 gap-5 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-2 md:gap-4 lg:gap-x-5">
                <div class="mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <div class="bg-webDevelopment bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
                    <h1 class="text-center font-Glory text-2xl font-semibold">Web Design & Development</h1>
                    <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">We believe in your trust!! Start your business with our expert service which helps you with business-related web design and development solutions.</p>
                </div>
                <div class="mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <div class="bg-apiDevelopment bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
                    <h1 class="text-center font-Glory text-2xl font-semibold">APIs Development</h1>
                    <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Are you an mobile application developer or a front end developer? Or you already have a front-end developer and looking for backend API support? We are right at your service with our expertise in Laravel!</p>
                </div>
                <div class="mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <div class="bg-laravelUpgrades bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
                    <h1 class="text-center font-Glory text-2xl font-semibold">Laravel Upgrades</h1>
                    <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Already having a Laravel application with you? And looking for help in upgrading it? or maybe optimization; Tech Renuka is at your service! Our Certified Team of Developers would love to help you out! </p>
                </div>
                <div class="mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <div class="bg-codeOptimization bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
                    <h1 class="text-center font-Glory text-2xl font-semibold">Code Optimization</h1>
                    <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Already having a Laravel App? But you are tired with it's sluggishness? Stay assured, Tech Renuka is here! We can assist you improve its performance by at least 2 - 3 times.</p>
                </div>
            </div>
        </div>
        <!-- Service Card End -->

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
            FooterComponent
        },
    }
</script>
