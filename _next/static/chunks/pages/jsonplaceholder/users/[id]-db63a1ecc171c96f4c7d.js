(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{8182:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893),c=(t(7294),t(9008)),a=function(e){var r=e.title,t=e.children;return(0,n.jsxs)(c.default,{children:[(0,n.jsxs)("title",{children:[r&&"".concat(r," | "),"Hello Next.js SSG"]}),t]})}},2378:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(5893),c=(t(7294),t(6010)),a=t(1649),s=t(8182),o=t(2518),i="".concat("/nextjs-ssg"),l=function(e){return i?"".concat(i,"/").concat(e):"/".concat(e)},u="flex items-center border border-gray-200 min-h-[60px] w-full px-4",f="p-0 flex flex-col min-h-screen",p="px-4 flex flex-col flex-1",h="mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2",d="flex justify-center items-center",j="ml-2 h-4",m=function(e){var r=e.htmlHead,t=void 0===r?(0,n.jsx)(s.Z,{}):r,i=e.header,m=e.children,v=e.className,g=e.containerClassName,x=e.headerClassName,b=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsxs)("div",{className:(0,c.Z)(f,g),children:[i&&(0,n.jsx)("header",{className:(0,c.Z)(u,x),children:i}),(0,n.jsx)("main",{className:(0,c.Z)(p,v),children:m}),(0,n.jsxs)("footer",{className:h,children:[(0,n.jsxs)(o.Z,{className:d,href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:["".concat(b("Powered by")," "),(0,n.jsx)("img",{src:l("vercel.svg"),alt:"Vercel Logo",className:j})]}),(0,n.jsx)(o.Z,{href:"https://nextjs.org/",children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/-NextJS-000?&logo=next.js",alt:"Next.js Logo"})}),(0,n.jsx)(o.Z,{href:"https://tailwindcss.com/",children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss",alt:"TailwindCSS Logo"})})]})]})]})}},1244:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(2809),c=t(5893),a=(t(7294),t(8182)),s=t(1649),o=t(6497),i=function(e){return[{label:e("Home"),href:"/"},{label:"Json Placeholder",href:"/jsonplaceholder"},{label:e("Users"),href:"/jsonplaceholder/users"}]},l=function(){var e=(0,s.$)().t;return(0,c.jsx)(o.u,{items:i(e)})},u=t(2378);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var p=function(e){var r=e.children,t=e.className,s=e.containerClassName;return(0,c.jsx)(u.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{children:r,className:t,containerClassName:s,header:(0,c.jsx)(l,{}),htmlHead:(0,c.jsx)(a.Z,{title:"JSON Placeholder"})}))}},9351:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(5893),c=t(2809),a=t(7714),s=t(3021),o=t(7294),i=t(1664),l=t(1163),u=t(6010),f=t(2341),p=t.n(f);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=function(e,r){return e===r},m=o.forwardRef((function(e,r){var t=o.useState(!1),f=(0,s.Z)(t,2),h=f[0],m=f[1],v=(0,l.useRouter)().pathname,g=e.className,x=e.activeClassName,b=void 0===x?"active":x,O=e.checkIsActive,N=void 0===O?j:O,_=e.href,y=e.as,w=e.replace,P=e.scroll,Z=e.shallow,k=e.passHref,S=e.prefetch,C=e.locale,E=(0,a.Z)(e,["className","activeClassName","checkIsActive","href","as","replace","scroll","shallow","passHref","prefetch","locale"]);o.useEffect((function(){m(N(v,_))}),[v,_,N]);var D=d(d({},E),{},{className:(0,u.Z)(p().link,g,(0,c.Z)({},"".concat(b),h))});return(0,n.jsx)(i.default,d(d({},{href:_,as:y,replace:w,scroll:P,shallow:Z,passHref:k,prefetch:S,locale:C}),{},{children:(0,n.jsx)("a",d(d({},D),{},{ref:r}))}))}));m.displayName="InternalLink";var v=m},2518:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),c=t(2809),a=t(7714);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i=t(7294).forwardRef((function(e,r){e.target,e.rel;var t=e.href,c=e.children,s=(0,a.Z)(e,["target","rel","href","children"]);return"_blank","noopener noreferrer",(0,n.jsx)("a",o(o({},o(o({},s),{},{ref:r,target:"_blank",rel:"noopener noreferrer",href:t})),{},{children:c||t}))}));i.displayName="TargetBlankLink";var l=i},6497:function(e,r,t){"use strict";t.d(r,{u:function(){return v}});var n=t(5893),c=t(7294),a=t(9351),s=t(2809),o=t(3021),i=t(6010),l=t(1649),u=t(6535),f=t(2210),p=t.n(f),h=/^[a-z]{2}-[a-z]{2}$/i,d=function(e){var r=e.className,t=(0,l.$)().i18n,a=c.useState(t.language),f=(0,o.Z)(a,2),d=f[0],j=f[1];c.useEffect((function(){return t.on("languageChanged",j),window&&window.setTimeout((function(){var e=t.language;h.test(e)&&(e=e.split("-")[0]),j(e)})),function(){t.off("languageChanged",j)}}),[t]);var m=c.useCallback((function(e){return function(){return d!==e?function(e){(0,u.J1)(e).then((function(){return t.changeLanguage(e)}))}(e):void 0}}),[d]);return(0,n.jsx)("div",{className:(0,i.Z)(p().container,r),children:(0,n.jsx)("ul",{children:u.J3.map((function(e,r){return(0,n.jsx)("li",{className:(0,i.Z)(p().option,(0,s.Z)({},"".concat(p().selected),e===d)),onClick:m(e),children:e},r)}))})})},j=t(2311),m=t.n(j),v=function(e){var r=e.label,t=e.items,c=void 0===t?[]:t;return(0,n.jsxs)("div",{className:m().nav,children:[r&&(0,n.jsx)("div",{className:m().label,children:r}),(0,n.jsx)("ul",{children:c.map((function(e,r){var t=e.label,c=e.href;return(0,n.jsx)("li",{children:(0,n.jsx)(a.Z,{activeClassName:m().activeLink,href:c,children:t})},r)}))}),(0,n.jsx)("div",{className:m().spacer}),(0,n.jsx)(d,{})]})}},2419:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return o},User:function(){return i}});var n=t(5893),c=(t(7294),t(1649)),a=t(1244),s=t(9351),o=!0,i=function(e){var r=e.user,t=(0,c.$)().t;return(0,n.jsxs)(a.Z,{className:"space-y-4",children:[(0,n.jsx)("h1",{className:"text-xl mt-8",children:"".concat(t("User"),": ").concat(r.name)}),(0,n.jsx)("pre",{className:"bg-gray-100 rounded-[5px] p-3 text-xs font-mono",children:(0,n.jsx)("code",{children:JSON.stringify(r,null,2)})}),(0,n.jsx)(s.Z,{href:"/jsonplaceholder/users",children:t("Back")})]})};r.default=i},1115:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jsonplaceholder/users/[id]",function(){return t(2419)}])},2210:function(e){e.exports={container:"ChangeLanguage_container__2IP2R",option:"ChangeLanguage_option__2637J",selected:"ChangeLanguage_selected__2xqvE"}},2341:function(e){e.exports={link:"InternalLink_link__2BImF"}},2311:function(e){e.exports={nav:"TopNavBase_nav__FDJWr",label:"TopNavBase_label__2D9xv",activeLink:"TopNavBase_activeLink__24-VE",spacer:"TopNavBase_spacer__MjEM3"}}},function(e){e.O(0,[911,774,888,179],(function(){return r=1115,e(e.s=r);var r}));var r=e.O();_N_E=r}]);