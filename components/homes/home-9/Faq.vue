<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 py-md-17 mt-15">
      <div class="row">
        <div class="col-lg-11 col-xxl-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">FAQ</h2>
          <h3 class="display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15">
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </h3>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row">
        <div class="col-lg-7 mx-auto">
          <div id="accordionExample-2" class="accordion-wrapper">
            <div v-for="(elm, i) in faq2" :key="i" class="card accordion-item">
              <div class="card-header" :id="`heading2-${elm.id}`">
                <button
                  :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse2-${elm.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse2-${elm.id}`"
                >
                  {{ elm.question }}
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse2-${elm.id}`"
                :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                :aria-labelledby="`heading2-${elm.id}`"
                data-bs-parent="#accordionExample-2"
              >
                <div class="card-body">
                  <p>{{ elm.answer }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.accordion-wrapper -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { faq2 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
