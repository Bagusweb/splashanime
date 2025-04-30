import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import 'clsx';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';

const $$Astro = createAstro();
const $$AnimeList3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList3;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 py-3"> ${list.map((anime) => renderTemplate`<div class="flex gap-4"> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")}> <img loading="lazy" class="anime3-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> </a> <div class="flex flex-col gap-2"> <h3 class="anime3-item-title"> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")}> ${anime.title} </a> </h3> <div class="text-sm line-clamp-2"> <span class="font-bold">Genres : </span> ${anime.genreList.map((genre, index) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="hover:text-amber-700 dark:hover:text-amber-500"> ${index !== anime.genreList.length - 1 ? `${genre.title},` : genre.title} </a>`)} </div> <p class="anime3-item-date">${anime.releaseDate}</p> </div> </div>`)} </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/AnimeList3.astro", void 0);

export { $$AnimeList3 as $ };
