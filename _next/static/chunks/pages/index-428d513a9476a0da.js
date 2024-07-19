(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3416)}])},9721:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893);n(7294);var a=n(9008),s=n.n(a),c=function(e){var t=e.title,n=e.children;return(0,r.jsxs)(s(),{children:[(0,r.jsxs)("title",{children:[t&&"".concat(t," | "),"Hello Next.js SSG"]}),n]})}},7487:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893);n(7294);var a=n(512),s=n(7058),c=n(9721),l=n(5115),i="".concat("/nextjs-ssg"),o={header:"flex items-center border border-gray-200 min-h-[60px] w-full px-4",container:"p-0 flex flex-col min-h-screen",main:"px-4 flex flex-col flex-1",footer:"mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2",footerLink:"flex justify-center items-center",footerLogo:"ml-2 h-4"},d=function(e){var t,n=e.htmlHead,d=void 0===n?(0,r.jsx)(c.Z,{}):n,u=e.header,h=e.children,f=e.className,x=e.containerClassName,m=e.headerClassName,p=(0,s.$)().t;return(0,r.jsxs)(r.Fragment,{children:[d,(0,r.jsxs)("div",{className:(0,a.Z)(o.container,x),children:[u&&(0,r.jsx)("header",{className:(0,a.Z)(o.header,m),children:u}),(0,r.jsx)("main",{className:(0,a.Z)(o.main,f),children:h}),(0,r.jsxs)("footer",{className:o.footer,children:[(0,r.jsxs)(l.Z,{className:o.footerLink,href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:["".concat(p("Powered by")," "),(0,r.jsx)("img",{src:(t="vercel.svg",i?"".concat(i,"/").concat(t):"/".concat(t)),alt:"Vercel Logo",className:o.footerLogo})]}),(0,r.jsx)(l.Z,{href:"https://nextjs.org/",children:(0,r.jsx)("img",{src:"https://img.shields.io/badge/-NextJS-000?&logo=next.js",alt:"Next.js Logo"})}),(0,r.jsx)(l.Z,{href:"https://tailwindcss.com/",children:(0,r.jsx)("img",{src:"https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss",alt:"TailwindCSS Logo"})})]})]})]})}},2927:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4924),a=n(6042),s=n(9396),c=n(9534),l=n(603),i=n(5893),o=n(7294),d=n(1664),u=n.n(d),h=n(1163),f=n(512),x=n(3389),m=n.n(x),p=function(e,t){return e===t},j=o.forwardRef(function(e,t){var n=(0,l.Z)(o.useState(!1),2),d=n[0],x=n[1],j=(0,h.useRouter)().pathname,v=e.className,g=e.activeClassName,N=e.checkIsActive,_=void 0===N?p:N,b=e.href,w=e.as,Z=e.replace,k=e.scroll,L=e.shallow,y=e.passHref,C=e.prefetch,S=e.locale,T=(0,c.Z)(e,["className","activeClassName","checkIsActive","href","as","replace","scroll","shallow","passHref","prefetch","locale"]);o.useEffect(function(){x(_(j,b))},[j,b,_]);var E=(0,s.Z)((0,a.Z)({},T),{className:(0,f.Z)(m().link,v,(0,r.Z)({},"".concat(void 0===g?"active":g),d))});return(0,i.jsx)(u(),{href:b,as:w,replace:Z,scroll:k,shallow:L,passHref:y,prefetch:C,locale:S,children:(0,i.jsx)("a",(0,s.Z)((0,a.Z)({},E),{ref:t}))})});j.displayName="InternalLink";var v=j},5115:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(6042),a=n(9396),s=n(9534),c=n(5893),l=n(7294).forwardRef(function(e,t){var n=e.target,l=e.rel,i=e.href,o=e.children,d=(0,s.Z)(e,["target","rel","href","children"]);return n="_blank",l="noopener noreferrer",(0,c.jsx)("a",(0,a.Z)((0,r.Z)({},d),{ref:t,target:n,rel:l,href:i,children:o||i}))});l.displayName="TargetBlankLink";var i=l},4416:function(e,t,n){"use strict";n.d(t,{u:function(){return j}});var r=n(5893),a=n(7294),s=n(2927),c=n(4924),l=n(603),i=n(512),o=n(7058),d=n(5063),u=n(7551),h=n.n(u),f=/^[a-z]{2}-[a-z]{2}$/i,x=function(e){var t=e.className,n=(0,o.$)().i18n,s=(0,l.Z)(a.useState(n.language),2),u=s[0],x=s[1];a.useEffect(function(){return n.on("languageChanged",x),window&&window.setTimeout(function(){var e=n.language;f.test(e)&&(e=e.split("-")[0]),x(e)}),function(){n.off("languageChanged",x)}},[n]);var m=function(e){(0,d.J1)(e).then(function(){return n.changeLanguage(e)})},p=a.useCallback(function(e){return function(){return u!==e?m(e):void 0}},[u]);return(0,r.jsx)("div",{className:(0,i.Z)(h().container,t),children:(0,r.jsx)("ul",{children:d.J3.map(function(e,t){return(0,r.jsx)("li",{className:(0,i.Z)(h().option,(0,c.Z)({},"".concat(h().selected),e===u)),onClick:p(e),children:e},t)})})})},m=n(4763),p=n.n(m),j=function(e){var t=e.label,n=e.items;return(0,r.jsxs)("div",{className:p().nav,children:[t&&(0,r.jsx)("div",{className:p().label,children:t}),(0,r.jsx)("ul",{children:(void 0===n?[]:n).map(function(e,t){var n=e.label,a=e.href;return(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{activeClassName:p().activeLink,href:a,children:n})},t)})}),(0,r.jsx)("div",{className:p().spacer}),(0,r.jsx)(x,{})]})}},3416:function(e,t,n){"use strict";n.r(t),n.d(t,{Home:function(){return h},default:function(){return f}});var r=n(5893);n(7294);var a=n(7058),s=n(7487).Z,c=n(4416),l=[{label:"JSON Placeholder",href:"/jsonplaceholder"},],i=function(){var e=(0,a.$)().t;return(0,r.jsx)(c.u,{label:"".concat(e("Samples"),":"),items:l})},o=n(5115),d=JSON.parse('{"y":"hello world from json file"}'),u={main:"justify-center items-center",title:"leading-[1.15] text-[4rem] text-center mt-8 md:mt-0",titleLink:"no-underline text-blue-500 text-center hover:underline focus:underline active:underline",description:"mt-4 px-8 text-center text-2xl leading-normal",code:"bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono",grid:"flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full",card:"p-6 mt-6 md:w-96 text-left border rounded-xl transition ease-[2s] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-600 focus:border-blue-600 active:border-blue-600",cardTitle:"text-xl font-bold",cardText:"mt-4 text-lg"},h=function(){var e=(0,a.$)().t;return(0,r.jsxs)(s,{className:u.main,header:(0,r.jsx)(i,{}),children:[(0,r.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,r.jsxs)("div",{className:u.title,children:[e("Hello")," ",(0,r.jsx)("a",{className:u.titleLink,href:"https://nextjs.org",children:"Next.js"})," ","SSG"]}),(0,r.jsx)("div",{children:e("Welcome to React")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("code",{className:u.code,children:"hello.json"})," - ",d.y]})]}),(0,r.jsxs)("p",{className:u.description,children:["\uD83D\uDC49"," ",(0,r.jsx)("code",{className:u.code,children:(0,r.jsx)(o.Z,{href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended",children:"SSG"})})," ","- ",e("static site generation")]}),(0,r.jsxs)("div",{className:u.grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:u.card,children:[(0,r.jsxs)("h3",{children:[e("Documentation")," →"]}),(0,r.jsx)("p",{children:e("Find in-depth information about Next.js features and API.")})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:u.card,children:[(0,r.jsxs)("h3",{children:[e("Learn")," →"]}),(0,r.jsx)("p",{children:e("Learn about Next.js in an interactive course with quizzes!")})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:u.card,children:[(0,r.jsxs)("h3",{children:[e("Examples")," →"]}),(0,r.jsx)("p",{children:e("Discover and deploy boilerplate example Next.js projects.")})]}),(0,r.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u.card,children:[(0,r.jsxs)("h3",{children:[e("Deploy")," →"]}),(0,r.jsx)("p",{children:e("Instantly deploy your Next.js site to a public URL with Vercel.")})]})]})]})},f=h},7551:function(e){e.exports={container:"ChangeLanguage_container__wc7Ay",option:"ChangeLanguage_option__E0Ve3",selected:"ChangeLanguage_selected__JJhXI"}},3389:function(e){e.exports={link:"InternalLink_link__rEVyt"}},4763:function(e){e.exports={nav:"TopNavBase_nav__LG9uP",label:"TopNavBase_label__PDyH4",activeLink:"TopNavBase_activeLink__hHp96",spacer:"TopNavBase_spacer__UBcKB"}}},function(e){e.O(0,[539,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);