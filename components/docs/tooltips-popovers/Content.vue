<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Tooltips</h2>
      <div class="card">
        <DocsTooltipsPopoversTooltips />

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
&lt;template&gt;
  &lt;div class&#x3D;&quot;card-body tooltips&quot;&gt;
    &lt;a
      href&#x3D;&quot;#&quot;
      class&#x3D;&quot;me-5&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on top&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;top&#39;,
      }&quot;
      &gt;Tooltip on top&lt;&#x2F;a
    &gt;
    &lt;a
      href&#x3D;&quot;#&quot;
      class&#x3D;&quot;me-5&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on right&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;right&#39;,
      }&quot;
      &gt;Tooltip on right&lt;&#x2F;a
    &gt;
    &lt;a
      href&#x3D;&quot;#&quot;
      class&#x3D;&quot;me-5&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on bottom&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;bottom&#39;,
      }&quot;
      &gt;Tooltip on bottom&lt;&#x2F;a
    &gt;
    &lt;a
      href&#x3D;&quot;#&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on left&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;left&#39;,
      }&quot;
      &gt;Tooltip on left&lt;&#x2F;a
    &gt;
    &lt;div class&#x3D;&quot;mt-5&quot;&gt;&lt;&#x2F;div&gt;
    &lt;button
      type&#x3D;&quot;button&quot;
      class&#x3D;&quot;btn btn-soft-primary rounded-pill me-2&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on top&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;top&#39;,
      }&quot;
    &gt;
      Tooltip on top
    &lt;&#x2F;button&gt;
    &lt;button
      type&#x3D;&quot;button&quot;
      class&#x3D;&quot;btn btn-soft-primary rounded-pill me-2&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on right&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;right&#39;,
      }&quot;
    &gt;
      Tooltip on right
    &lt;&#x2F;button&gt;
    &lt;button
      type&#x3D;&quot;button&quot;
      class&#x3D;&quot;btn btn-soft-primary rounded-pill me-2&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on bottom&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;bottom&#39;,
      }&quot;
    &gt;
      Tooltip on bottom
    &lt;&#x2F;button&gt;
    &lt;button
      type&#x3D;&quot;button&quot;
      class&#x3D;&quot;btn btn-soft-primary rounded-pill me-2&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary fs-15 weight-400 text-white rounded&#39;&gt;Tooltip on left&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        placement: &#39;left&#39;,
      }&quot;
    &gt;
      Tooltip on left
    &lt;&#x2F;button&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { directive as VTippy } from &quot;vue-tippy&quot;;
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot;&gt;&lt;&#x2F;style&gt;
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
      <h2 class="mb-5">Popovers</h2>
      <div class="card">
        <div class="card-body">
          <DocsTooltipsPopoversProvers />
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
&lt;template&gt;
  &lt;a
    class&#x3D;&quot;btn btn-primary rounded-pill me-2&quot;
    v-tippy&#x3D;&quot;{
      content: &#x60; &lt;div class&#x3D;&#39;popover&#39; role&#x3D;&#39;tooltip&#39;&gt;
    &lt;div class&#x3D;&#39;popover-arrow&#39;&gt;&lt;&#x2F;div&gt;
    &lt;h3 class&#x3D;&#39;popover-header&#39;&gt;Sample Title&lt;&#x2F;h3&gt;
    &lt;div class&#x3D;&#39;popover-body&#39;&gt;
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;&#x60;,
      allowHTML: true,
      trigger: &#39;click&#39;,
      placement: &#39;top&#39;,
    }&quot;
  &gt;
    Popover on top
  &lt;&#x2F;a&gt;
  &lt;a
    class&#x3D;&quot;btn btn-primary rounded-pill me-2&quot;
    v-tippy&#x3D;&quot;{
      content: &#x60; &lt;div class&#x3D;&#39;popover&#39; role&#x3D;&#39;tooltip&#39;&gt;
    &lt;div class&#x3D;&#39;popover-arrow&#39;&gt;&lt;&#x2F;div&gt;
    &lt;h3 class&#x3D;&#39;popover-header&#39;&gt;Sample Title&lt;&#x2F;h3&gt;
    &lt;div class&#x3D;&#39;popover-body&#39;&gt;
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;&#x60;,
      allowHTML: true,
      trigger: &#39;click&#39;,
      placement: &#39;right&#39;,
    }&quot;
  &gt;
    Popover on right
  &lt;&#x2F;a&gt;
  &lt;a
    class&#x3D;&quot;btn btn-primary rounded-pill me-2&quot;
    v-tippy&#x3D;&quot;{
      content: &#x60; &lt;div class&#x3D;&#39;popover&#39; role&#x3D;&#39;tooltip&#39;&gt;
    &lt;div class&#x3D;&#39;popover-arrow&#39;&gt;&lt;&#x2F;div&gt;
    &lt;h3 class&#x3D;&#39;popover-header&#39;&gt;Sample Title&lt;&#x2F;h3&gt;
    &lt;div class&#x3D;&#39;popover-body&#39;&gt;
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;&#x60;,
      allowHTML: true,
      trigger: &#39;click&#39;,
      placement: &#39;bottom&#39;,
    }&quot;
  &gt;
    Popover on bottom
  &lt;&#x2F;a&gt;
  &lt;a
    class&#x3D;&quot;btn btn-primary rounded-pill me-2&quot;
    v-tippy&#x3D;&quot;{
      content: &#x60; &lt;div class&#x3D;&#39;popover&#39; role&#x3D;&#39;tooltip&#39;&gt;
    &lt;div class&#x3D;&#39;popover-arrow&#39;&gt;&lt;&#x2F;div&gt;
    &lt;h3 class&#x3D;&#39;popover-header&#39;&gt;Sample Title&lt;&#x2F;h3&gt;
    &lt;div class&#x3D;&#39;popover-body&#39;&gt;
      Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis
      natoque.
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;&#x60;,
      allowHTML: true,
      trigger: &#39;click&#39;,
      placement: &#39;left&#39;,
    }&quot;
  &gt;
    Popover on left
  &lt;&#x2F;a&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { directive as VTippy } from &quot;vue-tippy&quot;;
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;
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
