<template>
  <div class="overflow-x-hidden">
        
      <!-- Navbar Start -->
      <navbar-component />
      <!-- Navbar End -->

      <!-- Company Info Start -->
      <section class="h-[100vh] md:my-auto mx-auto md:h-[500px]">
        <div class="relative w-full h-screen md:h-[500px] overflow-hidden">
          <video
            class="object-cover w-full h-full absolute top-0 left-0 z-0"
            autoplay
            muted
            loop
          >
            <source :src="videoSource" type="video/mp4">
            
          </video>
          <div class="relative  items-center justify-center mx-20 mt-20">
            <h2 class="cmpLine1 text-2xl animate-fade-in md:text-3xl text-white font-Glory font-normal text-center">Expert waiting for you</h2>
            <h1 class="cmpLine2 text-4xl animate-fade-in md:text-5xl text-white font-Glory font-normal text-center py-2 lg:px-10">All in one ERP solution for your business</h1>
            <p class="cmpLine3 flex-wrap animate-txtfade-in text-xl mx-auto md:text-2xl text-white font-Glory font-normal text-center">
              Are you looking for management? We come up with full-fill your needs,as per your requirement we provide the best solution for your business which accomplishes your motives.
            </p>
          </div>
        <!-- <div class="relative flex flex-col flex-wrap mx-auto item-center">
          <h2 class="text-2xl animate-fade-in md:text-3xl text-black font-Glory font-normal text-center">Expert waiting for you</h2>
          <h1 class="text-4xl animate-fade-in md:text-5xl text-black font-Glory font-normal text-center py-2">All in one ERP solution for your business</h1>
        </div> -->
      </div>
      </section>
      <!-- Company Info End -->

      <!-- Our Service Start -->
      <section class="flex-wrap items-center justify-center mx-10 mt-4">
        <div class="text-center">
          <h1 class="serviceLine1 text-3xl text-blue-950 font-Glory font-extrabold md:pt-3">Our Services</h1>
          <p class="serviceLine2 mt-4 text-xl px-10 md:px-20 font-Glory font-normal md:py-2">Variation of services for revamping your business management. We are committed to providing the highest quality of services with high standards.</p>
        </div>
        
        <div class="flex flex-wrap my-4 gap-5 xl:grid xl:grid-4 xl:gap-6 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-2 md:gap-4 lg:gap-x-5">
          <div class="servicesCard mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
            <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
            <div class="bg-webDevelopment bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-2xl font-semibold">Web Design & Development</h1>
            <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">We believe in your trust!! Start your business with our expert service which helps you with business-related web design and development solutions.</p>
          </div>
          <div class="servicesCard mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
            <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
            <div class="bg-apiDevelopment bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-2xl font-semibold">APIs Development</h1>
            <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Are you an mobile application developer or a front end developer? Or you already have a front-end developer and looking for backend API support? We are right at your service with our expertise in Laravel!</p>
          </div>
          <div class="servicesCard mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
            <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
            <div class="bg-laravelUpgrades bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-2xl font-semibold">Laravel Upgrades</h1>
            <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Already having a Laravel application with you? And looking for help in upgrading it? or maybe optimization; Tech Renuka is at your service! Our Certified Team of Developers would love to help you out! </p>
          </div>
          <div class="servicesCard mx-auto flex-wrap bg-white shadow-xl shadow-slate-300 rounded-lg">
            <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
            <div class="bg-codeOptimization bg-cover bg-center h-20 w-20 md:h-24 md:w-24 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-2xl font-semibold">Code Optimization</h1>
            <p class="text-center text-lg font-Glory font-medium mx-5 my-5 pb-5">Already having a Laravel App? But you are tired with it's sluggishness? Stay assured, Tech Renuka is here! We can assist you improve its performance by at least 2 - 3 times.</p>
          </div>
          <!-- <div class="bg-white shadow-xl shadow-slate-300 rounded-md h-[400px] mt-7 md:mt-0 md:h-[400px] md:w-[300px] flex justify-center">
            <div class="flex flex-col item-center justify-center">
              <div 
               class="bg-webDevelopment h-16 w-16 md:h-[300px] md:w-[300px] mx-auto bg-cover bg-center md:bg-cover md:bg-center rounded-tr-md rounded-tl-md"></div>
              <div class="text-center p-2">
                <h2 class="text-xl font-Glory font-semibold text-black">Web Design & Development</h2>
                <p class="text-black font-Glory mt-2">Create stunning websites with our expert team of developers.</p>
                <a href="#" class="text-blue-500 font-Glory hover:underline mt-4 inline-block">Learn More</a>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-xl shadow-slate-300 rounded-md h-[400px] mt-7 md:mt-0 md:h-[400px] md:w-[300px] flex justify-center mx-auto">
            <div class="flex flex-col item-center justify-center">
              <div class="bg-apiDevelopment h-[300px] w-[300px] md:h-[300px] md:w-[300px] mx-auto bg-cover bg-center md:bg-cover md:bg-center rounded-tr-md rounded-tl-md"></div>
              <div class="text-center p-2">
                <h2 class="text-xl font-Glory font-semibold text-black">Web Design & Development</h2>
                <p class="text-black font-Glory mt-2">Create stunning websites with our expert team of developers.</p>
                <a href="#" class="text-blue-500 font-Glory hover:underline mt-4 inline-block">Learn More</a>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-xl shadow-slate-300 rounded-md h-[400px] mt-7 md:mt-0 md:h-[400px] md:w-[300px] flex justify-center mx-auto">
            <div class="flex flex-col item-center justify-center">
              <div class="bg-supoortImg h-[300px] w-[300px] md:h-[300px] md:w-[300px] mx-auto bg-cover bg-center md:bg-cover md:bg-center rounded-tr-md rounded-tl-md"></div>
              <div class="text-center p-2">
                <h2 class="text-xl font-Glory font-semibold text-black">Web Design & Development</h2>
                <p class="text-black font-Glory mt-2">Create stunning websites with our expert team of developers.</p>
                <a href="#" class="text-blue-500 font-Glory hover:underline mt-4 inline-block">Learn More</a>
              </div>
            </div>
          </div> -->
        </div>
      </section>
      <!-- Our Service End -->

      <!-- Why Choose Us Start -->
      <section class="flex-wrap mx-5">
        <h1 class="chooseLine1 text-3xl font-Glory font-extrabold text-center mx-auto mt-20">Why Choose Us?</h1>
        <p class="chooseLine2 text-xl font-Glory font-normal text-center mx-10 my-5">Our strong sense of identification with client projects means that we are constantly striving to provide solutions</p>
        <!-- Line -->
        <!-- <div class="flex mx-auto justify-center">
          <div class="h-1 w-36 border-b-4 border-black bg-black"></div>
        </div> -->

        <div class="mx-5 pt-5 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-5 md:px-14 md:grid md:grid-cols-2 md:gap-4">
          <div class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg">
            <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="bg-verifyImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-3xl font-medium">Committed to Quality</h1>
            <p class="text-center text-lg font-Glory font-normal mx-5 my-5 pb-5">Here at Tech Renuka, we commit to giving the best quality to the customer, with high quality and safety, with the promise that our apps fully secured and very innovative.</p>
          </div>
          <div class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg">
            <div class="bg-rose-500 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="bg-supportImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"></div>
            <h1 class="text-center font-Glory text-3xl font-medium">Quick Support</h1>
            <p class="text-center text-lg font-Glory font-normal mx-5 my-5 pb-5">Support is valuable if we provide on-time support when the customer is needed. We believe in quick support which may impact your business for development.</p>
          </div>
          <div class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg">
            <div class="bg-sky-600 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="bg-skillImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"></div>
            <h1 class="text-center text-3xl font-Glory font-medium">Skills & Experience</h1>
            <p class="text-center text-lg font-Glory font-normal mx-5 my-5 pb-5">Our development team is well experienced to fulfill customers' demands. We also keep in mind that our quality is always on a set which is also loved by our customers.</p>
          </div>
          <div class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg">
            <div class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="bg-choiceImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"></div>
            <h1 class="text-center text-3xl font-Glory font-medium">Wide range of services</h1>
            <p class="text-center text-lg font-Glory font-normal mx-5 my-5 pb-5">A wide range of services covers your whole business project in one place. We ensure the best quality and fastest delivery for your project work.</p>
          </div>
        </div>
        
      </section>
      <!-- Why Choose Us End -->

      <!-- Our Clients Start -->
      <section class="px-5 my-10 py-10 bg-gray-100">
        <h3 class="mx-auto text-center text-2xl text-orange-500 font-Glory font-semibold">Our Clients</h3>
        <h1 class="mx-auto text-center text-3xl font-Glory font-semibold py-5">See what our clients saying</h1>
        <div class="py-3">
          <!-- Review Card Start -->
          <div class="mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg md:w-[700px]">
            <div class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="md:flex md:pt-10 md:mx-24 md:item-center pt-5">
              <div class="bg-user1 bg-cover bg-center mx-auto h-28 w-28 mb-3 md:my-5 md:mr-10 rounded-full"></div>
              <div class="md:flex-col md:pt-8 md:justify-start">
                <h1 class="text-center md:text-left text-2xl font-Glory font-medium">Mark Wood</h1>
                <h1 class="text-center md:text-left text-lg font-Glory font-medium">ACH Tech Private Ltd. (CEO & Founder)</h1>

                <div class="flex gap-1 justify-center md:justify-start py-1">
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                </div>
              </div>
            </div>
            <p class="text-center text-lg font-Glory font-normal px-7 py-8 md:mx-16 md:pb-8">Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!</p>
          </div>
