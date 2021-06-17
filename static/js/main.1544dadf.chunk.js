(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{210:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(26),o=n.n(i),s=n(65),u=n(61),d=n(50),b=Object(d.b)(a||(a=Object(u.a)(["\nbody {\n  \n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont,  \"DINPro\", 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\na {\n    text-decoration: none;\n}\n\n"]))),l=n(125),p=n(21),S=n(45),f=n(213),j=n(62);var O,x,y=s.c,m=n(28),E="Tiker",h="Bid",g="Ask",k="High",v="LOW",C="LAST",N=[{title:E,dataIndex:E,key:E},{title:h,dataIndex:h,key:h},{title:g,dataIndex:g,key:g},{title:k,dataIndex:k,key:k},{title:v,dataIndex:v,key:v},{title:C,dataIndex:C,key:C}],D=function(){Object(s.b)();var e=y((function(e){return e.counterSlice.table}));console.log("table");var t=e.map((function(e,t){var n;return n={key:t},Object(S.a)(n,E,e.id),Object(S.a)(n,h,e.bid),Object(S.a)(n,g,e.ask),Object(S.a)(n,k,e.high),Object(S.a)(n,v,e.low),Object(S.a)(n,C,e.last),n}));return Object(m.jsx)(f.a,{pagination:!1,dataSource:t,columns:N})},_=d.c.div(O||(O=Object(u.a)(['\n    display: grid;\n    grid-template-areas: "content ";\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n\n']))),w=d.c.section(x||(x=Object(u.a)(["\n  grid-area: content;\n"])));var W,T=function(){return Object(m.jsx)(l.a,{children:Object(m.jsx)(p.c,{children:Object(m.jsx)(_,{children:Object(m.jsx)(w,{children:Object(m.jsx)(p.a,{path:"/",component:D})})})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,214)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},M={color:{type1:"#D0D1D2",type2:"#11263C",type3:"#F2F2F7"},size:{type1:"12px",type2:"14px",type3:"16px",type4:"18px"}},A=(n(209),n(66)),F=Object(A.c)({name:"counter",initialState:{table:[]},reducers:{setTikers:function(e,t){e.table=t.payload},setSingleCurrencies:function(e,t){var n=t.payload,a=n.index,r=n.currency;e.table[a]=Object(j.a)(Object(j.a)({},e.table[a]),r)}}}),G=F.actions,B=G.setTikers,L=G.setSingleCurrencies,P=F.reducer,z=n(122),H=n(118),J=n.n(H),U=n(41),R=n.n(U),q=n(31);!function(e){e.WS_CONNECTED="WS_CONNECTED",e.WS_DISCONNECTED="WS_DISCONNECTED",e.WS_MESSAGE="WS_MESSAGE",e.WS_SEND_MESSAGE="WS_SEND_MESSAGE"}(W||(W={}));var K=R.a.mark(X),Q=R.a.mark(Y),V=R.a.mark(Z);function X(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.c)({type:W.WS_SEND_MESSAGE,value:{method:"getSymbols",params:{},id:1}});case 2:case 3:case"end":return e.stop()}}),K)}function Y(e){var t,n,a,r,c,i,o,s,u,d;return R.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(t=e.value,n=t.id,a=t.result,r=t.method,c=t.params,!r||"ticker"!==r){b.next=14;break}return i=c,b.next=5,Object(q.d)();case 5:if(o=b.sent,s=o.counterSlice.table,u=s.findIndex((function(e,t){if(e.id===i.symbol){if(!e.symbol)return!0;if(e.symbol)for(var n in e)if(n in i&&e[n]!==i[n])return!0}})),console.log(u,"index"),-1===u){b.next=13;break}return b.next=12,Object(q.c)(L({currency:i,index:u}));case 12:case 13:return b.abrupt("return");case 14:if(1!==n||!a){b.next=21;break}return d=a,b.next=18,Object(q.c)(B(d));case 18:return b.next=20,Object(q.a)(d.map((function(e,t){return Object(q.c)({type:W.WS_SEND_MESSAGE,value:{method:"subscribeTicker",params:{symbol:e.id},id:t+2}})})));case 20:return b.abrupt("return");case 21:case 22:case"end":return b.stop()}}),Q)}function Z(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.e)(W.WS_CONNECTED,X),Object(q.e)(W.WS_MESSAGE,Y)]);case 2:case"end":return e.stop()}}),V)}var $=Z,ee=R.a.mark(te);function te(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.b)($)]);case 2:case"end":return e.stop()}}),ee)}var ne,ae=n(119),re=Object(z.a)(),ce=(ne="wss://api.exchange.bitcoin.com/api/2/ws",function(e){var t=new ae.TypeSocket(ne);return t.on("connected",(function(){return e.dispatch({type:W.WS_CONNECTED})})),t.on("disconnected",(function(){return e.dispatch({type:W.WS_DISCONNECTED})})),t.on("message",(function(t){return e.dispatch({type:W.WS_MESSAGE,value:t})})),t.connect(),function(e){return function(n){return n.type&&n.type===W.WS_SEND_MESSAGE&&1===t.readyState&&t.send(n.value),e(n)}}}),ie=Object(A.b)({reducer:{counterSlice:P},middleware:(new A.a).concat(ce,re,J.a)});re.run(te),o.a.render(Object(m.jsx)(s.a,{store:ie,children:Object(m.jsx)(d.a,{theme:M,children:Object(m.jsxs)(c.a.StrictMode,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(T,{})]})})}),document.getElementById("root")),I()}},[[210,1,2]]]);
//# sourceMappingURL=main.1544dadf.chunk.js.map