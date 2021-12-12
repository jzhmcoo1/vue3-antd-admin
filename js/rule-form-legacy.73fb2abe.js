"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[2206,6517],{33287:function(e,r,n){n.r(r),n.d(r,{schemas:function(){return t}});var o,a=n(48534),t=(n(35666),n(41539),n(26699),n(32023),[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o=(0,a.Z)(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",Promise.reject("值不能为空"));case 2:if("1"!==n){e.next=4;break}return e.abrupt("return",Promise.reject("值不能为1"));case 4:return e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(e,n){setTimeout((function(){r.includes("admin")?n("该字段不能包含admin关键字"):e()}),100)}))}}]}])},95879:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var o=n(66252),a=(0,o.Uk)(" 确定 ");n(94310);var t,l=n(38e3),u=n(82482),i=(n(58293),n(45542)),c=(n(68309),n(2262)),s=n(6173),p=n(33287),m=(0,o.aZ)({name:"RuleForm",components:(t={},(0,u.Z)(t,i.Z.name,i.Z),(0,u.Z)(t,"SchemaForm",s.SchemaForm),t),setup:function(){var e=(0,c.iH)();return{dynamicForm:e,confirm:function(){var r;null===(r=e.value)||void 0===r||r.validate().then((function(){return l.Z.success("验证通过！")}))},formSchema:{schemas:p.schemas,labelWidth:120}}}});var d=(0,n(83744).Z)(m,[["render",function(e,r,n,t,l,u){var i=(0,o.up)("a-alert"),c=(0,o.up)("a-button"),s=(0,o.up)("schema-form"),p=(0,o.up)("a-card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),(0,o.Wm)(p,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(s,{ref:"dynamicForm","form-schema":e.formSchema},{"operate-button":(0,o.w5)((function(){return[(0,o.Wm)(c,{type:"primary",onClick:e.confirm},{default:(0,o.w5)((function(){return[a]})),_:1},8,["onClick"])]})),_:1},8,["form-schema"])]})),_:1})])}],["__scopeId","data-v-a55ff104"]])}}]);