/* empty css                                 */
import { e as createComponent, r as renderTemplate } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  location.replace("/recent");\n<\/script>'])));
}, "C:/laragon/www/wajiknime-main/src/pages/episode/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/episode/index.astro";
const $$url = "/episode";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
