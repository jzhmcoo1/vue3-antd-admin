"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[9067],{55511:function(o,e,t){t.r(e),t.d(e,{useDragCol:function(){return s}});const s=o=>{let e,t,s,u;const n=()=>u.onmouseup=u.onmousedown=u.onmousemove=null;o.forEach((l=>{const d=l?.customHeaderCell?.(o)??{};l.customHeaderCell=o=>({...d,onmouseenter:()=>{u=o.title[0].el.closest("th"),s??=u.closest(".ant-table-wrapper"),t??=s.clientWidth,u.onmousemove=function(o){o.offsetX>this.offsetWidth-10?this.style.cursor="col-resize":this.style.cursor="default",null==e&&(e=this),null!=e.mouseDown&&1==e.mouseDown&&(e.style.cursor="default",e.oldWidth+(o.x-e.oldX)>0&&(e.width=e.oldWidth+(o.x-e.oldX)),e.style.width=e.width,s.style.width=t+(o.x-e.oldX)+"px",e.style.cursor="col-resize")},u.onmousedown=function(o){e=this,o.offsetX>e.offsetWidth-10&&(e.mouseDown=!0,e.oldX=o.x,e.oldWidth=e.offsetWidth)},u.onmouseup=n,s.onmouseup=function(){n(),null==e&&(e=this),e.mouseDown=!1,e.style.cursor="default",t=s.clientWidth}},onmouseup:()=>n})}))}}}]);