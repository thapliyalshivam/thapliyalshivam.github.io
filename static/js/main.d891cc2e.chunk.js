(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(24),n(1)),s=n(2),l=n(5),u=n(3),m=n(4),p=n(16),h=n.n(p),d=(n(25),n(8)),f=n(11),b=(n(32),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={ctr:22,enabled:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:function(){return e.props.incr(e.props.ctr)}}," ",this.props.ctr," "))}}]),t}(a.Component)),j=Object(f.b)(function(e){return{ctr:e.ctr}},function(e){return{incr:function(t){console.log("sksnjnsjnsk"),e({type:"INCR",value:t})}}})(b),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={images:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/image/random/6").then(function(e){return e.json()}).then(function(t){e.setState({images:t.message}),console.log(e.state.images)})}},{key:"basket",value:function(){console.log("dickkkkk"),this.props.nameUpdation("sc")}},{key:"render",value:function(){return this.state.images.map(function(e,t){return r.a.createElement("img",{key:t,src:e})})}}]),t}(a.Component),g=(n(33),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={project:"project"},e.stateFixer=e.stateFixer.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"stateFixer",value:function(e){this.setState({project:e||"Shivam Thapliyal"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"SHIVAM THAPLIYAL")),r.a.createElement(j,{nameUpdation:this.stateFixer}),r.a.createElement(v,null))}}]),t}(a.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{name:"Tech Portfolio"}),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/Apsdep.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(10),E={ctr:11,isMenuOn:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return console.log("dammm"),"INCR"===t.type?{ctr:e.ctr+t.value}:e},w=Object(k.b)(y);o.a.render(r.a.createElement(f.a,{store:w},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.d891cc2e.chunk.js.map