<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row d-flex align-items-start gy-10">
        <div class="col-lg-5 position-lg-sticky" style="top: 8rem">
          <h3 class="display-2 mb-5">
            The service I offer is specifically designed to meet your needs.
          </h3>
          <p class="mb-7">
            Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
            nulla non metus auctor fringilla. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet.
          </p>
          <a href="#" class="btn btn-lg btn-primary btn-icon btn-icon-end"
            >More Details <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!-- /column -->
        <div class="col-lg-6 ms-auto">
          <div
            v-for="(item, index) in cards"
            :key="index"
            :class="item.cardClass"
          >
            <div class="card-body d-flex flex-row">
              <div>
                <nuxt-img
                  :src="item.iconSrc"
                  :class="item.iconClass"
                  alt="photo"
                />
              </div>
              <div>
                <h3 class="fs-21 mb-2">{{ item.title }}</h3>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
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
const cards = [
  {
    id: 1,
    cardClass: "card bg-soft-fuchsia mb-6",
    iconSrc: "/assets/img/icons/lineal/search-2.svg",
    iconClass: "icon-svg icon-svg-md text-fuchsia me-5",
    title: "User Research",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 2,
    cardClass: "card bg-soft-aqua mb-6",
    iconSrc: "/assets/img/icons/lineal/puzzle-2.svg",
    iconClass: "icon-svg icon-svg-md text-aqua me-5",
    title: "Strategy & Planning",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 3,
    cardClass: "card bg-soft-yellow mb-6",
    iconSrc: "/assets/img/icons/lineal/smartphone.svg",
    iconClass: "icon-svg icon-svg-md text-yellow me-5",
    title: "App Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 4,
    cardClass: "card bg-soft-leaf mb-6",
    iconSrc: "/assets/img/icons/lineal/design.svg",
    iconClass: "icon-svg icon-svg-md text-leaf me-5",
    title: "Brand Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 5,
    cardClass: "card bg-soft-orange mb-6",
    iconSrc: "/assets/img/icons/lineal/video-editing.svg",
    iconClass: "icon-svg icon-svg-md text-orange me-5",
    title: "Motion Graphic",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 6,
    cardClass: "card bg-soft-grape",
    iconSrc: "/assets/img/icons/lineal/browser.svg",
    iconClass: "icon-svg icon-svg-md text-grape me-5",
    title: "Web Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
];
</script>

<style lang="scss" scoped></style>
