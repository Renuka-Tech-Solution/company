<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper py-16">
      <h2 class="mb-3">Frequently Asked Questions</h2>
      <p class="lead mb-5">
        If you don't see an answer to your question here, please feel free to
        contact us with the links below:
      </p>
      <a
        href="https://1.envato.market/VKeok"
        class="btn btn-primary rounded-pill me-2"
        target="_blank"
        >Contact Form</a
      >
      <a
        href="https://1.envato.market/ZdVOOX"
        class="btn btn-soft-primary rounded-pill"
        target="_blank"
        >Discussions Page</a
      >
      <div class="accordion accordion-wrapper mt-10" id="accordion">
        <!--/.accordion-item -->

        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-2">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-2"
              aria-expanded="true"
              aria-controls="faq-collapse-2"
            >
              How can I remove unwanted package or library?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-2"
            class="accordion-collapse collapse"
            aria-labelledby="faq-2"
          >
            <div class="card-body">
              <p>
                All third-party plugin JS files are located in
                <kbd class="terminal">npm uninstall package-name</kbd>
              </p>
            </div>

            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-6">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-6"
              aria-expanded="true"
              aria-controls="faq-collapse-6"
            >
              How can I remove unwanted CSS?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-6"
            class="accordion-collapse collapse"
            aria-labelledby="faq-6"
          >
            <div class="card-body">
              <p>
                Bootstrap SCSS imports are located in
                <code class="file">public/assets/scss/_bootstrap.scss</code> and
                theme SCSS imports are in
                <code class="file">public/assets/scss/theme/_theme.scss</code>.
                Remove or comment any unwanted code.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-3">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-3"
              aria-expanded="true"
              aria-controls="faq-collapse-3"
            >
              Does Sandbox support RTL?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-3"
            class="accordion-collapse collapse"
            aria-labelledby="faq-3"
          >
            <div class="card-body">
              <p>
                No, not currently. Although with the use of
                <a
                  href="https://rtlcss.com/learn/usage-guide/install/"
                  target="_blank"
                  class="external"
                  >RTLCSS</a
                >
                project you can generate RTL version of
                <code class="file">style.css</code>, however some template
                specific styles won’t have support for RTL out of the box.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->

        <!--/.accordion-item -->

        <!--/.accordion-item -->

        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-8">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-8"
              aria-expanded="true"
              aria-controls="faq-collapse-8"
            >
              Why am I getting an error while installing to Wordpress?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-8"
            class="accordion-collapse collapse"
            aria-labelledby="faq-8"
          >
            <div class="card-body">
              <p>
                Sandbox is an Nuxtjs template, not a Wordpress theme. So it
                cannot be installed in Wordpress.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-9">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-9"
              aria-expanded="true"
              aria-controls="faq-collapse-9"
            >
              Why the image mask doesn't work on my copy of the item?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-9"
            class="accordion-collapse collapse"
            aria-labelledby="faq-9"
          >
            <div class="card-body">
              <p>
                There is a known browsers-spesific issue regarding image-mask
                that prevents them from working on local environments. (Running
                from a filesystem is now restricted, so you can no longer
                reference one file from another.) If you upload the template on
                a working server image masks should work properly.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->

        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-11">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-11"
              aria-expanded="true"
              aria-controls="faq-collapse-11"
            >
              How to add a link to dropdown parent?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-11"
            class="accordion-collapse collapse"
            aria-labelledby="faq-11"
          >
            <div class="card-body">
              <p>Use the code below to add link to dropdown parent:</p>
            </div>
            <!--/.card-body -->
            <div class="code-wrapper">
              <div class="code-wrapper-inner">
                <pre
                  class="language-html bg-dark rounded-bottom"
                ><code>&lt;li class=&quot;nav-item dropdown dropdown-mega parent-link&quot;&gt;
  &lt;a class=&quot;nav-link&quot; href=&quot;PARENT LINK&quot;&gt;Dropdown&lt;/a&gt;
  &lt;a class=&quot;nav-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;Toggle Dropdown&lt;/span&gt;&lt;/a&gt;
  &lt;ul class=&quot;dropdown-menu mega-menu&quot;&gt;
    ...
  &lt;/ul&gt;
&lt;/li&gt;</code></pre>
              </div>
            </div>
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->
        <div class="card accordion-item">
          <div class="card-header" id="faq-12">
            <button
              class="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse-12"
              aria-expanded="true"
              aria-controls="faq-collapse-12"
            >
              What font is used on the Sandbox logo?
            </button>
          </div>
          <!--/.card-header -->
          <div
            id="faq-collapse-12"
            class="accordion-collapse collapse"
            aria-labelledby="faq-12"
          >
            <div class="card-body">
              <p>
                The font used in the Sandbox logo is
                <a
                  class="external my-0"
                  href="https://fonts.google.com/specimen/Manrope"
                  target="_blank"
                  >Manrope</a
                >
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->

        <!--/.accordion-item -->

        <!--/.accordion-item -->
      </div>
      <!--/.accordion -->
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
