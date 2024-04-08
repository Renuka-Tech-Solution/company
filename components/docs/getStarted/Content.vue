<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Overview</h2>
      <div class="card">
        <div class="card-body">
          <p>
            This guide will help you get started with Sandbox. All the
            information regarding file structure, build tools, components,
            credits, license and FAQ can be found here.
          </p>
          <p>
            If you have any questions that are beyond the scope of this help
            documentation, please feel free to contact us with the links below
            and please don't forget to provide your website URL.
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
          <div
            class="card bg-soft-blue shadow-lg card-border-start border-soft-blue text-navy mt-10"
          >
            <div class="card-body">
              <p><strong>Please remember...</strong></p>
              <ul class="unordered-list mb-0">
                <li>
                  Requests sent during weekends or on holidays will be replied
                  on business days.
                </li>
                <li>
                  We only provide support for the issues related to the features
                  that are included in the template. Debugging or providing
                  guides on how to make custom modifications are not part of our
                  support. Thank you for understanding.
                </li>
              </ul>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-2" class="wrapper pt-16">
      <h2 class="mb-5">File Structure</h2>
      <div class="card">
        <div class="card-body">
          <ul class="list-unstyled mb-0">
            <li>
              <code class="folder bg-pale-primary">pages</code> All pages exist
              inside this folder. <strong>Use this folder</strong> if you want
              to create new page or edit any page.
            </li>
            <li>
              <code class="folder bg-pale-primary">public</code> All template
              files like Fonts / CSS / IMG / Media exist inside in this folder
              <ul>
                <li>
                  <code class="folder bg-pale-primary">public/assets/scss</code>
                  Contains all sass file for styling
                </li>
                <li>
                  <code class="folder bg-pale-primary">public/assets/css</code>
                  Contains all css file for styling
                </li>
                <li>
                  <code class="folder bg-pale-primary"
                    >public/assets/fonts</code
                  >
                  Contains Fonts files inside this folder
                </li>
                <li>
                  <code class="folder bg-pale-primary">public/assets/img</code>
                  All <mark class="doc">image, svg</mark> files inside this
                  folder we used in the demos
                </li>
                <li>
                  <code class="folder bg-pale-primary"
                    >public/assets/media</code
                  >
                  All videos inside this folder we used in the demos
                </li>
              </ul>
            </li>
            <li>
              <code class="folder bg-pale-primary">components</code>
              Contains all components inside this folder. If you want to need
              any component modification find from here.
              <ul>
                <li>
                  <code class="folder bg-pale-primary">components/block</code>
                  Contains all pages sections or blocks inside here
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/about</code>
                  Contains all components of about pages
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/contact</code>
                  Contains all components of contact pages
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/homes</code>
                  Contains all components of home pages
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/pricing</code>
                  Contains all components of pricing pages
                </li>
                <li>
                  <code class="folder bg-pale-primary"
                    >components/projects</code
                  >
                  Contains all components of project pages
                </li>
                <li>
                  <code class="folder bg-pale-primary"
                    >components/services</code
                  >
                  Contains all components of service pages
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/job</code>
                  Contains all components of job pages
                </li>
                <li>
                  <code class="folder bg-pale-primary">components/terms</code>
                  Contains all components of terms page
                </li>

                <li>
                  <code class="folder bg-pale-primary">components/common</code>
                  Contains all common static component or blocks exists here.
                </li>
              </ul>
            </li>
            <li>
              <code class="folder bg-pale-primary">data</code> Contains all
              project dummy data inside this folder.
            </li>

            <li>
              <code class="folder bg-pale-primary">utils</code> It contains all
              utility functions inside this folder. In this template we used
              some utility all function exist here
            </li>
            <li>
              <code class="file bg-pale-primary">package.json</code> Includes
              the list of dependencies to install from npm.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="snippet-3" class="wrapper py-16">
      <h2 class="mb-5">Installation</h2>
      <div class="card">
        <div class="card-body">
          <ol class="mb-0">
            <li>
              Install
              <a
                href="https://nodejs.org/en/"
                class="external"
                target="_blank"
                rel="noreferrer"
                >Node.js</a
              >
              if you don’t have it yet.
            </li>
            <li>
              Unzip the template package and in the root project folder
              <code class="folder">sandbox</code>, go to your command line and
              run <kbd class="terminal">npm install</kbd>. This will install the
              npm packages listed in the
              <code class="file">package.json</code> file.
            </li>
            <li>Run <kbd class="terminal">npm run dev</kbd> command.</li>
            <li>
              You should now have the project files set up and all the npm
              packages installed.
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
