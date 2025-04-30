export default function convertIdToTitle(str: string): string {
  return str
    .split("-")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}
