<template>
    <div class="overflow-x-hidden">
        <!-- Navbar Start -->
        <navbar-component />
        <!-- Navbar End -->

        <!-- Description Start -->
        <div class="bg-serviceBg bg-cover bg-center h-[100vh] sm:h-[350px] md:h-[400px] lg:h-[400px] lg:w-[100vw]">
            <div class="flex-col flex-wrap items-center justify-center mx-10 py-28">
                <h1 class="flex-wrap text-3xl sm:text-5xl lg:text-6xl font-black text-white mx-auto text-center">Let's Connenct</h1>
                <p class="flex-wrap text-xl sm:text-2xl font-semibold text-white mx-auto text-center pt-4">With our real love and genuine passion for an optimized & robust solution, we offer wide range of services</p>
            </div>
        </div>
        <!-- Description End -->

        <!-- Contact Form Start -->
        <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-8 lg:px-16 lg:py-10 lg:grid lg:grid-cols-2">
            <div class="py-7">
                <div>
                    <h1 class="text-blue-900 font-bold font-Glory flex-wrap text-3xl md:text-4xl lg:text-5xl">Get in Touch</h1>
                    <p class="text-black font-medium text-lg md:text-xl font-Glory pt-3">Let's Connect to build your ideas into a real website.</p>
                </div>
                <div class="py-10 md:py-14">
                    <h1 class="text-blue-900 font-bold font-Glory flex-wrap text-3xl md:text-4xl lg:text-5xl pb-3">Info</h1>
                    <p class="text-black font-medium text-lg md:text-xl font-Glory py-1">Swaminarayan Wadi, Rughnathpura Main Road, Opp. Man Mohak Ice Cream, Surat, Gujarat.</p>
                    <p class="text-black font-medium text-lg md:text-xl font-Glory py-1">info@techrenuka.com</p>
                    <p class="text-black font-medium text-lg md:text-xl font-Glory py-1">+91 1234567890</p>
                </div>
                <div class="flex mx-auto gap-5">
                    <!-- Facebook -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-black hover:text-blue-800"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>

                    <!-- Twitter -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-black hover:text-blue-800"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>

                    <!-- Linkedin -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-black hover:text-blue-800"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>

                    <!-- Github -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-black hover:text-blue-800"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </div>
            </div>
            <div class="md:px-5 md:py-5 md:mx-20 mx-auto px-4 py-4 flex-wrap bg-white my-10 rounded-xl shadow-lg">
                <div class="my-5 gap-1 flex flex-col">
                    <label for="FullName">Full Name</label>
                    <input type="text" name="fullname" placeholder="Your Full Name" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
                </div>
                <div class="my-5 gap-1 flex flex-col">
                    <label for="Email">Email ID</label>
                    <input type="email" name="email" placeholder="Email ID" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
                </div>
                <div class="my-5 gap-1 flex flex-col">
                    <label for="PhoneNumer">Phone Numer</label>
                    <input type="number" name="phonenumber" placeholder="Phone Number" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
                </div>
                <div class="my-5 gap-1 flex flex-col">
                    <label for="Subject">Subject</label>
                    <input type="text" name="subject" placeholder="Subject" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full">
                </div>
                <div class="my-5 gap-1 flex flex-col">
                    <label for="Message">Message</label>
                    <textarea name="message" rows="7" class="border-[1px] border-gray-500 rounded-md px-3 py-1 w-full" placeholder="type message..."></textarea>
                </div>
                <button type="submit" class="bg-blue-800 py-2 px-8 text-white font-bold font-Glory text-lg hover:bg-orange-500 rounded-lg">Submit</button>
            </div>
        </div>
        <!-- Contact Form End -->

        <!-- Footer Start -->
        <footer-component />
        <!-- Footer End -->
    </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
    export default {
        name: 'ContactView',
        components: {
            NavbarComponent,
            FooterComponent
        },
    }
</script>
