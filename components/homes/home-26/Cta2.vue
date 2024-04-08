<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 py-md-16">
      <div class="row mb-8">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Analyze Now</h2>
          <h3 class="display-4 mb-0">
            Wonder how much faster your website can go? Easily check your SEO
            Score now.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-lg-5 mx-auto">
          <form @submit.prevent="() => {}">
            <div class="form-floating input-group">
              <input
                type="url"
                class="form-control border-0"
                placeholder="Enter Website URL"
              />
              <label>Enter Website URL</label>
              <button class="btn btn-primary" type="button">Analyze</button>
            </div>
          </form>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <figure><nuxt-img src="/assets/img/photos/clouds.png" alt="photo" /></figure>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
