"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6517],{33287:function(e,r,n){n.r(r),n.d(r,{schemas:function(){return a}});var l,o=n(48534),a=(n(35666),n(41539),n(26699),n(32023),[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(l=(0,o.Z)(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",Promise.reject("值不能为空"));case 2:if("1"!==n){e.next=4;break}return e.abrupt("return",Promise.reject("值不能为1"));case 4:return e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)}))),function(e,r){return l.apply(this,arguments)}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(e,n){setTimeout((function(){r.includes("admin")?n("该字段不能包含admin关键字"):e()}),100)}))}}]}])}}]);