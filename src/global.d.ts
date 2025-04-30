type Theme = "dark" | "light";

interface AnimeCard1 {
  title: string;
  poster: string;
  episodes: string;
  releasedOn: string;
  batchId?: string;
  animeId?: string;
  href?: string;
  samehadakuUrl?: string;
}

interface AnimeCard2 {
  title: string;
  poster: string;
  status: string;
  type: string;
  score: string;
  animeId?: string;
  batchId?: string;
  href?: string;
  samehadakuUrl?: string;
  genreList: GenreLinkCard[];
}

interface AnimeCard3 {
  title: string;
  poster: string;
  releaseDate: string;
  animeId: string;
  href?: string;
  samehadakuUrl?: string;
  genreList: GenreLinkCard[];
}

interface AnimeCard4 {
  title: string;
  poster: string;
  type: string;
  score: string;
  estimation: string;
  animeId: string;
  href?: string;
  samehadakuUrl?: string;
  genres: string;
}

interface AnimeCard5 {
  title: string;
  poster: string;
  releaseDate: string;
  episodeId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface AnimeCard6 {
  title: string;
  poster: string;
  animeId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface LinkCard {
  title: string;
  slug: string;
  href?: string;
  samehadakuUrl?: string;
}

interface GenreLinkCard {
  title: string;
  genreId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface AnimeLinkCard {
  title: string;
  animeId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface EpisodeLinkCard {
  title: number | null;
  episodeId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface NavEpisodeLinkCard {
  title: string;
  episodeId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface BatchLinkCard {
  title: string;
  batchId: string;
  href?: string;
  samehadakuUrl?: string;
}

interface Synopsis {
  paragraphs: string[];
  connections?: AnimeLinkCard[];
}

interface Pagination {
  currentPage?: number;
  totalPages?: number;
  hasPrevPage?: boolean;
  prevPage?: number | null;
  hasNextPage?: boolean;
  nextPage?: number | null;
}

interface Url {
  title: string;
  url: string;
}

interface Server {
  title: string;
  serverId: string;
  href?: string;
}

interface Quality {
  title: string;
  size?: string;
  urls?: Url[];
  serverList?: Server[];
}

interface Format {
  title: string;
  qualities: Quality[];
}
