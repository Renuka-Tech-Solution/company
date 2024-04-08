<template>
  <div class="row grid-view gy-6 gy-xl-0">
    <div
      v-for="(item, i) in teamMembers2.slice(0, 4)"
      :key="i"
      class="col-md-6 col-xl-3"
    >
      <div class="card shadow-lg">
        <div class="card-body">
          <nuxt-img
            class="rounded-circle w-15 mb-4"
            :src="item.avatarSrc"
            alt="photo"
          />
          <h4 class="mb-1">{{ item.name }}</h4>
          <div class="meta mb-2">{{ item.position }}</div>
          <p class="mb-2">{{ item.description }}</p>
          <nav class="nav social mb-0">
            <a v-for="(elm, i2) in item.socialLinks" :key="i2" :href="elm.link"
              ><i :class="elm.iconClass"></i
            ></a>
          </nav>
          <!-- /.social -->
        </div>
        <!--/.card-body -->
      </div>
      <!-- /.card -->
    </div>

    <!--/column -->
  </div>
</template>

<script setup>
import { teamMembers2 } from "~/data/team";
</script>

<style lang="scss" scoped></style>
