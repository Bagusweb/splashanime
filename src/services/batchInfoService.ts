import skuy from "@utils/skuy";

interface AnimeBatch {
  title: string;
  animeId: string;
  japanese: string;
  synonyms: string;
  english: string;
  status: string;
  type: string;
  source: string;
  score: string;
  duration: string;
  episodes: number | null;
  season: string;
  studios: string;
  producers: string;
  aired: string;
  releasedOn: string;
  poster: string;
  synopsis: Synopsis;
  genreList: GenreLinkCard[];
  downloadUrl: { formats: Format[] };
  recommendedAnimeList: AnimeCard6[];
}

export default async function batchInfoService(routeParams: {
  batchId: string;
}) {
  const { batchId } = routeParams;
  const result = await skuy<AnimeBatch>(`/batch/${batchId}`);

  return result;
}
