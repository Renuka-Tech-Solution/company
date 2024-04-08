<template>
  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 position-relative order-lg-2">
          <div
            class="shape bg-dot primary rellax w-16 h-20"
            data-rellax-speed="1"
            style="top: 3rem; left: 5.5rem"
          ></div>
          <div class="overlap-grid overlap-grid-2">
            <div class="item">
              <figure class="rounded shadow">
                <nuxt-img
                  src="/assets/img/photos/about2.jpg"
                  :width="450"
                  :height="450"
                  srcset="/assets/img/photos/about2@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <div class="item">
              <figure class="rounded shadow">
                <nuxt-img
                  src="/assets/img/photos/about3.jpg"
                  :width="450"
                  :height="450"
                  srcset="/assets/img/photos/about3@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <nuxt-img
            :width="410"
            :height="362"
            src="/assets/img/icons/lineal/megaphone.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Who Are We?</h2>
          <p class="lead fs-lg">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magana, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gy-3 gx-xl-8">
            <div v-for="(list, index) in lists" :key="index" class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li v-for="(item, itemIndex) in list.items" :key="itemIndex">
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
const lists = [
  {
    items: [
      { text: "Aenean eu leo quam ornare curabitur blandit tempus." },
      { text: "Nullam quis risus eget urna mollis ornare donec elit." },
    ],
  },
  {
    items: [
      { text: "Etiam porta sem malesuada magna mollis euismod." },
      { text: "Fermentum massa vivamus faucibus amet euismod." },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
