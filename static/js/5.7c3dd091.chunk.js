(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{102:function(e,t,i){"use strict";i.r(t);var a=i(55),n=i(0),r=i(3),c=i(53),s=i(62),o=i(20),u=i(91),l=i.n(u),f=i(60),d=i(2);t.default=function(){var e=Object(r.g)(),t=Object(n.useState)(""),i=Object(a.a)(t,2),u=i[0],m=i[1],p=Object(n.useState)([]),v=Object(a.a)(p,2),h=v[0],b=v[1];return Object(n.useEffect)((function(){var t,i;(null===(t=e.location.state)||void 0===t?void 0:t.search)&&Object(c.c)(null===(i=e.location.state)||void 0===i?void 0:i.search).then((function(t){var i;b(t.data.results),m(null===(i=e.location.state)||void 0===i?void 0:i.search)}))}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.a,{text:"Movies"}),Object(d.jsxs)("form",{className:l.a.form,onSubmit:function(e){if(e.preventDefault(),""===u.trim())return m(""),o.b.info("\ud83d\ude31 Please enter a value for search movies!");Object(c.c)(u).then((function(e){return b(e.data.results)}))},children:[Object(d.jsx)("input",{className:l.a.input,name:"query",value:u,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(e){m(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:l.a.btn})]}),Object(d.jsx)(s.a,{query:u,films:h})]})}},53:function(e,t,i){"use strict";i.d(t,"e",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return f})),i.d(t,"a",(function(){return d})),i.d(t,"d",(function(){return m}));var a=i(56),n=i.n(a),r=i(57),c=i(59),s=i.n(c);function o(){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()({method:"GET",url:"/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return s()({method:"GET",url:"/movie/".concat(e,"?api_key=8d4e0a5a0c37d4780eefdf617d0feea1")})}function f(e){return s()({method:"GET",url:"/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query="+e})}function d(e){return s.a.get("/movie/".concat(e,"/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"))}function m(e){return s.a.get("/movie/".concat(e,"/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"))}s.a.defaults.baseURL="https://api.themoviedb.org/3"},54:function(e,t,i){e.exports={filmsList:"FilmList_filmsList__3-sSY",itemFilm:"FilmList_itemFilm__1KYpT",filmTitle:"FilmList_filmTitle__2P-IF",poster:"FilmList_poster__1-foF"}},60:function(e,t,i){"use strict";var a=i(61),n=i.n(a),r=i(2);t.a=function(e){var t=e.text;return Object(r.jsx)("h1",{className:n.a.title,children:t})}},61:function(e,t,i){e.exports={title:"PageHeading_title__2j0-H"}},62:function(e,t,i){"use strict";var a=i(3),n=i(13),r=i(54),c=i.n(r),s=i(2),o=function(e){var t=e.film,i=e.query,r=Object(a.h)();return Object(s.jsxs)("li",{className:c.a.itemFilm,children:[Object(s.jsx)(n.b,{to:{pathname:"/movies/".concat(t.id),state:{search:void 0!==i?i:"",id:t.id,from:r.pathname}},children:Object(s.jsx)("img",{className:c.a.poster,src:null!==(null===t||void 0===t?void 0:t.poster_path)&&void 0!==(null===t||void 0===t?void 0:t.poster_path)?"https://image.tmdb.org/t/p/w500/"+t.poster_path:"https://media.comicbook.com/files/img/default-movie.png",alt:t.title})}),Object(s.jsx)("span",{className:c.a.filmTitle,children:t.title})]})};t.a=function(e){var t=e.films,i=e.query;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("ul",{className:c.a.filmsList,children:t.map((function(e){return Object(s.jsx)(o,{query:i,film:e},e.id)}))})})}},91:function(e,t,i){e.exports={form:"MoviesPageSearch_form__yxvbC",input:"MoviesPageSearch_input__2-LN_",btn:"MoviesPageSearch_btn__1HRXw"}}}]);
//# sourceMappingURL=5.7c3dd091.chunk.js.map