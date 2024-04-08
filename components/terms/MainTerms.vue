<template>
  <div class="container">
    <div class="row gx-0">
      <aside
        class="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block"
      >
        <div class="widget">
          <nav id="sidebar-nav">
            <ul class="list-unstyled text-reset scrollspyLinks">
              <li v-for="(item, index) in navLinks" :key="index">
                <a
                  :class="['nav-link', 'scroll', { active: item.active }]"
                  :href="item.href"
                >
                  {{ item.number }}. {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
          <!-- /nav -->
        </div>
        <!-- /.widget -->
      </aside>
      <!-- /column -->
      <div class="col-xl-8">
        <section id="terms-conditions " class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">1. Terms and Conditions</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="privacy-policy" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">2. Privacy Policy</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-primary">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="user-policy" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">3. User Policy</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="copyrights" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">4. Copyrights</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-primary">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="cookies" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">5. Cookies</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="account-billing" class="wrapper py-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">6. Account & Billing</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Nullam quis risus eget urna mollis ornare vel
                eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
              <p>
                Sed posuere consectetur est at lobortis. Maecenas faucibus
                mollis interdum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec id elit non mi
                porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";

const navLinks = ref([
  {
    number: 1,
    title: "Terms & Conditions",
    href: "#terms-conditions",
    active: true,
  },
  {
    number: 2,
    title: "Privacy Policy",
    href: "#privacy-policy",
    active: false,
  },
  { number: 3, title: "User Policy", href: "#user-policy", active: false },
  { number: 4, title: "Copyrights", href: "#copyrights", active: false },
  { number: 5, title: "Cookies", href: "#cookies", active: false },
  {
    number: 6,
    title: "Account & Billing",
    href: "#account-billing",
    active: false,
  },
]);

import addScrollspy from "~/utlis/addScrollSpy";
import addSmoothScroll from "~/utlis/smoothScroll";
function ititScrollspy() {
  addScrollspy("");
}
onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", ititScrollspy);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", ititScrollspy);
});
</script>

<style lang="scss" scoped></style>
