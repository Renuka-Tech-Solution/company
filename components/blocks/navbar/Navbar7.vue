<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17">
      <h2 class="mb-3">Classic - Transparent Background - Light Text</h2>
      <p class="lead mb-0">
        Check out some of the live examples:
        <nuxt-link to="/demo11" class="external">Demo 11</nuxt-link>.
      </p>
    </div>
    <!-- /.container -->
    <div class="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">
      <header
        class="wrapper image-wrapper bg-image pb-1"
        style="background-image: url(/assets/img/photos/bg3.jpg)"
      >
        <nav class="navbar navbar-expand-lg classic transparent navbar-dark">
          <div class="container flex-lg-row flex-nowrap align-items-center">
            <div class="navbar-brand w-100">
              <nuxt-link to="/">
                <nuxt-img
                  class="logo-dark"
                  src="/assets/img/logo.png"
                  srcset="/assets/img/logo@2x.png 2x"
                  alt="photo"
                />
                <nuxt-img
                  class="logo-light"
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
            <div class="navbar-other ms-lg-4">
              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-info"
                    ><i class="uil uil-info-circle"></i
                  ></a>
                </li>
                <li class="nav-item d-none d-md-block">
                  <a
                    href="#"
                    class="btn btn-sm btn-white rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="trueLink"
                    >Sign In</a
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
        <div class="modal fade" id="modal-signin" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content text-center">
              <div class="modal-body">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <h2 class="mb-3 text-start">Welcome Back</h2>
                <p class="lead mb-6 text-start">
                  Fill your email and password to sign in.
                </p>
                <form @submit.prevent="handleSubmit" class="text-start mb-3">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>
                  <div class="form-floating password-field mb-4">
                    <input
                      type="password"
                      autocomplete="password"
                      class="form-control"
                      placeholder="Password"
                    />
                    <span class="password-toggle"
                      ><i class="uil uil-eye"></i
                    ></span>
                    <label>Password</label>
                  </div>
                  <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                    >Sign In</a
                  >
                </form>
                <!-- /form -->
                <p class="mb-1">
                  <a href="#" class="hover">Forgot Password?</a>
                </p>
                <p class="mb-0">
                  Don't have an account?
                  <a
                    href="#"
                    data-bs-target="#modal-signup"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    class="hover"
                    >Sign up</a
                  >
                </p>
                <div class="divider-icon my-4">or</div>
                <nav class="nav social justify-content-center text-center">
                  <BlocksNavbarComponentsSocials2 />
                </nav>
                <!--/.social -->
              </div>
              <!--/.modal-content -->
            </div>
            <!--/.modal-body -->
          </div>
          <!--/.modal-dialog -->
        </div>
        <!--/.modal -->
        <div class="modal fade" id="modal-signup" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content text-center">
              <div class="modal-body">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <h2 class="mb-3 text-start">Sign up to Sandbox</h2>
                <p class="lead mb-6 text-start">
                  Registration takes less than a minute.
                </p>
                <form @submit.prevent="handleSubmit" class="text-start mb-3">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                    <label>Name</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>
                  <div class="form-floating password-field mb-4">
                    <input
                      type="password"
                      autocomplete="password"
                      class="form-control"
                      placeholder="Password"
                    />
                    <span class="password-toggle"
                      ><i class="uil uil-eye"></i
                    ></span>
                    <label>Password</label>
                  </div>
                  <div class="form-floating password-field mb-4">
                    <input
                      type="password"
                      autocomplete="password"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                    <span class="password-toggle"
                      ><i class="uil uil-eye"></i
                    ></span>
                    <label>Confirm Password</label>
                  </div>
                  <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                    >Sign Up</a
                  >
                </form>
                <!-- /form -->
                <p class="mb-0">
                  Already have an account?
                  <a
                    href="#"
                    data-bs-target="#modal-signin"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    class="hover"
                    >Sign in</a
                  >
                </p>
                <div class="divider-icon my-4">or</div>
                <nav class="nav social justify-content-center text-center">
                  <BlocksNavbarComponentsSocials2 />
                </nav>
                <!--/.social -->
              </div>
              <!--/.modal-content -->
            </div>
            <!--/.modal-body -->
          </div>
          <!--/.modal-dialog -->
        </div>
        <!--/.modal -->
        <div
          class="offcanvas offcanvas-end text-inverse"
          id="offcanvas-info"
          data-bs-scroll="true"
        >
          <div class="offcanvas-header">
            <h3 class="text-white fs-30 mb-0">Sandbox</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body pb-6">
            <div class="widget mb-8">
              <p>
                Sandbox is a multipurpose HTML5 template with various layouts
                which will be a great solution for your business.
              </p>
            </div>
            <!-- /.widget -->
            <div class="widget mb-8">
              <h4 class="widget-title text-white mb-3">Contact Info</h4>
              <address>
                Moonshine St. 14/05 <br />
                Light City, London
              </address>
              <a href="mailto:first.last@email.com">info@email.com</a><br />
              00 (123) 456 78 90
            </div>
            <!-- /.widget -->
            <div class="widget mb-8">
              <h4 class="widget-title text-white mb-3">Learn More</h4>
              <ul class="list-unstyled">
                <BlocksNavbarComponentsLinks />
              </ul>
            </div>
            <!-- /.widget -->
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Follow Us</h4>
              <nav class="nav social social-white">
                <BlocksNavbarComponentsSocials />
              </nav>
              <!-- /.social -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.offcanvas -->
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
            href="#collapse-snippet-218"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-218"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17&quot;&gt;
      &lt;h2 class&#x3D;&quot;mb-3&quot;&gt;Classic - Transparent Background - Light Text&lt;&#x2F;h2&gt;
      &lt;p class&#x3D;&quot;lead mb-0&quot;&gt;
        Check out some of the live examples:
        &lt;nuxt-link to&#x3D;&quot;&#x2F;demo11&quot; class&#x3D;&quot;external&quot;&gt;Demo 11&lt;&#x2F;nuxt-link&gt;.
      &lt;&#x2F;p&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10&quot;&gt;
      &lt;header
        class&#x3D;&quot;wrapper image-wrapper bg-image pb-1&quot;
        style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg3.jpg)&quot;
      &gt;
        &lt;nav class&#x3D;&quot;navbar navbar-expand-lg classic transparent navbar-dark&quot;&gt;
          &lt;div class&#x3D;&quot;container flex-lg-row flex-nowrap align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;navbar-brand w-100&quot;&gt;
              &lt;nuxt-link to&#x3D;&quot;&#x2F;&quot;&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;logo-dark&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;logo-light&quot;
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
            &lt;div class&#x3D;&quot;navbar-other ms-lg-4&quot;&gt;
              &lt;ul class&#x3D;&quot;navbar-nav flex-row align-items-center ms-auto&quot;&gt;
                &lt;li class&#x3D;&quot;nav-item&quot;&gt;
                  &lt;a
                    class&#x3D;&quot;nav-link&quot;
                    data-bs-toggle&#x3D;&quot;offcanvas&quot;
                    data-bs-target&#x3D;&quot;#offcanvas-info&quot;
                    &gt;&lt;i class&#x3D;&quot;uil uil-info-circle&quot;&gt;&lt;&#x2F;i
                  &gt;&lt;&#x2F;a&gt;
                &lt;&#x2F;li&gt;
                &lt;li class&#x3D;&quot;nav-item d-none d-md-block&quot;&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    class&#x3D;&quot;btn btn-sm btn-white rounded-pill&quot;
                    data-bs-toggle&#x3D;&quot;modal&quot;
                    data-bs-target&#x3D;&quot;trueLink&quot;
                    &gt;Sign In&lt;&#x2F;a
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
        &lt;div class&#x3D;&quot;modal fade&quot; id&#x3D;&quot;modal-signin&quot; tabindex&#x3D;&quot;-1&quot;&gt;
          &lt;div class&#x3D;&quot;modal-dialog modal-dialog-centered modal-sm&quot;&gt;
            &lt;div class&#x3D;&quot;modal-content text-center&quot;&gt;
              &lt;div class&#x3D;&quot;modal-body&quot;&gt;
                &lt;button
                  type&#x3D;&quot;button&quot;
                  class&#x3D;&quot;btn-close&quot;
                  data-bs-dismiss&#x3D;&quot;modal&quot;
                  aria-label&#x3D;&quot;Close&quot;
                &gt;&lt;&#x2F;button&gt;
                &lt;h2 class&#x3D;&quot;mb-3 text-start&quot;&gt;Welcome Back&lt;&#x2F;h2&gt;
                &lt;p class&#x3D;&quot;lead mb-6 text-start&quot;&gt;
                  Fill your email and password to sign in.
                &lt;&#x2F;p&gt;
                &lt;form @submit.prevent&#x3D;&quot;handleSubmit&quot; class&#x3D;&quot;text-start mb-3&quot;&gt;
                  &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;email&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Email&quot;
                      id&#x3D;&quot;&quot;
                    &#x2F;&gt;
                    &lt;label for&#x3D;&quot;&quot;&gt;Email&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;form-floating password-field mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;password&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Password&quot;
                      id&#x3D;&quot;loginPassword&quot;
                    &#x2F;&gt;
                    &lt;span class&#x3D;&quot;password-toggle&quot;
                      &gt;&lt;i class&#x3D;&quot;uil uil-eye&quot;&gt;&lt;&#x2F;i
                    &gt;&lt;&#x2F;span&gt;
                    &lt;label for&#x3D;&quot;loginPassword&quot;&gt;Password&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;a class&#x3D;&quot;btn btn-primary rounded-pill btn-login w-100 mb-2&quot;
                    &gt;Sign In&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;form&gt;
                &lt;!-- &#x2F;form --&gt;
                &lt;p class&#x3D;&quot;mb-1&quot;&gt;
                  &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot;&gt;Forgot Password?&lt;&#x2F;a&gt;
                &lt;&#x2F;p&gt;
                &lt;p class&#x3D;&quot;mb-0&quot;&gt;
                  Don&#39;t have an account?
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    data-bs-target&#x3D;&quot;#modal-signup&quot;
                    data-bs-toggle&#x3D;&quot;modal&quot;
                    data-bs-dismiss&#x3D;&quot;modal&quot;
                    class&#x3D;&quot;hover&quot;
                    &gt;Sign up&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;p&gt;
                &lt;div class&#x3D;&quot;divider-icon my-4&quot;&gt;or&lt;&#x2F;div&gt;
                &lt;nav class&#x3D;&quot;nav social justify-content-center text-center&quot;&gt;
                  &lt;BlocksNavbarComponentsSocials2 &#x2F;&gt;
                &lt;&#x2F;nav&gt;
                &lt;!--&#x2F;.social --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.modal-content --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.modal-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.modal-dialog --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.modal --&gt;
        &lt;div class&#x3D;&quot;modal fade&quot; id&#x3D;&quot;modal-signup&quot; tabindex&#x3D;&quot;-1&quot;&gt;
          &lt;div class&#x3D;&quot;modal-dialog modal-dialog-centered modal-sm&quot;&gt;
            &lt;div class&#x3D;&quot;modal-content text-center&quot;&gt;
              &lt;div class&#x3D;&quot;modal-body&quot;&gt;
                &lt;button
                  type&#x3D;&quot;button&quot;
                  class&#x3D;&quot;btn-close&quot;
                  data-bs-dismiss&#x3D;&quot;modal&quot;
                  aria-label&#x3D;&quot;Close&quot;
                &gt;&lt;&#x2F;button&gt;
                &lt;h2 class&#x3D;&quot;mb-3 text-start&quot;&gt;Sign up to Sandbox&lt;&#x2F;h2&gt;
                &lt;p class&#x3D;&quot;lead mb-6 text-start&quot;&gt;
                  Registration takes less than a minute.
                &lt;&#x2F;p&gt;
                &lt;form @submit.prevent&#x3D;&quot;handleSubmit&quot; class&#x3D;&quot;text-start mb-3&quot;&gt;
                  &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;text&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Name&quot;
                      id&#x3D;&quot;loginName&quot;
                    &#x2F;&gt;
                    &lt;label for&#x3D;&quot;loginName&quot;&gt;Name&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;email&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Email&quot;
                      id&#x3D;&quot;&quot;
                    &#x2F;&gt;
                    &lt;label for&#x3D;&quot;&quot;&gt;Email&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;form-floating password-field mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;password&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Password&quot;
                      id&#x3D;&quot;loginPassword&quot;
                    &#x2F;&gt;
                    &lt;span class&#x3D;&quot;password-toggle&quot;
                      &gt;&lt;i class&#x3D;&quot;uil uil-eye&quot;&gt;&lt;&#x2F;i
                    &gt;&lt;&#x2F;span&gt;
                    &lt;label for&#x3D;&quot;loginPassword&quot;&gt;Password&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;form-floating password-field mb-4&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;password&quot;
                      class&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Confirm Password&quot;
                      id&#x3D;&quot;loginPasswordConfirm&quot;
                    &#x2F;&gt;
                    &lt;span class&#x3D;&quot;password-toggle&quot;
                      &gt;&lt;i class&#x3D;&quot;uil uil-eye&quot;&gt;&lt;&#x2F;i
                    &gt;&lt;&#x2F;span&gt;
                    &lt;label for&#x3D;&quot;loginPasswordConfirm&quot;&gt;Confirm Password&lt;&#x2F;label&gt;
                  &lt;&#x2F;div&gt;
                  &lt;a class&#x3D;&quot;btn btn-primary rounded-pill btn-login w-100 mb-2&quot;
                    &gt;Sign Up&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;form&gt;
                &lt;!-- &#x2F;form --&gt;
                &lt;p class&#x3D;&quot;mb-0&quot;&gt;
                  Already have an account?
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    data-bs-target&#x3D;&quot;#modal-signin&quot;
                    data-bs-toggle&#x3D;&quot;modal&quot;
                    data-bs-dismiss&#x3D;&quot;modal&quot;
                    class&#x3D;&quot;hover&quot;
                    &gt;Sign in&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;p&gt;
                &lt;div class&#x3D;&quot;divider-icon my-4&quot;&gt;or&lt;&#x2F;div&gt;
                &lt;nav class&#x3D;&quot;nav social justify-content-center text-center&quot;&gt;
                  &lt;BlocksNavbarComponentsSocials2 &#x2F;&gt;
                &lt;&#x2F;nav&gt;
                &lt;!--&#x2F;.social --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.modal-content --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.modal-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.modal-dialog --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.modal --&gt;
        &lt;div
          class&#x3D;&quot;offcanvas offcanvas-end text-inverse&quot;
          id&#x3D;&quot;offcanvas-info&quot;
          data-bs-scroll&#x3D;&quot;true&quot;
        &gt;
          &lt;div class&#x3D;&quot;offcanvas-header&quot;&gt;
            &lt;h3 class&#x3D;&quot;text-white fs-30 mb-0&quot;&gt;Sandbox&lt;&#x2F;h3&gt;
            &lt;button
              type&#x3D;&quot;button&quot;
              class&#x3D;&quot;btn-close btn-close-white&quot;
              data-bs-dismiss&#x3D;&quot;offcanvas&quot;
              aria-label&#x3D;&quot;Close&quot;
            &gt;&lt;&#x2F;button&gt;
          &lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;offcanvas-body pb-6&quot;&gt;
            &lt;div class&#x3D;&quot;widget mb-8&quot;&gt;
              &lt;p&gt;
                Sandbox is a multipurpose HTML5 template with various layouts
                which will be a great solution for your business.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.widget --&gt;
            &lt;div class&#x3D;&quot;widget mb-8&quot;&gt;
              &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Contact Info&lt;&#x2F;h4&gt;
              &lt;address&gt;
                Moonshine St. 14&#x2F;05 &lt;br &#x2F;&gt;
                Light City, London
              &lt;&#x2F;address&gt;
              &lt;a href&#x3D;&quot;mailto:first.last@email.com&quot;&gt;info@email.com&lt;&#x2F;a&gt;&lt;br &#x2F;&gt;
              00 (123) 456 78 90
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.widget --&gt;
            &lt;div class&#x3D;&quot;widget mb-8&quot;&gt;
              &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Learn More&lt;&#x2F;h4&gt;
              &lt;ul class&#x3D;&quot;list-unstyled&quot;&gt;
                &lt;BlocksNavbarComponentsLinks &#x2F;&gt;
              &lt;&#x2F;ul&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.widget --&gt;
            &lt;div class&#x3D;&quot;widget&quot;&gt;
              &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Follow Us&lt;&#x2F;h4&gt;
              &lt;nav class&#x3D;&quot;nav social social-white&quot;&gt;
                &lt;BlocksNavbarComponentsSocials &#x2F;&gt;
              &lt;&#x2F;nav&gt;
              &lt;!-- &#x2F;.social --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.widget --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.offcanvas-body --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.offcanvas --&gt;
      &lt;&#x2F;header&gt;
      &lt;!-- &#x2F;header --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
  
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const handleSubmit &#x3D; () &#x3D;&gt; {};
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
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
