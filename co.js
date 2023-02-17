var M=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,N=(e,a)=>{for(var t in a||(a={}))P.call(a,t)&&C(e,t,a[t]);if(y)for(var t of y(a))j.call(a,t)&&C(e,t,a[t]);return e},x=(e,a)=>L(e,O(a));import{R as D,j as l,a as r,r as h,M as $,b as U,c as H,B as p,F as K,d as _,I as w,h as q,e as G,f as Q,C as W}from"./vendor.4e331085.js";const z=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};z();async function J(e){return fetch("https://api.github.com/users/"+e).then(a=>a.json()).then(a=>a)}const B=[{name:"Theme 1",key:0,colors:{bg:"#36413E",head:"#D7D6D6",border:"#8D8D92",para:"#BEB2C8","av-border":"#8D8D92"},"has-av-border":!0,font:"Inter"},{name:"Theme 2",key:1,colors:{bg:"#2F4858",head:"#F6AE2D",border:"#33658A",para:"#86BBD8","av-border":"#33658A"},"has-av-border":!1,font:"League Spartan"},{name:"Theme 3",key:2,colors:{bg:"#49306B",head:"#E1CDB5",border:"#635380",para:"#ACE4AA","av-border":"#635380"},"has-av-border":!0,font:"Work Sans"}],V=D.forwardRef((e,a)=>{const t=B[e.theme],i={backgroundColor:t.colors.bg,borderColor:t.colors.border},n={color:t.colors.head,fontFamily:`'${t.font}', sans-serif`},o={color:t.colors.para,fontFamily:`'${t.font}', sans-serif`},d={border:t["has-av-border"]?`2px solid ${t.colors["av-border"]}`:"none"};return l("div",{ref:a,className:"card",style:i,children:[r("div",{className:"card-av",children:r("img",{src:e.avatar,alt:"avatar",style:d})}),l("div",{className:"card-details",children:[l("p",{className:"card-username",style:o,children:["@",e.usern]}),l("h2",{style:n,children:["Hey There! I'm ",r("span",{className:"name",style:o,children:e.name}),"!"]}),r("p",{className:"about",style:o,children:e.details?e.details:""})]})]})}),u=document.createElement("canvas");function X(){const[e,a]=h.exports.useState([{usern:"username",detail:"developer | designer"}]),[t,i]=h.exports.useState(["https://i.pinimg.com/originals/f5/98/38/f598386feaf1c9b7a04d48f0d9efcdff.jpg"]),[n,o]=h.exports.useState(["user"]),[d,S]=h.exports.useState(["Theme 1"]),[k,A]=h.exports.useState(0),f=h.exports.useRef(),T=B.map(s=>r($,{id:s.name,onClick:()=>I(s.key,s.name),children:s.name})),g=async s=>{a(x(N({},e),{[s.target.name]:s.target.value})),console.log(e)},v=async s=>{s.preventDefault();const c=await J(e.usern);console.log(c),c.message!=="Not Found"?(i(c.avatar_url),o(c.name),setUserName(c.login)):alert("User not found!")},R=async()=>{const s=f.current,c=await q(s,{scale:3,allowTaint:!0,useCORS:!0});u.width=883,u.height=300;var E=u.getContext("2d"),F=c.width/c.height;E.drawImage(c,0,0,c.width,c.height,0,0,883,883/F);const b=u.toDataURL("image/png"),m=document.createElement("a");typeof m.download=="string"?(m.href=b,m.download="image.png",document.body.appendChild(m),m.click(),document.body.removeChild(m)):window.open(b)},I=(s,c)=>{S(c),A(s)};return r(D.Fragment,{children:l("div",{className:"App",children:[r("div",{className:"app-preview",children:r(V,{theme:k,avatar:t,name:n,usern:e.usern,details:e.detail,ref:f})}),r("div",{className:"app-nav-bar",children:l("div",{className:"nav-container",children:[r("div",{className:"nav-buttons",children:l(U,{children:[r(H,{as:p,rightIcon:r(K,{}),borderRadius:"0",children:d}),r(_,{children:T})]})}),r("div",{className:"nav-form",children:l("form",{onSubmit:v,children:[r(w,{name:"usern",placeholder:"Enter username",onChange:g,marginBottom:"5px",marginTop:"5px",borderRadius:"0"}),r(w,{name:"detail",placeholder:"Enter additional detail",onChange:g,marginTop:"0",marginBottom:"5px",borderRadius:"0"}),r(p,{type:"submit",onClick:v,marginBottom:"5px",borderRadius:"0",children:"Generate Banner"}),r(p,{onClick:R,borderRadius:"0",children:"Download"})]})})]})}),l("p",{className:"footer",children:["Made with \u2764 by ",r("a",{href:"https://github.com/asheeeshh",target:"blank",children:"@asheeeshh"})]}),r("p",{className:"footer last",children:"\xA9 ashish | 2021-present"})]})})}const Y=G({config:{initialColorMode:"dark",useSystemColorMode:!1}});Q.render(r(W,{theme:Y,children:r(X,{})}),document.getElementById("root"));
