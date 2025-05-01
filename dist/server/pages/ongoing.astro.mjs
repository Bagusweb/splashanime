/* empty css                                 */
import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_D5mPY-J_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RqaztM_6.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_YrSnbYdG.mjs';
import { a as animeConfig } from '../chunks/animeConfig_DiI4YoYj.mjs';
import { s as skuy } from '../chunks/skuy_0pEiiQ2Y.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_D3Hef0MX.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_DLn9k6C8.mjs';
import { $ as $$Error } from '../chunks/Error_Ch0RhHzW.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

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
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Sedang Tayang" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: ongoing.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": ongoing.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": ongoing.statusCode, "message": ongoing.message || ongoing.statusMessage })}`;
  }}`;
}, "C:/laragon/www/Splashanime-id/src/pages/ongoing/index.astro", void 0);

const $$file = "C:/laragon/www/Splashanime-id/src/pages/ongoing/index.astro";
const $$url = "/ongoing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
