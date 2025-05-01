import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const API_URL = "https://wajik-anime-api.vercel.app/samehadaku/anime";

const animeConfig = {
  wajiknime: {
    siteName: "Splashanime",
    description: "Nonton anime gratis ga pake karcis hanya di Splashanime",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/wajiknime.jpg"
  },
  wajikAnimeApi: {
    apiUrl: API_URL,
    baseUrlPath: "/samehadaku"
  }
};

export { animeConfig as a };
