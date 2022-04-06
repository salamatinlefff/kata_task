(()=>{"use strict";var e,t={75:(e,t,n)=>{var o,a,r,i,c,s,l,u,d,v,h,f,p,m,b,y,w,_,g=n(257);g.ZP.use({Pagination:g.tl}),b={swipers:[],swiperContainers:[".brands__swiper",".periphery__swiper",".price__swiper"]},y=function(){var e=document.querySelectorAll(".service-item__title"),t=window.matchMedia("(min-width:576px)"),n=b.swiperContainers.length,o=function(){var e=b.swipers.length;return t.matches&&a(!0),t.matches&&e?function(){for(var e=0;e<n;e+=1)b.swipers[e].destroy()}():t.matches?void 0:(a(),function(){for(var e=0;e<n;e+=1)b.swipers[e]=(t=b.swiperContainers[e],new g.ZP(t,{modules:[g.tl],loop:!0,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper__pagination",type:"bullets",clickable:!0}}));var t}())};function a(t){t?e.forEach((function(e){e.classList.add("visually-hidden")})):e.forEach((function(e){e.classList.remove("visually-hidden")}))}t.addEventListener("change",o),o()},w=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=document.querySelector(t),r=document.querySelector(n),i=r.firstElementChild,c=r.lastElementChild;b["".concat(e,"Container")]=a,b["".concat(e,"Button")]=r;var s=_();r.addEventListener("click",(function(){s.activeContent?o?s.hideContent(a,i,c,!0):s.hideContent(a,i,c):s.showContent(a,i,c)}))},_=function(){return{activeContent:!1,showContent:function(e,t,n){var o=e.scrollHeight;e.style.height="".concat(o,"px"),t.style.transform="scale(1, -1)",n.textContent="Скрыть все",this.activeContent=!0},hideContent:function(e,t,n,o){n.textContent=o?"Читать далее":"Показать все",e.style.height="",t.style.transform="",this.activeContent=!1}}},o=document.querySelector(".burger-menu"),a=document.querySelector(".overlay"),r=document.querySelector(".aside"),i=r.querySelector(".aside__button-close"),s=(c=document.querySelector(".page__modal-call")).querySelector(".modal-call__button-close"),l=document.querySelectorAll(".contacts__button--call"),d=(u=document.querySelector(".page__modal-feedback")).querySelector(".modal-feedback__button-close"),v=document.querySelectorAll(".contacts__button-feedback"),h=document.documentElement.scrollHeight,f=function(e,t,n){var o=window.pageYOffset;localStorage.setItem("currentLocationOnPage",o),e.style.height="".concat(h,"px"),window.scrollTo({top:0,behavior:"smooth"}),e.classList.add(t),a.classList.add("overlay--active"),n&&(m(),a.style.zIndex=3)},p=function(e){var t=localStorage.getItem("currentLocationOnPage");t&&(window.scrollTo({top:t,behavior:"smooth"}),localStorage.removeItem("currentLocationOnPage")),u.classList.remove("modal-feedback--active"),c.classList.remove("modal-call--active"),a.classList.remove("overlay--active"),a.style.zIndex="",e&&m()},m=function(){r.classList.remove("aside--active")},[{button:o,section:r,activeClass:"aside--active"},{button:l,section:c,activeClass:"modal-call--active",needCloseMenu:!0},{button:v,section:u,activeClass:"modal-feedback--active",needCloseMenu:!0}].forEach((function(e){if(e.button.length)return e.button.forEach((function(t){t.addEventListener("click",(function(){f(e.section,e.activeClass,e.needCloseMenu)}))}));e.button.addEventListener("click",(function(){f(e.section,e.activeClass,e.needCloseMenu)}))})),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.addEventListener("click",(function(){p(),e===i&&m()}))}))}(i,s,d),a.addEventListener("click",(function(e){e.target.classList.contains("overlay")&&p("and-close-menu-please")})),y(),w("about",".about__desc",".about__button-show-content",!0),w("brands",".brands__list",".brands__button-show-content"),w("periphery",".periphery__list",".periphery__button-show-content"),function(){var e=function(e){var t=b["".concat(e,"Container")].scrollHeight;parseInt(window.getComputedStyle(b["".concat(e,"Container")]).height)===t?b["".concat(e,"Button")].style.display="none":b["".concat(e,"Button")].style.display=""},t=function(){e("about"),e("brands"),e("periphery")};t();var n=window.matchMedia("(min-width: 1000px)");n.addEventListener("change",(function(){n.matches?window.addEventListener("resize",t):window.removeEventListener("resize",t)}))}()}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,a,r]=e[u],c=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var u=s(o)}for(t&&t(n);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunksection_1_web=self.webpackChunksection_1_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[257],(()=>o(75)));a=o.O(a)})();
//# sourceMappingURL=main.a8c897f44bfc7ba8a06b.js.map