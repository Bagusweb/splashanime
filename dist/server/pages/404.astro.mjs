/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_D5mPY-J_.mjs';
import 'kleur/colors';
import { $ as $$Error } from '../chunks/Error_Ch0RhHzW.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": 404, "message": "Halaman Tidak Ditemukan" })}`;
}, "C:/laragon/www/Splashanime-id/src/pages/404.astro", void 0);

const $$file = "C:/laragon/www/Splashanime-id/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
