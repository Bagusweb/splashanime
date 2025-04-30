/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { s as skuy } from '../chunks/skuy_BWN1nGxm.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import { $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { $ as $$PlayIcon } from '../chunks/PlayIcon_thDUcKjb.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$AnimeList1 } from '../chunks/AnimeList1_GqGQayfh.mjs';
import { $ as $$AnimeList3 } from '../chunks/AnimeList3_CnvYX_IS.mjs';
import { $ as $$Error } from '../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../renderers.mjs';

async function homeService() {
  const result = await skuy("/home");
  return result;
}

const $$Astro$1 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="controls-carousel" class="relative w-full" data-carousel="slide" data-carousel-interval="6000"> <div class="relative h-56 overflow-hidden rounded-md md:h-96"> ${list.map((anime) => renderTemplate`<div class="hidden carousel-item" data-carousel-item> <div> <img loading="lazy"${addAttribute(anime.poster, "src")} class="carousel-item-image"${addAttribute(anime.title, "alt")}> </div> <div class="carousel-item-layer"> <div class="carousel-item-cus"> <p class="carousel-item-eps"> <span class="text-teal-600">Episode ${anime.episodes}</span> </p> <h1 class="carousel-item-title"> ${anime.title.replace(`Episode ${anime.episodes}`, "").trim()} </h1> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId || ""), "href")} class="carousel-item-btn"> ${renderComponent($$result, "PlayIcon", $$PlayIcon, {})} <span class="text-xs">Tonton Kuy</span> </a> </div> </div> </div>`)} </div> <div class="absolute z-30 flex md:gap-10 -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"> <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-zinc-600 dark:bg-zinc-800/30 dark:group-hover:bg-zinc-800/50 dark:group-focus:ring-4 dark:group-focus:ring-zinc-500"> <svg class="w-4 h-4 text-zinc-700 rtl:rotate-180 dark:text-zinc-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-zinc-600 dark:bg-zinc-800/30 dark:group-hover:bg-zinc-800/50 dark:group-focus:ring-4 dark:group-focus:ring-zinc-500"> <svg class="w-4 h-4 text-zinc-700 rtl:rotate-180 dark:text-zinc-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/Carousel.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName, description, image }
  } = animeConfig;
  const home = await homeService();
  return renderTemplate`${() => {
    if (home.ok) {
      const title = `${siteName} - Nonton Streaming & Download Anime Sub Indo Subtitle Indonesia Gratis`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description,
        openGraph: {
          basic: {
            title,
            image: `${Astro2.url.origin + image}`,
            type: "website"
          },
          optional: {
            siteName
          }
        }
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Carousel", $$Carousel, { "anime": {
        list: home.data.recent.animeList.slice(0, 5),
        baseUrlPath: "/anime"
      } })}${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Episode Terbaru", "href": "/recent" })}${renderComponent($$result4, "AnimeList1", $$AnimeList1, { "anime": {
        list: home.data.recent.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch Anime", "href": "/batch" })}${renderComponent($$result4, "AnimeList1", $$AnimeList1, { "anime": {
        list: home.data.batch.batchList,
        baseUrlPath: "/batch"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Movie", "href": "/movies" })}${renderComponent($$result4, "AnimeList3", $$AnimeList3, { "anime": {
        list: home.data.movie.animeList,
        baseUrlPath: "/anime"
      } })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": home.statusCode, "message": home.message || home.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
