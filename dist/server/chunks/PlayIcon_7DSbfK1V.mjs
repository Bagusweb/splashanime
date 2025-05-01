import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate } from './astro/server_D5mPY-J_.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$PlayIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/laragon/www/Splashanime-id/src/components/icons/PlayIcon.astro", void 0);

export { $$PlayIcon as $ };
