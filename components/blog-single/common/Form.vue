<template>
  <h3 class="mb-3">Would you like to share your thoughts?</h3>
  <p class="mb-7">
    Your email address will not be published. Required fields are marked *
  </p>
  <form @submit.prevent="() => {}" class="comment-form">
    <div class="form-floating mb-4">
      <input type="text" class="form-control" placeholder="Name*" />
      <label>Name *</label>
    </div>
    <div class="form-floating mb-4">
      <input type="email" class="form-control" placeholder="Email*" />
      <label>Email*</label>
    </div>
    <div class="form-floating mb-4">
      <input type="text" class="form-control" placeholder="Website" />
      <label>Website</label>
    </div>
    <div class="form-floating mb-4">
      <textarea
        name="textarea"
        class="form-control"
        placeholder="Comment"
        style="height: 150px"
      ></textarea>
      <label>Comment *</label>
    </div>
    <button type="submit" class="btn btn-primary rounded-pill mb-0">
      Submit
    </button>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
