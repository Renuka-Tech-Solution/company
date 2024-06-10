import { _ as __nuxt_component_0, a as __nuxt_component_6 } from './Footer-DnyCnWtn.mjs';
import { u as useSeoMeta, b as _export_sfc, c as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { s as shopifyCertificate, a as shopifyClients } from './clients-CUx26W2h.mjs';
import { s as skills, L as LineProgressbar } from './skils-Dzuy94dN.mjs';
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

const _sfc_main$5 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="container pt-17 pt-md-17 pb-6 pb-md-10 text-center"><div class="row"><div class="col-md-10 col-lg-8 col-xl-7 col-xxl-8 mb-md-12 mx-auto"><h1 class="display-1 mb-3">Shopify Mastery</h1><p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-8"> Expert Shopify design and development, crafting stunning ecommerce websites with seamless functionality and engaging user experiences. Elevate your online presence. </p></div><figure class="rounded">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/assets/img/photos/shopify-hero.png",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div></div><div class="container py-10 pt-md-12 pt-lg-14 pb-md-2"><div class="row gx-lg-8 gx-xl-12 gy-3 gy-lg-0"><div class="col-lg-5 mt-lg-15"><h3 class="display-5 mb-3 pe-xxl-5">Shopify Certified Partner</h3><p class="lead fs-lg mb-0 pe-xxl-5"> Official Shopify Partner: Trusted expertise for your e-commerce success. </p></div><div class="col-lg-7"><div class="row row-cols-1 mx-10 md:row md:row-cols-2 row-cols-md-2 gx-0 gx-md-6 gx-xl-5 gy-10 align-items-center"><!--[-->`);
      ssrRenderList(unref(shopifyCertificate), (elm, i) => {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopify/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "WhatWeOffer",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        id: 1,
        classes: "col-md-5 offset-md-1 align-self-end",
        cardClass: "bg-pale-yellow",
        iconSrc: "/assets/img/icons/lineal/telephone-3.svg",
        iconClass: "icon-svg icon-svg-md text-yellow mb-3",
        title: "24/7 Support",
        description: "Expert support available round-the-clock for Shopify services."
      },
      {
        id: 2,
        classes: "col-md-6 align-self-end",
        cardClass: "bg-pale-red",
        iconSrc: "/assets/img/icons/lineal/shield.svg",
        iconClass: "icon-svg icon-svg-md text-red mb-3",
        title: "Secure Payments",
        description: "Guaranteed secure transactions for your Shopify store's payment checkout."
      },
      {
        id: 3,
        classes: "col-md-5",
        cardClass: "bg-pale-leaf",
        iconSrc: "/assets/img/icons/lineal/cloud-computing-3.svg",
        iconClass: "icon-svg icon-svg-md text-leaf mb-3",
        title: "Daily Updates",
        description: "Daily progress updates ensure transparency and timely completion."
      },
      {
        id: 4,
        classes: "col-md-6 align-self-start",
        cardClass: "bg-pale-primary",
        iconSrc: "/assets/img/icons/lineal/analytics.svg",
        iconClass: "icon-svg icon-svg-md text-primary mb-3",
        title: "Market Research",
        description: "Tailored market research for Shopify to meet your unique needs"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pt-8 pt-md-14 pt-lg-17 pb-2 pb-lg-12"><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center"><div class="col-lg-5"><h2 class="fs-15 text-uppercase text-muted mb-3">What We Offer?</h2><h3 class="display-4 mb-5"> The service we offer is specifically designed to meet your needs. </h3><p> Our Shopify website development service is meticulously tailored to fulfill your unique requirements, ensuring a perfect fit for your business. </p></div><div class="col-lg-7 order-lg-2"><div class="row gx-md-5 gy-5"><!--[-->`);
      ssrRenderList(cards, (item, index) => {
        _push(`<div class="${ssrRenderClass(item.classes)}"><div class="${ssrRenderClass([item.cardClass, "card"])}"><div class="card-body">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.iconSrc,
          class: item.iconClass,
          alt: "photo"
        }, null, _parent));
        _push(`<h4>${ssrInterpolate(item.title)}</h4><p class="mb-0">${ssrInterpolate(item.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopify/WhatWeOffer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container py-5 pt-md-10 pt-lg-0 pb-md-12 pb-lg-16"><div class="row text-center"><div class="col-lg-10 mx-auto"><h2 class="fs-15 text-uppercase text-muted mb-3 mt-12"> What we provide ? </h2><h3 class="display-4 mb-5"> Find out everything you need to know about what we provide in Our Shopify Service </h3><div class="row gx-lg-8 gx-xl-12 process-wrapper mt-9 mx-6 mx-md-2"><div class="col-md-4 d-flex justify-content-start flex-column mb-8">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/shopify-checkout.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Shopify Checkout Upgrades</h4><p class="text-start mb-1"> \u2022 Upgrade Script Editor <br> \xA0\xA0\xA0\xA0to Checkout Function </p><p class="text-start mb-1"> \u2022 Checkout Validation </p><p class="text-start"> \u2022 UI Extensions </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/api-upgrades.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">API Deprecation Upgrades</h4><p class="text-start mb-1"> \u2022 Webhook Deprecation </p><p class="text-start"> \u2022 App Integration Updates </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/erp-integration.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">ERP Integration</h4><p class="text-start mb-1"> \u2022 Salesforce </p><p class="text-start mb-1"> \u2022 IFS </p><p class="text-start mb-1"> \u2022 EDI </p><p class="text-start mb-1"> \u2022 CIN7 </p><p class="text-start mb-1"> \u2022 Netsuite </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/migration.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Migration (Any to Shopify) </h4><p class="text-start mb-1"> \u2022 Magento </p><p class="text-start"> \u2022 Wordpress </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/store-setup.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Store Setup</h4><p class="text-start mb-1"> \u2022 301 SEO </p><p class="text-start mb-1"> \u2022 Google Merchant </p><p class="text-start mb-1"> \u2022 Facebook Merchant </p><p class="text-start mb-1"> \u2022 Product Approvals </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/3rd-party-integration.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">3rd Party Integration</h4><p class="text-start mb-1"> \u2022 Recharge </p><p class="text-start"> \u2022 Klavio </p></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/retainer-maintenance.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Retainer Maintenance</h4></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/business-logic-customization.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Advance Business Logic Customization</h4></div><div class="col-md-4 d-flex justify-content-start flex-column mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/assets/img/shopify/services/custom-storefront-designing.png",
    class: "icon-svg icon-svg-lg text-primary mb-3",
    alt: "photo"
  }, null, _parent));
  _push(`<h4 class="mb-1 text-start">Custom Storefront Designing</h4></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopify/Provide.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Service",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pt-6 pt-md-6 pb-md-10 pt-lg-8 pb-lg-12"><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center"><div class="col-lg-7"><figure>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-auto",
        src: "/assets/img/illustrations/shopify-i8.webp",
        srcset: "/assets/img/illustrations/shopify-i8.webp",
        alt: "photo"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-5"><h3 class="display-5 mb-6 pe-xxl-6"> Delivering swift solutions to simplify Shopify experiences for our customers&#39; convenience. </h3><ul class="progress-list mt-3"><!--[-->`);
      ssrRenderList(unref(skills), (item, index) => {
        _push(`<li><p>${ssrInterpolate(item.title)}</p><div class="${ssrRenderClass(`progressbar line ${item.color}`)}">`);
        _push(ssrRenderComponent(LineProgressbar, {
          max: item.value
        }, null, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopify/Service.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container py-8 pt-md-8 pb-md-12"><div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0"><h3 class="display-6 mb-0 mb-lg-3 pe-xxl-5 text-center">Shopify Satisfied Clients</h3><div class="col-lg-7 mx-auto"><div class="row row-cols-1 mx-10 md:row md:row-cols-2 row-cols-md-3 gx-0 gx-md-6 gx-xl-5 gy-10 d-flex align-items-center"><!--[-->`);
      ssrRenderList(unref(shopifyClients), (elm, i) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopify/Clients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "shopify",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Shopify",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0;
      const _component_ShopifyHero = __nuxt_component_1;
      const _component_ShopifyWhatWeOffer = __nuxt_component_2;
      const _component_ShopifyProvide = __nuxt_component_3;
      const _component_ShopifyService = __nuxt_component_4;
      const _component_ShopifyClients = __nuxt_component_5;
      const _component_FootersFooter = __nuxt_component_6;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_ShopifyHero, null, null, _parent));
      _push(ssrRenderComponent(_component_ShopifyWhatWeOffer, null, null, _parent));
      _push(ssrRenderComponent(_component_ShopifyProvide, null, null, _parent));
      _push(ssrRenderComponent(_component_ShopifyService, null, null, _parent));
      _push(ssrRenderComponent(_component_ShopifyClients, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shopify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shopify-guY6-MKC.mjs.map
