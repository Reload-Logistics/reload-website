"use strict";(self.webpackChunkmatols_website=self.webpackChunkmatols_website||[]).push([[13],{1013:(e,s,r)=>{r.r(s),r.d(s,{default:()=>b});var t=r(4858),a=r(4694),l=r(2820),n=r(5043),d=r(2907),i=r(6007),o=r(2780),c=r(5624),u=r(7613),m=r(4732),x=r(579);function b(){const e=(0,d.useQueryClient)(),[s,r]=(0,n.useState)(!1),{register:b,handleSubmit:p,formState:{isLoading:h,errors:f}}=(0,t.mN)(),{data:y,error:v,isError:j,isLoading:g}=(0,d.useQuery)({queryKey:["user-profile"],queryFn:i.l2});(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[]);const{isLoading:w,isSuccess:N,mutateAsync:_,isError:k,error:q}=(0,d.useMutation)("update-profile",{mutationFn:i.eg,onSuccess:s=>{e.invalidateQueries(["user-profile"]),r((e=>!1))},onError:e=>r((e=>!1)),onMutate:e=>r((e=>!0))});return g?(0,x.jsx)(c.q,{secondary_text:"Loading Profile"}):j?(0,x.jsx)(u.$p,{secondaryText:"".concat(v.response.data)}):(0,x.jsx)(m.q,{children:(0,x.jsxs)("main",{className:"max-w-xl mx-auto p-6 my-6 text-black bg-white",children:[(0,x.jsxs)("div",{className:"rounded-md p-4 shadow-sm border border-gray-200",children:[(0,x.jsxs)("h2",{className:"text-start text-black pb-6 font-extrabold text-3xl",children:["Your profile",(0,x.jsx)("p",{className:"text-sm font-normal text-slate-800 pt-2",children:"Thank you for trusting Reload Logistic Services with your personal information."})]}),(0,x.jsx)("form",{onSubmit:p((async e=>{try{await _(e)}catch(v){}})),children:(0,x.jsxs)("div",{className:"rounded-md shadow-sm",children:[(0,x.jsxs)("div",{className:"mb-6",children:[(0,x.jsx)("input",{disabled:!0,type:"email",name:"email",placeholder:"Reload@gmail.com",value:null===y||void 0===y?void 0:y.email,className:(0,a.cn)("text-sm text-slate-800 mb-2 w-full relative shadow-sm block rounded-md border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none")}),(0,x.jsxs)("p",{className:"text-gray-600 text-xs",children:["To change your email please contact"," ",(0,x.jsx)("span",{className:"text-yellow-400 font-bold",children:"Admin"}),"."]})]}),(0,x.jsx)("input",{...b("user_first_name",{required:"User name required",disabled:s,value:null===y||void 0===y?void 0:y.user_first_name}),id:"user_first_name",type:"text",name:"user_first_name",placeholder:"Enter username",className:(0,a.cn)("text-sm text-slate-800  w-full relative shadow-sm block rounded-t-md border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none",{" text-slate-800 placeholder:text-slate-800 bg-red-100":f.user_first_name})}),(0,x.jsx)("input",{...b("user_surname",{required:"User surname required",value:null===y||void 0===y?void 0:y.user_surname,disabled:s}),type:"text",name:"user_surname",placeholder:"Enter surname",autoComplete:"new-off",className:(0,a.cn)("text-sm text-slate-800  w-full relative shadow-sm block border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none",{" text-slate-800 placeholder:text-slate-800 bg-red-100":f.user_surname})}),(0,x.jsx)("input",{...b("user_contact_number",{required:"User contact number required",value:null===y||void 0===y?void 0:y.user_contact_number,disabled:s,maxLength:{value:10,message:"Phone number cannot be more than 10 digits"},minLength:{value:10,message:"Phone number cannot be less than 10 digits"}}),type:"tel",id:"user_contact_number",name:"user_contact_number",placeholder:"Enter contact number",className:(0,a.cn)("text-sm pe-9 text-slate-800 w-full shadow-sm relative block rounded-b-md border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none mb-4",{" text-slate-800 placeholder:text-slate-800 bg-red-100":f.user_contact_number})}),(0,x.jsx)("div",{className:"mt-2",children:[f.user_first_name,f.user_surname,f.user_contact_number].map(((e,s)=>(0,x.jsx)("p",{className:" text-red-500 text-sm italic",children:null===e||void 0===e?void 0:e.message},s)))}),k&&(0,x.jsx)(u.$p,{secondaryText:"".concat(q.response.data.message," ").concat(v.message)}),N&&(0,x.jsx)(u.C9,{secondaryText:"Profile successfully updated"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)(l.$,{className:"rounded-md",disabled:s,type:"submit",children:w||h?(0,x.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,x.jsx)(o.LW,{visible:!0,width:"40",height:"20",color:"#000"})}):"Update profile"})})]})})]}),(0,x.jsx)("div",{className:"mb-20"})]})})}},7613:(e,s,r)=>{r.d(s,{$p:()=>d,C9:()=>l,Z0:()=>n});r(5043);var t=r(4694),a=r(579);function l(e){let{secondaryText:s,className:r,children:l,...n}=e;return(0,a.jsx)("div",{...n,className:(0,t.cn)("bg-green-100 border-t-4 border-green-500 rounded-b-md text-green-900 px-4 py-2",r),role:"alert",children:(0,a.jsx)("div",{className:"flex text-wrap break-words",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold",children:"Yey ! all set"}),(0,a.jsx)("p",{className:"text-sm text-wrap break-words",children:s||"Welcome to Reload Logistics services"})]})})})}function n(e){let{primaryText:s,secondaryText:r,className:l,children:n,...d}=e;return(0,a.jsx)("div",{...d,className:(0,t.cn)("bg-blue-100 border-t-4 border-blue-500 rounded-b-md text-blue-700 px-4 py-2",l),role:"alert",children:(0,a.jsx)("div",{className:"flex text-wrap break-words",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold",children:s}),(0,a.jsx)("p",{className:"text-sm text-wrap break-words",children:r||"Welcome to Reload Logistics services"})]})})})}function d(e){let{secondaryText:s,className:r,children:l,...n}=e;return(0,a.jsx)("div",{...n,className:(0,t.cn)("bg-red-100 border-t-4 border-red-500 rounded-b-md text-red-900 px-4 py-2",r),role:"alert",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold",children:"Oops ! Error"}),(0,a.jsx)("p",{className:"text-sm",children:s||"An error occured"})]})})})}},4732:(e,s,r)=>{r.d(s,{q:()=>d});var t=r(1984);const a={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}};var l=r(607),n=r(579);function d(e){let{children:s,...r}=e;return(0,n.jsx)(t.P.section,{variants:a,animate:"visible",initial:"hidden",exit:"exit",transition:{duration:l.KD,delay:l.XP},children:s})}},5624:(e,s,r)=>{r.d(s,{q:()=>l});var t=r(2780),a=r(579);function l(e){let{secondary_text:s}=e;return(0,a.jsxs)("div",{className:"m-auto max-w-4xl flex flex-col justify-center items-center py-48 my-2 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4",children:[(0,a.jsx)("span",{className:"text-3xl font-bold",children:"Please be patient"}),(0,a.jsx)("span",{className:"text-xl",children:s})]}),(0,a.jsx)(t.LW,{visible:!0,width:"40",height:"20",color:"#000"})]})}}}]);
//# sourceMappingURL=13.18aaff13.chunk.js.map