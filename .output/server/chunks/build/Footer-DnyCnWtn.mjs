import { b as _export_sfc, d as __nuxt_component_0$2, e as _sfc_main$7, f as __nuxt_component_3$2, c as __nuxt_component_0$1, g as __nuxt_component_2, h as __nuxt_component_3, i as __nuxt_component_4 } from './server.mjs';
import { useSSRContext, computed, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_nuxt_img, mergeProps({
    src: "/assets/img/logo/4.png",
    srcset: "/assets/img/logo/4.png",
    alt: "photo",
    class: "w-30",
    style: { "width": "9rem" }
  }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headers/header-logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const isWelcome = computed(
      () => router.currentRoute.value.path === "/"
    );
    const addClass = ref(false);
    const addClass2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_HeadersHeader_Logo = __nuxt_component_1;
      const _component_HeadersComponentsMenu = _sfc_main$7;
      const _component_HeadersComponentsSocials = __nuxt_component_3$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "position-absolute w-100" }, _attrs))}><nav class="${ssrRenderClass(`navbar navbar-expand-lg center-nav transparent navbar-light ${addClass2.value ? "fixed navbar-clone" : ""} ${addClass.value ? "navbar-clone navbar-stick" : " navbar-unstick"} `)}"><div class="container flex-lg-row flex-nowrap align-items-center"><div class="navbar-brand w-100">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeadersHeader_Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeadersHeader_Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div id="ofCanvasBody" class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"><div class="offcanvas-header d-lg-none"><h3 class="text-white fs-30 mb-0">Tech Renuka</h3><button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body ms-lg-auto d-flex flex-column h-100"><ul class="navbar-nav">`);
      _push(ssrRenderComponent(_component_HeadersComponentsMenu, null, null, _parent));
      _push(`</ul><div class="offcanvas-footer d-lg-none"><div><a href="mailto:contact@techrenuka.com" class="link-inverse">contact@techrenuka.com</a><br> +91-80000-78982<br><nav class="nav social social-white mt-4">`);
      _push(ssrRenderComponent(_component_HeadersComponentsSocials, null, null, _parent));
      _push(`</nav></div></div></div></div>`);
      if (isWelcome.value) {
        _push(`<div class="navbar-other w-100 d-flex ms-auto"><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item"><a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info"><i class="uil uil-info-circle"></i></a></li><li class="nav-item d-lg-none"><button class="hamburger offcanvas-nav-btn"><span></span></button></li></ul></div>`);
      } else {
        _push(`<div class="navbar-other w-100 d-flex ms-auto"><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item d-none d-md-block">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/contact",
          class: "btn btn-sm btn-primary rounded-pill"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item d-lg-none" ofCanvasToggle2="offcanvas2"><button class="hamburger offcanvas-nav-btn"><span></span></button></li></ul></div>`);
      }
      _push(`<div id="offcanvasBackdrop" class="offcanvas-backdrop fade" style="${ssrRenderStyle({ "display": "none" })}"></div></div></nav><div class="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true"><div class="offcanvas-header d-flex justify-content-space-between"><h3 class="text-white fs-30 mb-0">Tech Renuka \xA0</h3><button type="button" class="btn-close btn-close-white pl-10" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body pb-6"><div class="widget mb-8"><p> Transforming Tomorrow with Today&#39;s Solutions. Your IT, Our Expertise \u2013 Igniting Growth. </p></div><div class="widget mb-8"><h4 class="widget-title text-white mb-3">Contact Info</h4><address>Surat - 395003, Gujarat, India.</address><a href="mailto:contact@techrenuka.com">contact@techrenuka.com</a><br> +91-80000-78982 </div><div class="widget"><h4 class="widget-title text-white mb-3">Follow Us</h4><nav class="nav social social-white">`);
      _push(ssrRenderComponent(_component_HeadersComponentsSocials, null, null, _parent));
      _push(`</nav></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headers/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_nuxt_img = __nuxt_component_0$1;
  const _component_FootersComponentsSocials = __nuxt_component_2;
  const _component_FootersComponentsLinks = __nuxt_component_3;
  const _component_CommonScrolltop = __nuxt_component_4;
  _push(`<!--[--><footer class="bg-dark text-inverse"><div class="container py-13 py-md-15"><div class="row gy-6 gy-lg-0"><div class="col-md-4 col-lg-4"><div class="widget">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_img, {
          class: "mb-4",
          src: "/assets/img/logo/6.png",
          srcset: "/assets/img/logo/6.png",
          alt: "photo",
          style: { "width": "9rem" }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_img, {
            class: "mb-4",
            src: "/assets/img/logo/6.png",
            srcset: "/assets/img/logo/6.png",
            alt: "photo",
            style: { "width": "9rem" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mb-4"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Tech Renuka. All rights reserved. </p><nav class="nav social social-white">`);
  _push(ssrRenderComponent(_component_FootersComponentsSocials, null, null, _parent));
  _push(`</nav></div></div><div class="col-md-4 col-lg-4"><div class="widget"><h4 class="widget-title text-white mb-3">Contact</h4><address class="pe-xl-15 pe-xxl-17">Surat, Gujarat, India</address><a href="mailto:contact@techrenuka.com">contact@techrenuka.com</a><br> +91-80000-78982 </div></div><div class="col-md-4 col-lg-4"><div class="widget"><h4 class="widget-title text-white mb-3">Learn More</h4><ul class="list-unstyled mb-0">`);
  _push(ssrRenderComponent(_component_FootersComponentsLinks, null, null, _parent));
  _push(`</ul></div></div></div></div></footer>`);
  _push(ssrRenderComponent(_component_CommonScrolltop, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footers/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_6 as a };
//# sourceMappingURL=Footer-DnyCnWtn.mjs.map
