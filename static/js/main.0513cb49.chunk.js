(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),s=c.n(a),i=(c(12),c(2)),u=c.n(i),o=c(5),p=c(3),l=(c.p,c(14),c(6)),j=c.n(l),b=c(0);function f(e){var t=e.title,c=e.calories,n=e.image,r=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:""}),Object(b.jsx)("ol",{children:r.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.text]})}))})]})}var d=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(p.a)(a,2),i=s[0],l=s[1],j=Object(n.useRef)(),d=Object(n.useState)("chicken"),h=Object(p.a)(d,2),m=h[0],O=h[1];Object(n.useEffect)((function(){x()}),[m]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/flightinfo-rest/rest/flights/past?date=2021-3-11&lang=en&cargo=false&arrival=true");case 2:t=e.sent,c=t,console.log(c);case 5:case"end":return e.stop()}}),e)}))),[]);var x=function(){var e=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("2c9232ad","&app_key=").concat("7620369b9dc2f408349d5afa69b1edd7"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),O(i),j.current.value=null},children:[Object(b.jsx)("input",{className:"search-bar",type:"text",ref:j,onChange:function(e){var t=j.current.value;""!==t&&l(t)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(f,{title:e.recipe.label,calories:e.recipe.calories.toFixed(0),image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={recipe:"recipe_recipe__2G5Cv",image:"recipe_image__2CPiW"}}},[[16,1,2]]]);
//# sourceMappingURL=main.0513cb49.chunk.js.map