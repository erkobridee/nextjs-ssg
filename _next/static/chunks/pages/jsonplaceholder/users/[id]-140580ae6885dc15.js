(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{8643:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jsonplaceholder/users/[id]",function(){return c(8046)}])},9721:function(d,b,a){"use strict";a.d(b,{Z:function(){return g}});var e=a(5893);a(7294);var c=a(9008),f=a.n(c),g=function(a){var b=a.title,c=a.children;return(0,e.jsxs)(f(),{children:[(0,e.jsxs)("title",{children:[b&&"".concat(b," | "),"Hello Next.js SSG"]}),c]})}},7487:function(c,b,a){"use strict";a.d(b,{Z:function(){return k}});var d=a(5893);a(7294);var e=a(6010),f=a(7058),g=a(9721),h=a(5115),i="".concat("/nextjs-ssg"),j={header:"flex items-center border border-gray-200 min-h-[60px] w-full px-4",container:"p-0 flex flex-col min-h-screen",main:"px-4 flex flex-col flex-1",footer:"mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2",footerLink:"flex justify-center items-center",footerLogo:"ml-2 h-4"},k=function(a){var b,c=a.htmlHead,l=void 0===c?(0,d.jsx)(g.Z,{}):c,k=a.header,m=a.children,n=a.className,o=a.containerClassName,p=a.headerClassName,q=(0,f.$)().t;return(0,d.jsxs)(d.Fragment,{children:[l,(0,d.jsxs)("div",{className:(0,e.Z)(j.container,o),children:[k&&(0,d.jsx)("header",{className:(0,e.Z)(j.header,p),children:k}),(0,d.jsx)("main",{className:(0,e.Z)(j.main,n),children:m}),(0,d.jsxs)("footer",{className:j.footer,children:[(0,d.jsxs)(h.Z,{className:j.footerLink,href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:["".concat(q("Powered by")," "),(0,d.jsx)("img",{src:(b="vercel.svg",i?"".concat(i,"/").concat(b):"/".concat(b)),alt:"Vercel Logo",className:j.footerLogo})]}),(0,d.jsx)(h.Z,{href:"https://nextjs.org/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-NextJS-000?&logo=next.js",alt:"Next.js Logo"})}),(0,d.jsx)(h.Z,{href:"https://tailwindcss.com/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss",alt:"TailwindCSS Logo"})})]})]})]})}},2727:function(c,b,a){"use strict";a.d(b,{Z:function(){return j}});var d=a(5893);a(7294);var e=a(9721),f=a(7058),g=a(4416),h=function(){var a,b=(0,f.$)().t;return(0,d.jsx)(g.u,{items:[{label:(a=b)("Home"),href:"/"},{label:"Json Placeholder",href:"/jsonplaceholder"},{label:a("Users"),href:"/jsonplaceholder/users"},]})},i=a(7487),j=function(a){var b=a.children,c=a.className,f=a.containerClassName;return(0,d.jsx)(i.Z,{children:b,className:c,containerClassName:f,header:(0,d.jsx)(h,{}),htmlHead:(0,d.jsx)(e.Z,{title:"JSON Placeholder"})})}},2927:function(g,c,a){"use strict";a.d(c,{Z:function(){return r}});var h=a(4924),i=a(6042),j=a(9396),k=a(9534),l=a(603),m=a(5893),d=a(7294),e=a(1664),n=a.n(e),o=a(1163),p=a(6010),f=a(3389),q=a.n(f),b=d.forwardRef(function(a,g){var b=(0,l.Z)(d.useState(!1),2),r=b[0],E=b[1],s=(0,o.useRouter)().pathname,t=a.className,c=a.activeClassName,e=a.checkIsActive,u=void 0===e?function(a,b){return a===b}:e,f=a.href,v=a.as,w=a.replace,x=a.scroll,y=a.shallow,z=a.passHref,A=a.prefetch,B=a.locale,C=(0,k.Z)(a,["className","activeClassName","checkIsActive","href","as","replace","scroll","shallow","passHref","prefetch","locale"]);d.useEffect(function(){E(u(s,f))},[s,f,u]);var D=(0,j.Z)((0,i.Z)({},C),{className:(0,p.Z)(q().link,t,(0,h.Z)({},"".concat(void 0===c?"active":c),r))});return(0,m.jsx)(n(),{href:f,as:v,replace:w,scroll:x,shallow:y,passHref:z,prefetch:A,locale:B,children:(0,m.jsx)("a",(0,j.Z)((0,i.Z)({},D),{ref:g}))})});b.displayName="InternalLink";var r=b},5115:function(d,c,a){"use strict";a.d(c,{Z:function(){return i}});var e=a(6042),f=a(9396),g=a(9534),h=a(5893),b=a(7294).forwardRef(function(a,i){var b=a.target,c=a.rel,d=a.href,j=a.children,k=(0,g.Z)(a,["target","rel","href","children"]);return b="_blank",c="noopener noreferrer",(0,h.jsx)("a",(0,f.Z)((0,e.Z)({},k),{ref:i,target:b,rel:c,href:d,children:j||d}))});b.displayName="TargetBlankLink";var i=b},4416:function(e,b,a){"use strict";a.d(b,{u:function(){return r}});var f=a(5893),g=a(7294),h=a(2927),i=a(4924),j=a(603),k=a(6010),l=a(7058),m=a(195),c=a(7551),n=a.n(c),o=/^[a-z]{2}-[a-z]{2}$/i,p=function(c){var d=c.className,a=(0,l.$)().i18n,b=(0,j.Z)(g.useState(a.language),2),e=b[0],h=b[1];g.useEffect(function(){return a.on("languageChanged",h),window&&window.setTimeout(function(){var b=a.language;o.test(b)&&(b=b.split("-")[0]),h(b)}),function(){a.off("languageChanged",h)}},[a]);var p=function(b){(0,m.J1)(b).then(function(){return a.changeLanguage(b)})},q=g.useCallback(function(a){return function(){return e!==a?p(a):void 0}},[e]);return(0,f.jsx)("div",{className:(0,k.Z)(n().container,d),children:(0,f.jsx)("ul",{children:m.J3.map(function(a,b){return(0,f.jsx)("li",{className:(0,k.Z)(n().option,(0,i.Z)({},"".concat(n().selected),a===e)),onClick:q(a),children:a},b)})})})},d=a(4763),q=a.n(d),r=function(a){var b=a.label,c=a.items;return(0,f.jsxs)("div",{className:q().nav,children:[b&&(0,f.jsx)("div",{className:q().label,children:b}),(0,f.jsx)("ul",{children:(void 0===c?[]:c).map(function(a,b){var c=a.label,d=a.href;return(0,f.jsx)("li",{children:(0,f.jsx)(h.Z,{activeClassName:q().activeLink,href:d,children:c})},b)})}),(0,f.jsx)("div",{className:q().spacer}),(0,f.jsx)(p,{})]})}},8046:function(d,b,a){"use strict";a.r(b),a.d(b,{User:function(){return c},"__N_SSG":function(){return i}});var e=a(5893);a(7294);var f=a(7058),g=a(2727),h=a(2927),i=!0,c=function(c){var a=c.user,b=(0,f.$)().t;return(0,e.jsxs)(g.Z,{className:"space-y-4",children:[(0,e.jsx)("h1",{className:"mt-8 text-xl",children:"".concat(b("User"),": ").concat(a.name)}),(0,e.jsx)("pre",{className:"rounded-[5px] bg-gray-100 p-3 font-mono text-xs",children:(0,e.jsx)("code",{children:JSON.stringify(a,null,2)})}),(0,e.jsx)(h.Z,{href:"/jsonplaceholder/users",children:b("Back")})]})};b.default=c},7551:function(a){a.exports={container:"ChangeLanguage_container__wc7Ay",option:"ChangeLanguage_option__E0Ve3",selected:"ChangeLanguage_selected__JJhXI"}},3389:function(a){a.exports={link:"InternalLink_link__rEVyt"}},4763:function(a){a.exports={nav:"TopNavBase_nav__LG9uP",label:"TopNavBase_label__PDyH4",activeLink:"TopNavBase_activeLink__hHp96",spacer:"TopNavBase_spacer__UBcKB"}}},function(a){a.O(0,[441,774,888,179],function(){var b;return a(a.s=8643)}),_N_E=a.O()}])