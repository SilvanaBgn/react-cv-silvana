(this["webpackJsonpreact-cv-silvana"]=this["webpackJsonpreact-cv-silvana"]||[]).push([[0],[,,function(e,t,n){e.exports={background:"WhoIAm_background__191qy",profilePic:"WhoIAm_profilePic__1bSoK",presentation:"WhoIAm_presentation__wqTmO",name:"WhoIAm_name__2XifL",job:"WhoIAm_job__2DhII",degree:"WhoIAm_degree__1CucY",biographyGroup:"WhoIAm_biographyGroup__3ZbSe",languages:"WhoIAm_languages__3UE7h"}},function(e,t,n){e.exports={header:"Menu_header__2hlkb",button:"Menu_button__1gepV",buttonBurger:"Menu_buttonBurger__3OW4R",buttonClose:"Menu_buttonClose__15b3t",menuClosed:"Menu_menuClosed__3Wpkj",menuOpened:"Menu_menuOpened__3Q85_",menuBlocker:"Menu_menuBlocker__2fzvG"}},function(e,t,n){e.exports={card:"Card_card__1eE8R",cardTitle:"Card_cardTitle___nUI9",cardCompany:"Card_cardCompany__QWUQq",cardDates:"Card_cardDates__3vrIp"}},,function(e,t,n){e.exports={profile:"ProfileMenu_profile__2UBZI",name:"ProfileMenu_name__20LOx"}},function(e,t,n){e.exports={title:"SectionTitle_title__3LDYZ",icon:"SectionTitle_icon__20N5f"}},,,,function(e,t,n){e.exports={item:"MenuItem_item__34LtA"}},function(e,t,n){e.exports={biography:"Quote_biography__35O6o"}},function(e,t,n){e.exports={sectionWork:"Work_sectionWork__1xii4"}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(8),o=n.n(i),s=(n(20),n(9)),r=n(10),m=n(15),l=n(14),u=n(3),_=n.n(u),p=n.p+"static/media/profile_pic.cba84f63.jpg",d=n(6),j=n.n(d),b=n(0);var h=function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("img",{className:j.a.profile,src:p,alt:"profile pic"}),Object(b.jsx)("p",{className:j.a.name,children:"Silvana B. Garc\xeda"})]})},x=n(11),O=n.n(x);var f=function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("li",{className:O.a.item,children:[Object(b.jsx)("img",{src:e.iconPath,alt:"".concat(e.itemName," icon")}),e.itemName]})})},g=Object(b.jsx)("div",{className:_.a.menuBlocker}),N=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).state={menuOpened:!1},a.onBurgerClick=function(){a.setState((function(e,t){return{menuOpened:!e.menuOpened}}))},a.items=e.menuItems,a}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("header",{className:_.a.header,children:[Object(b.jsx)(h,{}),Object(b.jsx)("button",{className:"".concat(_.a.button," ").concat(this.state.menuOpened?_.a.buttonClose:_.a.buttonBurger),onClick:this.onBurgerClick}),Object(b.jsx)("ul",{className:this.state.menuOpened?_.a.menuOpened:_.a.menuClosed,children:this.items.map((function(e,t){return Object(b.jsx)(f,{itemName:e.itemName,iconPath:"assets/".concat(e.iconName,".svg")},t)}))})]}),this.state.menuOpened?g:null]})}}]),n}(c.a.Component);n(12);n(2),n.p;var v=n(13),k=n.n(v),C=n(7),D=n.n(C);var y=function(e){return Object(b.jsxs)("h1",{className:D.a.title,children:[Object(b.jsx)("img",{className:D.a.icon,src:e.iconPath,alt:"".concat(e.title," icon")}),e.title]})},I=n(4),W=n.n(I);function M(e){var t=e.getMonth(),n=e.getFullYear(),a=new Date(Date.now());return n===a.getFullYear()&&t===a.getMonth()?"present":"".concat(["Jan","Feb","Mar","Apr","Jun","Jul","Ago","Sep","Oct","Nov","Dec"][t-1]," ").concat(n)}var A=function(e){return Object(b.jsxs)("div",{className:W.a.card,children:[Object(b.jsx)("p",{className:W.a.cardTitle,children:e.item.title}),Object(b.jsx)("p",{className:W.a.cardCompany,children:e.item.company}),Object(b.jsx)("p",{className:W.a.cardDates,children:"".concat(M(e.item.startDate)," - ").concat(M(e.item.finishDate))})]})},B=[{company:"Globant",title:"Ssr Web UI Developer",startDate:new Date(2019,8),finishDate:new Date(Date.now()),expandable:{description:"Blabla",technologies:["reactjs","html5","css3","nodejs","express"]}},{company:"Sydesys IT Solutions",title:"Fullstack Developer",startDate:new Date(2017,4),finishDate:new Date(2019,8),expandable:{description:"Blabla",technologies:["reactjs","html5","css3","nodejs","express"]}}];var w=function(e){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(y,{title:e.title,iconPath:e.iconPath}),Object(b.jsx)("section",{className:k.a.sectionWork,children:B.map((function(e,t){return Object(b.jsx)(A,{item:e},t)}))})]})},F=(n(22),[{itemName:"Qui\xe9n soy",iconName:"who_i_am",page:"WhoIAm"},{itemName:"Experiencia laboral",iconName:"work_experience",page:"Work"},{itemName:"Formaci\xf3n acad\xe9mica",iconName:"academics"},{itemName:"Mis proyectos",iconName:"my_projects"},{itemName:"Charlas",iconName:"talks"},{itemName:"Mis apuntes",iconName:"my_notes"},{itemName:"Contacto",iconName:"contact"}]);var P=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(N,{menuItems:F}),Object(b.jsx)("div",{className:"AppPage",children:Object(b.jsx)(w,{className:"Work",title:"Experiencia Laboral",iconPath:"assets/work_experience.svg"})}),Object(b.jsx)("footer",{children:"Thanks for passing by! See you next time :)"})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),S()}],[[23,1,2]]]);
//# sourceMappingURL=main.d1e28cbd.chunk.js.map