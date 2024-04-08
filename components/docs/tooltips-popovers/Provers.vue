<template>
  <a
    class="btn btn-primary rounded-pill me-2"
    v-tippy="{
      content: ` <div class='popover' role='tooltip'>
    <div class='popover-arrow'></div>
    <h3 class='popover-header'>Sample Title</h3>
    <div class='popover-body'>
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    </div>
  </div>`,
      allowHTML: true,
      trigger: 'click',
      placement: 'top',
    }"
  >
    Popover on top
  </a>
  <a
    class="btn btn-primary rounded-pill me-2"
    v-tippy="{
      content: ` <div class='popover' role='tooltip'>
    <div class='popover-arrow'></div>
    <h3 class='popover-header'>Sample Title</h3>
    <div class='popover-body'>
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    </div>
  </div>`,
      allowHTML: true,
      trigger: 'click',
      placement: 'right',
    }"
  >
    Popover on right
  </a>
  <a
    class="btn btn-primary rounded-pill me-2"
    v-tippy="{
      content: ` <div class='popover' role='tooltip'>
    <div class='popover-arrow'></div>
    <h3 class='popover-header'>Sample Title</h3>
    <div class='popover-body'>
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    </div>
  </div>`,
      allowHTML: true,
      trigger: 'click',
      placement: 'bottom',
    }"
  >
    Popover on bottom
  </a>
  <a
    class="btn btn-primary rounded-pill me-2"
    v-tippy="{
      content: ` <div class='popover' role='tooltip'>
    <div class='popover-arrow'></div>
    <h3 class='popover-header'>Sample Title</h3>
    <div class='popover-body'>
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    </div>
  </div>`,
      allowHTML: true,
      trigger: 'click',
      placement: 'left',
    }"
  >
    Popover on left
  </a>
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";
</script>

<style lang="scss" scoped></style>
