<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17">
      <h2 class="mb-0">Center Nav - Dark Background</h2>
    </div>
    <!-- /.container -->
    <div class="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">
      <header class="wrapper bg-soft-primary">
        <nav
          class="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark"
        >
          <div class="container flex-lg-row flex-nowrap align-items-center">
            <div class="navbar-brand w-100">
              <nuxt-link to="/">
                <nuxt-img
                  src="/assets/img/logo-light.png"
                  srcset="/assets/img/logo-light@2x.png 2x"
                  alt="photo"
                />
              </nuxt-link>
            </div>
            <div
              class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
            >
              <div class="offcanvas-header d-lg-none">
                <h3 class="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Dropdown</a
                    >
                    <BlocksNavbarComponentsDropdown />
                  </li>
                  <li class="nav-item dropdown dropdown-mega">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Mega Menu</a
                    >
                    <BlocksNavbarComponentsMegaMenu />
                    <!--/.dropdown-menu -->
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Dropdown Large</a
                    >
                    <BlocksNavbarComponentsDropdownLarge />
                  </li>
                </ul>
                <!-- /.navbar-nav -->
                <div class="offcanvas-footer d-lg-none">
                  <div>
                    <a href="mailto:first.last@email.com" class="link-inverse"
                      >info@email.com</a
                    >
                    <br />
                    00 (123) 456 78 90 <br />
                    <nav class="nav social social-white mt-4">
                      <BlocksNavbarComponentsSocials />
                    </nav>
                    <!-- /.social -->
                  </div>
                </div>
                <!-- /.offcanvas-footer -->
              </div>
              <!-- /.offcanvas-body -->
            </div>
            <!-- /.navbar-collapse -->
            <div class="navbar-other w-100 d-flex ms-auto">
              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li class="nav-item dropdown language-select text-uppercase">
                  <BlocksNavbarComponentsLanguage />
                </li>
                <li class="nav-item d-none d-md-block">
                  <nuxt-link
                    to="/contact"
                    class="btn btn-sm btn-primary rounded-pill"
                    >Contact</nuxt-link
                  >
                </li>
                <li class="nav-item d-lg-none">
                  <button class="hamburger offcanvas-nav-btn">
                    <span></span>
                  </button>
                </li>
              </ul>
              <!-- /.navbar-nav -->
            </div>
            <!-- /.navbar-other -->
          </div>
          <!-- /.container -->
        </nav>
        <!-- /.navbar -->
      </header>
      <!-- /header -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-214"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-214"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17&quot;&gt;
      &lt;h2 class&#x3D;&quot;mb-0&quot;&gt;Center Nav - Dark Background&lt;&#x2F;h2&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10&quot;&gt;
      &lt;header class&#x3D;&quot;wrapper bg-soft-primary&quot;&gt;
        &lt;nav
          class&#x3D;&quot;navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark&quot;
        &gt;
          &lt;div class&#x3D;&quot;container flex-lg-row flex-nowrap align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;navbar-brand w-100&quot;&gt;
              &lt;nuxt-link to&#x3D;&quot;&#x2F;&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;nuxt-link&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              class&#x3D;&quot;navbar-collapse offcanvas offcanvas-nav offcanvas-start&quot;
            &gt;
              &lt;div class&#x3D;&quot;offcanvas-header d-lg-none&quot;&gt;
                &lt;h3 class&#x3D;&quot;text-white fs-30 mb-0&quot;&gt;Sandbox&lt;&#x2F;h3&gt;
                &lt;button
                  type&#x3D;&quot;button&quot;
                  class&#x3D;&quot;btn-close btn-close-white&quot;
                  data-bs-dismiss&#x3D;&quot;offcanvas&quot;
                  aria-label&#x3D;&quot;Close&quot;
                &gt;&lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;offcanvas-body ms-lg-auto d-flex flex-column h-100&quot;&gt;
                &lt;ul class&#x3D;&quot;navbar-nav&quot;&gt;
                  &lt;li class&#x3D;&quot;nav-item&quot;&gt;
                    &lt;a class&#x3D;&quot;nav-link&quot; href&#x3D;&quot;#&quot;&gt;Link&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li class&#x3D;&quot;nav-item dropdown&quot;&gt;
                    &lt;a
                      class&#x3D;&quot;nav-link dropdown-toggle&quot;
                      href&#x3D;&quot;#&quot;
                      data-bs-toggle&#x3D;&quot;dropdown&quot;
                      &gt;Dropdown&lt;&#x2F;a
                    &gt;
                    &lt;BlocksNavbarComponentsDropdown &#x2F;&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li class&#x3D;&quot;nav-item dropdown dropdown-mega&quot;&gt;
                    &lt;a
                      class&#x3D;&quot;nav-link dropdown-toggle&quot;
                      href&#x3D;&quot;#&quot;
                      data-bs-toggle&#x3D;&quot;dropdown&quot;
                      &gt;Mega Menu&lt;&#x2F;a
                    &gt;
                    &lt;BlocksNavbarComponentsMegaMenu &#x2F;&gt;
                    &lt;!--&#x2F;.dropdown-menu --&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li class&#x3D;&quot;nav-item dropdown&quot;&gt;
                    &lt;a
                      class&#x3D;&quot;nav-link dropdown-toggle&quot;
                      href&#x3D;&quot;#&quot;
                      data-bs-toggle&#x3D;&quot;dropdown&quot;
                      &gt;Dropdown Large&lt;&#x2F;a
                    &gt;
                    &lt;BlocksNavbarComponentsDropdownLarge &#x2F;&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
                &lt;!-- &#x2F;.navbar-nav --&gt;
                &lt;div class&#x3D;&quot;offcanvas-footer d-lg-none&quot;&gt;
                  &lt;div&gt;
                    &lt;a href&#x3D;&quot;mailto:first.last@email.com&quot; class&#x3D;&quot;link-inverse&quot;
                      &gt;info@email.com&lt;&#x2F;a
                    &gt;
                    &lt;br &#x2F;&gt;
                    00 (123) 456 78 90 &lt;br &#x2F;&gt;
                    &lt;nav class&#x3D;&quot;nav social social-white mt-4&quot;&gt;
                      &lt;BlocksNavbarComponentsSocials &#x2F;&gt;
                    &lt;&#x2F;nav&gt;
                    &lt;!-- &#x2F;.social --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.offcanvas-footer --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.offcanvas-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.navbar-collapse --&gt;
            &lt;div class&#x3D;&quot;navbar-other w-100 d-flex ms-auto&quot;&gt;
              &lt;ul class&#x3D;&quot;navbar-nav flex-row align-items-center ms-auto&quot;&gt;
                &lt;li class&#x3D;&quot;nav-item dropdown language-select text-uppercase&quot;&gt;
                  &lt;BlocksNavbarComponentsLanguage &#x2F;&gt;
                &lt;&#x2F;li&gt;
                &lt;li class&#x3D;&quot;nav-item d-none d-md-block&quot;&gt;
                  &lt;nuxt-link
                    to&#x3D;&quot;&#x2F;contact&quot;
                    class&#x3D;&quot;btn btn-sm btn-primary rounded-pill&quot;
                    &gt;Contact&lt;&#x2F;nuxt-link
                  &gt;
                &lt;&#x2F;li&gt;
                &lt;li class&#x3D;&quot;nav-item d-lg-none&quot;&gt;
                  &lt;button class&#x3D;&quot;hamburger offcanvas-nav-btn&quot;&gt;
                    &lt;span&gt;&lt;&#x2F;span&gt;
                  &lt;&#x2F;button&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;!-- &#x2F;.navbar-nav --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.navbar-other --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.container --&gt;
        &lt;&#x2F;nav&gt;
        &lt;!-- &#x2F;.navbar --&gt;
      &lt;&#x2F;header&gt;
      &lt;!-- &#x2F;header --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;&lt;&#x2F;script&gt;

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

<script setup></script>

<style lang="scss" scoped></style>
