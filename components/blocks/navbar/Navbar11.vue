<template>
  <section id="snippet-11" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17">
      <h2 class="mb-0">Center Logo - Transparent Background</h2>
    </div>
    <!-- /.container -->
    <div class="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">
      <header class="wrapper">
        <nav
          class="navbar navbar-expand-lg center-logo transparent navbar-light"
        >
          <div class="container justify-content-between align-items-center">
            <div
              class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none"
            >
              <div class="navbar-brand">
                <nuxt-link to="/">
                  <nuxt-img
                    src="/assets/img/logo.png"
                    srcset="/assets/img/logo@2x.png 2x"
                    alt="photo"
                  />
                </nuxt-link>
              </div>
              <div class="navbar-other ms-auto">
                <ul class="navbar-nav flex-row align-items-center">
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
            <!-- /.d-flex -->
            <div
              class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100"
            >
              <div
                class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
              >
                <div
                  class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15"
                >
                  <nuxt-link to="/" class="transition-none d-none d-lg-flex"
                    ><nuxt-img
                      src="/assets/img/logo.png"
                      srcset="/assets/img/logo@2x.png 2x"
                      alt="photo"
                  /></nuxt-link>
                  <h3 class="text-white fs-30 mb-0 d-lg-none">Sandbox</h3>
                  <button
                    type="button"
                    class="btn-close btn-close-white d-lg-none"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="w-100 order-1 order-lg-0 d-lg-flex">
                  <ul class="navbar-nav ms-lg-auto">
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
                  </ul>
                  <!-- /.navbar-nav -->
                </div>
                <div class="w-100 order-3 order-lg-2 d-lg-flex">
                  <ul class="navbar-nav me-lg-auto">
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
                </div>
                <div class="offcanvas-body d-lg-none order-4 mt-auto">
                  <div class="offcanvas-footer">
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
                </div>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.navbar-collapse-wrapper -->
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
            href="#collapse-snippet-222"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-222"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-11&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17&quot;&gt;
      &lt;h2 class&#x3D;&quot;mb-0&quot;&gt;Center Logo - Transparent Background&lt;&#x2F;h2&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10&quot;&gt;
      &lt;header class&#x3D;&quot;wrapper&quot;&gt;
        &lt;nav
          class&#x3D;&quot;navbar navbar-expand-lg center-logo transparent navbar-light&quot;
        &gt;
          &lt;div class&#x3D;&quot;container justify-content-between align-items-center&quot;&gt;
            &lt;div
              class&#x3D;&quot;d-flex flex-row w-100 justify-content-between align-items-center d-lg-none&quot;
            &gt;
              &lt;div class&#x3D;&quot;navbar-brand&quot;&gt;
                &lt;nuxt-link to&#x3D;&quot;&#x2F;&quot;&gt;
                  &lt;nuxt-img
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo.png&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo@2x.png 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;nuxt-link&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;navbar-other ms-auto&quot;&gt;
                &lt;ul class&#x3D;&quot;navbar-nav flex-row align-items-center&quot;&gt;
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
            &lt;!-- &#x2F;.d-flex --&gt;
            &lt;div
              class&#x3D;&quot;navbar-collapse-wrapper d-flex flex-row align-items-center w-100&quot;
            &gt;
              &lt;div
                class&#x3D;&quot;navbar-collapse offcanvas offcanvas-nav offcanvas-start&quot;
              &gt;
                &lt;div
                  class&#x3D;&quot;offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15&quot;
                &gt;
                  &lt;nuxt-link to&#x3D;&quot;&#x2F;&quot; class&#x3D;&quot;transition-none d-none d-lg-flex&quot;
                    &gt;&lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo.png&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo@2x.png 2x&quot;
                      alt&#x3D;&quot;&quot;
                  &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                  &lt;h3 class&#x3D;&quot;text-white fs-30 mb-0 d-lg-none&quot;&gt;Sandbox&lt;&#x2F;h3&gt;
                  &lt;button
                    type&#x3D;&quot;button&quot;
                    class&#x3D;&quot;btn-close btn-close-white d-lg-none&quot;
                    data-bs-dismiss&#x3D;&quot;offcanvas&quot;
                    aria-label&#x3D;&quot;Close&quot;
                  &gt;&lt;&#x2F;button&gt;
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;w-100 order-1 order-lg-0 d-lg-flex&quot;&gt;
                  &lt;ul class&#x3D;&quot;navbar-nav ms-lg-auto&quot;&gt;
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
                  &lt;&#x2F;ul&gt;
                  &lt;!-- &#x2F;.navbar-nav --&gt;
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;w-100 order-3 order-lg-2 d-lg-flex&quot;&gt;
                  &lt;ul class&#x3D;&quot;navbar-nav me-lg-auto&quot;&gt;
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
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;offcanvas-body d-lg-none order-4 mt-auto&quot;&gt;
                  &lt;div class&#x3D;&quot;offcanvas-footer&quot;&gt;
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
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.navbar-collapse --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.navbar-collapse-wrapper --&gt;
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
