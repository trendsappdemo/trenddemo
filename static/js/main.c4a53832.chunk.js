(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){},15:function(t){t.exports=[{text:"Omni",url:"google.com"},{text:"Ebiquity",url:"google.com"},{text:"Trustpilot",url:"google.com"},{text:"Competitive websites",url:"google.com"},{text:"Which?",url:"google.com"},{text:"Bridge",url:"google.com"},{text:"ONS",url:"google.com"},{text:"News networks",url:"google.com"},{text:"YouGov",url:"google.com"},{text:"Foresight Factory",url:"google.com"},{text:"Q",url:"google.com"},{text:"Canvas8",url:"google.com"},{text:"Facebook",url:"google.com"},{text:"Trends24",url:"google.com"},{text:"Digg",url:"google.com"},{text:"Twitter",url:"google.com"},{text:"Instagram",url:"google.com"},{text:"Google trends",url:"google.com"},{text:"VOX",url:"google.com"},{text:"TikTok",url:"google.com"},{text:"lorem",url:"google.com"},{text:"ipsum",url:"google.com"}]},16:function(t){t.exports=["#483f3f","#e73200"]},17:function(t){t.exports=["top","right","bottom","left"]},18:function(t){t.exports=[150,200,225,250]},20:function(t,e,n){t.exports=n(37)},26:function(t,e,n){},27:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),l=(n(10),n(1)),s=n(2),c=n(4),u=n(3),m=n(5),d=n(15),h=n(16),g=n(17),p=n(18),f=n(19),v=(n(26),n(27),n(8)),x=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).handleType=function(){var t=n.props,e=t.animal,o=t.speed,a=t.nextCard,r=n.state,i=r.text;r.url;setTimeout(function(){n.setState({text:e.text.substring(0,i.length+1),url:e.url})},o),i!==e.text?setTimeout(n.handleType,o):setTimeout(a,2500)},n.state={text:"",url:""},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){var t=this.props.color;return a.a.createElement("div",{className:"card",style:{background:t}},a.a.createElement("a",{className:"typing fade-in",target:"_blank",href:this.state.url,rel:"noopener noreferrer"},a.a.createElement("span",null,this.state.text),a.a.createElement("span",{id:"cursor"})))}}]),e}(o.Component),y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).nextCard=function(){var t=n.props,e=t.animals,o=t.colors,a=t.id,r=t.transitions,i=t.typingSpeed,l=Object(f.a)({},n.state.card),s=Math.floor(Math.random()*e.length);s===l.animalIndex&&0!==s?s-=1:0===s&&(s+=2);var c=e[s],u=Math.floor(Math.random()*o.length),m={animal:c,animalIndex:s,color:o[u],colorIndex:u,id:a+" "+c.text,transition:r[Math.floor(Math.random()*r.length)],speed:i[Math.floor(Math.random()*i.length)]};n.setState({card:m})},n.state={duration:1e3,cards:[],card:{}},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){var t=this.props,e=t.animals,n=t.colors,o=t.id,a=t.transitions,r=t.typingSpeed,i=Math.floor(Math.random()*e.length),l=e[i],s=Math.floor(Math.random()*n.length),c=n[s],u=o+" "+l,m=r[Math.floor(Math.random()*r.length)],d={animal:l,animalIndex:i,color:c,colorIndex:s,id:u,transition:a[Math.floor(Math.random()*a.length)],speed:m};this.setState({card:d,id:o})}},{key:"render",value:function(){var t=this.state.card;return a.a.createElement(v.TransitionGroup,{component:"div",id:t.id,className:"tile"},a.a.createElement(v.CSSTransition,{in:!0,key:t.id,timeout:500,classNames:t.transition,unmountOnExit:!0,mountOnEnter:!0},a.a.createElement(x,{animal:t.animal,color:t.color,speed:t.speed,nextCard:this.nextCard})))}}]),e}(o.Component),b=function(t){var e=t.setGrid,n=t.dim;return a.a.createElement("div",{className:"square",title:n[0]+"x"+n[1],dim:n,onClick:function(){return e(n)}})},O=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={hover:!1},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"renderSquares",value:function(){for(var t=this.props.setGrid,e=0,n=[];e<5;){for(var o=0,r=[];o<5;){var i=[e+1,o+1];r.push(a.a.createElement(b,{key:i,setGrid:t,dim:i})),o++}n.push(r),e++}var l=[].concat.apply([],n);return a.a.createElement("div",{className:"gridChooser"},l)}},{key:"handleEnter",value:function(){this.setState({hover:!0})}},{key:"handleLeave",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var t=this,e={width:this.state.hover?120:30,height:this.state.hover?120:30};return a.a.createElement("div",{className:"squareContainer",style:e,onMouseEnter:function(){return t.handleEnter()},onMouseLeave:function(){return t.handleLeave()}},this.renderSquares())}}]),e}(o.Component),k=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).setGrid=function(t){n.setState({rows:t[0],columns:t[1]})},n.state={colors:[],animals:[],typingSpeed:[],rows:"",columns:"",transitions:[]},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.setState({animals:d,colors:h,transitions:g,typingSpeed:p,rows:5,columns:5})}},{key:"renderGrid",value:function(){for(var t=this.state,e=t.colors,n=t.animals,o=t.rows,r=t.columns,i=t.transitions,l=t.typingSpeed,s={width:"100%",height:"100%",display:"grid",gridTemplateRows:"repeat(".concat(o,", calc(100vh / ").concat(o,"))")},c={display:"grid",gridTemplateColumns:"repeat(".concat(r,", calc(100vw / ").concat(r,"))")},u=0,m=[];u<o;){for(var d=0,h=[];d<r;){var g=u+"-"+d;h.push(a.a.createElement(y,{id:g,key:g,animals:n,transitions:i,colors:e,typingSpeed:l})),d++}m.push(h),u++}return a.a.createElement("div",{className:"grid",style:s},m.map(function(t,e){return a.a.createElement("div",{key:e,className:"row",style:c},t)}))}},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(O,{setGrid:this.setGrid}),this.renderGrid())}}]),e}(o.Component);i.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c4a53832.chunk.js.map