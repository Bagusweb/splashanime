/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import 'clsx';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { s as skuy } from '../chunks/skuy_BWN1nGxm.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
import { $ as $$Error } from '../chunks/Error_DTdCUdHN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GenreList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GenreList;
  const {
    genre: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="gap-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5"> ${list.map((genre) => renderTemplate`<button class="genre-item"> <a${addAttribute(generateUrlPath(baseUrlPath, genre.genreId), "href")} type="button" class="line-clamp-1"> ${genre.title} </a> </button>`)} </div>`;
}, "C:/laragon/www/wajiknime-main/src/components/GenreList.astro", void 0);

async function genreService() {
  const result = await skuy("/genres");
  return result;
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const genre = await genreService();
  return renderTemplate`${() => {
    if (genre.ok) {
      const title = `Genre | Daftar Genre - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre" })}${renderComponent($$result4, "GenreList", $$GenreList, { "genre": {
        list: genre.data.genreList,
        baseUrlPath: "/genres"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": genre.statusCode, "message": genre.message || genre.statusMessage })}`;
  }}`;
}, "C:/laragon/www/wajiknime-main/src/pages/genres/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/genres/index.astro";
const $$url = "/genres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
