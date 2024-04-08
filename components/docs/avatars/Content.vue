<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-3">Letters</h2>
      <p class="lead mb-8">
        Use any size between <mark class="doc">.w-1 / .h-1</mark> and
        <mark class="doc">.w-25 / .h-25</mark> to change the avatar size.
      </p>
      <div class="card">
        <div class="card-body d-flex flex-row align-items-center">
          <span class="avatar bg-primary text-white w-15 h-15 me-4"
            ><span class="fs-30">TC</span></span
          >
          <span class="avatar bg-pale-primary text-primary w-12 h-12 me-4"
            ><span class="fs-18">AH</span></span
          >
          <span class="avatar bg-soft-primary text-primary w-10 h-10 me-4"
            ><span class="fs-15">CH</span></span
          >
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-1"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-1"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;span class=&quot;avatar bg-primary text-white w-15 h-15&quot;&gt;
  &lt;span&gt;TC&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;avatar bg-pale-primary text-primary w-12 h-12&quot;&gt;
  &lt;span&gt;AH&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;avatar bg-soft-primary text-primary w-10 h-10&quot;&gt;
  &lt;span&gt;CH&lt;/span&gt;
&lt;/span&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-2" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-3">Image</h2>
      <p class="lead mb-8">
        Use any size between <mark class="doc">.w-1</mark> and
        <mark class="doc">.w-25</mark> to change the image size. Image height
        will change automatically. Make sure to use images with 1:1 ratio to
        avoid stretching.
      </p>
      <div class="card">
        <div class="card-body d-flex flex-row align-items-center">
          <nuxt-img
            class="avatar w-15 me-4"
            src="/assets/img/avatars/te1.jpg"
            srcset="/assets/img/avatars/te1@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="avatar w-12 me-4"
            src="/assets/img/avatars/te2.jpg"
            srcset="/assets/img/avatars/te2@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="avatar w-10 me-4"
            src="/assets/img/avatars/t3.jpg"
            srcset="/assets/img/avatars/t3@2x.jpg 2x"
            alt="photo"
          />
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-2"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-2"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;nuxt-img class=&quot;avatar w-15&quot; src=&quot;...&quot; alt=&quot;&quot; /&gt;
  
&lt;nuxt-img class=&quot;avatar w-12&quot; src=&quot;...&quot; alt=&quot;&quot; /&gt;

&lt;nuxt-img class=&quot;avatar w-10&quot; src=&quot;...&quot; alt=&quot;&quot; /&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
