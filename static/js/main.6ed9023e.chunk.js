(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{219:function(e,n,t){"use strict";t.r(n);var r,c=t(0),i=t.n(c),a=t(27),o=t.n(a),s=t(68),u=t(64),d=t(53),l=Object(d.b)(r||(r=Object(u.a)(["\nbody {\n  \n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont,  \"DINPro\", 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\na {\n    text-decoration: none;\n}\n\n"]))),b=t(133),j=t(23),f=t(46),p=t(223),O=t(224),h=t(222),x=t(65);var S,g,y=s.c,v=t(16),k="Tiker",m="Bid",E="Ask",T="High",W="LOW",C="LAST",D=function(){Object(s.b)();var e=y((function(e){return e.counterSlice.table})),n=Object(c.useRef)(e);function t(e,n,t){return{props:{style:n&&+e>+n?{background:"green",color:"#fff"}:n&&+e<+n?{background:"red",color:"#fff"}:t%2?{background:"#f6f6f6"}:{}},children:Object(v.jsx)("div",{children:e})}}Object(c.useEffect)((function(){n.current=e}));var r=[{title:k,dataIndex:k,key:k},{title:m,dataIndex:m,key:m,sorter:function(e,n){return e.Bid&&n.Bid?+e.Bid-+n.Bid:0},render:function(e,r,c){if(0!==n.current.length){var i=n.current.find((function(e){return e.id===r.Tiker}));return t(e,null===i||void 0===i?void 0:i.bid,c)}return{children:Object(v.jsx)("div",{children:e})}}},{title:E,dataIndex:E,key:E,sorter:function(e,n){return e.Ask&&n.Ask?+e.Ask-+n.Ask:0},render:function(e,r,c){if(0!==n.current.length){var i=n.current.find((function(e){return e.id===r.Tiker}));return t(e,null===i||void 0===i?void 0:i.ask,c)}return{children:Object(v.jsx)("div",{children:e})}}},{title:T,dataIndex:T,key:T,sorter:function(e,n){return e.High&&n.High?+e.High-+n.High:0},render:function(e,r,c){if(0!==n.current.length){var i=n.current.find((function(e){return e.id===r.Tiker}));return t(e,null===i||void 0===i?void 0:i.high,c)}return{children:Object(v.jsx)("div",{children:e})}}},{title:W,dataIndex:W,key:W,sorter:function(e,n){return e.LOW&&n.LOW?+e.LOW-+n.LOW:0},render:function(e,r,c){if(0!==n.current.length){var i=n.current.find((function(e){return e.id===r.Tiker}));return t(e,null===i||void 0===i?void 0:i.low,c)}return{children:Object(v.jsx)("div",{children:e})}}},{title:C,dataIndex:C,key:C,sorter:function(e,n){return e.LAST&&n.LAST?+e.LAST-+n.LAST:0},render:function(e,r,c){if(0!==n.current.length){var i=n.current.find((function(e){return e.id===r.Tiker}));return t(e,null===i||void 0===i?void 0:i.last,c)}return{children:Object(v.jsx)("div",{children:e})}}}],i=e.map((function(e,n){var t;return t={key:n},Object(f.a)(t,k,e.id),Object(f.a)(t,m,e.bid),Object(f.a)(t,E,e.ask),Object(f.a)(t,T,e.high),Object(f.a)(t,W,e.low),Object(f.a)(t,C,e.last),t}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(p.a,{style:{padding:"10px"},children:[Object(v.jsxs)(O.a,{span:12,children:[Object(v.jsx)("p",{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e websoket"}),Object(v.jsx)("p",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b:"}),Object(v.jsx)("p",{children:"Saga \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445(Websoket)"}),Object(v.jsx)("p",{children:"Typescript"}),Object(v.jsx)("p",{children:"ToolkitRedux"}),Object(v.jsx)("p",{children:"AntDesign"})]}),Object(v.jsxs)(O.a,{span:12,children:[Object(v.jsx)("p",{children:"\u0415able for getting data(Websoket)"}),Object(v.jsx)("p",{children:"Tools:"}),Object(v.jsx)("p",{children:"Saga get data(Websoket)"}),Object(v.jsx)("p",{children:"Typescript"}),Object(v.jsx)("p",{children:"ToolkitRedux"}),Object(v.jsx)("p",{children:"AntDesign"})]})]}),Object(v.jsx)(h.a,{pagination:!1,dataSource:i,columns:r})]})},w=d.c.div(S||(S=Object(u.a)(['\n    display: grid;\n    grid-template-areas: "content ";\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n\n']))),N=d.c.section(g||(g=Object(u.a)(["\n  grid-area: content;\n"])));var A,_=function(){return Object(v.jsx)(b.a,{children:Object(v.jsx)(j.c,{children:Object(v.jsx)(w,{children:Object(v.jsx)(N,{children:Object(v.jsx)(j.a,{path:"/",component:D})})})})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,225)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))},M={color:{type1:"#D0D1D2",type2:"#11263C",type3:"#F2F2F7"},size:{type1:"12px",type2:"14px",type3:"16px",type4:"18px"}},L=(t(218),t(69)),F=Object(L.c)({name:"counter",initialState:{table:[]},reducers:{setTikers:function(e,n){e.table=n.payload},setSingleCurrencies:function(e,n){var t=n.payload,r=t.index,c=t.currency;e.table[r]=Object(x.a)(Object(x.a)({},e.table[r]),c)}}}),G=F.actions,B=G.setTikers,H=G.setSingleCurrencies,R=F.reducer,P=t(130),z=t(126),J=t.n(z),U=t(42),q=t.n(U),K=t(33);!function(e){e.WS_CONNECTED="WS_CONNECTED",e.WS_DISCONNECTED="WS_DISCONNECTED",e.WS_MESSAGE="WS_MESSAGE",e.WS_SEND_MESSAGE="WS_SEND_MESSAGE"}(A||(A={}));var Q=q.a.mark(Y),V=q.a.mark(Z),X=q.a.mark($);function Y(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)({type:A.WS_SEND_MESSAGE,value:{method:"getSymbols",params:{limit:10},id:1}});case 2:case 3:case"end":return e.stop()}}),Q)}function Z(e){var n,t,r,c,i,a,o,s,u,d;return q.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(n=e.value,t=n.id,r=n.result,c=n.method,i=n.params,!c||"ticker"!==c){l.next=13;break}return a=i,l.next=5,Object(K.d)();case 5:if(o=l.sent,s=o.counterSlice.table,-1===(u=s.findIndex((function(e,n){if(e.id===a.symbol){if(!e.symbol)return!0;if(e.symbol)for(var t in e)if(t in a&&e[t]!==a[t])return!0}})))){l.next=12;break}return l.next=11,Object(K.c)(H({currency:a,index:u}));case 11:case 12:return l.abrupt("return");case 13:if(1!==t||!r){l.next=20;break}return d=r,l.next=17,Object(K.c)(B(d.slice(0,20)));case 17:return l.next=19,Object(K.a)(d.map((function(e,n){if(!(n>20))return Object(K.c)({type:A.WS_SEND_MESSAGE,value:{method:"subscribeTicker",params:{symbol:e.id},id:n+2}})})));case 19:return l.abrupt("return");case 20:case 21:case"end":return l.stop()}}),V)}function $(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.e)(A.WS_CONNECTED,Y),Object(K.e)(A.WS_MESSAGE,Z)]);case 2:case"end":return e.stop()}}),X)}var ee=$,ne=q.a.mark(te);function te(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.b)(ee)]);case 2:case"end":return e.stop()}}),ne)}var re,ce=t(127),ie=Object(P.a)(),ae=(re="wss://api.exchange.bitcoin.com/api/2/ws",function(e){var n=new ce.TypeSocket(re);return n.on("connected",(function(){return e.dispatch({type:A.WS_CONNECTED})})),n.on("disconnected",(function(){return e.dispatch({type:A.WS_DISCONNECTED})})),n.on("message",(function(n){return e.dispatch({type:A.WS_MESSAGE,value:n})})),n.connect(),function(e){return function(t){return t.type&&t.type===A.WS_SEND_MESSAGE&&1===n.readyState&&n.send(t.value),e(t)}}}),oe=Object(L.b)({reducer:{counterSlice:R},middleware:(new L.a).concat(ae,ie,J.a)});ie.run(te),o.a.render(Object(v.jsx)(s.a,{store:oe,children:Object(v.jsx)(d.a,{theme:M,children:Object(v.jsxs)(i.a.StrictMode,{children:[Object(v.jsx)(l,{}),Object(v.jsx)(_,{})]})})}),document.getElementById("root")),I()}},[[219,1,2]]]);
//# sourceMappingURL=main.6ed9023e.chunk.js.map