(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),i=(n(24),n(1)),s=n(2),u=n(5),l=n(3),m=n(4),p=(n(25),n(26),n(9)),f=n(11),h=(n(33),function(e,t){return function(e,t){console.log("sugar"),e({type:"INCR",value:2})}}),b=n(7),d=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),console.log(e.dispatch),n.state={ctr:22,enabled:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("button",{type:"submit",onClick:function(){return e.props.song(2,33)}}," ",this.props.ctr," "),c.a.createElement("button",{type:"submit",onClick:function(){return e.props.incr(1e3)}}," ",this.props.ctr," "))}}]),t}(a.Component),j=Object(f.b)(function(e){return{ctr:e.ctr}},function(e){return{incr:function(t){console.log("sksnjnsjnsk"),e({type:"INCR",value:t})},song:Object(b.b)(h,e)}})(d),v=(n(34),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={images:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/image/random/6").then(function(e){return e.json()}).then(function(t){e.setState({images:t.message}),console.log(e.state.images)})}},{key:"basket",value:function(){console.log("dickkkkk"),this.props.nameUpdation("sc")}},{key:"render",value:function(){return this.state.images.map(function(e,t){return c.a.createElement("div",{class:"fill"},c.a.createElement("img",{key:t,src:e}))})}}]),t}(a.Component)),O=(n(35),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={project:"project"},e.stateFixer=e.stateFixer.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"stateFixer",value:function(e){this.setState({project:e||"Shivam Thapliyal"})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"SHIVAM THAPLIYAL")),c.a.createElement(j,{nameUpdation:this.stateFixer}))}}]),t}(a.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,{name:"Tech Portfolio"}),c.a.createElement("div",{className:"container"},c.a.createElement(v,null)," "))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k={ctr:11,isMenuOn:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return console.log("dammm"),"INCR"===t.type?{ctr:e.ctr+t.value}:e},E=n(18),w=Object(b.c)(y,Object(b.a)(E.a));r.a.render(c.a.createElement(f.a,{store:w},c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.3b5e3c07.chunk.js.map