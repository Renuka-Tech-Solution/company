<template>
  <section id="snippet-14" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center mb-16 mb-md-18">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="img-mask mask-3 px-xxl-5">
            <nuxt-img
              :width="560"
              :height="525"
              src="/assets/img/avatars/avatar.jpg"
              srcset="/assets/img/avatars/avatar@2x.jpg 2x"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-2 mb-3">More about me</h2>
          <p class="lead fs-24">
            👋 Hello! I'm Camille, a multidisciplinary product designer 🧸 based
            in New York City 🚕. I’m very passionate about the work 💌 that I
            do.
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh ut fermentum massa justo sit
            amet risus.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur.
          </p>
          <a href="#" class="btn btn-primary btn-icon btn-icon-end mt-2"
            >Learn More <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 gy-10">
        <div class="col-lg-5 mx-auto">
          <h2 class="display-2 mb-3">My experiences</h2>
          <p class="lead fs-24 pe-xxl-8">
            I've had the pleasure to work with companies 🏢 across a variety of
            industries 🏛️ I'm always interested in new ✨ and exciting
            adventures 🧨
          </p>
          <a href="#" class="btn btn-primary btn-icon btn-icon-end mt-2"
            >Download Resume <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!--/column -->
        <div class="col-lg-7">
          <ul class="timeline">
            <li
              v-for="experience in experiences"
              :key="experience.id"
              class="timeline-item"
            >
              <div class="timeline-info meta fs-14">
                {{ experience.duration }}
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ experience.title }}</h3>
                <p>{{ experience.description }}</p>
              </div>
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { experiences } from "~/data/experiences";
</script>

<style lang="scss" scoped></style>
