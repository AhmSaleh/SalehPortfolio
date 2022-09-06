(this.webpackJsonpSalehPortfolio=this.webpackJsonpSalehPortfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(3),s=c(1),i=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("light"),n=Object(a.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://docdro.id/7AgUsYS",h="React Progress.",j="Ahmed Saleh",d="Software Engineer",b="I am a software engineer working currently for Integrant, inc as a full stack web developer.",m="https://docdro.id/I0KdUy6",u={linkedin:"https://eg.linkedin.com/in/ahmdmsaleh",github:"https://github.com/AhmSaleh"},O=[{name:"React Facts",description:"A simple static page using React.JS",stack:["React","JS","CSS"],sourceCode:"https://github.com/AhmSaleh/React-Facts",livePreview:"https://ahmsaleh.github.io/React-Facts/"},{name:"OpenSea",description:"A static page for the world's first and largest NFT marketplace",stack:["React","JS","CSS"],sourceCode:"https://github.com/AhmSaleh/OpenSea",livePreview:"https://ahmsaleh.github.io/OpenSea/"},{name:"Meme Generator",description:"A simple meme generator using imgflip API",stack:["React","JS","CSS"],sourceCode:"https://github.com/AhmSaleh/Meme-Generator",livePreview:"https://ahmsaleh.github.io/Meme-Generator/"},{name:"Advice App",description:"SPA which randomly generate advices using adviceslip API",stack:["React","JS","CSS"],sourceCode:"https://github.com/AhmSaleh/react-advice-app",livePreview:"https://ahmsaleh.github.io/react-advice-app/"},{name:"Food Order App",description:"A food order app with cart and menu",stack:["React","JS","CSS"],sourceCode:"https://github.com/AhmSaleh/Food-Oeder-App/tree/main",livePreview:"https://ahmsaleh.github.io/Food-Order-App/"}],p=["HTML","CSS","JavaScript","TypeScript","React","Redux","Material UI","Git","Asp.Net"],x="ahmed.saleh@integrant.com",f=c(16),g=c.n(f),v=c(14),k=c.n(v),N=c(18),S=c.n(N),_=c(17),w=c.n(_),C=(c(28),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(a.a)(r,2),h=o[0],j=o[1],d=function(){return j(!h)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(i.jsx)(k.a,{}):Object(i.jsx)(g.a,{})}),Object(i.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(i.jsx)(w.a,{}):Object(i.jsx)(S.a,{})})]})}),A=(c(32),function(){var e=o,t=h;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),P=c(11),R=c.n(P),y=c(19),I=c.n(y),J=(c(33),function(){var e=j,t=d,c=b,n=m,a=u;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(R.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(I.a,{})})]})]})]})}),E=c(7),F=c.n(E),M=c(20),T=c.n(M),G=(c(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},F()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(R.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(T.a,{})})]})}),L=(c(36),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"React Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(G,{project:e},F()())}))})]}):null}),U=(c(37),function(){return p.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},F()())}))})]}):null}),B=c(21),H=c.n(B),Y=(c(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(H.a,{fontSize:"large"})})}):null}),z=(c(39),function(){return x?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(x),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(c(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Ahmed Saleh"})})}),q=(c(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(A,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(J,{}),Object(i.jsx)(L,{}),Object(i.jsx)(U,{}),Object(i.jsx)(z,{})]}),Object(i.jsx)(Y,{}),Object(i.jsx)(K,{})]})});c(42);Object(n.render)(Object(i.jsx)(r,{children:Object(i.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.21340088.chunk.js.map