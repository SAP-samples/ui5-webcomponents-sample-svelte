var qe=Object.defineProperty,Te=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var me=(t,e,i)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,fe=(t,e)=>{for(var i in e||(e={}))xe.call(e,i)&&me(t,i,e[i]);if(ue)for(var i of ue(e))Ee.call(e,i)&&me(t,i,e[i]);return t},pe=(t,e)=>Te(t,Ie(e));import{S as le,i as ne,s as se,e as f,t as X,a as x,b as y,c as u,d as W,f as o,l as L,g as he,n as ge,h as J,r as we,j as De,k as Ce,m as ee,o as te,p as K,q as R,u as ie,v as Se,w as Ae,x as Me,y as Oe,z as Y,A as ke,B as Le,C as _e,D as je,E as Z}from"./vendor.b7a50ae1.js";const ze=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(l){if(l.ep)return;l.ep=!0;const n=i(l);fetch(l.href,n)}};ze();function Pe(t){let e,i,s,l=t[0].desc+"",n,p,a=t[0].deadline+"",h,r,c,g,C,w,S,E,k;return{c(){e=f("ui5-li-custom"),i=f("div"),s=f("span"),n=X(l),p=X(" - finish before: "),h=X(a),r=x(),c=f("div"),g=f("ui5-button"),g.textContent="Edit",C=x(),w=f("ui5-button"),w.textContent="Delete",y(s,"class","li-content-text svelte-sdsuow"),u(g,"class","edit-btn svelte-sdsuow"),u(w,"design","Negative"),y(c,"class","li-content-actions"),y(i,"class","li-content svelte-sdsuow"),u(e,"data-key",t[1]),u(e,"selected",S=t[0].done?"true":void 0)},m(T,I){W(T,e,I),o(e,i),o(i,s),o(s,n),o(s,p),o(s,h),o(i,r),o(i,c),o(c,g),o(c,C),o(c,w),E||(k=[L(g,"click",t[2]),L(w,"click",t[3])],E=!0)},p(T,[I]){I&1&&l!==(l=T[0].desc+"")&&he(n,l),I&1&&a!==(a=T[0].deadline+"")&&he(h,a),I&2&&u(e,"data-key",T[1]),I&1&&S!==(S=T[0].done?"true":void 0)&&u(e,"selected",S)},i:ge,o:ge,d(T){T&&J(e),E=!1,we(k)}}}function Be(t,e,i){let{item:s}=e,{datakey:l}=e;const n=De(),p=()=>{n("item-edit",{id:s.id})},a=()=>{n("item-delete",{id:s.id})};return t.$$set=h=>{"item"in h&&i(0,s=h.item),"datakey"in h&&i(1,l=h.datakey)},[s,l,p,a]}class Ne extends le{constructor(e){super(),ne(this,e,Be,Pe,se,{item:0,datakey:1})}}function ve(t,e,i){const s=t.slice();return s[4]=e[i],s}function be(t,e){let i,s,l;return s=new Ne({props:{item:e[4],datakey:e[4].id}}),s.$on("item-edit",e[2]),s.$on("item-delete",e[3]),{key:t,first:null,c(){i=Ce(),ee(s.$$.fragment),this.first=i},m(n,p){W(n,i,p),te(s,n,p),l=!0},p(n,p){e=n;const a={};p&1&&(a.item=e[4]),p&1&&(a.datakey=e[4].id),s.$set(a)},i(n){l||(K(s.$$.fragment,n),l=!0)},o(n){R(s.$$.fragment,n),l=!1},d(n){n&&J(i),ie(s,n)}}}function Ue(t){let e,i=[],s=new Map,l,n,p,a=t[0];const h=r=>r[4].id;for(let r=0;r<a.length;r+=1){let c=ve(t,a,r),g=h(c);s.set(g,i[r]=be(g,c))}return{c(){e=f("ui5-list");for(let r=0;r<i.length;r+=1)i[r].c();u(e,"mode","MultiSelect")},m(r,c){W(r,e,c);for(let g=0;g<i.length;g+=1)i[g].m(e,null);l=!0,n||(p=L(e,"selection-change",t[1]),n=!0)},p(r,[c]){c&1&&(a=r[0],Se(),i=Ae(i,c,h,1,r,a,s,e,Oe,be,null,ve),Me())},i(r){if(!l){for(let c=0;c<a.length;c+=1)K(i[c]);l=!0}},o(r){for(let c=0;c<i.length;c+=1)R(i[c]);l=!1},d(r){r&&J(e);for(let c=0;c<i.length;c+=1)i[c].d();n=!1,p()}}}function $e(t,e,i){let{items:s}=e;function l(a){Y.call(this,t,a)}function n(a){Y.call(this,t,a)}function p(a){Y.call(this,t,a)}return t.$$set=a=>{"items"in a&&i(0,s=a.items)},[s,l,n,p]}class ye extends le{constructor(e){super(),ne(this,e,$e,Ue,se,{items:0})}}const Ge=[{id:1,desc:"Get some carrots",deadline:"27/7/2018",done:!1},{id:2,desc:"Do some magic",deadline:"22/7/2018",done:!1},{id:3,desc:"Go to the gym",deadline:"24/7/2018",done:!1},{id:4,desc:"Buy milk",deadline:"30/7/2018",done:!1}],G=ke(Ge),Ve=[{id:5,desc:"Eat some fruits",deadline:"29/7/2018",done:!0}],F=ke(Ve);var Fe="/ui5-webcomponents-sample-svelte/assets/UI5-orange-pheonix-logo.8ac59512.png";function He(t){let e,i,s,l,n,p,a,h,r,c,g,C,w,S,E,k,T,I,D,H,A,M,O,V,d,v,_,m,b,z,P,oe,j,B,ae,N,U,Q,de;return k=new ye({props:{items:t[6]}}),k.$on("item-edit",t[13]),k.$on("item-delete",t[12]),k.$on("selection-change",t[10]),D=new ye({props:{items:t[5]}}),D.$on("item-edit",t[13]),D.$on("item-delete",t[12]),D.$on("selection-change",t[11]),{c(){e=f("main"),i=f("header"),s=f("ui5-shellbar"),l=f("img"),p=x(),a=f("section"),h=f("div"),r=f("ui5-input"),c=x(),g=f("ui5-date-picker"),C=x(),w=f("ui5-button"),w.textContent="Add Todo",S=x(),E=f("section"),ee(k.$$.fragment),T=x(),I=f("ui5-panel"),ee(D.$$.fragment),H=x(),A=f("ui5-dialog"),M=f("div"),O=f("div"),V=f("ui5-label"),V.textContent="Title:",d=x(),v=f("ui5-textarea"),_=x(),m=f("div"),b=f("ui5-label"),b.textContent="Date:",z=x(),P=f("ui5-date-picker"),oe=x(),j=f("div"),B=f("ui5-button"),B.textContent="Cancel",ae=x(),N=f("ui5-button"),N.textContent="Save",y(l,"class","app-header-logo svelte-1hmqf7"),y(l,"slot","logo"),Le(l.src,n=Fe)||y(l,"src",n),y(l,"alt","ui5 orange pheonix logo"),u(s,"primary-title",Ke),y(i,"class","app-header"),u(r,"id","add-input"),u(r,"placeholder","My Todo ..."),u(r,"class","svelte-1hmqf7"),u(g,"id","date-picker"),u(g,"format-pattern","dd/MM/yyyy"),u(g,"class","svelte-1hmqf7"),u(w,"id","add-btn"),u(w,"design","Emphasized"),u(w,"class","svelte-1hmqf7"),y(h,"class","create-todo-wrapper svelte-1hmqf7"),u(I,"header-text","Completed Tasks"),y(E,"class","list-todo-wrapper svelte-1hmqf7"),y(a,"class","app-content svelte-1hmqf7"),u(v,"class","title-textarea svelte-1hmqf7"),u(v,"show-exceeded-text",""),u(v,"maxlength","24"),u(v,"value",t[3]),y(O,"class","edit-wrapper"),u(P,"format-pattern","dd/MM/yyyy"),u(P,"value",t[4]),y(m,"class","edit-wrapper date-edit-fields svelte-1hmqf7"),y(M,"class","dialog-content svelte-1hmqf7"),u(B,"class","dialog-footer-btn--cancel svelte-1hmqf7"),u(B,"design","Transparent"),u(N,"class","dialog-footer-btn--save"),u(N,"design","Emphasized"),y(j,"class","dialog-footer svelte-1hmqf7"),y(j,"data-ui5-slot","footer"),u(A,"header-text",Re),y(e,"class","app-container svelte-1hmqf7")},m(q,$){W(q,e,$),o(e,i),o(i,s),o(s,l),o(e,p),o(e,a),o(a,h),o(h,r),o(h,c),o(h,g),o(h,C),o(h,w),o(a,S),o(a,E),te(k,E,null),o(E,T),o(E,I),te(D,I,null),o(e,H),o(e,A),o(A,M),o(M,O),o(O,V),o(O,d),o(O,v),t[16](v),o(M,_),o(M,m),o(m,b),o(m,z),o(m,P),t[17](P),o(A,oe),o(A,j),o(j,B),o(j,ae),o(j,N),t[18](A),U=!0,Q||(de=[L(r,"input",t[7]),L(g,"input",t[8]),L(w,"click",t[9]),L(B,"click",t[15]),L(N,"click",t[14])],Q=!0)},p(q,[$]){const re={};$&64&&(re.items=q[6]),k.$set(re);const ce={};$&32&&(ce.items=q[5]),D.$set(ce),(!U||$&8)&&u(v,"value",q[3]),(!U||$&16)&&u(P,"value",q[4])},i(q){U||(K(k.$$.fragment,q),K(D.$$.fragment,q),U=!0)},o(q){R(k.$$.fragment,q),R(D.$$.fragment,q),U=!1},d(q){q&&J(e),ie(k),ie(D),t[16](null),t[17](null),t[18](null),Q=!1,we(de)}}}const Ke="UI5 Web Components Svelte Sample Application",Re="Edit Todo";function We(t,e,i){let s,l;_e(t,F,d=>i(5,s=d)),_e(t,G,d=>i(6,l=d)),je("sap_horizon");let n,p,a,h,r,c="",g="",C;const w=d=>{h=d.target.value},S=d=>{r=d.target.value},E=d=>{const v={id:l.length+1,desc:h,deadline:r,done:!1};G.update(_=>[..._,v])},k=d=>{const _=d.detail.selectedItems[0].getAttribute("data-key"),m=l.filter(b=>_===b.id.toString())[0];m.done=!0,F.update(b=>[...b,m]),G.update(b=>b.filter(z=>_!==z.id.toString()))},T=d=>{const _=d.detail.selectedItems.map(b=>b.getAttribute("data-key")),m=s.filter(b=>_.indexOf(b.id.toString())===-1).map(b=>pe(fe({},b),{done:!1}));F.update(b=>b.filter(z=>_.indexOf(z.id.toString())>-1)),G.update(b=>[...b,...m])},I=d=>{const v=l.filter(m=>m.id!==d.detail.id);G.set(v);const _=s.filter(m=>m.id!==d.detail.id);F.set(_)},D=d=>{const v=l.filter(m=>m.id===d.detail.id);let _;v.length?_=v[0]:_=s.filter(m=>m.id===d.detail.id)[0],i(3,c=_.desc),i(4,g=_.deadline),C=_.id,n.show()},H=()=>{const d=p.value,v=a.value;G.update(_=>_.map(m=>(m.id===C&&(m.desc=d,m.deadline=v),m))),F.update(_=>_.map(m=>(m.id===C&&(m.desc=d,m.deadline=v),m))),n.close()},A=()=>{n.close()};function M(d){Z[d?"unshift":"push"](()=>{p=d,i(1,p)})}function O(d){Z[d?"unshift":"push"](()=>{a=d,i(2,a)})}function V(d){Z[d?"unshift":"push"](()=>{n=d,i(0,n)})}return[n,p,a,c,g,s,l,w,S,E,k,T,I,D,H,A,M,O,V]}class Je extends le{constructor(e){super(),ne(this,e,We,He,se,{})}}new Je({target:document.getElementById("app")});
