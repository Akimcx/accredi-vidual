import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_f3096473.mjs';

const _page0  = () => import('./chunks/generic_b155c6b3.mjs');
const _page1  = () => import('./chunks/index_45b421d2.mjs');
const _page2  = () => import('./chunks/ordering_6e1208df.mjs');
const _page3  = () => import('./chunks/peoples_40f04837.mjs');
const _page4  = () => import('./chunks/ssearch_a7d01455.mjs');
const _page5  = () => import('./chunks/search_94fe4256.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ordering.ts", _page2],["src/pages/peoples.astro", _page3],["src/pages/ssearch.ts", _page4],["src/pages/search.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