<!-- 
          <div class="mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg md:w-[700px]">
            <div class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="md:flex md:pt-10 md:mx-24 md:item-center pt-5">
              <div class="bg-user1 bg-cover bg-center mx-auto h-28 w-28 mb-3 md:my-5 md:mr-10 rounded-full"></div>
              <div class="md:flex-col md:pt-8 md:justify-start">
                <h1 class="text-center md:text-left text-2xl font-Glory font-medium">Mark Wood</h1>
                <h1 class="text-center md:text-left text-lg font-Glory font-medium">ACH Tech Private Ltd. (CEO & Founder)</h1>
              
                <div class="flex gap-1 justify-center md:justify-start py-1">
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                </div>
              </div>
            </div>
            <p class="text-center text-lg font-Glory font-normal px-7 py-8 md:mx-16 md:pb-8">Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!</p>
          </div>

          <div class="mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg md:w-[700px]">
            <div class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
            <div class="md:flex md:pt-10 md:mx-24 md:item-center pt-5">
              <div class="bg-user1 bg-cover bg-center mx-auto h-28 w-28 mb-3 md:my-5 md:mr-10 rounded-full"></div>
              <div class="md:flex-col md:pt-8 md:justify-start">
                <h1 class="text-center md:text-left text-2xl font-Glory font-medium">Mark Wood</h1>
                <h1 class="text-center md:text-left text-lg font-Glory font-medium">ACH Tech Private Ltd. (CEO & Founder)</h1>
              
                <div class="flex gap-1 justify-center md:justify-start py-1">
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                </div>
              </div>
            </div>
            <p class="text-center text-lg font-Glory font-normal px-7 py-8 md:mx-16 md:pb-8">Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!</p>
          </div> -->
          <!-- Review Card Start -->

     
        </div>
      </section>
      <!-- Our Clients End -->

      <!-- Number Increment Start -->
      <div class="numberIncrement lg:flex md:flex lg:mx-28 lg:justify-center md:gap-24 md:py-8 lg:gap-28 lg:py-10 justify-center">
        <!-- Completed Projects -->
        <div class="py-3">
          <div class="flex justify-center items-start text-indigo-600">
            <span v-for="(digit, index) in displayProjectNumber" :key="index" 
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
            >
            {{digit}}
            </span>
            <span class="text-4xl md:text-5xl lg:text-5xl font-black font-Glory">+</span>
          </div>
          <p class="text-center lg:text-center font-Glory font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3">Completed Projects</p>
        </div>

        <!-- Number Of Clients -->
        <div class="py-3">
          <div class="flex justify-center items-start text-indigo-600">
            <span v-for="(digit, index) in displayClientsNumber" :key="index" 
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
            >
            {{digit}}
            </span>
            <span class="text-4xl md:text-5xl lg:text-5xl font-black font-Glory">+</span>
          </div>
          <p class="text-center lg:text-center font-Glory font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3">Number Of Clients</p>
        </div>

        <!-- Experience Years -->
        <div class="py-3">
          <div class="flex justify-center items-start text-indigo-600">
            <span v-for="(digit, index) in displayExperienceNumber" :key="index" 
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
            >
            {{digit}}
            </span>
            <span class="text-4xl md:text-5xl lg:text-5xl font-black font-Glory">+</span>
          </div>
          <p class="text-center lg:text-center font-Glory font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3">Experince Years</p>
        </div>
      </div>
      <!-- Number Increment End -->
