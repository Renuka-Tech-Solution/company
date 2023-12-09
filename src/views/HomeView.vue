<template>
  <div class="overflow-x-hidden">
    <!-- Navbar Start -->
    <navbar-component />
    <!-- Navbar End -->

    <!-- Company Info Start -->
    <section class="h-[100vh] md:my-auto mx-auto md:h-[500px]">
      <div class="relative w-full h-screen md:h-[35rem] overflow-hidden">
        <video
          class="object-cover w-full h-full absolute top-0 left-0 z-0"
          autoplay
          muted
          loop
        >
          <source
            :src="
              require('@/assets/video/Cmp Bg.mp4')
            "
            type="video/mp4"
          />
        </video>
        <div class="relative items-center justify-center mx-12 mt-40 lg:mx-20 lg:mt-56">
          <h2
            class="cmpLine1 text-2xl animate-fade-in md:text-3xl text-white font-Poppins font-medium text-center"
          >
            Expert waiting for you
          </h2>
          <h1
            class="cmpLine2 text-3xl animate-fade-in md:text-5xl text-white font-Poppins font-bold text-center py-2 lg:px-10"
          >
            All in one ERP solution for your business
          </h1>
          <p
            class="cmpLine3 flex-wrap animate-txtfade-in text-base mx-auto md:text-2xl text-white font-Poppins font-medium text-center"
          >
            Are you looking for management? We come up with full-fill your
            needs,as per your requirement we provide the best solution for your
            business which accomplishes your motives.
          </p>
        </div>
        <!-- <div class="relative flex flex-col flex-wrap mx-auto item-center">
          <h2 class="text-2xl animate-fade-in md:text-3xl text-black font-Poppins font-normal text-center">Expert waiting for you</h2>
          <h1 class="text-4xl animate-fade-in md:text-5xl text-black font-Poppins font-normal text-center py-2">All in one ERP solution for your business</h1>
        </div> -->
      </div>
    </section>
    <!-- Company Info End -->

    <!-- Our Service Start -->
    <section class="flex-wrap items-center justify-center mx-10 mt-20">
      <div class="text-center">
        <h1
          class="serviceLine1 text-4xl text-blue-800 font-Poppins font-bold md:pt-3"
        >
          IT Services we provides
        </h1>
        <!-- <font-awesome-icon icon="fa-user-secret" /> -->
        <p
          class="serviceLine2 mt-4 text-black text-xl px-4 md:px-20 font-Poppins font-normal md:py-2"
        >
          Variation of services for revamping your business management. We are
          committed to providing the highest quality of services with high
          standards.
        </p>
      </div>

      <div
        class="flex flex-wrap my-4 gap-5 xl:grid xl:grid-4 xl:gap-6 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-2 md:gap-4 lg:gap-x-5"
      >
        <div
          class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg"
        >
          <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
          <!-- <div class=""> -->
          <img
            :src="require('../assets/image/web-programming.png')"
            class="bg-gray-100 group-hover:bg-white pt-5 pb-[15%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pb-[10%] md:h-40 md:w-32 md:pb-[17%] lg:pb-[17%] lg:pt-[6%] xl:w-28 xl:pb-[12%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]"
          />
          <!-- </div> -->
          <h1
            class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white"
          >
            Web Design & Development
          </h1>
          <p
            class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white"
          >
            We believe in your trust!! Start your business with our expert
            service which helps you with business-related web design and
            development solutions.
          </p>
        </div>
        <div
          class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg"
        >
          <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
          <!-- <div class=""> -->
          <img
            :src="require('../assets/image/api.png')"
            class="bg-gray-100 group-hover:bg-white pt-5 pb-[17%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[19%] md:pt-[7%] lg:pb-[21%] lg:pt-[6%] xl:w-28 xl:pb-[13%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]"
          />
          <!-- </div> -->
          <h1
            class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white"
          >
            APIs Development
          </h1>
          <p
            class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white"
          >
            Are you an mobile application developer or a front end developer? Or
            you already have a front-end developer and looking for backend API
            support? We are right at your service with our expertise in Laravel!
          </p>
        </div>
        <div
          class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg"
        >
          <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
          <!-- <div class=""> -->
          <img
            :src="require('../assets/image/upgrade.png')"
            class="bg-gray-100 group-hover:bg-white pt-5 pb-[11%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[13%] md:pt-[6%] lg:pb-[17%] lg:pt-[6%] xl:w-28 xl:pb-[12%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]"
          />
          <!-- </div> -->
          <h1
            class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white"
          >
            Laravel Upgrades
          </h1>
          <p
            class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white"
          >
            Already having a Laravel application with you? And looking for help
            in upgrading it? or maybe optimization; Tech Renuka is at your
            service! Our Certified Team of Developers would love to help you
            out!
          </p>
        </div>
        <div
          class="group servicesCard flex-wrap bg-white hover:bg-[#1E40AF] shadow-xl shadow-slate-300 rounded-lg"
        >
          <!-- <div class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"></div> -->
          <!-- <div class=""> -->
          <img
            :src="require('../assets/image/source-code.png')"
            class="bg-gray-100 group-hover:bg-white pt-5 pb-[14%] p-4 h-32 w-24 sm:h-32 sm:w-24 sm:pt-0 sm:pb-[9%] md:h-40 md:w-32 md:pb-[17%] md:pt-[6%] lg:pb-[20%] lg:pt-[6%] xl:w-28 xl:pb-[11%] xl:pt-[5%] flex ml-8 mb-5 rounded-b-[65px]"
          />
          <!-- </div> -->
          <h1
            class="text-left ml-8 font-Poppins text-2xl font-semibold group-hover:text-white"
          >
            Code Optimization
          </h1>
          <p
            class="text-left text-lg font-Poppins font-medium mx-8 my-5 pb-5 group-hover:text-white"
          >
            Already having a Laravel App? But you are tired with it's
            sluggishness? Stay assured, Tech Renuka is here! We can assist you
            improve its performance by at least 2 - 3 times.
          </p>
        </div>
      </div>
    </section>
    <!-- Our Service End -->

    <!-- Why Choose Us Start -->
    <section class="flex-wrap">
      <h1
        class="chooseLine1 text-3xl font-Poppins font-extrabold text-blue-800 text-center mx-auto mt-20"
      >
        Why Choose Us?
      </h1>
      <p
        class="chooseLine2 text-xl font-Poppins font-normal text-center mx-10 my-5"
      >
        Our strong sense of identification with client projects means that we
        are constantly striving to provide solutions
      </p>
      <!-- Line -->
      <!-- <div class="flex mx-auto justify-center">
          <div class="h-1 w-36 border-b-4 border-black bg-black"></div>
        </div> -->

      <div
        class="mx-5 pt-5 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-5 md:px-14 md:grid md:grid-cols-2 md:gap-4"
      >
        <div
          class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg"
        >
          <div
            class="bg-purple-800 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"
          ></div>
          <div
            class="bg-verifyImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"
          ></div>
          <h1 class="text-center font-Poppins text-3xl font-medium">
            Committed to Quality
          </h1>
          <p
            class="text-center text-lg font-Poppins font-normal mx-5 my-5 pb-5"
          >
            Here at Tech Renuka, we commit to giving the best quality to the
            customer, with high quality and safety, with the promise that our
            apps fully secured and very innovative.
          </p>
        </div>
        <div
          class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg"
        >
          <div
            class="bg-rose-500 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"
          ></div>
          <div
            class="bg-supportImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"
          ></div>
          <h1 class="text-center font-Poppins text-3xl font-medium">
            Quick Support
          </h1>
          <p
            class="text-center text-lg font-Poppins font-normal mx-5 my-5 pb-5"
          >
            Support is valuable if we provide on-time support when the customer
            is needed. We believe in quick support which may impact your
            business for development.
          </p>
        </div>
        <div
          class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg"
        >
          <div
            class="bg-sky-600 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"
          ></div>
          <div
            class="bg-skillImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"
          ></div>
          <h1 class="text-center text-3xl font-Poppins font-medium">
            Skills & Experience
          </h1>
          <p
            class="text-center text-lg font-Poppins font-normal mx-5 my-5 pb-5"
          >
            Our development team is well experienced to fulfill customers'
            demands. We also keep in mind that our quality is always on a set
            which is also loved by our customers.
          </p>
        </div>
        <div
          class="chooseCard mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg"
        >
          <div
            class="bg-emerald-400 h-2 mx-auto md:mx-auto rounded-tl-lg rounded-tr-lg"
          ></div>
          <div
            class="bg-choiceImg bg-cover bg-center h-28 w-28 flex mx-auto my-5"
          ></div>
          <h1 class="text-center text-3xl font-Poppins font-medium">
            Wide range of services
          </h1>
          <p
            class="text-center text-lg font-Poppins font-normal mx-5 my-5 pb-5"
          >
            A wide range of services covers your whole business project in one
            place. We ensure the best quality and fastest delivery for your
            project work.
          </p>
        </div>
      </div>
    </section>
    <!-- Why Choose Us End -->

    <!-- Our Clients Start -->
    <section class="my-10 py-10">
      <h3
        class="mx-auto text-center uppercase text-3xl md:text-[40px] text-blue-800 font-Poppins font-bold"
      >
        Our Clients
      </h3>

      <!-- Company Logo Slider Start -->
      <div class="my-5 mx-8 md:my-5 md:mx-9 lg:my-10 lg:mx-20">
        <Slick
          class="flex justify-center items-center"
          :autoplay="true"
          :autoplaySpeed="1500"
          :cssEase="ease"
          :draggable="true"
          :infinite="true"
          :slidesToShow="4"
          :slidesToScroll="1"
          :speed="500"
          :arrows="false"
          :swipe="true"
          :touchMove="true"
          :useTransform="true"
          :responsive="[
              {
                breakpoint : 426,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint : 769,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            ]"
        >
          <a href="https://bloom-s.de/">
            <img
              :src="require('@/assets/Clients/Logo/bloom-s.gif')"
              class="h-20 px-2 md:h-21 md:px-3 lg:h-28 lg:px-5"
            />
          </a>
          <a href="https://www.fayolalearning.com/index.html">
            <img
              :src="require('@/assets/Clients/Logo/Fayola Learning.png')"
              class="h-20 px-2 md:h-21 md:px-2 lg:h-28 lg:px-4"
            />
          </a>
          <a href="https://www.lohatk.sa/home">
            <img
              :src="require('@/assets/Clients/Logo/Lohatk.png')"
              class="h-20 px-2 md:h-21 md:px-2 lg:h-28 lg:px-5"
            />
          </a>
          <!-- <a href="#"> -->
          <img
            :src="require('@/assets/Clients/Logo/tutionmate.png')"
            class="h-20 px-2 md:h-21 md:px-3 lg:h-28 lg:px-5"
          />
          <!-- </a> -->
          <!-- <a href="#"> -->
          <img
            :src="require('@/assets/Clients/Logo/Kisaan.png')"
            class="h-20 px-2 md:h-21 md:px-3 lg:h-28 lg:px-5"
          />
          <!-- </a> -->
        </Slick>
      </div>
      <!-- Company Logo Slider End -->

      <div class="mx-0 my-5">
        <h1
          class="mx-auto text-center text-xl md:text-3xl font-Poppins font-bold py-5"
        >
          See what our clients say...
        </h1>

        <!-- Company Review Slider Start -->
        <div class="mx-8 lg:mx-64">
          <Slick
            class="flex justify-center items-center"
            :autoplay="true"
            :autoplaySpeed="2000"
            :cssEase="ease"
            :draggable="true"
            :infinite="true"
            :slidesToShow="1"
            :slidesToScroll="1"
            :speed="500"
            :swipe="true"
            :touchMove="true"
            :useTransform="true"
            :accessibility="true"
            :dots="true"
            :responsive="[
              {
                breakpoint : 426,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint : 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            ]"
          > 
            <!-- Card 1 -->
            <div
              class="mx-auto bg-blue-500 w-[250px] h-[420px] md:h-[350px] md:w-[700px] lg:h-[330px] text-white font-Poppins lg:py-4"
            >
              <div class="flex md:flex md:mx-4 md:item-center pt-5 px-6 lg:pt-0">
                <img
                  :src="require('@/assets/Clients/Image/Men.jpg')"
                  class="h-20 w-20 mb-2 mt-3 mr-4 lg:h-24 lg:w-24 lg:mb-3 md:mt-4 md:mr-6 rounded-full"
                />
                <div class="mt-4 md:flex-col lg:pt-1 md:justify-start">
                  <h1
                    class="text-left md:text-left text-xl lg:text-2xl font-bold"
                  >
                    skello1
                  </h1>
                  <h1
                    class="text-left md:text-left text-base lg:text-lg font-medium"
                  >
                    United States
                  </h1>

                  <div class="flex gap-1 justify-left md:justify-start py-1">
                    <font-awesome-icon icon="star" />
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                  </div>
                </div>
              </div>
              <p
                class="text-left text-base md:text-lg lg:text-lg font-normal py-4 px-6 lg:px-7 md:mx-8 md:pb-8 lg:py-2"
              >
                It is always a pleasure working with this company. Always quality work with 
                attention to detail and always on time. I would suggest everybody to work with company. 
                I can say this confidently, because I have been working Tech Renuka since Summer of 2014. 
                I can't believe it's been nine years. Keep up the good work Tech Renuka.
              </p>
            </div>
            <!-- Card 2 -->
            <div
              class="mx-auto bg-blue-500 w-[250px] h-[420px] md:h-[350px] md:w-[700px] lg:h-[330px] text-white font-Poppins lg:py-4"
            >
              <div class="flex md:flex md:mx-8 md:item-center pt-5 px-6 lg:pt-0">
                <img
                  :src="require('@/assets/Clients/Image/Men.jpg')"
                  class="h-20 w-20 mb-2 mt-3 mr-4 lg:h-24 lg:w-24 lg:mb-3 md:mt-4 md:mr-6 rounded-full"
                />
                <div class="mt-4 md:flex-col lg:pt-1 md:justify-start">
                  <h1
                    class="text-left md:text-left text-xl lg:text-2xl font-bold"
                  >
                    mh_tech5
                  </h1>
                  <h1
                    class="text-left md:text-left text-base lg:text-lg font-medium"
                  >
                    Saudi Arabia
                  </h1>

                  <div class="flex gap-1 justify-left md:justify-start py-1">
                    <font-awesome-icon icon="star" />
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                  </div>
                </div>
              </div>
              <p
                class="text-left text-base md:text-lg lg:text-lg font-normal py-4 px-6 lg:px-7 md:mx-8 md:pb-8 lg:py-2"
              >
                Excellent service and communication. This is I think the 4th project already, 
                every time things have gone really smoothly. No reason to change, we'll be back again! 
                Keep up the great work, and we'll keep bringing it over, thanks again!
              </p>
            </div>
            <!-- Card 3 -->
            <div
              class="mx-auto bg-blue-500 w-[250px] h-[420px] md:h-[350px] md:w-[700px] lg:h-[330px] text-white font-Poppins lg:py-4"
            >
              <div class="flex md:flex md:mx-8 md:item-center pt-5 px-6 lg:pt-0">
                <img
                  :src="require('@/assets/Clients/Image/haileyals.jpg')"
                  class="h-20 w-20 mb-2 mt-3 mr-4 lg:h-24 lg:w-24 lg:mb-3 md:mt-4 md:mr-6 rounded-full"
                />
                <div class="mt-4 md:flex-col lg:pt-1 md:justify-start">
                  <h1
                    class="text-left md:text-left text-xl lg:text-2xl font-bold"
                  >
                    haileyals
                  </h1>
                  <h1
                    class="text-left md:text-left text-base lg:text-lg font-medium"
                  >
                    United Arab Emirates
                  </h1>

                  <div class="flex gap-1 justify-left md:justify-start py-1">
                    <font-awesome-icon icon="star" />
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                  </div>
                </div>
              </div>
              <p
                class="text-left text-base md:text-lg lg:text-lg font-normal py-4 px-6 lg:px-7 md:mx-8 md:pb-8 lg:py-2"
              >
                Really happy with the delivery. Tech Renuka Solution is very patient and takes the time 
                to understand what you want and does his very best. Company work is phenomenal. 
                I have worked with 6 company before Tech Renuka. Tech Renuka Company experience exceeds a lot of 
                people. I am thrilled to have met this Company!
              </p>
            </div>
            <!-- Card 4 -->
            <div
              class="mx-auto bg-blue-500 w-[250px] h-[420px] md:h-[350px] md:w-[700px] lg:h-[330px] text-white font-Poppins lg:py-4"
            >
              <div class="flex md:flex md:mx-8 md:item-center pt-5 px-6 lg:pt-0">
                <img
                  :src="require('@/assets/Clients/Image/Men.jpg')"
                  class="h-20 w-20 mb-2 mt-3 mr-4 lg:h-24 lg:w-24 lg:mb-3 md:mt-4 md:mr-6 rounded-full"
                />
                <div class="mt-4 md:flex-col lg:pt-1 md:justify-start">
                  <h1
                    class="text-left md:text-left text-xl lg:text-2xl font-bold"
                  >
                    sulimansafi328
                  </h1>
                  <h1
                    class="text-left md:text-left text-base lg:text-lg font-medium"
                  >
                    Australia
                  </h1>

                  <div class="flex gap-1 justify-left md:justify-start py-1">
                    <font-awesome-icon icon="star" />
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                  </div>
                </div>
              </div>
              <p
                class="text-left text-base md:text-lg lg:text-lg font-normal py-4 px-6 lg:px-7 md:mx-8 md:pb-8 lg:py-2"
              >
                Great work as expected. Tech Renuka is extremely Hard working and has a great problem 
                solving skills I would strongly recommend these company for anyone for their tasks and projects. 
                Would come back in the future with more projects.
              </p>
            </div>
            <!-- Card 5 -->
            <div
              class="mx-auto bg-blue-500 w-[250px] h-[420px] md:h-[350px] md:w-[700px] lg:h-[330px] text-white font-Poppins lg:py-4"
            >
              <div class="flex md:flex md:mx-8 md:item-center pt-5 px-6 lg:pt-0">
                <img
                  :src="require('@/assets/Clients/Image/Men.jpg')"
                  class="h-20 w-20 mb-2 mt-3 mr-4 lg:h-24 lg:w-24 lg:mb-3 md:mt-4 md:mr-6 rounded-full"
                />
                <div class="mt-4 md:flex-col lg:pt-1 md:justify-start">
                  <h1
                    class="text-left md:text-left text-xl lg:text-2xl font-bold"
                  >
                    aniston_j
                  </h1>
                  <h1
                    class="text-left md:text-left text-base lg:text-lg font-medium"
                  >
                    United States
                  </h1>

                  <div class="flex gap-1 justify-leftmd:justify-start py-1">
                    <font-awesome-icon icon="star" />
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                    <div class="bg-ratingStar bg-cover bg-center h-4 w-4 lg:h-5 lg:w-5"></div>
                  </div>
                </div>
              </div>
              <p
                class="text-left text-base md:text-lg lg:text-lg font-normal py-4 px-6 lg:px-7 md:mx-8 md:pb-8 lg:py-2"
              >
                Accuracy is excellent.Quality of work produced is outstanding.highly recommended!!
              </p>
            </div>

          </Slick>
        </div>
        <!-- Company Review Slider End -->

      </div>
    </section>
    <!-- Our Clients End -->

    <!-- Number Increment Start -->
    <div
      class="numberIncrement lg:flex md:flex lg:mx-28 lg:justify-center md:gap-24 md:py-8 lg:gap-28 lg:py-10 justify-center"
    >
      <!-- Completed Projects -->
      <div class="py-3">
        <div class="flex justify-center items-start text-indigo-600">
          <span
            v-for="(digit, index) in displayProjectNumber"
            :key="index"
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
          >
            {{ digit }}
          </span>
          <span
            class="text-4xl md:text-5xl lg:text-5xl font-black font-Poppins"
            >+</span
          >
        </div>
        <p
          class="text-center lg:text-center font-Poppins font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3"
        >
          Completed Projects
        </p>
      </div>

      <!-- Number Of Clients -->
      <div class="py-3">
        <div class="flex justify-center items-start text-indigo-600">
          <span
            v-for="(digit, index) in displayClientsNumber"
            :key="index"
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
          >
            {{ digit }}
          </span>
          <span
            class="text-4xl md:text-5xl lg:text-5xl font-black font-Poppins"
            >+</span
          >
        </div>
        <p
          class="text-center lg:text-center font-Poppins font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3"
        >
          Number Of Clients
        </p>
      </div>

      <!-- Experience Years -->
      <div class="py-3">
        <div class="flex justify-center items-start text-indigo-600">
          <span
            v-for="(digit, index) in displayExperienceNumber"
            :key="index"
            class="text-6xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-semibold text-center transform transition-transform duration-500"
          >
            {{ digit }}
          </span>
          <span
            class="text-4xl md:text-5xl lg:text-5xl font-black font-Poppins"
            >+</span
          >
        </div>
        <p
          class="text-center lg:text-center font-Poppins font-medium text-base pt-2 md:text-lg lg:text-xl lg:py-3"
        >
          Experince Years
        </p>
      </div>
    </div>
    <!-- Number Increment End -->

    <!-- Footer Start -->
    <footer-component />
    <!-- Footer End -->
  </div>
