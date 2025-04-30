import { a as animeConfig } from './animeConfig_Do2EemRP.mjs';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';

const {
  wajikAnimeApi: { apiUrl, baseUrlPath }
} = animeConfig;
async function skuy(pathname) {
  pathname = generateUrlPath(baseUrlPath, pathname);
  const url = new URL(pathname, apiUrl).href;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export { skuy as s };
