/* empty css                                    */
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, e as renderScript, b as renderComponent, F as Fragment, r as renderTemplate } from '../../chunks/astro/server_D5mPY-J_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_RqaztM_6.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_YrSnbYdG.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_DiI4YoYj.mjs';
import { s as skuy } from '../../chunks/skuy_0pEiiQ2Y.mjs';
import { $ as $$AnimeList3 } from '../../chunks/AnimeList3_BW4efWH-.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$DownloadLink } from '../../chunks/DownloadLink_CZBGdml5.mjs';
import { $ as $$Error } from '../../chunks/Error_Ch0RhHzW.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

async function episodeService(routeParams) {
  const { episodeId } = routeParams;
  const result = await skuy(`/episode/${episodeId}`);
  return result;
}

const $$Astro$1 = createAstro();
const $$VideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoPlayer;
  const { anime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select id="servers" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> <option selected${addAttribute(anime.defaultStreamingUrl, "value")} id="default-server">Server Bawaan</option> ${anime.server.qualities.map((quality) => {
    if (quality.serverList && quality.serverList.length > 0) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <option disabled>${quality.title}</option> ${quality.serverList?.map((server) => renderTemplate`<option${addAttribute(server.serverId, "value")}>${server.title}</option>`)}` })}`;
    }
  })} </select> <div id="video-player-wrapper" class="flex justify-center items-center aspect-video bg-zinc-300 dark:bg-zinc-700 rounded-lg overflow-hidden"> ${anime.defaultStreamingUrl.toLowerCase() === "no iframe found" ? renderTemplate`<h5 class="text-lg font-extrabold">Server Tidak Tersedia</h5>` : anime.defaultStreamingUrl.endsWith(".mp4") ? renderTemplate`<video id="video-player-video" class="w-full h-full" controls${addAttribute(anime.defaultStreamingUrl, "src")}></video>` : renderTemplate`<iframe id="video-player-iframe"${addAttribute(anime.defaultStreamingUrl, "src")} allowfullscreen class="w-full h-full"></iframe>`} </div> ${renderScript($$result, "C:/laragon/www/Splashanime-id/src/components/VideoPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/Splashanime-id/src/components/VideoPlayer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const { episodeId } = Astro2.params;
  const episode = await episodeService({ episodeId });
  const { data } = episode;
  return renderTemplate`${() => {
    if (episode.ok) {
      const title = `Nonton Anime ${data.title} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
        title: data.title,
        href: Astro2.url.href,
        action: "replace"
      } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": data.title })}${renderComponent($$result4, "VideoPlayer", $$VideoPlayer, { "anime": {
        defaultStreamingUrl: data.defaultStreamingUrl,
        server: data.server
      } })}${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-4">${data.hasPrevEpisode && data.prevEpisode && renderTemplate`<a${addAttribute(generateUrlPath(
        "/episode",
        data.prevEpisode.episodeId
      ), "href")} class="navigation-episode-item">${"<- "}${data.prevEpisode.title}</a>`}<a${addAttribute(generateUrlPath("/anime", data.animeId), "href")} class="navigation-episode-item">
All Eps
</a>${data.hasNextEpisode && data.nextEpisode && renderTemplate`<a${addAttribute(generateUrlPath(
        "/episode",
        data.nextEpisode.episodeId
      ), "href")} class="navigation-episode-item">${data.nextEpisode.title}${" ->"}</a>`}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Link Download" })}${renderComponent($$result4, "DownloadLink", $$DownloadLink, { "anime": { downloadUrl: data.downloadUrl } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Movie", "href": "/movies" })}${renderComponent($$result4, "AnimeList3", $$AnimeList3, { "anime": {
        list: data.movie.animeList,
        baseUrlPath: "/anime"
      } })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": episode.statusCode, "message": episode.message || episode.statusMessage })}`;
  }}`;
}, "C:/laragon/www/Splashanime-id/src/pages/episode/[episodeId]/index.astro", void 0);

const $$file = "C:/laragon/www/Splashanime-id/src/pages/episode/[episodeId]/index.astro";
const $$url = "/episode/[episodeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
