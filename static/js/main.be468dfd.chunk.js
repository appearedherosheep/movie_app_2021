(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(15),c=n.n(i),r=n(6),o=n.n(r),m=n(16),l=n(17),d=n(18),u=n(21),j=n(20),v=n(19),h=n.n(v),b=(n(45),n(0));var p=function(e){var t=e.year,n=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:a,alt:n,title:n}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:n}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsxs)("ul",{className:"movie__genres",children:[" ",i.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))]}),Object(b.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})},g=(n(47),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:n.map((function(e){return Object(b.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),_=g,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.be468dfd.chunk.js.map