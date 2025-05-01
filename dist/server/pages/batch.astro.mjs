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

async function batchService(queryParam) {
  const { page } = queryParam;
  const result = await skuy(`/batch?page=${page || 1}`);
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
  const batch = await batchService({ page });
  return renderTemplate`${() => {
    if (batch.ok) {
      const title = `Batch | Download Batch Anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch Anime" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: batch.data.batchList,
        baseUrlPath: "/batch"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": batch.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": batch.statusCode, "message": batch.message || batch.statusMessage })}`;
  }}`;
}, "C:/laragon/www/Splashanime-id/src/pages/batch/index.astro", void 0);

const $$file = "C:/laragon/www/Splashanime-id/src/pages/batch/index.astro";
const $$url = "/batch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
