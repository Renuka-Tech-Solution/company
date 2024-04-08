<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-14">
      <div class="row text-center">
        <div class="col-xl-10 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Job Positions</h2>
          <h3 class="display-4 mb-10 px-xxl-15">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <form @submit.prevent="handleSubmit" class="filter-form mb-10">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Position</option>
                    <option
                      v-for="(position, index) in jobPositions"
                      :key="index"
                      :value="position.value"
                    >
                      {{ position.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Type</option>
                    <option
                      v-for="(type, index) in jobTypes"
                      :key="index"
                      :value="type.value"
                    >
                      {{ type.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Location</option>
                    <option
                      v-for="(location, index) in locations"
                      :key="index"
                      :value="location.value"
                    >
                      {{ location.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class="job-list mb-10">
            <h3 class="mb-4">Design</h3>
            <a
              v-for="position in webDesignJobPositions"
              :key="position.id"
              :href="position.link"
              class="card mb-4 lift"
            >
              <div class="card-body p-5">
                <span class="row justify-content-between align-items-center">
                  <span
                    class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body"
                  >
                    <span
                      :class="[
                        'avatar',
                        position.avatarClass,
                        'w-9 h-9 fs-17 me-3',
                      ]"
                      >{{ position.avatarText }}</span
                    >
                    {{ position.title }}
                  </span>
                  <span
                    class="col-5 col-md-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-clock me-1"></i> {{ position.time }}
                  </span>
                  <span
                    class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-location-arrow me-1"></i>
                    {{ position.location }}
                  </span>
                  <span class="d-none d-lg-block col-1 text-center text-body">
                    <i class="uil uil-angle-right-b"></i>
                  </span>
                </span>
              </div>
            </a>
            <!-- /.card -->
          </div>
          <div class="job-list">
            <h3 class="mb-4">Development</h3>
            <a
              v-for="job in webDebJobs"
              :key="job.id"
              :href="job.link"
              class="card mb-4 lift"
            >
              <div class="card-body p-5">
                <span class="row justify-content-between align-items-center">
                  <span
                    class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body"
                  >
                    <span
                      :class="['avatar', job.avatarClass, 'w-9 h-9 fs-17 me-3']"
                      >{{ job.avatarText }}</span
                    >
                    {{ job.title }}
                  </span>
                  <span
                    class="col-5 col-md-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-clock me-1"></i> {{ job.time }}
                  </span>
                  <span
                    class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-location-arrow me-1"></i>
                    {{ job.location }}
                  </span>
                  <span class="d-none d-lg-block col-1 text-center text-body">
                    <i class="uil uil-angle-right-b"></i>
                  </span>
                </span>
              </div>
            </a>
            <!-- /.card -->
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-201"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-201"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-14&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Job Positions&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10 px-xxl-15&quot;&gt;
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;form @submit.prevent&#x3D;&quot;handleSubmit&quot; class&#x3D;&quot;filter-form mb-10&quot;&gt;
            &lt;div class&#x3D;&quot;row&quot;&gt;
              &lt;div class&#x3D;&quot;col-md-4 mb-3&quot;&gt;
                &lt;div class&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select class&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option selected&gt;Position&lt;&#x2F;option&gt;
                    &lt;option
                      v-for&#x3D;&quot;(position, index) in jobPositions&quot;
                      :key&#x3D;&quot;index&quot;
                      :value&#x3D;&quot;position.value&quot;
                    &gt;
                      &lbrace;&lbrace; position.label &rbrace;&rbrace;
                    &lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;col-md-4 mb-3&quot;&gt;
                &lt;div class&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select class&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option selected&gt;Type&lt;&#x2F;option&gt;
                    &lt;option
                      v-for&#x3D;&quot;(type, index) in jobTypes&quot;
                      :key&#x3D;&quot;index&quot;
                      :value&#x3D;&quot;type.value&quot;
                    &gt;
                      &lbrace;&lbrace; type.label &rbrace;&rbrace;
                    &lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;col-md-4 mb-3&quot;&gt;
                &lt;div class&#x3D;&quot;form-select-wrapper&quot;&gt;
                  &lt;select class&#x3D;&quot;form-select&quot; aria-label&#x3D;&quot;&quot;&gt;
                    &lt;option selected&gt;Location&lt;&#x2F;option&gt;
                    &lt;option
                      v-for&#x3D;&quot;(location, index) in locations&quot;
                      :key&#x3D;&quot;index&quot;
                      :value&#x3D;&quot;location.value&quot;
                    &gt;
                      &lbrace;&lbrace; location.label &rbrace;&rbrace;
                    &lt;&#x2F;option&gt;
                  &lt;&#x2F;select&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;form&gt;
          &lt;div class&#x3D;&quot;job-list mb-10&quot;&gt;
            &lt;h3 class&#x3D;&quot;mb-4&quot;&gt;Design&lt;&#x2F;h3&gt;
            &lt;a
              v-for&#x3D;&quot;position in webDesignJobPositions&quot;
              :key&#x3D;&quot;position.id&quot;
              :href&#x3D;&quot;position.link&quot;
              class&#x3D;&quot;card mb-4 lift&quot;
            &gt;
              &lt;div class&#x3D;&quot;card-body p-5&quot;&gt;
                &lt;span class&#x3D;&quot;row justify-content-between align-items-center&quot;&gt;
                  &lt;span
                    class&#x3D;&quot;col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body&quot;
                  &gt;
                    &lt;span
                      :class&#x3D;&quot;[
                        &#39;avatar&#39;,
                        position.avatarClass,
                        &#39;w-9 h-9 fs-17 me-3&#39;,
                      ]&quot;
                      &gt;&lbrace;&lbrace; position.avatarText &rbrace;&rbrace;&lt;&#x2F;span
                    &gt;
                    &lbrace;&lbrace; position.title &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span
                    class&#x3D;&quot;col-5 col-md-3 text-body d-flex align-items-center&quot;
                  &gt;
                    &lt;i class&#x3D;&quot;uil uil-clock me-1&quot;&gt;&lt;&#x2F;i&gt; &lbrace;&lbrace; position.time &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span
                    class&#x3D;&quot;col-7 col-md-4 col-lg-3 text-body d-flex align-items-center&quot;
                  &gt;
                    &lt;i class&#x3D;&quot;uil uil-location-arrow me-1&quot;&gt;&lt;&#x2F;i&gt;
                    &lbrace;&lbrace; position.location &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span class&#x3D;&quot;d-none d-lg-block col-1 text-center text-body&quot;&gt;
                    &lt;i class&#x3D;&quot;uil uil-angle-right-b&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;a&gt;
            &lt;!-- &#x2F;.card --&gt;
          &lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;job-list&quot;&gt;
            &lt;h3 class&#x3D;&quot;mb-4&quot;&gt;Development&lt;&#x2F;h3&gt;
            &lt;a
              v-for&#x3D;&quot;job in webDebJobs&quot;
              :key&#x3D;&quot;job.id&quot;
              :href&#x3D;&quot;job.link&quot;
              class&#x3D;&quot;card mb-4 lift&quot;
            &gt;
              &lt;div class&#x3D;&quot;card-body p-5&quot;&gt;
                &lt;span class&#x3D;&quot;row justify-content-between align-items-center&quot;&gt;
                  &lt;span
                    class&#x3D;&quot;col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body&quot;
                  &gt;
                    &lt;span
                      :class&#x3D;&quot;[&#39;avatar&#39;, job.avatarClass, &#39;w-9 h-9 fs-17 me-3&#39;]&quot;
                      &gt;&lbrace;&lbrace; job.avatarText &rbrace;&rbrace;&lt;&#x2F;span
                    &gt;
                    &lbrace;&lbrace; job.title &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span
                    class&#x3D;&quot;col-5 col-md-3 text-body d-flex align-items-center&quot;
                  &gt;
                    &lt;i class&#x3D;&quot;uil uil-clock me-1&quot;&gt;&lt;&#x2F;i&gt; &lbrace;&lbrace; job.time &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span
                    class&#x3D;&quot;col-7 col-md-4 col-lg-3 text-body d-flex align-items-center&quot;
                  &gt;
                    &lt;i class&#x3D;&quot;uil uil-location-arrow me-1&quot;&gt;&lt;&#x2F;i&gt;
                    &lbrace;&lbrace; job.location &rbrace;&rbrace;
                  &lt;&#x2F;span&gt;
                  &lt;span class&#x3D;&quot;d-none d-lg-block col-1 text-center text-body&quot;&gt;
                    &lt;i class&#x3D;&quot;uil uil-angle-right-b&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;a&gt;
            &lt;!-- &#x2F;.card --&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
  
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { webDebJobs, webDesignJobPositions } from &quot;~&#x2F;data&#x2F;job&quot;;
const handleSubmit &#x3D; () &#x3D;&gt; {};
const locations &#x3D; [
  { value: &quot;location1&quot;, label: &quot;Chicago, US&quot; },
  { value: &quot;location3&quot;, label: &quot;Michigan, US&quot; },
  { value: &quot;location2&quot;, label: &quot;New York, US&quot; },
  { value: &quot;location4&quot;, label: &quot;Los Angeles, US&quot; },
  { value: &quot;location5&quot;, label: &quot;Moscow, Russia&quot; },
  { value: &quot;location6&quot;, label: &quot;Sydney, Australia&quot; },
  { value: &quot;location7&quot;, label: &quot;Birmingham, UK&quot; },
  { value: &quot;location8&quot;, label: &quot;Manchester, UK&quot; },
  { value: &quot;location9&quot;, label: &quot;Beijing, China&quot; },
];
const jobTypes &#x3D; [
  { value: &quot;type1&quot;, label: &quot;Full-time&quot; },
  { value: &quot;type3&quot;, label: &quot;Part-time&quot; },
  { value: &quot;type4&quot;, label: &quot;Remote&quot; },
];
const jobPositions &#x3D; [
  { value: &quot;position1&quot;, label: &quot;Business&quot; },
  { value: &quot;position2&quot;, label: &quot;Design&quot; },
  { value: &quot;position3&quot;, label: &quot;Development&quot; },
  { value: &quot;position4&quot;, label: &quot;Engineering&quot; },
  { value: &quot;position5&quot;, label: &quot;Finance&quot; },
  { value: &quot;position6&quot;, label: &quot;Marketing&quot; },
];
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { webDebJobs, webDesignJobPositions } from "~/data/job";
const handleSubmit = () => {};
const locations = [
  { value: "location1", label: "Chicago, US" },
  { value: "location3", label: "Michigan, US" },
  { value: "location2", label: "New York, US" },
  { value: "location4", label: "Los Angeles, US" },
  { value: "location5", label: "Moscow, Russia" },
  { value: "location6", label: "Sydney, Australia" },
  { value: "location7", label: "Birmingham, UK" },
  { value: "location8", label: "Manchester, UK" },
  { value: "location9", label: "Beijing, China" },
];
const jobTypes = [
  { value: "type1", label: "Full-time" },
  { value: "type3", label: "Part-time" },
  { value: "type4", label: "Remote" },
];
const jobPositions = [
  { value: "position1", label: "Business" },
  { value: "position2", label: "Design" },
  { value: "position3", label: "Development" },
  { value: "position4", label: "Engineering" },
  { value: "position5", label: "Finance" },
  { value: "position6", label: "Marketing" },
];
</script>

<style lang="scss" scoped></style>
