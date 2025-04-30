import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D6dkrC36.mjs';
import { manifest } from './manifest_BECTb5Cm.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/anime/_animeid_.astro.mjs');
const _page3 = () => import('./pages/anime.astro.mjs');
const _page4 = () => import('./pages/api/server/_serverid_.astro.mjs');
const _page5 = () => import('./pages/batch/_batchid_.astro.mjs');
const _page6 = () => import('./pages/batch.astro.mjs');
const _page7 = () => import('./pages/completed.astro.mjs');
const _page8 = () => import('./pages/disclaimers.astro.mjs');
const _page9 = () => import('./pages/episode/_episodeid_.astro.mjs');
const _page10 = () => import('./pages/episode.astro.mjs');
const _page11 = () => import('./pages/genres/_genreid_.astro.mjs');
const _page12 = () => import('./pages/genres.astro.mjs');
const _page13 = () => import('./pages/movies.astro.mjs');
const _page14 = () => import('./pages/ongoing.astro.mjs');
const _page15 = () => import('./pages/popular.astro.mjs');
const _page16 = () => import('./pages/recent.astro.mjs');
const _page17 = () => import('./pages/schedule.astro.mjs');
const _page18 = () => import('./pages/search.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/anime/[animeId]/index.astro", _page2],
    ["src/pages/anime/index.astro", _page3],
    ["src/pages/api/server/[serverId]/index.ts", _page4],
    ["src/pages/batch/[batchId]/index.astro", _page5],
    ["src/pages/batch/index.astro", _page6],
    ["src/pages/completed/index.astro", _page7],
    ["src/pages/disclaimers/index.astro", _page8],
    ["src/pages/episode/[episodeId]/index.astro", _page9],
    ["src/pages/episode/index.astro", _page10],
    ["src/pages/genres/[genreId]/index.astro", _page11],
    ["src/pages/genres/index.astro", _page12],
    ["src/pages/movies/index.astro", _page13],
    ["src/pages/ongoing/index.astro", _page14],
    ["src/pages/popular/index.astro", _page15],
    ["src/pages/recent/index.astro", _page16],
    ["src/pages/schedule/index.astro", _page17],
    ["src/pages/search/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/laragon/www/wajiknime-main/dist/client/",
    "server": "file:///C:/laragon/www/wajiknime-main/dist/server/",
    "host": "0.0.0.0",
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
