<template>
  <div class="row position-relative mb-15 mb-md-17">
    <figure
      class="rounded position-absolute d-none d-lg-block"
      style="
        top: 50%;
        right: 0;
        width: 45%;
        height: auto;
        transform: translateY(-50%);
        z-index: 2;
      "
    >
      <nuxt-img
        src="/assets/img/photos/tei1.jpg"
        srcset="/assets/img/photos/tei1@2x.jpg 2x"
        alt="photo"
      />
    </figure>
    <div class="col-lg-9 text-center">
      <div class="card bg-gray">
        <div class="card-body p-md-10 py-xxl-16">
          <div class="row gx-0">
            <div class="col-lg-8 ps-xl-10">
              <span class="ratings five fs-20 mb-3"></span>
              <blockquote class="border-0 fs-lg mb-0">
                <p>
                  “Donec id elit non mi porta gravida at eget metus. Vivamus
                  mollis est non commodo luctus, nisi erat porttitor ligula,
                  eget lacinia odio sem nec elit. Duis mollis porta est non
                  commodo luctus.”
                </p>
                <div
                  class="blockquote-details justify-content-center text-center"
                >
                  <div class="info p-0">
                    <h4 class="ls-sm mb-1">Coriss Ambady</h4>
                    <p class="mb-0">Financial Analyst</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
