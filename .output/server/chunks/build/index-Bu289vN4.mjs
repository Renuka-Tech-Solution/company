import { _ as __nuxt_component_0, a as __nuxt_component_6 } from './Footer-DnyCnWtn.mjs';
import { u as useSeoMeta, b as _export_sfc, d as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { c as contact } from './contact-orCVi5CM.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "wrapper image-wrapper text-white",
    style: { "background-image": "url(/assets/img/photos/ContactUs.png)" }
  }, _attrs))}><div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center"><div class="row"><div class="col-lg-8 mx-auto"><h1 class="display-1 mb-3 text-dark">Get in Touch</h1><nav class="d-inline-block" aria-label="breadcrumb"><ol class="breadcrumb text-dark"><li class="breadcrumb-item">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="breadcrumb-item active" aria-current="page"> Contact </li></ol></nav></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Info",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper bg-light angled upper-end" }, _attrs))}><div class="container pb-11"><div class="row mb-14 mb-md-16"><div class="col-xl-10 mx-auto mt-n19"><div class="card"><div class="row gx-0 gap-10"><div class="col-lg-6 align-self-stretch"><div class="map map-full rounded-top rounded-lg-start"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.7511137099661!2d72.8068854780727!3d21.22040180195951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ea1cdfc898f%3A0x883eb631a85bbf9b!2sTapi%20Avenue!5e0!3m2!1sen!2str!4v1713267662712!5m2!1sen!2str" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="col-lg-5"><div class="p-10 p-md-11 p-lg-13"><!--[-->`);
      ssrRenderList(unref(contact), (item) => {
        _push(`<div class="d-flex flex-row"><div><div class="icon text-primary fs-28 me-6 mt-n1"><i class="${ssrRenderClass(item.iconClass)}"></i></div></div><div><h5 class="">${ssrInterpolate(item.title)}</h5>`);
        if (item.address) {
          _push(`<address>${ssrInterpolate(item.address.line1)}</address>`);
        } else {
          _push(`<!---->`);
        }
        if (item.content) {
          _push(`<p>${ssrInterpolate(item.content)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.mail) {
          _push(`<a${ssrRenderAttr("href", `mailto:${item.mail}`)} class="link-body">${ssrInterpolate(item.mail)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/Info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersMenu = __nuxt_component_0;
      const _component_ContactHero = __nuxt_component_1;
      const _component_ContactInfo = __nuxt_component_2;
      const _component_FootersFooter = __nuxt_component_6;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactHero, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactInfo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bu289vN4.mjs.map
