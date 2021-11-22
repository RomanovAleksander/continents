(this.webpackJsonpcontinents=this.webpackJsonpcontinents||[]).push([[0],{52:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var c,r,a=t(2),s=t.n(a),o=t(38),i=t.n(o),u=t(62),j=t(64),l=t(61),b=t(17),d=t(25),O=t(63),f=Object(O.a)(c||(c=Object(d.a)(["\n    query GetContinents {\n        continents {\n            name\n            code\n            countries {\n                name\n                code\n                languages {\n                    name\n                }\n            }\n        }\n    }\n"]))),x=t(65),h=t(31),m=t.n(h),g=t(39),p=s.a.createContext(),v=Object(O.a)(r||(r=Object(d.a)(["\n    query GetCountries($code: String!) {\n        continents(filter: { code: { eq: $code } }) {\n            countries {\n                name\n                code\n                capital\n                languages {\n                    name\n                    code\n                }\n            }\n        }\n    }\n"]))),C=t(3),w=function(n){var e=n.languages,t=Object(a.useContext)(p),c=t.setCountries,r=t.setEnabled;return Object(C.jsx)("ul",{children:e.map((function(n){return Object(C.jsx)("li",{onClick:function(){c([]),r(!1)},children:n.name},n.code)}))})},k=function(n){var e=n.country,t=e.name,c=e.languages,r=Object(a.useState)(!1),s=Object(b.a)(r,2),o=s[0],i=s[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{onClick:function(){return i(!o)},children:t}),o&&Object(C.jsx)(w,{languages:c})]})},S=function(n){var e=n.countries;return Object(C.jsx)("ul",{children:e.map((function(n){return Object(C.jsx)(k,{country:n},n.code)}))})},y=function(n){var e=n.continent,t=e.name,c=e.code,r=Object(a.useState)([]),o=Object(b.a)(r,2),i=o[0],u=o[1],j=s.a.useState(!1),l=Object(b.a)(j,2),d=l[0],O=l[1],f=Object(x.a)(v,{variables:{code:c}}).data;return Object(a.useEffect)(Object(g.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(d?f.continents[0].countries:[]);case 1:case"end":return n.stop()}}),n)}))),[d]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{onClick:function(){return O(!d)},children:t}),!!i.length&&Object(C.jsx)(p.Provider,{value:{setEnabled:O,setCountries:u},children:Object(C.jsx)(S,{countries:i})})]})},E=function(n){var e=n.continents;return Object(C.jsx)("ul",{children:e.map((function(n){return Object(C.jsx)(y,{continent:n},n.code)}))})},q=function(){var n=Object(a.useState)([]),e=Object(b.a)(n,2),t=e[0],c=e[1],r=Object(x.a)(f),s=r.data,o=r.loading,i=r.error;return Object(a.useEffect)((function(){o||c(s.continents)}),[s]),o?Object(C.jsx)("p",{className:"loading",children:"Loading..."}):i?Object(C.jsx)("p",{className:"error",children:"Oops, Something went wrong..."}):Object(C.jsx)("div",{className:"list-container",children:Object(C.jsx)(E,{continents:t})})},N=(t(52),new u.a({uri:"https://countries.trevorblades.com/",cache:new j.a}));i.a.render(Object(C.jsx)(l.a,{client:N,children:Object(C.jsx)(q,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.9787da37.chunk.js.map