import skuy from "@utils/skuy";

export interface AllAnimes {
  list: {
    startWith: string;
    animeList: AnimeLinkCard[];
  }[];
}

export default async function homeService() {
  const result = await skuy<AllAnimes>("/anime");

  return result;
}
