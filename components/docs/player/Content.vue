<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">HTML5 Video - plyr</h2>
      <div class="card">
        <div class="card-body">
          <video
            poster="/assets/img/photos/movie.jpg"
            class="player"
            playsinline
            controls
            preload="none"
          >
            <source src="/assets/media/movie.mp4" type="video/mp4" />
          </video>
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
              ><code>&lt;video poster=&quot;./assets/img/photos/movie.jpg&quot; class=&quot;player&quot; playsinline controls preload=&quot;none&quot;&gt;
  &lt;source src=&quot;./assets/media/movie.mp4&quot; type=&quot;video/mp4&quot;&gt;
&lt;/video&gt;</code></pre>
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
      <h2 class="mb-5">Vimeo - plyr</h2>
      <div class="card">
        <div class="card-body">
          <div
            class="player"
            data-plyr-provider="vimeo"
            data-plyr-embed-id="15801179"
          ></div>
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
              ><code>&lt;div class=&quot;player&quot; data-plyr-provider=&quot;vimeo&quot; data-plyr-embed-id=&quot;15801179&quot;&gt;&lt;/div&gt;</code></pre>
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
      <h2 class="mb-5">YouTube - plyr</h2>
      <div class="card">
        <div class="card-body">
          <div
            class="player"
            data-plyr-provider="youtube"
            data-plyr-embed-id="j_Y2Gwaj7Gs"
          ></div>
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
              ><code>&lt;div class=&quot;player&quot; data-plyr-provider=&quot;youtube&quot; data-plyr-embed-id=&quot;j_Y2Gwaj7Gs&quot;&gt;&lt;/div&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-4" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Responsive Embed</h2>
      <div class="card">
        <div class="card-body">
          <div class="ratio ratio-16x9">
            <iframe
              class="rounded"
              src="https://www.youtube.com/embed/j_Y2Gwaj7Gs?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <!--/.ratio -->
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
              ><code>&lt;div class=&quot;ratio ratio-16x9&quot;&gt;
  ANY EMBED CODE (IFRAME, EMBED, OBJECT from YOUTUBE, VIMEO ETC.)
&lt;/div&gt;
&lt;!--/.ratio --&gt;</code></pre>
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
