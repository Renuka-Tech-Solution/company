<template>
  <section class="wrapper bg-light">
    <div class="container pt-8 pt-md-14 pt-lg-17 pb-2 pb-lg-12">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Offer?</h2>
          <h3 class="display-4 mb-5">
            The service we offer is specifically designed to meet your needs.
          </h3>
          <p>
            Our Shopify website development service is meticulously tailored to fulfill your unique requirements, ensuring a perfect fit for your business.
          </p>
        </div>
        <div class="col-lg-7 order-lg-2">
          <div class="row gx-md-5 gy-5">
            <div
              v-for="(item, index) in cards"
              :key="index"
              :class="item.classes"
            >
              <div class="card" :class="item.cardClass">
                <div class="card-body">
                  <nuxt-img
                    :src="item.iconSrc"
                    :class="item.iconClass"
                    alt="photo"
                  />
                  <h4>{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
const cards = [
  {
    id: 1,
    classes: "col-md-5 offset-md-1 align-self-end",
    cardClass: "bg-pale-yellow",
    iconSrc: "/assets/img/icons/lineal/telephone-3.svg",
    iconClass: "icon-svg icon-svg-md text-yellow mb-3",
    title: "24/7 Support",
    description:
      "Expert support available round-the-clock for Shopify services.",
  },
  {
    id: 2,
    classes: "col-md-6 align-self-end",
    cardClass: "bg-pale-red",
    iconSrc: "/assets/img/icons/lineal/shield.svg",
    iconClass: "icon-svg icon-svg-md text-red mb-3",
    title: "Secure Payments",
    description:
      "Guaranteed secure transactions for your Shopify store's payment checkout.",
  },
  {
    id: 3,
    classes: "col-md-5",
    cardClass: "bg-pale-leaf",
    iconSrc: "/assets/img/icons/lineal/cloud-computing-3.svg",
    iconClass: "icon-svg icon-svg-md text-leaf mb-3",
    title: "Daily Updates",
    description: "Daily progress updates ensure transparency and timely completion.",
  },
  {
    id: 4,
    classes: "col-md-6 align-self-start",
    cardClass: "bg-pale-primary",
    iconSrc: "/assets/img/icons/lineal/analytics.svg",
    iconClass: "icon-svg icon-svg-md text-primary mb-3",
    title: "Market Research",
    description:
      "Tailored market research for Shopify to meet your unique needs",
  },
];
</script>

<style lang="scss" scoped></style>
