import type { APIRoute } from "astro";
import animeConfig from "@configs/animeConfig";
import generateUrlPath from "@utils/generateUrlPath";

const {
  wajikAnimeApi: { apiUrl, baseUrlPath },
} = animeConfig;

export const POST: APIRoute = async ({ params }) => {
  const { serverId } = params;
  const pathname = generateUrlPath(baseUrlPath, "/server", serverId as string);
  const url = new URL(pathname, apiUrl).href;
  const response = await fetch(url);
  const data = await response.json();

  return new Response(JSON.stringify({ url: data?.data?.url }), {
    status: data.statusCode || response.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
