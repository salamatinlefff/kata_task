(()=>{"use strict";var e,t={75:(e,t,n)=>{var r=n(257);r.ZP.use({Pagination:r.tl});var i,o,s,a,c,l,d,u,v={swipers:[],swiperContainers:[".brands__swiper ",".periphery__swiper"]},p=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=document.querySelector(t),o=document.querySelector(n),s=o.firstElementChild,a=o.lastElementChild;v["".concat(e,"Container")]=i,v["".concat(e,"Button")]=o;var c=h();o.addEventListener("click",(function(){c.activeContent?r?c.hideContent(i,s,a,!0):c.hideContent(i,s,a):c.showContent(i,s,a)}))},h=function(){return{activeContent:!1,showContent:function(e,t,n){var r=e.scrollHeight;e.style.height="".concat(r,"px"),t.style.transform="scale(1, -1)",n.textContent="Скрыть все",this.activeContent=!0},hideContent:function(e,t,n,r){n.textContent=r?"Читать далее":"Показать все",e.style.height="",t.style.transform="",this.activeContent=!1}}};i=document.querySelector(".burger-menu"),o=document.querySelector(".overlay"),a=(s=document.querySelector(".aside")).querySelector(".aside__button-close"),c=function(){s.classList.remove("aside--active"),o.classList.remove("overlay--active")},i.addEventListener("click",(function(){s.classList.add("aside--active"),o.classList.add("overlay--active")})),a.addEventListener("click",c),o.addEventListener("click",(function(e){e.target.classList.contains("overlay")&&c()})),l=window.matchMedia("(min-width:580px)"),d=v.swiperContainers.length,u=function(){var e=v.swipers.length;return l.matches&&e?function(){for(var e=0;e<d;e+=1)console.log("variables.swipers[i] destroy :",v.swipers[e]),v.swipers[e].destroy(),console.log("variables.swipers[i] :",v.swipers[e])}():l.matches?void 0:function(){for(var e=0;e<d;e+=1)v.swipers[e]=(t=v.swiperContainers[e],new r.ZP(t,{modules:[r.tl],loop:!0,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper__pagination",type:"bullets",clickable:!0}}));var t}()},l.addEventListener("change",u),u(),p("about",".about__desc",".about__button-show-content",!0),p("brands",".brands__list",".brands__button-show-content"),p("periphery",".periphery__list",".periphery__button-show-content"),function(){var e=function(e){var t=v["".concat(e,"Container")].scrollHeight;parseInt(window.getComputedStyle(v["".concat(e,"Container")]).height)===t?v["".concat(e,"Button")].style.display="none":v["".concat(e,"Button")].style.display=""},t=function(){e("about"),e("brands"),e("periphery")};t();var n=window.matchMedia("(min-width: 1000px)");n.addEventListener("change",(function(){n.matches?window.addEventListener("resize",t):window.removeEventListener("resize",t)}))}()}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,i,o)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,i,o]=e[d],a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,a,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var d=c(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunksection_1_web=self.webpackChunksection_1_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[257],(()=>r(75)));i=r.O(i)})();
//# sourceMappingURL=main.af5f8781bcca96d918ea.js.map