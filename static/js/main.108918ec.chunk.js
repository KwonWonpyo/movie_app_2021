(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),o=(n(37),n(38),n(8)),r=n(2),l=(n(39),n(1));var u=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(l.jsx)("span",{children:"- George Orwell, 1984"})]})},j=n(17),m=n.n(j),d=n(30),p=n(11),v=n(12),b=n(14),h=n(13),O=n(31),x=n.n(O);n(60);var f=function(e){var t=e.year,n=e.title,a=e.summary,s=e.poster,c=e.genres;return a.length>200&&(a=a.slice(0,200)+"......"),Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:c}},children:[Object(l.jsx)("img",{src:s,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:t}),Object(l.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"movie__genres",children:e},t)}))}),Object(l.jsx)("p",{className:"movie__summary",children:a})]})]})})},g=(n(66),n.p+"static/media/logo.6ce24c58.svg"),_=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,movies:[]},a.getMovies=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=year");case 2:t=e.sent,n=t.data.data.movies,console.log(n),a.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsxs)("div",{className:"loader",children:[Object(l.jsx)("img",{src:g,className:"App-logo",alt:"logo"}),Object(l.jsx)("span",{className:"loader__text",children:"\uc601\ud654 \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."})]}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component);n(67);var y=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(o.b,{to:"/",children:"Home"}),Object(l.jsx)(o.b,{to:"/about",children:"About"}),Object(l.jsx)("span",{className:"filter",children:"Filter Option"})]})},N=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var k=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(r.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(r.a,{path:"/about",component:u}),Object(l.jsx)(r.a,{path:"/movie-detail",component:N})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.108918ec.chunk.js.map