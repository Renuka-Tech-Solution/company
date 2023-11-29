<template>
  <div class="overflow-x-hidden">
    <!-- Navbar Start -->
    <navbar-component />
    <!-- Navbar End -->
  <div class=""></div>
    <!-- Description Start -->
    <div class="bg-serviceBg bg-cover bg-center h-[500px] lg:h-[350px] lg:w-[100vw]">
        <div class="flex-col items-center justify-center mx-10 py-28">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mx-auto text-center">About Tech Renuka Solution</h1>
            <p class="text-xl sm:text-2xl font-semibold text-white mx-auto text-center pt-4">We are a bunch of enthusiast developers that believe in quality code for quality solution.</p>
        </div>
    </div>
    <!-- Description End -->

    <!-- About Description Start -->
    <div class="mx-12 mt-10 sm:mx-10 sm:mt-16 md:mx-24 md:mt-16 lg:mx-28 lg:mt-16">
      <h1 class="font-Glory font-bold text-blue-900 text-3xl pb-2 sm:text-4xl lg:text-5xl lg:pb-2">The goal is to build your business.</h1>
      <p class="font-Glory font-normal text-lg py-3 md:text-lg lg:text-xl lg:py-3 flex-wrap">
        We, at Tech Renuka are a bunch of developers, that work towards building a reliable, scalable, and highly performant solution with quality code using our expertise in Laravel Framework. Whenever building a solution, we vision for a long term such that, your business isn't affected in the long run and you are serviced with quality work.
      </p>
      <p class="font-Glory font-normal text-lg py-3 md:text-lg lg:text-xl lg:py-3 flex-wrap">
        Each of our work passes through three stages: Analysis & Idea - where we work with you to produce an optimal solution, Design & Development - where we convert your idea into a solution and Testing - where the work is tested for uncountable times to have a best-in-class user experience.
      </p>
      <p class="font-Glory font-normal text-lg py-3 md:text-lg lg:text-xl lg:py-3 flex-wrap">
        We have a real love and genuine passion for an optimized & robust solution and are hugely successful. We believe in modularizations in order to deliver faster and optimized results. This helps us differentiate ourselves, develop new approaches, and deliver an outstanding level of service to all. Our success is driven by the commitment, work ethic, and exceptional communication skills of our team.
      </p>

      <!-- About Cards -->
      <div class="py-5 lg:py-5 lg:flex lg:gap-7 justify-center">
        <div class="bg-white lg:w-[350px] lg:h-[250px] my-4 py-5 mx-3 rounded-lg lg:py-4 lg:rounded-lg border-[2px] border-gray-400 hover:border-black lg:border-[2px] lg:border-gray-400 lg:hover:border-black">
          <div class="bg-vision bg-cover bg-center w-[90px] h-[80px] mx-auto"></div>
            <p class="flex-wrap font-Glory font-normal text-base text-center px-5">
              To be the Industry Leader in producing Highly Performant Solutions for the Challenging Problems.
            </p>
        </div>
        <div class="bg-white lg:w-[350px] lg:h-[250px] my-4 py-5 mx-3 rounded-lg lg:py-4 lg:rounded-lg border-[2px] border-gray-400 hover:border-black lg:border-[2px] lg:border-gray-400 lg:hover:border-black">
          <div class="bg-mission bg-cover bg-center w-[90px] h-[75px] mx-auto pb-[5px]"></div>
            <p class="flex-wrap font-Glory font-normal text-base text-center px-5">
              To produce a quality solution for everyone in cost-effective manner.
            </p>
        </div>
        <div class="bg-white lg:w-[350px] lg:h-[250px] my-4 py-5 mx-3 rounded-lg lg:py-4 lg:rounded-lg border-[2px] border-gray-400 hover:border-black lg:border-[2px] lg:border-gray-400 lg:hover:border-black">
          <div class="bg-values bg-cover bg-center w-[90px] h-[80px] mx-auto"></div>
            <p class="flex-wrap font-Glory font-normal text-base text-center px-5">
              We value User Experience! For every solution we produce, we aim for minimum user input for better automation in working.
            </p>
        </div>
      </div>
    </div>
    <!-- About Description End -->

    <!-- Number Increment Start -->
    <div class="lg:flex md:flex lg:mx-28 lg:justify-center md:gap-24 md:py-8 lg:gap-28 lg:py-10 justify-center">
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

    <!-- Our Clients Card Start -->
    <!-- Our Clients Card End -->

    <!-- Company Logos -->
    
    

    <!-- Footer Start -->
    <footer-component />
    <!-- Footer Start -->
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: "AboutView",
  data() {
    return {
      completedProjects: 50,
      numberOfClients: 25,
      experienceYears:8,
      currentProjectNumber: 0,
      currentClinetsNumber: 0,
      currentExperienceNumber:0
    }
  },
  components: {
    NavbarComponent,
    FooterComponent
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
      },50)

      // Number Of Clients
      const clientCount = setInterval(()=>{
        if(this.currentClinetsNumber < this.numberOfClients){
          this.currentClinetsNumber = this.currentClinetsNumber + 1
        }else{
          clearInterval(clientCount)
        }
      },50) 

      // Number Of Clients
      const experienceCount = setInterval(()=>{
        if(this.currentExperienceNumber < this.experienceYears){
          this.currentExperienceNumber = this.currentExperienceNumber + 1
        }else{
          clearInterval(experienceCount)
        }
      },100) 
    }
  },
  mounted(){
    this.startCounter()
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
