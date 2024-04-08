<template>
  <div class="author-info d-md-flex align-items-center mb-3">
    <div class="d-flex align-items-center">
      <figure class="user-avatar">
        <nuxt-img
          class="rounded-circle"
          alt="photo"
          src="/assets/img/avatars/u5.jpg"
        />
      </figure>
      <div>
        <h6><a href="#" class="link-dark">Nikolas Brooten</a></h6>
        <span class="post-meta fs-15">Sales Manager</span>
      </div>
    </div>
    <div class="mt-3 mt-md-0 ms-auto">
      <a
        href="#"
        class="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0"
        ><i class="uil uil-file-alt"></i> All Posts</a
      >
    </div>
  </div>
  <!-- /.author-info -->
  <p>
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
    fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum.
    Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.
  </p>
  <nav class="nav social">
    <BlogSingleCommonSocials />
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
