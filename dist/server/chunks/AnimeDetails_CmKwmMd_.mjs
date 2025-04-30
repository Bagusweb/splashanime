import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as createAstro, g as addAttribute, j as Fragment } from './astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';

const $$Astro = createAstro();
const $$AnimeDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeDetails;
  const { anime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 py-4"> <div class="grid grid-cols-2 gap-2 border-l border-l-zinc-400 dark:border-l-zinc-600 px-3 h-max"> <span>Japanese</span> <span class="line-clamp-2">: ${anime.japanese}</span> <span>English</span> <span class="line-clamp-2">: ${anime.english}</span> <span>Status</span> <span class="line-clamp-2">: ${anime.status}</span> <span>Type</span> <span class="line-clamp-2">: ${anime.type}</span> <span>Episodes</span> <span class="line-clamp-2">: ${anime.episodes}</span> <span>Score</span> ${() => {
    if (typeof anime.score === "object") {
      return renderTemplate`<span class="line-clamp-2">
: ${anime.score.value}${" "} ${anime.score.users && `/ ${anime.score.users}`} </span>`;
    }
    return renderTemplate`<span class="line-clamp-2">: ${anime.score}</span>`;
  }} <span>Producers</span> <span class="line-clamp-2">: ${anime.producers}</span> </div> <div class="grid grid-cols-2 gap-2 border-l border-l-zinc-400 dark:border-l-zinc-600 px-3 h-max"> <span>Synonyms</span> <span class="line-clamp-2">: ${anime.synonyms}</span> <span>Source</span> <span class="line-clamp-2">: ${anime.source}</span> <span>Duration</span> <span class="line-clamp-2">: ${anime.duration}</span> <span>Studios</span> <span class="line-clamp-2">: ${anime.studios}</span> <span>Season</span> <span class="line-clamp-2">: ${anime.season}</span> <span>Genres</span> <span class="line-clamp-2">
:${" "} ${anime.genreList.map((genre, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-200"> ${genre.title} </a> ${index !== anime.genreList.length - 1 && renderTemplate`<span>, </span>`}` })}`)} </span> <span>Aired</span> <span class="line-clamp-2">: ${anime.aired}</span> </div> </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/AnimeDetails.astro", void 0);

export { $$AnimeDetails as $ };
