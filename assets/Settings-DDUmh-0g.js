import{r as n,I as S,_ as b,z as B,Y as O,C as j,a9 as U,aa as V,ab as E,c as w,p as T,ac as Y,ad as G,S as K,ae as W,P as o,X as N,Z as X}from"./index-wlsBC8jB.js";var Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},q=function(a,t){return n.createElement(S,b({},a,{ref:t,icon:Z}))},D=n.forwardRef(q),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},Q=function(a,t){return n.createElement(S,b({},a,{ref:t,icon:J}))},ee=n.forwardRef(Q);function te(e,a,t){return typeof t=="boolean"?t:e.length?!0:B(a).some(r=>r.type===O)}var L=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};function m(e){let{suffixCls:a,tagName:t,displayName:s}=e;return r=>n.forwardRef((l,d)=>n.createElement(r,Object.assign({ref:d,suffixCls:a,tagName:t},l)))}const v=n.forwardRef((e,a)=>{const{prefixCls:t,suffixCls:s,className:r,tagName:u}=e,l=L(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=n.useContext(j),i=d("layout",t),[g,x,h]=E(i),C=s?`${i}-${s}`:i;return g(n.createElement(u,Object.assign({className:w(t||C,r,x,h),ref:a},l)))}),se=n.forwardRef((e,a)=>{const{direction:t}=n.useContext(j),[s,r]=n.useState([]),{prefixCls:u,className:l,rootClassName:d,children:i,hasSider:g,tagName:x,style:h}=e,C=L(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),P=U(C,["suffixCls"]),{getPrefixCls:$,className:z,style:A}=V("layout"),f=$("layout",u),I=te(s,i,g),[R,_,F]=E(f),H=w(f,{[`${f}-has-sider`]:I,[`${f}-rtl`]:t==="rtl"},z,l,d,_,F),M=n.useMemo(()=>({siderHook:{addSider:p=>{r(y=>[].concat(T(y),[p]))},removeSider:p=>{r(y=>y.filter(k=>k!==p))}}}),[]);return R(n.createElement(Y.Provider,{value:M},n.createElement(x,Object.assign({ref:a,className:H,style:Object.assign(Object.assign({},A),h)},P),i)))}),ae=m({tagName:"div",displayName:"Layout"})(se),re=m({suffixCls:"header",tagName:"header",displayName:"Header"})(v),ne=m({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(v),oe=m({suffixCls:"content",tagName:"main",displayName:"Content"})(v),c=ae;c.Header=re;c.Footer=ne;c.Content=oe;c.Sider=O;c._InternalSiderContext=G;const{Sider:ce,Content:ie}=c,le=()=>{const e=K(),a=W();return o.jsxs(c,{style:{minHeight:"calc(100vh - 100px)",overflowY:"hidden"},children:[o.jsx(ce,{style:{background:"#F4F7FE",borderRight:"1px solid gray"},children:o.jsxs(N,{className:"settings-menu menu-sider",selectedKeys:[a.pathname],children:[o.jsx(N.Item,{icon:o.jsx(D,{className:"edit-setting-menu"}),onClick:()=>e("/dashboard/settings/general-setting"),children:"General"},"/dashboard/settings/general-setting"),o.jsx(N.Item,{icon:o.jsx(ee,{className:"edit-setting-menu"}),onClick:()=>e("/dashboard/settings/user-creation"),children:"User Creation"},"/dashboard/settings/user-creation")]})}),o.jsx(ie,{style:{backgroundColor:"#F4F7FE",padding:"10px"},children:o.jsx(X,{})})]})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{oe as C,re as H,c as L,ue as S};
