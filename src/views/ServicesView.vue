<template>
    <div class="overflow-x-hidden">
        <!-- Navbar Start -->
        <navbar-component />
        <!-- Navbar End -->

        <!-- Description Start -->
        <div class="bg-serviceBg bg-cover bg-center h-[500px] md:h-[400px] lg:h-[35rem] lg:w-[100vw]">
            <div class="flex-col items-center justify-center mx-10 py-28 lg:pt-56">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mx-auto text-center">Our Services</h1>
                <p class="text-xl sm:text-2xl font-semibold text-white mx-auto text-center pt-4">With our real love and genuine passion for an optimized & robust solution, we offer wide range of services</p>
            </div>
        </div>
        <!-- Description End -->

        <!-- Service Card Start -->
        <section class="flex-wrap items-center justify-center mx-10 my-24">
            <div class="flex flex-wrap my-4 gap-5 xl:grid xl:grid-4 xl:gap-6 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-2 md:gap-4 lg:gap-x-5">
                <div class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <!-- <div class=""> -->
                    <img :src="require('../assets/image/web-programming.png')" class="bg-gray-100 group-hover:bg-white pt-5 pb-[15%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pb-[10%] md:h-40 md:w-32 md:pb-[17%] lg:pb-[17%] lg:pt-[6%] xl:w-28 xl:pb-[12%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]">
                    <!-- </div> -->
                    <h1 class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white">Web Design & Development</h1>
                    <p class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white">We believe in your trust!! Start your business with our expert service which helps you with business-related web design and development solutions.</p>
                </div>
                <div class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <!-- <div class=""> -->
                    <img :src="require('../assets/image/api.png')" class="bg-gray-100 group-hover:bg-white pt-5 pb-[15%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[19%] md:pt-[7%] lg:pb-[21%] lg:pt-[6%] xl:w-28 xl:pb-[13%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]">
                    <!-- </div> -->
                    <h1 class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white">APIs Development</h1>
                    <p class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white">Are you an mobile application developer or a front end developer? Or you already have a front-end developer and looking for backend API support? We are right at your service with our expertise in Laravel!</p>
                </div>
                <div class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <!-- <div class=""> -->
                    <img :src="require('../assets/image/upgrade.png')" class="bg-gray-100 group-hover:bg-white pt-5 pb-[11%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[13%] md:pt-[6%] lg:pb-[17%] lg:pt-[6%] xl:w-28 xl:pb-[12%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]">
                    <!-- </div> -->
                    <h1 class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white">Laravel Upgrades</h1>
                    <p class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white">Already having a Laravel application with you? And looking for help in upgrading it? or maybe optimization; Tech Renuka is at your service! Our Certified Team of Developers would love to help you out! </p>
                </div>
                <div class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg">
                    <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
                    <!-- <div class=""> -->
                    <img :src="require('../assets/image/source-code.png')" class="bg-gray-100 group-hover:bg-white pt-5 pb-[12%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[17%] md:pt-[6%] lg:pb-[20%] lg:pt-[6%] xl:w-28 xl:pb-[11%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]">
                    <!-- </div> -->
                    <h1 class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white">Code Optimization</h1>
                    <p class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white">Already having a Laravel App? But you are tired with it's sluggishness? Stay assured, Tech Renuka is here! We can assist you improve its performance by at least 2 - 3 times.</p>
                </div>
            </div>
        </section>
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
        data() {
            return {
                // slickOptions: {
                //     slidesToShow: 2,
                //     slidesToScroll: 1,
                //     autoplay: true,
                //     autoplaySpeed: 3000,
                //     arrows: true,
                //     dots: true,
                //     infinite: true,
                // },
            }
        },
    }
</script>
