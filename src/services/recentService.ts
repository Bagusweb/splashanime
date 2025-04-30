import skuy from "@utils/skuy";

interface RecentEpisodes {
  animeList: AnimeCard1[];
}

export default async function recentService(queryParam: {
  page?: string | number | null;
}) {
  const { page } = queryParam;
  const result = await skuy<RecentEpisodes>(`/recent?page=${page || 1}`);

  return result;
}
