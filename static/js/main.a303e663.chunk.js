(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{86:function(e,t,i){},87:function(e,t,i){},92:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(61),o=i.n(a),c=(i(86),i(22)),r=i(14),s=i(5),l=(i(87),i(133)),d=i(69),b=i.n(d),x=i(135),p=i(139),j=i(134),h=i(66),u=i.n(h),f=i(45),g=i.n(f),m=i(1),O=Object(l.a)((function(e){return{button:{height:"100%",width:"100%"},buttonDiv:{display:"flex",alignItems:"center",justifyContent:"center",height:"20px"}}}));var w=function(e){var t=O();return Object(m.jsx)("div",{className:t.buttonDiv,children:Object(m.jsxs)(x.a,{onClick:function(){e.handleUpButton(e.secs)},className:t.button,children:[!e.isRunning&&Object(m.jsx)(u.a,{fontSize:"large"}),e.isRunning&&Object(m.jsx)(g.a,{fontSize:"small"})]})})},v=i(68),k=i.n(v),y=Object(l.a)((function(e){return{button:{height:"100%",width:"100%"},buttonDiv:{display:"flex",alignItems:"center",justifyContent:"center",height:"20px"}}}));var S,C=function(e){var t=y();return Object(m.jsx)("div",{className:t.buttonDiv,children:Object(m.jsxs)(x.a,{onClick:function(){e.handleDownButton(e.secs)},className:t.button,children:[!e.isRunning&&Object(m.jsx)(k.a,{fontSize:"large"}),e.isRunning&&Object(m.jsx)(g.a,{fontSize:"small"})]})})},N=Object(l.a)((function(e){return{container:{color:"white",textAlign:"center"},modal:{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#1c1727",width:"450px",minHeight:"450px",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"10px",maxWidth:"80vw",textAlign:"center",overflowY:"auto",maxHeight:"calc(100vh - 200px)",borderRadius:"20px","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#333333",borderRadius:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"4px",display:"none"}},grid:{display:"grid",gridTemplateColumns:"auto auto auto auto auto",gridGap:"3px",justifyContent:"center",width:"100%",gridRowGap:"2px"},buttonTop:{height:"100%",width:"100%"},buttonBottom:{height:"100%",width:"100%"},buttonDiv:{display:"flex",alignItems:"center",justifyContent:"center",height:"20px"},timeDiv:{display:"flex",alignItems:"center",justifyContent:"center",height:"50px"}}})),R=107e8;var D=function(e){var t=Object(n.useState)("Start"),i=Object(s.a)(t,2),a=i[0],o=i[1],c=Object(n.useState)(0),r=Object(s.a)(c,2),l=r[0],d=r[1],b=Object(n.useState)(0),x=Object(s.a)(b,2),h=x[0],u=x[1],f=Object(n.useState)(0),g=Object(s.a)(f,2),O=g[0],v=g[1],k=Object(n.useState)(107e8),y=Object(s.a)(k,2),D=y[0],T=y[1],B=Object(n.useState)(!0),I=Object(s.a)(B,2),z=I[0],W=I[1],H=Object(n.useState)(1500),L=Object(s.a)(H,2),A=L[0],M=L[1],E=Object(n.useState)(1500),J=Object(s.a)(E,2),P=J[0],F=J[1],G=Object(n.useState)(300),U=Object(s.a)(G,2),Y=U[0],q=U[1],K=Object(n.useState)(!1),Q=Object(s.a)(K,2),V=Q[0],X=Q[1],Z=Object(n.useState)(!0),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useRef)(!1),ie=Object(n.useRef)(!1);Object(n.useEffect)((function(){var t=A;return v(Math.floor(t/3600)),t%=3600,u(Math.floor(t/60)),d(t%=60),S=setInterval((function(){0===A?(T(R),X(!1),o("Start"),e.handleSongStart(),e.handleTimerOpen(),z?(W(!1),M(Y)):(W(!0),M(P))):M(A-1)}),D),function(){return clearInterval(S)}}),[a,A]),Object(n.useEffect)((function(){if(te.current){var e=P;localStorage.setItem("workTime",JSON.stringify(P)),v(Math.floor(e/3600)),e%=3600,u(Math.floor(e/60)),d(e%=60),M(P)}else te.current=!0}),[P]),Object(n.useEffect)((function(){if(ie.current){var e=Y;localStorage.setItem("breakTime",JSON.stringify(Y)),_||(v(Math.floor(e/3600)),e%=3600,u(Math.floor(e/60)),d(e%=60),M(Y))}else ie.current=!0}),[Y]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("workTime")),t=JSON.parse(localStorage.getItem("breakTime"));t&&(console.log("retreive "+t),q(t)),t&&(console.log("retreive"+e),F(e),M(e))}),[]);var ne=function(e){!V&&z&&F(P+e),!V&&!z&&q(Y+e)},ae=function(e){!V&&z&&P>60&&F(P-e),!V&&!z&&Y>60&&q(Y-e)},oe=N();return Object(m.jsx)("div",{className:oe.container,children:Object(m.jsx)(j.a,{open:e.open,onClose:function(){e.handleTimerClose(),e.handleSongPause()},children:Object(m.jsxs)("div",{className:oe.modal,children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:oe.grid,children:[" ",Object(m.jsx)(w,{handleUpButton:ne,secs:3600,isRunning:V}),Object(m.jsx)("div",{className:oe.buttonDiv,children:Object(m.jsx)("h1",{})}),Object(m.jsx)(w,{handleUpButton:ne,secs:60,isRunning:V}),Object(m.jsx)("div",{className:oe.buttonDiv,children:Object(m.jsx)("h1",{})}),Object(m.jsx)(w,{handleUpButton:ne,secs:1,isRunning:V}),Object(m.jsx)("div",{className:oe.timeDiv,children:Object(m.jsx)("h1",{children:O<=9?"0".concat(O):O})}),Object(m.jsx)("div",{className:oe.timeDiv,children:Object(m.jsx)("h1",{children:":"})}),Object(m.jsx)("div",{className:oe.timeDiv,children:Object(m.jsx)("h1",{children:h<=9?"0".concat(h):h})}),Object(m.jsx)("div",{className:oe.timeDiv,children:Object(m.jsx)("h1",{children:":"})}),Object(m.jsx)("div",{className:oe.timeDiv,children:Object(m.jsx)("h1",{children:l<=9?"0".concat(l):l})}),Object(m.jsx)(C,{handleDownButton:ae,secs:3600,isRunning:V}),Object(m.jsx)("div",{className:oe.buttonDiv,children:Object(m.jsx)("h1",{})}),Object(m.jsx)(C,{handleDownButton:ae,secs:60,isRunning:V}),Object(m.jsx)("div",{className:oe.buttonDiv,children:Object(m.jsx)("h1",{})}),Object(m.jsx)(C,{handleDownButton:ae,secs:1,isRunning:V})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h1",{style:{fontSize:"15pt"},children:z?"Break time is over! Time to do work":"Good work! Take a short break"}),Object(m.jsx)("br",{}),Object(m.jsx)(p.a,{onClick:function(){e.handleSongPause(),ee(!1),"Start"===a?(o("Pause"),T(1e3),X(!0)):(o("Start"),T(R))},children:a}),Object(m.jsx)(p.a,{onClick:function(){console.log("skipped"),ee(!1),z?(W(!1),o("Start"),M(Y),q(Y)):(W(!0),o("Start"),M(P),F(P)),T(R),X(!1)},children:"Skip Timer"})]})})})},T=i(70),B=i.n(T),I=i.p+"static/media/nokia.9bac0308.mp3",z=i(136),W=i(140),H=i(137),L=Object(l.a)((function(e){return{container:{textAlign:"center",color:"white"},modal:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#1c1727",width:"450px",minHeight:"250px",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"10px",maxWidth:"80vw",textAlign:"center",overflowY:"auto",maxHeight:"calc(100vh - 200px)",borderRadius:"20px","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#333333",borderRadius:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"4px",display:"none"}},input:{paddingTop:"5px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",maxWidth:"95%",minWidth:"95%",minHeight:"100px",fontSize:"15pt",border:"none",paddingLeft:"5px",paddingRight:"5px",color:"white",backgroundColor:"#201d2b",borderRadius:"5px",fontFamily:"sans-serif",marginTop:"10px",display:"block",marginBottom:"50px",outline:"none","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#333333",borderRadius:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"4px",display:"none"}},button:{height:"40px",display:"inline-block"},buttonText:{fontSize:"12pt",fontWeight:"normal"},radioGroup:{color:"white",marginBottom:"20px"}}}));var A=function(e){var t=L(),i=Object(n.useState)(""),a=Object(s.a)(i,2),o=a[0],r=a[1],l=Object(n.useState)(1),d=Object(s.a)(l,2),b=d[0],x=d[1],h=Object(n.useState)({task:"(empty task)",priority:1,complete:!1}),u=Object(s.a)(h,2),f=u[0],g=u[1],O=Object(n.useRef)(!1);return Object(n.useEffect)((function(){O.current?console.log(f):O.current=!0}),[b]),Object(m.jsx)("div",{className:t.container,children:Object(m.jsx)(j.a,{open:e.open,onClose:e.handleTaskClose,children:Object(m.jsxs)("div",{className:t.modal,children:[Object(m.jsx)("textarea",{type:"text",className:t.input,placeholder:"enter a new task...",onChange:function(e){r(e.target.value);var t={task:e.target.value};g((function(e){return Object(c.a)(Object(c.a)({},e),t)}))},value:o}),Object(m.jsx)("h1",{style:{fontSize:"15pt"},children:"Select task priority: "}),Object(m.jsxs)(W.a,{className:t.radioGroup,row:!0,value:b,onChange:function(e){x(parseInt(e.target.value));var t={priority:parseInt(e.target.value)};g((function(e){return Object(c.a)(Object(c.a)({},e),t)}))},children:[Object(m.jsx)(H.a,{value:1,control:Object(m.jsx)(z.a,{sx:{color:"white","&.Mui-checked":{color:"#37f992"}}}),label:"Low"}),Object(m.jsx)(H.a,{value:2,control:Object(m.jsx)(z.a,{sx:{color:"white","&.Mui-checked":{color:"#f2a53f"}}}),label:"Medium"}),Object(m.jsx)(H.a,{value:3,control:Object(m.jsx)(z.a,{sx:{color:"white","&.Mui-checked":{color:"#e62a19"}}}),label:"High"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{position:"absolute",bottom:"10px",width:"95%",textAlign:"center"},children:[Object(m.jsx)(p.a,{className:t.button,onClick:function(){e.append(f),r("");var t={task:"(empty task)"};g((function(e){return Object(c.a)(Object(c.a)({},e),t)}))},children:Object(m.jsx)("h1",{className:t.buttonText,children:"Add Task"})}),Object(m.jsx)(p.a,{className:t.button,onClick:e.handleTaskClose,children:Object(m.jsx)("h1",{className:t.buttonText,children:"Done"})})]})]})})})},M=i(71),E=i.n(M),J=i(141),P=i(54),F=i.n(P),G=i(55),U=i.n(G),Y=Object(l.a)((function(e){return{card:{width:"calc(100% - 20px)",paddingLeft:"10px",paddingRight:"10px",minHeight:"150px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontSize:"24pt",color:"white",marginBottom:"10px",marginTop:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 1px 4px 5px 2px",borderRadius:"20px"},icon:{fontSize:"small"},iconButton:{width:"50px",height:"50px"},textBox:{wordWrap:"break-word",maxWidth:"500px",padding:"20px"},leftDiv:{maxWidth:"500px",height:"100%",display:"flex",flexDirection:"column",alignItems:"right"},labelDiv:{height:"45px",width:"100%",marginBottom:"20px"}}}));var q=function(e){var t=Y(),i={backgroundColor:1===e.priority?"#37f992":2===e.priority?"#f2a53f":"#ff4433",height:"100%",minWidth:"100px",display:"flex",borderRadius:"15px",marginLeft:"20px",color:"#1c1727"};return Object(m.jsxs)("div",{className:t.card,children:[Object(m.jsxs)("div",{className:t.leftDiv,children:[Object(m.jsx)("div",{className:t.textBox,children:Object(m.jsx)("h1",{style:{fontSize:"18pt",verticalAlign:"top",display:"inline",fontWeight:"normal"},children:e.task})}),Object(m.jsx)("div",{className:t.labelDiv,children:Object(m.jsx)(x.a,{style:i,children:Object(m.jsx)("h1",{style:{fontSize:"15pt",fontWeight:"normal"},children:1===e.priority?"Low":2===e.priority?"Medium":"High"})})})]}),Object(m.jsxs)(J.a,{onClick:function(){return e.handleDelete(e.index)},className:t.iconButton,children:[!e.complete&&Object(m.jsx)(F.a,{sx:{color:"#8e5ff3"},fontSize:"large"}),e.complete&&Object(m.jsx)(U.a,{sx:{color:"#8e5ff3"},fontSize:"large"})]})]})},K=Object(l.a)((function(e){return{modal:{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#1c1727",width:"450px",minHeight:"450px",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"10px",maxWidth:"80vw",textAlign:"center",overflowY:"auto",maxHeight:"calc(100vh - 200px)",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#333333",borderRadius:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"4px",display:"none"}},input:{paddingTop:"5px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",maxWidth:"95%",minWidth:"95%",minHeight:"100px",fontSize:"15pt",border:"none",paddingLeft:"5px",paddingRight:"5px",color:"white",backgroundColor:"#201d2b",borderRadius:"5px",fontFamily:"sans-serif",marginTop:"10px",display:"block",marginBottom:"50px",outline:"none","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#333333",borderRadius:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"4px",display:"none"}},container:{color:"white",textAlign:"center"}}}));var Q=function(e){var t=K();return Object(m.jsx)("div",{className:t.container,children:Object(m.jsx)(j.a,{open:e.open,onClose:e.handleNotesClose,children:Object(m.jsx)("div",{className:t.modal,children:Object(m.jsx)("textarea",{type:"text",className:t.input,placeholder:"notes"})})})})},V=Object(l.a)((function(e){return{div:{justifyContent:"center",display:"flex",backgroundColor:"#1c1727",minHeight:"100vh"},container:{marginTop:"50px",display:"flex",justifyContent:"space-between",width:"1100px"},left:{width:"600px",minHeight:"100vh",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"left"},right:{width:"400px",minHeight:"100vh",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"left"},topbar:{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"620px"},input:{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",width:"500px",height:"40px",fontSize:"15pt",border:"none",paddingLeft:"5px",paddingRight:"5px",color:"white",backgroundColor:"#201d2b",borderRadius:"5px","&:focus":{outline:"2px solid #357edd"}},card:{width:"calc(100% - 20px)",paddingLeft:"10px",paddingRight:"10px",minHeight:"150px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontSize:"24pt",color:"white",marginBottom:"10px",marginTop:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 1px 4px 5px 2px",borderRadius:"20px"},textBox:{wordWrap:"break-word",maxWidth:"500px",height:"calc(100% - 40px)",padding:"20px"},icon:{fontSize:"small"},iconButton:{width:"50px",height:"50px"},button:{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",width:"100%",height:"150px",marginBottom:"10px"},h1:{color:"white",fontSize:"18pt"},h2:{color:"white",fontSize:"15pt"},taskSubtitle:{height:"50px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}}));var X=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),i=t[0],a=t[1],o=Object(n.useState)(1),l=Object(s.a)(o,2),d=l[0],p=l[1],j=Object(n.useRef)(!1),h=Object(n.useState)(!1),u=Object(s.a)(h,2),f=u[0],g=u[1],O=Object(n.useState)(!1),w=Object(s.a)(O,2),v=w[0],k=w[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),C=S[0],N=S[1],R=Object(n.useState)(new Audio(I)),T=Object(s.a)(R,2),z=T[0],W=T[1],H=Object(n.useState)(0),L=Object(s.a)(H,2),M=L[0],J=L[1],P=V();Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&a(e)}),[]),Object(n.useEffect)((function(){j.current?localStorage.setItem("tasks",JSON.stringify(i)):j.current=!0}),[d]),Object(n.useEffect)((function(){for(var e=Object(r.a)(i),t=0,n=0;n<e.length;n++)e[n].complete||t++;J(t)}),[i]);var F=function(e){var t=Object(r.a)(i);if(t[e].complete)t.splice(e,1),a(t),p(d+1);else{var n=Object(c.a)(Object(c.a)({},t[e]),{},{complete:!0});t[e]=n,a(t),p(d+1)}},G=function(){g(!0)};return Object(m.jsxs)("div",{className:P.div,children:[Object(m.jsx)(D,{open:f,handleTimerOpen:G,handleTimerClose:function(){g(!1)},handleSongPause:function(){z.pause(),W(new Audio(I))},handleSongStart:function(){z.play()}}),Object(m.jsx)(A,{append:function(e){a([].concat(Object(r.a)(i),[e]).sort((function(e,t){return t.priority-e.priority}))),p(d+1),console.log(e)},open:v,handleTaskClose:function(){k(!1)},children:" "}),Object(m.jsx)(Q,{open:C,handleNotesClose:function(){N(!1)}}),Object(m.jsxs)("div",{className:P.container,children:[Object(m.jsxs)("div",{className:P.left,children:[Object(m.jsx)("h1",{className:P.h1,children:"Tasks"}),Object(m.jsxs)("div",{className:P.taskSubtitle,children:[Object(m.jsx)("h2",{className:P.h2,children:"In Progress"}),Object(m.jsx)(x.a,{style:{width:"35px",height:"35px",borderRadius:"50%",borderColor:"white",borderStyle:"solid",borderWidth:"2px",marginLeft:"10px"},children:Object(m.jsx)("h2",{className:P.h2,children:M})})]}),Object(m.jsxs)(x.a,{onClick:function(){k(!0)},style:{borderRadius:"20px",color:"white"},className:P.button,children:[Object(m.jsx)(b.a,{sx:{color:"#8e5ff3"},style:{width:"30px",height:"30px",marginRight:"5px"}})," ",Object(m.jsx)("h2",{children:"New Task"})]}),i.map((function(e,t){return!e.complete&&Object(m.jsx)(q,{priority:e.priority,index:t,task:e.task,handleDelete:F,complete:e.complete},t)})),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:P.taskSubtitle,children:[Object(m.jsx)("h2",{className:P.h2,children:"Completed"}),Object(m.jsx)(x.a,{style:{width:"35px",height:"35px",borderRadius:"50%",borderColor:"white",borderStyle:"solid",borderWidth:"2px",marginLeft:"10px"},children:Object(m.jsx)("h2",{className:P.h2,children:i.length-M})})]}),i.map((function(e,t){return e.complete&&Object(m.jsx)(q,{priority:e.priority,index:t,task:e.task,handleDelete:F,complete:e.complete},t)})),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:P.right,children:[Object(m.jsx)("h1",{className:P.h1,children:"Tools"}),Object(m.jsxs)(x.a,{onClick:G,style:{borderRadius:"20px",color:"white",marginBottom:"20px"},className:P.button,children:[Object(m.jsx)(B.a,{sx:{color:"#8e5ff3"},style:{width:"30px",height:"30px",marginRight:"5px"}})," ",Object(m.jsx)("h2",{children:"Timer"})]}),Object(m.jsxs)(x.a,{onClick:function(){N(!0)},style:{borderRadius:"20px",color:"white"},className:P.button,children:[Object(m.jsx)(E.a,{sx:{color:"#8e5ff3"},style:{width:"30px",height:"30px",marginRight:"5px"}})," ",Object(m.jsx)("h2",{children:"Notes"})]})]})]})]})},Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,143)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),o(e),c(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(X,{})),Z()}},[[92,1,2]]]);
//# sourceMappingURL=main.a303e663.chunk.js.map