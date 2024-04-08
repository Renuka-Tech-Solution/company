<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Typer</h2>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9">
              <h2 class="display-1 mb-0">
                Sandbox is effortless and powerful with <br />
                <DocsTextAnimationsAnimation1 />
              </h2>
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
              <pre class="language-html"><code>&lt;template&gt;
  &lt;span class&#x3D;&quot;typer text-primary&quot; id&#x3D;&quot;typewriter&quot;&gt;&lt;&#x2F;span&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import Typewriter from &quot;typewriter-effect&#x2F;dist&#x2F;core&quot;;

onMounted(() &#x3D;&gt; {
  new Typewriter(&quot;#typewriter&quot;, {
    strings: [&quot;customer satisfaction&quot;, &quot;business needs&quot;, &quot;creative ideas&quot;],
    autoStart: true,
  });
});
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
    </section>
    <section id="snippet-2" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Typer with Loop</h2>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-9">
              <h2 class="display-1 mb-0">
                Sandbox focuses on <br /><DocsTextAnimationsAnimation2 />
              </h2>
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
                &lt;template&gt;
  &lt;span class&#x3D;&quot;typer text-primary&quot; id&#x3D;&quot;typewriter2&quot;&gt;&lt;&#x2F;span&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import Typewriter from &quot;typewriter-effect&#x2F;dist&#x2F;core&quot;;

onMounted(() &#x3D;&gt; {
  new Typewriter(&quot;#typewriter2&quot;, {
    strings: [&quot;customer satisfaction&quot;, &quot;business needs&quot;, &quot;creative ideas&quot;],
    autoStart: true,
    loop: true,
  });
});
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
    <section id="snippet-3" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Rotator</h2>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9">
              <h2 class="display-1 mb-0">
                Sandbox is effortless and powerful with
                <DocsTextAnimationsAnimation3 />
              </h2>
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
              <pre class="language-html"><code>
                &lt;template&gt;
  &lt;span class&#x3D;&quot;rotator-fade text-primary&quot;&gt;
    &lt;span
      v-if&#x3D;&quot;animatedText&quot;
      class&#x3D;&quot;animate__animated animate__fadeInDown&quot;
      style&#x3D;&quot;display: inline-block&quot;
      &gt;&lbrace;&lbrace; currentStr &rbrace;&rbrace;&lt;&#x2F;span
    &gt;
    &lt;span
      v-else&#x3D;&quot;animatedText&quot;
      class&#x3D;&quot;animate__animated animate__fadeInDown&quot;
      style&#x3D;&quot;display: inline-block; visibility: hidden&quot;
      &gt;&lbrace;&lbrace; currentStr &rbrace;&rbrace;&lt;&#x2F;span
    &gt;
  &lt;&#x2F;span&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const strings &#x3D; [&quot;easy usage&quot;, &quot;fast transactions&quot;, &quot;secure payments&quot;];
const currentStr &#x3D; ref(&quot;mobile design&quot;);
const animatedText &#x3D; ref(true);



const changeText = ref();
onMounted(() => {
  changeText.value = setInterval(() &#x3D;&gt; {
  animatedText.value &#x3D; false;
  setTimeout(() &#x3D;&gt; {
    animatedText.value &#x3D; true;
  }, 200);
  if (currentStr.value &#x3D;&#x3D; strings[0]) {
    currentStr.value &#x3D; strings[1];
  } else if (currentStr.value &#x3D;&#x3D; strings[1]) {
    currentStr.value &#x3D; strings[2];
  } else {
    currentStr.value &#x3D; strings[0];
  }
}, 2000);
});
onUnmounted(() => {
  clearInterval(changeText?.value);
});
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
