import{r as v,R as A,v as ne,k as t,t as n,F as ie,j as e,w as te,x as y,y as se,n as re,E as j,c as k,z as oe,_ as N,C as ae,o as le,A as ce,D as de,G as he,b as ue}from"./index-b407c525.js";var X={exports:{}},B={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=v;function pe(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var xe=typeof Object.is=="function"?Object.is:pe,ge=M.useSyncExternalStore,me=M.useRef,fe=M.useEffect,be=M.useMemo,je=M.useDebugValue;B.useSyncExternalStoreWithSelector=function(i,s,r,o,a){var c=me(null);if(c.current===null){var d={hasValue:!1,value:null};c.current=d}else d=c.current;c=be(function(){function f(l){if(!x){if(x=!0,g=l,l=o(l),a!==void 0&&d.hasValue){var h=d.value;if(a(h,l))return m=h}return m=l}if(h=m,xe(g,l))return h;var w=o(l);return a!==void 0&&a(h,w)?h:(g=l,m=w)}var x=!1,g,m,b=r===void 0?null:r;return[function(){return f(s())},b===null?void 0:function(){return f(b())}]},[s,r,o,a]);var u=ge(i,c[0],c[1]);return fe(function(){d.hasValue=!0,d.value=u},[u]),je(u),u};X.exports=B;var ve=X.exports,p="default"in A?ne:A,E=Symbol.for("react-redux-context"),T=typeof globalThis<"u"?globalThis:{};function $e(){if(!p.createContext)return{};const i=T[E]??(T[E]=new Map);let s=i.get(p.createContext);return s||(s=p.createContext(null),i.set(p.createContext,s)),s}var $=$e(),ye=()=>{throw new Error("uSES not initialized!")};function z(i=$){return function(){return p.useContext(i)}}var O=z(),W=ye,ke=i=>{W=i},we=(i,s)=>i===s;function Se(i=$){const s=i===$?O:z(i),r=(o,a={})=>{const{equalityFn:c=we,devModeChecks:d={}}=typeof a=="function"?{equalityFn:a}:a,{store:u,subscription:f,getServerState:x,stabilityCheck:g,identityFunctionCheck:m}=s();p.useRef(!0);const b=p.useCallback({[o.name](h){return o(h)}}[o.name],[o,g,d.stabilityCheck]),l=W(f.addNestedSub,u.getState,x||u.getState,b,c);return p.useDebugValue(l),l};return Object.assign(r,{withTypes:()=>r}),r}var Ce=Se(),Me=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";Me?p.useLayoutEffect:p.useEffect;function _(i=$){const s=i===$?O:z(i),r=()=>{const{store:o}=s();return o};return Object.assign(r,{withTypes:()=>r}),r}var Fe=_();function Re(i=$){const s=i===$?Fe:_(i),r=()=>s().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var ze=Re();ke(ve.useSyncExternalStoreWithSelector);const Ae=t.div`
display:flex;
gap:${n.spacing(10)};
margin-block-end:${n.spacing(20)};

h3{
font-weight:500;
line-height:1.2;
color:${n.colors.black};
}

p{
    font-weight:400;
    line-height:1.25;
    color:rgba(17, 16, 28, 0.5);
}
`,Ee=t.img`
border-radius:${n.radius.m};
`,Te=t.div`
display:flex;
gap:${n.spacing(7)};
margin-block-end:${n.spacing(20)};


p{
font-weight: 500;
line-height: 1.33;
color:${n.colors.grey};
margin-block-end:${n.spacing(2)};
}

h3{
    font-weight:500;
    line-height:1.5;
    color:${n.colors.black};
}
`,R=t.label`
padding ${n.spacing(8)} ${n.spacing(9)}
border: 1px solid rgba(17, 16, 28, 0.1);
border-radius:${n.radius.xxs};
inline-size: 232px;
outline:none;
`,q=t.label`
padding ${n.spacing(8)} ${n.spacing(9)}
border: 1px solid rgba(17, 16, 28, 0.1);
border-radius:${n.radius.xxs};
inline-size: 100%;
outline:none;
`,qe=t.label`
padding ${n.spacing(8)} ${n.spacing(9)}
border: 1px solid rgba(17, 16, 28, 0.1);
border-radius:${n.radius.xxs};
inline-size: 100%;
outline:none;
height:116px;
`,He=t(ie)`
display:flex;
gap-row:${n.spacing(4)};
gap-column:${n.spacing(8)};
margin-block-end:${n.spacing(20)};
`,D=t.div`
cursor:pointer;
overflow:hidden;
appearance: none;
outline:none;
padding:${n.spacing(8)};
border:none;
border-radius:${n.radius.xxs};

&#time{
    inline-size:151px;
    }
    
    option{
        color:rgba(17, 16, 28, 0.3);
    }

    p{
font-weight:500;
line-height:1.25;
font-size:16px;
color:${n.colors.grey};
    }

    h2{
        font-weight:500;
        line-height:1.5;
        font-size:16px;
        color:${n.colors.black};
    }

&:hover{
    color:${n.colors.black};
}
`,Ne=t.button`
border:none;
background:none;
position:absolute;
top:16px;
right:18px;
transform: translateY(-50%);
transition: fill ${n.transition};

%:hover{
    fill : ${n.colors.green};
}
`,Xe=t.button`
display:flex;
flex-direction:column;
max-inline-size:480px;
`,Be=({isOpen:i,onRequestClose:s})=>e.jsxs(D,{isOpen:i,onRequestClose:s,children:[e.jsx("h2",{children:"Meeting time"}),e.jsx("p",{children:"9:00"}),e.jsx("p",{children:"9:30"}),e.jsx("p",{children:"10:00"}),e.jsx("p",{children:"10:30"})]}),Oe=te({address:y().min(3,"Must least 3 symbols").max(64,"At most 64 symbols").required("This ia a required field"),number:y().min(9,"Simple Format: XXX-XX-XX").max(9,"Simple Format: XXX-XX-XX").required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes."),childAge:se().min(1,"Must be 1 number").max(2,"At most 2 number").required("This is a required field"),time:y().required("Chose one option"),email:y().email("Invalid email adress").required("This is a required field"),name:y().min(3,"Must be 3 symbols").max(32,"At most 32 symbols").required("This is a required field"),comment:y().min(4,"Must be 4 symbols").max(2e3,"At most 2000 symbols").required("This is a required field")}),We=({card:i,onRequestClose:s})=>{const[r,o]=v.useState(!1),a=({address:u,number:f,childAge:x,time:g,email:m,name:b,comment:l},{resetForm:h})=>{N.success("Successfully sent date",{position:"top-right",duration:5e3}),h(),s()},c=()=>{o(!0)},d=()=>{o(!1)};return e.jsx(re,{initialValues:{address:"",number:"",childAge:"",time:"",email:"",name:"",comment:""},onSubmit:a,validationSchema:Oe,children:e.jsxs(Xe,{children:[e.jsxs(Ae,{children:[e.jsx("h3",{children:"Make an appointment with a babysitter"}),e.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),e.jsxs(Te,{children:[e.jsx(Ee,{src:i.avatar_url,alt:"avatar",width:"44",height:"44"}),e.jsx("p",{children:"Your nanny"}),e.jsxs("h3",{children:[i.name," ",i.surname]})]}),e.jsxs(He,{children:[e.jsxs("label",{"aria-label":"Field for address",children:[e.jsx(R,{name:"address",type:"text",placeholder:"Address"}),e.jsx(j,{name:"address",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Child is age",children:[e.jsx(R,{name:"Child is age",type:"number",placeholder:"Child is age"}),e.jsx(j,{name:"Child is age",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for number",children:[e.jsx(R,{name:"number",type:"tel",placeholder:"+380"}),e.jsx(j,{name:"number",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for time",children:[e.jsx(R,{name:"time",type:"number",placeholder:"00:00"}),e.jsx(j,{name:"time",component:"div"}),e.jsx(Ne,{onClick:c,type:"text",children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:`${k}#icon-clock}`})})})]}),e.jsxs("label",{"aria-label":"Field for email",children:[e.jsx(q,{name:"email",type:"email",placeholder:"Email"}),e.jsx(j,{component:"div",name:"email"})]}),e.jsxs("label",{"aria-label":"Field for Father is or mother is name",children:[e.jsx(q,{name:"Father is or mother is name",type:"text",placeholder:"Father is or mother is name"}),e.jsx(j,{component:"div",name:"Father is or mother is name"})]}),e.jsxs("label",{"aria-label":"Field for comment",children:[e.jsx(qe,{name:"comment",type:"text",placeholder:"Comment"}),e.jsx(j,{component:"div",name:"comment"})]})]}),e.jsx(oe,{type:"submit",children:e.jsx("span",{children:"Send"})}),e.jsx(Be,{id:"time",isOpen:r,onRequestClose:d,children:e.jsx(D,{onRequestClose:d})})]})})},_e=t.img`
border-radius: ${n.radius.xxl};
`,De=t.div`
display:flex;
gap:${n.spacing(6)};

margin-block: ${n.spacing(24)} ${n.spacing(8)}
`,Ve=t.p`
font-weight:400;
line-height:1.25;
margin-block-end:${n.spacing(12.5)};
`,Ie=t.div`
gap:${n.spacing(2)};

h3{
    color:${n.colors.black};
    font-weight:500;
    line-height:1.25;
}

p{
    font-weight:500;
    line-height:1.28;
    color:${n.colors.black};
}

svg{
    margin-inline-end:${n.spacing(6)};
    transform: translateY(2px);
}

`,Ge=t.img`
padding:${n.spacing(6)};
border-radius:${n.radius.m};
border:2px solid rgba(16, 57, 49, 0.2);
inline-size:120px;
block-size:120px;
`,Le=t.div`
max-inline-size:992px;
`,Ue=t.svg`
position:absolute;
top:9px;
right:14px;
transition: fill ${n.transition};
background: none;
border:none;
`,Ye=t.div`
display:flex;

p{
    fonr-weight:500;
    line-height:1.5;
    display:inline-flex;
}
`,Pe=t.div`
padding:${n.spacing(12)};
max-inline-size:1184px;
display:flex;
border-radius:${n.radius.l};
background-color:${n.colors.light};
gap:${n.spacing(12)};
`,Ke=t.div`
flex-shrink:0;
`,H=t.span`
color:rgba(17, 16, 28, 0.2);
margin-inline:${n.spacing(8)};
`,Ze=t.span`
font-weight:500;
line-height:1.5;
color:${n.colors.grey};
`,Je=t.svg`
margin-inline-end: ${n.spacing(4)};
transform:translateY(4px);
`,Qe=t.svg`
margin-inline-end:${n.spacing(4)};
transform:translateY(4px);
`,en=t.span`
color:${n.colors.lightGreen};
margin-inline-start:${n.spacing(2)};
`,nn=t.button`
margin-inline-start:${n.spacing(24)};
border:none;
background:transparent;

&:hover svg{
    @keyframes shadow {
        0%{
            scale:1;
        }
        50%{
            scale:1.2;
        }
        100%{
            scale: 1
        }
        animation: shadow 0.5s ease infinity;
    }
}
`,tn=t.div`
display:flex;
`,sn=t.div`
h2{
font-weight:500;
color:${n.colors.black};
font-size:24px;
line-height:1;
}

p{
color:rgba(17, 16, 28, 0.5);
font-weight:500;
line-height:1.25;
font-size:16px;
}
`,rn=t.ul`
margin-block-end:${n.spacing(12)};
display:flex;
flex-direction:row;
gap:${n.spacing(4)};

li{
font-weight:500;
line-height:1.5;
background-color:${n.colors.lightGrey};
border:${n.radius.l};
}
`,C=t.span`
color:${n.colors.grey};
padding:${n.spacing(4)} ${n.spacing(8)};
`,on=t.span`
text-decoration: underline;
`,an=t.button`
border:none;
text-decoration:underline;
background:transparent;
font-weight:500;

&:active{
display:none
}
`,ln=t.div``,cn=t.button`
border:${n.radius.xl};
background-color:${n.colors.green};
max-inline-size:215px;


span{
    color:${n.colors.light};
    font-weight:500;
    line-height:1.25;
    font-size:16px;
    padding:${n.spacing(7)} ${n.spacing(14)};
}
`,gn=t.div`
padding-inline-start:122px;
`,mn=t.div`
text-align: center;
`,fn=t.button`
padding:${n.spacing(14)} ${n.spacing(28)};
border:none;
border-radius:${n.radius.xl};
background-color:${n.colors.green};
font-size:18px;
line-height:1.5;
font-weight:700;
transition: background-color ${n.transition};

&:hover{
    background-color:${n.colors.lightGreen};
}
`,bn=t.div`
font-size:40px;
text-align:center;
margin-block-start:10%;
`,dn=({item:i})=>{const{reviewer_avatar:s,rating:r,reviewer:o,comment:a}=i;return e.jsxs(e.Fragment,{children:[e.jsxs(De,{children:[e.jsx(_e,{src:s,width:"44",height:"44",alt:"avatar"}),e.jsxs(Ie,{children:[e.jsx("h3",{children:o}),e.jsxs("p",{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${k}#icon-star`})}),r,".0"]})]})]}),e.jsx(Ve,{children:a})]})},hn=i=>i.nannies.nannies,jn=i=>i.nannies.loading,un=i=>i.favorites.favorites,pn=i=>i.filter.filters,vn=ae([pn,hn],(i,s)=>{const{select:r}=i;return r==="A to Z"?s:s.filter(a=>r.includes("A to Z")||a.select.includes(a.select))}),$n=({card:i})=>{const[s,r]=v.useState(!1),[o,a]=v.useState(null),[c,d]=v.useState(!1),[u,f]=v.useState(null),x=Ce(un),g=x==null?void 0:x.some(S=>S.rating===i.rating),m=ze(),b=()=>{if(!u){N.error("Not authorized",{position:"top-right",duration:5e3});return}m(g&&u?de(i.id):he(i))},l=()=>{r(!0),document.body.style.overflow="hidden"},h=()=>{r(!1),document.body.style.overflow=""},w=()=>{a(!0),d(!0)},{avatar_url:V,location:I,name:G,rating:L,price_per_hour:U,reviews:Y,education:P,characters:K,birthday:Z,kids_age:J,experience:Q,about:ee}=i;return v.useEffect(()=>{const S=le(ue,F=>{f(F||null)});return()=>S()},[]),e.jsxs(Pe,{children:[e.jsxs(Ke,{children:[e.jsx(Ue,{children:e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{xlinkHref:`${k}#icon-online`})})}),e.jsx(Ge,{src:V,alt:"avatar"})]}),e.jsxs(Le,{children:[e.jsxs(Ye,{children:[e.jsx(Ze,{children:"Nanny"}),e.jsxs(tn,{children:[e.jsx(Je,{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${k}#icon-map-pin`})}),e.jsx("p",{children:I}),e.jsx(H,{children:"|"}),"",e.jsx(Qe,{width:"16",height:"16"}),e.jsxs("p",{children:["Rating:",L]}),e.jsx(H,{children:"|"}),"",e.jsx("p",{children:"Price / 1 hour:"}),e.jsx(en,{children:U}),e.jsx(nn,{onClick:b,children:g&&u?e.jsx("svg",{width:"26",height:"26",stroke:"##103931",fill:"#103931",children:e.jsx("use",{xlinkHref:`${k}#icon-heart`})}):e.jsx("svg",{width:"26",height:"26",stroke:"#121417",fill:"transparent",children:e.jsx("use",{xlinkHref:`${k}#icon-heart`})})})]})]}),e.jsxs(sn,{children:[e.jsx("h2",{children:G}),e.jsxs(rn,{children:[e.jsxs("li",{children:[e.jsx(C,{children:"Age:"}),"",e.jsx(on,{children:Z})]}),e.jsxs("li",{children:[e.jsx(C,{children:"Experience:"}),Q]}),e.jsxs("li",{children:[e.jsx(C,{children:"Kids age:"}),J]}),e.jsxs("li",{children:[e.jsx(C,{children:"Characters:"}),K]}),e.jsxs("li",{children:[e.jsx(C,{children:"Education:"}),P]})]}),e.jsx("p",{children:ee})]}),!c&&e.jsx(an,{onClick:w,children:"Read More"}),!o&&e.jsxs(ln,{children:[Y.map((S,F)=>e.jsx(dn,{item:S},F)),e.jsx(cn,{onClick:l,children:"Make an appointment"}),e.jsx(ce,{isOpen:s,onRequestClose:h,children:e.jsx(We,{card:i,onClick:h})})]})]})]})};export{mn as B,bn as I,$n as N,gn as W,Ce as a,fn as b,pn as c,un as d,vn as g,jn as s,ze as u};
