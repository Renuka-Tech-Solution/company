import { _ as __nuxt_component_0, a as __nuxt_component_6 } from './Footer-DnyCnWtn.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, unref, mergeProps, computed, watch } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useSeoMeta, b as _export_sfc, d as __nuxt_component_0$2, c as __nuxt_component_0$1 } from './server.mjs';
import { directive } from 'vue-tippy';
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

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-frame overflow-hidden" }, _attrs))}><div class="wrapper bg-light"><div class="container pt-17 pb-5 pt-md-17 text-center"><div class="row"><div class="col-lg-10 col-xxl-8 mx-auto"><h1 class="display-2 mb-1"> Check out some of our awesome projects with creative ideas. </h1></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Lightbox",
  __ssrInlineRender: true,
  props: ["images", "activeLightBox", "firstSlideIndex"],
  emits: ["setActiveLightBox"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentSlideIndex = ref();
    const index = computed(() => props.firstSlideIndex);
    watch(index, () => {
      currentSlideIndex.value = index.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "myModal",
        class: `modalcustom ${__props.activeLightBox ? "activeImageLightBox" : ""}`
      }, _attrs))}><div class="close cursor" style="${ssrRenderStyle({ "z-index": "1000" })}"><span>\xD7</span></div><div class="modal-contentcustom"><div class="numbertext">${ssrInterpolate(currentSlideIndex.value + 1)} / ${ssrInterpolate(__props.images.length)}</div><!--[-->`);
      ssrRenderList(__props.images, (elm, i) => {
        _push(`<div class="${ssrRenderClass([{ fadein: currentSlideIndex.value === i }, "mySlides"])}" style="${ssrRenderStyle({
          display: currentSlideIndex.value === i ? "block" : "none",
          height: "100%"
        })}">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: elm,
          style: { "height": "94vh", "width": "100%", "object-fit": "contain", "margin": "auto auto", "margin-top": "3vh" },
          alt: "image"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><a class="prev">\u276E</a><a class="next">\u276F</a></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Lightbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$2;
