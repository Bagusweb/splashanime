import skuy from "@utils/skuy";

interface Animes {
  animeList: AnimeCard2[];
}

export default async function searchService(queryParam: {
  q?: string | null;
  page?: string | number | null;
}) {
  const { q, page } = queryParam;
  const result = await skuy<Animes>(`/search?q=${q}&page=${page || 1}`);

  return result;
}
