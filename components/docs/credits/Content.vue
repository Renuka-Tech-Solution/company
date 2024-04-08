<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">JS</h2>
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="text-navy">
              <tr>
                <th scope="col" class="col-3">Package Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(elm, i) in packagesArray" :key="i">
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="#"
                    target="_blank"
                    >{{ elm.name }}</a
                  >
                </td>
                <td>{{ elm.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-2" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Images</h2>
      <div class="card">
        <div class="card-body">
          <h3>Pexels</h3>
          <p class="mb-5">
            To reach the collection of all images/videos from Pexels used in
            Sandbox, click
            <a
              href="https://www.pexels.com/collections/sandbox-gbw1t9c/"
              class="external"
              target="_blank"
              >here</a
            >.
          </p>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pexels.com/photo/man-in-blue-collared-top-using-imac-indoors-3182782/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pex1.jpg"
                    srcset="/assets/img/docs/pex1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pexels.com/photo/photo-of-people-using-laptop-s-3182759/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pex2.jpg"
                    srcset="/assets/img/docs/pex2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pexels.com/photo/group-of-people-sitting-indoors-3184314/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pex3.jpg"
                    srcset="/assets/img/docs/pex3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <hr class="mt-11 mb-10" />
          <h3>Rawpixel</h3>
          <p class="mb-5">
            To reach the collection of all images from Rawpixel used in Sandbox,
            click
            <a
              href="https://www.rawpixel.com/community-board/1391692/sandbox?sort=last_added&mode=shop&page=1"
              class="external"
              target="_blank"
              >here</a
            >.
          </p>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.rawpixel.com/image/56901/premium-photo-image-african-descent-analysing-analysis"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/raw1.jpg"
                    srcset="/assets/img/docs/raw1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.rawpixel.com/image/56894/premium-photo-image-african-descent-analysis-brainstorming"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/raw2.jpg"
                    srcset="/assets/img/docs/raw2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.rawpixel.com/image/56966/premium-photo-image-african-descent-analysing-analysis"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/raw3.jpg"
                    srcset="/assets/img/docs/raw3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <hr class="mt-11 mb-10" />
          <h3>Unsplash</h3>
          <p class="mb-5">
            To reach the collection of all images from Unsplash used in Sandbox,
            click
            <a
              href="https://unsplash.com/collections/vn4OtMorwCA/sandbox"
              class="external"
              target="_blank"
              >here</a
            >.
          </p>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://unsplash.com/photos/DMl5gG0yWWY"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/un1.jpg"
                    srcset="/assets/img/docs/un1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://unsplash.com/photos/Ecnx13MEPK0"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/un2.jpg"
                    srcset="/assets/img/docs/un2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://unsplash.com/photos/_-E_2D-wgjg"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/un3.jpg"
                    srcset="/assets/img/docs/un3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <hr class="mt-11 mb-10" />
          <h3>Freepik</h3>
          <p class="mb-5">
            To reach the Freepik collection first make sure you are logged into
            Freepik, then click
            <a
              href="https://www.freepik.com/user/collections/sandbox/2260699"
              class="external"
              target="_blank"
              >here</a
            >.
          </p>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/free-photo/community-young-people-posing-together_6981911.htm#&position=0&from_view=collections"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/fre1.jpg"
                    srcset="/assets/img/docs/fre1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/free-photo/group-positive-young-people-working-together_6981914.htm#&position=3&from_view=collections"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/fre2.jpg"
                    srcset="/assets/img/docs/fre2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/free-photo/community-young-people-happy-together_6981806.htm#&position=7&from_view=collections"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/fre3.jpg"
                    srcset="/assets/img/docs/fre3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <hr class="mt-11 mb-10" />
          <h3 class="mb-5">Pixeden</h3>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pix1.jpg"
                    srcset="/assets/img/docs/pix1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pixeden.com/psd-mock-up-templates/psd-notebook-mockup-set"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pix2.jpg"
                    srcset="/assets/img/docs/pix2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/pix3.jpg"
                    srcset="/assets/img/docs/pix3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <p class="mb-0">
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-macarons-box-packaging-mockup"
              class="external"
              target="_blank"
              >se3.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/product-psd-stationery-mockup-set"
              class="external"
              target="_blank"
              >se4.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
              class="external"
              target="_blank"
              >pd1.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/elegant-psd-invitation-mockup"
              class="external"
              target="_blank"
              >pd2.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/basic-mailing-stationery-mockup"
              class="external"
              target="_blank"
              >pd3.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/small-psd-square-box-mockup-set"
              class="external"
              target="_blank"
              >pd4.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-polaroid-photos-mockup"
              class="external"
              target="_blank"
              >pd5.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/hardcover-psd-book-mockup-scene"
              class="external"
              target="_blank"
              >pd6.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-stationery-office-pack-mockup"
              class="external"
              target="_blank"
              >pp1.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/simple-stationery-branding-vol3"
              class="external"
              target="_blank"
              >pp7.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/mini-envelope-psd-mockup"
              class="external"
              target="_blank"
              >pp8.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/stationery-branding-mock-up-vol-5-1"
              class="external"
              target="_blank"
              >pp9.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup"
              class="external"
              target="_blank"
              >se1.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup-2"
              class="external"
              target="_blank"
              >se2.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
              class="external"
              target="_blank"
              >rp1.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/stationery-psd-pocket-notebook-mockup"
              class="external"
              target="_blank"
              >rp2.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-notebook-mockup-set"
              class="external"
              target="_blank"
              >rp3.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-clipboard-stationery-mockup"
              class="external"
              target="_blank"
              >pd7.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-magazine-mockup-vol8"
              class="external"
              target="_blank"
              >pd8.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/square-psd-cardboard-box-mockup-2"
              class="external"
              target="_blank"
              >pd9.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/basic-stationery-branding-vol-5"
              class="external"
              target="_blank"
              >pd10.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-cardboard-packaging-mockup"
              class="external"
              target="_blank"
              >pd11.jpg</a
            >
            <a
              href="https://www.pixeden.com/psd-mock-up-templates/psd-shopping-bag-mockup"
              class="external"
              target="_blank"
              >pd12.jpg</a
            >
          </p>
          <hr class="mt-11 mb-10" />
          <h3 class="mb-5">Icons8</h3>
          <div class="row gy-6 mb-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/ico1.jpg"
                    srcset="/assets/img/docs/ico1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/ico2.jpg"
                    srcset="/assets/img/docs/ico2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/ico3.jpg"
                    srcset="/assets/img/docs/ico3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <p class="mb-0">
            <a
              href="https://icons8.com/photos/photo/ceramic-vases-home-collection--5b0bc6ec8b658800012318f1"
              class="external"
              target="_blank"
              >cs1.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/still-life-with-yellow-dried-flowers-and-a-lemon--5b0bc6f18b658800012318f3"
              class="external"
              target="_blank"
              >cs2.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/tender-gifts-for-a-tender-person--5b0bc7328b6588000123190d"
              class="external"
              target="_blank"
              >cs3.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/when-your-tea-is-made-with-love--5aba7d3a8b65880001a035cf"
              class="external"
              target="_blank"
              >cs4.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d458b65880001a035d1"
              class="external"
              target="_blank"
              >cs5.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
              class="external"
              target="_blank"
              >cs6.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/fruit-jelly-strip-getting-out-of-toothpaste-tube--5aba7cfc8b65880001a035ba"
              class="external"
              target="_blank"
              >cs7.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
              class="external"
              target="_blank"
              >cs8.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/bright-idea--5aba7a4a8b65880001a035ad"
              class="external"
              target="_blank"
              >cs9.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
              class="external"
              target="_blank"
              >cs10.jpg</a
            >
            <a
              href="https://icons8.com/photos/photo/flavorful-burst-of-color-and-taste--59d8d4b00b7a6a03ae47265d"
              class="external"
              target="_blank"
              >cs11.jpg</a
            >
            <a
              href="https://iconos8.es/photos/photo/lets-cook-mushrooms-in-a-sour-cream-sauce--59d8d4830b7a6a03ae472653"
              class="external"
              target="_blank"
              >cs12.jpg</a
            >
          </p>
          <hr class="mt-11 mb-10" />
          <h3 class="mb-5">Mockups</h3>
          <div class="row gy-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://creativemarket.com/RgraphicsDesign/34011-Web-Themes-Mock-ups"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo1.jpg"
                    srcset="/assets/img/docs/mo1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://unblast.com/free-flying-iphone-mockup-psd/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo2.jpg"
                    srcset="/assets/img/docs/mo2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.free-mockup.com/downloads/mobile-app-screens-mockup/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo3.jpg"
                    srcset="/assets/img/docs/mo3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.pixeden.com/psd-mock-up-templates/psd-iphone-12-mockup-set"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo4.jpg"
                    srcset="/assets/img/docs/mo4@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.ls.graphics/free/three-iphone-clay-mockups"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo5.jpg"
                    srcset="/assets/img/docs/mo5@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freemockupworld.com/iphone-x-clay-mockup-psd/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo6.jpg"
                    srcset="/assets/img/docs/mo6@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freemockupworld.com/iphone-on-bike-mockup/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo7.jpg"
                    srcset="/assets/img/docs/mo7@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810460.htm#query=clay%20mockup&position=10&from_view=keyword"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo8.jpg"
                    srcset="/assets/img/docs/mo8@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810461.htm#&position=31&from_view=undefined"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo9.jpg"
                    srcset="/assets/img/docs/mo9@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810388.htm#from_view=detail_alsolike"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo10.jpg"
                    srcset="/assets/img/docs/mo10@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810390.htm#from_view=detail_alsolike"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/mo11.jpg"
                    srcset="/assets/img/docs/mo11@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <hr class="mt-11 mb-10" />
          <h3 class="mb-5">UI Graphics</h3>
          <div class="row gy-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://freebiesui.com/figma-freebies/figma-app-designs/medical-app-design/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/oth.jpg"
                    srcset="/assets/img/docs/oth@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a
                  href="https://craftwork.design/downloads/dashboards-ui-kit/"
                  target="_blank"
                  ><nuxt-img
                    src="/assets/img/docs/oth2.jpg"
                    srcset="/assets/img/docs/oth2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-3" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-3">Icons</h2>
      <p class="lead mb-8">
        To reach the collections of icons used in Sandbox, go to pages
        <nuxt-link to="/docs/styleguide/icons-svg" class="internal"
          >SVG Icons</nuxt-link
        >
        and
        <nuxt-link to="/docs/styleguide/icons-font" class="internal"
          >Font Icons</nuxt-link
        >
      </p>
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="text-navy">
              <tr>
                <th scope="col" class="col-3">Source Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0 text-nowrap"
                    href="https://iconscout.com/unicons/explore/line"
                    target="_blank"
                    >Font Icons</a
                  >
                </td>
                <td>Web’s new favorite icon library, Unicons.</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0 text-nowrap"
                    href="https://www.flaticon.com/authors/monochrome/yellow"
                    target="_blank"
                    >SVG Lineal</a
                  >
                </td>
                <td>Monochrome icons from Freepik.</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0 text-nowrap"
                    href="https://www.flaticon.com/authors/pixel-perfect/tritone"
                    target="_blank"
                    >SVG Solid</a
                  >
                </td>
                <td>Tritone icons from Freepik.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-4" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-3">Illustrations</h2>
      <p class="lead mb-8">
        To reach the collections of illustrations used in Sandbox, click
        <nuxt-link to="/docs/styleguide/illustrations" class="internal"
          >here</nuxt-link
        >
      </p>
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="text-navy">
              <tr>
                <th scope="col" class="col-3">Source Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://www.freepik.com/"
                    target="_blank"
                    >Freepik</a
                  >
                </td>
                <td>Graphic resources for everyone.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-5" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Fonts</h2>
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="text-navy">
              <tr>
                <th scope="col" class="col-3">Source Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://fonts.google.com/specimen/Manrope"
                    target="_blank"
                    >Manrope</a
                  >
                </td>
                <td>
                  Open-source modern font family, designed by Mikhail Sharanda.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://github.com/wonderunit/font-thicccboi"
                    target="_blank"
                    >Thicccboi</a
                  >
                </td>
                <td>A free and open source font by Wonder Unit.</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://fonts.google.com/specimen/DM+Serif+Display"
                    target="_blank"
                    >DM Serif</a
                  >
                </td>
                <td>
                  A high-contrast transitional face, designed by Frank
                  Grießhammer.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://github.com/coreyhu/Urbanist"
                    target="_blank"
                    >Urbanist</a
                  >
                </td>
                <td>
                  A low-contrast, geometric sans-serif inspired by Modernist
                  typography.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    class="external bg-pale-primary my-0"
                    href="https://floriankarsten.github.io/space-grotesk/"
                    target="_blank"
                    >Space Grotesk</a
                  >
                </td>
                <td>A proportional sans-serif typeface variant.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
  </div>
</template>

<script setup>
const packagesArray = [
  {
    name: "aos",
    description:
      "AOS is a small library for animating elements on scroll. It provides a simple way to add animations to elements as they become visible during scrolling.",
  },
  {
    name: "bootstrap",
    description:
      "Bootstrap is a popular CSS framework that provides a set of styles and components to make it easier to create responsive and visually appealing web pages.",
  },
  {
    name: "clipboard",
    description:
      "Clipboard.js is a lightweight JavaScript library for copying text to the clipboard. It simplifies the process of creating copy-to-clipboard functionality.",
  },
  {
    name: "imagesloaded",
    description:
      "ImagesLoaded is a JavaScript library that helps detect when images have been loaded. It can be used to handle events or apply actions once images have fully loaded.",
  },
  {
    name: "isotope-layout",
    description:
      "Isotope is a JavaScript library for creating dynamic, filterable, and sortable layouts. It is commonly used for displaying and arranging elements in a visually appealing way.",
  },

  {
    name: "plyr",
    description:
      "Plyr is a simple, customizable, and accessible HTML5 media player. It supports audio and video playback with a modern user interface.",
  },
  {
    name: "prismjs",
    description:
      "Prism is a lightweight, extensible syntax highlighter. It supports a wide range of languages and themes.",
  },
  {
    name: "sass",
    description:
      "Sass is a popular CSS preprocessor that adds features like variables, nested rules, and mixins to standard CSS.",
  },
  {
    name: "swiper",
    description:
      "Swiper is a modern, mobile-friendly slider library with a wide range of customization options.",
  },
  {
    name: "typewriter-effect",
    description:
      "Typewriter Effect is a simple JavaScript library for creating typewriter-style text animations.",
  },
  {
    name: "video.js",
    description:
      "Video.js is a web video player library that provides a customizable player with support for various video formats.",
  },

  {
    name: "vue-tippy",
    description:
      "Vue-tippy is a Vue.js wrapper for Tippy.js, a library for creating tooltips. It provides a simple way to add tooltips to Vue components.",
  },
  {
    name: "@iconfu/svg-inject",
    description: "Replaces an img element with an inline SVG",
  },
];
</script>

<style lang="scss" scoped></style>
