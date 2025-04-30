import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import 'clsx';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';

const $$Astro = createAstro();
const $$AnimeList1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList1;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`py-3 gap-4 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4`, "class")}> ${list.map((anime) => renderTemplate`<a${addAttribute(generateUrlPath(
    baseUrlPath,
    anime.animeId || anime.batchId || ""
  ), "href")} class="group relative"> <div class="relative overflow-hidden rounded-lg"> <img loading="lazy" class="anime1-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> <span class="anime1-item-eps">Ep ${anime.episodes}</span> </div> <div class="p-2"> <h3 class="anime1-item-title">${anime.title}</h3> </div> </a>`)} </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/AnimeList1.astro", void 0);

export { $$AnimeList1 as $ };
