<template>
  <div class="widget">
    <h4 class="widget-title mb-3">Archive</h4>
    <ul class="unordered-list bullet-primary text-reset">
      <li v-for="(month, index) in archiveMonths" :key="index">
        <a :href="month.link">{{ month.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const archiveMonths = [
  { name: "February 2019", link: "#" },
  { name: "January 2019", link: "#" },
  { name: "December 2018", link: "#" },
  { name: "November 2018", link: "#" },
  { name: "October 2018", link: "#" },
];
</script>
