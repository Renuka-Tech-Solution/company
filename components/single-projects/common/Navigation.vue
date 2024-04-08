<template>
  <section class="wrapper bg-light">
    <div class="container py-10">
      <div class="row gx-md-6 gy-3 gy-md-0">
        <div
          class="col-md-8 align-self-center text-center text-md-start navigation"
        >
          <a
            href=""
            class="btn btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0 me-1"
            ><i class="uil uil-arrow-left"></i> Prev Post</a
          >
          <a
            href=""
            class="btn btn-soft-ash rounded-pill btn-icon btn-icon-end mb-0"
            >Next Post <i class="uil uil-arrow-right"></i
          ></a>
        </div>
        <!--/column -->
        <aside class="col-md-4 sidebar text-center text-md-end">
          <div class="dropdown share-dropdown btn-group">
            <button
              class="btn btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="uil uil-share-alt"></i> Share
            </button>
            <div class="dropdown-menu">
              <a
                v-for="(socialMedia, index) in socialMediaLinks"
                :key="index"
                class="dropdown-item"
                :href="socialMedia.link"
              >
                <i :class="socialMedia.iconClass"></i>{{ socialMedia.name }}
              </a>
            </div>
            <!--/.dropdown-menu -->
          </div>
          <!--/.share-dropdown -->
        </aside>
        <!-- /column .sidebar -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const socialMediaLinks = [
  { id: 1, name: "Twitter", iconClass: "uil uil-twitter", link: "#" },
  { id: 2, name: "Facebook", iconClass: "uil uil-facebook-f", link: "#" },
  { id: 3, name: "LinkedIn", iconClass: "uil uil-linkedin", link: "#" },
];
</script>

<style lang="scss" scoped></style>
