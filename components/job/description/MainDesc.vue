<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="blog single mt-n17">
            <div class="card shadow-lg">
              <div class="card-body">
                <h2 class="h1 mb-3">Job Description</h2>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  Cras mattis consectetur purus sit amet fermentum. Aenean
                  lacinia bibendum nulla sed consectetur. Curabitur blandit
                  tempus porttitor. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor. Nullam quis risus eget porta ac
                  consectetur vestibulum.
                </p>
                <p>
                  Donec sed odio dui consectetur adipiscing elit. Etiam
                  adipiscing tincidunt elit, eu convallis felis suscipit ut.
                  Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris.
                  Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean
                  tortor libero, condimentum ac laoreet vitae, varius tempor
                  nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                </p>
                <h3 class="h2 mb-3 mt-9">Responsibilities</h3>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div class="row gy-3 gx-xl-8">
                  <div class="col-xl-6">
                    <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li
                        v-for="(item, index) in checklistItems.slice(0, 2)"
                        :key="index"
                        :class="{ 'mt-3': index > 0 }"
                      >
                        <span><i class="uil uil-check"></i></span>
                        <span>{{ item.text }}</span>
                      </li>
                    </ul>
                  </div>
                  <!--/column -->
                  <div class="col-xl-6">
                    <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li
                        v-for="(item, index) in checklistItems.slice(2, 4)"
                        :key="index"
                        :class="{ 'mt-3': index > 0 }"
                      >
                        <span><i class="uil uil-check"></i></span>
                        <span>{{ item.text }}</span>
                      </li>
                    </ul>
                  </div>
                  <!--/column -->
                </div>
                <!--/.row -->
                <h3 class="h2 mb-3 mt-9">Requirements</h3>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div class="row gy-3 gx-xl-8 mb-10">
                  <div class="col-xl-6">
                    <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li
                        v-for="(item, index) in checklistItems.slice(0, 2)"
                        :key="index"
                        :class="{ 'mt-3': index > 0 }"
                      >
                        <span><i class="uil uil-check"></i></span>
                        <span>{{ item.text }}</span>
                      </li>
                    </ul>
                  </div>
                  <!--/column -->
                  <div class="col-xl-6">
                    <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li
                        v-for="(item, index) in checklistItems.slice(2, 4)"
                        :key="index"
                        :class="{ 'mt-3': index > 0 }"
                      >
                        <span><i class="uil uil-check"></i></span>
                        <span>{{ item.text }}</span>
                      </li>
                    </ul>
                  </div>
                  <!--/column -->
                </div>
                <!--/.row -->
                <a
                  href="mailto:apply@email.com"
                  class="btn btn-primary rounded-pill"
                  >Apply Now</a
                >
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.blog -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
