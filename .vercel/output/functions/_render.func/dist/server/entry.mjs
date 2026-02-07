import { f as renderers, n as createExports } from './chunks/vendor_DFlZCbGh.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DdvYOOR0.mjs';
import { manifest } from './manifest_CKvZ-46B.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/diary/_slug_.astro.mjs');
const _page3 = () => import('./pages/diary.astro.mjs');
const _page4 = () => import('./pages/imprint.astro.mjs');
const _page5 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page6 = () => import('./pages/now.astro.mjs');
const _page7 = () => import('./pages/posts/_slug_.astro.mjs');
const _page8 = () => import('./pages/posts.astro.mjs');
const _page9 = () => import('./pages/research.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/tags/_tag_.astro.mjs');
const _page12 = () => import('./pages/tags.astro.mjs');
const _page13 = () => import('./pages/tools.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["src/pages/diary/[slug].astro", _page2],
    ["src/pages/diary/index.astro", _page3],
    ["src/pages/imprint.astro", _page4],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page5],
    ["src/pages/now.astro", _page6],
    ["src/pages/posts/[slug].astro", _page7],
    ["src/pages/posts/index.astro", _page8],
    ["src/pages/research.astro", _page9],
    ["src/pages/rss.xml.js", _page10],
    ["src/pages/tags/[tag].astro", _page11],
    ["src/pages/tags/index.astro", _page12],
    ["src/pages/tools.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d28fa2db-8f4a-495a-9448-94c6df660efb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
