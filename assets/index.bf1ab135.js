import{c as e,a as t,r,o,b as n,d as s,e as a}from"./vendor.2f598ad1.js";let i;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(d)},onload(){r(self[t].moduleMap[a]),n(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/vue3-template/assets/");const d={},c=function(e,t){if(!t)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in d)return;d[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":i,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},l=[{path:"/",redirect:"/index"},{path:"/index",component:()=>c((()=>__import__("./index.e61d81ba.js")),["/vue3-template/assets/index.e61d81ba.js","/vue3-template/assets/vendor.2f598ad1.js"])},{path:"/reactive",component:()=>c((()=>__import__("./index.5811384a.js")),["/vue3-template/assets/index.5811384a.js","/vue3-template/assets/vendor.2f598ad1.js"])},{path:"/router",component:()=>c((()=>__import__("./index.ffd43e4c.js")),["/vue3-template/assets/index.ffd43e4c.js","/vue3-template/assets/vendor.2f598ad1.js"])}],p=e({history:t(),scrollBehavior:()=>({y:0}),routes:l});const m=a({expose:[],setup:e=>(e,t)=>{const a=r("router-view");return o(),n("div",null,[s(a)])}});m.use(p),m.mount("#app");
