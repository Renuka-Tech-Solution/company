import { _ as __nuxt_component_0, a as __nuxt_component_6$1 } from './Footer-DnyCnWtn.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSeoMeta, b as _export_sfc, c as __nuxt_component_0$1 } from './server.mjs';
import { s as skills, L as LineProgressbar } from './skils-Dzuy94dN.mjs';
import { a as aboutSkills, b as aboutWorks } from './process-C1VkIrCV.mjs';
import { a as aboutFAQ } from './faq-CDXo95Sm.mjs';
import { c as clients } from './clients-CUx26W2h.mjs';
import { a as aboutContact } from './contact-orCVi5CM.mjs';
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pt-17 pb-20 pt-md-17 pb-md-23 text-center"><div class="row"><div class="col-xl-5 mx-auto mb-6"><h1 class="display-1 mb-3">About Us</h1><p class="lead mb-0"> A company turning ideas into beautiful things. </p></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_CommonLineProgressbar = LineProgressbar;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pb-14 pb-md-16"><div class="row text-center mb-12 mb-md-15"><div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/about-i8.webp",
        srcset: "/assets/img/illustrations/about-i8.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div></div><div class="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center"><div class="col-lg-6 order-lg-2"><ul class="progress-list"><!--[-->`);
      ssrRenderList(unref(skills), (item, index) => {
        _push(`<li><p>${ssrInterpolate(item.title)}</p><div class="${ssrRenderClass(`progressbar line ${item.color}`)}">`);
        _push(ssrRenderComponent(_component_CommonLineProgressbar, {
          max: item.value
        }, null, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-lg-6"><h3 class="display-5 mb-5"> The full service we are offering is specifically designed to meet your business needs and projects. </h3></div></div><div class="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center"><!--[-->`);
      ssrRenderList(unref(aboutSkills), (elm, i) => {
        _push(`<div class="col-md-6 col-lg-3">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: elm.iconSrc,
          class: "icon-svg icon-svg-md text-blue mb-3",
          alt: "photo"
        }, null, _parent));
        _push(`<h4>${ssrInterpolate(elm.title)}</h4><p class="mb-2">${ssrInterpolate(elm.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Skills.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center"><div class="col-lg-7"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/about-i3.webp",
        srcset: "/assets/img/illustrations/about-i3.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-15 text-uppercase text-line text-primary mb-3">How It Works?</h2><h3 class="display-5 mb-7 pe-xxl-5"> Everything you need on creating a business process. </h3><!--[-->`);
      ssrRenderList(unref(aboutWorks), (item, index) => {
        _push(`<div class="${ssrRenderClass(`d-flex flex-row ${index != 2 ? "mb-4" : ""}`)}"><div>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.iconSrc,
          class: ["icon-svg icon-svg-sm", ["text-" + item.iconColor, "me-4"]],
          alt: "photo"
        }, null, _parent));
        _push(`</div><div><h4 class="mb-1">${ssrInterpolate(item.title)}</h4><p class="mb-1">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/HowItWorks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row gx-lg-8 gx-xl-12 gy-10 align-items-center" }, _attrs))}><div class="col-lg-7 order-lg-2"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/i2.webp",
        srcset: "/assets/img/illustrations/i2.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-15 text-uppercase text-line text-primary mb-3"> Why Choose Us? </h2><h3 class="display-5 mb-7"> A few reasons why our valued customers choose us. </h3><div class="accordion accordion-wrapper" id="accordionExample-1"><!--[-->`);
      ssrRenderList(unref(aboutFAQ), (elm, i) => {
        _push(`<div class="card plain accordion-item"><div class="card-header"${ssrRenderAttr("id", `heading1-${elm.id}`)}><button class="${ssrRenderClass(`${!i ? "accordion-button" : "collapsed"}`)}" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse1-${elm.id}`)} aria-expanded="true"${ssrRenderAttr("aria-controls", `collapse1-${elm.id}`)}>${ssrInterpolate(elm.question)}</button></div><div${ssrRenderAttr("id", `collapse1-${elm.id}`)} class="${ssrRenderClass(`accordion-collapse collapse ${!i ? "show" : ""} `)}"${ssrRenderAttr("aria-labelledby", `heading1-${elm.id}`)} data-bs-parent="#accordionExample-1"><div class="card-body"><p>${ssrInterpolate(elm.answer)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Faq.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light angled upper-end lower-end" }, _attrs))}><div class="container pb-md-15 pt-lg-1 pb-lg-15"><div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0"><div class="mx-auto mb-lg-10 mb-md-3"><h2 class="fs-15 text-uppercase text-muted text-center mb-3"> Our Happy Clients </h2><h3 class="display-5 mb-3 pe-xxl-5 text-center"> Trusted by over 400+ clients </h3><p class="lead fs-lg mb-0 pe-xxl-5 text-center"> We bring solutions to make life easier for our client&#39;s. </p></div><div class="col-md-12"><div class="row row-cols-1 mx-10 row-cols-md-2 row-cols-lg-4 mx-10 gx-0 gx-md-8 gx-xl-7 gy-10 d-flex justify-content-center align-items-center"><!--[-->`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Clients.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pt-12 pt-md-14 pb-10 pb-md-12"><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center"><div class="col-lg-7"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/about-i5.webp",
        srcset: "/assets/img/illustrations/about-i5.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h2 class="fs-15 text-uppercase text-line text-primary text-center mb-3"> Get In Touch </h2><h3 class="display-5 mb-7"> Got any questions? Don&#39;t hesitate to get in touch. </h3><!--[-->`);
      ssrRenderList(unref(aboutContact), (item) => {
        _push(`<div class="d-flex flex-row"><div><div class="icon text-primary fs-28 me-6 mt-n1"><i class="${ssrRenderClass(item.iconClass)}"></i></div></div><div><h5 class="mb-1">${ssrInterpolate(item.title)}</h5>`);
        if (item.address) {
          _push(`<address>${ssrInterpolate(item.address.line1)}<br class="d-none d-md-block">${ssrInterpolate(item.address.line2)}</address>`);
        } else {
          _push(`<!---->`);
        }
        if (item.content) {
          _push(`<p>${ssrInterpolate(item.content)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.mail) {
          _push(`<a${ssrRenderAttr("href", item.mail)} class="link-body">${ssrInterpolate(item.mail)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0;
      const _component_AboutHero = __nuxt_component_1;
      const _component_AboutSkills = __nuxt_component_2;
      const _component_AboutHowItWorks = __nuxt_component_3;
      const _component_AboutFaq = __nuxt_component_4;
      const _component_AboutClients = __nuxt_component_5;
      const _component_AboutContact = __nuxt_component_6;
      const _component_FootersFooter = __nuxt_component_6$1;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutHero, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSkills, null, null, _parent));
      _push(`<section class="wrapper bg-light"><div class="container py-14 py-md-16">`);
      _push(ssrRenderComponent(_component_AboutHowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutFaq, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_AboutClients, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutContact, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CpVDC5X9.mjs.map
