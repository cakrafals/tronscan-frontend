(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{3460:function(e,t,a){"use strict";a.r(t);var n=a(1373),r=a.n(n),c=a(2),s=a.n(c),o=a(30),i=a(6),l=a(15),d=a(14),m=a(21),u=a(20),v=a(22),p=a(0),b=a.n(p),f=a(12),h=a(382),O=a(2946),w=a(16),y=a(23),g=a(2533),j=a.n(g),E=a(3);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).loadCandidates=Object(i.a)(s.a.mark(function t(){var a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.b.getWitnesses();case 2:a=t.sent,n=a.witnesses,e.setState({candidates:n.map(function(e){return k({},e,{votes:0})})});case 5:case"end":return t.stop()}},t)})),e.loadVotes=Object(i.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.b.getLiveVotes();case 2:a=t.sent,e.setState({votes:a});case 4:case"end":return t.stop()}},t)})),e.loadData=Object(i.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.b.getVoteStats();case 2:a=t.sent,e.setState({data:a});case 4:case"end":return t.stop()}},t)})),e.state={candidates:[],data:null,votes:{},colors:j()("mpn65",20)},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadCandidates().then(function(){return e.loadVotes()}),this.props.setInterval(function(){e.loadVotes(),e.loadCandidates()},15e3),this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.candidates,a=e.colors,n=e.votes;e.data,t=t.map(function(e){return k({},e,{votes:n[e.address]?n[e.address].votes:0})});var c=r()(t,function(e){return-1*e.votes}).map(function(e,t){return k({},e,{rank:t+1})});return b.a.createElement("main",{className:"container header-overlap pb-3"},b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(E.c)("live_ranking"),b.a.createElement("div",{className:"small text-center text-muted p-2"},Object(E.c)("live_ranking_msg"))),b.a.createElement("div",{className:"media m-3 mb-0"},b.a.createElement("div",{className:"font-weight-bold text-center border-1 border-secondary",style:{width:25}},"\xa0"),b.a.createElement("div",{className:"mx-2",style:{width:25}},"\xa0"),b.a.createElement("div",{className:"media-body font-weight-bold"},Object(E.c)("candidate")),b.a.createElement("div",{className:"ml-3 text-center font-weight-bold"},Object(E.c)("current_votes"))),b.a.createElement(O.a,{duration:700,easing:"ease",enterAnimation:"elevator",staggerDurationBy:15,staggerDelayBy:20},c.map(function(e,t){return b.a.createElement("div",{key:e.address,className:"media mx-3 mb-3"},b.a.createElement("div",{className:"font-weight-bold text-center border-1 border-secondary",style:k({color:t<15?"#"+a[t]:null},D.rank)},e.rank),b.a.createElement("div",{className:"media-body"},b.a.createElement("span",{className:"mt-0",style:D.row},b.a.createElement(y.a,{address:e.address},e.name||e.url))),b.a.createElement("div",{className:"ml-3 text-center"},b.a.createElement("div",{style:D.votes},b.a.createElement("code",{style:{color:"#3E3F3A"}},b.a.createElement(f.c,{value:e.votes})))))}))))}}]),t}(b.a.Component),D={rank:{fontSize:18,lineHeight:"".concat(25,"px"),borderRadius:"6px",width:"45px"},votes:{fontSize:18,lineHeight:"".concat(25,"px")},row:{lineHeight:"".concat(25,"px"),fontSize:18},avatar:{height:25}};t.default=Object(h.a)(N)}}]);