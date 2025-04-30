/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, g as addAttribute, k as renderScript, h as createAstro } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { a as $$SearchIcon, $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { c as $$WidgetTitle, $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import { s as skuy } from '../chunks/skuy_BWN1nGxm.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$Error } from '../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../renderers.mjs';

async function homeService() {
  const result = await skuy("/anime");
  return result;
}

const $$Astro = createAstro();
const $$AnimeList0 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList0;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full mx-auto"> <label for="search-input" class="mb-2 text-sm font-medium text-zinc-900 sr-only dark:text-white">Search</label> <div class="relative"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "class": "w-4 h-4" })} </div> <input type="search" id="search-input" class="block w-full p-3 ps-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Cari Anime..." required> </div> </div> <p>
Belum menemukan anime yg anda inginkan?, cari <a href="/search" class="underline text-amber-700 dark:text-amber-500">disini</a> </p> ${list.map((item) => renderTemplate`<div class="flex flex-col gap-4"> ${renderComponent($$result, "WidgetTitle", $$WidgetTitle, { "title": item.startWith })} <ul class="anime-list w-full grid sm:grid-cols-2 gap-y-2 gap-x-4 list-disc pl-4"> ${item.animeList.map((anime) => renderTemplate`<li> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")} class="anime0-item"> ${anime.title} </a> </li>`)} </ul> </div>`)} ${renderScript($$result, "C:/laragon/www/wajiknime-main/src/components/AnimeList0.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/wajiknime-main/src/components/AnimeList0.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const anime = await homeService();
  return renderTemplate`${() => {
    if (anime.ok) {
      const title = `Anime | Daftar Anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Anime" })}${renderComponent($$result4, "AnimeList0", $$AnimeList0, { "anime": {
        list: anime.data.list,
        baseUrlPath: "/anime"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": anime.statusCode, "message": anime.message || anime.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/anime/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/anime/index.astro";
const $$url = "/anime";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
