<template>
  <div>
    <!-- Navbar -->
      <nav
        :class="{'sticky': isSticky}" @scroll="handleScroll"
        class="bg-white md:bg-transparent md:px-9 p-3 md:flex md:items-center md:justify-between fixed z-10 w-full top-0 md:fixed md:w-full md:top-0"
      >
        <div class="flex item-center justify-between relative">
          <img :src="require('../assets/image/tech-renuka-logo.png')" class="w-auto h-14 md:h-16" >
          <span
            class="text-4xl text-black cursor-pointer mx-2 md:hidden flex items-center"
            @click="toggleMenu"
          >
            {{ menuIcon }}
          </span>
        </div>
        <!-- v-if="isMenuOpen" -->
        <!-- <ul class="md:flex md:items-center md:static md:w-auto z-[-1] md:z-auto absolute bg-slate-800 w-full left-0 md:py-0 py-4 md:pl-0"> -->
        <ul
          :class="[
            'bg-transparent',
            'md:flex',
            'md:items-center',
            'md:static',
            'md:w-auto',
            'z-[-1]',
            'md:z-auto',
            'w-full',
            'left-0',
            'md:py-0',
            'py-4',
            'md:pl-0',
            'tracking-wider',
            { hidden: !isMenuOpen },
          ]"
        >
        <!-- Group Hover with UnderLine : group-hover hover:text-blue-800 after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center -->
          <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/" :class="{ 'activeMenu': currentPath === '/', 'sticky': isSticky }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
              HOME
            </router-link>
          </li>
          <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <div class="group relative cursor-pointer">
              <router-link to="/services" :class="{ 'activeMenu': currentPath === '/services', 'sticky': isSticky }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
                SERVICES
              </router-link>
              <!-- <div class="invisible absolute z-auto flex -translate-x-60 flex-col bg-sky-400 w-[100vw] py-1 group-hover:visible">
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                  </div> -->
            </div>
          </li>
          <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/career" :class="{ 'activeMenu': currentPath === '/career', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
              CAREER
            </router-link>
          </li>
          <!-- <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/portfolio" :class="{ 'activeMenu': currentPath === '/portfolio', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
              PORTFOLIO
            </router-link>
          </li> -->
          <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/about" :class="{ 'activeMenu': currentPath === '/about', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
              ABOUT
            </router-link>
          </li>
          <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/contact-us" :class="{ 'activeMenu': currentPath === '/contact-us', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
              CONTACT
            </router-link>
          </li>
          <!-- <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
            <router-link to="/test" :class="{ 'activeMenu': currentPath === '/test', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
                TEST 
              </router-link>
          </li> -->
          <!-- <li class="lg:mx-4 md:mx-3 my-4 md:my-0">
                <router-link to="/faqs" :class="{ 'activeMenu': currentPath === '/faqs', 'sticky': isSticky  }"
              class="relative text-black md:text-white text-lg sm:text-base lg:text-base font-Poppins font-semibold hover:text-blue-700"
            >
                    FAQs 
                  </router-link>
              </li> -->
          <!-- <li>
                <button class="bg-orange-500 px-6 py-2 mx-4 my-43 items-center hover:bg-black hover:text-bold text-white tetx-lg sm:text-base lg:text-lg font-Poppins font-black rounded-3xl">
                  OUR APPS
                </button>
              </li> -->
        </ul>
      </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSticky:false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isSticky =window.scrollY > 0;
    },
  },
  computed: {
    menuIcon() {
      return this.isMenuOpen ? "X" : "☰";
    },
    currentPath(){
      return this.$route.path;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
.activeMenu{
  color:blue !important;
  line-height: 1.75rem;
}

.activeMenu:hover::after {
  content: none !important;
}

.sticky {
  position: fixed;
  top: 0; 
  width: 100%;
  background-color: white !important;
  z-index: 1000;
  color: black !important;
}

.sticky .activeMenu {
  color: blue !important; 
}

@media only screen and (max-width: 640px){
  .sticky {
    position:fixed !important;
    width: 100%;
    background-color: white;
    z-index: 1000;
    color: black !important;
  }
}
</style>
