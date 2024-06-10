import { useSSRContext, ref, unref } from 'vue';
import { ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "LineProgressbar",
  __ssrInlineRender: true,
  props: ["max"],
  setup(__props) {
    ref();
    const counted = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><svg viewBox="0 0 100 6" preserveAspectRatio="none" style="${ssrRenderStyle({ display: "block", width: `${unref(counted)}%` })}"><path d="M 0,3 L 100,3" stroke="#eee" stroke-width="6" fill-opacity="0"></path><path d="M 0,3 L 100,3" stroke="#555" stroke-width="6" fill-opacity="0" style="${ssrRenderStyle({ "stroke-dasharray": "100, 100", "stroke-dashoffset": "0" })}"></path></svg><div class="progressbar-text" style="${ssrRenderStyle({ "color": "inherit", "position": "absolute", "right": "0px", "top": "-30px", "padding": "0px", "margin": "0px" })}">${ssrInterpolate(unref(counted))} % </div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/LineProgressbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LineProgressbar = _sfc_main;
const skills = [
  { id: 1, title: "Marketing", color: "blue", value: 80 },
  { id: 2, title: "Strategy", color: "yellow", value: 95 },
  { id: 3, title: "Development", color: "orange", value: 100 },
  { id: 4, title: "Data Analysis", color: "green", value: 90 }
];

export { LineProgressbar as L, skills as s };
//# sourceMappingURL=skils-Dzuy94dN.mjs.map
