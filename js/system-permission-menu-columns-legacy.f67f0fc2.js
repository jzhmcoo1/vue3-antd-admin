"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[5376],{40499:function(e,t,n){n.r(t),n.d(t,{getColumns:function(){return r}});var i=n(66252),a=function(e){switch(e){case 0:return"目录";case 1:return"菜单";case 2:return"权限";default:return""}},r=function(e){var t=e.delRowConfirm,n=e.openMenuModal;return[{title:"名称",dataIndex:"name"},{title:"图标",width:80,dataIndex:"icon",align:"center",bodyCell:function(e){var t=e.record;return(0,i.Wm)(i.HY,null,[t.icon&&(0,i.Wm)((0,i.up)("icon-font"),{type:t.icon,size:"22"},null)])}},{title:"类型",width:80,align:"center",dataIndex:"type",bodyCell:function(e){var t=e.record;return(0,i.Wm)(i.HY,null,[a(t.type)])}},{title:"节点路由",dataIndex:"router",align:"center",width:240},{title:"路由缓存",dataIndex:"keepalive",align:"center",width:80},{title:"文件路径",width:280,align:"center",dataIndex:"viewPath"},{title:"权限",width:300,align:"center",dataIndex:"perms"},{title:"排序号",width:80,align:"center",dataIndex:"orderNum"},{title:"更新时间",width:180,align:"center",dataIndex:"updatedAt"},{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:function(e){var i=e.record;return[{label:"编辑",onClick:function(){return n(i)}},{label:"删除",popConfirm:{title:"你确定要删除吗？",onConfirm:function(){return t(i)}}}]}}]}}}]);