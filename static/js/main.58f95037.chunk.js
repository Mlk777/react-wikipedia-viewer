(this["webpackJsonpreact-wikipedia-viewer"]=this["webpackJsonpreact-wikipedia-viewer"]||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/logo.9282ac41.png"},19:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=n(1),l=n(2);function s(){var e=Object(i.a)(["\n  body {\n    height: 100vh;\n    width: 100vw;\n    max-width: 100%;\n    background: #f1edea;  \n    background: -webkit-linear-gradient(to right, #FFFFFF, #f1edea);  \n    background: linear-gradient(to right, #FFFFFF, #f1edea); \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]);return s=function(){return e},e}var u=Object(l.a)(s()),d=n(15),p=n.n(d),f=function(){return a.a.createElement("header",{className:"flex flex-col md:flex-row items-center text-center md:justify-center p-4 text-blue-900 text-6xl font-bold tracking-wide",style:{textShadow:"rgba(0, 9, 10, 0.7) 1px 1px 5px",lineHeight:"4.5rem"}},a.a.createElement("img",{src:p.a,alt:"Wikipedia logo svg",className:"m-4 w-32 sm:mr-4 "}),"Wikipedia Viewer")},m=n(3),b=n(6),g=n(16);function h(){var e=Object(i.a)(["\n  input {\n    background-size: 30px 30px;\n    background-image: url('https://d30y9cdsu7xlg0.cloudfront.net/png/14173-200.png');\n    background-position: 15px 8px;\n    background-repeat: no-repeat;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n\n    :focus {\n      width: 80%;\n      border-color: #889ebb;\n    }\n\n    @media (min-width: 640px) {\n      :focus {\n        width: ",";\n      }\n    }\n  }\n"]);return h=function(){return e},e}var x=l.b.div(h(),(function(e){return e.extendedSize})),v=n(8),j=n(4),w=n.n(j),E=n(5),O=a.a.createContext(),y=function(e){var t=Object(r.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(""),l=Object(m.a)(i,2),s=l[0],u=l[1],d=Object(r.useState)(0),p=Object(m.a)(d,2),f=p[0],b=p[1],g=Object(r.useState)(10),h=Object(m.a)(g,2),x=h[0],j=h[1],y=function(){var e=Object(E.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o([]),b(0),e.next=5,fetch("".concat("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=").concat(t));case 5:return e.next=7,e.sent.json();case 7:n=e.sent,u(t),o(n.query.search),b(n.query.searchinfo.totalhits),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(x+10),e.next=4,fetch("".concat("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srprop=snippet&format=json&srsearch=").concat(t,"&sroffset=").concat(x));case 4:return e.next=6,e.sent.json();case 6:n=e.sent,o([].concat(Object(v.a)(c),Object(v.a)(n.query.search))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(O.Provider,{value:{searchTerm:s,articles:c,totalResults:f,searchArticles:y,loadMoreArticles:k,setSearchTerm:u,setArticles:o,setTotalResults:b}},e.children)},k=function(){var e=Object(r.useRef)(null),t=function(){var e=Object(r.useState)({}),t=Object(m.a)(e,2),n=t[0],a=t[1];return[n,function(e){return a(Object(g.a)({},n,Object(b.a)({},e.currentTarget.name,e.currentTarget.value)))}]}(),n=Object(m.a)(t,2),c=n[0],o=n[1],i=Object(r.useContext)(O),l=i.searchArticles,s=i.setSearchTerm,u=i.setArticles,d=i.setTotalResults;return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l(c.search),e.current.blur()}},a.a.createElement("div",{className:"p-4 mt-2 w-full h-12 flex justify-center"},a.a.createElement(x,{className:"relative flex justify-center max-w-screen-xl w-full h-10",extendedSize:"50%"},a.a.createElement("input",{type:"text",name:"search",ref:e,onChange:o,onFocus:function(e){s(""),e.target.placeholder="What are you looking for today?",e.target.value="",u([]),d(0)},onBlur:function(e){return e.target.placeholder="What...."},placeholder:"What....",className:"rounded-full border-2 px-12 outline-none text-sm sm:text-xl w-8/12 sm:w-4/12 "})))))},N=n(17),F=n.n(N);function S(){var e=Object(i.a)(["\n  :hover {\n    color: #234562;\n  }\n"]);return S=function(){return e},e}var R=l.b.a(S()),C=function(){return a.a.createElement("div",{className:"flex justify-center mt-1 p-4 w-full h-4 w-full"},a.a.createElement(R,{href:"https://en.wikipedia.org/wiki/Special:Random",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(F.a,{className:"fa-random",name:"randomSearch",size:"lg"})))};function T(){var e=Object(i.a)(["\n  height: 300px;\n  border-radius: 0.5em;\n  text-align: center;\n  box-shadow: 0px 0px 6px 0px #001215de;\n\n  hr {\n    height: 1px;\n    opacity: 0.3;\n    width: 70%;\n    margin: 0 auto;\n  }\n"]);return T=function(){return e},e}var q=l.b.div(T()),A=function(e){var t=e.title,n=e.pageId,c=Object(r.useState)(""),o=Object(m.a)(c,2),i=o[0],l=o[1],s=Object(r.useContext)(O),u="https://en.wikipedia.org/w/api.php?origin=*&action=query&pageids=".concat(n,"&prop=info|extracts&exintro=&explaintext=&inprop=url&format=json&formatversion=2");return Object(r.useEffect)((function(){Object(E.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.query.pages[0]);case 7:case"end":return e.stop()}}),e)})))()}),[]),a.a.createElement(q,{className:"grid justify-center items-center border-2 border-blue-500"},a.a.createElement("div",{className:"text-lg font-bold",style:{padding:"0 0.5em"}},t.substring(0,30).replace(/"/g,"")),a.a.createElement("div",null,a.a.createElement("hr",{className:"bg-blue-600"})),a.a.createElement("div",null,i.extract&&"".concat(i.extract.substring(0,50).replace(/\\|"/g,""),"...")),a.a.createElement("div",null,a.a.createElement("a",{href:s.articles.fullurl,target:"_blank",rel:"noopener noreferrer",className:"italic font-semibold text-gray-500"},"Read more")))};function z(){var e=Object(i.a)(["\n  display: grid;\n  grid-gap: 1.5em;\n  justify-content: space-around;\n  grid-template-columns: repeat(auto-fill, 250px);\n  padding: 25px;\n"]);return z=function(){return e},e}var W=l.b.div(z()),I=function(){var e=Object(r.useContext)(O);return a.a.createElement("div",{className:"mt-12 h-auto"},e.totalResults>0&&a.a.createElement("p",{className:"text-center display-none"},a.a.createElement("span",{className:"font-extrabold italic"},e.totalResults)," ","Results found !"),a.a.createElement(W,null,e.articles&&e.articles.map((function(e){return a.a.createElement(A,{key:e.pageid,title:e.title,pageId:e.pageid})}))))};function B(){var e=Object(i.a)(["\n  background-color: #607d8b17;\n\n  :active {\n    outline: none;\n  }\n"]);return B=function(){return e},e}var J=l.b.button(B()),M=function(){var e=Object(r.useContext)(O),t=e.loadMoreArticles,n=e.articles,c=Object(r.useContext)(O).searchTerm,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){o.current.scrollIntoView({behavior:"smooth"})}),[n]),a.a.createElement("footer",{onClick:function(e){t(c)},className:"w-full bottom-0 flex justify-center mb-4",style:{display:0===n.length?"none":"",gridRowStart:2,gridRowEnd:3}},a.a.createElement(J,{className:"px-6 py-2 m-4 bg-gray-200 rounded-lg sm:rounded-full text-lg font-bold",ref:o},"Load more !"))},V=function(){return a.a.createElement(y,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement(f,null),a.a.createElement(k,null),a.a.createElement(C,null),a.a.createElement(I,null),a.a.createElement(M,null)))};n(32);o.a.render(a.a.createElement(V,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.58f95037.chunk.js.map