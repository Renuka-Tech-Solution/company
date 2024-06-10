import { u as useSeoMeta, _ as __nuxt_component_0, a as __nuxt_component_1 } from './server.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Not found - Tech Renuka",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadersHeader1 = __nuxt_component_0;
      const _component_NotFound404 = resolveComponent("NotFound404");
      const _component_FootersFooter5 = __nuxt_component_1;
      _push(`<!--[--><div class="content-wrapper">`);
      _push(ssrRenderComponent(_component_HeadersHeader1, { bg: "bg-light" }, null, _parent));
      _push(ssrRenderComponent(_component_NotFound404, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FootersFooter5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DSzpTaRD.mjs.map
