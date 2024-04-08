<template>
  <section id="snippet-4" class="wrapper bg-light">
    <div class="container pb-13 pb-md-15">
      <div class="card bg-soft-primary rounded-4">
        <div class="card-body p-md-10 p-xl-11">
          <div class="row gx-lg-8 gx-xl-12 gy-10">
            <div class="col-lg-6">
              <h3 class="display-4 mb-4">Frequently Asked Questions</h3>
              <p class="lead fs-lg mb-0">
                If you don't see an answer to your question, you can send us an
                email from our contact form.
              </p>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <div class="accordion accordion-wrapper" id="accordionExample-5">
                <div
                  v-for="(elm, i) in faq2"
                  :key="i"
                  class="card plain accordion-item"
                >
                  <div class="card-header" :id="`heading5-${elm.id}`">
                    <button
                      :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse5-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse5-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse5-${elm.id}`"
                    :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                    :aria-labelledby="`heading5-${elm.id}`"
                    data-bs-parent="#accordionExample-5"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer.split(" ").slice(0, 17).join(" ") }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!--/.accordion-item -->
              </div>
              <!--/.accordion -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { faq2 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
