<template>
  <div class="row gx-3 gy-10 gy-lg-0 align-items-center">
    <div class="col-lg-6">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/3d3.png"
          srcset="/assets/img/illustrations/3d3@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 ms-auto">
      <h2 class="fs-16 text-uppercase text-primary mb-3">Let’s Talk</h2>
      <h3 class="display-4 mb-3">
        Let's make something great together. We are trusted by over 5000+
        clients.
      </h3>
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </p>
      <nuxt-link to="/signup" class="btn btn-primary rounded mt-2"
        >Join Us</nuxt-link
      >
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
