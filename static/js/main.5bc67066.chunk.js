(this["webpackJsonpreact-redux-saga-itunes-api"]=this["webpackJsonpreact-redux-saga-itunes-api"]||[]).push([[0],{101:function(e,t,n){},108:function(e,t,n){},130:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),s=n.n(r),a=n(25),i=n.n(a),j=(n(101),n(41)),l=(n(108),n(17)),o=n(94),h="REQUEST_API_DATA",u="RECEIVE_API_DATA",b=function(){return{type:h}},d=function(e){return{type:u,data:e}},O=Object(l.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.data;switch(n){case u:return c;default:return e}}}),x=n(18),p=n.n(x),f=n(45),v=n(33),m=function(){var e=Object(v.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://itunes.apple.com/search?term=jack+johnson&limit=25");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,console.log(n),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),g=p.a.mark(w),y=p.a.mark(N);function w(e){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.a)(m);case 3:return t=e.sent,e.next=6,Object(f.b)(d(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),g,null,[[0,8]])}function N(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(h,w);case 2:case"end":return e.stop()}}),y)}var A=Object(o.a)(),k=Object(l.e)(O,Object(l.a)(A));A.run(N);var C=n(35),D=n(7),P=n(76),S=n(77),E=n(95),F=n(93),T=n(34),G=n.n(T),I=n(78);function U(){var e=Object(I.a)(["\n   border: 1px solid blue;\n   border-radius: 20px;\n   margin-bottom: 1rem;\n   color: #fff;\n"]);return U=function(){return e},e}var _=n(79).a.div(U()),M=function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(P.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).person=function(e,t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_,{children:[Object(c.jsxs)("h1",{children:[e.artistName,Object(c.jsxs)("span",{children:["(",Object(c.jsx)("a",{href:e.artistViewUrl,children:"About Artist"}),")"]})]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Collection Name:"})," ",e.collectionName]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Collection Price:"})," ",e.collectionPrice]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Country:"})," ",e.country]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Genre:"})," ",e.primaryGenreName]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Release Date:"})," ",e.releaseDate]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Track Name:"})," ",e.trackName]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Preview:"})," "]}),Object(c.jsx)(G.a,{src:e.previewUrl,controls:!0})]},Math.random())})},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.requestApiData()}},{key:"render",value:function(){var e=this.props.data.results,t=void 0===e?[]:e;return t.length?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["Wanna search by artist name?",Object(c.jsx)("br",{}),Object(c.jsx)(C.b,{to:"/search",children:Object(c.jsx)("button",{className:"btn btn-warning",children:"Go Here"})})]}),Object(c.jsx)("div",{children:t.map(this.person)})]}):Object(c.jsx)("h1",{style:{textAlign:"center"},children:"loading..."})}}]),n}(s.a.Component),R=Object(j.b)((function(e){return{data:e.data}}),(function(e){return Object(l.b)({requestApiData:b},e)}))(M),V=n(44),q=n(83),B=n.n(q),J=n(152),L=(n(130),function(){return Object(c.jsx)("div",{id:"main_loading",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"circle"}),Object(c.jsx)("div",{className:"circle"}),Object(c.jsx)("div",{className:"circle"})]})})});var H=function(){var e=Object(r.useState)(!1),t=Object(V.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),i=Object(V.a)(a,2),j=i[0],l=i[1],o=Object(r.useState)([]),h=Object(V.a)(o,2),u=h[0],b=h[1];return console.log(u),Object(r.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,B.a.get("https://itunes.apple.com/search?term="+j);case 4:t=e.sent,b(t.data.results),s(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"d-flex justify-content-center my-3",children:[Object(c.jsx)("div",{className:"w-50",children:Object(c.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return l(e.target.value)},placeholder:"Search by artist name"})}),Object(c.jsx)(J.a,{style:{width:"15%",height:"6%"},children:"Search"})]}),n?Object(c.jsx)(L,{}):Object(c.jsx)("div",{children:u.map((function(e){return Object(c.jsxs)(_,{children:[Object(c.jsxs)("h1",{children:[e.artistName,Object(c.jsxs)("span",{children:["(",Object(c.jsx)("a",{href:e.artistViewUrl,children:"About Artist"}),")"]})]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Collection Name:"})," ",e.collectionName]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Collection Price:"})," ",e.collectionPrice]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Country:"})," ",e.country]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Genre:"})," ",e.primaryGenreName]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Release Date:"})," ",e.releaseDate]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Description:"})," ",e.description]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:"Preview:"})," "]}),Object(c.jsx)(G.a,{src:e.previewUrl,controls:!0})]},Math.random())}))})]})},Q=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(C.a,{children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{exact:!0,path:"/react-redux-saga-itunes-api",children:Object(c.jsx)(R,{})}),Object(c.jsx)(D.a,{path:"/search",children:Object(c.jsx)(H,{})})]})})})},W=function(){return Object(c.jsx)(j.a,{store:k,children:Object(c.jsx)(Q,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),z()}},[[148,1,2]]]);
//# sourceMappingURL=main.5bc67066.chunk.js.map