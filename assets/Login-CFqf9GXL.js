import{r as l,g as tt,b as nt,z as We,m as rt,c as He,d as ne,F as ye,e as xe,i as Ie,f as J,h as ot,k as oe,l as lt,n as at,o as it,D as st,p as ct,q as ut,V as dt,s as mt,t as ft,v as gt,w as ze,x as le,R as pt,y as ht,A as me,B as Ee,E as bt,G as yt,J as xt,K as Oe,N as vt,P as De,Q as qe,T as Ct,U as $t,W as wt,X as St,Y as It,Z as Et,$ as Ot,a0 as Ft,a1 as jt,a2 as Mt,a3 as Ae,a4 as Be,a5 as Nt,a6 as Pt,a7 as Rt,a8 as _t,a9 as Vt,aa as Lt,ab as Tt,ac as Wt,ad as Ht,u as zt,j as B,ae as Fe,af as Dt}from"./index-BnFBn1Cm.js";import{R as qt}from"./QuestionCircleOutlined-ARqhESh4.js";const je=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Me=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",ue=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Me(n.overflowY,t)||Me(n.overflowX,t)||(r=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},de=(e,t,n,r,o,a,i,s)=>a<e&&i>t||a>e&&i<t?0:a<=e&&s<=n||i>=t&&s>=n?a-e-r:i>t&&s<n||a<e&&s>n?i-t+o:0,At=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Ne=(e,t)=>{var n,r,o,a;if(typeof document>"u")return[];const{scrollMode:i,block:s,inline:u,boundary:f,skipOverflowHiddenElements:w}=t,p=typeof f=="function"?f:z=>z!==f;if(!je(e))throw new TypeError("Invalid target");const E=document.scrollingElement||document.documentElement,L=[];let h=e;for(;je(h)&&p(h);){if(h=At(h),h===E){L.push(h);break}h!=null&&h===document.body&&ue(h)&&!ue(document.documentElement)||h!=null&&ue(h,w)&&L.push(h)}const v=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,b=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:y,scrollY:P}=window,{height:c,width:g,top:m,right:C,bottom:R,left:S}=e.getBoundingClientRect(),{top:F,right:M,bottom:H,left:q}=(z=>{const d=window.getComputedStyle(z);return{top:parseFloat(d.scrollMarginTop)||0,right:parseFloat(d.scrollMarginRight)||0,bottom:parseFloat(d.scrollMarginBottom)||0,left:parseFloat(d.scrollMarginLeft)||0}})(e);let N=s==="start"||s==="nearest"?m-F:s==="end"?R+H:m+c/2-F+H,x=u==="center"?S+g/2-q+M:u==="end"?C+M:S-q;const D=[];for(let z=0;z<L.length;z++){const d=L[z],{height:T,width:O,top:X,right:U,bottom:Q,left:ee}=d.getBoundingClientRect();if(i==="if-needed"&&m>=0&&S>=0&&R<=b&&C<=v&&(d===E&&!ue(d)||m>=X&&R<=Q&&S>=ee&&C<=U))return D;const ae=getComputedStyle(d),k=parseInt(ae.borderLeftWidth,10),G=parseInt(ae.borderTopWidth,10),I=parseInt(ae.borderRightWidth,10),_=parseInt(ae.borderBottomWidth,10);let $=0,W=0;const j="offsetWidth"in d?d.offsetWidth-d.clientWidth-k-I:0,A="offsetHeight"in d?d.offsetHeight-d.clientHeight-G-_:0,K="offsetWidth"in d?d.offsetWidth===0?0:O/d.offsetWidth:0,re="offsetHeight"in d?d.offsetHeight===0?0:T/d.offsetHeight:0;if(E===d)$=s==="start"?N:s==="end"?N-b:s==="nearest"?de(P,P+b,b,G,_,P+N,P+N+c,c):N-b/2,W=u==="start"?x:u==="center"?x-v/2:u==="end"?x-v:de(y,y+v,v,k,I,y+x,y+x+g,g),$=Math.max(0,$+P),W=Math.max(0,W+y);else{$=s==="start"?N-X-G:s==="end"?N-Q+_+A:s==="nearest"?de(X,Q,T,G,_+A,N,N+c,c):N-(X+T/2)+A/2,W=u==="start"?x-ee-k:u==="center"?x-(ee+O/2)+j/2:u==="end"?x-U+I+j:de(ee,U,O,k,I+j,x,x+g,g);const{scrollLeft:V,scrollTop:te}=d;$=re===0?0:Math.max(0,Math.min(te+$/re,d.scrollHeight-T/re+A)),W=K===0?0:Math.max(0,Math.min(V+W/K,d.scrollWidth-O/K+j)),N+=te-$,x+=V-W}D.push({el:d,top:$,left:W})}return D},Bt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Xt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const n=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Ne(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:i}of Ne(e,Bt(t))){const s=a-n.top+n.bottom,u=i-n.left+n.right;o.scroll({top:s,left:u,behavior:r})}}function fe(e){const[t,n]=l.useState(e);return l.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}const kt=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},Gt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${ne(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Pe=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},Kt=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},He(e)),Gt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Pe(e,e.controlHeightSM)),"&-large":Object.assign({},Pe(e,e.controlHeightLG))})}},Yt=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,antCls:a,labelRequiredMarkColor:i,labelColor:s,labelFontSize:u,labelHeight:f,labelColonMarginInlineStart:w,labelColonMarginInlineEnd:p,itemMarginBottom:E}=e;return{[t]:Object.assign(Object.assign({},He(e)),{marginBottom:E,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${a}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:f,color:s,fontSize:u,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:i,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:w,marginInlineEnd:p},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:We,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Re=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Ut=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},Z=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Xe=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:Z(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Qt=e=>{const{componentCls:t,formItemCls:n,antCls:r}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]:Z(e)}},[`@media (max-width: ${ne(e.screenXSMax)})`]:[Xe(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-xs-24${n}-label`]:Z(e)}}}],[`@media (max-width: ${ne(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-sm-24${n}-label`]:Z(e)}}},[`@media (max-width: ${ne(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-md-24${n}-label`]:Z(e)}}},[`@media (max-width: ${ne(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-lg-24${n}-label`]:Z(e)}}}}},Jt=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${n}-col-24${t}-label,
      ${n}-col-xl-24${t}-label`]:Z(e),[`@media (max-width: ${ne(e.screenXSMax)})`]:[Xe(e),{[t]:{[`${n}-col-xs-24${t}-label`]:Z(e)}}],[`@media (max-width: ${ne(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:Z(e)}},[`@media (max-width: ${ne(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:Z(e)}},[`@media (max-width: ${ne(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:Z(e)}}}},Zt=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),ke=(e,t)=>rt(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),ve=tt("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=ke(e,n);return[Kt(r),Yt(r),kt(r),Re(r,r.componentCls),Re(r,r.formItemCls),Ut(r),Qt(r),Jt(r),nt(r),We]},Zt,{order:-1e3}),_e=[];function be(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}const Ge=e=>{let{help:t,helpStatus:n,errors:r=_e,warnings:o=_e,className:a,fieldId:i,onVisibleChanged:s}=e;const{prefixCls:u}=l.useContext(ye),f=`${u}-item-explain`,w=xe(u),[p,E,L]=ve(u,w),h=l.useMemo(()=>Ie(u),[u]),v=fe(r),b=fe(o),y=l.useMemo(()=>t!=null?[be(t,"help",n)]:[].concat(J(v.map((g,m)=>be(g,"error","error",m))),J(b.map((g,m)=>be(g,"warning","warning",m)))),[t,n,v,b]),P=l.useMemo(()=>{const g={};return y.forEach(m=>{let{key:C}=m;g[C]=(g[C]||0)+1}),y.map((m,C)=>Object.assign(Object.assign({},m),{key:g[m.key]>1?`${m.key}-fallback-${C}`:m.key}))},[y]),c={};return i&&(c.id=`${i}_help`),p(l.createElement(ot,{motionDeadline:h.motionDeadline,motionName:`${u}-show-help`,visible:!!P.length,onVisibleChanged:s},g=>{const{className:m,style:C}=g;return l.createElement("div",Object.assign({},c,{className:oe(f,m,L,w,a,E),style:C}),l.createElement(lt,Object.assign({keys:P},Ie(u),{motionName:`${u}-show-help-item`,component:!1}),R=>{const{key:S,error:F,errorStatus:M,className:H,style:q}=R;return l.createElement("div",{key:S,className:oe(H,{[`${f}-${M}`]:M}),style:q},F)}))}))},en=["parentNode"],tn="form_item";function se(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ke(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:en.includes(n)?`${tn}_${n}`:n}function Ye(e,t,n,r,o,a){let i=r;return a!==void 0?i=a:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}var nn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Ve(e){return se(e).join("_")}function Le(e,t){const n=t.getFieldInstance(e),r=it(n);if(r)return r;const o=Ke(se(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function Ue(e){const[t]=at(),n=l.useRef({}),r=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const i=Ve(o);a?n.current[i]=a:delete n.current[i]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{focus:i}=a,s=nn(a,["focus"]),u=Le(o,r);u&&(Xt(u,Object.assign({scrollMode:"if-needed",block:"nearest"},s)),i&&r.focusField(o))},focusField:o=>{var a,i;const s=r.getFieldInstance(o);typeof(s==null?void 0:s.focus)=="function"?s.focus():(i=(a=Le(o,r))===null||a===void 0?void 0:a.focus)===null||i===void 0||i.call(a)},getFieldInstance:o=>{const a=Ve(o);return n.current[a]}}),[e,t]);return[r]}var rn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const on=(e,t)=>{const n=l.useContext(st),{getPrefixCls:r,direction:o,requiredMark:a,colon:i,scrollToFirstError:s,className:u,style:f}=ct("form"),{prefixCls:w,className:p,rootClassName:E,size:L,disabled:h=n,form:v,colon:b,labelAlign:y,labelWrap:P,labelCol:c,wrapperCol:g,hideRequiredMark:m,layout:C="horizontal",scrollToFirstError:R,requiredMark:S,onFinishFailed:F,name:M,style:H,feedbackIcons:q,variant:N}=e,x=rn(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),D=ut(L),z=l.useContext(dt),d=l.useMemo(()=>S!==void 0?S:m?!1:a!==void 0?a:!0,[m,S,a]),T=b??i,O=r("form",w),X=xe(O),[U,Q,ee]=ve(O,X),ae=oe(O,`${O}-${C}`,{[`${O}-hide-required-mark`]:d===!1,[`${O}-rtl`]:o==="rtl",[`${O}-${D}`]:D},ee,X,Q,u,p,E),[k]=Ue(v),{__INTERNAL__:G}=k;G.name=M;const I=l.useMemo(()=>({name:M,labelAlign:y,labelCol:c,labelWrap:P,wrapperCol:g,vertical:C==="vertical",colon:T,requiredMark:d,itemRef:G.itemRef,form:k,feedbackIcons:q}),[M,y,c,g,C,T,d,k,q]),_=l.useRef(null);l.useImperativeHandle(t,()=>{var j;return Object.assign(Object.assign({},k),{nativeElement:(j=_.current)===null||j===void 0?void 0:j.nativeElement})});const $=(j,A)=>{if(j){let K={block:"nearest"};typeof j=="object"&&(K=Object.assign(Object.assign({},K),j)),k.scrollToField(A,K)}},W=j=>{if(F==null||F(j),j.errorFields.length){const A=j.errorFields[0].name;if(R!==void 0){$(R,A);return}s!==void 0&&$(s,A)}};return U(l.createElement(mt.Provider,{value:N},l.createElement(ft,{disabled:h},l.createElement(gt.Provider,{value:D},l.createElement(ze,{validateMessages:z},l.createElement(le.Provider,{value:I},l.createElement(pt,Object.assign({id:M},x,{name:M,onFinishFailed:W,form:k,ref:_,style:Object.assign(Object.assign({},f),H),className:ae}))))))))},ln=l.forwardRef(on);function an(e){if(typeof e=="function")return e;const t=ht(e);return t.length<=1?t[0]:t}const Qe=()=>{const{status:e,errors:t=[],warnings:n=[]}=l.useContext(me);return{status:e,errors:t,warnings:n}};Qe.Context=me;function sn(e){const[t,n]=l.useState(e),r=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,Ee.cancel(r.current),r.current=null}),[]);function i(s){a.current||(r.current===null&&(o.current=[],r.current=Ee(()=>{r.current=null,n(u=>{let f=u;return o.current.forEach(w=>{f=w(f)}),f})})),o.current.push(s))}return[t,i]}function cn(){const{itemRef:e}=l.useContext(le),t=l.useRef({});function n(r,o){const a=o&&typeof o=="object"&&bt(o),i=r.join("_");return(t.current.name!==i||t.current.originRef!==a)&&(t.current.name=i,t.current.originRef=a,t.current.ref=yt(e(r),a)),t.current.ref}return n}const un=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},dn=xt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=ke(e,n);return[un(r)]});var mn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const fn=24,gn=e=>{const{prefixCls:t,status:n,labelCol:r,wrapperCol:o,children:a,errors:i,warnings:s,_internalItemRender:u,extra:f,help:w,fieldId:p,marginBottom:E,onErrorVisibleChanged:L,label:h}=e,v=`${t}-item`,b=l.useContext(le),y=l.useMemo(()=>{let x=Object.assign({},o||b.wrapperCol||{});return h===null&&!r&&!o&&b.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(z=>{const d=z?[z]:[],T=Oe(b.labelCol,d),O=typeof T=="object"?T:{},X=Oe(x,d),U=typeof X=="object"?X:{};"span"in O&&!("offset"in U)&&O.span<fn&&(x=vt(x,[].concat(d,["offset"]),O.span))}),x},[o,b]),P=oe(`${v}-control`,y.className),c=l.useMemo(()=>{const{labelCol:x,wrapperCol:D}=b;return mn(b,["labelCol","wrapperCol"])},[b]),g=l.useRef(null),[m,C]=l.useState(0);De(()=>{f&&g.current?C(g.current.clientHeight):C(0)},[f]);const R=l.createElement("div",{className:`${v}-control-input`},l.createElement("div",{className:`${v}-control-input-content`},a)),S=l.useMemo(()=>({prefixCls:t,status:n}),[t,n]),F=E!==null||i.length||s.length?l.createElement(ye.Provider,{value:S},l.createElement(Ge,{fieldId:p,errors:i,warnings:s,help:w,helpStatus:n,className:`${v}-explain-connected`,onVisibleChanged:L})):null,M={};p&&(M.id=`${p}_extra`);const H=f?l.createElement("div",Object.assign({},M,{className:`${v}-extra`,ref:g}),f):null,q=F||H?l.createElement("div",{className:`${v}-additional`,style:E?{minHeight:E+m}:{}},F,H):null,N=u&&u.mark==="pro_table_render"&&u.render?u.render(e,{input:R,errorList:F,extra:H}):l.createElement(l.Fragment,null,R,q);return l.createElement(le.Provider,{value:c},l.createElement(qe,Object.assign({},y,{className:P}),N),l.createElement(dn,{prefixCls:t}))};var pn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function hn(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const bn=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:a,colon:i,required:s,requiredMark:u,tooltip:f,vertical:w}=e;var p;const[E]=Ct("Form"),{labelAlign:L,labelCol:h,labelWrap:v,colon:b}=l.useContext(le);if(!n)return null;const y=o||h||{},P=a||L,c=`${t}-item-label`,g=oe(c,P==="left"&&`${c}-left`,y.className,{[`${c}-wrap`]:!!v});let m=n;const C=i===!0||b!==!1&&i!==!1;C&&!w&&typeof n=="string"&&n.trim()&&(m=n.replace(/[:|：]\s*$/,""));const S=hn(f);if(S){const{icon:q=l.createElement(qt,null)}=S,N=pn(S,["icon"]),x=l.createElement($t,Object.assign({},N),l.cloneElement(q,{className:`${t}-item-tooltip`,title:"",onClick:D=>{D.preventDefault()},tabIndex:null}));m=l.createElement(l.Fragment,null,m,x)}const F=u==="optional",M=typeof u=="function";M?m=u(m,{required:!!s}):F&&!s&&(m=l.createElement(l.Fragment,null,m,l.createElement("span",{className:`${t}-item-optional`,title:""},(E==null?void 0:E.optional)||((p=wt.Form)===null||p===void 0?void 0:p.optional))));const H=oe({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:F||M,[`${t}-item-no-colon`]:!C});return l.createElement(qe,Object.assign({},y,{className:g}),l.createElement("label",{htmlFor:r,className:H,title:typeof n=="string"?n:""},m))},yn={success:Ot,warning:Et,error:It,validating:St};function Je(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:a,prefixCls:i,meta:s,noStyle:u}=e;const f=`${i}-item`,{feedbackIcons:w}=l.useContext(le),p=Ye(n,r,s,null,!!o,a),{isFormItemInput:E,status:L,hasFeedback:h,feedbackIcon:v}=l.useContext(me),b=l.useMemo(()=>{var y;let P;if(o){const g=o!==!0&&o.icons||w,m=p&&((y=g==null?void 0:g({status:p,errors:n,warnings:r}))===null||y===void 0?void 0:y[p]),C=p&&yn[p];P=m!==!1&&C?l.createElement("span",{className:oe(`${f}-feedback-icon`,`${f}-feedback-icon-${p}`)},m||l.createElement(C,null)):null}const c={status:p||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:P,isFormItemInput:!0};return u&&(c.status=(p??L)||"",c.isFormItemInput=E,c.hasFeedback=!!(o??h),c.feedbackIcon=o!==void 0?c.feedbackIcon:v),c},[p,o,u,E,L]);return l.createElement(me.Provider,{value:b},t)}var xn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function vn(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:a,errors:i,warnings:s,validateStatus:u,meta:f,hasFeedback:w,hidden:p,children:E,fieldId:L,required:h,isRequired:v,onSubItemMetaChange:b,layout:y}=e,P=xn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),c=`${t}-item`,{requiredMark:g,vertical:m}=l.useContext(le),C=m||y==="vertical",R=l.useRef(null),S=fe(i),F=fe(s),M=a!=null,H=!!(M||i.length||s.length),q=!!R.current&&Ft(R.current),[N,x]=l.useState(null);De(()=>{if(H&&R.current){const O=getComputedStyle(R.current);x(parseInt(O.marginBottom,10))}},[H,q]);const D=O=>{O||x(null)},d=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const X=O?S:f.errors,U=O?F:f.warnings;return Ye(X,U,f,"",!!w,u)}(),T=oe(c,n,r,{[`${c}-with-help`]:M||S.length||F.length,[`${c}-has-feedback`]:d&&w,[`${c}-has-success`]:d==="success",[`${c}-has-warning`]:d==="warning",[`${c}-has-error`]:d==="error",[`${c}-is-validating`]:d==="validating",[`${c}-hidden`]:p,[`${c}-${y}`]:y});return l.createElement("div",{className:T,style:o,ref:R},l.createElement(jt,Object.assign({className:`${c}-row`},Mt(P,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(bn,Object.assign({htmlFor:L},e,{requiredMark:g,required:h??v,prefixCls:t,vertical:C})),l.createElement(gn,Object.assign({},e,f,{errors:S,warnings:F,prefixCls:t,status:d,help:a,marginBottom:N,onErrorVisibleChanged:D}),l.createElement(Ae.Provider,{value:b},l.createElement(Je,{prefixCls:t,meta:f,errors:f.errors,warnings:f.warnings,hasFeedback:w,validateStatus:d},E)))),!!N&&l.createElement("div",{className:`${c}-margin-offset`,style:{marginBottom:-N}}))}const Cn="__SPLIT__";function $n(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(o=>{const a=e[o],i=t[o];return a===i||typeof a=="function"||typeof i=="function"})}const wn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>$n(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function Te(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Sn(e){const{name:t,noStyle:n,className:r,dependencies:o,prefixCls:a,shouldUpdate:i,rules:s,children:u,required:f,label:w,messageVariables:p,trigger:E="onChange",validateTrigger:L,hidden:h,help:v,layout:b}=e,{getPrefixCls:y}=l.useContext(Be),{name:P}=l.useContext(le),c=an(u),g=typeof c=="function",m=l.useContext(Ae),{validateTrigger:C}=l.useContext(Nt),R=L!==void 0?L:C,S=t!=null,F=y("form",a),M=xe(F),[H,q,N]=ve(F,M);Pt();const x=l.useContext(Rt),D=l.useRef(null),[z,d]=sn({}),[T,O]=_t(()=>Te()),X=I=>{const _=x==null?void 0:x.getKey(I.name);if(O(I.destroy?Te():I,!0),n&&v!==!1&&m){let $=I.name;if(I.destroy)$=D.current||$;else if(_!==void 0){const[W,j]=_;$=[W].concat(J(j)),D.current=$}m(I,$)}},U=(I,_)=>{d($=>{const W=Object.assign({},$),A=[].concat(J(I.name.slice(0,-1)),J(_)).join(Cn);return I.destroy?delete W[A]:W[A]=I,W})},[Q,ee]=l.useMemo(()=>{const I=J(T.errors),_=J(T.warnings);return Object.values(z).forEach($=>{I.push.apply(I,J($.errors||[])),_.push.apply(_,J($.warnings||[]))}),[I,_]},[z,T.errors,T.warnings]),ae=cn();function k(I,_,$){return n&&!h?l.createElement(Je,{prefixCls:F,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:T,errors:Q,warnings:ee,noStyle:!0},I):l.createElement(vn,Object.assign({key:"row"},e,{className:oe(r,N,M,q),prefixCls:F,fieldId:_,isRequired:$,errors:Q,warnings:ee,meta:T,onSubItemMetaChange:U,layout:b}),I)}if(!S&&!g&&!o)return H(k(c));let G={};return typeof w=="string"?G.label=w:t&&(G.label=String(t)),p&&(G=Object.assign(Object.assign({},G),p)),H(l.createElement(Vt,Object.assign({},e,{messageVariables:G,trigger:E,validateTrigger:R,onMetaChange:X}),(I,_,$)=>{const W=se(t).length&&_?_.name:[],j=Ke(W,P),A=f!==void 0?f:!!(s!=null&&s.some(V=>{if(V&&typeof V=="object"&&V.required&&!V.warningOnly)return!0;if(typeof V=="function"){const te=V($);return(te==null?void 0:te.required)&&!(te!=null&&te.warningOnly)}return!1})),K=Object.assign({},I);let re=null;if(Array.isArray(c)&&S)re=c;else if(!(g&&(!(i||o)||S))){if(!(o&&!g&&!S))if(l.isValidElement(c)){const V=Object.assign(Object.assign({},c.props),K);if(V.id||(V.id=j),v||Q.length>0||ee.length>0||e.extra){const ie=[];(v||Q.length>0)&&ie.push(`${j}_help`),e.extra&&ie.push(`${j}_extra`),V["aria-describedby"]=ie.join(" ")}Q.length>0&&(V["aria-invalid"]="true"),A&&(V["aria-required"]="true"),Lt(c)&&(V.ref=ae(W,c)),new Set([].concat(J(se(E)),J(se(R)))).forEach(ie=>{V[ie]=function(){for(var Ce,$e,ge,we,pe,Se=arguments.length,he=new Array(Se),ce=0;ce<Se;ce++)he[ce]=arguments[ce];(ge=K[ie])===null||ge===void 0||(Ce=ge).call.apply(Ce,[K].concat(he)),(pe=(we=c.props)[ie])===null||pe===void 0||($e=pe).call.apply($e,[we].concat(he))}});const et=[V["aria-required"],V["aria-invalid"],V["aria-describedby"]];re=l.createElement(wn,{control:K,update:c,childProps:et},Tt(c,V))}else g&&(i||o)&&!S?re=c($):re=c}return k(re,j,A)}))}const Ze=Sn;Ze.useStatus=Qe;var In=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const En=e=>{var{prefixCls:t,children:n}=e,r=In(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(Be),a=o("form",t),i=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(Wt,Object.assign({},r),(s,u,f)=>l.createElement(ye.Provider,{value:i},n(s.map(w=>Object.assign(Object.assign({},w),{fieldKey:w.key})),u,{errors:f.errors,warnings:f.warnings})))};function On(){const{form:e}=l.useContext(le);return e}const Y=ln;Y.Item=Ze;Y.List=En;Y.ErrorList=Ge;Y.useForm=Ue;Y.useFormInstance=On;Y.useWatch=Ht;Y.Provider=ze;Y.create=()=>{};const Mn=({isAuth:e})=>{const t=zt(),n=async r=>{console.log("values : ",r),localStorage.setItem("login","success"),e(!0),t("/dashboard")};return B.jsx("div",{className:"login-screen",children:B.jsxs("div",{className:"login-container",children:[B.jsx("div",{children:B.jsx("h1",{className:"headings",children:"ComplIQ"})}),B.jsxs("div",{className:"login-form-container",children:[B.jsx("p",{className:"form-heading",children:"Sign In"}),B.jsxs(Y,{layout:"vertical",onFinish:n,children:[B.jsx(Y.Item,{label:"Username",name:"username",children:B.jsx(Fe,{placeholder:"Enter your username"})}),B.jsx(Y.Item,{label:"Password",name:"password",children:B.jsx(Fe.Password,{placeholder:"Enter your password"})}),B.jsx("div",{className:"forgot-password-container",children:B.jsx("a",{className:"forgot-password",children:"Forgot Password?"})}),B.jsx(Y.Item,{children:B.jsx(Dt,{htmlType:"submit",className:"sign-in-btn",children:"Sign in"})})]})]})]})})};export{Mn as default};
