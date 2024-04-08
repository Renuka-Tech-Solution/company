<template>
  <h2 class="display-4 mb-3 text-center">Pricing FAQ</h2>
  <p class="lead text-center mb-10 px-md-16 px-lg-0">
    If you don't see an answer to your question, you can send us an email from
    our contact form.
  </p>
  <div class="row mb-14 mb-md-18">
    <div class="col-lg-6 mb-0">
      <div id="accordionExample-4" class="accordion-wrapper">
        <div v-for="(elm, i) in faq3" :key="i" class="card accordion-item">
          <div class="card-header" :id="`heading4-${elm.id}`">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse4-${elm.id}`"
              aria-expanded="false"
              :aria-controls="`collapse4-${elm.id}`"
            >
              {{ elm.question }}
            </button>
          </div>
          <!--/.card-header -->
          <div
            :id="`collapse4-${elm.id}`"
            :class="`accordion-collapse collapse `"
            :aria-labelledby="`heading4-${elm.id}`"
            data-bs-parent="#accordionExample-4"
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
    <!--/column -->
    <div class="col-lg-6">
      <div id="accordionExample-3" class="accordion-wrapper">
        <div v-for="(elm, i) in faq2" :key="i" class="card accordion-item">
          <div class="card-header" :id="`heading3-${elm.id}`">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse3-${elm.id}`"
              aria-expanded="false"
              :aria-controls="`collapse3-${elm.id}`"
            >
              {{ elm.question }}
            </button>
          </div>
          <!--/.card-header -->
          <div
            :id="`collapse3-${elm.id}`"
            :class="`accordion-collapse collapse `"
            :aria-labelledby="`heading3-${elm.id}`"
            data-bs-parent="#accordionExample-3"
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
    <!--/column -->
  </div>
</template>
<script setup>
import { faq2, faq3 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
