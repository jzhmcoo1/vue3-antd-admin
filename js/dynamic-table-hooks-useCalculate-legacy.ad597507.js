"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[3662],{68050:function(e,t,n){n.r(t),n.d(t,{useCalculate:function(){return l}});var r=n(88478),a=n(48534),u=(n(35666),n(41539),n(54747),n(47941),n(21249),n(9653),n(66252)),o=n(70094),l=function(){var e,t=function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(n){var a,l,c,i,s,d,f,v,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Y3)();case 2:if(a=n.tableRef,l=n.dataSource,c=void 0===l?[]:l,i=n.columns,s=void 0===i?[]:i,d=n.sumText,f=n.summaryFunc,c.length){t.next=5;break}return t.abrupt("return");case 5:v=a.value.$el.querySelector(".ant-table-tbody"),e||((e=null===(h=v.lastElementChild)||void 0===h?void 0:h.cloneNode(!0)).style.backgroundColor="#f8f8f9",e.style.position="sticky",e.style.zIndex="999",e.style.bottom="0",e.setAttribute("data-row-key",String(Math.random()))),(m=function(t){if((0,o.mf)(f)){var n=f({dataSource:c,columns:s});(0,r.Z)(e.children).forEach((function(e,t){e.textContent=n[t],e.style.backgroundColor="inherit"}))}else{var a=Object.keys(c[0]).reduce((function(e,t){var n=c.map((function(e){return e[t]})).reduce((function(e,t){return t+e}),0);return e[t]=isNaN(Number(n))?"N/A":n,e}),{}),u=s.map((function(e){var t;return null!==(t=e.dataIndex)&&void 0!==t?t:e.key}));(0,r.Z)(e.children).forEach((function(e,t){e.textContent=0==t?d:a[u[t]],e.style.backgroundColor="inherit"}))}null!=t&&t.length&&(0,r.Z)(e.children).forEach((function(e,n){Object.keys(t[n].style||[]).forEach((function(r){var a=t[n].style[r];e.style[a]=t[n].style[a],e.className=t[n].className}))}))})(),v.contains(e)||(v.appendChild(e),setTimeout((function(){var e,t,n=null===(e=a.value.$el.querySelector(".ant-table-tbody"))||void 0===e||null===(t=e.firstElementChild)||void 0===t?void 0:t.children;n&&m((0,r.Z)(n))}),100));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{setCalculateRow:t}}}}]);