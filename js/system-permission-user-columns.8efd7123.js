"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[2977],{8339:function(e,t,n){n.r(t),n.d(t,{getColumns:function(){return o}});n(6788);var a=n(97139),l=(n(93300),n(96461)),d=(n(44830),n(27782)),i=n(66252);function r(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,i.lA)(e)}const o=e=>{const{openUpdatePasswordModal:t,openUserModal:n,delRowConfirm:o}=e;return[{title:"头像",width:80,dataIndex:"headImg",hideInSearch:!0,bodyCell:({record:e})=>(0,i.Wm)(d.ZP,{src:e.headImg},null)},{title:"姓名",width:120,dataIndex:"name",align:"center"},{title:"用户名",width:120,align:"center",dataIndex:"username"},{title:"所在部门",dataIndex:"departmentName",hideInSearch:!0,align:"center",width:180},{title:"所属角色",dataIndex:"roleNames",align:"center",hideInSearch:!0,width:220,bodyCell:({record:e})=>{let t;return(0,i.Wm)(a.Z,null,r(t=e.roleNames.map((e=>(0,i.Wm)(l.Z,{color:"success",key:e},r(e)?e:{default:()=>[e]}))))?t:{default:()=>[t]})}},{title:"呢称",width:120,align:"center",dataIndex:"nickName"},{title:"邮箱",width:120,align:"center",dataIndex:"email"},{title:"手机",width:120,align:"center",dataIndex:"phone"},{title:"备注",width:120,align:"center",dataIndex:"remark"},{title:"状态",dataIndex:"status",width:100,formItemProps:{component:"Select",componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},bodyCell:({record:e})=>{const t=1===e.status;return(0,i.Wm)(l.Z,{color:t?"success":"red"},{default:()=>[t?"启用":"禁用"]})}},{title:"操作",width:190,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",onClick:()=>n(e)},{label:"改密",onClick:()=>t(e)},{label:"删除",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>o(e.id)}}]}]}}}]);