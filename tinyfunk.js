!function(e){const t=(e,t)=>{for(let n in t)e[n]=t[n];return e},n=(e,t)=>e<t?-1:t<e?1:0,r=(e,t)=>h(t,1,e),l=(e,t)=>e.bind(null,...t),o=e=>e.length,i=e=>(...t)=>e(t),p=(e,t)=>e<1?t:i(n=>{const r=e-o(n);return r>0?p(r,l(t,n)):t.apply(null,n)}),c=p(2,p),s=e=>c(o(e),e),u=s((e,t,n)=>{let r=e[n]||E;return"object"==typeof r&&(r=P(r)),r(t)}),a=s((e,t)=>e+t),d=s((e,t)=>j(t,[e])),f=s((e,t)=>e.apply(null,t)),h=s((e,n,r)=>{const l=t({},r);return l[e]=n,l}),y=s(([e,...t],n,r)=>h(e,o(t)?y(t,n,r[e]):n,r)),m=c(2,(e,...t)=>f(e,t)),j=s((e,t)=>e.concat(t)),g=s((e,t)=>oe(f(e),z(t))),b=s((e,t)=>null==t||t!=t?e:t),v=s((e,n)=>{const r=t({},n);return delete r[e],r}),k=s(([e,...t],n)=>e?null==n[e]?n:o(t)?h(e,k(t,n[e]),n):v(e,n):n),P=s((e,t)=>N(u(e),t)),O=s((e,t)=>t.filter(e)),R=s((e,t,n)=>s(e)(n,t)),E=e=>e,q=s((e,t,n,r)=>e(r)?t(r):n(r)),w=s((e,t)=>null!=t&&t.constructor===e||t instanceof e),x=s((e,t)=>t.join(e)),z=s((e,t)=>B(ee(t),e)),B=s((e,t)=>t.map(e)),N=s((e,t)=>{const n={};for(let r in t)n[r]=e(t[r],r);return n}),T=s((e,t)=>t.match(e)||[]),W=s((e,n)=>Q(t,{},[e,n])),A=s((e,t)=>e*t),C=s((e,t)=>({[e]:t})),D=s((e,t)=>{const n=Q(r,{},e),l={};for(let e in t)n[e]||(l[e]=t[e]);return l}),F=s(l),G=c(3,(e,t,...n)=>f(e,j(n,t))),H=s(([e,...t],n)=>o(t)?H(t,n[e]):n[e]),I=s((e,t)=>le(e,M(e,t))),J=s((e,t)=>j([e],t)),K=s((e,t)=>t[e]),L=s((e,t,n)=>n[e]===t),M=s((e,t)=>B(R(K)(t),e)),Q=s((e,t,n)=>n.reduce(e,t)),S=s((e,t,n)=>{for(let r in n)t=e(t,n[r],r);return t}),U=s((e,t,n)=>n.reduceRight(e,t)),V=s((e,t,n)=>n.replace(e,t)),X=s((e,t)=>t.slice(0).sort(e)),Y=s((e,t)=>X(te(n,[e,e]),t)),Z=s((e,t)=>t.split(e)),$=s((e,t)=>(e(t),t)),_=s((e,t)=>Promise.resolve(t).then(e)),ee=s((e,t)=>t(e)),te=s((e,t)=>i(oe(f(e),B(u(t))))),ne=s((e,t,n)=>e(n)?n:t(n)),re=s((e,t,n)=>e(n)?t(n):n),le=s((e,t)=>{const n={};for(let r=o(e);r--;)n[e[r]]=t[r];return n}),oe=i(R(U(ee))),ie=i(R(U(R(_)))),pe=i(R(Q(ee))),ce=i(R(Q(R(_)))),se=s((e,t,n)=>n.slice(e,t)),ue=K(0),ae=se(0,-1),de=oe(ue,se(-1,void 0)),fe=se(1,1/0),he=S((e,t,n)=>d(n,e),[]),ye=g(M,[he,E]);t(e,{add:a,append:d,apply:f,assoc:h,assocPath:y,call:m,compose:oe,composeP:ie,concat:j,constant:e=>()=>e,converge:g,curry:s,curryN:c,defaultTo:b,dissoc:v,dissocPath:k,evolve:P,filter:O,flip:R,head:ue,identity:E,ifElse:q,init:ae,is:w,join:x,juxt:z,keys:he,last:de,length:o,map:B,mapObj:N,match:T,merge:W,multiply:A,not:e=>!e,objOf:C,omit:D,partial:F,partialRight:G,path:H,pick:I,pipe:pe,pipeP:ce,prepend:J,prop:K,propEq:L,props:M,reduce:Q,reduceObj:S,reduceRight:U,replace:V,slice:se,sort:X,sortBy:Y,split:Z,tail:fe,tap:$,then:_,thrush:ee,unapply:i,unless:ne,useWith:te,values:ye,when:re,zipObj:le})}("undefined"==typeof tinyfunk?tinyfunk={}:tinyfunk);
