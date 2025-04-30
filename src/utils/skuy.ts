import animeConfig from "@configs/animeConfig";
import generateUrlPath from "./generateUrlPath";

interface Payload<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
  pagination: Pagination | null;
}

const {
  wajikAnimeApi: { apiUrl, baseUrlPath },
} = animeConfig;

export default async function skuy<T>(pathname: string): Promise<Payload<T>> {
  pathname = generateUrlPath(baseUrlPath, pathname);

  const url = new URL(pathname, apiUrl).href;
  const response = await fetch(url);
  const result = await response.json();

  return result;
}
