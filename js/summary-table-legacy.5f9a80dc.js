"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[753,3882,6595,9505,5798],{84991:function(s,e,d){d.r(e),d.d(e,{DynamicTable:function(){return t.default},TableQueryHeader:function(){return n.default}});var t=d(86088),n=d(90746)},6039:function(s,e,d){d.r(e),d.d(e,{columns:function(){return t}});var t=[{title:"卡类",align:"center",fixed:"left",dataIndex:"cardyltype_name"},{title:"售卡数量",align:"center",fixed:"left",dataIndex:"sksl"},{title:"售卡工本费",align:"center",dataIndex:"skssje"},{title:"钱包充值次数",align:"center",dataIndex:"czqbnum_add"},{title:"钱包充值金额",align:"center",dataIndex:"czqbssje_add"},{title:"钱包冲正次数",align:"center",dataIndex:"czqbnum_sub"},{title:"钱包冲正金额",align:"center",dataIndex:"czqbssje_sub"},{title:"月票充值金额",align:"center",dataIndex:"czypssje_add"},{title:"月票冲正金额",align:"center",dataIndex:"czypssje_sub"},{title:"退卡数量",align:"center",dataIndex:"tksl"},{title:"实退金额",align:"center",dataIndex:"tkssje"},{title:"结转数量",align:"center",dataIndex:"jzsl"},{title:"补卡数量",align:"center",dataIndex:"bksl"},{title:"补卡实收金额",align:"center",dataIndex:"bkssje"},{title:"年审数量",align:"center",dataIndex:"nssl"},{title:"年审实收金额",align:"center",dataIndex:"nsssje"},{title:"转卡数量",align:"center",dataIndex:"zksl"},{title:"转卡金额",align:"center",dataIndex:"zkssje"},{title:"汇总日期",align:"center",fixed:"right",width:200,dataIndex:"hzrqStr"}]},29991:function(s,e,d){d.r(e),d.d(e,{default:function(){return b}});var t=d(66252);var n,a=d(95082),c=d(82482),r=(d(84324),d(95878)),z=(d(58293),d(45542)),j=(d(68309),d(47941),d(41539),d(21249),d(9653),d(84991)),_=d(95e3),i=d(6039),l=(0,t.aZ)({name:"CustomModal",components:(n={},(0,c.Z)(n,z.Z.name,z.Z),(0,c.Z)(n,r.ZP.name,r.ZP),(0,c.Z)(n,"DynamicTable",j.DynamicTable),n),setup:function(){return{summaryFunc:function(s){var e=s.dataSource,d=void 0===e?[]:e,t=s.columns,n=void 0===t?[]:t,a=Object.keys(d[0]).reduce((function(s,e){var t=d.map((function(s){return s[e]})).reduce((function(s,e){return e+s}),0);return s[e]=isNaN(Number(t))?"":"".concat(t,"元"),s}),{});return n.reduce((function(s,e,d){return 0===d?s.push("总价"):s.push(a[e.dataIndex]),s}),[])},dataSource:_,columns:i.columns.map((function(s){return(0,a.Z)({width:120},s)}))}}});var b=(0,d(83744).Z)(l,[["render",function(s,e,d,n,a,c){var r=(0,t.up)("a-alert"),z=(0,t.up)("dynamic-table"),j=(0,t.up)("a-card");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(r,{message:"简单封装ant-design-vue的表格",description:"设置属性 show-summary 为 true 会在表格尾部展示合计行。\n        默认第一列不进行计算，而是显示 合计，设置属性 sum-text 可以自定义文字。\n        属性 summary-func 可以自定义合计行每列显示的内容",type:"info","show-icon":""}),(0,t.Wm)(j,{title:"使用show-summary自定义合计规则",style:{"margin-top":"20px"}},{default:(0,t.w5)((function(){return[(0,t.Wm)(z,{"show-summary":!0,size:"small",scroll:{x:1500,y:300},"data-source":s.dataSource,columns:s.columns,rowKey:"id"},null,8,["data-source","columns"])]})),_:1}),(0,t.Wm)(j,{title:"使用summary-func自定义合计规则",style:{"margin-top":"20px"}},{default:(0,t.w5)((function(){return[(0,t.Wm)(z,{"show-summary":!0,"summary-func":s.summaryFunc,size:"small",scroll:{x:1500,y:300},"data-source":s.dataSource,columns:s.columns,rowKey:"id"},null,8,["summary-func","data-source","columns"])]})),_:1})])}]])},95e3:function(s){s.exports=JSON.parse('[{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-31 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-31 00:00:00","tkssje":0,"id":10022,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-30T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-30T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":2,"czqbssje_add":21,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-30 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-30 00:00:00","tkssje":0,"id":10021,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-29T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-29T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":2,"czqbssje_add":3,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":10,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-27 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-27 00:00:00","tkssje":0,"id":10020,"czqbssje_sub":274,"jzsl":0,"jytime":"2021-08-26T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-26T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":20,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":24,"czqbssje_add":120,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-26 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-26 00:00:00","tkssje":0,"id":10019,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-25T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-25T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":1,"czqbssje_add":2,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-25 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-25 00:00:00","tkssje":0,"id":10017,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-24T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-24T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-25 00:00:00","cardyltype_name":"老年A卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-25 00:00:00","tkssje":0,"id":10018,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-24T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-24T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":70,"dept_id":"000"},{"czypssje_add":40,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-17 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-17 00:00:00","tkssje":0,"id":10016,"czqbssje_sub":24,"jzsl":0,"jytime":"2021-08-16T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-16T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":1,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":10,"czqbssje_add":111,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-13 00:00:00","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-13 00:00:00","tkssje":0,"id":10015,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-12T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-12T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":1,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":0,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-12 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-12 00:00:00","tkssje":0,"id":10014,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-11T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-11T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":1,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-11 00:00:00","cardyltype_name":"普通卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-11 00:00:00","tkssje":1,"id":10012,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-10T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-10T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":2,"nssl":0,"bkssje":0,"zksl":1,"cardhand":0,"czqbnum_add":1,"czqbssje_add":1,"cardyltype_id":66,"dept_id":"000"},{"czypssje_add":10,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-11 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-11 00:00:00","tkssje":0,"id":10013,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-10T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-10T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":1,"czqbssje_add":20,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":10,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-10 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-10 00:00:00","tkssje":99,"id":10009,"czqbssje_sub":20,"jzsl":0,"jytime":"2021-08-09T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-09T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":1,"tksl":3,"nssl":0,"bkssje":0,"zksl":4,"cardhand":0,"czqbnum_add":2,"czqbssje_add":40,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-10 00:00:00","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-10 00:00:00","tkssje":0,"id":10010,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-09T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-09T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":2,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":0,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-10 00:00:00","cardyltype_name":"普通卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-10 00:00:00","tkssje":0,"id":10011,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-09T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-09T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":2,"nssl":0,"bkssje":0,"zksl":1,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":66,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-09 00:00:00","cardyltype_name":"普通卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-09 00:00:00","tkssje":20,"id":10007,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-08T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-08T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":1,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":2,"czqbssje_add":3,"cardyltype_id":66,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-09 00:00:00","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-09 00:00:00","tkssje":0,"id":10008,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-08T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-08T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":2,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":1,"czqbssje_add":20,"cardyltype_id":0,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-06 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-06 00:00:00","tkssje":0,"id":10005,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-05T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-05T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":1,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":4,"czqbssje_add":170,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-06 00:00:00","cardyltype_name":"普通卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-06 00:00:00","tkssje":0,"id":10006,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-05T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-05T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":8,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":11,"czqbssje_add":87.5,"cardyltype_id":66,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-08-05 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-05 00:00:00","tkssje":0,"id":10004,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-04T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-04T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":6,"czqbssje_add":102,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":19,"zkssje":0,"jytimeStr":"2021-08-03 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-08-03 00:00:00","tkssje":0,"id":10003,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-08-02T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-08-02T16:00:00.000+00:00","czypssje_sub":0,"skssje":380,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":10,"sksl":0,"zkssje":0,"jytimeStr":"2021-07-30 00:00:00","cardyltype_name":"学生卡","czry_id":"98000218","merchant_id":"0001","bksl":0,"hzrqStr":"2021-07-30 00:00:00","tkssje":0,"id":10002,"czqbssje_sub":300,"jzsl":0,"jytime":"2021-07-29T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-07-29T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":3,"tksl":0,"nssl":2,"bkssje":0,"zksl":0,"cardhand":0,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":65,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-05-25 00:00:00","czry_id":"0254    ","merchant_id":"0001","bksl":2,"hzrqStr":"2021-05-25 00:00:00","tkssje":0,"id":1,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-05-24T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-05-24T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":40,"zksl":0,"cardhand":20,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":4,"dept_id":"000"},{"czypssje_add":0,"sksl":0,"zkssje":0,"jytimeStr":"2021-05-25 00:00:00","czry_id":"0525    ","merchant_id":"0001","bksl":2,"hzrqStr":"2021-05-25 00:00:00","tkssje":0,"id":2,"czqbssje_sub":0,"jzsl":0,"jytime":"2021-05-24T16:00:00.000+00:00","nsssje":0,"person_id":"00000000","hzrq":"2021-05-24T16:00:00.000+00:00","czypssje_sub":0,"skssje":0,"czqbnum_sub":0,"tksl":0,"nssl":0,"bkssje":40,"zksl":0,"cardhand":20,"czqbnum_add":0,"czqbssje_add":0,"cardyltype_id":4,"dept_id":"000"}]')}}]);