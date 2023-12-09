<template>
    <div class="overflow-x-hidden">
        <!-- Navbar Start -->
        <navbar-component />
        <!-- Navbar End -->

        <!-- Apply Now Form Start -->
        <!-- <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-8 lg:px-16 lg:py-10 lg:grid lg:grid-cols-2"> -->
        <div class="bg-slate-300 px-10 py-8 lg:px-16 lg:py-32 lg:grid lg:grid-cols-2">
          <div class="my-20">
              <div>
                  <h1 class="text-blue-900 font-bold font-Poppins flex-wrap text-3xl md:text-4xl lg:text-5xl">We’re hiring</h1>
                  <p class="text-black font-medium text-lg md:text-xl font-Poppins pt-3">Let's Connect to build your ideas into a real website.</p>
              </div>
          </div>
          <div class="transition duration-200 ease-in-out md:px-5 md:py-5 md:mx-20 mx-auto px-4 py-4 flex-wrap bg-white my-10 rounded-xl hover:shadow-xl hover:shadow-indigo-400">
              <div class="my-5 gap-1 flex flex-col">
                  <label for="FullName" class="font-medium">Full Name</label>
                  <input type="text" name="fullname" placeholder="Your Full Name" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
              </div>
              <div class="my-5 gap-1 flex flex-col">
                  <label for="Email" class="font-medium">Email ID</label>
                  <input type="email" name="email" placeholder="Email ID" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
              </div>
              <div class="my-5 gap-1 flex flex-col">
                  <label for="PhoneNumer" class="font-medium">Phone Numer</label>
                  <input type="number" name="phonenumber" placeholder="Phone Number" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
              </div>
              <div class="my-5 gap-1 flex flex-col">
                  <label for="Resume" class="font-medium">Upload Resume</label>
                  <input type="file" name="resume" placeholder="Your Resume" class="file:rounded-lg file:hover:bg-blue-900 file:border-0 file:px-3 file:py-1 file:text-white file:font-medium file:bg-blue-700">
              </div>
              <div class="my-5 gap-1 flex flex-col">
                  <label for="selfIntro" class="font-medium">Tell us more about yourself</label>
                  <textarea name="selfintro" rows="7" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full" placeholder="type about your self..."></textarea>
              </div>
              <button type="submit" class="bg-blue-700 py-2 px-6 text-white font-semibold font-Poppins text-lg hover:bg-blue-900 rounded-xl">Submit</button>
          </div>
        </div>
        <!-- Apply Now Form End -->

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
