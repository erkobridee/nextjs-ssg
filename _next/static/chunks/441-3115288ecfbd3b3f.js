(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{6010:function(a,b,c){"use strict";function d(a){var b,c,e="";if("string"==typeof a||"number"==typeof a)e+=a;else if("object"==typeof a){if(Array.isArray(a))for(b=0;b<a.length;b++)a[b]&&(c=d(a[b]))&&(e&&(e+=" "),e+=c);else for(b in a)a[b]&&(e&&(e+=" "),e+=b)}return e}b.Z=function(){for(var a,b,c=0,e="";c<arguments.length;)(a=arguments[c++])&&(b=d(a))&&(e&&(e+=" "),e+=b);return e}},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,h=a.disabled||!g,i=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(i.current&&(i.current(),i.current=void 0),!h&&!l)return o&&o.tagName&&(i.current=j(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==i.current||i.current(),i.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,h,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver,h=new Map,i=[];function j(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),h.delete(e);var b=i.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&i.splice(b,1)}}}function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=i.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=h.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},i.push(c),h.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)},7058:function(a,b,c){"use strict";c.d(b,{"$":function(){return q}});var d=c(3878),e=c(1563),f=c(5267),g=c(4942),h=c(7294),i=c(7715);function j(){if(console&&console.warn){for(var a,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];"string"==typeof c[0]&&(c[0]="react-i18next:: ".concat(c[0])),(a=console).warn.apply(a,c)}}var k={};function l(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];"string"==typeof b[0]&&k[b[0]]||("string"==typeof b[0]&&(k[b[0]]=new Date),j.apply(void 0,b))}function m(a,b,c){a.loadNamespaces(b,function(){if(a.isInitialized)c();else{var b=function b(){setTimeout(function(){a.off("initialized",b)},0),c()};a.on("initialized",b)}})}function n(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?n(Object(c),!0).forEach(function(b){(0,g.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var p=function(a,b){var c=(0,h.useRef)();return(0,h.useEffect)(function(){c.current=b?c.current:a},[a,b]),c.current};function q(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.i18n,g=(0,h.useContext)(i.OO)||{},j=g.i18n,k=g.defaultNS,n=c||j||(0,i.nI)();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new i.zv),!n){l("You will need to pass in an i18next instance by using initReactI18next");var q=function(a){return Array.isArray(a)?a[a.length-1]:a},r=[q,{},!1];return r.t=q,r.i18n={},r.ready=!1,r}n.options.react&& void 0!==n.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var s=o(o(o({},(0,i.JP)()),n.options.react),b),t=s.useSuspense,u=s.keyPrefix,v=a||k||n.options&&n.options.defaultNS;v="string"==typeof v?[v]:v||["translation"],n.reportNamespaces.addUsedNamespaces&&n.reportNamespaces.addUsedNamespaces(v);var w=(n.isInitialized||n.initializedStoreOnce)&&v.every(function(a){return function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};return b.languages&&b.languages.length?void 0!==b.options.ignoreJSONStructure?b.hasLoadedNamespace(a,{precheck:function(b,d){if(c.bindI18n&&c.bindI18n.indexOf("languageChanging")> -1&&b.services.backendConnector.backend&&b.isLanguageChangingTo&&!d(b.isLanguageChangingTo,a))return!1}}):function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{},d=b.languages[0],e=!!b.options&&b.options.fallbackLng,f=b.languages[b.languages.length-1];if("cimode"===d.toLowerCase())return!0;var g=function(a,c){var d=b.services.backendConnector.state["".concat(a,"|").concat(c)];return -1===d||2===d};return(!(c.bindI18n&&c.bindI18n.indexOf("languageChanging")> -1)||!b.services.backendConnector.backend||!b.isLanguageChangingTo||!!g(b.isLanguageChangingTo,a))&&!!(b.hasResourceBundle(d,a)||!b.services.backendConnector.backend||b.options.resources&&!b.options.partialBundledLanguages||g(d,a)&&(!e||g(f,a)))}(a,b,c):(l("i18n.languages were undefined or empty",b.languages),!0)}(a,n,s)});function x(){return n.getFixedT(null,"fallback"===s.nsMode?v:v[0],u)}var y,z,A=(y=(0,h.useState)(x),z=2,(0,d.Z)(y)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(y,z)||(0,e.Z)(y,z)||(0,f.Z)()),B=A[0],C=A[1],D=v.join(),E=p(D),F=(0,h.useRef)(!0);(0,h.useEffect)(function(){var a=s.bindI18n,b=s.bindI18nStore;function c(){F.current&&C(x)}return F.current=!0,w||t||m(n,v,function(){F.current&&C(x)}),w&&E&&E!==D&&F.current&&C(x),a&&n&&n.on(a,c),b&&n&&n.store.on(b,c),function(){F.current=!1,a&&n&&a.split(" ").forEach(function(a){return n.off(a,c)}),b&&n&&b.split(" ").forEach(function(a){return n.store.off(a,c)})}},[n,D]);var G=(0,h.useRef)(!0);(0,h.useEffect)(function(){F.current&&!G.current&&C(x),G.current=!1},[n]);var H=[B,n,w];if(H.t=B,H.i18n=n,H.ready=w,w|| !w&&!t)return H;throw new Promise(function(a){m(n,v,function(){a()})})}},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},9534:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})}}])