(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(8),s=t.n(i),c=(t(14),t(15),t(7)),o=t.n(c),l=t(9),h=t(2),u=t(3),d=t(5),m=t(4),b=t(0),j=function(e){var n=e.name,t=e.email,a=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:t})]})]})},f=function(e){var n=e.robots.map((function(e){return Object(b.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(b.jsx)("div",{children:n})},p=function(e){e.searchField;var n=e.searchChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"search",placeholder:"search robots",onChange:n}),";"]})},O=function(e){var n=e.children;return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:n})},v=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),t}(a.Component),g=(t(18),function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(h.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,this.setState({robots:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(p,{searchField:t,searchChange:this.onSearchChange}),Object(b.jsx)(O,{children:Object(b.jsx)(v,{children:Object(b.jsx)(f,{robots:a})})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),t}(a.Component)),x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};console.log([{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.e302323c.chunk.js.map