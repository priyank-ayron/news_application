(this.webpackJsonpnews_application=this.webpackJsonpnews_application||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(11),c=n.n(a),r=(n(85),n(14)),o=n(38),s=n.n(o),l=n(167),d=n(166),b=n(162),h=n(168),j=n(160),m=n(161),p=n(163),x=n(164),f=n(165),g=n(158),u=Object(g.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),O=n(3),y=function(e){var t=e.article,n=t.description,a=t.publishedAt,c=t.source,o=t.title,s=t.url,l=t.urlToImage,d=e.activeArticle,g=e.i,y=u(),w=Object(i.useState)([]),v=Object(r.a)(w,2),C=v[0],N=v[1];return Object(i.useEffect)((function(){window.scroll(0,0),N((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;g===d&&C[d]&&(e=C[d],window.scroll(0,e.current.offsetTop-50))}),[g,d,C]),Object(O.jsxs)(h.a,{ref:C[g],className:d===g?y.activeCard:y.card,children:[Object(O.jsxs)(j.a,{href:s,target:"_blank",children:[Object(O.jsx)(m.a,{className:y.media,image:l||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:o}),Object(O.jsxs)("div",{className:y.details,children:[Object(O.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(a).toDateString()}),Object(O.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(O.jsx)(b.a,{className:y.title,gutterBottom:!0,variant:"h5",component:"h2",children:o}),Object(O.jsx)(p.a,{children:Object(O.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(O.jsxs)(x.a,{className:y.cardActions,children:[Object(O.jsx)(f.a,{size:"small",color:"primary",href:s,children:"Learn More"}),Object(O.jsx)(b.a,{variant:"h5",color:"textSecondary",component:"h2",children:g+1})]})]})},w=Object(g.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),v=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],C=function(e){var t=e.articles,n=e.activeArticle,i=w();return t.length?Object(O.jsx)(l.a,{in:!0,children:Object(O.jsx)(d.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(O.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(O.jsx)(y,{activeArticle:n,i:t,article:e})})}))})}):Object(O.jsx)(l.a,{in:!0,children:Object(O.jsx)(d.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:v.map((function(e){return Object(O.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:i.infoCard,children:Object(O.jsxs)("div",{className:i.card,style:{backgroundColor:e.color},children:[Object(O.jsx)(b.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(O.jsxs)(b.a,{variant:"h6",component:"h6",children:[Object(O.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(O.jsx)("br",{}),e.info]}):null,Object(O.jsxs)(b.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(O.jsx)("br",{})," ",Object(O.jsx)("i",{children:e.text})]})]})})}))})})},N=n(9),A=Object(g.a)((function(e){return{footer:Object(N.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(N.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(N.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(N.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),k=n(74),S=n.n(k),B=n.p+"static/media/media.8c6edd7b.jpg";var T=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(-1),o=Object(r.a)(c,2),l=o[0],d=o[1],b=A();return Object(i.useEffect)((function(){s()({key:"169b2b5be68138c958b579a8da7222392e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)a(n),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var c=i.length>2?S()(i,{fuzzy:!0}):i,r=n[c-1];c>n.length?s()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),s()().playText("Opening...")):s()().playText("Please try that again...")}}})}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:b.logoContainer,children:Object(O.jsx)("img",{src:B,className:b.alanLogo,alt:"logo"})}),Object(O.jsx)(C,{articles:n,activeArticle:l})]})};c.a.render(Object(O.jsx)(T,{}),document.getElementById("root"))},85:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.01a4505f.chunk.js.map