<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Font Options</h2>
      <div class="card">
        <div class="card-body">
          <ul class="list-unstyled">
            <li class="mb-2">
              <h6 class="d-inline">Manrope</h6>
              <p class="d-inline">
                <nuxt-link to="/demo12" class="external" target="_blank"
                  >Demo 12</nuxt-link
                >,
                <nuxt-link to="/demo16" class="external" target="_blank"
                  >Demo 16</nuxt-link
                >,
                <nuxt-link to="/demo17" class="external" target="_blank"
                  >Demo 17</nuxt-link
                >
              </p>
            </li>
            <li class="mb-2">
              <h6 class="d-inline">Thicccboi (thicccboi.css)</h6>
              <p class="d-inline">
                <nuxt-link to="/demo3" class="external" target="_blank"
                  >Demo 3</nuxt-link
                >,
                <nuxt-link to="/demo5" class="external" target="_blank"
                  >Demo 5</nuxt-link
                >,
                <nuxt-link to="/demo6" class="external" target="_blank"
                  >Demo 6</nuxt-link
                >
              </p>
            </li>
            <li class="mb-2">
              <h6 class="d-inline">DM Serif + Manrope (dm.css)</h6>
              <p class="d-inline mb-0">
                <nuxt-link to="/demo2" class="external" target="_blank"
                  >Demo 2</nuxt-link
                >,
                <nuxt-link to="/demo4" class="external" target="_blank"
                  >Demo 4</nuxt-link
                >,
                <nuxt-link to="/demo8" class="external" target="_blank"
                  >Demo 8</nuxt-link
                >
              </p>
            </li>
            <li class="mb-2">
              <h6 class="d-inline">Urbanist (urbanist.css)</h6>
              <p class="d-inline mb-0">
                <nuxt-link to="/demo19" class="external" target="_blank"
                  >Demo 19</nuxt-link
                >,
                <nuxt-link to="/demo20" class="external" target="_blank"
                  >Demo 20</nuxt-link
                >,
                <nuxt-link to="/demo21" class="external" target="_blank"
                  >Demo 21</nuxt-link
                >
              </p>
            </li>
            <li>
              <h6 class="d-inline">Space Grotesk (space.css)</h6>
              <p class="d-inline mb-0">
                <nuxt-link to="/demo28" class="external" target="_blank"
                  >Demo 28</nuxt-link
                >,
                <nuxt-link to="/demo29" class="external" target="_blank"
                  >Demo 29</nuxt-link
                >,
                <nuxt-link to="/demo30" class="external" target="_blank"
                  >Demo 30</nuxt-link
                >
              </p>
            </li>
          </ul>
          <p class="mb-0">
            Manrope is the default font in Sandbox. If you wish to use one of
            the other available font options, add the link of the font CSS file
            you wish to use inside the
            <code class="code">&lt;head&gt;</code> tag, right after
            <mark class="doc">style.css</mark> link, in all your pages.
          </p>
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
              ><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;./assets/css/style.css&quot;&gt;
&lt;link rel=&quot;preload&quot; href=&quot;./assets/css/fonts/thicccboi.css&quot; as=&quot;style&quot; onload=&quot;this.rel=&apos;stylesheet&apos;&quot;&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-2" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Google Fonts</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            To use a custom Google Font, open
            <code class="file">src/assets/scss/user-variables.scss</code>, and
            use the example code below to add @import link and name of your
            font.
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
                class="language-scss"
              ><code>$path-to-fonts: &apos;GOOGLE FONT URL&apos;;
$font-family-sans-serif: GOOGLE FONT NAME;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-3" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">@font-face</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-0">
            To use a custom font with @font-face, first add the font files
            inside folder <code class="folder">src/assets/fonts/</code> Then use
            the example below to import your custom font.
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
                class="language-scss"
              ><code>$path-to-fonts: &apos;../fonts/myfont/myfont.css&apos;;
$font-family-sans-serif: &quot;My Font Name&quot;, sans-serif;</code></pre>
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
