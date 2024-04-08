<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container py-16 py-md-18">
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-8 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i3.png"
              srcset="/assets/img/illustrations/i3@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Analyze Now</h2>
          <h3 class="display-4 mb-5">
            Wonder how much faster your website can go? Easily check your SEO
            Score now.
          </h3>
          <p class="mb-7">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row">
            <div class="col-lg-9">
              <form @submit.prevent="() => {}">
                <div class="form-floating input-group">
                  <input
                    type="url"
                    class="form-control"
                    placeholder="Enter Website URL"
                  />
                  <label>Enter Website URL</label>
                  <button class="btn btn-primary" type="button">Check</button>
                </div>
              </form>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
