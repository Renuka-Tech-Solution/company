<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-3">Line</h2>
      <p class="lead">Available color options:</p>
      <p class="lead mb-8">
        <code class="code">primary</code>, <code class="code">aqua</code>,
        <code class="code">green</code>, <code class="code">leaf</code>,
        <code class="code">navy</code>, <code class="code">orange</code>,
        <code class="code">pink</code>, <code class="code">purple</code>,
        <code class="code">red</code>, <code class="code">violet</code>,
        <code class="code">yellow</code>, <code class="code">fuchsia</code>,
        <code class="code">sky</code>, <code class="code">grape</code>,
        <code class="code">soft-primary</code>,
        <code class="code">soft-aqua</code>,
        <code class="code">soft-green</code>,
        <code class="code">soft-leaf</code>,
        <code class="code">soft-navy</code>,
        <code class="code">soft-orange</code>,
        <code class="code">soft-pink</code>,
        <code class="code">soft-purple</code>,
        <code class="code">soft-red</code>,
        <code class="code">soft-violet</code>,
        <code class="code">soft-yellow</code>,
        <code class="code">soft-fuchsia</code>,
        <code class="code">soft-sky</code>, <code class="code">soft-grape</code>
      </p>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-7">
              <ul class="progress-list mb-10">
                <li>
                  <p>Marketing</p>
                  <div class="progressbar line blue">
                    <CommonLineProgressbar :max="100" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Strategy</p>
                  <div class="progressbar line green">
                    <CommonLineProgressbar :max="80" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Development</p>
                  <div class="progressbar line red">
                    <CommonLineProgressbar :max="85" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Stabilization</p>
                  <div class="progressbar line yellow">
                    <CommonLineProgressbar :max="175" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
              </ul>
              <!-- /.progress-list -->
              <ul class="progress-list">
                <li>
                  <p>Marketing</p>
                  <div class="progressbar line soft-blue">
                    <CommonLineProgressbar :max="100" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Strategy</p>
                  <div class="progressbar line soft-green">
                    <CommonLineProgressbar :max="80" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Development</p>
                  <div class="progressbar line soft-red">
                    <CommonLineProgressbar :max="85" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
                <li>
                  <p>Stabilization</p>
                  <div class="progressbar line soft-yellow">
                    <CommonLineProgressbar :max="75" />
                    <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                  </div>
                </li>
              </ul>
              <!-- /.progress-list -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
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
              <pre class="language-html"><code>
              &lt;ul class&#x3D;&quot;progress-list&quot;&gt;
                &lt;li&gt;
                  &lt;p&gt;Marketing&lt;&#x2F;p&gt;
                  &lt;div class&#x3D;&quot;progressbar line soft-blue&quot;&gt;
                    &lt;CommonLineProgressbar :max&#x3D;&quot;100&quot; &#x2F;&gt;
                    &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;CommonLineProgressbar --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
                &lt;li&gt;
                  &lt;p&gt;Strategy&lt;&#x2F;p&gt;
                  &lt;div class&#x3D;&quot;progressbar line soft-green&quot;&gt;
                    &lt;CommonLineProgressbar :max&#x3D;&quot;80&quot; &#x2F;&gt;
                    &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;CommonLineProgressbar --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
                &lt;li&gt;
                  &lt;p&gt;Development&lt;&#x2F;p&gt;
                  &lt;div class&#x3D;&quot;progressbar line soft-red&quot;&gt;
                    &lt;CommonLineProgressbar :max&#x3D;&quot;85&quot; &#x2F;&gt;
                    &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;CommonLineProgressbar --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
                &lt;li&gt;
                  &lt;p&gt;Stabilization&lt;&#x2F;p&gt;
                  &lt;div class&#x3D;&quot;progressbar line soft-yellow&quot;&gt;
                    &lt;CommonLineProgressbar :max&#x3D;&quot;75&quot; &#x2F;&gt;
                    &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;CommonLineProgressbar --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              </code></pre>
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
      <h2 class="mb-3">Semi Circle</h2>
      <p class="lead">Available color options:</p>
      <p class="lead mb-8">
        <code class="code">primary</code>, <code class="code">aqua</code>,
        <code class="code">green</code>, <code class="code">leaf</code>,
        <code class="code">navy</code>, <code class="code">orange</code>,
        <code class="code">pink</code>, <code class="code">purple</code>,
        <code class="code">red</code>, <code class="code">violet</code>,
        <code class="code">yellow</code>, <code class="code">fuchsia</code>,
        <code class="code">sky</code>, <code class="code">grape</code>,
        <code class="code">soft-primary</code>,
        <code class="code">soft-aqua</code>,
        <code class="code">soft-green</code>,
        <code class="code">soft-leaf</code>,
        <code class="code">soft-navy</code>,
        <code class="code">soft-orange</code>,
        <code class="code">soft-pink</code>,
        <code class="code">soft-purple</code>,
        <code class="code">soft-red</code>,
        <code class="code">soft-violet</code>,
        <code class="code">soft-yellow</code>,
        <code class="code">soft-fuchsia</code>,
        <code class="code">soft-sky</code>, <code class="code">soft-grape</code>
      </p>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6 text-center">
            <div class="col-md-6 col-lg-3">
              <div class="progressbar semi-circle blue" data-value="40">
                <CommonCircleProgressbar :max="40" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
            </div>
            <!-- /column -->
            <div class="col-md-6 col-lg-3">
              <div class="progressbar semi-circle green" data-value="40">
                <CommonCircleProgressbar :max="80" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
            </div>
            <!-- /column -->
            <div class="col-md-6 col-lg-3">
              <div class="progressbar semi-circle soft-red" data-value="40">
                <CommonCircleProgressbar :max="65" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
            </div>
            <!-- /column -->
            <div class="col-md-6 col-lg-3">
              <div class="progressbar semi-circle soft-yellow" data-value="40">
                <CommonCircleProgressbar :max="45" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
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
              <pre class="language-html"><code>
          &lt;div class&#x3D;&quot;row gy-6 text-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;progressbar semi-circle blue&quot; data-value&#x3D;&quot;40&quot;&gt;
                &lt;CommonCircleProgressbar :max&#x3D;&quot;40&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;progressbar semi-circle green&quot; data-value&#x3D;&quot;40&quot;&gt;
                &lt;CommonCircleProgressbar :max&#x3D;&quot;80&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;progressbar semi-circle soft-red&quot; data-value&#x3D;&quot;40&quot;&gt;
                &lt;CommonCircleProgressbar :max&#x3D;&quot;65&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;progressbar semi-circle soft-yellow&quot; data-value&#x3D;&quot;40&quot;&gt;
                &lt;CommonCircleProgressbar :max&#x3D;&quot;45&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
              </code></pre>
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
