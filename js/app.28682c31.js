(function(){"use strict";var t={78:function(t,e,s){var r=s(471),a=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},n=[],i=s(845),o={},c=(0,i.A)(o,a,n,!1,null,null,null),u=c.exports,l=s(173),d=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("HomeComponent")],1)},h=[],m=s(215),v=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("HomeHeader"),t.loadingPage?e("Loader",{attrs:{loading:t.loadingPage}}):e("div",{staticClass:"home-page"},[e("div",[e("div",{staticClass:"main-box"},[e("img",{attrs:{src:s(677)}}),e("div",{staticClass:"main-header__box"},[e("h1",[t._v("Order Food")]),e("span",[t._v("From "+t._s(t.restaurants.length)+" Restaurants")])])]),e("div",{staticClass:"content-tabs"},[e("div",{staticClass:"tabs-header"},[e("div",{staticClass:"tabs-container"},[e("div",{staticClass:"tabs-list"},[e("span",[t._v("Cuisines:")]),e("ul",[e("li",{class:{active:"All"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("All")]),e("li",{class:{active:"Pizza"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Pizza")]),e("li",{class:{active:"Sushi"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Sushi")]),e("li",{class:{active:"Vegan"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Vegan")]),e("li",{class:{active:"Steak"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Steak")]),e("li",{class:{active:"Asian"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Asian")]),e("li",{class:{active:"Seafood"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Seafood")]),e("li",{class:{active:"Pasta"===t.currentTabsSelect},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Pasta")])])])])]),e("div",{staticClass:"tabs-content"},[e("div",{staticClass:"tab-panel"},t._l(t.getRestaurant,(function(s){return e("div",{key:s.id,staticClass:"restaurant-card",on:{click:function(e){return t.getInfoRestaurant(s)}}},[e("div",{staticClass:"restaurant-card-img"},[e("img",{attrs:{src:s.img}})]),e("div",{staticClass:"restaurant-card-info"},[e("h4",[t._v(t._s(s.title))]),e("p",[t._v(t._s(s.category))]),e("div",[t._l(s.stars,(function(t){return e("div",[e("i",{staticClass:"fa-solid fa-star"})])})),e("span",[t._v("("+t._s(s.stars)+")")])],2)])])})),0)])])]),t.sendCheck?e("div",{staticClass:"banner-box"},[e("h1",[t._v("Thank You! Your order is being prepared")])]):t._e()])],1)},g=[],f=s(603),p=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"navbar-box"},[e("div",{staticClass:"navbar-box-container"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"mt-1",attrs:{src:s(935)}})]),e("div",{staticClass:"select-box"},[e("div",{staticClass:"form-check"},[e("span",{class:{active:"USD"===t.currentCurrency},on:{click:function(e){return t.getCurrency(e)}}},[t._v("USD")]),e("div")]),e("div",{staticClass:"form-check"},[e("span",{class:{active:"RUB"===t.currentCurrency},on:{click:function(e){return t.getCurrency(e)}}},[t._v("RUB")]),e("div")]),e("div",{staticClass:"form-check"},[e("span",{class:{active:"UZS"===t.currentCurrency},on:{click:function(e){return t.getCurrency(e)}}},[t._v("UZS")])])])],1)])])},_=[];let C=class extends f.lD{currentCurrency=JSON.parse(sessionStorage.getItem("currency"))||"USD";created(){sessionStorage.setItem("currency",JSON.stringify(this.currentCurrency))}getCurrency(t){const e=t.target.textContent;this.currentCurrency=e,sessionStorage.setItem("currency",JSON.stringify(e)),this.$emit("currency",this.currentCurrency)}};C=(0,m.Cg)([f.uA],C);var b=C,y=b,k=(0,i.A)(y,p,_,!1,null,"d8514886",null),x=k.exports,S=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.loading?e("div",{staticClass:"spinner-grow"},[e("span",{staticClass:"sr-only"})]):t._e()},A=[];let P=class extends f.lD{loading};(0,m.Cg)([(0,f.kv)({type:Boolean,default:!1})],P.prototype,"loading",void 0),P=(0,m.Cg)([f.uA],P);var T=P,N=T,w=(0,i.A)(N,S,A,!1,null,"7b55af06",null),O=w.exports;let j=class extends f.lD{restaurants=[{id:1,title:"Dishoom",category:"pizza, sushi, vegan",stars:3,headerImg:"https://course-react.javascript.ru/assets/header/sushi_5.jpg",img:"https://course-react.javascript.ru/assets/thumb/sushi_5.jpg",menu:[{title:"Chicken tikka masala",name:"chicken, rice",amount:12,dish:0},{title:"Naan",name:"bread",amount:3,dish:0},{title:"Samosa",name:"chicken, bread",amount:8,dish:0}]},{id:2,title:"Homeslice",category:"steak",stars:4,headerImg:"https://course-react.javascript.ru/assets/header/ribs_5.jpg",img:"https://course-react.javascript.ru/assets/thumb/ribs_5.jpg",menu:[{title:"Margarita",name:"bread, cheese, tomatoes",amount:9,dish:0},{title:"Chef pizza",name:"bread, cheese, tomatoes, chicken",amount:10,dish:0}]},{id:3,title:"Fabrique",category:"asian, sushi, seafood",stars:5,headerImg:"https://course-react.javascript.ru/assets/header/sushi_2.jpg",img:"https://course-react.javascript.ru/assets/thumb/sushi_2.jpg",menu:[{title:"Cinnamon buns",name:"bread",amount:5,dish:0},{title:"Semlor",name:"bread, cream",amount:2,dish:0},{title:"Saffron bun",name:"bread",amount:4,dish:0}]},{id:4,title:"Flat Iron",category:"pasta, pizza",stars:2,headerImg:"https://course-react.javascript.ru/assets/header/pizza_4.jpg",img:"https://course-react.javascript.ru/assets/thumb/pizza_4.jpg",menu:[{title:"Flat Iron Steak",name:"beef",amount:10,dish:0},{title:"Flat Iron Burger",name:"bread, beef",amount:7,dish:0}]}]};j=(0,m.Cg)([f.uA],j);var U=j;let D=class extends((0,f.Xe)(U)){currentTabsSelect="All";sendCheck=JSON.parse(sessionStorage.getItem("sendCheck"))||!1;loadingPage=!1;created(){this.loadingPage=!0,setTimeout((()=>{this.loadingPage=!1}),1500),this.sendCheck&&setTimeout((()=>{this.sendCheck=!1,sessionStorage.setItem("sendCheck",JSON.stringify(!1))}),5e3)}selectTabs(t){const e=t.target.textContent;this.currentTabsSelect=e}getInfoRestaurant(t){this.$router.push("/restaurant/menu"),sessionStorage.setItem("restaurant",JSON.stringify(t))}get getRestaurant(){return"All"===this.currentTabsSelect?this.restaurants:this.restaurants.filter((t=>t.category.toLowerCase().includes(this.currentTabsSelect.toLowerCase())))}};D=(0,m.Cg)([(0,f.uA)({components:{HomeHeader:x,Loader:O}})],D);var I=D,F=I,z=(0,i.A)(F,v,g,!1,null,"c93c0404",null),R=z.exports;let J=class extends f.lD{};J=(0,m.Cg)([(0,f.uA)({components:{HomeComponent:R}})],J);var $=J,H=$,M=(0,i.A)(H,d,h,!1,null,null,null),B=M.exports,L=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("HomeHeader",{on:{currency:t.getCurrency}}),t.loadingPage?e("Loader",{attrs:{loading:t.loadingPage}}):e("div",[e("div",{staticClass:"main-box"},[e("div",{staticClass:"back"}),e("img",{attrs:{src:t.restaurant.headerImg}}),e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.restaurant.title))]),e("span",[t._v(t._s(t.restaurant.category))]),e("div",{staticClass:"rate"},[t._l(t.restaurant.stars,(function(t){return e("div",[e("i",{staticClass:"fa-solid fa-star"})])})),e("span",[t._v("("+t._s(t.restaurant.stars)+")")])],2)])]),e("div",{staticClass:"content-tabs"},[e("div",{staticClass:"tabs-header"},[e("div",{staticClass:"tabs-container"},[e("div",{staticClass:"tabs-list"},[e("ul",[e("li",{class:{active:"/restaurant/menu"===t.$route.path},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Menu")]),e("li",{class:{active:"/restaurant/reviews"===t.$route.path},on:{click:function(e){return t.selectTabs(e)}}},[t._v("Reviews")])])])])]),e("div",{staticClass:"tabs-content"},[e("div",{staticClass:"tab-panel"},[e("router-view",{attrs:{currentCurrency:t.currentCurrency}})],1)])])])],1)},E=[];let V=class extends f.lD{restaurant=JSON.parse(sessionStorage.getItem("restaurant"))||{};currentCurrency=JSON.parse(sessionStorage.getItem("currency"))||"USD";currentTabsSelect="Menu";loadingPage=!1;created(){this.loadingPage=!0,setTimeout((()=>{this.loadingPage=!1}),1e3),this.init()}init(){"Menu"===this.currentTabsSelect?"/restaurant/menu"!==this.$route.path&&this.$router.push("/restaurant/menu"):this.$router.push("/restaurant/reviews")}getCurrency(t){this.currentCurrency=t}selectTabs(t){const e=t.target.textContent;this.currentTabsSelect=e,this.init()}};V=(0,m.Cg)([(0,f.uA)({components:{HomeHeader:x,Loader:O}})],V);var X=V,Y=X,Z=(0,i.A)(Y,L,E,!1,null,"23fbbac1",null),q=Z.exports,G=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{class:["menu-box",{send:t.selectCheck}]},[t.selectCheck?e("div",{staticClass:"menu-left"},[e("div",{staticClass:"form-send"},[e("span",{staticClass:"form-send__title"},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userName,expression:"userName",modifiers:{trim:!0}}],class:["form-control my-2",{"error-input":t.errorName}],attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form-send__title"},[t._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userPhone,expression:"userPhone",modifiers:{trim:!0}}],class:["form-control my-2",{"error-input":t.errorPhone}],attrs:{type:"number"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form-send__title"},[t._v("Address")]),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.userAdress,expression:"userAdress",modifiers:{trim:!0}}],class:["form-control my-2",{"error-input":t.errorAddress}],domProps:{value:t.userAdress},on:{input:function(e){e.target.composing||(t.userAdress=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("button",{staticClass:"checkout-btn",on:{click:t.sendCheck}},[t._v("Order")])])]):e("div",{staticClass:"menu-left"},t._l(t.restaurant.menu,(function(s,r){return e("div",{key:r,staticClass:"menu-left__card"},[e("div",[e("h1",[t._v(t._s(s.title))]),e("span",[t._v(t._s(s.name))]),e("p",[t._v(t._s(t.getPrice(s.amount))+" "+t._s(t.currentCurrency))])]),e("div",{staticClass:"add-content"},[e("h1",[t._v(t._s(s.dish))]),e("div",{staticClass:"add-dish"},[e("button",{on:{click:function(e){return t.deleteDish(s)}}},[t._v("-")]),e("button",{staticClass:"ml-1",on:{click:function(e){return t.getDish(s)}}},[t._v("+")])])])])})),0),e("div",{staticClass:"menu-right"},[t.getMenuArr.length?e("h1",[t._v("Basket")]):e("h1",[t._v("Select a meal from the list")]),t._l(t.restaurant.menu,(function(s,r){return t.getMenuArr.length?e("div",{key:r,staticClass:"add-card"},[0!==s.dish?e("span",{staticClass:"title"},[t._v(t._s(s.title))]):t._e(),e("div",{staticClass:"item-card"},[0!==s.dish?e("div",{staticClass:"add-dish__right"},[e("button",{staticClass:"mr-2",on:{click:function(e){return t.deleteDish(s)}}},[t._v("-")]),0!==s.dish?e("span",{staticClass:"amount"},[t._v(t._s(s.dish))]):t._e(),e("button",{staticClass:"ml-2",on:{click:function(e){return t.getDish(s)}}},[t._v("+")])]):t._e(),0!==s.dish?e("span",{staticClass:"amount"},[t._v(t._s(t.addPrice(s))+" "+t._s(t.currentCurrency))]):t._e()])]):t._e()})),t.getMenuArr.length?e("div",{staticClass:"line-box"}):t._e(),t.getMenuArr.length?e("div",{staticClass:"checkout-box"},[e("div",{staticClass:"checkout-box__info"},[e("span",{staticClass:"checkout-box__info-text"},[t._v("Sub-total")]),e("span",{staticClass:"checkout-box__info-text"},[t._v(t._s(t.getTotalAmount)+" "+t._s(t.currentCurrency))])]),t._m(0),e("div",{staticClass:"checkout-box__info"},[e("span",{staticClass:"checkout-box__info-total"},[t._v("Total")]),e("span",{staticClass:"checkout-box__info-total"},[t._v(t._s(t.getTotalAmount)+" "+t._s(t.currentCurrency))])]),t.selectCheck?t._e():e("button",{staticClass:"checkout-btn",on:{click:t.changeCheck}},[t._v("Checkout")])]):t._e()],2)])},K=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"checkout-box__info"},[e("span",{staticClass:"checkout-box__info-text"},[t._v("Delivery costs:")]),e("span",{staticClass:"checkout-box__info-text"},[t._v("FREE")])])}];let Q=class extends f.lD{currentCurrency;restaurant=JSON.parse(sessionStorage.getItem("restaurant"))||{};selectCheck=!1;userName="";userPhone="";userAdress="";errorName=!1;errorPhone=!1;errorAddress=!1;getPrice(t){if("USD"===this.currentCurrency)return t.toFixed(2);if("RUB"===this.currentCurrency){let e=97.04,s=t*e;return s.toFixed(2)}{let e=12806.3,s=t*e;return this.format(+s.toFixed())}}addPrice(t){if("USD"===this.currentCurrency){let e=1,s=t.amount*e;return 1===t.dish||(s=t.amount*e*t.dish),this.format(+s.toFixed())}if("RUB"===this.currentCurrency){let e=97.04,s=t.amount*e;return 1===t.dish||(s=t.amount*e*t.dish),this.format(+s.toFixed())}{let e=12806.3,s=t.amount*e;return 1===t.dish||(s=t.amount*e*t.dish),this.format(+s.toFixed())}}format(t){let e=Number(t).toLocaleString("ru").replace(",","."),[s,r]=e.split(".");return r=r||"",s+r}getDish(t){t.dish+=1}deleteDish(t){0!==t.dish&&(t.dish-=1)}changeCheck(){this.selectCheck=!0}sendCheck(){const t={name:this.userName,phone:this.userPhone,address:this.userAdress};t.name?this.errorName=!1:this.errorName=!0,t.phone?this.errorPhone=!1:this.errorPhone=!0,t.address?this.errorAddress=!1:this.errorAddress=!0,t.name&&t.phone&&t.address&&(this.$router.push("/"),sessionStorage.setItem("user",JSON.stringify(t)),sessionStorage.setItem("sendCheck",JSON.stringify(!0)),this.userName=this.userPhone=this.userAdress="")}get getMenuArr(){return this.restaurant.menu.filter((t=>0!==t.dish))}get getTotalAmount(){let t=+this.restaurant.menu.reduce(((t,e)=>t+(e.dish>0?e.amount*e.dish:0)),0);if("USD"===this.currentCurrency){let e=1,s=t*e;return this.format(+s.toFixed())}if("RUB"===this.currentCurrency){let e=97.04,s=t*e;return this.format(+s.toFixed())}{let e=12806.3,s=t*e;return this.format(+s.toFixed())}}getUserName(t){t&&(this.errorName=!1)}getUserPhone(t){t&&(this.errorPhone=!1)}getUserAdress(t){t&&(this.errorAddress=!1)}};(0,m.Cg)([(0,f.kv)({type:String,default:""})],Q.prototype,"currentCurrency",void 0),(0,m.Cg)([(0,f.ox)("userName")],Q.prototype,"getUserName",null),(0,m.Cg)([(0,f.ox)("userPhone")],Q.prototype,"getUserPhone",null),(0,m.Cg)([(0,f.ox)("userAdress")],Q.prototype,"getUserAdress",null),Q=(0,m.Cg)([f.uA],Q);var W=Q;let tt=class extends((0,f.Xe)(W)){};tt=(0,m.Cg)([f.uA],tt);var et=tt,st=et,rt=(0,i.A)(st,G,K,!1,null,"7d5f8d8a",null),at=rt.exports,nt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",[t._v("ReviewsComponent: "+t._s(t.restaurant.title))])])},it=[];let ot=class extends f.lD{restaurant=JSON.parse(sessionStorage.getItem("restaurant"))||{}};ot=(0,m.Cg)([f.uA],ot);var ct=ot,ut=ct,lt=(0,i.A)(ut,nt,it,!1,null,"9b7de942",null),dt=lt.exports;r.Ay.use(l.Ay);const ht=[{path:"/",name:"home",component:B},{path:"/restaurant/menu",component:q,children:[{path:"/restaurant/menu",component:at},{path:"/restaurant/reviews",component:dt}]}],mt=new l.Ay({mode:"history",base:"/new-any-food/",routes:ht});var vt=mt,gt=s(353);r.Ay.use(gt.Ay);var ft=new gt.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),pt=s(765);r.Ay.use(pt.A);var _t=new pt.A({locale:"ru",messages:{ru:{},en:{}}});r.Ay.config.productionTip=!1,new r.Ay({router:vt,store:ft,i18n:_t,render:t=>t(u)}).$mount("#app")},935:function(t,e,s){t.exports=s.p+"img/logo.6f359f3d.svg"},677:function(t,e,s){t.exports=s.p+"img/header-img.7540d9ae.jpg"}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,n){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],n=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(o=!1,n<i&&(i=n));if(o){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[r,a,n]}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/new-any-food/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,n,i=r[0],o=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var l=c(s)}for(e&&e(r);u<i.length;u++)n=i[u],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(l)},r=self["webpackChunknew_any_food"]=self["webpackChunknew_any_food"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(78)}));r=s.O(r)})();
//# sourceMappingURL=app.28682c31.js.map