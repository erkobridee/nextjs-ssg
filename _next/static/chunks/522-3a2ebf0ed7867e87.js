(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[522],{6010:function(a,b,c){"use strict";function d(a){var b,c,e="";if("string"==typeof a||"number"==typeof a)e+=a;else if("object"==typeof a)if(Array.isArray(a))for(b=0;b<a.length;b++)a[b]&&(c=d(a[b]))&&(e&&(e+=" "),e+=c);else for(b in a)a[b]&&(e&&(e+=" "),e+=b);return e}function e(){for(var a,b,c=0,e="";c<arguments.length;)(a=arguments[c++])&&(b=d(a))&&(e&&(e+=" "),e+=b);return e}c.d(b,{Z:function(){return e}})},8418:function(a,b,c){"use strict";function d(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}b.default=void 0;var e,f=(e=c(7294))&&e.__esModule?e:{default:e},g=c(6273),h=c(387),i=c(7190),j={};function k(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;j[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,e=h.useRouter(),l=f.default.useMemo(function(){var b=d(g.resolveHref(e,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?g.resolveHref(e,a.as):f||c}},[e,a.href,a.as]),m=l.href,n=l.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=f.default.createElement("a",null,o));var t=(b=f.default.Children.only(o))&&"object"==typeof b&&b.ref,u=d(i.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=f.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);f.default.useEffect(function(){var a=w&&c&&g.isLocalURL(m),b=void 0!==s?s:e&&e.locale,d=j[m+"%"+n+(b?"%"+b:"")];a&&!d&&k(e,m,n,{locale:b})},[n,m,w,s,c,e]);var y={ref:x,onClick:function(a){var c,d,f,h,i,j,k,l,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,d=e,f=m,h=n,i=p,j=q,k=r,l=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!g.isLocalURL(f))||(c.preventDefault(),null==k&&h.indexOf("#")>=0&&(k=!1),d[i?"replace":"push"](f,h,{shallow:j,locale:l,scroll:k})))}};if(y.onMouseEnter=function(a){b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),g.isLocalURL(m)&&k(e,m,n,{priority:!0})},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:e&&e.locale,A=e&&e.isLocaleDomain&&g.getDomainLocale(n,z,e&&e.locales,e&&e.domainLocales);y.href=A||g.addBasePath(g.addLocale(n,z,e&&e.defaultLocale))}return f.default.cloneElement(b,y)}},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b,c=a.rootMargin,h=a.disabled||!f,i=d.useRef(),j=function(a){if(Array.isArray(a))return a}(b=d.useState(!1))||function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),k=j[0],l=j[1],m=d.useCallback(function(a){i.current&&(i.current(),i.current=void 0),!h&&!k&&a&&a.tagName&&(i.current=g(a,function(a){return a&&l(a)},{rootMargin:c}))},[h,c,k]);return d.useEffect(function(){if(!f&&!k){var a=e.requestIdleCallback(function(){return l(!0)});return function(){return e.cancelIdleCallback(a)}}},[k]),[m,k]};var d=c(7294),e=c(9311),f="undefined"!=typeof IntersectionObserver;function g(a,b,c){var d=i(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),h.delete(e))}}var h=new Map();function i(a){var b=a.rootMargin||"",c=h.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return h.set(b,c={id:b,observer:e,elements:d}),c}},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)},1567:function(a,b,c){"use strict";c.d(b,{"$":function(){return n}});var d=c(7625),e=c(4942),f=c(7294),g=c(8718);function h(){if(console&&console.warn){for(var a,b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];"string"==typeof c[0]&&(c[0]="react-i18next:: ".concat(c[0])),(a=console).warn.apply(a,c)}}var i={};function j(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];"string"==typeof b[0]&&i[b[0]]||("string"==typeof b[0]&&(i[b[0]]=new Date()),h.apply(void 0,b))}function k(a,b,c){a.loadNamespaces(b,function(){if(a.isInitialized)c();else{var b=function b(){setTimeout(function(){a.off("initialized",b)},0),c()};a.on("initialized",b)}})}function l(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function m(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?l(Object(c),!0).forEach(function(b){(0,e.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function n(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.i18n,e=(0,f.useContext)(g.OO)||{},h=e.i18n,i=e.defaultNS,l=c||h||(0,g.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new g.zv()),!l){j("You will need to pass in an i18next instance by using initReactI18next");var n=function(a){return Array.isArray(a)?a[a.length-1]:a},o=[n,{},!1];return o.t=n,o.i18n={},o.ready=!1,o}l.options.react&& void 0!==l.options.react.wait&&j("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=m(m(m({},(0,g.JP)()),l.options.react),b),q=p.useSuspense,r=p.keyPrefix,s=a||i||l.options&&l.options.defaultNS;s="string"==typeof s?[s]:s||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(s);var t=(l.isInitialized||l.initializedStoreOnce)&&s.every(function(a){return(function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if(!b.languages||!b.languages.length)return j("i18n.languages were undefined or empty",b.languages),!0;var d=b.languages[0],e=!!b.options&&b.options.fallbackLng,f=b.languages[b.languages.length-1];if("cimode"===d.toLowerCase())return!0;var g=function(a,c){var d=b.services.backendConnector.state["".concat(a,"|").concat(c)];return -1===d||2===d};return(!(c.bindI18n&&c.bindI18n.indexOf("languageChanging")> -1)||!b.services.backendConnector.backend||!b.isLanguageChangingTo||!!g(b.isLanguageChangingTo,a))&&(!!b.hasResourceBundle(d,a)|| !b.services.backendConnector.backend||!!(g(d,a)&&(!e||g(f,a))))})(a,l,p)});function u(){return l.getFixedT(null,"fallback"===p.nsMode?s:s[0],r)}var v=(0,f.useState)(u),w=(0,d.Z)(v,2),x=w[0],y=w[1],z=(0,f.useRef)(!0);(0,f.useEffect)(function(){var a=p.bindI18n,b=p.bindI18nStore;function c(){z.current&&y(u)}return z.current=!0,t||q||k(l,s,function(){z.current&&y(u)}),a&&l&&l.on(a,c),b&&l&&l.store.on(b,c),function(){z.current=!1,a&&l&&a.split(" ").forEach(function(a){return l.off(a,c)}),b&&l&&b.split(" ").forEach(function(a){return l.store.off(a,c)})}},[l,s.join()]);var A=(0,f.useRef)(!0);(0,f.useEffect)(function(){z.current&&!A.current&&y(u),A.current=!1},[l]);var B=[x,l,t];if(B.t=x,B.i18n=l,B.ready=t,t)return B;if(!t&&!q)return B;throw new Promise(function(a){k(l,s,function(){a()})})}}}])