import{S as t,i as e,s as a,e as o,a as c,b as l,c as r,d as s,f as d,g as m,h as n,j as h,k as u,l as i,n as g,o as f}from"../../../svelte.internal.v3.43.1-6b706b9a.js";var p,E,A,v=(p=function(t,e){function a(){var t=document.querySelector("[data-toggle-theme]");!function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.classList.add(t.getAttribute("data-act-class"))})))}(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.addEventListener("click",(function(){var e=t.getAttribute("data-toggle-theme");if(e){var a=e.split(",");document.documentElement.getAttribute("data-theme")==a[0]?1==a.length?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",a[1]),localStorage.setItem("theme",a[1])):(document.documentElement.setAttribute("data-theme",a[0]),localStorage.setItem("theme",a[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.classList.toggle(this.getAttribute("data-act-class"))}))}))}))}function o(){!function(t=localStorage.getItem("theme")){var e;null!=t&&""!=t&&(localStorage.getItem("theme")&&""!=localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme",t),(e=document.querySelector("[data-set-theme='"+t.toString()+"']"))&&([...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))):(e=document.querySelector("[data-set-theme='']")).getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}(),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.addEventListener("click",(function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}))}))}function c(){!function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']")&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach((t=>{t.selected=!0})))}(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach((t=>{t.addEventListener("change",(function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach((t=>{t.selected=!0}))}))}))}t.exports={themeChange:function(t=!0){!0===t?document.addEventListener("DOMContentLoaded",(function(t){a(),c(),o()})):(a(),c(),o())}}},p(A={path:E,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&A.path)}},A.exports),A.exports),b=v.themeChange;function S(t){let e,a,f,p,E,A,v,b,S,w,y,q,x,I;return{c(){e=o("div"),a=c("svg"),f=c("path"),p=l(),E=c("svg"),A=c("path"),v=c("path"),b=c("path"),S=c("path"),w=c("path"),y=c("path"),q=c("path"),x=c("path"),I=c("path"),this.h()},l(t){e=r(t,"DIV",{class:!0,"data-toggle-theme":!0,"data-act-class":!0});var o=s(e);a=d(o,"svg",{class:!0,xmlns:!0,viewBox:!0});var c=s(a);f=d(c,"path",{d:!0}),s(f).forEach(m),c.forEach(m),p=n(o),E=d(o,"svg",{class:!0,xmlns:!0,viewBox:!0});var l=s(E);A=d(l,"path",{d:!0}),s(A).forEach(m),v=d(l,"path",{d:!0}),s(v).forEach(m),b=d(l,"path",{d:!0}),s(b).forEach(m),S=d(l,"path",{d:!0}),s(S).forEach(m),w=d(l,"path",{d:!0}),s(w).forEach(m),y=d(l,"path",{d:!0}),s(y).forEach(m),q=d(l,"path",{d:!0}),s(q).forEach(m),x=d(l,"path",{d:!0}),s(x).forEach(m),I=d(l,"path",{d:!0}),s(I).forEach(m),l.forEach(m),o.forEach(m),this.h()},h(){h(f,"d","M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z"),h(a,"class","m-[.5em] w-4 h-4 fill-current group-first:ml-[-1.7em]"),h(a,"xmlns","http://www.w3.org/2000/svg"),h(a,"viewBox","0 0 512 512"),h(A,"d","M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"),h(v,"d","M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"),h(b,"d","M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"),h(S,"d","M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"),h(w,"d","M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"),h(y,"d","M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"),h(q,"d","M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"),h(x,"d","M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"),h(I,"d","M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"),h(E,"class","m-[.5em] w-4 h-4 fill-current"),h(E,"xmlns","http://www.w3.org/2000/svg"),h(E,"viewBox","0 0 512 512"),h(e,"class","overflow-hidden btn btn-sm btn-circle btn-ghost"),h(e,"data-toggle-theme","light"),h(e,"data-act-class","group")},m(t,o){u(t,e,o),i(e,a),i(a,f),i(e,p),i(e,E),i(E,A),i(E,v),i(E,b),i(E,S),i(E,w),i(E,y),i(E,q),i(E,x),i(E,I)},p:g,i:g,o:g,d(t){t&&m(e)}}}function w(t){return f((()=>{b(!1)})),[]}class y extends t{constructor(t){super(),e(this,t,w,S,a,{})}}export{y as default};