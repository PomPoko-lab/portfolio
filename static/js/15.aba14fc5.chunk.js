"use strict";(self.webpackChunkpom_poko_one=self.webpackChunkpom_poko_one||[]).push([[15],{15:function(e,o,t){t.r(o),t.d(o,{default:function(){return m}});var r=t(8735),n=t(7231),i=[{id:1,title:"FFXIV Restaurant Page",desc:"An intro to React project made for my guild on Final Fantasy XIV. The project features a restaurant web page playing off of the guild's theme.",imgSrc:"/assets/restaurant-page.jpg",designer:"Pom Poko",coder:"Pom Poko",techs:["HTML","CSS","JS","React","ChakraUI","ChocUI"],src:"https://github.com/PomPoko-lab/restaurant-page",demo:"https://pompoko.io/restaurant-page/"},{id:2,title:"Portfolio",desc:"Source of the page you're currently viewing.",imgSrc:"/assets/portfolio-page.jpg",designer:"Pom Poko",coder:"Pom Poko",techs:["HTML","CSS","JS","React","React Router","ChakraUI"],src:"https://github.com/PomPoko-lab/pompoko-lab.github.io",demo:"https://pompoko.io/"},{id:3,title:"Lost Ark Tools",desc:"My intro to JS personal project. After Lost Ark NA's (PC Game) initial launch, these tools were created to assist me in daily gaming chores. Features a daily tracker and in-game currency shop calculator.",imgSrc:"/assets/lostarktools.webp",designer:"Pom Poko",coder:"Pom Poko",techs:["HTML","CSS","JS"],src:"https://github.com/PomPoko-lab/lost-ark-tools",demo:"https://pompoko.io/lost-ark-tools/"},{id:4,title:"Bite Diary *UPCOMING",desc:"A recipe journal app written to track recipes from family and friends. The app will feature adding new recipes and fetching recipes from APIs.",imgSrc:"/assets/projectUpcoming.jpg",designer:"Pom Poko",coder:"Pom Poko",techs:["HTML","CSS","JS","React","ChakraUI","ChocUI","Firebase"],src:"#",demo:"#"}],s=t(4942);function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){(0,s.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var l=t(885),p=t(3046),d=t(9113),u=t(2134),x=t(184),h=function(e){var o=e.project;return(0,x.jsxs)(r.xu,{as:"article",color:"gray.700",background:"linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.7))",border:"1px solid white",shadow:"lg",borderRadius:"md",display:"flex",flexDirection:["column",null,null,"row-reverse"],w:["300px",null,null,"850px"],textAlign:"left",overflow:"hidden",children:[(0,x.jsx)(p.Ee,{w:"500px",objectFit:"cover",objectPosition:"center",src:"".concat("").concat(o.imgSrc),loading:"lazy"}),(0,x.jsxs)(r.xu,{as:"section",display:"flex",flexDirection:"column",p:"5",pb:"2",fontSize:"sm",h:"full",children:[(0,x.jsx)(r.X6,{mb:"2",fontSize:"md",children:o.title}),(0,x.jsx)(r.xv,{mb:"auto",pb:"3",children:o.desc}),(0,x.jsxs)(r.xu,{display:"block",mb:"2",children:[(0,x.jsxs)(r.xu,{display:"flex",gap:"1",children:[(0,x.jsx)(r.xv,{fontWeight:"bold",children:"Designed by:"}),(0,x.jsx)(r.xv,{children:o.designer})]}),(0,x.jsxs)(r.xu,{display:"flex",gap:"1",children:[(0,x.jsx)(r.xv,{fontWeight:"bold",children:"Coded by:"}),(0,x.jsx)(r.xv,{children:o.coder})]})]}),(0,x.jsx)(r.xu,{display:"flex",gap:"2",mb:"3",flexWrap:"wrap",children:o.techs.map((function(e,o){return(0,x.jsx)(r.xv,{color:"whiteAlpha.800",background:"orange.300",borderRadius:"lg",display:"inline",fontSize:"sm",py:"1",px:"2",shadow:"base",children:e},"id-".concat(o))}))}),(0,x.jsxs)(r.xu,{children:[(0,x.jsx)(r.rU,{isExternal:!0,href:o.src,children:(0,x.jsx)(d.JO,{boxSize:"30px",as:u.RrF,me:"3"})}),(0,x.jsx)(r.rU,{isExternal:!0,href:o.demo,children:(0,x.jsx)(d.JO,{boxSize:"30px",as:u.y6u})})]})]})]})},f=t(2791),g=function(e){var o=e.slides,t={cursor:"pointer",pos:"absolute",top:"50%",w:"auto",mt:"-22px",p:"16px",color:"orange.400",fontWeight:"bold",fontSize:"18px",transition:"0.6s ease",borderRadius:"0 3px 3px 0",userSelect:"none",_hover:{opacity:.8,bg:"black"}},n=(0,f.useState)(0),i=(0,l.Z)(n,2),s=i[0],c=i[1],p=o.length,d={transition:"all .5s",ml:"-".concat(100*s,"%")};return(0,x.jsx)(r.kC,{as:"section",w:"100%",alignItems:"center",justifyContent:"center",children:(0,x.jsxs)(r.kC,{w:["300px",null,null,"850px"],overflow:"hidden",pos:"relative",children:[(0,x.jsx)(r.kC,a(a({},d),{},{children:o.map((function(e){return(0,x.jsx)(h,{project:e},e.id)}))})),(0,x.jsx)(r.xv,a(a({},t),{},{left:"0",onClick:function(){c((function(e){return 0===e?p-1:e-1}))},children:"\u276e"})),(0,x.jsx)(r.xv,a(a({},t),{},{right:"0",onClick:function(){c((function(e){return e===p-1?0:e+1}))},children:"\u276f"})),(0,x.jsx)(r.Ug,{justify:"center",pos:"absolute",bottom:"8px",w:"full",children:Array.from({length:p}).map((function(e,o){return(0,x.jsx)(r.xu,{cursor:"pointer",boxSize:["7px",null,"15px"],m:"0 2px",bg:s===o?"blackAlpha.800":"blackAlpha.500",rounded:"50%",display:"inline-block",transition:"background-color 0.6s ease",_hover:{bg:"blackAlpha.800"},onClick:function(){return function(e){c(e)}(o)}},"dots-".concat(o))}))})]})})},m=function(){return(0,x.jsx)(r.W2,{as:"main",textAlign:"center",maxW:"container.lg",p:["0",null,"auto"],children:(0,x.jsxs)(n.Rg,{in:!0,offsetY:"-15px",transition:{enter:{duration:.5}},unmountOnExit:!0,children:[(0,x.jsx)(r.xu,{as:"section",py:"1",borderBottom:"1px solid white",mb:"6",mt:["1em",null,"3em"],children:(0,x.jsx)(r.X6,{as:"h2",letterSpacing:"wide",color:"gray.700",fontSize:["3xl",null,null,"4xl"],children:"Featured Projects"})}),(0,x.jsx)(n.Rg,{in:!0,offsetY:"-15px",transition:{enter:{duration:.5,delay:.4}},unmountOnExit:!0,children:(0,x.jsx)(g,{slides:i})})]})})}}}]);
//# sourceMappingURL=15.aba14fc5.chunk.js.map