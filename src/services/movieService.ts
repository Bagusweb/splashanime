import skuy from "@utils/skuy";

interface Animes {
  animeList: AnimeCard2[];
}

export default async function movieService(queryParam: {
  page?: string | number | null;
}) {
  const { page } = queryParam;
  const result = await skuy<Animes>(`/movies?page=${page || 1}`);

  return result;
}
