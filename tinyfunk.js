!function(e){const t=(e,t)=>{for(let n in t)e[n]=t[n];return e},n=(e,t)=>e<t?-1:t<e?1:0,r=(e,t)=>y(t,1,e),i=(e,t)=>e.bind(null,...t),l=e=>e.length,o=e=>(...t)=>e(t),c=(e,t)=>e<1?t:o(n=>{const r=e-l(n);return r>0?c(r,i(t,n)):t.apply(null,n)}),p=c(2,c),s=e=>p(l(e),e),u=s((e,t,n)=>{let r=e[n]||B;return"object"==typeof r&&(r=O(r)),r(t)}),a=s((e,t)=>e+t),d=s((e,t)=>g(t,[e])),f=s((e,t)=>e.apply(null,t)),y=s((e,n,r)=>{const i=t({},r);return i[e]=n,i}),h=p(3,([e,...t],n,r={})=>y(e,l(t)?h(t,n,r[e]):n,r)),m=p(2,(e,...t)=>f(e,t)),g=s((e,t)=>e.concat(t)),j=s((e,t)=>ye(f(e),z(t))),k=s((e,t)=>null==t||t!=t?e:t),P=s((e,n)=>{const r=t({},n);return delete r[e],r}),b=s(([e,...t],n)=>e?null==n[e]?n:l(t)?y(e,b(t,n[e]),n):P(e,n):n),v=s((e,t,n)=>e(n)||t(n)),O=s((e,t)=>T(u(e),t)),R=s((e,t)=>t.filter(e)),q=s((e,t)=>t.find(e)),A=s((e,t,n)=>s(e)(n,t)),B=e=>e,E=s((e,t,n,r)=>e(r)?t(r):n(r)),x=s((e,t)=>null!=t&&t.constructor===e||t instanceof e),w=s((e,t)=>t.join(e)),z=s((e,t)=>N(ce(t),e)),N=s((e,t)=>t.map(e)),T=s((e,t)=>{const n={};for(let r in t)n[r]=e(t[r],r);return n}),W=s((e,t)=>t.match(e)||[]),C=s((e,n)=>X(t,{},[e,n])),D=s((e,t)=>e*t),F=s((e,t)=>o(ye(f(t),Ae(e)))),G=s((e,t)=>({[e]:t})),H=s((e,t)=>{const n=X(r,{},e),i={};for(let e in t)n[e]||(i[e]=t[e]);return i}),I=s(i),J=p(3,(e,t,...n)=>f(e,g(n,t))),K=p(2,([e,...t],n={})=>l(t)?K(t,n[e]):n[e]),L=s((e,t,n)=>K(e,n)===t),M=s((e,t)=>fe(e,V(e,t))),Q=s((e,t)=>g([e],t)),S=s((e,t)=>t[e]),U=s((e,t,n)=>n[e]===t),V=s((e,t)=>N(A(S)(t),e)),X=s((e,t,n)=>n.reduce(e,t)),Y=s((e,t,n)=>{for(let r in n)t=e(t,n[r],r);return t}),Z=s((e,t,n)=>ge(...N(pe(A(e)),n))(t)),$=s((e,t,n)=>n.reduceRight(e,t)),_=s((e,t,n)=>he(...N(pe(A(e)),n))(t)),ee=s((e,t,n)=>n.replace(e,t)),te=s((e,t)=>t.slice(0).sort(e)),ne=s((e,t)=>te(ae(n,[e,e]),t)),re=s((e,t)=>t.split(e)),ie=s((e,t)=>(e(t),t)),le=s((e,t)=>e.test(t)),oe=s((e,t)=>Promise.resolve(t).then(e)),ce=s((e,t)=>t(e)),pe=F(1),se=()=>{},ue=s((e,t,n)=>e(n)?n:t(n)),ae=s((e,t)=>o(ye(f(e),N(u(t))))),de=s((e,t,n)=>e(n)?t(n):n),fe=s((e,t)=>{const n={};for(let r=l(e);r--;)n[e[r]]=t[r];return n}),ye=o(A($(ce))),he=o(A($(A(oe)))),me=o(A(X(ce))),ge=o(A(X(A(oe)))),je=ye($(ce,se),N(f(E))),ke=de(Array.isArray,X((e,t)=>g(e,ke(t)),[])),Pe=s((e,t)=>N(S(e),t)),be=s((e,t,n)=>n.slice(e,t)),ve=S(0),Oe=be(0,-1),Re=ye(ve,be(-1,void 0)),qe=be(1,1/0),Ae=be(0),Be=Y((e,t,n)=>d(n,e),[]),Ee=Y(A(d),[]),xe=s((e,t)=>X((e=>(t,n)=>y(e(n),n,t))(e),{},t)),we=s((e,t)=>ye(Ee,xe(e))(t));t(e,{add:a,append:d,apply:f,assoc:y,assocPath:h,call:m,compose:ye,composeP:he,concat:g,cond:je,constant:e=>()=>e,converge:j,curry:s,curryN:p,defaultTo:k,dissoc:P,dissocPath:b,either:v,evolve:O,filter:R,find:q,flatten:ke,flip:A,head:ve,identity:B,ifElse:E,indexBy:xe,init:Oe,is:x,join:w,juxt:z,keys:Be,last:Re,length:l,map:N,mapObj:T,match:W,merge:C,multiply:D,nAry:F,not:e=>!e,objOf:G,omit:H,partial:I,partialRight:J,path:K,pathEq:L,pick:M,pipe:me,pipeP:ge,pluck:Pe,prepend:Q,prop:S,propEq:U,props:V,reduce:X,reduceObj:Y,reduceP:Z,reduceRight:$,reduceRightP:_,replace:ee,slice:be,sort:te,sortBy:ne,split:re,tail:qe,take:Ae,tap:ie,test:le,then:oe,thrush:ce,unapply:o,unary:pe,uniqBy:we,unit:se,unless:ue,useWith:ae,values:Ee,when:de,zipObj:fe})}("undefined"==typeof tinyfunk?tinyfunk={}:tinyfunk);
