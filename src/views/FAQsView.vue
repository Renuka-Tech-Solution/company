<template>
  <div class="overflow-x-hidden">
    <!-- Navbar Start -->
    <navbar-component />
    <!-- Navbar End -->

    <div class="mx-5 mt-10 flex-wrap justify-center items-center h-[100vh]">
        <!-- Question 1 -->
        <div class="rounded-lg mx-10">
            <div class="relative flex gap-10" @click="toggleAnswer">
                <h1 class="text-center text-xl font-medium">Why choose Tech Renuka Solution?</h1>
                <h1 class="text-xl font-semibold">{{toggleIcon}}</h1>
                <p class="absolute top-10" v-if="showAnswer">
                    The goal isn’t to build a website. The goal is to build your business, we have highly skilled engineers who have extensive technical knowledge and experience with the most recent software standards. We have amassed a large body of knowledge that we use to deliver solutions that meet the needs, expectations, and budgets of our clients.
                </p>
            </div>
        </div>

        <!-- Question 2 -->
        <div class="rounded-lg mx-10">
            <div class="relative flex gap-10" @click="toggleAnswer">
                <h1 class="text-center text-xl font-medium">What services are offered?</h1>
                <h1 class="text-xl font-semibold">{{toggleIcon}}</h1>
                <p class="absolute top-10" v-if="showAnswer">
                    Laravel Development, API Development, Complete Project Development, Web Design, Optimization of existing applications, Custom Development
                </p>
            </div>
        </div>

        <!-- Question 3 -->
        <div class="rounded-lg mx-10">
            <div class="relative flex gap-10" @click="toggleAnswer">
                <h1 class="text-center text-xl font-medium">Why should I choose Tech Renuka Solution?</h1>
                <h1 class="text-xl font-semibold">{{toggleIcon}}</h1>
                <p class="absolute top-30" v-if="showAnswer">
                    The goal isn’t to build a website. The goal is to build your business, we have highly skilled engineers who have extensive technical knowledge and experience with the most recent software standards. We have amassed a large body of knowledge that we use to deliver solutions that meet the needs, expectations, and budgets of our clients.
                </p>
            </div>
        </div>

        <!-- Question 4  -->
        <div class="rounded-lg mx-10">
            <div class="relative flex gap-10" @click="toggleAnswer">
                <h1 class="text-center text-xl font-medium">Why choose Tech Renuka Solution?</h1>
                <h1 class="text-xl font-semibold">{{toggleIcon}}</h1>
                <p class="absolute top-10" v-if="showAnswer">
                    The goal isn’t to build a website. The goal is to build your business, we have highly skilled engineers who have extensive technical knowledge and experience with the most recent software standards. We have amassed a large body of knowledge that we use to deliver solutions that meet the needs, expectations, and budgets of our clients.
                </p>
            </div>
        </div>
    </div>

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
  data() {
    return {
        showAnswer: false,
        toggleIcon: '+',
    }
  },
  components: {
    NavbarComponent,
    FooterComponent
  },
  methods: {
    toggleAnswer() {
        this.showAnswer = !this.showAnswer
        this.toggleIcon = this.showAnswer ? '-' : '+';
    }
  },
//   computed: {
//     toggleIcon() {
//         return this.showAnswer ? '-' : '+' 
//     }
//   },
}
</script>
