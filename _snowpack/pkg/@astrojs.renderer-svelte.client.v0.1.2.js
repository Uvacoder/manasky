import{S as t,i as s,s as e,q as a,H as n,r,u as o,l as c,I as $,J as l,z as f,K as i,y as m,h as p,A as u,L as d,M as _,N as g,e as h,c as v,d as x,n as y}from"../../svelte.internal.v3.43.1-39eb4cc6.js";function w(t){let s,e=t[1]&&function(t){let s;return{c(){s=h("astro-fragment")},l(t){s=v(t,"ASTRO-FRAGMENT",{}),x(s).forEach(p)},m(e,a){c(e,s,a),s.innerHTML=t[1]},p:y,d(t){t&&p(s)}}}(t);return{c(){e&&e.c(),s=n()},l(t){e&&e.l(t),s=n()},m(t,a){e&&e.m(t,a),c(t,s,a)},p(t,s){t[1]&&e.p(t,s)},d(t){e&&e.d(t),t&&p(s)}}}function A(t){let s,e,_;const h=[t[2]];var v=t[0];function x(t){let s={$$slots:{default:[w]},$$scope:{ctx:t}};for(let t=0;t<h.length;t+=1)s=d(s,h[t]);return{props:s}}return v&&(s=new v(x(t))),{c(){s&&a(s.$$.fragment),e=n()},l(t){s&&r(s.$$.fragment,t),e=n()},m(t,a){s&&o(s,t,a),c(t,e,a),_=!0},p(t,[n]){const r=4&n?$(h,[l(t[2])]):{};if(16&n&&(r.$$scope={dirty:n,ctx:t}),v!==(v=t[0])){if(s){g();const t=s;f(t.$$.fragment,1,0,(()=>{u(t,1)})),i()}v?(s=new v(x(t)),a(s.$$.fragment),m(s.$$.fragment,1),o(s,e.parentNode,e)):s=null}else v&&s.$set(r)},i(t){_||(s&&m(s.$$.fragment,t),_=!0)},o(t){s&&f(s.$$.fragment,t),_=!1},d(t){t&&p(e),s&&u(s,t)}}}function M(t,s,e){const{__astro_component:a,__astro_children:n,...r}=s;return t.$$set=t=>{e(3,s=d(d({},s),_(t)))},s=_(s),[a,n,r]}class N extends t{constructor(t){super(),s(this,t,M,A,e,{})}}var T=t=>(s,e,a)=>{try{new N({target:t,props:{__astro_component:s,__astro_children:a,...e},hydrate:!0})}catch(t){}};export{T as default};