<!-- 
     <swiper 
        :modules="modules"
        :spaceBetween="20"
        :loop="true"
        :pagination="{clickable: true}"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }"
        
        :navigation="true"
        class="flex"
      >
        <swiper-slide v-for="(data, index) in sliderData" :key="index">
            <div class="mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg md:w-[700px]">
              <div class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div>
              <div class="md:flex md:pt-10 md:mx-24 md:item-center pt-5">
                <div class="bg-user1 bg-cover bg-center mx-auto h-28 w-28 mb-3 md:my-5 md:mr-10 rounded-full"></div>
                <div class="md:flex-col md:pt-8 md:justify-start">
                  <h1 class="text-center md:text-left text-2xl font-Glory font-medium">{{ data.name }}</h1>
                  <h1 class="text-center md:text-left text-lg font-Glory font-medium">{{ data.company }}</h1>
                
                  <div class="flex gap-1 justify-center md:justify-start py-1">
                    <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-5 w-5"></div>
                  </div>
                </div>
              </div>
              <p class="text-center text-lg font-Glory font-normal px-7 py-8 md:mx-16 md:pb-8">{{ data.review }}</p>
          </div>
        </swiper-slide>

      </swiper> -->
      

      <!-- Footer Start -->
      <footer-component />
      <!-- Footer End -->
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
// Install Swiper modules
// SwiperCore.use([Pagination, Autoplay]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      sliderData: [
        {
          name:"Shailesh Makwana",
          company:"ACH Tech Private Ltd. (CEO & Founder)",
          review:"Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!",
          img:"require('@/assets/image/user-1.jpg')",
        },
        {
          name:"ABC",
          company:"ACH Tech Private Ltd. (CEO & Founder)",
          review:"Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!",
          img:"require('@/assets/image/user-2.jpg')",
        },
        {
          name:"XYZ",
          company:"ACH Tech Private Ltd. (CEO & Founder)",
          review:"Excellent service and communication. This is I think the 4th project already, every time things have gone really smoothly. No reason to change, we'll be back again! Keep up the great work, and we'll keep bringing it over, thanks again!",
          img:"require('@/assets/image/user-3.jpg')",
        }
      ],
      completedProjects: 50,
      numberOfClients: 25,
      experienceYears:8,
      currentProjectNumber: 0,
      currentClinetsNumber: 0,
      currentExperienceNumber:0,
      videoSource: require('@/assets/video/Iconic Online Marketing Background.mp4')
    }
  },

  components: {
    NavbarComponent,
    FooterComponent,
    Swiper,
    SwiperSlide
  },

  methods: {
    startCounter(){
      // Completed Projects
      const projectCount = setInterval(()=>{
        if(this.currentProjectNumber < this.completedProjects){
          this.currentProjectNumber = this.currentProjectNumber + 1
        }else{
          clearInterval(projectCount)
        }
      },80)

      // Number Of Clients
      const clientCount = setInterval(()=>{
        if(this.currentClinetsNumber < this.numberOfClients){
          this.currentClinetsNumber = this.currentClinetsNumber + 1
        }else{
          clearInterval(clientCount)
        }
      },80) 

      // Number Of Clients
      const experienceCount = setInterval(()=>{
        if(this.currentExperienceNumber < this.experienceYears){
          this.currentExperienceNumber = this.currentExperienceNumber + 1
        }else{
          clearInterval(experienceCount)
        }
      },80) 
    }
  },
  mounted(){

    const tl = gsap.timeline();
    // Company Info-------------------------------
    tl.from('.cmpLine1',{
      x:100,
      scrub:1,
      duration:1,
    })
    tl.from('.cmpLine2',{
      x:-100,
      opacity:0,
      scrub:1,
      duration:1,
    })
    tl.from('.cmpLine3',{
      y:100,
      opacity:0,
      scrub:1,
      duration:1,
    })

    // Our Service--------------------------------
    tl.from('.serviceLine1, .serviceLine2',{
      opacity:0,
      duration:0.3,
      stagger:0.3,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.serviceLine1, .serviceLine2',
        // markers:true,
        start:'top 80%',
        end:'bottom 65%',
        scrub: 1, //smooth scrubbing
        once:true
      }
    })
    gsap.from('.servicesCard',{
      opacity:0,
      duration:0.1,
      stagger:0.2,
      ease: "sine.in",
      scrollTrigger:{
        trigger:'.servicesCard',
        // markers:true,
        start:'top 60%',
        end: 'bottom 15%',
        scrub: 1, //smooth scrubbing
        // once:true
      }
    })

    // Company Info-------------------------------
    tl.from('.chooseLine1, .chooseLine2',{
      opacity:0,
      duration:0.3,
      stagger:0.3,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.chooseLine1, .chooseLine2',
        // markers:true,
        start:'top 80%',
        end:'bottom 65%',
        scrub: 1, //smooth scrubbing
        once:true
      }
    })
    gsap.from('.chooseCard',{
      opacity:0,
      duration:0.3,
      delay:0.5,
      stagger:0.3,
      ease: "sine.in",
      scrollTrigger:{
        trigger:'.chooseCard',
        // markers:true,
        start:'top 70%',
        end:'bottom 55%',
        scrub: 1, //smooth scrubbing
        once:true
      }
    })

    // Add ScrollTrigger animations here
    gsap.from('.numberIncrement', {
      opacity: 0,
      // duration: 0.5,
      scrollTrigger: {
        trigger: '.numberIncrement',
        // markers:true,
        start: 'top 65%',
        end: 'bottom 50%',
        scrub:true,
        toggleActions: 'restart none none none',
        onEnter: this.startCounter, // Number Counting Start onEnter
        once:true
      },
    });
  },
  computed: {
    displayProjectNumber(){
      return this.currentProjectNumber.toString().split('')
    },
    displayClientsNumber(){
      return this.currentClinetsNumber.toString().split('')
    },
    displayExperienceNumber(){
      return this.currentExperienceNumber.toString().split('')
    }  
  }
}
</script>
