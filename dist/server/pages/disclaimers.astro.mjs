/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DZ0WCwcG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CE6bR149.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_DIhvNzhx.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Do2EemRP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    wajiknime: { siteName }
  } = animeConfig;
  const title = `Disclaimers - ${siteName}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title,
    description: ""
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Disclaimers" })} ${maybeRenderHead()}<p class="text-zinc-700 dark:text-zinc-300">
No video content is held on our servers and we, ${Astro2.url.hostname},
        are in no way affiliated with the video content. The video content that
        is displayed originates from social video websites, such as, but not
        limited to Veoh, YouTube, Dailymotion and Myspace TV. In case of
        copyright infringement, please directly contact the responsible parties.
${Astro2.url.hostname} operates as an index and database of anime content found
        publicly available on the internet, in principle conducting in the same way
        as yahoo. However, ${Astro2.url.hostname} strongly believes in the protection
        of intellectual property and would be willing to assist when possible and
        applicable. Users who upload to these websites agree not to upload illegal
        content when creating their user accounts. ${Astro2.url.hostname} does not
        accept responsibility for content hosted on third party websites, nor do
        we upload videos ourselves or encourage others to do so. The videos are streamed
        directly from the third-party video sharing services mentioned above. All
        other trademarks, logos, and images are the property of their respective
        and rightful owners.
</p> ` })} ${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })} ` })} ` })} ` })}`;
}, "C:/laragon/www/wajiknime-main/src/pages/disclaimers/index.astro", void 0);

const $$file = "C:/laragon/www/wajiknime-main/src/pages/disclaimers/index.astro";
const $$url = "/disclaimers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
