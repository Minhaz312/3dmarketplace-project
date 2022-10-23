var F=(p,v)=>()=>(v||p((v={exports:{}}).exports,v),v.exports);import{C as D,S as O,P as z,W as q,O as H,a as G,s as R,G as V,B as X,M as B,b as W,c as C,A as K,D as T,d as Y,e as I,V as A,f as $}from"./vendor.21743fe0.js";var te=F((_,P)=>{const J=function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function m(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=m(t);fetch(t.href,e)}};J();function Q(p,v){const m=new $;let o,t;const e=new D().set("rgb(43, 43, 43)");let i=document.getElementById("modal-container"),r=document.querySelector("#modal");const n=new O;n.background=e;const s=new z(30,i.clientWidth/i.clientHeight,.1,1e3),l=new q({canvas:r,antialias:!0}),L=new H(s,l.domElement);l.setPixelRatio(window.devicePixelRatio),l.setSize(i.clientWidth,i.clientHeight),l.shadowMap.enabled=!0,l.shadowMap.type=G,l.outputEncoding=R,s.position.set(0,-.09,1),n.translateY(-.001),n.castShadow=!0,l.render(n,s),new V().load(p,function(y){const b=y.scene;b.traverse(j=>{j.castShadow=!0}),s.position.x=-.5,s.position.y=.1;const M=new X().setFromObject(b);var w=new A;M.getSize(w);var S=new A;M.getCenter(S);let k=Math.min(1/w.x,1/w.y,1/w.z);console.log("size: ",w),w.y>15?k=k/2:k=k/1.2,w.y<w.x&window.innerWidth<768&&(k=k/2),b.scale.setScalar(k),b.position.sub(S.multiplyScalar(k)),n.background=new D(e);const x=new B(new W(1e6,1e6),new C({color:e}));x.castShadow=!1,x.receiveShadow=!0,x.rotation.x=-Math.PI/2,v=="gltf"?x.position.y=-w.y:x.position.y=-w.y/3,console.log("animations: ",y),n.add(b),o=!1,y.animations.length>0&&(console.log("animation available"),o=!0,t=new K(b),t.clipAction(y.animations[0]).play()),document.getElementById("modal-container").addEventListener("mouseover",()=>{document.getElementById("modal-container").style.cursor="grab"}),document.getElementById("modal-container").addEventListener("mousedown",()=>{document.getElementById("modal-container").style.cursor="grabbing"}),document.getElementById("modal-container").addEventListener("mouseup",()=>{document.getElementById("modal-container").style.cursor="grab"}),document.getElementById("modal-container").addEventListener("mouseout",()=>{document.getElementById("modal-container").style.cursor="normal"})},function(y){let b=document.getElementById("progress");r.style.display="none",b.style.display="flex",b.style.height="100%",b.style.width="100%";let M=y.total,w=y.loaded,S=Math.round(w/M*100);b.innerText=`Loaded ${S}%`,S===100&&(b.style.display="none",r.style.display="block")},function(y){console.log("glb load error: ",y)});const f=new T(16777215,1),u=new T(16777215,1),d=new T(16777215,1),c=new Y(16777215,1);c.position.set(0,.5,3),f.position.set(-5,5,10),u.position.set(5,5,10),d.position.set(0,1,-10),f.castShadow=!0,u.castShadow=!0,d.castShadow=!0,n.add(f),n.add(u),n.add(d),n.add(c);const g=new B(new W(1e6,1e6,10,10),new C({color:e,side:I}));g.castShadow=!1,g.receiveShadow=!0,g.rotation.y=-Math.PI/2,g.position.x=-50,g.rotation.x=100;const h=new B(new W(1e6,1e6,10,10),new C({color:e,side:I}));h.castShadow=!1,h.receiveShadow=!0,h.rotation.y=Math.PI/3,h.position.x=40,g.rotation.x=100;const E=new B(new W(1e6,1e6,10,10),new C({color:e,side:I}));E.castShadow=!1,E.receiveShadow=!0,E.rotation.y=-Math.PI/3,E.position.x=45,g.rotation.x=100,window.addEventListener("resize",function(y){s.aspect=window.innerWidth/window.innerHeight,l.setSize(window.innerWidth,i.clientHeight)});function N(){if(requestAnimationFrame(N),L.update(),o==!0){const y=m.getDelta();t.update(y)}l.render(n,s)}N()}/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/(function(p){typeof define=="function"&&define.amd?define(p):typeof _=="object"?P.exports=p():p()})(function(){var p=typeof window!="undefined"?window:this,v=p.Glider=function(o,t){var e=this;if(o._glider)return o._glider;if(e.ele=o,e.ele.classList.add("glider"),(e.ele._glider=e).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(i,r,n,s,l){return s*(r/=l)*r+n}},t),e.animate_id=e.page=e.slide=0,e.arrows={},e._opt=e.opt,e.opt.skipTrack)e.track=e.ele.children[0];else for(e.track=document.createElement("div"),e.ele.appendChild(e.track);e.ele.children.length!==1;)e.track.appendChild(e.ele.children[0]);e.track.classList.add("glider-track"),e.init(),e.resize=e.init.bind(e,!0),e.event(e.ele,"add",{scroll:e.updateControls.bind(e)}),e.event(p,"add",{resize:e.resize})},m=v.prototype;return m.init=function(o,t){var e=this,i=0,r=0;e.slides=e.track.children,[].forEach.call(e.slides,function(l,L){l.classList.add("glider-slide"),l.setAttribute("data-gslide",L)}),e.containerWidth=e.ele.clientWidth;var n=e.settingsBreakpoint();if(t||(t=n),e.opt.slidesToShow==="auto"||e.opt._autoSlide!==void 0){var s=e.containerWidth/e.opt.itemWidth;e.opt._autoSlide=e.opt.slidesToShow=e.opt.exactWidth?s:Math.max(1,Math.floor(s))}e.opt.slidesToScroll==="auto"&&(e.opt.slidesToScroll=Math.floor(e.opt.slidesToShow)),e.itemWidth=e.opt.exactWidth?e.opt.itemWidth:e.containerWidth/e.opt.slidesToShow,[].forEach.call(e.slides,function(l){l.style.height="auto",l.style.width=e.itemWidth+"px",i+=e.itemWidth,r=Math.max(l.offsetHeight,r)}),e.track.style.width=i+"px",e.trackWidth=i,e.isDrag=!1,e.preventClick=!1,e.opt.resizeLock&&e.scrollTo(e.slide*e.itemWidth,0),(n||t)&&(e.bindArrows(),e.buildDots(),e.bindDrag()),e.updateControls(),e.emit(o?"refresh":"loaded")},m.bindDrag=function(){var o=this;o.mouse=o.mouse||o.handleMouse.bind(o);var t=function(){o.mouseDown=void 0,o.ele.classList.remove("drag"),o.isDrag&&(o.preventClick=!0),o.isDrag=!1},e={mouseup:t,mouseleave:t,mousedown:function(i){i.preventDefault(),i.stopPropagation(),o.mouseDown=i.clientX,o.ele.classList.add("drag")},mousemove:o.mouse,click:function(i){o.preventClick&&(i.preventDefault(),i.stopPropagation()),o.preventClick=!1}};o.ele.classList.toggle("draggable",o.opt.draggable===!0),o.event(o.ele,"remove",e),o.opt.draggable&&o.event(o.ele,"add",e)},m.buildDots=function(){var o=this;if(o.opt.dots){if(typeof o.opt.dots=="string"?o.dots=document.querySelector(o.opt.dots):o.dots=o.opt.dots,o.dots){o.dots.innerHTML="",o.dots.classList.add("glider-dots");for(var t=0;t<Math.ceil(o.slides.length/o.opt.slidesToShow);++t){var e=document.createElement("button");e.dataset.index=t,e.setAttribute("aria-label","Page "+(t+1)),e.setAttribute("role","tab"),e.className="glider-dot "+(t?"":"active"),o.event(e,"add",{click:o.scrollItem.bind(o,t,!0)}),o.dots.appendChild(e)}}}else o.dots&&(o.dots.innerHTML="")},m.bindArrows=function(){var o=this;o.opt.arrows?["prev","next"].forEach(function(t){var e=o.opt.arrows[t];e&&(typeof e=="string"&&(e=document.querySelector(e)),e&&(e._func=e._func||o.scrollItem.bind(o,t),o.event(e,"remove",{click:e._func}),o.event(e,"add",{click:e._func}),o.arrows[t]=e))}):Object.keys(o.arrows).forEach(function(t){var e=o.arrows[t];o.event(e,"remove",{click:e._func})})},m.updateControls=function(o){var t=this;o&&!t.opt.scrollPropagate&&o.stopPropagation();var e=t.containerWidth>=t.trackWidth;t.opt.rewind||(t.arrows.prev&&(t.arrows.prev.classList.toggle("disabled",t.ele.scrollLeft<=0||e),t.arrows.prev.setAttribute("aria-disabled",t.arrows.prev.classList.contains("disabled"))),t.arrows.next&&(t.arrows.next.classList.toggle("disabled",Math.ceil(t.ele.scrollLeft+t.containerWidth)>=Math.floor(t.trackWidth)||e),t.arrows.next.setAttribute("aria-disabled",t.arrows.next.classList.contains("disabled")))),t.slide=Math.round(t.ele.scrollLeft/t.itemWidth),t.page=Math.round(t.ele.scrollLeft/t.containerWidth);var i=t.slide+Math.floor(Math.floor(t.opt.slidesToShow)/2),r=Math.floor(t.opt.slidesToShow)%2?0:i+1;Math.floor(t.opt.slidesToShow)===1&&(r=0),t.ele.scrollLeft+t.containerWidth>=Math.floor(t.trackWidth)&&(t.page=t.dots?t.dots.children.length-1:0),[].forEach.call(t.slides,function(n,s){var l=n.classList,L=l.contains("visible"),a=t.ele.scrollLeft,f=t.ele.scrollLeft+t.containerWidth,u=t.itemWidth*s,d=u+t.itemWidth;[].forEach.call(l,function(g){/^left|right/.test(g)&&l.remove(g)}),l.toggle("active",t.slide===s),i===s||r&&r===s?l.add("center"):(l.remove("center"),l.add([s<i?"left":"right",Math.abs(s-(s<i?i:r||i))].join("-")));var c=Math.ceil(u)>=Math.floor(a)&&Math.floor(d)<=Math.ceil(f);l.toggle("visible",c),c!==L&&t.emit("slide-"+(c?"visible":"hidden"),{slide:s})}),t.dots&&[].forEach.call(t.dots.children,function(n,s){n.classList.toggle("active",t.page===s)}),o&&t.opt.scrollLock&&(clearTimeout(t.scrollLock),t.scrollLock=setTimeout(function(){clearTimeout(t.scrollLock),.02<Math.abs(t.ele.scrollLeft/t.itemWidth-t.slide)&&(t.mouseDown||t.trackWidth>t.containerWidth+t.ele.scrollLeft&&t.scrollItem(t.getCurrentSlide()))},t.opt.scrollLockDelay||250))},m.getCurrentSlide=function(){var o=this;return o.round(o.ele.scrollLeft/o.itemWidth)},m.scrollItem=function(o,t,e){e&&e.preventDefault();var i=this,r=o;if(++i.animate_id,t===!0)o*=i.containerWidth,o=Math.round(o/i.itemWidth)*i.itemWidth;else{if(typeof o=="string"){var n=o==="prev";if(o=i.opt.slidesToScroll%1||i.opt.slidesToShow%1?i.getCurrentSlide():i.slide,n?o-=i.opt.slidesToScroll:o+=i.opt.slidesToScroll,i.opt.rewind){var s=i.ele.scrollLeft;o=n&&!s?i.slides.length:!n&&s+i.containerWidth>=Math.floor(i.trackWidth)?0:o}}o=Math.max(Math.min(o,i.slides.length),0),i.slide=o,o=i.itemWidth*o}return i.scrollTo(o,i.opt.duration*Math.abs(i.ele.scrollLeft-o),function(){i.updateControls(),i.emit("animated",{value:r,type:typeof r=="string"?"arrow":t?"dot":"slide"})}),!1},m.settingsBreakpoint=function(){var o=this,t=o._opt.responsive;if(t){t.sort(function(n,s){return s.breakpoint-n.breakpoint});for(var e=0;e<t.length;++e){var i=t[e];if(p.innerWidth>=i.breakpoint)return o.breakpoint!==i.breakpoint&&(o.opt=Object.assign({},o._opt,i.settings),o.breakpoint=i.breakpoint,!0)}}var r=o.breakpoint!==0;return o.opt=Object.assign({},o._opt),o.breakpoint=0,r},m.scrollTo=function(o,t,e){var i=this,r=new Date().getTime(),n=i.animate_id,s=function(){var l=new Date().getTime()-r;i.ele.scrollLeft=i.ele.scrollLeft+(o-i.ele.scrollLeft)*i.opt.easing(0,l,0,1,t),l<t&&n===i.animate_id?p.requestAnimationFrame(s):(i.ele.scrollLeft=o,e&&e.call(i))};p.requestAnimationFrame(s)},m.removeItem=function(o){var t=this;t.slides.length&&(t.track.removeChild(t.slides[o]),t.refresh(!0),t.emit("remove"))},m.addItem=function(o){this.track.appendChild(o),this.refresh(!0),this.emit("add")},m.handleMouse=function(o){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-o.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=o.clientX)},m.round=function(o){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(o*t)/t},m.refresh=function(o){this.init(!0,o)},m.setOption=function(o,t){var e=this;e.breakpoint&&!t?e._opt.responsive.forEach(function(i){i.breakpoint===e.breakpoint&&(i.settings=Object.assign({},i.settings,o))}):e._opt=Object.assign({},e._opt,o),e.breakpoint=0,e.settingsBreakpoint()},m.destroy=function(){var o=this,t=o.ele.cloneNode(!0),e=function(i){i.removeAttribute("style"),[].forEach.call(i.classList,function(r){/^glider/.test(r)&&i.classList.remove(r)})};t.children[0].outerHTML=t.children[0].innerHTML,e(t),[].forEach.call(t.getElementsByTagName("*"),e),o.ele.parentNode.replaceChild(t,o.ele),o.event(p,"remove",{resize:o.resize}),o.emit("destroy")},m.emit=function(o,t){var e=new p.CustomEvent("glider-"+o,{bubbles:!this.opt.eventPropagate,detail:t});this.ele.dispatchEvent(e)},m.event=function(o,t,e){var i=o[t+"EventListener"].bind(o);Object.keys(e).forEach(function(r){i(r,e[r])})},v});function U(p,v){const m=document.getElementById("image-slider");let o=document.getElementById("modal-container");for(let a=0;a<p.length;a++){const f=p[a].image.split("/"),u=f[f.length-1],d=document.createElement("img"),c=document.createElement("img"),g=document.createElement("div"),h=document.createElement("div");h.innerText="360",h.style.color="yellow",h.style.position="absolute",h.style.height="20px",h.style.width="20px",h.style.fontWeight="bold",h.style.right="15px",h.style.top="5px",h.classList.add("rotationDegBadge"),g.style.position="relative",g.style.padding="5px",g.style.height="200px",g.style.display="inline-block",c.setAttribute("data-name",u),c.alt=u,c.src=p[a].image,c.style.display="none",c.style.height="100%",c.style.width="100%",c.style.objectFit="cover",d.setAttribute("data-name",u),d.alt=u,d.src=p[a].image,d.style.display="inline-block",d.style.height="100%",d.style.width="100%",d.style.objectFit="cover",a==0?(document.getElementById("modal").setAttribute("data-index",a),d.classList.add("slider-image"),d.classList.add("active-slider"),document.getElementById("modal").classList.add("model-image"),document.getElementById("modal").classList.add("active-model"),g.append(h),g.append(d),m.append(g)):(c.setAttribute("data-index",a),d.classList.add("slider-image"),c.classList.add("model-image"),c.style.display="none",g.append(d),m.append(g),o.append(c))}const t=document.getElementsByClassName("slider-image"),e=v.split(".");let i=e[e.length-1].toLowerCase(),r=!1;for(let a=0;a<t.length;a++)console.log("i ",a),t[a].addEventListener("click",f=>{l.setAttribute("data-current-id",a),n.setAttribute("data-current-id",a);let u=t[a].getAttribute("data-name");console.log("selected imageName: ",u);let d=u.split(".");i=d[d.length-1],r=!0;const c=document.getElementsByClassName("active-slider")[0],g=document.getElementsByClassName("active-model")[0];g.style.display="none",g.classList.remove("active-model"),c.classList.remove("active-slider");const h=document.getElementsByClassName("model-image")[a],E=document.getElementsByClassName("slider-image")[a];a==0?(document.getElementById("modal").style.display="inline-block",document.getElementById("modal").classList.add("active-model"),E.classList.add("active-slider")):(h.classList.add("active-model"),E.classList.add("active-slider"),h.style.display="inline-block")});const n=document.createElement("button"),s=document.createElement("i"),l=document.createElement("button"),L=document.createElement("i");L.classList.add("fa"),L.classList.add("fa-angle-right"),l.append(L),s.classList.add("fa"),s.classList.add("fa-angle-left"),n.append(s),document.getElementsByClassName("carousel-controls")[0].append(n),document.getElementsByClassName("carousel-controls")[0].append(l),l.addEventListener("click",()=>{const a=document.getElementsByClassName("active-slider")[0],f=document.getElementsByClassName("active-model")[0];let u=f.getAttribute("data-index");if(Number(u)!=t.length-1){f.style.display="none",f.classList.remove("active-model"),a.classList.remove("active-slider");const d=document.getElementsByClassName("model-image")[Number(u)+1],c=document.getElementsByClassName("slider-image")[Number(u)+1];Number(u)==0?(document.getElementById("modal").style.display="none",document.getElementById("modal").classList.remove("active-model"),c.classList.add("active-slider"),d.classList.add("active-model"),d.style.display="inline-block"):(d.classList.add("active-model"),c.classList.add("active-slider"),d.style.display="inline-block")}}),n.addEventListener("click",()=>{const a=document.getElementsByClassName("active-slider")[0],f=document.getElementsByClassName("active-model")[0];let u=f.getAttribute("data-index");if(Number(u)==0)u=0,document.getElementById("modal").style.display="inline-block",document.getElementById("modal").classList.add("active-model");else{f.style.display="none",f.classList.remove("active-model"),a.classList.remove("active-slider");const d=document.getElementsByClassName("model-image")[Number(u)-1],c=document.getElementsByClassName("slider-image")[Number(u)-1];Number(u)==0?(document.getElementById("modal").style.display="none",document.getElementById("modal").classList.remove("active-model"),c.classList.add("active-slider"),d.classList.add("active-model"),d.style.display="inline-block"):(d.classList.add("active-model"),c.classList.add("active-slider"),d.style.display="inline-block")}}),r==!1&&(console.log("clicked false now"),Q(v,i)),document.querySelector(".glider").addEventListener("glider-slide-visible",function(a){Glider(this),console.log("Slide Visible %s",a.detail.slide)}),document.querySelector(".glider").addEventListener("glider-slide-hidden",function(a){console.log("Slide Hidden %s",a.detail.slide)}),document.querySelector(".glider").addEventListener("glider-refresh",function(a){console.log("Refresh")}),document.querySelector(".glider").addEventListener("glider-loaded",function(a){console.log("Loaded")}),new Glider(document.querySelector(".glider"),{slidesToShow:1,slidesToScroll:1,itemWidth:200,draggable:!1,scrollLock:!1,rewind:!1,arrows:{prev:".glider-prev",next:".glider-next"},responsive:[{breakpoint:800,settings:{slidesToScroll:"auto",itemWidth:100,slidesToShow:"auto",exactWidth:!0}},{breakpoint:700,settings:{slidesToScroll:4,slidesToShow:4,arrows:!0}},{breakpoint:600,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:500,settings:{slidesToScroll:2,slidesToShow:3,arrows:!0,scrollLock:!1}}]})}const Z=[{image:"./modals/images/FishingBoat_004.jpg"},{image:"./modals/images/FishingBoat_002.jpg"},{image:"./modals/images/FishingBoat_001.jpg"},{image:"./modals/images/FishingBoat_003.jpg"},{image:"./modals/images/FishingBoat_005.jpg"},{image:"./modals/images/FishingBoat_006.jpg"},{image:"./modals/images/FishingBoat_007.jpg"},{image:"./modals/images/wire.jpg"}];let ee="./modals/Fishingboat.glb";U(Z,ee)});export default te();
