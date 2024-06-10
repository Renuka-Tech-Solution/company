import { _ as __nuxt_component_0$2, a as __nuxt_component_6 } from './Footer-DnyCnWtn.mjs';
import { useSSRContext, mergeProps, unref, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useSeoMeta, b as _export_sfc, c as __nuxt_component_0$1$1 } from './server.mjs';
import { e as servicesPage, f as serviceHowDo } from './process-C1VkIrCV.mjs';
import { c as chunk } from './chunk-D-RQpRTf.mjs';
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

const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light" }, _attrs))}><div class="container pt-17 pb-19 pt-md-17 pb-md-20 text-center"><div class="row"><div class="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11"><h1 class="display-1 mb-3">Our Services</h1><p class="lead px-lg-7 px-xl-7 px-xxl-6"> We are a creative company that focuses on establishing <span class="underline">long-term relationships</span> with client&#39;s. </p></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = {
  __name: "Counter",
  __ssrInlineRender: true,
  props: ["parentClass", "time", "min", "max"],
  setup(__props) {
    const targetElement = ref();
    const props = __props;
    const counted = ref(props.min);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        ref_key: "targetElement",
        ref: targetElement,
        class: __props.parentClass
      }, _attrs))}>${ssrInterpolate(unref(counted))}</span>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Counter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Counter = _sfc_main$7;
const counter = [
  { count: 250, label: "Completed Projects" },
  { count: 130, label: "Satisfied Customers" },
  { count: 4, label: "Expert Employees" },
  { count: 4, label: "Certificates" }
];
const _sfc_main$6 = {
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mb-8" }, _attrs))}><div class="col-12 mt-n20"><figure class="rounded">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/assets/img/photos/services-hero.png",
        alt: "photo"
      }, null, _parent));
      _push(`</figure><div class="row"><div class="col-xl-10 mx-auto"><div class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top" style="${ssrRenderStyle({ "background-image": "url(/assets/img/photos/bg3.jpg)" })}"><div class="card-body p-9 p-xl-10"><div class="row align-items-center counter-wrapper gy-4 text-center"><!--[-->`);
      ssrRenderList(unref(counter), (counter2, index) => {
        _push(`<div class="col-6 col-lg-3"><h3 class="counter counter-lg text-white">`);
        _push(ssrRenderComponent(Counter, {
          parentClass: "",
          min: 50,
          max: counter2.count,
          time: 500
        }, null, _parent));
        _push(`+ </h3><p>${ssrInterpolate(counter2.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Counter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "snippet-3",
        class: "wrapper bg-light"
      }, _attrs))}><div class="container pt-5 pt-md-5 pb-5 pb-md-15 text-center"><div class="row"><div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2"><h2 class="fs-25 text-uppercase text-muted mb-3">What We Do?</h2><h3 class="display-4 mb-4 px-xl-10"> The service we offer is specifically designed to meet client&#39;s needs. </h3></div></div><div class="position-relative"><div class="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed="1" style="${ssrRenderStyle({ "bottom": "-0.5rem", "right": "-2.2rem", "z-index": "0" })}"></div><div class="shape bg-dot blue rellax w-16 h-17" data-rellax-speed="1" style="${ssrRenderStyle({ "top": "-0.5rem", "left": "-2.5rem", "z-index": "0" })}"></div><!--[-->`);
      ssrRenderList(unref(chunk)(unref(servicesPage), 3), (services, rowIndex) => {
        _push(`<div class="row gx-md-5 text-center mb-3"><!--[-->`);
        ssrRenderList(services, (service, rowCardIndex) => {
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
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Features.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Process",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="display-4 mb-3">How We Do It?</h2><p class="lead fs-lg mb-8"> We make your spending <span class="underline">stress-free</span> for you to have the perfect control. </p><div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line"><!--[-->`);
      ssrRenderList(unref(serviceHowDo), (item, index) => {
        _push(`<div class="col-md-6 col-lg-3"><span class="${ssrRenderClass([
          "icon",
          "btn",
          "btn-circle",
          "btn-lg",
          "btn-primary",
          "pe-none",
          "mb-4"
        ])}"><span class="number">${ssrInterpolate(item.id)}</span></span><h4 class="mb-1">${ssrInterpolate(item.title)}</h4><p class="mb-0">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Process.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: ["options"],
  setup(__props) {
    const videoPlayer = ref();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<video${ssrRenderAttrs(mergeProps({
        style: { "width": "100%", "height": "fit-content", "display": "flex", "justify-content": "center", "align-items": "center", "position": "relative", "border-radius": "4px", "overflow": "hidden" },
        ref_key: "videoPlayer",
        ref: videoPlayer,
        class: "video-js"
      }, _attrs))}></video>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VideoPlayer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "ModalVideo",
  __ssrInlineRender: true,
  props: ["modalOpen"],
  emits: ["modalClose"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonVideoPlayer = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "glightbox-body",
        class: `glightbox-container nodalvideo ${__props.modalOpen ? "active" : ""} glightbox-clean`
      }, _attrs))} data-v-dff790c6><div class="gloader visible" style="${ssrRenderStyle({ "display": "none" })}" data-v-dff790c6></div><div class="goverlay" data-v-dff790c6></div><div class="gcontainer" data-v-dff790c6><button class="gclose gbtn" data-v-dff790c6><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" data-v-dff790c6><g data-v-dff790c6><g data-v-dff790c6><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z" data-v-dff790c6></path></g></g><g data-v-dff790c6><g data-v-dff790c6><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" data-v-dff790c6></path></g></g></svg></button><div class="videoContainer" data-v-dff790c6>`);
      _push(ssrRenderComponent(_component_CommonVideoPlayer, { options: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "/assets/media/movie.mp4",
            type: "video/mp4"
          }
        ]
      } }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ModalVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dff790c6"]]);
const _sfc_main$1 = {
  __name: "CtaVideo",
  __ssrInlineRender: true,
  setup(__props) {
    const modalOpen = ref();
    const modalClose = () => {
      modalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonModalVideo = __nuxt_component_0;
      _push(`<!--[--><section class="wrapper image-wrapper bg-image bg-overlay" style="${ssrRenderStyle({ "background-image": "url(/assets/img/photos/shopify-bg1.jpg)" })}"><div class="container py-18 text-center"><div class="row"><div class="col-lg-10 col-xl-10 col-xxl-8 mx-auto"><div class="btn btn-circle btn-white btn-play ripple mx-auto mb-5 cursor-pointer"><i class="icn-caret-right"></i></div><h2 class="display-4 px-lg-10 px-xl-13 px-xxl-10 mb-10 text-white"> Find out everything you need to know about creating a business process model. </h2></div></div></div></section>`);
      _push(ssrRenderComponent(_component_CommonModalVideo, {
        modalOpen: unref(modalOpen),
        onModalClose: modalClose
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/CtaVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Services",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0$2;
      const _component_ServicesHero = __nuxt_component_1;
      const _component_ServicesCounter = __nuxt_component_2;
      const _component_ServicesFeatures = __nuxt_component_3;
      const _component_ServicesProcess = __nuxt_component_4;
      const _component_ServicesCtaVideo = __nuxt_component_5;
      const _component_FootersFooter = __nuxt_component_6;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesHero, null, null, _parent));
      _push(`<section class="wrapper bg-light angled upper-end"><div class="container pb-14 pb-md-16">`);
      _push(ssrRenderComponent(_component_ServicesCounter, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesFeatures, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesProcess, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_ServicesCtaVideo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-CxcACF3M.mjs.map
