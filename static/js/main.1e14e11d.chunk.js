(this["webpackJsonpbigdata-msu-test-task"]=this["webpackJsonpbigdata-msu-test-task"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),i=n.n(a),l=(n(11),n(2)),r=(n(12),n(13),n(0));var o=function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{className:"header__title",children:"BigData MSU Movies"})})};n(15),n(16),n(17);var d=function(e){var t=e.id,n=e.urlPoster,s=e.title,c=e.year,a=e.rating,i=e.runtime,l=e.defaultComment,o=(e.setIsVisiblePopup,e.comment),d=(e.setCurrentIdMovie,e.hadleDeleteCommentButton),m=e.hadleAddCommentButton;return Object(r.jsxs)("tr",{className:"table__body-row",children:[Object(r.jsx)("td",{className:"table__body-cell",children:t}),Object(r.jsx)("td",{className:"table__body-cell",children:"poster"===n?"poster":Object(r.jsx)("img",{className:"table__poster",src:n,alt:s})}),Object(r.jsx)("td",{className:"table__body-cell",children:s}),Object(r.jsx)("td",{className:"table__body-cell",children:c}),Object(r.jsx)("td",{className:"table__body-cell",children:a}),Object(r.jsx)("td",{className:"table__body-cell",children:i}),Object(r.jsx)("td",{className:"table__body-cell table__body-cell_type_comment",children:l?"comment":Object(r.jsxs)(r.Fragment,{children:[o.length>0?Object(r.jsxs)("svg",{onClick:function(){return d(t)},className:"table__icon table__icon_delete",xmlns:"http://www.w3.org/2000/svg",height:"40px",viewBox:"0 0 24 24",width:"40px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})]}):Object(r.jsxs)("svg",{onClick:function(){return m(t)},className:"table__icon table__icon_add",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"40px",viewBox:"0 0 24 24",width:"40px",fill:"#000000",children:[Object(r.jsx)("g",{children:Object(r.jsx)("rect",{fill:"none",height:"24",width:"24"})}),Object(r.jsx)("g",{children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"})})})]}),Object(r.jsx)("p",{className:"table__comment",children:o})]})})]})};var m=function(e){var t=e.movies,n=e.setIsVisiblePopup,s=e.setCurrentIdMovie,c=e.hadleDeleteCommentButton,a=e.hadleAddCommentButton;return Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{className:"table__head",children:Object(r.jsx)(d,{id:"id",urlPoster:"poster",title:"title",year:"year",rating:"rating",runtime:"runtime",defaultComment:"comment"})}),Object(r.jsx)("tbody",{className:"table__body",children:t.map((function(e){return Object(r.jsx)(d,{id:e.id,urlPoster:e.medium_cover_image,title:e.title,year:e.year,rating:e.rating,runtime:e.runtime,comment:e.comment,setIsVisiblePopup:n,setCurrentIdMovie:s,hadleDeleteCommentButton:c,hadleAddCommentButton:a},e.id)}))})]})};n(18);var u=function(e){for(var t=e.moviesPerPage,n=e.totalMovies,s=e.paginate,c=[],a=1;a<=Math.ceil(n/t);a++)c.push(a);return Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)("ul",{className:"pagination__list",children:c.map((function(e){return Object(r.jsx)("li",{className:"pagination__list-item",children:Object(r.jsx)("button",{onClick:function(){return s(e)},className:"pagination__number",children:e})},e)}))})})};n(19);var j=function(e){var t=e.id,n=e.urlPoster,s=e.title,c=e.year,a=e.rating,i=e.runtime,l=(e.setIsVisiblePopup,e.comment),o=(e.setCurrentIdMovie,e.hadleDeleteCommentButton),d=e.hadleAddCommentButton;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card__head",children:[Object(r.jsxs)("p",{className:"card__id",children:["id ",t]}),Object(r.jsx)("p",{className:"card__title",children:s})]}),Object(r.jsxs)("div",{className:"card__main",children:[Object(r.jsx)("img",{className:"card__img",src:n,alt:s}),Object(r.jsxs)("div",{className:"card__main-wrapp",children:[Object(r.jsxs)("p",{className:"card__main-info",children:["year ",c]}),Object(r.jsxs)("p",{className:"card__main-info",children:["rating ",a]}),Object(r.jsxs)("p",{className:"card__main-info",children:["runtime ",i]})]})]}),Object(r.jsxs)("div",{className:"card__footer",children:[l.length>0?Object(r.jsxs)("svg",{onClick:function(){return o(t)},className:"card__icon card__icon_delete",xmlns:"http://www.w3.org/2000/svg",height:"40px",viewBox:"0 0 24 24",width:"40px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})]}):Object(r.jsxs)("svg",{onClick:function(){return d(t)},className:"card__icon card__icon_add",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"40px",viewBox:"0 0 24 24",width:"40px",fill:"#000000",children:[Object(r.jsx)("g",{children:Object(r.jsx)("rect",{fill:"none",height:"24",width:"24"})}),Object(r.jsx)("g",{children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"})})})]}),Object(r.jsx)("p",{className:"card__comment",children:l})]})]})};var h=function(e){var t=e.movies,n=e.setIsVisiblePopup,s=e.setCurrentIdMovie,a=e.hadleDeleteCommentButton,i=c.a.useState(1),o=Object(l.a)(i,2),d=o[0],h=o[1],b=c.a.useState(4),p=Object(l.a)(b,1)[0],_=c.a.useState(document.documentElement.clientWidth),v=Object(l.a)(_,1)[0],x=d*p,O=x-p,f=t.slice(O,x);function g(e){n(!0),s(e)}return Object(r.jsxs)("div",{className:"main",children:[v>=768?Object(r.jsx)(m,{movies:f,setIsVisiblePopup:n,setCurrentIdMovie:s,hadleDeleteCommentButton:a,hadleAddCommentButton:g}):f.map((function(e){return Object(r.jsx)(j,{id:e.id,urlPoster:e.medium_cover_image,title:e.title,year:e.year,rating:e.rating,runtime:e.runtime,comment:e.comment,setIsVisiblePopup:n,setCurrentIdMovie:s,hadleDeleteCommentButton:a,hadleAddCommentButton:g},e.id)})),Object(r.jsx)(u,{moviesPerPage:p,totalMovies:t.length,paginate:function(e){h(e)}})]})};n(20);var b=function(){return Object(r.jsx)("div",{className:"App"})},p=n(5),_=n(6),v=new(function(){function e(t){var n=t.baseUrl,s=t.headers;Object(p.a)(this,e),this._baseUrl=n,this._headers=s}return Object(_.a)(e,[{key:"getMovies",value:function(){var e=this;return fetch("".concat(this._baseUrl),{headers:this._headers}).then((function(t){return e._checkRequestResult(t)}))}},{key:"_checkRequestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://yts.mx/api/v2/list_movies.json",headers:{}});n(21);var x=function(e){var t=e.isVisiblePopup,n=e.setIsVisiblePopup,s=e.valueComment,c=e.setValueComment,a=e.handleSubmit,i=e.currentIdMovie;return Object(r.jsxs)("div",{className:"popup ".concat(t?"popup_visibility":""),children:[Object(r.jsxs)("form",{onSubmit:function(e){a(e,i)},className:"popup__form",children:[Object(r.jsx)("label",{className:"popup__title",htmlFor:"comment",children:"New comment"}),Object(r.jsx)("textarea",{id:"comment",className:"popup__input",value:s,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("button",{className:"popup__submit",type:"submit",children:"Save comment"})]}),Object(r.jsx)("div",{onClick:function(){n(!1),c("")},className:"popup__close"})]})};var O=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=c.a.useState(!1),i=Object(l.a)(a,2),d=i[0],m=i[1],u=c.a.useState(""),j=Object(l.a)(u,2),p=j[0],_=j[1],O=c.a.useState(0),f=Object(l.a)(O,2),g=f[0],N=f[1];return c.a.useEffect((function(){v.getMovies().then((function(e){e.data.movies.forEach((function(e){e.comment=""})),s(e.data.movies)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(o,{}),Object(r.jsx)(h,{movies:n,setIsVisiblePopup:m,setCurrentIdMovie:N,hadleDeleteCommentButton:function(e){s(n.map((function(t){return t.id===e?(t.comment="",t):t})))}}),Object(r.jsx)(b,{})]}),Object(r.jsx)(x,{isVisiblePopup:d,setIsVisiblePopup:m,valueComment:p,setValueComment:_,handleSubmit:function(e,t){e.preventDefault(),s(n.map((function(e){return e.id===t?(e.comment=p,e):e}))),_(""),m(!1)},currentIdMovie:g})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.1e14e11d.chunk.js.map