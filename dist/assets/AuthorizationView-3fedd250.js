import{d as v,r as i,c as f,a as o,t as u,u as t,b as l,U as p,e as c,w as _,o as x,f as m,_ as g}from"./index-ff62b80b.js";import{t as w}from"./toogleLang-5eef3cc0.js";const h={class:"h-screen flex flex-col justify-center items-center"},y={class:"text-3xl text-center"},z={class:"flex mt-3"},A=v({__name:"AuthorizationView",setup(I){const{t:a,updateLocale:d}=w(),n=i(""),r=i("");return(U,e)=>(x(),f("main",h,[o("form",{class:"max-w-sm",onSubmit:e[3]||(e[3]=_(s=>t(m)(n.value,r.value),["prevent"]))},[o("h1",y,u(t(a)("authorization")),1),l(p,{bg:"#0054A8",class:"px-1",value:n.value,"onUpdate:value":e[0]||(e[0]=s=>n.value=s),placeholder:t(a)("login")},null,8,["value","placeholder"]),l(p,{bg:"#0054A8",class:"px-1",value:r.value,"onUpdate:value":e[1]||(e[1]=s=>r.value=s),placeholder:t(a)("password"),type:"password"},null,8,["value","placeholder"]),o("div",z,[l(c,{class:"w-full",title:t(a)("forgotMyPassword")},null,8,["title"]),l(c,{class:"w-full ml-4",title:t(a)("signIn")},null,8,["title"])]),o("div",{onClick:e[2]||(e[2]=s=>t(d)()),class:"text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer"},u(t(a)("updateLanguage")),1)],32)]))}});const B=g(A,[["__scopeId","data-v-a10431f3"]]);export{B as default};
