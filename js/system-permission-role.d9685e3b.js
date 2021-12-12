"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[2375,3882,6595,2673,602],{76518:function(e,t,n){n.d(t,{U4:function(){return d},aS:function(){return u},MB:function(){return l},UJ:function(){return o},m3:function(){return s}});var r=n(28737),a=n(30954);function d(){return(0,r.W)({url:a.default.list,method:"get"})}function u(e){return(0,r.W)({url:"sys/dept/delete",method:"post",data:e},{successMsg:"删除成功"})}function l(e){return(0,r.W)({url:a.default.update,method:"post",data:e})}function o(e){return(0,r.W)({url:a.default.add,method:"post",data:e})}function s(e){return(0,r.W)({url:a.default.transfer,method:"post",data:e})}},71701:function(e,t,n){n.d(t,{Af:function(){return d},ZT:function(){return u},_8:function(){return l},RD:function(){return o}});var r=n(28737),a=n(85467);function d(){return(0,r.W)({url:a.default.list,method:"get"})}function u(e){return(0,r.W)({url:a.default.add,method:"post",data:e},{successMsg:"创建成功"})}function l(e){return(0,r.W)({url:a.default.update,method:"post",data:e},{successMsg:"更新成功"})}function o(e){return(0,r.W)({url:a.default.delete,method:"post",data:e},{successMsg:"删除成功"})}},75761:function(e,t,n){n.d(t,{Xt:function(){return d},JV:function(){return u},$s:function(){return l},fA:function(){return o},ul:function(){return s},Rd:function(){return i}});var r=n(28737),a=n(1834);function d(e){return(0,r.W)({url:a.default.info,method:"get",params:e})}function u(e){return(0,r.W)({url:a.default.list,method:"get",data:e})}function l(e){return(0,r.W)({url:a.default.page,method:"get",params:e})}function o(e){return(0,r.W)({url:a.default.add,method:"post",data:e},{successMsg:"创建角色成功"})}function s(e){return(0,r.W)({url:a.default.update,method:"post",data:e},{successMsg:"更新角色成功"})}function i(e){return(0,r.W)({url:a.default.delete,method:"post",data:e},{successMsg:"删除角色成功"})}},84991:function(e,t,n){n.r(t),n.d(t,{DynamicTable:function(){return r.default},TableQueryHeader:function(){return a.default}});var r=n(86088),a=n(90746)},30954:function(e,t,n){n.r(t),t.default={list:"sys/dept/list",move:"sys/dept/move",update:"sys/dept/update",delete:"sys/dept/delete",add:"sys/dept/add",info:"sys/dept/info",transfer:"sys/dept/transfer"}},85467:function(e,t,n){n.r(t),t.default={list:"sys/menu/list",add:"sys/menu/add",update:"sys/menu/update",info:"sys/menu/info",delete:"sys/menu/delete"}},1834:function(e,t,n){n.r(t),t.default={list:"sys/role/list",page:"sys/role/page",add:"sys/role/add",update:"sys/role/update",delete:"sys/role/delete",info:"sys/role/info"}},47866:function(e,t,n){n.d(t,{f:function(){return r},b:function(){return a}});const r=(e,t=null)=>e.filter((e=>e.parentId===t)).map((t=>{const n=r(e,t.id);return Object.assign(t,{title:t.name,key:t.id,value:t.id,formData:t,children:n.length?n:null})})),a=(e,t=null)=>e.filter((e=>e.parentId===t)).map((t=>{const n=a(e,t.id);return Object.assign(t,{title:t.name,key:t.id,value:t.id,formData:t,children:n.length?n:null})}))},55749:function(e,t,n){n.r(t),n.d(t,{roleSchemas:function(){return r}});const r=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"300px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"300px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}]},27540:function(e,t,n){n.r(t),n.d(t,{getColumns:function(){return r}});const r=e=>{const{delRowConfirm:t,openMenuModal:n}=e;return[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0},{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",onClick:()=>n(e)},{label:"删除",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>t(e)}}]}]}},6835:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(66252),a=n(2262),d=n(75761),u=n(76518),l=n(71701),o=n(84991),s=n(71806),i=n(27540),c=n(55749),f=n(47866);const p=(0,r.Uk)(" 新增 ");var m=(0,r.aZ)({name:"SystemPermissionRole",setup(e){const t=(0,a.iH)(),[n]=(0,s.U)(),m=(e,t,n=[])=>t.reduce(((t,r)=>(r.children?.length?m(e,r.children,n):e.includes(r.value)&&t.push(r.value),t)),n),h=async e=>{const[r]=await n({modalProps:{title:(e.id?"编辑":"新增")+"角色",width:"50%",onFinish:async n=>{n.roleId=e.id;const a=r.value?.compRefs?.menus,u=r.value?.compRefs?.depts,l={...n,menus:[...a.halfCheckedKeys,...a.checkedKeys],depts:[...u.halfCheckedKeys,...u.checkedKeys]};await(e.id?d.ul:d.fA)(l),t.value?.refreshTable()}},formSchema:{labelWidth:100,layout:"vertical",schemas:c.roleSchemas}}),[a,o]=await Promise.all([(0,u.U4)(),(0,l.Af)()]),s=(0,f.b)(o),i=(0,f.f)(a);if(r.value?.updateSchema([{field:"menus",componentProps:{treeData:s}},{field:"depts",componentProps:{treeData:i}}]),e.id){const t=await(0,d.Xt)({roleId:e.id}),n=t.menus.map((e=>e.menuId)),a=t.depts.map((e=>e.departmentId));r.value?.setFieldsValue({...e,name:t.roleInfo.name,label:t.roleInfo.label,remark:t.roleInfo.remark,menus:m(n,s),depts:m(a,i)})}},y=(0,i.getColumns)({openMenuModal:h,delRowConfirm:async e=>{await(0,d.Rd)({roleIds:[e.id]}),t.value?.refreshTable()}});return(e,n)=>{const u=(0,r.up)("a-button");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)((0,a.SU)(o.DynamicTable),{ref_key:"dynamicTableRef",ref:t,"row-key":"id","header-title":"角色管理","data-request":(0,a.SU)(d.$s),columns:(0,a.SU)(y),bordered:"",size:"small"},{toolbar:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"primary",onClick:n[0]||(n[0]=e=>h({}))},{default:(0,r.w5)((()=>[p])),_:1})])),_:1},8,["data-request","columns"])])}}})}}]);