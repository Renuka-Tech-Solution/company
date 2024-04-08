<template>
  <ul class="pagination">
    <li :class="`page-item ${currentPage == 1 ? 'disabled' : ''}`">
      <div
        class="page-link cursor-pointer"
        aria-label="Previous"
        @click="
          () => {
            if (currentPage !== 1) {
              currentPage -= 1;
            }
          }
        "
      >
        <span aria-hidden="true"><i class="uil uil-arrow-left"></i></span>
      </div>
    </li>
    <li
      @click="
        () => {
          currentPage = 1;
        }
      "
      :class="`page-item ${currentPage == 1 ? 'active' : ''} `"
    >
      <div class="page-link cursor-pointer">1</div>
    </li>
    <li
      @click="
        () => {
          currentPage = 2;
        }
      "
      :class="`page-item ${currentPage == 2 ? 'active' : ''} `"
    >
      <div class="page-link cursor-pointer">2</div>
    </li>
    <li
      @click="
        () => {
          currentPage = 3;
        }
      "
      :class="`page-item ${currentPage == 3 ? 'active' : ''} `"
    >
      <div class="page-link cursor-pointer">3</div>
    </li>
    <li v-if="currentPage > 3" class="page-item active">
      <div class="page-link cursor-pointer">
        {{ currentPage > 4 ? ".." : "" }} {{ currentPage }}
      </div>
    </li>
    <li
      class="page-item"
      @click="
        () => {
          currentPage += 1;
        }
      "
    >
      <div class="page-link cursor-pointer" href="#" aria-label="Next">
        <span aria-hidden="true"><i class="uil uil-arrow-right"></i></span>
      </div>
    </li>
  </ul>
</template>

<script setup>
const currentPage = ref(1);
</script>

<style lang="scss" scoped></style>
