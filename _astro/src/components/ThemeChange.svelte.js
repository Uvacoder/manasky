import{S as t,i as e,s as a,e as c,a as o,t as s,b as l,c as r,d as n,f as d,g as m,h,j as u,k as i,l as g,m as f,n as v,o as E}from"../../../svelte.internal.v3.43.1-d0ff1b16.js";var b,p,A,S=(b=function(t,e){function a(){var t=document.querySelector("[data-toggle-theme]");!function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.classList.add(t.getAttribute("data-act-class"))})))}(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.addEventListener("click",(function(){var e=t.getAttribute("data-toggle-theme");if(e){var a=e.split(",");document.documentElement.getAttribute("data-theme")==a[0]?1==a.length?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",a[1]),localStorage.setItem("theme",a[1])):(document.documentElement.setAttribute("data-theme",a[0]),localStorage.setItem("theme",a[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.classList.toggle(this.getAttribute("data-act-class"))}))}))}))}function c(){!function(t=localStorage.getItem("theme")){var e;null!=t&&""!=t&&(localStorage.getItem("theme")&&""!=localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme",t),(e=document.querySelector("[data-set-theme='"+t.toString()+"']"))&&([...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))):(e=document.querySelector("[data-set-theme='']")).getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}(),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.addEventListener("click",(function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}))}))}function o(){!function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']")&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach((t=>{t.selected=!0})))}(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach((t=>{t.addEventListener("change",(function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach((t=>{t.selected=!0}))}))}))}t.exports={themeChange:function(t=!0){!0===t?document.addEventListener("DOMContentLoaded",(function(t){a(),o(),c()})):(a(),o(),c())}}},b(A={path:p,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&A.path)}},A.exports),A.exports),q=S.themeChange;function y(t){let e,a,E,b,p,A,S,q,y,w,x,I,L,M,Z,k,B,j,C,T;return{c(){e=c("div"),a=c("button"),E=o("svg"),b=o("title"),p=s("ionicons-v5-q"),A=o("path"),S=o("path"),q=o("path"),y=o("path"),w=o("path"),x=o("path"),I=o("path"),L=o("path"),M=o("path"),Z=l(),k=c("button"),B=o("svg"),j=o("title"),C=s("ionicons-v5-j"),T=o("path"),this.h()},l(t){e=r(t,"DIV",{class:!0});var c=n(e);a=r(c,"BUTTON",{"data-set-theme":!0,class:!0,"data-act-class":!0});var o=n(a);E=d(o,"svg",{class:!0,xmlns:!0,viewBox:!0});var s=n(E);b=d(s,"title",{});var l=n(b);p=m(l,"ionicons-v5-q"),l.forEach(h),A=d(s,"path",{d:!0}),n(A).forEach(h),S=d(s,"path",{d:!0}),n(S).forEach(h),q=d(s,"path",{d:!0}),n(q).forEach(h),y=d(s,"path",{d:!0}),n(y).forEach(h),w=d(s,"path",{d:!0}),n(w).forEach(h),x=d(s,"path",{d:!0}),n(x).forEach(h),I=d(s,"path",{d:!0}),n(I).forEach(h),L=d(s,"path",{d:!0}),n(L).forEach(h),M=d(s,"path",{d:!0}),n(M).forEach(h),s.forEach(h),o.forEach(h),Z=u(c),k=r(c,"BUTTON",{"data-set-theme":!0,class:!0,"data-act-class":!0});var i=n(k);B=d(i,"svg",{class:!0,xmlns:!0,viewBox:!0});var g=n(B);j=d(g,"title",{});var f=n(j);C=m(f,"ionicons-v5-j"),f.forEach(h),T=d(g,"path",{d:!0}),n(T).forEach(h),g.forEach(h),i.forEach(h),c.forEach(h),this.h()},h(){i(A,"d","M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"),i(S,"d","M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"),i(q,"d","M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"),i(y,"d","M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"),i(w,"d","M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"),i(x,"d","M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"),i(I,"d","M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"),i(L,"d","M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"),i(M,"d","M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"),i(E,"class","inline-block w-4 h-4 fill-current"),i(E,"xmlns","http://www.w3.org/2000/svg"),i(E,"viewBox","0 0 512 512"),i(a,"data-set-theme","light"),i(a,"class","btn btn-sm btn-ghost btn-square"),i(a,"data-act-class","btn-active"),i(T,"d","M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z"),i(B,"class","inline-block w-4 h-4 fill-current"),i(B,"xmlns","http://www.w3.org/2000/svg"),i(B,"viewBox","0 0 512 512"),i(k,"data-set-theme","dark"),i(k,"class","btn btn-sm btn-ghost btn-square"),i(k,"data-act-class","btn-active"),i(e,"class","flex gap-1")},m(t,c){g(t,e,c),f(e,a),f(a,E),f(E,b),f(b,p),f(E,A),f(E,S),f(E,q),f(E,y),f(E,w),f(E,x),f(E,I),f(E,L),f(E,M),f(e,Z),f(e,k),f(k,B),f(B,j),f(j,C),f(B,T)},p:v,i:v,o:v,d(t){t&&h(e)}}}function w(t){return E((()=>{q(!1)})),[]}class x extends t{constructor(t){super(),e(this,t,w,y,a,{})}}export{x as default};
