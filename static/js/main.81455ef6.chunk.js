(this["webpackJsonpmy-anime-schedule"]=this["webpackJsonpmy-anime-schedule"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/plus_icon.83015675.png"},29:function(e,t,a){e.exports=a(64)},35:function(e,t,a){},36:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),c=a(1),l=a.n(c),o=a(2),u=a(3),d=a(4),m=a(6),h=a(5),p=(a(35),a(36),a(12));function f(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{onClick:function(){p.animateScroll.scrollToTop({duration:500})},className:"header-text"},"MyAnimeSchedule"))}a(47);var g=a(27),y=a.n(g),w=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isSelected:e.props.selectedCards.includes(e.props.anime.mal_id)},e}return Object(d.a)(a,[{key:"toggleSelected",value:function(e){var t=this.props,a=t.delAnime,n=t.addAnime;this.state.isSelected?a(e):n(e),this.setState({isSelected:!this.state.isSelected})}},{key:"render",value:function(){var e=this,t=this.props.anime,a=t.title,n=t.mal_id,i=t.image_url,s=t.url,c=this.state.isSelected;return r.a.createElement("div",{className:"card",style:c?x:{}},r.a.createElement("div",{onClick:function(){return e.toggleSelected(n)},className:c?"image-selected":"image-container"},r.a.createElement("img",{src:i,alt:a,style:v}),r.a.createElement("img",{src:y.a,alt:"Add Anime",className:"plus-icon"})),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"title"},a)))}}]),a}(n.Component),v={display:"relative",height:"190px",width:"100%",objectFit:"cover",borderRadius:"6px 6px 0 0",margin:"0"},x={filter:"brightness(1.2)",color:"#ccc",transform:"translateY(-8px)",backgroundColor:"green"},E=w;a(48);var S={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},b=function(e){var t=e.animes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:S},t.map((function(t){return r.a.createElement(E,{anime:t,selectedCards:e.selectedCards,addAnime:e.addAnime,delAnime:e.delAnime,key:t.mal_id})}))),r.a.createElement("button",{className:"show-btn",onClick:function(){return e.showMore(!0)}},"show more"),r.a.createElement("button",{className:"show-btn",onClick:function(){return e.showMore(!1)}},"show less"))};a(49);function k(e){var t=new Date(e.anime.airing_start),a=t.getHours(),n=t.getMinutes(),i=a<12?"AM":"PM",s=(a=a<=12?a:a%12)+":"+(n=n<10?"0"+n:n)+" "+i,c=e.anime,l=c.image_url,o=c.title,u=c.url;return r.a.createElement("div",{className:"today-item"},r.a.createElement("p",{style:O},s),r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:l,alt:o,style:D}),r.a.createElement("div",{className:"item-title"},o)))}var D={float:"left",width:"60px",height:"60px",marginRight:"10px",objectFit:"cover",borderRadius:"6px"},O={textAlign:"left",marginBottom:"5px"},C=["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],A=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];function j(e){var t=e.schedule;t.sort((function(e,t){var a=new Date(e.airing_start),n=new Date(t.airing_start);return a.setMonth(0),a.setDate(1),n.setMonth(0),n.setDate(1),a-n}));var a=e.day.slice(0,1).toUpperCase()+e.day.slice(1);return r.a.createElement("div",{style:N},r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("p",{style:_},a),r.a.createElement("p",{style:W},function(e){var t=new Date,a=t.getDate()-t.getDay()+A.indexOf(e),n=new Date(t.setDate(a));return"".concat(C[n.getMonth()]," ").concat(n.getDate())}(e.day))),0===t.length?r.a.createElement("p",{style:M},"Slow day..."):e.schedule.map((function(e,t){return r.a.createElement(k,{anime:e,key:e.mal_id})})))}var M={borderTop:"solid 1.2px #444",paddingTop:"10px"},N={padding:"10px 10px 4px 10px",margin:"5px",minWidth:"150px",height:"inherit",flex:"1",backgroundColor:"#222",borderRadius:"10px"},_={fontSize:"18px"},W={fontSize:"13px",filter:"opacity(0.65)"},F=(a(50),a(13)),J=a.n(F),T={sunday:[],monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[]},Y=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={fullSchedule:{},mySchedule:T,watchlist:[]},e.componentDidMount=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadSchedule();case 2:e.getSchedule();case 3:case"end":return t.stop()}}),t)}))),e.loadSchedule=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.a.loadSchedule();case 3:a=t.sent,e.setState({fullSchedule:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.getSchedule=Object(o.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.setWatchlist();case 2:a=e.props.watching.slice(),n=e.state.watchlist.slice(),a.sort(),n.sort(),0===a.length?e.setState({mySchedule:T,watchlist:[]}):JSON.stringify(a)!==JSON.stringify(n)&&(r={sunday:[],monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[]},Y.forEach((function(t){e.state.fullSchedule[t].filter((function(e){return a.includes(e.mal_id)})).forEach((function(e){var t=new Date(e.airing_start),a=Y[t.getDay()];r[a].push(e)}))})),e.setState({mySchedule:r,watchlist:a}));case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.mySchedule;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Link,{to:"schedule",smooth:!0,offset:-90,duration:600},r.a.createElement("button",{className:"get-btn",onClick:function(){return e.getSchedule()}},"Get Schedule")),r.a.createElement("p",{style:z},"* times are displayed in your local time zone"),r.a.createElement("div",{style:R,name:"schedule"},Y.map((function(e){return r.a.createElement(j,{day:e,schedule:t[e],key:e})}))))}}]),a}(n.Component),R={display:"flex",flexDirection:"row",alignItems:"flex-start",flexWrap:"wrap",color:"#EEE"},z={textAlign:"left",paddingLeft:"10px",color:"#EEE",marginTop:"40px"},I=B,L=a(65),G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadSeason();case 2:n.filterOngoing();case 3:case"end":return e.stop()}}),e)}))),n.loadSeason=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.loadSeason();case 3:t=e.sent,n.setState({seasonal:t.anime}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.addAnime=function(e){n.setState({watching:n.state.watching.concat(e)}),n.watchingCookie(n.state.watching.concat(e))},n.delAnime=function(e){var t=n.state.watching.filter((function(t){return t!==e}));n.setState({watching:t}),n.watchingCookie(t)},n.setWatchlist=function(){n.setState({renderWatchlist:n.state.watching})},n.showMore=function(e){var t=n.state,a=t.seasonal,r=t.numDisplayed;e?r<a.length&&(n.numDisplayedCookie(r+10),n.setState({numDisplayed:r+10})):r>0&&(n.numDisplayedCookie(r-10),n.setState({numDisplayed:r-10}))};var r=e.cookies,i=r.get("numDisplayed"),s=null==i?20:parseInt(i);return n.state={watching:r.get("watching")||[],seasonal:[],renderWatchlist:r.get("watching")||[],numDisplayed:s},n}return Object(d.a)(a,[{key:"filterOngoing",value:function(){var e=this.state,t=e.watching,a=e.seasonal.map((function(e){return e.mal_id})),n=t.filter((function(e){return a.includes(e)}));this.watchingCookie(n),this.setState({watching:n})}},{key:"watchingCookie",value:function(e){var t=this.props.cookies,a=new Date;a.setFullYear(a.getFullYear()+1),t.set("watching",e,{expires:a}),this.setState({watching:e})}},{key:"numDisplayedCookie",value:function(e){var t=this.props.cookies,a=new Date;a.setFullYear(a.getFullYear()+1),t.set("numDisplayed",e,{expires:a}),this.setState({numDisplayed:e})}},{key:"render",value:function(){var e=this.state,t=e.renderWatchlist,a=e.watching,n=this.state.seasonal.slice(0,this.state.numDisplayed);return r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,{animes:n,selectedCards:a,addAnime:this.addAnime,delAnime:this.delAnime,showMore:this.showMore}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I,{watching:t,setWatchlist:this.setWatchlist}))}}]),a}(n.Component),H=Object(L.a)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(66);s.a.render(r.a.createElement(P.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.81455ef6.chunk.js.map