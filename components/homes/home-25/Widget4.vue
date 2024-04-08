<template>
  <div class="widget">
    <h4 class="widget-title mb-3">Tags</h4>
    <ul class="list-unstyled tag-list">
      <li v-for="(tag, index) in tags" :key="index">
        <a :href="tag.link" class="btn btn-soft-ash btn-sm rounded-pill">{{
          tag.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const tags = [
  { name: "Still Life", link: "#" },
  { name: "Urban", link: "#" },
  { name: "Nature", link: "#" },
  { name: "Landscape", link: "#" },
  { name: "Macro", link: "#" },
  { name: "Fun", link: "#" },
  { name: "Workshop", link: "#" },
  { name: "Photography", link: "#" },
];
</script>
