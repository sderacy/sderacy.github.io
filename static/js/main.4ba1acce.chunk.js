(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(3),c=a(1),i=a(0),r=Object(c.createContext)(),l=function(e){var t=e.children,a=Object(c.useState)("light"),n=Object(s.a)(a,2),l=n[0],o=n[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="/",h="SD.",j="Sterly Deracy",d="Full Stack Developer",b="I am continuously learning new frameworks and programming languages! I find that the best way to practice these tools is to use them, so I am usually working on different side projects. Currently, I am working in ReactJS! When I am not busy coding, I can be found playing 8-ball, video games, or tennis!",m="https://read.cv/sderacy",u={linkedin:"https://www.linkedin.com/in/sterlyderacy/",github:"https://www.github.com/sderacy"},p=[{name:"The G.O.O.N. Card",description:"LinkTree and other applications have a static set of links that can be shared with other users, which is inconvenient if you want to share your LinkedIn with an employer but your instagram with a friend. The G.O.O.N., the most flexible networking application available, mitigates this issue by leeting the user select the handles they want to share on the fly!",stack:["HTML","CSS","JavaScript","NodeJS","ExpressJS","Bootstrap","SQLite","Google Charts API","Web Speech API","Git","Github"],sourceCode:"https://www.github.com/sderacy/gooncard",livePreview:"https://www.github.com/sderacy/gooncard"},{name:"HackTCNJ",description:"HALO is a web application that alleviates hackathon operations. From handling registration to hacker and organizer management, HALO works as a resource management tool for all organizers.",stack:["HTML","CSS","JavaScript","Bootstrap","Django","Git","Github"],sourceCode:"https://www.github.com/tcnj-acm/halo",livePreview:"https://www.hacktcnj.com"},{name:"Wally's Adventure",description:"Hello! Welcome to Wallys Adventure! This is a simple arcade game that features Wally the Steam Whistle, the last steam whistle to be heard in Trenton. The idea for this game came from a class project that explored the relationship between Wally and the man who preserved him, William Lloyd Miller.",stack:["HTML","CSS","JavaScript","Rails","PostgreSQL"],sourceCode:"https://www.github.com/sderacy/wallysadventure",livePreview:"https://www.bit.ly/wallysadventure"},{name:"AMSTR - ACCR Management System Tracker",description:"ACCR is a nonprofit that works to provide additional support for defendants in the Atlantic region since the defendants in this area are overworked with too many cases. We created a system to record when the ACCR staff, lawyers, and other legal workers donate time, money, and efforts into the organization's efforts through a timesheet based system which also uses a database to store and collect the data. We plan to make this system as seamless as possible so that it is both efficient and effective, while maintaining all functionality.",stack:["HTML","CSS","JavaScript","Rails","PostgreSQL"]}],f=["Android Studio","AngularJS","Bootstrap","C","C++","CSS","Flask","Git","HTML","Ionic Framework","Java","JavaScript","Kotlin","MariaDB","MySQL","Node.js","PHP","PostgreSQL","Python","Rails","React","Ruby","TypeScript","WordPress"],O="sderacy@mail.com",x=a(16),g=a.n(x),k=a(14),w=a.n(k),v=a(18),y=a.n(v),N=a(17),S=a.n(N),C=(a(28),function(){var e=Object(c.useContext)(r),t=Object(s.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,l=Object(c.useState)(!1),o=Object(s.a)(l,2),h=o[0],j=o[1],d=function(){return j(!h)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:h?"flex":null},className:"nav_list",children:[p.length?Object(i.jsx)("li",{className:"nav_list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,f.length?Object(i.jsx)("li",{className:"nav_list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,O?Object(i.jsx)("li",{className:"nav_list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav_theme pr-1","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(w.a,{}):Object(i.jsx)(g.a,{})}),Object(i.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav_hamburger pr-1","aria-label":"toggle navigation",children:h?Object(i.jsx)(S.a,{}):Object(i.jsx)(y.a,{})})]})}),_=(a(32),function(){var e=o,t=h;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{className:"pl-1",children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),L=a(11),P=a.n(L),T=a(19),A=a.n(T),I=(a(33),function(){var e=j,t=d,a=b,n=m,s=u;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Howdy! I am ",Object(i.jsxs)("span",{className:"about_name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about_role",children:["A ",t,"."]}),Object(i.jsx)("img",{className:"headshot-img",src:"/headshot.jpg",alt:"Sterly Deracy in a blue suit with an off-white shirt and blue and yellow tie!"}),Object(i.jsx)("p",{className:"about_desc",children:a&&a}),Object(i.jsxs)("div",{className:"about_contact center",children:[n&&Object(i.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)(P.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)(A.a,{})})]})]})]})}),J=a(7),W=a.n(J),H=a(20),M=a.n(H),R=(a(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project_description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project_stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project_stack-item",children:e},W()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(P.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(M.a,{})})]})}),E=(a(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section_title",children:"Projects"}),Object(i.jsx)("div",{className:"projects_grid",children:p.map((function(e){return Object(i.jsx)(R,{project:e},W()())}))})]}):null}),G=(a(37),function(){return f.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section_title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills_list",children:f.map((function(e){return Object(i.jsx)("li",{className:"skills_list-item btn btn--plain",children:e},W()())}))})]}):null}),D=a(21),B=a.n(D),F=(a(38),function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(B.a,{fontSize:"large"})})}):null}),Q=(a(39),function(){return O?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section_title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(O),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(a(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://linkedin.com/in/sterlyderacy",className:"link footer_link",children:"Sterly Deracy \xa9 2023"})})}),K=(a(41),function(){var e=Object(c.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(_,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(I,{}),Object(i.jsx)(E,{}),Object(i.jsx)(G,{}),Object(i.jsx)(Q,{})]}),Object(i.jsx)(F,{}),Object(i.jsx)(z,{})]})});a(42);Object(n.render)(Object(i.jsx)(l,{children:Object(i.jsx)(K,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4ba1acce.chunk.js.map