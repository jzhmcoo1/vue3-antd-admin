"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[8187,3882,6595],{49167:function(t,e,n){n.d(e,{Io:function(){return u},E$:function(){return i}});var r=n(28737),a=n(15393);function u(t){return(0,r.W)({url:a.default.req,method:"get",params:t},{isMock:!0,isGetDataDirectly:!1})}function i(t){return(0,r.W)({url:a.default.login,method:"get",params:t})}},84991:function(t,e,n){n.r(e),n.d(e,{DynamicTable:function(){return r.default},TableQueryHeader:function(){return a.default}});var r=n(86088),a=n(90746)},15393:function(t,e,n){n.r(e),e.default={req:"sys/log/req/page",login:"sys/log/login/page",task:"sys/log/task/page"}},7572:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});n(93300);var r=n(96461),a=n(48534),u=n(95082),i=n(66252),o=(n(41539),n(35666),n(2262)),c=n(3577),d=n(84991),s=n(49167);var l=(0,i.aZ)((0,u.Z)((0,u.Z)({},{name:"ReqLog"}),{},{setup:function(t){var e=function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(e){var n,r,a,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.page,r=e.limit,t.next=3,(0,s.Io)({page:n,limit:r});case 3:return a=t.sent,u=a.data,t.abrupt("return",u);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(t){return t>=200&&t<300?"success":t>=300&&t<400?"default":t>=400&&t<500?"warning":t>=500?"error":"default"},u=[{title:"请求IP",dataIndex:"ip",width:150,align:"center"},{title:"操作人ID",dataIndex:"userId",align:"center",width:100},{title:"请求方式",dataIndex:"method",align:"center",slots:{customRender:"method"}},{title:"请求参数",dataIndex:"params",align:"center",ellipsis:!0,width:150},{title:"请求地址",dataIndex:"action",align:"center"},{title:"响应状态",dataIndex:"status",align:"center",width:120,slots:{customRender:"status",render:function(t){var e,a=t.status;return(0,i.Wm)(r.Z,{color:n(a)},"function"==typeof(e=a)||"[object Object]"===Object.prototype.toString.call(e)&&!(0,i.lA)(e)?a:{default:function(){return[a]}})}}},{title:"耗时",dataIndex:"consumeTime",align:"center",width:120,slots:{customRender:"consumeTime",render:function(t){var e,n=t.consumeTime;return(0,i.Wm)(r.Z,{color:(e=n,e<=20?"success":e<=40?"warning":"error")},{default:function(){return["".concat(n,"ms")]}})}}},{title:"操作时间",dataIndex:"createTime",align:"center",width:220}];return function(t,n){return(0,i.wg)(),(0,i.j4)((0,o.SU)(d.DynamicTable),{"load-data":e,columns:u},{method:(0,i.w5)((function(t){var e=t.record;return[(0,i.Wm)((0,o.SU)(r.Z),{color:"processing"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,c.zw)(e.method),1)]})),_:2},1024)]})),_:1})}}}));var f=l}}]);