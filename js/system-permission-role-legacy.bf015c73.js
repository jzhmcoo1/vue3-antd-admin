"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[2375,3882,6595,2673,602],{76518:function(e,t,n){n.d(t,{U4:function(){return a},aS:function(){return o},MB:function(){return d},UJ:function(){return i},m3:function(){return l}});var r=n(28737),u=n(30954);function a(){return(0,r.W)({url:u.default.list,method:"get"})}function o(e){return(0,r.W)({url:"sys/dept/delete",method:"post",data:e},{successMsg:"删除成功"})}function d(e){return(0,r.W)({url:u.default.update,method:"post",data:e})}function i(e){return(0,r.W)({url:u.default.add,method:"post",data:e})}function l(e){return(0,r.W)({url:u.default.transfer,method:"post",data:e})}},71701:function(e,t,n){n.d(t,{Af:function(){return a},ZT:function(){return o},_8:function(){return d},RD:function(){return i}});var r=n(28737),u=n(85467);function a(){return(0,r.W)({url:u.default.list,method:"get"})}function o(e){return(0,r.W)({url:u.default.add,method:"post",data:e},{successMsg:"创建成功"})}function d(e){return(0,r.W)({url:u.default.update,method:"post",data:e},{successMsg:"更新成功"})}function i(e){return(0,r.W)({url:u.default.delete,method:"post",data:e},{successMsg:"删除成功"})}},75761:function(e,t,n){n.d(t,{Xt:function(){return a},JV:function(){return o},$s:function(){return d},fA:function(){return i},ul:function(){return l},Rd:function(){return s}});var r=n(28737),u=n(1834);function a(e){return(0,r.W)({url:u.default.info,method:"get",params:e})}function o(e){return(0,r.W)({url:u.default.list,method:"get",data:e})}function d(e){return(0,r.W)({url:u.default.page,method:"get",params:e})}function i(e){return(0,r.W)({url:u.default.add,method:"post",data:e},{successMsg:"创建角色成功"})}function l(e){return(0,r.W)({url:u.default.update,method:"post",data:e},{successMsg:"更新角色成功"})}function s(e){return(0,r.W)({url:u.default.delete,method:"post",data:e},{successMsg:"删除角色成功"})}},84991:function(e,t,n){n.r(t),n.d(t,{DynamicTable:function(){return r.default},TableQueryHeader:function(){return u.default}});var r=n(86088),u=n(90746)},30954:function(e,t,n){n.r(t),t.default={list:"sys/dept/list",move:"sys/dept/move",update:"sys/dept/update",delete:"sys/dept/delete",add:"sys/dept/add",info:"sys/dept/info",transfer:"sys/dept/transfer"}},85467:function(e,t,n){n.r(t),t.default={list:"sys/menu/list",add:"sys/menu/add",update:"sys/menu/update",info:"sys/menu/info",delete:"sys/menu/delete"}},1834:function(e,t,n){n.r(t),t.default={list:"sys/role/list",page:"sys/role/page",add:"sys/role/add",update:"sys/role/update",delete:"sys/role/delete",info:"sys/role/info"}},47866:function(e,t,n){n.d(t,{f:function(){return r},b:function(){return u}});n(21249),n(57327),n(41539),n(68309);var r=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.filter((function(e){return e.parentId===n})).map((function(n){var r=e(t,n.id);return Object.assign(n,{title:n.name,key:n.id,value:n.id,formData:n,children:r.length?r:null})}))},u=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.filter((function(e){return e.parentId===n})).map((function(n){var r=e(t,n.id);return Object.assign(n,{title:n.name,key:n.id,value:n.id,formData:n,children:r.length?r:null})}))}},55749:function(e,t,n){n.r(t),n.d(t,{roleSchemas:function(){return r}});var r=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"300px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"300px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}]},27540:function(e,t,n){n.r(t),n.d(t,{getColumns:function(){return r}});var r=function(e){var t=e.delRowConfirm,n=e.openMenuModal;return[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0},{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:function(e){var r=e.record;return[{label:"编辑",onClick:function(){return n(r)}},{label:"删除",popConfirm:{title:"你确定要删除吗？",onConfirm:function(){return t(r)}}}]}}]}},6835:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(88478),u=n(48534),a=n(54621),o=n(95082),d=(n(35666),n(41539),n(26699),n(32023),n(92222),n(78783),n(33948),n(21249),n(68309),n(66252)),i=n(2262),l=n(75761),s=n(76518),c=n(71701),f=n(84991),p=n(71806),m=n(27540),h=n(55749),v=n(47866),g=(0,d.Uk)(" 新增 "),y=(0,d.aZ)((0,o.Z)((0,o.Z)({},{name:"SystemPermissionRole"}),{},{setup:function(e){var t=(0,i.iH)(),n=(0,p.U)(),y=(0,a.Z)(n,1)[0],b=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.reduce((function(n,u){var a;return null!==(a=u.children)&&void 0!==a&&a.length?e(t,u.children,r):t.includes(u.value)&&n.push(u.value),n}),r)},k=function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(n){var d,i,f,p,m,g,k,x,I,w,W,Z,R,M;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({modalProps:{title:"".concat(n.id?"编辑":"新增","角色"),width:"50%",onFinish:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(u){var a,d,i,s,c,f,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.roleId=n.id,f=null===(a=p.value)||void 0===a||null===(d=a.compRefs)||void 0===d?void 0:d.menus,m=null===(i=p.value)||void 0===i||null===(s=i.compRefs)||void 0===s?void 0:s.depts,h=(0,o.Z)((0,o.Z)({},u),{},{menus:[].concat((0,r.Z)(f.halfCheckedKeys),(0,r.Z)(f.checkedKeys)),depts:[].concat((0,r.Z)(m.halfCheckedKeys),(0,r.Z)(m.checkedKeys))}),e.next=7,(n.id?l.ul:l.fA)(h);case 7:null===(c=t.value)||void 0===c||c.refreshTable();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},formSchema:{labelWidth:100,layout:"vertical",schemas:h.roleSchemas}});case 2:return i=e.sent,f=(0,a.Z)(i,1),p=f[0],e.next=7,Promise.all([(0,s.U4)(),(0,c.Af)()]);case 7:if(m=e.sent,g=(0,a.Z)(m,2),k=g[0],x=g[1],I=(0,v.b)(x),w=(0,v.f)(k),null===(d=p.value)||void 0===d||d.updateSchema([{field:"menus",componentProps:{treeData:I}},{field:"depts",componentProps:{treeData:w}}]),!n.id){e.next=21;break}return e.next=17,(0,l.Xt)({roleId:n.id});case 17:Z=e.sent,R=Z.menus.map((function(e){return e.menuId})),M=Z.depts.map((function(e){return e.departmentId})),null===(W=p.value)||void 0===W||W.setFieldsValue((0,o.Z)((0,o.Z)({},n),{},{name:Z.roleInfo.name,label:Z.roleInfo.label,remark:Z.roleInfo.remark,menus:b(R,I),depts:b(M,w)}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Rd)({roleIds:[n.id]});case 2:null===(r=t.value)||void 0===r||r.refreshTable();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(0,m.getColumns)({openMenuModal:k,delRowConfirm:x});return function(e,n){var r=(0,d.up)("a-button");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)((0,i.SU)(f.DynamicTable),{ref_key:"dynamicTableRef",ref:t,"row-key":"id","header-title":"角色管理","data-request":(0,i.SU)(l.$s),columns:(0,i.SU)(I),bordered:"",size:"small"},{toolbar:(0,d.w5)((function(){return[(0,d.Wm)(r,{type:"primary",onClick:n[0]||(n[0]=function(e){return k({})})},{default:(0,d.w5)((function(){return[g]})),_:1})]})),_:1},8,["data-request","columns"])])}}}));var b=y}}]);