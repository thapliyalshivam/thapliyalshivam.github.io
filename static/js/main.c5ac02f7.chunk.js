(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){var n={"./Bahoroopsarshak/img_1.jpeg":41,"./Bahoroopsarshak/img_2.jpeg":42,"./Bahoroopsarshak/img_3.jpeg":43,"./Bahoroopsarshak/img_4.jpeg":44,"./Bahoroopsarshak/img_5.jpeg":45,"./bahoroop.jpeg":46,"./loop.jpeg":47};function o(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=14},,,function(e){e.exports={a:[{title:"Bahoroopdarshak",img:"Bahoroopsarshak/img_5",desc:"An interactive installation made using HTML5 Canvas and websockets",git_link:"http://github.com/thapliyalshivam/TIARF_installation/",live_link:"https://thapliyalshivam.github.io/TIARF_installation/",id:"PRO_1",content:[{type:"TEXT",heading:"Concept",paragraphs:["Bahuroopadarshak or simply, Kaleidoscope, invented in 1816 was one of the first ways to experience altered reality. A magical way to disconnect from the reality and get immersed in worlds of patterns. colours and ever-changing visuals. As time progresses, our cell phones have become a kaleidoscope and a way to enjoy the sheen falseness by disconnecting from reality. Bahuroopadarshak is an interactive art exploration that lets you experience that altered reality with a cellphone. Enjoy the visual shenanigans of Patterns, lucrative colours, images as they dance to the movement of your modern day 'bahuroopadarshak'. Click on the live demo to experience it on your phone"]},{type:"IMAGE",URL:"bahoroop"},{type:"IMAGE",URL:"Bahoroopsarshak/img_1"},{type:"IMAGE",URL:"Bahoroopsarshak/img_2"},{type:"IMAGE",URL:"Bahoroopsarshak/img_3"},{type:"IMAGE",URL:"Bahoroopsarshak/img_4"},{type:"IMAGE",URL:"Bahoroopsarshak/img_5"}]},{title:"Animation loops",img:"loop",desc:"2d and 3d coded loops made in three.js and canvas",git_link:"http://github.com/thapliyalshivam/webgl_loops/",live_link:"https://thapliyalshivam.github.io/webgl_loops/",id:"PRO_2",content:[{type:"TEXT",heading:"concept",paragraphs:["Animation loops are never ending sketchbook loops made to explore the creative usage of various algorithms, function in generative art. It's a digital sketchbook for visual experimentations and a delight to watch"]},{type:"IMAGE",URL:"loop"}]}]}},,,,,,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/img_1.c013f159.jpeg"},function(e,t,a){e.exports=a.p+"static/media/img_2.e582b1b3.jpeg"},function(e,t,a){e.exports=a.p+"static/media/img_3.edc6af0a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/img_4.c97aa4d0.jpeg"},function(e,t,a){e.exports=a.p+"static/media/img_5.d846f8a5.jpeg"},function(e,t,a){e.exports=a.p+"static/media/bahoroop.d163e8a4.jpeg"},function(e,t,a){e.exports=a.p+"static/media/loop.a95afe9b.jpeg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),c=(a(32),a(2)),l=a(3),s=a(6),u=a(4),p=a(5),m=(a(33),a(34),a(9)),h=a(8),d=(a(40),a(17)),g=function(e){return function(t,a){t({type:"CAROUSELSET",data:a().images.filter(function(t){return t.id==e})[0]}),document.body.scrollTop=document.documentElement.scrollTop=0}},f=a(24);console.log(d.a);var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).basket=function(e){console.log(e)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.populate(d.a)}},{key:"render",value:function(){var e=this;return this.props.images.map(function(t,n){return o.a.createElement("div",{className:"fill",key:t.id,onClick:function(){return e.props.updateCarousel(t.id)}},o.a.createElement("img",{src:a(14)("./".concat(t.img,".jpeg"))}),o.a.createElement("h2",{className:"titles"}," ",t.title),o.a.createElement("h3",{className:"captions"}," ",t.desc))})}}]),t}(n.Component),j=Object(h.b)(function(e){return{images:e.images}},function(e){return{populate:function(t){e({type:"DATAPOPULATE",images:t})},incr:function(t){console.log("sksnjnsjnsk"),e({type:"INCR",value:t})},updateCarousel:Object(f.a)(g,e)}})(v),E=(a(48),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={project:"project"},e.stateFixer=e.stateFixer.bind(Object(m.a)(Object(m.a)(e))),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"stateFixer",value:function(e){this.setState({project:e||"Shivam Thapliyal"})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement("h2",null,"Shivam Thapliyal")))}}]),t}(n.Component)),b=(a(49),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("a",{href:"mailto:thapliyalshivam@gmail.com"},o.a.createElement("i",null,"mail")),o.a.createElement("a",{href:"https://www.twitter.com/coffee_caffine"},o.a.createElement("i",null,"twitter")),o.a.createElement("a",{href:"https://www.medium.com/@thapliyalshivam"},o.a.createElement("i",null,"medium")),o.a.createElement("a",{href:"https://www.codepen.com/thapliyalshivam"},o.a.createElement("i",null,"codepen")))}}]),t}(n.Component)),y=(a(50),function(e){return o.a.createElement("div",null,o.a.createElement("h3",null,e.heading),e.text.map(function(e,t){return o.a.createElement("p",null,e)}))}),k=function(e){return e.name.map(function(e,t){return"TEXT"===e.type?o.a.createElement(y,{heading:e.heading,text:e.paragraphs}):o.a.createElement("img",{src:a(14)("./".concat(e.URL,".jpeg"))})})},O=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,e.links.title),o.a.createElement("h5",null,e.links.desc),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:e.links.git_link},o.a.createElement("i",null,"view code")),o.a.createElement("a",{href:e.links.live_link},o.a.createElement("i",null,"live demo"))))},_=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.iscarouselon?o.a.createElement("div",{className:"gallery"},o.a.createElement("div",null,o.a.createElement("img",{src:a(14)("./".concat(this.props.carousel.img,".jpeg"))}),o.a.createElement(O,{links:this.props.carousel}),o.a.createElement(k,{name:this.props.carousel.content}),o.a.createElement("h4",null,"More Projects"))):null}}]),t}(n.Component),w=Object(h.b)(function(e){return{carousel:e.carousel,iscarouselon:e.iscarouselon}},function(e){return{incr:function(t){console.log("sksnjnsjnsk"),e({type:"INCR",value:t})}}})(_),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,{name:"Tech Portfolio"}),o.a.createElement(w,null),o.a.createElement("div",{className:"container"},o.a.createElement(j,null)," "),o.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(10),T=a(12),C={iscarouselon:!1,carousel:{},ctr:11,isMenuOn:!1,heading:"new",images:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return console.log("_______reducer________"),"INCR"===t.type?Object(T.a)({},e,{ctr:e.ctr+t.value}):"CAROUSELSET"===t.type?Object(T.a)({},e,{carousel:t.data,iscarouselon:!0}):"DATAPOPULATE"===t.type?Object(T.a)({},e,{images:t.images}):"HEAD"===t.type?Object(T.a)({},e,{heading:t.value+"nee"}):e},B=a(26),U=a(19);U.a.initialize("UA-140335665-1"),U.a.pageview(window.location.pathname);var I=Object(x.c)(R,Object(x.a)(B.a));r.a.render(o.a.createElement(h.a,{store:I},o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.c5ac02f7.chunk.js.map