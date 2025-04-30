import skuy from "@utils/skuy";

interface Batch {
  batchList: AnimeCard2[];
}

export default async function batchService(queryParam: {
  page?: string | number | null;
}) {
  const { page } = queryParam;
  const result = await skuy<Batch>(`/batch?page=${page || 1}`);

  return result;
}
