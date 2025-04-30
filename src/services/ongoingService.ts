import skuy from "@utils/skuy";

interface Animes {
  animeList: AnimeCard2[];
}

export default async function ongoingService(queryParam: {
  page?: string | number | null;
}) {
  const { page } = queryParam;
  const result = await skuy<Animes>(`/ongoing?order=update&page=${page || 1}`);

  return result;
}
