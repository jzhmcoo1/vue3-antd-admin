"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[5354,6698,778],{3520:function(e,t,l){l.r(t),l.d(t,{ACustomModal:function(){return n.default}});var n=l(74262)},15603:function(e,t,l){l.r(t),l.d(t,{default:function(){return a}});var n=l(23279),o=l.n(n),i=l(2262),s=l(66252),u=l(46680);function a(e,{emit:t}){const l=(0,i.iH)(null),n=(0,i.iH)(null),a=(0,i.iH)(null),d=(0,i.iH)(null),r=(0,i.iH)(null),f=(0,i.iH)(null),c=(0,i.iH)(null),m=(0,i.iH)(null),v=(0,i.iH)(null),p=(0,i.iH)(null),y=(0,i.iH)(null),h=(0,i.iH)(null),g=(0,i.iH)(null),R=(0,i.iH)(null),k=(0,i.iH)(null),_=(0,i.iH)(null),b={x:0,y:0},z=e=>Object.assign(b,{x:e.pageX,y:e.pageY});document.documentElement.addEventListener("click",z,!0);const L=(0,u.getTransitionProps)("fade"),H=(0,u.getTransitionProps)("zoom",{onAfterLeave:()=>t("update:visible",!1)});let w,T,E,x,B,W=0;function C(e,t,l,n,o,i){t.onmousedown=function(s){const u=s.clientX-t.offsetLeft,d=s.clientY-t.offsetTop,r=e.offsetTop,f=e.offsetLeft,c=e.offsetWidth,m=e.offsetHeight,v=s=>{const v=s.clientX-u,p=s.clientY-d,y=document.documentElement.clientWidth-e.offsetLeft-2,h=document.documentElement.clientHeight-e.offsetTop-2;let g=l?c-v:t.offsetWidth+v,R=n?m-p:t.offsetHeight+p;return l&&(e.style.left=f+v+"px"),n&&(e.style.top=r+p+"px"),g<400&&(g=400),g>y&&(g=y),o||(a.value.style.width=g+"px"),R<140&&(R=140),R>h&&(R=h),i||(a.value.style.height=R-W-B+"px"),(l&&400==g||n&&140==R)&&(document.onmousemove=null),(l||n)&&(document.onmousemove=null),!1},p=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",p)};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",p),!1}}const Y=()=>{!function(e,t){let l=0;(t=t||e).style.cursor="move",t.onmousedown=function(t){l=t.clientX-e.offsetLeft;const n=t.clientY-e.offsetTop,o=t=>{let o=t.clientX-l,i=t.clientY-n;const s=document.documentElement.clientWidth-e.offsetWidth,u=document.documentElement.clientHeight-e.offsetHeight;return o<=0&&(o=0),i<=0&&(i=0),o>=s&&(o=s),i>=u&&(i=u),e.style.left=o+"px",e.style.top=i+"px",!1},i=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",i),!1},k.value.onclick=function(){const{left:t,top:l}=getComputedStyle(e),{width:n,height:o}=getComputedStyle(a.value);w=n,T=o,E=t,x=l,e.style.top=e.style.left=0,e.style.width=document.documentElement.clientWidth-2+"px",e.style.height=document.documentElement.clientHeight-2+"px",a.value.style.width=e.style.width,a.value.style.height=parseFloat(e.style.height)-B-W+"px",this.style.display="none",_.value.style.display="block"},_.value.onclick=function(){a.value.style.height=T,a.value.style.width=w,e.style.width=e.style.height="unset",e.style.left=E,e.style.top=x,this.style.display="none",k.value.style.display="block"}}(l.value,r.value),C(l.value,p.value,!0,!0,!1,!1),C(l.value,y.value,!1,!0,!1,!1),C(l.value,h.value,!1,!1,!1,!1),C(l.value,g.value,!0,!1,!1,!1),C(l.value,f.value,!0,!1,!1,!0),C(l.value,c.value,!1,!0,!0,!1),C(l.value,m.value,!1,!1,!1,!0),C(l.value,v.value,!1,!1,!0,!1),l.value.style.left=(document.documentElement.clientWidth-l.value.offsetWidth)/2+"px",l.value.style.top=e.centered?(document.documentElement.clientHeight-l.value.offsetHeight)/2+"px":"100px";const{left:t,top:o}=l.value.getBoundingClientRect(),{x:i,y:s}=b;n.value.style.transformOrigin=`${i-t}px ${s-o}px`},M=o()(Y,30);return(0,s.bv)((()=>{(0,s.YP)((()=>e.visible),(e=>{e&&((0,s.Y3)((()=>{B=r.value?.offsetHeight||0,W=d.value?.offsetHeight||0,Y()})),window.addEventListener("resize",M))}),{immediate:!0})})),(0,s.Jd)((()=>{window.removeEventListener("resize",M),document.documentElement.removeEventListener("click",z,!0),M.cancel})),{dragRef:l,modalWrapRef:n,modalBody:a,modalFooter:d,titleRef:r,resizeLRef:f,resizeTRef:c,resizeRRef:m,resizeBRef:v,resizeLTRef:p,resizeTRRef:y,resizeBRRef:h,resizeLBRef:g,minRef:R,maxRef:k,revertRef:_,maskTransitionProps:L,dialogTransitionProps:H,closeModal:()=>{t("update:visible",!1)}}}},74262:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var n=l(66252),o=l(49963),i=l(3577);const s={ref:"modalRootRef",class:"ant-modal-root custom-modal"},u={class:"ant-modal-mask"},a={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},d={ref:"dragRef",class:"ant-modal"},r={class:"ant-modal-content"},f={ref:"titleRef",class:"ant-modal-header"},c={class:"ant-modal-title"},m={class:"ant-modal-operate"},v={ref:"minRef",type:"button",class:"min",title:"最小化"},p={ref:"maxRef",type:"button",class:"max",title:"最大化"},y={ref:"revertRef",type:"button",class:"revert",title:"还原"},h={ref:"resizeLRef",class:"resizeL"},g={ref:"resizeTRef",class:"resizeT"},R={ref:"resizeRRef",class:"resizeR"},k={ref:"resizeBRef",class:"resizeB"},_={ref:"resizeLTRef",class:"resizeLT"},b={ref:"resizeTRRef",class:"resizeTR"},z={ref:"resizeBRRef",class:"resizeBR"},L={ref:"resizeLBRef",class:"resizeLB"},H={ref:"modalBody",class:"ant-modal-body"},w=(0,n.Uk)(" ① 窗口可以拖动；"),T=(0,n._)("br",null,null,-1),E=(0,n.Uk)(" ② 窗口可以通过八个方向改变大小；"),x=(0,n._)("br",null,null,-1),B=(0,n.Uk)(" ③ 窗口可以最小化、最大化、还原、关闭；"),W=(0,n._)("br",null,null,-1),C=(0,n.Uk)(" ④ 限制窗口最小宽度/高度。 "),Y={key:0,ref:"modalFooter",class:"ant-modal-footer"},M=(0,n.Uk)("取 消"),P=(0,n.Uk)("确 认");var U=l(46680),X=l(15603),F=(0,n.aZ)({name:"ACustomModal",components:{Transition:U.Transition},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{type:[String],default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},emits:["update:visible"],setup:(e,t)=>(0,X.default)(e,t)});var O=(0,l(83744).Z)(F,[["render",function(e,t,l,U,X,F){const O=(0,n.up)("a-button");return e.destroyOnClose&&!e.visible?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[],64)):((0,n.wg)(),(0,n.j4)(n.lR,{key:1,to:"body"},[(0,n._)("div",s,[(0,n.Wm)(o.uT,(0,n.dG)({key:"mask"},e.maskTransitionProps),{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",u,null,512),[[o.F8,e.visible]])])),_:1},16),(0,n.Wm)(o.uT,(0,n.dG)({key:"dialog"},e.dialogTransitionProps),{default:(0,n.w5)((()=>[e.visible?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",d,[(0,n._)("div",r,[(0,n._)("div",f,[(0,n._)("span",c,(0,i.zw)(e.title),1),(0,n._)("div",m,[(0,n._)("button",v,null,512),(0,n._)("button",p,null,512),(0,n._)("button",y,null,512),(0,n._)("button",{type:"button",class:"close",title:"关闭",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})])],512),(0,n._)("div",h,null,512),(0,n._)("div",g,null,512),(0,n._)("div",R,null,512),(0,n._)("div",k,null,512),(0,n._)("div",_,null,512),(0,n._)("div",b,null,512),(0,n._)("div",z,null,512),(0,n._)("div",L,null,512),(0,n._)("div",H,[(0,n.WI)(e.$slots,"default",{},(()=>[w,T,E,x,B,W,C]))],512),null!=e.footer?((0,n.wg)(),(0,n.iD)("div",Y,[(0,n.WI)(e.$slots,"footer",{},(()=>[(0,n._)("div",null,[(0,n.Wm)(O,{onClick:e.closeModal},{default:(0,n.w5)((()=>[M])),_:1},8,["onClick"]),(0,n.Wm)(O,{type:"primary",loading:e.confirmLoading,onClick:e.closeModal},{default:(0,n.w5)((()=>[P])),_:1},8,["loading","onClick"])])]))],512)):(0,n.kq)("",!0)])],512)],512)):(0,n.kq)("",!0)])),_:3},16)],512)]))}]])}}]);