import skuy from "@utils/skuy";

interface Home {
  recent: {
    href?: string;
    samehadakuUrl?: string;
    animeList: AnimeCard1[];
  };
  batch: {
    href?: string;
    samehadakuUrl?: string;
    batchList: AnimeCard1[];
  };
  movie: {
    href?: string;
    samehadakuUrl?: string;
    animeList: AnimeCard3[];
  };
}

export default async function homeService() {
  const result = await skuy<Home>("/home");

  return result;
}
