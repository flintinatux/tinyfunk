const{assign:e}=Object,t=e=>e.length,c=(e,r)=>e<1?r:(...n)=>{const l=e-t(n);return l>0?c(l,r.bind(null,...n)):r.apply(null,n)},r=c(2,c),n=e=>r(t(e),e),l=n((e,t)=>e+t),o=n((e,t)=>e.apply(null,t)),p=n((t,c,r)=>{const n=e({},r);return n[t]=c,n}),s=n(([e,...c],r,n)=>p(e,t(c)?s(c,r,n[e]):r,n)),a=r(2,(e,...t)=>o(e,t)),u=(...e)=>b(q(B))(e),i=n((e,t)=>e.concat(t)),d=n((e,t)=>u(o(e),f(t))),h=n((t,c)=>{const r=e({},c);return delete r[t],r}),m=n(([e,...c],r)=>e?null==r[e]?r:t(c)?p(e,m(c,r[e]),r):h(e,r):r),y=n((e,t,c)=>{let r=e[c]||j;return"object"==typeof r&&(r=g(r)),r(t)}),g=n((e,t)=>O(y(e),t)),b=n((e,t,c)=>n(e)(c,t)),j=e=>e,f=n((e,t)=>v(B(t),e)),v=n((e,t)=>t.map(e)),O=n((e,t)=>{const c={};for(let r in t)c[r]=e(t[r],r);return c}),x=n((e,t)=>t.match(e)||[]),P=n((t,c)=>e({},t,c)),R=n((e,t)=>e*t),w=n(([e,...c],r)=>t(c)?w(c,r[e]):r[e]),z=n((e,t)=>t[e]),N=n((e,t)=>v(b(z)(t),e)),k=n((e,t,c)=>c.reduce(e,t)),q=n((e,t,c)=>c.reduceRight(e,t)),A=n((e,t,c)=>c.replace(e,t)),B=n((e,t)=>t(e)),C=n((e,t,c)=>e(c)?c:t(c)),D=n((e,t,c)=>e(c)?t(c):c),E=n((e,c)=>{const r={};for(let n=0;n<t(e);n++)r[e[n]]=c[n];return r});module.exports={add:l,apply:o,assoc:p,assocPath:s,call:a,compose:u,concat:i,constant:e=>()=>e,converge:d,curry:n,curryN:r,dissoc:h,dissocPath:m,evolve:g,flip:b,identity:j,juxt:f,length:t,map:v,mapObj:O,match:x,merge:P,multiply:R,path:w,pipe:(...e)=>b(k(B))(e),prop:z,props:N,reduce:k,reduceRight:q,replace:A,thrush:B,unless:C,when:D,zipObj:E};
