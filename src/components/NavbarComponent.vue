<template>
  <div>
    <!-- Navbar -->
    <header class="sticky">
      <nav
        class="bg-blue-950 md:px-10 p-4 md:flex md:items-center md:justify-between relative z-10"
      >
        <div class="flex item-center justify-between relative">
          <router-link
            to="/"
            class="flex text-white text-lg font-Glory font-black"
          >
            Tech Renuka
          </router-link>
        
          <span
            class="text-2xl text-white cursor-pointer mx-2 md:hidden block"
            @click="toggleMenu"
          >
            {{ menuIcon }}
          </span>
        </div>
        <!-- v-if="isMenuOpen" -->
        <!-- <ul class="md:flex md:items-center md:static md:w-auto z-[-1] md:z-auto absolute bg-slate-800 w-full left-0 md:py-0 py-4 md:pl-0"> -->
        <ul
          :class="[
            'bg-blue-950',
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
            { hidden: !isMenuOpen },
          ]"
        >
          <li class="mx-4 my-4 md:my-0">
            <router-link to="/" :class="{ 'text-orange-400': currentPath === '/' }"
              class="relative text-white text-lg font-Glory font-bold hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
            >
              Home
            </router-link>
          </li>
          <li class="mx-4 my-4 md:my-0">
            <div class="group relative cursor-pointer">
              <router-link
                to="/services"
                :class="{ 'text-orange-400': currentPath === '/services' }"
                class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
              >
                Services
              </router-link>
              <!-- <div class="invisible absolute z-auto flex -translate-x-60 flex-col bg-sky-400 w-[100vw] py-1 group-hover:visible">
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                    <a href="#" class="block text-bold text-base font-bold">Web Design and Development</a>
                  </div> -->
            </div>
          </li>
          <li class="mx-4 my-4 md:my-0">
            <router-link
              to="/portfolio"
              :class="{ 'text-orange-400': currentPath === '/portfolio' }"
              class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
            >
              Portfolio
            </router-link>
          </li>
          <li class="mx-4 my-4 md:my-0">
            <router-link
              to="/about"
              :class="{ 'text-orange-400': currentPath === '/about' }"
              class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
            >
              About
            </router-link>
          </li>
          <li class="mx-4 my-4 md:my-0">
            <router-link
              to="/contact-us"
              :class="{ 'text-orange-400': currentPath === '/contact-us' }"
              class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
            >
              Contact
            </router-link>
          </li>
          <li class="mx-4 my-4 md:my-0">
            <router-link
              to="/career"
              :class="{ 'text-orange-400': currentPath === '/career' }"
              class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
            >
              Career
            </router-link>
          </li>
          <!-- <li class="mx-4 my-4 md:my-0">
            <router-link to="/test" class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-['']
              after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center
              ">
                Test 
              </router-link>
          </li> -->
          <!-- <li class="mx-4 my-4 md:my-0">
                <router-link to="/faqs" class="relative text-white text-lg font-Glory font-bold group-hover hover:text-orange-400 after:block after:content-['']
                  after:absolute after:h-[2px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center
                  ">
                    FAQs 
                  </router-link>
              </li> -->
          <!-- <li>
                <button class="bg-orange-500 px-6 py-2 mx-4 my-43 items-center hover:bg-white hover:text-bold text-white tetx-lg font-Glory font-black rounded-3xl">
                  Our Apps
                </button>
              </li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
};
</script>
<style>
.text-orange-400{
  color:orange !important;
}
</style>
