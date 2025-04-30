import path from 'path';

function generateUrlPath(...paths) {
  const joinedPath = path.join(...paths);
  return joinedPath.replace(/\\/g, "/");
}

export { generateUrlPath as g };