</template>

<script>
//GSAP Libraries
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//Slick-Slider Libraries
import Slick from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "HomeView",
  data() {
    return {
      completedProjects: 50,
      numberOfClients: 25,
      experienceYears: 8,
      currentProjectNumber: 0,
      currentClinetsNumber: 0,
      currentExperienceNumber: 0,
    };
  },

  components: {
    NavbarComponent,
    FooterComponent,
    Slick,
  },

  methods: {
    startCounter() {
      // Completed Projects
      const projectCount = setInterval(() => {
        if (this.currentProjectNumber < this.completedProjects) {
          this.currentProjectNumber = this.currentProjectNumber + 1;
        } else {
          clearInterval(projectCount);
        }
      }, 80);

      // Number Of Clients
      const clientCount = setInterval(() => {
        if (this.currentClinetsNumber < this.numberOfClients) {
          this.currentClinetsNumber = this.currentClinetsNumber + 1;
        } else {
          clearInterval(clientCount);
        }
      }, 80);

      // Number Of Clients
      const experienceCount = setInterval(() => {
        if (this.currentExperienceNumber < this.experienceYears) {
          this.currentExperienceNumber = this.currentExperienceNumber + 1;
        } else {
          clearInterval(experienceCount);
        }
      }, 80);
    },
  },
  mounted() {
    const tl = gsap.timeline();
    // Company Info-------------------------------
    tl.from(".cmpLine1", {
      y: 50,
      scrub: 1,
      duration: 1,
    });
    tl.from(".cmpLine2", {
      y: 50,
      opacity: 0,
      scrub: 1,
      duration: 1,
    });
    tl.from(".cmpLine3", {
      y: 50,
      opacity: 0,
      scrub: 1,
      duration: 1,
      delay: 0.5,
    });

    // Our Service--------------------------------
    tl.from(".serviceLine1, .serviceLine2", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".serviceLine1, .serviceLine2",
        // markers:true,
        start: "top 80%",
        end: "bottom 65%",
        scrub: 1, //smooth scrubbing
        once: true,
      },
    });
    gsap.from(".servicesCard", {
      opacity: 0,
      // duration:0.1,
      stagger: 0.1,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".servicesCard",
        // markers:true,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1, //smooth scrubbing
        once: true,
      },
    });

    // Company Info-------------------------------
    tl.from(".chooseLine1, .chooseLine2", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".chooseLine1, .chooseLine2",
        // markers:true,
        start: "top 80%",
        end: "bottom 65%",
        scrub: 1, //smooth scrubbing
        once: true,
      },
    });
    gsap.from(".chooseCard", {
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      stagger: 0.3,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".chooseCard",
        // markers:true,
        start: "top 70%",
        end: "bottom 55%",
        scrub: 1, //smooth scrubbing
        once: true,
      },
    });

    // Add ScrollTrigger animations here
    gsap.from(".numberIncrement", {
      opacity: 0,
      // duration: 0.5,
      scrollTrigger: {
        trigger: ".numberIncrement",
        // markers:true,
        start: "top 65%",
        end: "bottom 50%",
        scrub: true,
        toggleActions: "restart none none none",
        onEnter: this.startCounter, // Number Counting Start onEnter
        once: true,
      },
    });
  },
  computed: {
    displayProjectNumber() {
      return this.currentProjectNumber.toString().split("");
    },
    displayClientsNumber() {
      return this.currentClinetsNumber.toString().split("");
    },
    displayExperienceNumber() {
      return this.currentExperienceNumber.toString().split("");
    },
  },
};
</script>
<style>
.slick-dragging {
  cursor: grabbing;
}

/* Set grab cursor when hover over draggable element */
.slick-list {
  cursor: grab;
}

</style>
