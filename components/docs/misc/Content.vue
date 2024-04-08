<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Spacing</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            Sandbox adds additional spacing variables to existing
            <a
              href="https://getbootstrap.com/docs/5.3/utilities/spacing/"
              class="external"
              target="_blank"
            >
              Bootstrap spacing</a
            >
            ranging between values <mark class="doc">0</mark> and
            <mark class="doc">25</mark>
          </p>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-2" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Font Size</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            Quickly change the font-size of text using
            <code class="code">.fs-*</code> classes ranging between
            <mark class="doc">1</mark> and <mark class="doc">200</mark>, while
            <mark class="doc">sm</mark>, and <mark class="doc">lg</mark> also
            apply.
          </p>
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
              ><code>&lt;p class=&quot;fs-sm&quot;&gt;.fs-sm text&lt;/p&gt;
&lt;p class=&quot;fs-lg&quot;&gt;.fs-lg text&lt;/p&gt;

&lt;p class=&quot;fs-1&quot;&gt;.fs-1 text&lt;/p&gt;
...
&lt;p class=&quot;fs-200&quot;&gt;.fs-200 text&lt;/p&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-3" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Line Height</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            Change the line height with
            <code class="code">.lh-*</code> utilities.
          </p>
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-3"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-3"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;p class=&quot;lh-1&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;lh-xxs&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;lh-xs&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;lh-sm&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;lh-base&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;lh-lg&quot;&gt;Text&lt;/p&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-4" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Letter Spacing</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            Change the letter spacing with
            <code class="code">.ls-*</code> utilities.
          </p>
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-4"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-4"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;p class=&quot;ls-xs&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;ls-sm&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;ls-md&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;ls-lg&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;ls-xl&quot;&gt;Text&lt;/p&gt;
&lt;p class=&quot;ls-normal&quot;&gt;Text&lt;/p&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-5" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Gutters</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            Spacing variables mentioned above can also be used for column
            gutters. More information regarding Bootstrap gutters can be found
            on
            <a
              href="https://getbootstrap.com/docs/5.3/layout/gutters/"
              class="external"
              target="_blank"
              >Bootstrap docs</a
            >
          </p>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-6" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Retina Images</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            In order to display a high resolution image on devices with retina
            display, you need two versions of the image. One with regular size
            and another with twice its size. The high resolution one should have
            the exact same name with <mark class="doc">@2x</mark> at the end.
          </p>
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-6"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-6"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;nuxt-img src=&quot;logo.png&quot; srcset=&quot;logo@2x.png 2x&quot; alt=&quot;&quot; /&gt;</code></pre>
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
