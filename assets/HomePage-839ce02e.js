import{r as i,o as v,j as n,H,N as L,L as S,a as w,S as d,b as g,I as B,c as r,d as O,B as R,e as C,f as I,g as M,A as f,h as y,i as z,s as A,_ as m,k as s,t as e,l as N}from"./index-b407c525.js";const E=()=>{const[a,o]=i.useState(!1),{isRegistrationModalOpen:l,setRegistrationModalOpen:t}=i.useState(!1),[h,x]=i.useState(null),b=()=>{o(!0)},p=()=>{o(!1)},$=()=>{t(!0)},u=()=>{t(!1)};i.useEffect(()=>{const c=v(g,j=>{x(j||null)});return()=>c()},[]);const k=()=>{A(g).then(()=>m.success("See you!",{position:"top-right",duration:5e3,icon:"🖐️"})).catch(c=>m.error(`Have a problem, ${c}`,{duration:5e3,position:"top-right"}))};return n.jsx(H,{children:n.jsxs(L,{children:[n.jsx(S,{children:"Nanny.Services"}),n.jsxs(w,{children:[n.jsx("li",{children:n.jsx(d,{to:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(d,{to:"/nannies",children:"Nannies"})}),g&&n.jsx("li",{children:n.jsx(d,{to:"/favorites",children:"Favorites"})})]}),n.jsxs("div",{children:[h?n.jsxs(n.Fragment,{children:[n.jsx(B,{children:n.jsx("svg",{width:"16",height:"16",children:n.jsx("use",{xlinkHref:`${r}#icon-mdi_user`})})}),n.jsx(O,{children:h.name}),n.jsx(R,{onClick:k,children:n.jsx("span",{children:"Log Out"})})]}):n.jsxs(C,{children:[n.jsx(I,{onClick:b,children:n.jsx("span",{children:"Log In"})}),n.jsx(M,{onClick:$,children:n.jsx("span",{children:"Registration"})})]}),n.jsx(f,{id:"log",isOpen:a,onRequestClose:p,children:n.jsx(y,{onRequestClose:p})}),n.jsx(f,{id:"reg",isOpen:l,onRequestClose:u,children:n.jsx(z,{onRequestclose:u})})]})]})})},F="/Nannies-service/assets/Rectangle 1-2557fb2d.png",q=s.div`
padding:${e.spacing(32)};
max-inline-size:1380px;
background-color:${e.colors.green};
`,U=s.div`
position:absolute;
left:96px;
bottom:163px;
max-inline-size:520px;
display:flex;
justify-content:flex-start;
align-items:flex-start;

h2{
font-size: 70px;
font-weight: 500;
line-height: 1;
color:${e.colors.light};
margin-block-end:${e.spacing(14)};
}

p{
font-size: 28px;
font-weight: 400;
line-height: 1.07;
color:${e.colors.light};
margin-block-end:${e.spacing(32)};
}
`,_=s.img`
border-radius:${e.spacing(0)}  ${e.spacing(15)} ${e.spacing(15)} ${e.spacing(0)} ;
background-color: rgba(18, 20, 23, 0.6);
`,G=s(N)`
border: 1px solid rgba(251, 251, 251, 0.4);
border-radius:${e.radius.xl};
background-color:transparent;
padding:${e.spacing(9)} ${e.spacing(25)};
display:inline-block;
transition:border ${e.transition};

&:hover{
    border: ${e.colors.light};
}


span{
font-size: 20px;
font-weight: 500;
line-height: 1.2;
color:${e.colors.light};
margin-inline-end:${e.spacing(9)};
}
`,P=s.div`
display:flex;
flex-wrap:wrap;
`,T=s.div`
padding:${e.spacing(16)};
border:none;
border-radius:20px;
background-color:${e.colors.light};
position:absolute;
right:50px;
bottom:50px;
max-inline-size:290px;

h2{
color:${e.colors.black};
font-weight:700;
font-size:24px;
line-height:1.2;
}

p{
color:rgba(17, 16, 28, 0.5);
font-size: 16px;
font-weight: 400;
line-height: 1.2;
margin-block-end:${e.spacing(3)};
}
`,D=s.div`
border:none;
background-color:${e.colors.green};
border-radius:13px;
margin-inline-end:${e.spacing(8)};
`,J=s.svg`
padding:${e.spacing(9.75)} ${e.spacing(8.5)};
`,K=()=>{const[a,o]=i.useState(!1),l=()=>{o(t=>!t)};return n.jsxs(q,{children:[n.jsx(E,{}),n.jsxs(P,{children:[n.jsxs(U,{children:[n.jsx("h2",{children:"Make Life Easier for the Family:"}),n.jsx("p",{children:"Find Babysitters Online for All Occasions"}),n.jsxs(G,{to:"/nannies",onChange:l,children:[n.jsx("span",{children:"Get started"}),n.jsx("svg",{width:"5",height:"22",children:n.jsx("use",{xlinkHref:a?`${r}#icon-Arrow-up`:`${r}#icon-Arrow-inline`})})]})]}),n.jsx(_,{src:F,alt:"home"}),n.jsxs(T,{children:[n.jsx(D,{children:n.jsx(J,{children:n.jsx("svg",{width:"20",height:"15",children:n.jsx("use",{xlinkHref:`${r}#icon-check`})})})}),n.jsx("p",{children:"Experienced nannies"}),n.jsx("h2",{children:"15,000"})]})]})]})};function V(){return n.jsx(K,{})}export{V as default};
