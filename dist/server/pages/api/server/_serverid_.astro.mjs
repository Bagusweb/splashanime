import { a as animeConfig } from '../../../chunks/animeConfig_Do2EemRP.mjs';
import { g as generateUrlPath } from '../../../chunks/generateUrlPath_Bu-CsIBe.mjs';
export { renderers } from '../../../renderers.mjs';

const {
  wajikAnimeApi: { apiUrl, baseUrlPath }
} = animeConfig;
const POST = async ({ params }) => {
  const { serverId } = params;
  const pathname = generateUrlPath(baseUrlPath, "/server", serverId);
  const url = new URL(pathname, apiUrl).href;
  const response = await fetch(url);
  const data = await response.json();
  return new Response(JSON.stringify({ url: data?.data?.url }), {
    status: data.statusCode || response.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
