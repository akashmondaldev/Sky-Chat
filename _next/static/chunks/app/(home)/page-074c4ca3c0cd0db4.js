(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{72997:function(e,t,s){Promise.resolve().then(s.bind(s,19791))},19791:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ed}});var n=s(9268),r=s(86006),a=s(56008),i=s(23640),l=s(84234),o=s(56970),d=s(48136),c=s(55590),u=s(82561);let m=(0,u.Ue)(e=>({sideBar:!1,openSideBar:()=>e({sideBar:!0}),closeSideBar:()=>e({sideBar:!1})}));var f=s(96758),x=s(63899);let v=e=>new Date(e).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),g=e=>{let t=new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});return t};var h=s(92621),p=e=>{var t,s;let{}=e;(0,h.Z)();let r=m(),l=(0,a.useRouter)(),u=(0,x.Z)(),{conversationData:{isGroup:v}}=u;return(0,n.jsxs)("div",{className:"h-[60px] w-1/1 w-full   border-[1px] border-l-[0px]    bg-white   flex justify-between py-3",children:[(0,n.jsxs)("div",{className:"flex items-center p-2 cursor-pointer",children:[(0,n.jsx)(f.YiX,{className:"mr-2 md:hidden",size:28,onClick:()=>{l.replace(i.Z.home),u.reset()}}),(0,n.jsx)(o.u1,{children:(0,n.jsx)("img",{className:"w-12 h-12 rounded-full object-cover border-[1px] border-black",alt:"not found",src:v?(null===(t=u.conversationData.group)||void 0===t?void 0:t.groupImage)||"/user.png":u.friend.image||"/user.png"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.ZT,{variant:"h6",color:"blue-gray",children:v?null===(s=u.conversationData.group)||void 0===s?void 0:s.groupName:u.friend.name}),(0,n.jsx)(o.ZT,{variant:"small",color:"gray",className:"font-normal",children:function(e){switch(typeof e){case"number":break;case"string":e=+new Date(e);break;case"object":e.constructor===Date&&(e=e.getTime());break;default:e=+new Date}var t=[[60,"seconds",1],[120,"1 minute ago","1 minute from now"],[3600,"minutes",60],[7200,"1 hour ago","1 hour from now"],[86400,"hours",3600],[172800,"Yesterday","Tomorrow"],[604800,"days",86400],[1209600,"Last week","Next week"],[2419200,"weeks",604800],[4838400,"Last month","Next month"],[29030400,"months",2419200],[58060800,"Last year","Next year"],[290304e4,"years",29030400],[580608e4,"Last century","Next century"],[580608e5,"centuries",290304e4]],s=(+new Date-e)/1e3,n="ago",r=1;if(0==s)return"Just now";s<0&&(s=Math.abs(s),n="from now",r=2);for(var a,i=0;a=t[i++];)if(s<a[0]){if("string"==typeof a[2])return a[r];return Math.floor(s/a[2])+" "+a[1]+" "+n}return e}(v?u.conversationData.updateDate:u.friend.lastTimeOnline)||"offline"})]})]}),(0,n.jsx)("div",{className:"flex items-center cursor-pointer pr-2",children:(0,n.jsxs)("ul",{className:"flex gap-4",children:[(0,n.jsx)("li",{children:(0,n.jsx)(d.SPk,{size:24})}),(0,n.jsx)("li",{children:(0,n.jsx)(d.gts,{size:24})}),(0,n.jsx)("li",{children:(0,n.jsx)(c.bL4,{size:24,onClick:()=>{r.sideBar?r.closeSideBar():r.openSideBar()}})})]})})]})},j=s(9735),b=s(89725),y=s(84021);let N={message:"",img:null,video:null,messageId:null,authorId:"",id:""},w={id:"",message:"",img:[],reply:N,seenIds:[],createdAt:void 0,updateAt:void 0,conversationId:"",messageUserId:"",date:"",seen:[]},D=(0,u.Ue)(e=>({state:N,setReply:t=>e({state:t})}));var S=e=>{let{Message:t,isSender:s,ProfileImageUrl:a,setSelectedMessage:i,selectedMessage:l}=e,{id:o,message:d,img:c,messageUserId:u,reply:m,date:f}=t,v=(0,x.Z)(),[p,N]=(0,r.useState)(""),w=D(),S=(0,h.Z)(),C=()=>{w.setReply({message:d,img:c,authorId:u,video:"",messageId:o,id:""})};return(0,n.jsx)("div",{className:"w-4/6 ".concat(s&&"ml-auto"," my-2"),onClick:()=>i(o),onMouseOut:()=>N(""),onMouseOver:()=>{N(o)},children:(0,n.jsxs)("div",{className:"flex items-center  ".concat(s?"justify-end":"justify-start"," my-2"),children:[s?(0,n.jsxs)("div",{className:"flex gap-2 mx-2 ".concat(p===o&&s?"":"opacity-0"),children:[(0,n.jsx)(b.ZIz,{size:20}),(0,n.jsx)(j.QV_,{className:"text-black cursor-pointer",size:20,onClick:C}),(0,n.jsx)(y.p1A,{size:20})]}):(0,n.jsx)(n.Fragment,{}),!s&&(0,n.jsx)("img",{className:"w-10 h-10 rounded-full object-cover mr-1",alt:"not found",src:a||"/user.png"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"reply",children:[m.message&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"p-1 px-4 break-all\n       flex rounded-2xl\n       bg-gray-200 text-black\n       my-[2px]",children:m.message})}),m.img&&(null==m?void 0:m.img.map((e,t)=>(0,n.jsx)("img",{src:e,alt:"",className:"object-cover h-60 w-48 rounded-3xl mb-2 opacity-40"},e)))]}),d&&(0,n.jsx)("div",{className:"p-1 px-4 \n                ".concat(s?"bg-blue-400 text-white":"bg-gray-200 text-black","\n                ").concat(c.length>0?"rounded-2xl rounded-br mt-2":"","\n                break-all\n                flex rounded-2xl\n                my-[2px]"),children:(0,n.jsxs)("div",{children:[v.conversationData.isGroup&&!s&&(0,n.jsx)("p",{className:"text-sm font-semibold",children:(e=>{let t=S.FriendList.find(t=>{if(e===t.id)return t.name});return(null==t?void 0:t.name)||""})(t.messageUserId)}),(0,n.jsx)("div",{className:"text-base",children:d}),(0,n.jsx)("p",{className:"text-xs",children:g(f)})]})}),c.length>0&&c.map((e,t)=>(0,n.jsx)("img",{src:e||"/user.png",alt:"",className:"object-cover h-60 w-48 rounded-3xl mb-2"},e))]}),p===o&&!s&&(0,n.jsxs)("div",{className:"flex gap-2 mx-2",children:[(0,n.jsx)(j.QV_,{className:"text-black cursor-pointer",size:20,onClick:C}),(0,n.jsx)(y.p1A,{size:20})]})]})})},C=s(6936),I=s(33134),k=e=>{let{img:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"w-40 h-40 rounded-full object-cover",alt:"not found",src:t||"/user.png"})})},U=e=>{let{UserState:t,conversation:s}=e,{id:a,image:i}=t.state,l=(0,r.useRef)(null),[d,c]=(0,r.useState)(""),u=(0,x.Z)(),[m,f]=(0,r.useState)({id:"",messages:[],senderMessages:[],receiverMessages:[]}),g=()=>{var e;null===(e=l.current)||void 0===e||e.scrollIntoView()};return(0,r.useEffect)(()=>{let e=(0,C.cf)((0,C.JU)(I.db,"UserMessage",s.MessageDataId),{includeMetadataChanges:!0},e=>{f(e.data())});return()=>e()},[s.MessageDataId]),(0,r.useEffect)(()=>{(null==m?void 0:m.messages.length)>0&&g()},[null==m?void 0:m.messages]),(0,n.jsxs)("div",{className:"pt-32 p-2 min-h-[88vh]",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"my-5 flex justify-center items-center",children:(0,n.jsx)(k,{img:u.conversationData.isGroup?"/noGroup.png":u.friend.image})}),(0,n.jsx)(o.ZT,{variant:"h3",color:"blue-gray",children:u.conversationData.isGroup?"Group Name":u.friend.name}),(0,n.jsx)(o.ZT,{variant:"h6",color:"gray",className:"font-normal",children:u.conversationData.isGroup?"This is Group":u.friend.email})]})}),null==m?void 0:m.messages.filter((e,t,s)=>t===s.findIndex(t=>v(t.date)===v(e.date))).map((e,t)=>{var s;return(0,n.jsxs)("div",{className:"my-5",children:[(0,n.jsx)("div",{className:"flex gap-3 w-full justify-center",children:(0,n.jsx)("p",{className:"bg-gray-200 px-1 rounded-md",children:v(e.date)})}),(0,n.jsx)("div",{children:null===(s=m.messages)||void 0===s?void 0:s.map((t,s)=>v(e.date)===v(t.date)&&(0,n.jsx)(S,{Message:t,isSender:t.messageUserId===a,ProfileImageUrl:t.messageUserId===a?i:u.friend.image||"/user.png",setSelectedMessage:c,selectedMessage:d},t.id))})]},e.id)}),(0,n.jsx)("div",{className:"h-16",ref:l})]})},Z=s(87782),E=s(5109),M=s(16160),R=s(25952),L=s.n(R),O=s(10021),F=s(1033),T=e=>{let{children:t,color:s="red",size:r="w-5 h-5",className:a="",onclick:i,content:l,disabled:o}=e;return(0,n.jsxs)("div",{className:"text-sm cursor-pointer",onClick:i,children:[!o&&(0,n.jsx)("p",{className:"w-5 h-5 bg-red-400 rounded-full text-center text-white ml-auto relative top-2 left-2",children:l}),t]})},z=s(77108);let P=L()(()=>s.e(318).then(s.bind(s,52318)),{loadableGenerated:{webpack:()=>[52318]},loading:()=>(0,n.jsx)(z.u,{className:"my-2"}),ssr:!1}),_=L()(()=>s.e(88).then(s.bind(s,82088)),{loadableGenerated:{webpack:()=>[82088]},loading:()=>(0,n.jsx)(z.u,{className:"my-2"}),ssr:!1});var G=e=>{var t,s,d,c;let{onTabChange:u}=e,f=(0,a.useRouter)(),v=(0,h.Z)(),g=(0,x.Z)(),p=m(),[j,b]=(0,r.useState)(""),y=(0,r.useCallback)(()=>{(0,l.FS)();var e=v.state.id;f.replace(i.Z.auth),v.setUser(E.R),g.reset(),p.closeSideBar(),(0,M.Q1)(e,!1)},[g,v,f,p]),N=null===(t=v.state.FriendRequest)||void 0===t?void 0:t.filter(e=>"RECEIVER"==e.keyValue).length;return(0,n.jsx)(n.Fragment,{children:(null===(s=v.state)||void 0===s?void 0:s.id)?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"h-[100px] sticky top-0 z-40 px-4 bg-white my-4",children:[(0,n.jsxs)("div",{className:"justify-between items-center flex pt-1",children:[(0,n.jsx)(o.ZT,{variant:"h4",children:v.state.name}),(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(Z.kTq,{size:24,className:"cursor-pointer",onClick:()=>{u("searchUserList")}}),(0,n.jsxs)(o.v2,{placement:"left-end",children:[(0,n.jsx)(o.Q,{children:(0,n.jsx)("div",{children:(0,n.jsx)(O.Dxw,{size:24})})}),(0,n.jsxs)(o.qy,{children:[(0,n.jsx)(o.sN,{children:"Profile"}),(0,n.jsx)(o.sN,{children:"Setting"}),(0,n.jsx)(o.sN,{onClick:y,children:"Logout"})]})]})]})]}),(0,n.jsxs)("div",{className:"flex my-3 items-center w-full p-2 border-gray-300   border-[1px]  rounded-xl",children:[(0,n.jsx)(F.RB5,{size:20}),(0,n.jsx)("input",{className:"px-2 focus:disabled:outline-none    focus:outline-none w-full",type:"text",placeholder:"Search",value:j,onChange:e=>b(e.target.value)})]}),(0,n.jsxs)("div",{className:"flex justify-between items-end h-8",children:[(0,n.jsx)(o.ZT,{variant:"h6",children:"Message"}),(0,n.jsx)(T,{disabled:N<=0,onclick:()=>{u("notification")},content:N,children:(0,n.jsx)("div",{className:"",children:"Notification"})})]})]}),(0,n.jsx)("div",{className:"pt-5 px-1",children:null===(c=v.state.Conversations.sort(function(e,t){return new Date(e.lastMessageDate).getTime()>new Date(t.lastMessageDate).getTime()?1:-1}))||void 0===c?void 0:null===(d=c.reverse())||void 0===d?void 0:d.filter(e=>{var t,s,n,r;return(null==e?void 0:e.friendData.name)==""||(null==e?void 0:null===(t=e.group)||void 0===t?void 0:t.groupName)==""?e:(null===(s=e.friendData.name)||void 0===s?void 0:s.toLowerCase().includes(j.toLowerCase()))||(null===(r=e.group)||void 0===r?void 0:null===(n=r.groupName)||void 0===n?void 0:n.toLowerCase().includes(j.toLowerCase()))?e:void 0}).map((e,t)=>{let s=e.friendData.id;return e.isGroup?(0,n.jsx)(_,{conversation:e},e.id):(0,n.jsx)(P,{conversation:e,friendId:s},e.id)})})]}):(0,n.jsx)("div",{className:"w-full h-24 my-2 rounded-2xl bg-gray-300 mb-1"})})},J=s(19260),q=s(81667),A=s(54131);let B=L()(()=>s.e(593).then(s.bind(s,39593)),{loadableGenerated:{webpack:()=>[39593]},loading:()=>(0,n.jsx)(z.u,{className:"my-2"}),ssr:!1});var V=e=>{let{onTabChange:t}=e,s=(0,h.Z)(),a=(0,A.Z)(),[i,l]=(0,r.useState)(""),[d,c]=(0,r.useState)([]);(0,r.useEffect)(()=>{let e=(0,C.cf)((0,C.hJ)(I.db,"users"),e=>{let t=e.docs.map(e=>({id:e.id,...e.data()})),n=t.filter(e=>e.id!==s.state.id),r=n.filter(e=>{let{id:t}=e;return!s.state.Conversations.some(e=>e.friendData.id===t)});c(r)},e=>{});return()=>e()},[]);let u=(0,r.useCallback)(async e=>{(0,q.u)(s.state.id,e)},[s.state.id]),m=(0,r.useCallback)(async(e,t)=>{(0,q.j)(e,s.state.id,t)},[s.state.id]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 m-4",children:[(0,n.jsx)(f.YiX,{className:"cursor-pointer",size:30,onClick:()=>{t("myUserList")}}),(0,n.jsx)(o.ZT,{variant:"h4",children:"Search"})]}),(0,n.jsx)("div",{className:"p-3",children:(0,n.jsx)("input",{className:"w-full p-2 border-gray-300   border-[1px] focus:disabled:outline-none    focus:outline-none rounded-xl",type:"text",placeholder:"Search",value:i,onChange:e=>l(e.target.value)})}),(0,n.jsx)("div",{onClick:()=>{a.open()},children:(0,n.jsx)(z.p,{className:"h-20 m-1"})}),(0,n.jsx)("div",{className:"p-1",children:d.filter(e=>{var t;return""===e.name?e:(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(i.toLowerCase()))?e:void 0}).map((e,t)=>{let r=e.FriendRequest.find(e=>(null==e?void 0:e.friendId)===s.state.id),a=s.state.Conversations.find(t=>t.friendData.id===e.id);return(0,n.jsx)(B,{user:e,right:(0,n.jsx)("div",{className:"flex gap-1",children:a?(0,n.jsx)("p",{children:"Connected"}):(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(J.Z,{danger:!0,onClick:()=>m(r.id,e.id),label:"Cancel"}):(0,n.jsx)(J.Z,{onClick:()=>u(e.id),label:"Connect"})})})},e.id)})})]})};let Y=L()(()=>s.e(632).then(s.bind(s,4632)),{loadableGenerated:{webpack:()=>[4632]},loading:()=>(0,n.jsx)(z.u,{className:"h-20 w-full rounded-2xl my-2"}),ssr:!1});var Q=e=>{var t,s;let{onTabChange:r}=e,a=(0,h.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 m-4",children:[(0,n.jsx)(f.YiX,{className:"cursor-pointer",size:30,onClick:()=>{r("notification")}}),(0,n.jsx)(o.ZT,{variant:"h4",children:"Requests"})]}),(0,n.jsx)("div",{children:null===(s=a.state)||void 0===s?void 0:null===(t=s.FriendRequest)||void 0===t?void 0:t.map((e,t)=>{let{id:s,friendId:r,keyValue:i}=e;return"SENDER"===i&&(0,n.jsx)(Y,{UserId:r,right:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(J.Z,{danger:!0,onClick:()=>{(0,q.j)(s,a.state.id,r)},label:"Cancel"})})},s)})})]})};let X=L()(()=>s.e(666).then(s.bind(s,40666)),{loadableGenerated:{webpack:()=>[40666]},loading:()=>(0,n.jsx)(z.u,{className:"h-20 w-full rounded-2xl my-2"}),ssr:!1});var H=e=>{var t;let{onTabChange:s}=e,r=(0,h.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 m-4",children:[(0,n.jsx)(f.YiX,{className:"cursor-pointer",size:30,onClick:()=>{s("myUserList")}}),(0,n.jsx)(o.ZT,{variant:"h4",children:"Notification"})]}),(0,n.jsxs)("div",{className:"text-sm cursor-pointer p-4 items-center flex h-4 mt-2 justify-between",onClick:()=>{s("requestUserList")},children:[(0,n.jsx)(o.ZT,{variant:"h6",children:"Message Requests"}),(0,n.jsx)(o.ZT,{variant:"h6",children:"Pending List"})]}),(0,n.jsx)("div",{children:null===(t=r.state.FriendRequest)||void 0===t?void 0:t.map((e,t)=>{let{friendId:s,keyValue:r}=e;return"RECEIVER"==r&&(0,n.jsx)(X,{UserId:s,item:e},s)})})]})},K=e=>{var t;let{}=e,[s,a]=r.useState("myUserList"),i=(0,h.Z)(),l=e=>{a(e)};return(0,n.jsx)(n.Fragment,{children:(null===(t=i.state)||void 0===t?void 0:t.id)&&(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"".concat("myUserList"!==s&&"hidden"),children:(0,n.jsx)(G,{onTabChange:l})}),(0,n.jsx)("div",{className:"".concat("searchUserList"!==s&&"hidden"),children:(0,n.jsx)(V,{onTabChange:l})}),(0,n.jsx)("div",{className:"".concat("requestUserList"!==s&&"hidden"),children:(0,n.jsx)(Q,{onTabChange:l})}),(0,n.jsx)("div",{className:"".concat("notification"!==s&&"hidden"),children:(0,n.jsx)(H,{onTabChange:l})})]})})},W=s(35743),$=s(9802),ee=s(22082),et=s(9516);let es=e=>{var t,s,i,l,o,u,m;let{conversation:f,messageUserId:v}=e;(0,h.Z)();let g=(0,a.useSearchParams)().get("chat"),p=(0,x.Z)(),j=D(),[b,y]=(0,r.useState)({id:(0,$.ZP)(),message:"",img:[],reply:N,seenIds:[],messageUserId:v,createdAt:void 0,updateAt:void 0,conversationId:g,seen:[]}),S=async()=>{(0,ee.P)({...b,conversationId:g,reply:j.state},f.MessageDataId),y({...w,messageUserId:v,id:(0,$.ZP)()}),j.setReply(N);let e={lastMessage:b.message,UserId:v,friendId:p.friend.id,conversationId:g};p.conversationData.isGroup?(0,et.hO)(e,p.conversationData):(0,et.Qz)(e)},C=e=>{var t=[];let s=e.target.files.length;for(let n=0;n<s;n++){let s=e.target.files[n];s.id=(0,$.ZP)(),t.push(e.target.files[n])}let n=[...b.img,...t];y({...b,img:n})},I=e=>{let t=b.img.filter(t=>t.id!==e);y({...b,img:t})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"bg-white p-3 pt-1 w-full",children:(0,n.jsxs)("div",{className:"rounded-3xl border-[1px]",children:[(0,n.jsxs)("div",{className:"w-full flex gap-3 m-1 mt-0 items-center",children:[b.img.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{onClick:()=>{I(e.id)},className:"flex justify-end cursor-pointer",children:(0,n.jsx)(c.toq,{size:20})}),(0,n.jsx)("img",{className:"w-16 h-16 rounded-2xl object-cover",alt:"not found",src:URL.createObjectURL(e)})]},t)),j.state.messageId&&(0,n.jsxs)("div",{className:"flex m-3 justify-between w-full",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(null===(t=j.state)||void 0===t?void 0:t.authorId)===v?"Replying to yourself":"Replying"}),(null===(s=j.state)||void 0===s?void 0:s.message)&&(0,n.jsx)("div",{children:null===(i=j.state)||void 0===i?void 0:i.message}),(null===(l=j.state)||void 0===l?void 0:l.img)&&(null===(o=j.state)||void 0===o?void 0:o.img.map(e=>(0,n.jsx)("img",{className:"w-16 h-16 rounded-2xl object-cover",alt:"not found",src:e},e)))]}),(0,n.jsx)("div",{onClick:()=>{j.setReply(N)},className:"flex justify-end cursor-pointer",children:(0,n.jsx)(c.toq,{size:25})})]}),b.img.length>0&&(0,n.jsx)("label",{htmlFor:"myImage",className:"cursor-pointer w-16   h-16 bg-gray-100 rounded-2xl   flex justify-center items-center",children:(0,n.jsx)(O.qiA,{size:40})})]}),(0,n.jsxs)("div",{className:"flex items-center px-4",children:[(0,n.jsx)(W.PxY,{size:30,className:"mr-2"}),(0,n.jsx)("input",{onChange:e=>{y({...b,message:e.target.value})},id:"Message",type:"text",value:b.message,autoComplete:"off",placeholder:"Message...",className:"w-full border-gray-300 rounded-full outline-none focus:none p-2 "}),(null===(u=b.message)||void 0===u?void 0:u.length)>0||(null===(m=b.img)||void 0===m?void 0:m.length)>0?(0,n.jsx)("button",{className:"font-semibold text-blue-500 hover:text-black cursor-pointer",onClick:S,children:"Send"}):(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(d.Ln0,{size:25}),(0,n.jsx)("label",{htmlFor:"myImage",className:"cursor-pointer",children:(0,n.jsx)(O.qiA,{size:25})}),(0,n.jsx)(F.lo,{size:25})]})]})]})}),(0,n.jsx)("input",{multiple:!0,className:"hidden",type:"file",name:"myImage",id:"myImage",onChange:e=>{C(e)}})]})};var en=s(19922),er=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"   sm:min-w-[380px]   md:flex min-h-screen    overflow-y-scroll   hidden border-[1px]    h-[90vh]",children:(0,n.jsx)("div",{className:"w-full",children:t})})})};let ea=L()(()=>s.e(632).then(s.bind(s,4632)),{loadableGenerated:{webpack:()=>[4632]},loading:()=>(0,n.jsx)(z.u,{className:"h-20 w-full rounded-2xl my-2"}),ssr:!1});var ei=e=>{let{}=e,[t,s]=r.useState(""),a=(0,x.Z)();if((0,h.Z)(),a.conversationData.isGroup){let{GroupConversationData:{admin:e,groupName:r,groupImage:i,groupMembers:l,CreatedUser:d}}=a;return(0,n.jsxs)(er,{children:[(0,n.jsx)("div",{className:"p-3 flex items-center gap-5 sticky top-0 z-40 px-4 py-4 bg-white",children:(0,n.jsx)(o.ZT,{variant:"h5",children:r})}),(0,n.jsx)("div",{className:"Input For User Search px-2",children:(0,n.jsxs)("div",{className:"flex my-3 items-center w-full p-2 border-gray-300   border-[1px] rounded-xl",children:[(0,n.jsx)(F.RB5,{size:20}),(0,n.jsx)("input",{className:"px-2 focus:disabled:outline-none    focus:outline-none w-full",type:"text",placeholder:"Search",value:t,onChange:e=>s(e.target.value)})]})}),(0,n.jsx)("div",{className:"p-1",children:l.map(t=>(0,n.jsx)(ea,{UserId:t.userId,right:(0,n.jsx)("div",{children:e[0]===t.userId&&(0,n.jsx)(o.ZT,{variant:"small",color:"gray",className:"font-normal",children:"Admin"})})},t.id))}),(0,n.jsxs)("div",{className:"m-5",children:[(0,n.jsx)(o.ZT,{variant:"h6",className:"font-semibold text-base my-4 cursor-pointer",children:"Add Participants"}),(0,n.jsx)(o.ZT,{variant:"h6",color:"red",className:"font-semibold text-base my-4 cursor-pointer",children:"Exit Group"}),(0,n.jsx)(o.ZT,{variant:"h6",color:"red",className:"font-semibold text-base my-4 cursor-pointer",children:"Report Group"})]})]})}return(0,n.jsxs)(er,{children:[(0,n.jsx)("div",{className:"p-3 flex items-center gap-5 sticky top-0 z-50 px-4 py-4 bg-white",children:(0,n.jsx)(o.ZT,{variant:"h5",children:"Details"})}),(0,n.jsxs)("div",{className:"cursor-pointer flex p-4 border-t-[1px] border-b-[1px] border-gray-300 my-5 items-center hover:bg-gray-100",children:[(0,n.jsx)(o.u1,{children:(0,n.jsx)("img",{className:"w-14 h-14 rounded-full object-cover border-[1px] border-black",alt:"not found",src:a.friend.image||"/user.png"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.ZT,{variant:"h6",color:"blue-gray",children:a.friend.name||"Loading..."}),(0,n.jsx)(o.ZT,{variant:"small",color:"gray",className:"font-normal",children:a.friend.email||"Loading..."})]})]}),(0,n.jsxs)("div",{className:"m-5",children:[(0,n.jsx)(o.ZT,{variant:"h6",color:"red",className:"font-semibold text-base my-4 cursor-pointer",children:"Report"}),(0,n.jsx)(o.ZT,{variant:"h6",color:"red",className:"font-semibold text-base my-4 cursor-pointer",children:"Block"}),(0,n.jsx)(o.ZT,{variant:"h6",color:"red",className:"font-semibold text-base my-4 cursor-pointer",children:"Delete"})]})]})},el=()=>{var e;let t=(0,a.useSearchParams)().get("chat"),s=(0,h.Z)(),i=(0,x.Z)(),l=m(),o=(0,a.usePathname)();return(0,r.useEffect)(()=>{if(t){var e;null===(e=s.state.Conversations)||void 0===e||e.find(e=>{e.id===t&&i.setConversationData(e)})}},[t]),(0,r.useEffect)(()=>(window.addEventListener("beforeunload",function(e){var t;(null===(t=s.state)||void 0===t?void 0:t.id)&&(0,M.Q1)(s.state.id,!1)}),()=>{window.removeEventListener("beforeunload",()=>{console.log("remove")})})),(0,r.useEffect)(()=>{var e;(null===(e=s.state)||void 0===e?void 0:e.id)&&(0,M.Q1)(s.state.id,!0)},[]),(0,n.jsxs)("div",{className:"flex md:w-full max-h-[100vh]",children:[(0,n.jsx)(er,{children:(0,n.jsx)(K,{})}),(0,n.jsxs)(n.Fragment,{children:[i.conversationData.id||"/"!==o?(0,n.jsxs)("div",{className:"w-full overflow-y-scroll",children:[(0,n.jsx)("div",{className:"md:sticky w-full fixed top-0",children:(0,n.jsx)(p,{conversation:i.conversationData,UserState:s})}),(0,n.jsx)(U,{conversation:i.conversationData,UserState:s}),(0,n.jsx)("div",{className:"md:sticky w-full fixed bottom-0",children:(0,n.jsx)(es,{conversation:i.conversationData,messageUserId:null===(e=s.state)||void 0===e?void 0:e.id})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"md:flex w-full justify-center items-center min-h-screen hidden",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"p-3 border-[2px] rounded-full border-black dark:border-white w-24 h-24 justify-center flex items-center mx-auto",children:(0,n.jsx)(en.ZbJ,{size:80})}),(0,n.jsx)("div",{className:"text-base my-4",children:"Your messages"}),(0,n.jsx)("div",{className:"text-base my-4",children:"Send private photos and messages to a friend or group"}),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 font-semibold text-white p-2 px-4 text-sm rounded-xl",children:"Send message"})]})}),(0,n.jsx)("div",{className:"md:hidden flex w-full justify-between",children:(0,n.jsx)(K,{})})]})," "]}),l.sideBar&&(0,n.jsx)(ei,{})]})};s(56032);var eo=()=>(0,n.jsx)("div",{className:"justify-center items-center flex min-h-screen",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{className:"w-60 h-60",src:"/mylogo.jpg"}),(0,n.jsx)("div",{className:"flex my-5 justify-center items-end text-3xl font-semibold",children:"Sky Chat"})]}),(0,n.jsx)("div",{className:"flex justify-center items-end font-semibold text-gray-600",children:"BY SKY INC"}),(0,n.jsx)("div",{className:"flex justify-center items-end font-semibold text-gray-600",children:"Akash"})]})});function ed(){let[e,t]=(0,r.useState)(!0),s=(0,h.Z)(),o=(0,a.useRouter)();return(0,r.useEffect)(()=>{let e=(0,l.YT)();if(e)try{let n=(0,C.cf)((0,C.JU)(I.db,"users",e),{includeMetadataChanges:!0},e=>{s.setUser(e.data()),t(!1)});return()=>{n()}}catch(e){console.log("error",e)}else o.replace(i.Z.auth)},[o]),(0,n.jsx)("div",{children:e?(0,n.jsx)(eo,{}):(0,n.jsx)(el,{})})}},56970:function(e,t,s){"use strict";s.d(t,{HC:function(){return n.ListItem},Q:function(){return n.MenuHandler},XZ:function(){return n.Checkbox},ZT:function(){return n.Typography},qy:function(){return n.MenuList},sN:function(){return n.MenuItem},u1:function(){return n.ListItemPrefix},v2:function(){return n.Menu}});var n=s(46095)},19260:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(9268);s(86006);var r=s(89791);t.C=e=>{let{type:t,fullWidth:s,children:a,onClick:i,secondary:l,danger:o,disabled:d}=e;return(0,n.jsx)("button",{onClick:i,type:t,disabled:d,className:(0,r.Z)("\n    flex justify-center\n    rounded-md\n    px-3\n    py-2\n    text-md\n    font-semibold\n    focus-visible:outline\n    focus-visible:outline-2\n    focus-visible:outline-offset-2\n    bg-blue-500\n    ",d&&"opacity-50 cursor-default",s&&"w-full",l?"text-gray-900":"text-white",o&&"bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",!l&&!o&&"bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"),children:a})};let a=e=>{let{type:t,fullWidth:s,children:r,onClick:a,secondary:i,danger:l,disabled:o,label:d,css:c}=e;return(0,n.jsx)("button",{onClick:a,type:t,disabled:o,className:" ".concat(c,"\n    p-1 px-2 text-base\n   opacity-90 font-semibold\n   ").concat(s&&"w-full","\n    ").concat(l?"bg-gray-300 hover:bg-gray-300 text-gray-900 focus-visible:outline-gray-600":"bg-blue-500 hover:bg-blue-600 text-white","\n   rounded-md"),children:d})}},77108:function(e,t,s){"use strict";s.d(t,{p:function(){return i},u:function(){return a}});var n=s(9268);s(86006);var r=s(9735);let a=e=>{let{className:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:t,children:(0,n.jsx)("div",{className:"cursor-pointer flex justify-between items-center py-3 px-2 rounded-xl hover:bg-gray-100",children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"mx-2",children:(0,n.jsx)("div",{className:"w-14 h-14 bg-gray-300 rounded-full"})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("div",{className:"w-52 h-4 bg-gray-300 rounded mb-1"}),(0,n.jsx)("div",{className:"w-28 h-4 bg-gray-300 rounded"})]})})]})})})})},i=e=>{let{className:t}=e;return(0,n.jsx)("div",{className:t,children:(0,n.jsx)("div",{className:"cursor-pointer flex justify-between items-center py-3 px-2 rounded-xl hover:bg-gray-100",children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"mx-2",children:(0,n.jsx)("div",{children:(0,n.jsx)(r.hov,{size:55,className:"bg-gray-300 rounded-full"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"text-lg font-semibold",children:"New Group"})})})]})})})}},84234:function(e,t,s){"use strict";s.d(t,{D0:function(){return r},FS:function(){return a},YT:function(){return n}});let n=()=>{{let e=localStorage.getItem("skyinc-auth");return e?JSON.parse(e):null}},r=e=>{localStorage.setItem("skyinc-auth",JSON.stringify(e))},a=()=>{localStorage.removeItem("skyinc-auth")}},54131:function(e,t,s){"use strict";var n=s(82561);let r=(0,n.Ue)(e=>({isOpen:!1,open:()=>e({isOpen:!0}),close:()=>e({isOpen:!1})}));t.Z=r},63899:function(e,t,s){"use strict";var n=s(70393),r=s(5109),a=s(82561);let i=(0,a.Ue)(e=>({conversationData:n.F,friend:r.R,GroupConversationData:n.E,setFriend:t=>e(()=>({friend:t})),setConversationData:t=>e(()=>({conversationData:t,GroupConversationData:t.group})),reset:()=>e(()=>({conversationData:n.F,Friend:r.R})),setConversationAndFriend:(t,s)=>e(()=>({conversationData:t,friend:s}))}));t.Z=i},92621:function(e,t,s){"use strict";var n=s(5109),r=s(82561);let a=(0,r.Ue)(e=>({state:n.R,FriendList:[],setUser:t=>e({state:t}),setFriendList:t=>e(e=>e.FriendList.find(e=>e.id===t.id)?e:{FriendList:[...e.FriendList,t]})}));t.Z=a},70393:function(e,t,s){"use strict";s.d(t,{E:function(){return r},F:function(){return n}});let n={id:"",createDate:void 0,updateDate:void 0,lastMessageDate:void 0,lastMessage:"",type:"PERSONAL",MessageDataId:"",friendData:{id:"",name:"",email:""},group:{admin:[],groupName:null,groupImage:null,groupMembers:[],CreatedUser:""},isGroup:!1},r={admin:[],groupName:"",groupImage:"",groupMembers:[],CreatedUser:""}},5109:function(e,t,s){"use strict";s.d(t,{R:function(){return n}});let n={id:"",name:"",email:"",emailVerified:!1,image:"",createDate:new Date,updateDate:new Date,FriendRequest:[],activeUser:!1,bio:"",Conversations:[]}},25952:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=s(26927);s(86006);let r=n._(s(6353));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){let s=r.default,n={loading:e=>{let{error:t,isLoading:s,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let i=n.loader;return s({...n,loader:()=>null!=i?i().then(a):Promise.resolve(a(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90761:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{suspense:function(){return r},NoSSR:function(){return a}}),s(26927),s(86006);let n=s(98687);function r(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},6353:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=s(26927),r=n._(s(86006)),a=s(90761),i=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function s(e){let s=t.loading,n=r.default.createElement(s,{isLoading:!0,pastDelay:!0,error:null}),i=t.ssr?r.default.Fragment:a.NoSSR,l=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:n},r.default.createElement(i,null,r.default.createElement(l,e)))}return t.lazy=r.default.lazy(t.loader),s.displayName="LoadableComponent",s}},23640:function(e,t){"use strict";t.Z={home:"/",auth:"/auth",inbox:"/inbox"}},9516:function(e,t,s){"use strict";s.d(t,{DO:function(){return c},HA:function(){return o},Qz:function(){return d},hO:function(){return u}});var n=s(6936),r=s(33134),a=s(9802),i=s(22082),l=s(16160);let o=async(e,t)=>{let s=new Date().toISOString(),l=(0,a.ZP)(),o={id:(0,a.ZP)(),createDate:s,updateDate:s,lastMessageDate:s,lastMessage:"new conversation",type:"PERSONAL",MessageDataId:l,friendData:{id:t.id,name:t.name,email:t.email},isGroup:!1,group:{admin:[],groupName:null,groupImage:null,groupMembers:[],CreatedUser:""}},d={...o,friendData:{id:e.id,name:e.name,email:e.email}};try{return(0,n.r7)((0,n.JU)(r.db,"users",e.id),{Conversations:(0,n.vr)(o)}),(0,n.r7)((0,n.JU)(r.db,"users",t.id),{Conversations:(0,n.vr)(d)}).then(()=>{(0,i.D)(l)}),!0}catch(e){return console.log(e),{message:e,code:400}}},d=async e=>{let t=new Date().toString(),{lastMessage:s,UserId:a,friendId:i,conversationId:o}=e;try{let e=await (0,l.Lv)(a),d=await (0,l.Lv)(i),c=e.Conversations.map(e=>e.id===o?{...e,lastMessage:s,lastMessageDate:t}:e),u=d.Conversations.map(e=>e.id===o?{...e,lastMessage:s,lastMessageDate:t}:e);await (0,n.pl)((0,n.JU)(r.db,"users",a),{...e,Conversations:c}),await (0,n.pl)((0,n.JU)(r.db,"users",i),{...d,Conversations:u})}catch(e){console.log("Error getting document:",e)}},c=async e=>{let t=new Date().toString(),s=(0,a.ZP)(),l={id:(0,a.ZP)(),createDate:t,updateDate:t,lastMessageDate:t,lastMessage:"add you",isGroup:!0,group:e,type:"GROUP",MessageDataId:s,friendData:{id:"",name:"",email:""}};try{for(let t=0;t<e.groupMembers.length;t++){let s=e.groupMembers[t];await (0,n.r7)((0,n.JU)(r.db,"users",s.userId),{Conversations:(0,n.vr)(l)})}return await (0,i.D)(s),!0}catch(e){console.log(e)}},u=async(e,t)=>{var s;let a=new Date().toString(),{lastMessage:i,UserId:o,friendId:d,conversationId:c}=e,u=(null===(s=t.group)||void 0===s?void 0:s.groupMembers)||[];if(u.length<0)throw Error("user not found");for(let e=0;e<(null==u?void 0:u.length);e++){let t=await (0,l.Lv)(u[e].userId);Promise.all(t.Conversations.map(e=>e.id===c?{...e,lastMessage:i,lastMessageDate:a}:e)).then(s=>{(0,n.pl)((0,n.JU)(r.db,"users",u[e].userId),{...t,Conversations:s})})}}},16160:function(e,t,s){"use strict";s.d(t,{Lv:function(){return a},Q1:function(){return l},Ti:function(){return i}});var n=s(6936),r=s(33134);let a=async e=>{try{let t=await (0,n.QT)((0,n.JU)(r.db,"users",e));return t.exists()?t.data():null}catch(e){return console.log("Error getting document:",e),null}},i=async e=>{let t=new Date().toISOString(),s={id:e.id,name:e.name,email:e.email,emailVerified:!1,image:e.image,lastTimeOnline:t,activeUser:!0,bio:"",createDate:t,updateDate:t,FriendRequest:[],Conversations:[]};try{await (0,n.pl)((0,n.JU)(r.db,"users",e.id),s)}catch(e){console.log(e)}},l=async(e,t)=>{try{await (0,n.r7)((0,n.JU)(r.db,"users",e),{activeUser:t,lastTimeOnline:new Date().toISOString()})}catch(e){console.log(e)}}},33134:function(e,t,s){"use strict";s.d(t,{db:function(){return o},lX:function(){return d},tO:function(){return c}});var n=s(1313),r=s(24734),a=s(6936),i=s(64202);let l=(0,n.ZF)({apiKey:"AIzaSyBcVSdMQGFxgaBIiJwvfmL5EIbEnUb0tJo",authDomain:"next-js-chat-app-33c2b.firebaseapp.com",projectId:"next-js-chat-app-33c2b",storageBucket:"next-js-chat-app-33c2b.appspot.com",messagingSenderId:"269077837950",appId:"1:269077837950:web:aa04484eb3107351d2c02f"}),o=(0,a.ad)(l),d=(0,r.v0)(l),c=(0,i.cF)(l);(0,r.v0)(l)},81667:function(e,t,s){"use strict";s.d(t,{j:function(){return o},u:function(){return l}});var n=s(16160),r=s(6936),a=s(33134),i=s(9802);let l=async(e,t)=>{let s=(0,i.ZP)(),n=new Date().toISOString(),l={id:s,status:!1,keyValue:"SENDER",createDate:n,friendId:t},o={...l,keyValue:"RECEIVER",friendId:e};try{return await (0,r.r7)((0,r.JU)(a.db,"users",t),{FriendRequest:(0,r.vr)(o)}),await (0,r.r7)((0,r.JU)(a.db,"users",e),{FriendRequest:(0,r.vr)(l)}),!0}catch(e){console.log(e)}},o=async(e,t,s)=>{try{let i=await (0,n.Lv)(t);await (0,r.r7)((0,r.JU)(a.db,"users",t),{FriendRequest:i.FriendRequest.filter(t=>(null==t?void 0:t.id)!==e)});let l=await (0,n.Lv)(s);return await (0,r.r7)((0,r.JU)(a.db,"users",s),{FriendRequest:l.FriendRequest.filter(t=>(null==t?void 0:t.id)!==e)}),!0}catch(e){console.log(e)}}},22082:function(e,t,s){"use strict";s.d(t,{D:function(){return l},P:function(){return i}});var n=s(6936),r=s(33134),a=s(6823);let i=async(e,t)=>{var s=[];try{if(e.img.length>0)for(let t=0;t<e.img.length;t++){let n=await (0,a.z)(e.img[t],e.messageUserId);s.push(n)}await (0,n.r7)((0,n.JU)(r.db,"UserMessage",t),{senderMessages:[],receiverMessages:[],messages:(0,n.vr)({id:e.id,message:e.message,img:s,reply:e.reply,seenIds:e.seenIds,createdAt:new Date().toISOString(),updateAt:new Date().toISOString(),date:new Date().toISOString(),conversationId:e.conversationId,messageUserId:e.messageUserId})})}catch(e){console.log(e)}},l=async e=>await (0,n.pl)((0,n.JU)(r.db,"UserMessage",e),{id:e,messages:[],senderMessages:[],receiverMessages:[]}).then(()=>e).catch(e=>{console.log(e)})},6823:function(e,t,s){"use strict";s.d(t,{z:function(){return a}});var n=s(64202),r=s(33134);let a=async(e,t)=>{let s=new Promise((s,a)=>{let i=(0,n.iH)(r.tO,"UserFiles/".concat(t,"/").concat(e.name)),l=(0,n.B0)(i,e);l.on("state_changed",e=>{e.bytesTransferred,e.totalBytes},e=>{console.log(e)},()=>{(0,n.Jt)(l.snapshot.ref).then(e=>{s(e)})})});return s}},56032:function(){},56008:function(e,t,s){e.exports=s(4e3)},98727:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(86006),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,i=n.useEffect,l=n.useLayoutEffect,o=n.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!r(e,s)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var s=t(),n=a({inst:{value:s,getSnapshot:t}}),r=n[0].inst,c=n[1];return l(function(){r.value=s,r.getSnapshot=t,d(r)&&c({inst:r})},[e,s,t]),i(function(){return d(r)&&c({inst:r}),e(function(){d(r)&&c({inst:r})})},[e]),o(s),s};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},94464:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(86006),r=s(3276),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useSyncExternalStore,l=n.useRef,o=n.useEffect,d=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,s,n,r){var u=l(null);if(null===u.current){var m={hasValue:!1,value:null};u.current=m}else m=u.current;u=d(function(){function e(e){if(!o){if(o=!0,i=e,e=n(e),void 0!==r&&m.hasValue){var t=m.value;if(r(t,e))return l=t}return l=e}if(t=l,a(i,e))return t;var s=n(e);return void 0!==r&&r(t,s)?t:(i=e,l=s)}var i,l,o=!1,d=void 0===s?null:s;return[function(){return e(t())},null===d?void 0:function(){return e(d())}]},[t,s,n,r]);var f=i(e,u[0],u[1]);return o(function(){m.hasValue=!0,m.value=f},[f]),c(f),f}},3276:function(e,t,s){"use strict";e.exports=s(98727)},97737:function(e,t,s){"use strict";e.exports=s(94464)},9802:function(e,t,s){"use strict";let n=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function r(){var e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.split(/[:\/]/g).pop().toLowerCase()}r.valid=function(e){return n.test(e)},t.ZP=r},82561:function(e,t,s){"use strict";s.d(t,{Ue:function(){return d}});let n=e=>{let t;let s=new Set,n=(e,n)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=n?n:"object"!=typeof r)?r:Object.assign({},t,r),s.forEach(s=>s(t,e))}},r=()=>t,a={setState:n,getState:r,subscribe:e=>(s.add(e),()=>s.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}};return t=e(n,r,a),a},r=e=>e?n(e):n;var a=s(86006),i=s(97737);let{useSyncExternalStoreWithSelector:l}=i,o=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?r(e):e,s=(e,s)=>(function(e,t=e.getState,s){let n=l(e.subscribe,e.getState,e.getServerState||e.getState,t,s);return(0,a.useDebugValue)(n),n})(t,e,s);return Object.assign(s,t),s},d=e=>e?o(e):o}},function(e){e.O(0,[662,271,679,680,130,287,827,166,775,877,371,162,372,173,190,253,698,744],function(){return e(e.s=72997)}),_N_E=e.O()}]);