import { _ as __nuxt_component_0, a as __nuxt_component_6$1 } from './Footer-DnyCnWtn.mjs';
import { u as useSeoMeta, b as _export_sfc, c as __nuxt_component_0$1, d as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createTextVNode, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { s as services, c as strategy, d as chooseUs } from './process-C1VkIrCV.mjs';
import { c as chunk } from './chunk-D-RQpRTf.mjs';
import { h as homeFAQ } from './faq-CDXo95Sm.mjs';
import { c as clients } from './clients-CUx26W2h.mjs';
import 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';

const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-gradient-primary" }, _attrs))}><div class="container pt-18 pt-md-17 text-center"><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center"><div class="col-lg-7"><figure>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    "data-aos": "zoom-in",
    "data-aos-once": "true",
    "data-aos-delay": "300",
    class: "w-auto",
    src: "/assets/img/illustrations/i2.webp",
    srcset: "/assets/img/illustrations/i2.webp",
    alt: "photo"
  }, null, _parent));
  _push(`</figure></div><div class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start"><h1 class="display-1 mb-5 mx-md-n5 mx-lg-0" data-aos="fade-up" data-aos-once="true" data-aos-delay=""> Grow Your Business with Our Solutions. </h1><p class="lead fs-lg mb-7" data-aos="fade-up" data-aos-once="true" data-aos-delay="100"> Transforming client visions into stunning virtual reality websites, crafting unique digital experiences that captivate and engage audiences. </p></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Service",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "snippet-3",
        class: "wrapper bg-light"
      }, _attrs))}><div class="container pt-10 pt-sm-10 pt-md-2 pt-lg-17 pb-13 pb-md-15 text-center"><div class="row"><div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2"><h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2><h3 class="display-4 mb-2 px-xl-10"> The service we offer is specifically designed to meet client&#39;s needs. </h3></div></div><div class="position-relative"><div class="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed="1" style="${ssrRenderStyle({ "bottom": "-0.5rem", "right": "-2.2rem", "z-index": "0" })}"></div><div class="shape bg-dot yellow rellax w-16 h-17" data-rellax-speed="1" style="${ssrRenderStyle({ "top": "-0.5rem", "left": "-2.5rem", "z-index": "0" })}"></div><!--[-->`);
      ssrRenderList(unref(chunk)(unref(services), 3), (_services, rowIndex) => {
        _push(`<div class="row gx-md-5 text-center mb-3"><!--[-->`);
        ssrRenderList(_services, (service, rowCardIndex) => {
          _push(`<div class="col-md-4 col-xl-4 mb-3"><div class="card service shadow-lg h-100"><div class="card-body px-3 py-5">`);
          _push(ssrRenderComponent(_component_nuxt_img, {
            src: service.iconSrc,
            class: ["icon-svg icon-svg-md mb-4", service.iconColorClass],
            alt: "photo"
          }, null, _parent));
          _push(`<h4>${ssrInterpolate(service.title)}</h4><p class="mb-2">${ssrInterpolate(service.description)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/services",
        class: "btn btn-sm btn-primary rounded-pill px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`More Services`);
          } else {
            return [
              createTextVNode("More Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Service.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Strategy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light angled upper-start lower-start" }, _attrs))}><div class="container py-3 pt-lg-5 pb-lg-5"><div class="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-10 align-items-center"><div class="col-lg-6"><h2 class="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2><h3 class="display-4 mb-5"> Here are 3 working steps to build your website. </h3><p> Crafting Your Digital Presence: Discover how our strategic approach transforms your vision into a captivating website. From design concepts to user experience, we tailor solutions for maximum impact and engagement. </p><p class="mb-6 mb-md-0"> We customize features and functionalities to match your unique needs, delivering a website that stands out and performs. </p></div><div class="col-lg-6 order-lg-2"><!--[-->`);
      ssrRenderList(unref(strategy), (item, index) => {
        _push(`<div class="${ssrRenderClass([{
          "me-lg-6": index === 0,
          "ms-lg-13": index === 1,
          "mx-lg-6": index === 2,
          "mt-6": index > 0
        }, "card"])}"><div class="card-body p-4"><div class="d-flex flex-row"><div><span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">${ssrInterpolate(item.number)}</span></span></div><div><h4 class="mb-1">${ssrInterpolate(item.title)}</h4><p class="mb-0">${ssrInterpolate(item.description)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center"><div class="col-lg-7"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/home-i6.png",
        srcset: "/assets/img/illustrations/home-i6.png",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-16 text-uppercase text-muted mb-3">Why Choose Us?</h2><h3 class="display-5 mb-7"> We transform client visions into virtual reality. </h3><div class="accordion accordion-wrapper" id="accordionExample-1"><!--[-->`);
      ssrRenderList(unref(homeFAQ), (elm, i) => {
        _push(`<div class="card plain accordion-item"><div class="card-header"${ssrRenderAttr("id", `heading1-${elm.id}`)}><button class="${ssrRenderClass(`${!i ? "accordion-button" : "collapsed"}`)}" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse1-${elm.id}`)} aria-expanded="true"${ssrRenderAttr("aria-controls", `collapse1-${elm.id}`)}>${ssrInterpolate(elm.question)}</button></div><div${ssrRenderAttr("id", `collapse1-${elm.id}`)} class="${ssrRenderClass(`accordion-collapse collapse ${!i ? "show" : ""} `)}"${ssrRenderAttr("aria-labelledby", `heading1-${elm.id}`)} data-bs-parent="#accordionExample-1"><div class="card-body"><p>${ssrInterpolate(elm.answer)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Strategy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const teamMembers2 = [
  {
    id: 1,
    avatarSrc: "/assets/img/avatars/mukesh-ashtekar.png",
    name: "Mukesh Ashtekar",
    position: "Chief Technical Officer"
  },
  {
    id: 2,
    avatarSrc: "/assets/img/avatars/piyush-ashtekar.png",
    name: "Piyush Ashtekar",
    position: "Business Analyst"
  },
  {
    id: 3,
    avatarSrc: "/assets/img/avatars/alex-oritogun.png",
    name: "Alex Oritogun",
    position: "Business Development Manager"
  },
  {
    id: 4,
    avatarSrc: "/assets/img/avatars/ghanashyam-solanki.png",
    name: "Ghanashyam Solanki",
    position: "Backend Developer"
  },
  {
    id: 5,
    avatarSrc: "/assets/img/avatars/shailesh-makwana.png",
    name: "Shailesh Makwana",
    position: "Frontend Developer"
  }
];
const _sfc_main$3 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-gradient-primary" }, _attrs))}><div class="container pb-6 pt-lg-15 pb-md-10 pb-lg-12"><div class="position-relative mt-10 mt-lg-n23 mt-xl-n25"><div class="row text-center"><div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto"><h2 class="fs-16 text-uppercase text-muted mb-3">Our Team</h2><h3 class="display-4 mb-2 px-md-13 px-lg-4 px-xl-0"> Meet Our Development Team </h3></div></div><div class="position-relative"><div class="shape bg-dot blue rellax w-16 h-17" data-rellax-speed="1" style="${ssrRenderStyle({ "bottom": "0.5rem", "right": "-1.7rem", "z-index": "0" })}"></div><div class="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style="${ssrRenderStyle({ "top": "0.5rem", "left": "-1.7rem", "z-index": "0" })}"></div><div class="row grid-view gy-xl-0"><!--[-->`);
      ssrRenderList(unref(teamMembers2), (elm, i) => {
        _push(`<div class="col-md-6 col-xl-4 mb-3"><div class="card shadow-lg"><div class="card-body d-flex justify-content-center flex-column">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          class: "rounded-circle w-18 mb-4 m-auto",
          src: elm.avatarSrc,
          alt: "photo"
        }, null, _parent));
        _push(`<h4 class="mb-1 m-auto text-center">${ssrInterpolate(elm.name)}</h4><div class="meta mb-2 m-auto">${ssrInterpolate(elm.position)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "OurSolutions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light mt-10 mb-8 mb-lg-12" }, _attrs))}><div class="container"><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center"><div class="col-lg-7 order-lg-2"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/about-i8.webp",
        srcset: "/assets/img/illustrations/about-i8.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-16 text-uppercase text-muted mb-3">Our Solutions</h2><h3 class="display-6 mb-5"> Our solution helps you manage your spending effectively, ensuring financial control and reducing stress. </h3><p class="mb-6"> Efficient spending management for financial control, minimizing stress and maximizing confidence in your budget management. </p><div class="row gy-3"><div class="col-xl-6"><ul class="icon-list bullet-bg bullet-soft-primary mb-0"><!--[-->`);
      ssrRenderList(unref(chooseUs).slice(0, 2), (item, index) => {
        _push(`<li class="${ssrRenderClass({ "mt-3": index > 0 })}"><span><i class="uil uil-check"></i></span><span>${ssrInterpolate(item.text)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-xl-6"><ul class="icon-list bullet-bg bullet-soft-primary mb-0"><!--[-->`);
      ssrRenderList(unref(chooseUs).slice(2, 4), (item, index) => {
        _push(`<li class="${ssrRenderClass({ "mt-3": index > 0 })}"><span><i class="uil uil-check"></i></span><span>${ssrInterpolate(item.text)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/OurSolutions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light angled upper-end lower-end" }, _attrs))}><div class="container py-14 pt-lg-14 pb-lg-15"><div class="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-lg-18 align-items-center"><div class="col-lg-7"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/about-i5.webp",
        srcset: "/assets/img/illustrations/about-i5.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-16 text-uppercase text-muted mb-3">Let\u2019s Talk</h2><h3 class="display-4 mb-3"> Let&#39;s make something great together. We are trusted by over 400+ clients. </h3><p> Turning visions into standout online experiences. Specialists in website development, Shopify services, and beyond. Trust us to bring your digital dreams to life with expertise and innovation. </p></div></div><div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mt-3"><div class="col-lg-4 mt-lg-50"><h2 class="fs-15 text-uppercase text-muted mb-3">Our Clients</h2><h3 class="display-5 mb-3 pe-xxl-5">Trusted by over 400+ clients</h3><p class="lead fs-lg mb-0 pe-xxl-5"> We bring solutions to make life easier for our client&#39;s. </p></div><div class="col-lg-8"><div class="row row-cols-1 mx-10 row-cols-md-3 row-cols-lg-4 gx-0 gx-md-8 gx-xl-7 gy-10 align-items-center"><!--[-->`);
      ssrRenderList(unref(clients), (elm, i) => {
        _push(`<div class="col"><figure class="px-3 px-md-0 px-xxl-1">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: elm.src,
          alt: "photo"
        }, null, _parent));
        _push(`</figure></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Clients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Tech Renuka",
      description: "Code, Create, Connect"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0;
      const _component_HomeHero = __nuxt_component_1;
      const _component_HomeService = __nuxt_component_2;
      const _component_HomeStrategy = __nuxt_component_3;
      const _component_HomeTeam = __nuxt_component_4;
      const _component_HomeOurSolutions = __nuxt_component_5;
      const _component_HomeClients = __nuxt_component_6;
      const _component_FootersFooter = __nuxt_component_6$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "thicccboi-font" }, _attrs))}><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeService, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeStrategy, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeOurSolutions, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeClients, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CKbwGU3M.mjs.map
