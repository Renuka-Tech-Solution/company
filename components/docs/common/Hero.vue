<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
          <h1 class="display-1 mb-3">{{ title }}</h1>
          <p class="lead px-xxl-11">
            {{ desc }}
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
defineProps(["title", "desc"]);
</script>

<style lang="scss" scoped></style>
