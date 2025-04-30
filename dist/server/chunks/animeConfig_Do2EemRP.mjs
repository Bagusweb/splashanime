import { s as setOnSetGetEnv } from './runtime_D4VX3l65.mjs';

// @ts-check

// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `reset` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `reset` is used by the generated code
setOnSetGetEnv((reset) => {
	
});
const API_URL = "https://wajik-anime-api.vercel.app/samehadaku/anime:http://localhost:3001";

const animeConfig = {
  wajiknime: {
    siteName: "Splashanime",
    description: "Nonton anime gratis ga pake karcis hanya di Wajiknime",
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
