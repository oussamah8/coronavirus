(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{39:function(e,t,n){e.exports=n(70)},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(35),o=n.n(r),s=(n(44),n(21)),i=n(13),l=n(14),u=n(19),m=n(17),d=n(11),p=n(22),h=n.n(p),v=n(36),f=n(73),y=n(74),E=n(72),b=n(5),C=(n(46),function(e){return c.a.createElement("div",null,c.a.createElement(f.a,{center:[28.0339,1.6596],zoom:2,maxBounds:[[-90,-180],[90,180]],minZoom:2,maxZoom:4},c.a.createElement(y.a,{url:"https://api.mapbox.com/styles/v1/oussamah8/ck91m060x1bk61jmleaht9pok/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3Vzc2FtYWg4IiwiYSI6ImNrOTFseDZxbjAxNG4zZXA0ZDRleG9nazIifQ.Hq_hv9It3ghyVJT-fJRq2g",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),e.countries.map((function(t,n){return c.a.createElement(E.a,{key:n,onclick:function(){return e.selectedCountry(t)},position:[t.countryInfo.lat,t.countryInfo.long],icon:Object(b.divIcon)({className:"myIcon",html:"<span>"+(a=t.cases,(a>999?a.toString().substring(0,a.toString().length-3)+"K":a)+"</span>")})});var a}))))}),g=(n(48),n(37)),j=n.n(g),k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={markers:[[0,0],[12,-10]],countries:[],selectedCountry:{}},e.updateSelectedCountry=function(t){e.setState({selectedCountry:t},(function(){console.log("NEW",t)}))},e.componentDidMount=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://corona.lmao.ninja/v2/countries?yesterday=false").then((function(t){e.setState({countries:t.data},(function(){console.log("countries",e.state.countries)}))}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"mapHeader"},c.a.createElement("span",{className:"title"},"COVID-19 STATS MAP")),c.a.createElement(C,{countries:this.state.countries,selectedCountry:this.updateSelectedCountry}),c.a.createElement("div",{className:"infoCard"},c.a.createElement("div",{className:"title"},this.state.selectedCountry?this.state.selectedCountry.country:"Worldwide"),c.a.createElement("div",{className:"item cases"},"Cases : ",this.state.selectedCountry.cases),c.a.createElement("div",{className:"item deaths"},"Deaths : ",this.state.selectedCountry.deaths),c.a.createElement("div",{className:"item recovered"},"Recovered : ",this.state.selectedCountry.recovered),c.a.createElement("div",{className:"item active"},"Active : ",this.state.selectedCountry.active)))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{path:["/","/home"],exact:!0,component:k}))}}]),n}(a.Component),x=function(){return c.a.createElement(s.a,{basename:window.location.pathname||""},c.a.createElement(O,null))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3aba01e7.chunk.js.map