import skuy from "@utils/skuy";

interface AnimeDetails {
  title: string;
  poster: string;
  score: { value: string; users: string };
  japanese: string;
  synonyms: string;
  english: string;
  status: string;
  type: string;
  source: string;
  duration: string;
  episodes: number | null;
  season: string;
  studios: string;
  producers: string;
  aired: string;
  trailer: string;
  batchList: BatchLinkCard[];
  synopsis: Synopsis;
  genreList: GenreLinkCard[];
  episodeList: EpisodeLinkCard[];
}

export default async function animeInfoService(routeParams: {
  animeId: string;
}) {
  const { animeId } = routeParams;
  const result = await skuy<AnimeDetails>(`/anime/${animeId}`);

  return result;
}
