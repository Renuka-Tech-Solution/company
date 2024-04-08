<template>
  <div class="card-body tooltips">
    <a
      href="#"
      class="me-5"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on top</h5>`,
        allowHTML: true,
        placement: 'top',
      }"
      >Tooltip on top</a
    >
    <a
      href="#"
      class="me-5"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on right</h5>`,
        allowHTML: true,
        placement: 'right',
      }"
      >Tooltip on right</a
    >
    <a
      href="#"
      class="me-5"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on bottom</h5>`,
        allowHTML: true,
        placement: 'bottom',
      }"
      >Tooltip on bottom</a
    >
    <a
      href="#"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on left</h5>`,
        allowHTML: true,
        placement: 'left',
      }"
      >Tooltip on left</a
    >
    <div class="mt-5"></div>
    <button
      type="button"
      class="btn btn-soft-primary rounded-pill me-2"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on top</h5>`,
        allowHTML: true,
        placement: 'top',
      }"
    >
      Tooltip on top
    </button>
    <button
      type="button"
      class="btn btn-soft-primary rounded-pill me-2"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on right</h5>`,
        allowHTML: true,
        placement: 'right',
      }"
    >
      Tooltip on right
    </button>
    <button
      type="button"
      class="btn btn-soft-primary rounded-pill me-2"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on bottom</h5>`,
        allowHTML: true,
        placement: 'bottom',
      }"
    >
      Tooltip on bottom
    </button>
    <button
      type="button"
      class="btn btn-soft-primary rounded-pill me-2"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary fs-15 text-white rounded'>Tooltip on left</h5>`,
        allowHTML: true,
        placement: 'left',
      }"
    >
      Tooltip on left
    </button>
  </div>
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";
</script>

<style lang="scss"></style>
