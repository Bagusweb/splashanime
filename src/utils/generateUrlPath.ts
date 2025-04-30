import path from "path";

export default function generateUrlPath(...paths: string[]): string {
  const joinedPath = path.join(...paths);

  return joinedPath.replace(/\\/g, "/");
}
