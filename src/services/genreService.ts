import skuy from "@utils/skuy";

interface AllGenres {
  genreList: GenreLinkCard[];
}

export default async function genreService() {
  const result = await skuy<AllGenres>("/genres");

  return result;
}
