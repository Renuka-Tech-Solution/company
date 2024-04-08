<template>
  <section id="snippet-11" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div
          class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center"
        >
          <h2 class="fs-15 text-uppercase text-muted mb-3">
            Why Choose Sandbox?
          </h2>
          <h3 class="display-4 mb-10 px-xl-10 px-xxl-15">
            Here are a few reasons why our customers choose Sandbox.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <ul
        class="nav nav-tabs nav-tabs-bg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li
          v-for="item in tabItems"
          @click="currentTab = item.id"
          :key="item.id"
          class="nav-item"
        >
          <a
            :class="[
              'nav-link',
              'd-flex',
              'flex-row',
              { active: item.id === currentTab },
            ]"
            :data-bs-toggle="item.id === 1 ? 'tab' : ''"
            :href="'#' + item.tabId"
          >
            <div>
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-md me-4"
                :class="item.iconColorClass"
                alt="photo"
              />
            </div>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- /.nav-tabs -->
      <div class="tab-content mt-6 mt-lg-8">
        <div
          :class="`tab-pane fade  ${currentTab == 1 ? 'show active' : ''}`"
          id="tab2-1"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <div class="row gx-md-5 gy-5 align-items-center">
                <div class="col-6">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex ms-auto"
                    src="/assets/img/photos/sa13.jpg"
                    srcset="/assets/img/photos/sa13@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-6">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa14.jpg"
                    srcset="/assets/img/photos/sa14@2x.jpg 2x"
                    alt="photo"
                  />
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa15.jpg"
                    srcset="/assets/img/photos/sa15@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Easy Usage</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-yellow">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-yellow mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div
          :class="`tab-pane fade ${currentTab == 2 ? 'show active' : ''}`"
          id="tab2-2"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="row gx-md-5 gy-5">
                <div class="col-5">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    src="/assets/img/photos/sa9.jpg"
                    srcset="/assets/img/photos/sa9@2x.jpg 2x"
                    alt="photo"
                  />
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa10.jpg"
                    srcset="/assets/img/photos/sa10@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-7">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa11.jpg"
                    srcset="/assets/img/photos/sa11@2x.jpg 2x"
                    alt="photo"
                  />
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex col-11"
                    src="/assets/img/photos/sa12.jpg"
                    srcset="/assets/img/photos/sa12@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Fast Transactions</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-green">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-green mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div
          :class="`tab-pane fade ${currentTab == 3 ? 'show active' : ''}`"
          id="tab2-3"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-6">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa5.jpg"
                    srcset="/assets/img/photos/sa5@2x.jpg 2x"
                    alt="photo"
                  />
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa6.jpg"
                    srcset="/assets/img/photos/sa6@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-6">
                  <nuxt-img
                    class="img-fluid rounded shadow-lg my-5"
                    src="/assets/img/photos/sa7.jpg"
                    srcset="/assets/img/photos/sa7@2x.jpg 2x"
                    alt="photo"
                  />
                  <nuxt-img
                    class="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa8.jpg"
                    srcset="/assets/img/photos/sa8@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Secure Payments</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-red">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-red mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-36"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-36"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-11&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div
          class&#x3D;&quot;col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center&quot;
        &gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;
            Why Choose Sandbox?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10 px-xl-10 px-xxl-15&quot;&gt;
            Here are a few reasons why our customers choose Sandbox.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;ul
        class&#x3D;&quot;nav nav-tabs nav-tabs-bg d-flex justify-content-between nav-justified flex-lg-row flex-column&quot;
      &gt;
        &lt;li
          v-for&#x3D;&quot;item in tabItems&quot;
          @click&#x3D;&quot;currentTab &#x3D; item.id&quot;
          :key&#x3D;&quot;item.id&quot;
          class&#x3D;&quot;nav-item&quot;
        &gt;
          &lt;a
            :class&#x3D;&quot;[
              &#39;nav-link&#39;,
              &#39;d-flex&#39;,
              &#39;flex-row&#39;,
              { active: item.id &#x3D;&#x3D;&#x3D; currentTab },
            ]&quot;
            :data-bs-toggle&#x3D;&quot;item.id &#x3D;&#x3D;&#x3D; 1 ? &#39;tab&#39; : &#39;&#39;&quot;
            :href&#x3D;&quot;&#39;#&#39; + item.tabId&quot;
          &gt;
            &lt;div&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;item.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-md me-4&quot;
                :class&#x3D;&quot;item.iconColorClass&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;a&gt;
        &lt;&#x2F;li&gt;
      &lt;&#x2F;ul&gt;
      &lt;!-- &#x2F;.nav-tabs --&gt;
      &lt;div class&#x3D;&quot;tab-content mt-6 mt-lg-8&quot;&gt;
        &lt;div
          :class&#x3D;&quot;&#x60;tab-pane fade  ${currentTab &#x3D;&#x3D; 1 ? &#39;show active&#39; : &#39;&#39;}&#x60;&quot;
          id&#x3D;&quot;tab2-1&quot;
        &gt;
          &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5 align-items-center&quot;&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex ms-auto&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa13.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa13@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg mb-5&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa14.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa14@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa15.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa15@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;h2 class&#x3D;&quot;mb-3&quot;&gt;Easy Usage&lt;&#x2F;h2&gt;
              &lt;p&gt;
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              &lt;&#x2F;p&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-yellow&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 3)&quot;
                  :key&#x3D;&quot;index&quot;
                  :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
                &gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-yellow mt-2&quot;&gt;Learn More&lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.tab-pane --&gt;
        &lt;div
          :class&#x3D;&quot;&#x60;tab-pane fade ${currentTab &#x3D;&#x3D; 2 ? &#39;show active&#39; : &#39;&#39;}&#x60;&quot;
          id&#x3D;&quot;tab2-2&quot;
        &gt;
          &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-6 order-lg-2&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
                &lt;div class&#x3D;&quot;col-5&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg my-5 d-flex ms-auto&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa9.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa9@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10 ms-auto&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa10.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa10@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-7&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg mb-5&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa11.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa11@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-11&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa12.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa12@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;h2 class&#x3D;&quot;mb-3&quot;&gt;Fast Transactions&lt;&#x2F;h2&gt;
              &lt;p&gt;
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              &lt;&#x2F;p&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-green&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 3)&quot;
                  :key&#x3D;&quot;index&quot;
                  :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
                &gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-green mt-2&quot;&gt;Learn More&lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.tab-pane --&gt;
        &lt;div
          :class&#x3D;&quot;&#x60;tab-pane fade ${currentTab &#x3D;&#x3D; 3 ? &#39;show active&#39; : &#39;&#39;}&#x60;&quot;
          id&#x3D;&quot;tab2-3&quot;
        &gt;
          &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg mb-5&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10 ms-auto&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg my-5&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;nuxt-img
                    class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8.jpg&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8@2x.jpg 2x&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;h2 class&#x3D;&quot;mb-3&quot;&gt;Secure Payments&lt;&#x2F;h2&gt;
              &lt;p&gt;
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              &lt;&#x2F;p&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-red&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 3)&quot;
                  :key&#x3D;&quot;index&quot;
                  :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
                &gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-red mt-2&quot;&gt;Learn More&lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.tab-pane --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.tab-content --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { checklistItems, tabItems } from &quot;~&#x2F;data&#x2F;features&quot;;
const currentTab &#x3D; ref(1);
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
import { checklistItems, tabItems } from "~/data/features";
const currentTab = ref(1);
</script>

<style lang="scss" scoped></style>
