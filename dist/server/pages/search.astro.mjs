/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, k as renderScript, h as createAstro } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { a as $$SearchIcon, $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
import { s as skuy } from '../chunks/skuy_BWN1nGxm.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_qEGjp_-M.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_vmRFa3IR.mjs';
import { $ as $$Error } from '../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../renderers.mjs';

async function searchService(queryParam) {
  const { q, page } = queryParam;
  const result = await skuy(`/search?q=${q}&page=${page || 1}`);
  return result;
}

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form-search" class="w-full mx-auto"> <label for="default-search" class="mb-2 text-sm font-medium text-zinc-900 sr-only dark:text-white">
Search
</label> <div class="relative"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "class": "w-4 h-4" })} </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Cari Anime..." required> <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
Search
</button> </div> </form> ${renderScript($$result, "C:/laragon/www/wajiknime-main/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/wajiknime-main/src/components/Search.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const q = Astro2.url.searchParams.get("q");
  const page = Astro2.url.searchParams.get("page");
  const search = await searchService({ q, page });
  return renderTemplate`${() => {
    if (!q) {
      const title = `Search | Cari Anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Cari Anime" })}${renderComponent($$result4, "Search", $$Search, {})}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    if (search.ok) {
      const title = `Search | Anime ${q} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
        title: q,
        href: Astro2.url.href,
        action: "add"
      } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": `Hasil Pencarian : ${q}` })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: search.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": search.pagination, "options": { qQueryParam: q } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": search.statusCode, "message": search.message || search.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/search/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
