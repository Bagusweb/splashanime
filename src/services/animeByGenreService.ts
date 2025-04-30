import skuy from "@utils/skuy";

interface Animes {
  animeList: AnimeCard2[];
}

export default async function animeByGenreService(
  routeParams: {
    genreId: string;
  },
  queryParam: {
    page?: string | number | null;
  }
) {
  const { genreId } = routeParams;
  const { page } = queryParam;
  const result = await skuy<Animes>(`/genres/${genreId}?page=${page || 1}`);

  return result;
}
