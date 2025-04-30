/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
import { s as skuy } from '../chunks/skuy_BWN1nGxm.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_qEGjp_-M.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_vmRFa3IR.mjs';
import { $ as $$Error } from '../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../renderers.mjs';

async function ongoingService(queryParam) {
  const { page } = queryParam;
  const result = await skuy(`/ongoing?order=update&page=${page || 1}`);
  return result;
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const page = Astro2.url.searchParams.get("page");
  const ongoing = await ongoingService({ page });
  return renderTemplate`${() => {
    if (ongoing.ok) {
      const title = `Ongoing | Anime Sedang Tayang - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Sedang Tayang" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: ongoing.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": ongoing.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": ongoing.statusCode, "message": ongoing.message || ongoing.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/ongoing/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/ongoing/index.astro";
const $$url = "/ongoing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
