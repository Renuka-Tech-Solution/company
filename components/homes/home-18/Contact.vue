<template>
  <div class="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
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
    <div class="col-lg-5 offset-lg-1">
      <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
        Contact Us
      </h2>
      <h3 class="display-4 mb-8">
        Got any questions? Don't hesitate to get in touch.
      </h3>
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            src="/assets/img/icons/solid/pin.svg"
            class="icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4"
            style="width: 1.5rem; height: 1.5rem"
            alt="photo"
          />
        </div>
        <div>
          <h5 class="mb-0">Address</h5>
          <address>Moonshine St. 14/05 Light City, London</address>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            src="/assets/img/icons/solid/rotary.svg"
            class="icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4"
            style="width: 1.5rem; height: 1.5rem"
            alt="photo"
          />
        </div>
        <div>
          <h5 class="mb-0">Phone</h5>
          <p>00 (123) 456 78 90</p>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            src="/assets/img/icons/solid/emails.svg"
            class="icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4"
            style="width: 1.5rem; height: 1.5rem"
            alt="photo"
          />
        </div>
        <div>
          <h5 class="mb-0">E-mail</h5>
          <p class="mb-0">
            <a href="mailto:sandbox@email.com" class="link-body"
              >sandbox@email.com</a
            >
          </p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
