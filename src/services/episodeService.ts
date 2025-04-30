import skuy from "@utils/skuy";

export interface AnimeEpisode {
  title: string;
  animeId: string;
  poster: string;
  releasedOn: string;
  defaultStreamingUrl: string;
  server: { qualities: Quality[] };
  hasPrevEpisode: boolean;
  prevEpisode: NavEpisodeLinkCard | null;
  hasNextEpisode: boolean;
  nextEpisode: NavEpisodeLinkCard | null;
  downloadUrl: { formats: Format[] };
  synopsis: Synopsis;
  genreList: GenreLinkCard[];
  recommendedEpisodeList: AnimeCard5[];
  movie: {
    href?: string;
    samehadakuUrl?: string;
    animeList: AnimeCard3[];
  };
}

export default async function episodeService(routeParams: {
  episodeId: string;
}) {
  const { episodeId } = routeParams;
  const result = await skuy<AnimeEpisode>(`/episode/${episodeId}`);

  return result;
}
