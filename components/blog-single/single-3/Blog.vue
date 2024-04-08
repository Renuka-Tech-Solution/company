<template>
  <!-- /section -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row gx-lg-8 gx-xl-12">
        <div class="col-lg-8 order-lg-2">
          <div class="blog single">
            <div class="card">
              <figure class="card-img-top">
                <nuxt-img src="/assets/img/photos/b1.jpg" alt="photo" />
              </figure>
              <div class="card-body">
                <BlogSingleCommonContent />
                <!-- /.classic-view -->
                <hr />
                <BlogSingleCommonAuthor />
                <!-- /.social -->
                <hr />
                <BlogSingleCommonSimilerBlog />
                <!-- /.swiper-container -->
                <hr />
                <BlogSingleCommonComments />
                <!-- /#comments -->
                <hr />
                <BlogSingleCommonForm />
                <!-- /.comment-form -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.blog -->
        </div>
        <!-- /column -->
        <aside class="col-lg-4 sidebar mt-11 mt-lg-6">
          <BlogsCommonWidgets />
          <!-- /.widget -->
        </aside>
        <!-- /column .sidebar -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