const blooms = [
  {
    id: 1,
    title: "Bloom-s",
    imageUrl: "/assets/img/photos/blooms/1.png",
    imageUrlFull: "/assets/img/photos/blooms/1.png"
  },
  {
    id: 2,
    title: "Bloom-s",
    imageUrl: "/assets/img/photos/blooms/2.png",
    imageUrlFull: "/assets/img/photos/blooms/2.png"
  },
  {
    id: 3,
    title: "Bloom-s",
    imageUrl: "/assets/img/photos/blooms/3.png",
    imageUrlFull: "/assets/img/photos/blooms/3.png"
  }
];
const fayolalearning = [
  {
    id: 4,
    title: "Fayola Learning",
    imageUrl: "/assets/img/photos/fayola-learning/1.png",
    imageUrlFull: "/assets/img/photos/fayola-learning/1.png",
    gallery: "project-2"
  },
  {
    id: 5,
    title: "Fayola Learning",
    imageUrl: "/assets/img/photos/fayola-learning/2.png",
    imageUrlFull: "/assets/img/photos/fayola-learning/2.png",
    gallery: "project-2"
  },
  {
    id: 6,
    title: "Fayola Learning",
    imageUrl: "/assets/img/photos/fayola-learning/3.png",
    imageUrlFull: "/assets/img/photos/fayola-learning/3.png",
    gallery: "project-2"
  }
];
const lohatk = [
  {
    id: 7,
    title: "Lohatk",
    imageUrl: "/assets/img/photos/lohatk/1.png",
    imageUrlFull: "/assets/img/photos/lohatk/1.png",
    gallery: "project-3"
  },
  {
    id: 8,
    title: "Lohatk",
    imageUrl: "/assets/img/photos/lohatk/2.png",
    imageUrlFull: "/assets/img/photos/lohatk/2.png",
    gallery: "project-3"
  },
  {
    id: 9,
    title: "Lohatk",
    imageUrl: "/assets/img/photos/lohatk/3.png",
    imageUrlFull: "/assets/img/photos/lohatk/3.png",
    gallery: "project-3"
  }
];
const vanikajewels = [
  {
    id: 10,
    title: "Vanika Jewels",
    imageUrl: "/assets/img/photos/vanikajewels/1.png",
    imageUrlFull: "/assets/img/photos/vanikajewels/1.png",
    gallery: "project-4"
  },
  {
    id: 11,
    title: "Vanika Jewels",
    imageUrl: "/assets/img/photos/vanikajewels/2.png",
    imageUrlFull: "/assets/img/photos/vanikajewels/2.png",
    gallery: "project-4"
  },
  {
    id: 12,
    title: "Vanika Jewels",
    imageUrl: "/assets/img/photos/vanikajewels/3.png",
    imageUrlFull: "/assets/img/photos/vanikajewels/3.png",
    gallery: "project-4"
  }
];
const jiyawatches = [
  {
    id: 13,
    title: "Jiya Watches",
    imageUrl: "/assets/img/photos/jiyawatches/1.png",
    imageUrlFull: "/assets/img/photos/jiyawatches/1.png",
    gallery: "project-5"
  },
  {
    id: 14,
    title: "Jiya Watches",
    imageUrl: "/assets/img/photos/jiyawatches/2.png",
    imageUrlFull: "/assets/img/photos/jiyawatches/2.png",
    gallery: "project-5"
  },
  {
    id: 15,
    title: "Jiya Watches",
    imageUrl: "/assets/img/photos/jiyawatches/3.png",
    imageUrlFull: "/assets/img/photos/jiyawatches/3.png",
    gallery: "project-5"
  }
];
const _sfc_main$1 = {
  __name: "ProjectList",
  __ssrInlineRender: true,
  setup(__props) {
    const activeLightBox = ref(false);
    const currentSlideIndex = ref();
    const images = ref([]);
    const setActiveLightBox = (val, i, items) => {
      if (i != void 0) {
        currentSlideIndex.value = i;
      }
      if (items) {
        images.value = items.map((elm) => elm.imageUrlFull);
      }
      activeLightBox.value = val;
    };
    ref();
    ref();
    ref();
    ref();
    ref();
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_CommonLightbox = __nuxt_component_2$1;
      _push(`<!--[--><section class="wrapper bg-light"><div class="container py-4 py-md-6 py-lg-10"><div class="row mt-6"><div class="col-xl-10 mx-auto"><div class="projects-tiles"><div class="project grid grid-view"><div class="row g-6 isotope"><div class="item col-md-6"><div class="project-details d-flex justify-content-center flex-column"><div class="post-header"><h2 class="post-title display-1 mb-3">Bloom-s</h2></div><div class="post-content">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "https://bloom-s.de/",
        class: "display-6 hover link-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit Website`);
          } else {
            return [
              createTextVNode("Visit Website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(unref(blooms), (item, index) => {
        _push(`<div class="item col-md-6"><figure${ssrRenderAttrs(mergeProps({ class: "itooltip itooltip-light hover-scale rounded" }, ssrGetDirectiveProps(_ctx, unref(directive), {
          content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
          allowHTML: true,
          followCursor: true
        })))}><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.imageUrl,
          alt: "photo"
        }, null, _parent));
        _push(`</div></figure></div>`);
      });
      _push(`<!--]--></div></div><div class="project grid grid-view"><div class="row g-6 isotope"><div class="item col-md-6"><div class="project-details d-flex justify-content-center flex-column"><div class="post-header"><h2 class="post-title display-1 mb-3">Fayola Learning</h2></div><div class="post-content">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "https://www.fayolalearning.com/",
        class: "hover link-yellow display-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit Website`);
          } else {
            return [
              createTextVNode("Visit Website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(unref(fayolalearning), (item, index) => {
        _push(`<div class="item col-md-6"><figure${ssrRenderAttrs(mergeProps({ class: "itooltip itooltip-light hover-scale rounded" }, ssrGetDirectiveProps(_ctx, unref(directive), {
          content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
          allowHTML: true,
          followCursor: true
        })))}><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.imageUrl,
          alt: "photo"
        }, null, _parent));
        _push(`</div></figure></div>`);
      });
      _push(`<!--]--></div></div><div class="project grid grid-view"><div class="row g-6 isotope"><div class="item col-md-6"><div class="project-details d-flex justify-content-center flex-column"><div class="post-header"><h2 class="post-title mb-3 display-1">Lohatk</h2></div><div class="post-content">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "https://www.lohatk.sa/home",
        class: "hover link-green display-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit website`);
          } else {
            return [
              createTextVNode("Visit website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(unref(lohatk), (item, index) => {
        _push(`<div class="item col-md-6"><figure${ssrRenderAttrs(mergeProps({ class: "itooltip itooltip-light hover-scale rounded" }, ssrGetDirectiveProps(_ctx, unref(directive), {
          content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
          allowHTML: true,
          followCursor: true
        })))}><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.imageUrl,
          alt: "photo"
        }, null, _parent));
        _push(`</div></figure></div>`);
      });
      _push(`<!--]--></div></div><div class="project grid grid-view"><div class="row g-6 isotope"><div class="item col-md-6"><div class="project-details d-flex justify-content-center flex-column"><div class="post-header"><h2 class="post-title mb-3 display-1">Vanika Jewels</h2></div><div class="post-content">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "https://vanikajewels.com/",
        class: "hover link-red display-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit Website`);
          } else {
            return [
              createTextVNode("Visit Website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(unref(vanikajewels), (item, index) => {
        _push(`<div class="item col-md-6"><figure${ssrRenderAttrs(mergeProps({ class: "itooltip itooltip-light hover-scale rounded" }, ssrGetDirectiveProps(_ctx, unref(directive), {
          content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
          allowHTML: true,
          followCursor: true
        })))}><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.imageUrl,
          alt: "photo"
        }, null, _parent));
        _push(`</div></figure></div>`);
      });
      _push(`<!--]--></div></div><div class="project grid grid-view"><div class="row g-6 isotope"><div class="item col-md-6"><div class="project-details d-flex justify-content-center flex-column"><div class="post-header"><h2 class="post-title mb-3 display-1">Jiya Watches</h2></div><div class="post-content">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "https://jiyawatches.com/",
        class: "display-6 hover link-orange"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit Website`);
          } else {
            return [
              createTextVNode("Visit Website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(unref(jiyawatches), (item, index) => {
        _push(`<div class="item col-md-6"><figure${ssrRenderAttrs(mergeProps({ class: "itooltip itooltip-light hover-scale rounded" }, ssrGetDirectiveProps(_ctx, unref(directive), {
          content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
          allowHTML: true,
          followCursor: true
        })))}><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.imageUrl,
          alt: "photo"
        }, null, _parent));
        _push(`</div></figure></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_CommonLightbox, {
        images: unref(images),
        activeLightBox: unref(activeLightBox),
        firstSlideIndex: unref(currentSlideIndex),
        onSetActiveLightBox: setActiveLightBox
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/ProjectList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Portfolio",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0;
      const _component_PortfolioHero = __nuxt_component_1;
      const _component_PortfolioProjectList = __nuxt_component_2;
      const _component_FootersFooter = __nuxt_component_6;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, { bg: "bg-white" }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioHero, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioProjectList, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-CEAZ0RiB.mjs.map
