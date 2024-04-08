<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="img-mask mask-1">
            <nuxt-img
              :width="610"
              :height="610"
              src="/assets/img/photos/about29.jpg"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-5 mb-5">
            Hi, I'm Julia, a documentary wedding and couples photographer
            currently working from and based in London.
          </h2>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio. Sed posuere consectetur est at
            lobortis facilisis in.
          </p>
          <div class="row counter-wrapper gy-6">
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="500" :min="50" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                K+
              </h3>
              <p>Shots Taken</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="500" :min="50" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                +
              </h3>
              <p>Happy Clients</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="25" :min="0" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p>Awards Won</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 gy-6 mt-8">
        <div class="col-lg-4">
          <h3>My Skills</h3>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Praesent commodo
            cursus magna vel consectetur purus sit amet fermentum.
          </p>
          <ul class="progress-list">
            <li
              v-for="skill in skills3"
              :key="skill.id"
              :class="{ 'mb-0': skill.id === skills3[skills3.length - 1].id }"
            >
              <p>{{ skill.name }}</p>
              <div class="progressbar line soft-primary">
                <CommonLineProgressbar :max="skill.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3>Why Choose Me?</h3>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
            mattis consectetur purus amet fermentum.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li v-for="(item, index) in checklistItems" :key="index">
              <i class="uil uil-check"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3>My Process</h3>
          <div
            v-for="(item, index) in tasks"
            :key="index"
            class="d-flex flex-row mb-5"
          >
            <div>
              <span
                class="icon btn btn-circle btn-soft-primary pe-none mt-1 me-5"
                ><span class="number fs-18">{{ item.number }}</span></span
              >
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { skills3 } from "~/data/skils";
import { checklistItems } from "~/data/features";

const tasks = [
  {
    number: 1,
    title: "Collect Ideas",
    description:
      "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.",
  },
  {
    number: 2,
    title: "Data Analysis",
    description:
      "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.",
  },
  {
    number: 3,
    title: "Finalize Product",
    description:
      "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.",
  },
];
</script>

<style lang="scss" scoped></style>
