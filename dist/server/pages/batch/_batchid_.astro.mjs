/* empty css                                    */
import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D5mPY-J_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_RqaztM_6.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_YrSnbYdG.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_DiI4YoYj.mjs';
import { s as skuy } from '../../chunks/skuy_0pEiiQ2Y.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$StarIcon } from '../../chunks/StarIcon_BNAlBpMZ.mjs';
import { $ as $$AnimeDetails } from '../../chunks/AnimeDetails_w63OWAhW.mjs';
import { $ as $$DownloadLink } from '../../chunks/DownloadLink_CZBGdml5.mjs';
import { $ as $$Error } from '../../chunks/Error_Ch0RhHzW.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

async function batchInfoService(routeParams) {
  const { batchId } = routeParams;
  const result = await skuy(`/batch/${batchId}`);
  return result;
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const { batchId } = Astro2.params;
  const batchInfo = await batchInfoService({ batchId });
  const { data } = batchInfo;
  return renderTemplate`${() => {
    if (batchInfo.ok) {
      const title = `Download Batch Anime ${data.title} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
        title: data.title,
        href: Astro2.url.href,
        action: "replace"
      } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${maybeRenderHead()}<div class="relative"><img${addAttribute(data.poster, "src")} class="w-full aspect-[16/6] object-cover rounded-t-md"${addAttribute(data.title, "alt")}><div class="absolute top-0 right-0 bottom-0 left-0 rounded-t-md bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent"></div></div><div class="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4"><img${addAttribute(data.poster, "src")}${addAttribute(data.title, "alt")} class="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"><div class="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left"><h1 class="text-xl md:text-2xl font-extrabold line-clamp-2">${data.synonyms || data.english || data.title}</h1><p class="flex"><span class="flex gap-1 items-center">${renderComponent($$result4, "StarIcon", $$StarIcon, { "class": "w-4 h-4" })}${data.score} | ${data.status}</span></p><div class="flex gap-2"><a href="#download" class="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
Download
</a><a${addAttribute(generateUrlPath("/anime", data.animeId), "href")} class="max-w-min flex gap-1 text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
Info
</a></div></div></div><div class="flex flex-col gap-4">${data.synopsis.paragraphs.map((paragraph) => renderTemplate`<p class="text-zinc-600 dark:text-zinc-400">${paragraph}</p>`)}<div class="flex flex-col">${data.synopsis.connections?.map((conn) => renderTemplate`<a${addAttribute(generateUrlPath("/anime", conn.animeId), "href")} class="text-blue-600 dark:text-blue-400">${conn.title}</a>`)}</div></div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Detail Anime" })}${renderComponent($$result4, "AnimeDetails", $$AnimeDetails, { "anime": data })}${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Link Download" })}${renderComponent($$result4, "DownloadLink", $$DownloadLink, { "anime": { downloadUrl: data.downloadUrl } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": batchInfo.statusCode, "message": batchInfo.message || batchInfo.statusMessage })}`;
  }}`;
}, "C:/laragon/www/Splashanime-id/src/pages/batch/[batchId]/index.astro", void 0);

const $$file = "C:/laragon/www/Splashanime-id/src/pages/batch/[batchId]/index.astro";
const $$url = "/batch/[batchId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
