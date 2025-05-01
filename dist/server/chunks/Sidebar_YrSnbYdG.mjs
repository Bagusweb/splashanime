import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, h as renderSlot } from './astro/server_D5mPY-J_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$WidgetTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WidgetTitle;
  const { title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between gap-4 flex-wrap"> <h1 class="text-lg font-bold line-clamp-2">${title}</h1> ${href && renderTemplate`<a${addAttribute(href, "href")} type="button" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex items-center dark:bg-amber-600 dark:hover:bg-amber-700">
More
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`} </div> <hr class="border-zinc-400 dark:border-zinc-600">`;
}, "C:/laragon/www/Splashanime-id/src/components/WidgetTitle.astro", void 0);

function convertIdToTitle(str) {
  return str.split("-").map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  }).join(" ");
}

const $$Astro = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { currentPage } = Astro2.props;
  const pages = [];
  Astro2.url.pathname.split("/").forEach((item) => {
    if (typeof item === "string" && item) {
      const title = convertIdToTitle(item);
      const href = `/${item}`;
      pages.push({ title, href });
    }
  });
  if (currentPage) {
    if (currentPage.action == "replace") {
      pages.pop();
    }
    pages.push({
      title: currentPage.title,
      href: currentPage.href
    });
  }
  return renderTemplate`${maybeRenderHead()}<header class="flex p-3 border border-zinc-300 rounded-lg bg-white dark:bg-zinc-900 dark:border-zinc-800" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> <li class="inline-flex items-center"> <a${addAttribute(Astro2.url.origin, "href")} class="inline-flex items-center text-sm font-medium hover:text-amber-600"> <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path> </svg>
Home
</a> </li> ${pages.map((page, index) => {
    if (index === pages.length - 1) {
      return renderTemplate`<li aria-current="page"> <div class="flex items-center"> <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span${addAttribute(page.href, "data-href")} class="ms-1 text-sm font-medium text-zinc-500 md:ms-2 line-clamp-1"> ${page.title} </span> </div> </li>`;
    }
    return renderTemplate`<li> <div class="flex items-center"> <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <a${addAttribute(page.href, "href")} class="ms-1 text-sm font-medium hover:text-amber-600 md:ms-2"> ${page.title} </a> </div> </li>`;
  })} </ol> </header>`;
}, "C:/laragon/www/Splashanime-id/src/components/Breadcrumb.astro", void 0);

const $$Sesepuh = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-4"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/laragon/www/Splashanime-id/src/components/Sesepuh.astro", void 0);

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg p-3 md:flex-[3]"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/laragon/www/Splashanime-id/src/components/Content.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="flex flex-col border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 gap-4 rounded-lg p-3 md:flex-1"> ${renderSlot($$result, $$slots["default"])} </aside>`;
}, "C:/laragon/www/Splashanime-id/src/components/Sidebar.astro", void 0);

export { $$Breadcrumb as $, $$Sesepuh as a, $$Content as b, $$WidgetTitle as c, $$Sidebar as d };
