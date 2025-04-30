/* empty css                                    */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute, j as Fragment } from '../../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CE6bR149.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_DIhvNzhx.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_Do2EemRP.mjs';
import { s as skuy } from '../../chunks/skuy_BWN1nGxm.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$PlayIcon } from '../../chunks/PlayIcon_thDUcKjb.mjs';
import { $ as $$StarIcon } from '../../chunks/StarIcon_9QTcGmP2.mjs';
import { $ as $$AnimeDetails } from '../../chunks/AnimeDetails_CmKwmMd_.mjs';
import { $ as $$Error } from '../../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../../renderers.mjs';

async function animeInfoService(routeParams) {
  const { animeId } = routeParams;
  const result = await skuy(`/anime/${animeId}`);
  return result;
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const { animeId } = Astro2.params;
  const animeInfo = await animeInfoService({ animeId });
  const { data } = animeInfo;
  return renderTemplate`${() => {
    if (animeInfo.ok) {
      const title = `Anime ${data.title} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: data.synopsis.paragraphs[0]
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
        title: data.title,
        href: Astro2.url.href,
        action: "replace"
      } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="relative"><img${addAttribute(data.poster, "src")} class="w-full aspect-[16/6] object-cover rounded-t-md"${addAttribute(data.title, "alt")}><div class="absolute top-0 right-0 bottom-0 left-0 rounded-t-md bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent"></div></div><div class="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4"><img${addAttribute(data.poster, "src")}${addAttribute(data.title, "alt")} class="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"><div class="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left"><h1 class="text-xl md:text-2xl font-extrabold line-clamp-2">${data.title || data.synonyms}</h1><p class="flex"><span class="flex gap-1 items-center">${renderComponent($$result4, "StarIcon", $$StarIcon, { "class": "w-4 h-4" })}${data.score.value}${" "}${data.score.users && `/ ${data.score.users}`} |${" "}${data.status}</span></p><a${addAttribute(generateUrlPath(
        "/episode",
        data.episodeList[data.episodeList.length - 1].episodeId
      ), "href")} class="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">${renderComponent($$result4, "PlayIcon", $$PlayIcon, {})}
Tonton
</a></div></div><div class="flex flex-col gap-3">${data.synopsis.paragraphs.map((paragraph) => renderTemplate`<p class="text-zinc-600 dark:text-zinc-400">${paragraph}</p>`)}<div class="flex flex-col">${data.synopsis.connections?.map((conn) => renderTemplate`<a${addAttribute(generateUrlPath("/anime", conn.animeId), "href")} class="text-blue-600 dark:text-blue-400">${conn.title}</a>`)}</div></div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Detail Anime" })}${renderComponent($$result4, "AnimeDetails", $$AnimeDetails, { "anime": data })}${data.batchList.length > 0 && renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch" })}${data.batchList.map((batch) => renderTemplate`<a${addAttribute(generateUrlPath("/batch", batch.batchId), "href")} class="line-clamp-2 flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">${batch.title}</a>`)}` })}`}${data.trailer && renderTemplate`<iframe${addAttribute(data.trailer, "src")} allowfullscreen class="aspect-video rounded-lg"></iframe>`}${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Episode" })}<div class="flex flex-col gap-4 max-h-[500px] overflow-x-auto">${data.episodeList.map((episode) => {
        if (episode.title) {
          return renderTemplate`<a${addAttribute(generateUrlPath("/episode", episode.episodeId), "href")} class="flex gap-4 items-center hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-md"><div class="text-white py-2 px-4 bg-sky-700 dark:bg-sky-600 rounded-sm">${episode.title}</div><div>${data.title} Episode ${episode.title}</div></a>`;
        }
        return renderTemplate`<a${addAttribute(generateUrlPath("/episode", episode.episodeId), "href")} class="flex gap-4 items-center hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-md"><div class="py-2 px-4 bg-sky-700 dark:bg-sky-600 rounded-sm">${data.type}</div><div>Tonton ${data.title}</div></a>`;
      })}</div>` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": animeInfo.statusCode, "message": animeInfo.message || animeInfo.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/anime/[animeId]/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/anime/[animeId]/index.astro";
const $$url = "/anime/[animeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
