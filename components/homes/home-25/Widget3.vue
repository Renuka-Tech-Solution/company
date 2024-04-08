<template>
  <div class="widget">
    <h4 class="widget-title mb-3">Categories</h4>
    <ul class="unordered-list bullet-primary text-reset">
      <li v-for="(category, index) in categories" :key="index">
        <a :href="category.link">{{ category.name }} ({{ category.count }})</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { name: "Lifestyle", count: 21, link: "#" },
  { name: "Photography", count: 19, link: "#" },
  { name: "Journal", count: 16, link: "#" },
  { name: "Works", count: 7, link: "#" },
  { name: "Conceptual", count: 12, link: "#" },
  { name: "Videography", count: 14, link: "#" },
];
</script>
