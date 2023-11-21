import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_11241b4b.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"ordering","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ordering","type":"endpoint","pattern":"^\\/ordering$","segments":[[{"content":"ordering","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ordering.ts","pathname":"/ordering","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"peoples/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/peoples","type":"page","pattern":"^\\/peoples\\/?$","segments":[[{"content":"peoples","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/peoples.astro","pathname":"/peoples","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"ssearch","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ssearch","type":"endpoint","pattern":"^\\/ssearch$","segments":[[{"content":"ssearch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ssearch.ts","pathname":"/ssearch","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ksim/software/project/plateform/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ksim/software/project/plateform/src/pages/peoples.astro",{"propagation":"none","containsHead":true}],["/home/ksim/software/project/plateform/src/pages/search.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_fc51e1f8.mjs","\u0000@astrojs-manifest":"manifest_f3096473.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_b155c6b3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_45b421d2.mjs","\u0000@astro-page:src/pages/ordering@_@ts":"chunks/ordering_6e1208df.mjs","\u0000@astro-page:src/pages/peoples@_@astro":"chunks/peoples_40f04837.mjs","\u0000@astro-page:src/pages/ssearch@_@ts":"chunks/ssearch_a7d01455.mjs","\u0000@astro-page:src/pages/search@_@astro":"chunks/search_94fe4256.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.967fb1f7.js","/astro/hoisted.js?q=0":"_astro/hoisted.34ed07a6.js","astro:scripts/before-hydration.js":""},"assets":["/about.txt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/audio.svg","/ball-triangle.svg","/bars.svg","/circles.svg","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/favicon_io(1).zip","/favicon_io.zip","/grid.svg","/hearts.svg","/htmx.js","/oval.svg","/prs.pdf","/puff.svg","/rings.svg","/site.webmanifest","/spinning-circles.svg","/tail-spin.svg","/three-dots.svg","/_astro/hoisted.34ed07a6.js","/_astro/hoisted.967fb1f7.js","/SVG-Loaders-master/SVG-Loaders-master/LICENSE.md","/SVG-Loaders-master/SVG-Loaders-master/README.md","/SVG-Loaders-master/SVG-Loaders-master/bower.json","/SVG-Loaders-master/SVG-Loaders-master/index.html","/SVG-Loaders-master/SVG-Loaders-master/site-assets/images/download-btn.png","/SVG-Loaders-master/SVG-Loaders-master/site-assets/images/tweet-btn.png","/index.html","/ordering","/peoples/index.html","/ssearch","/search/index.html"]});

export { manifest };
