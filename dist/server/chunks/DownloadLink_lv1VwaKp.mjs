import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as createAstro, g as addAttribute, j as Fragment } from './astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$DownloadLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DownloadLink;
  const { anime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4" id="download"> ${anime.downloadUrl.formats.map((format) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h3 class="text-md font-bold bg-zinc-300 dark:bg-zinc-700 py-2 px-3 rounded-sm"> ${format.title} </h3> ${format.qualities.map((quality) => {
    if (quality.urls && quality.urls.length > 0) {
      return renderTemplate`<div> <h3 class="font-bold pb-2">${quality.title}</h3> <div class="flex gap-2 flex-wrap"> ${quality.urls?.map((url) => renderTemplate`<a${addAttribute(url.url, "href")} target="_blank" class="download-url-item"> ${url.title} </a>`)} </div> </div>`;
    }
  })}` })}`)} </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/DownloadLink.astro", void 0);

export { $$DownloadLink as $ };
