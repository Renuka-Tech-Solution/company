<template>
  <section class="wrapper bg-light angled upper-end">
    <div class="container pb-11">
      <div class="row mb-14 mb-md-16">
        <div class="col-xl-10 mx-auto mt-n19">
          <div class="card">
            <div class="row gx-0 gap-10">
              <div class="col-lg-6 align-self-stretch">
                <div class="map map-full rounded-top rounded-lg-start">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.7511137099661!2d72.8068854780727!3d21.22040180195951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ea1cdfc898f%3A0x883eb631a85bbf9b!2sTapi%20Avenue!5e0!3m2!1sen!2str!4v1713267662712!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <!-- /.map -->
              </div>
              <!--/column -->
              <div class="col-lg-5">
                <div class="p-10 p-md-11 p-lg-13">
                  <div
                    v-for="item in contact"
                    :key="item.id"
                    class="d-flex flex-row"
                  >
                    <div>
                      <div class="icon text-primary fs-28 me-6 mt-n1">
                        <i :class="item.iconClass"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="">{{ item.title }}</h5>

                      <address v-if="item.address">
                        {{ item.address.line1 }}
                      </address>

                      <p v-if="item.content">
                        {{ item.content }}
                      </p>
                      <a
                        v-if="item.mail"
                        :href="`mailto:${item.mail}`"
                        class="link-body"
                        >{{ item.mail }}</a
                      >
                    </div>
                  </div>

                  <!--/div -->
                </div>
                <!--/div -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { contact } from "~/data/contact";
</script>

<style lang="scss" scoped></style>
