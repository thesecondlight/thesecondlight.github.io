/**
 * EasyUI for jQuery 1.5.4.5
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
function _1(_2){
var _3=$.data(_2,"datalist").options;
$(_2).datagrid($.extend({},_3,{cls:"datalist"+(_3.lines?" datalist-lines":""),frozenColumns:(_3.frozenColumns&&_3.frozenColumns.length)?_3.frozenColumns:(_3.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(_3.columns&&_3.columns.length)?_3.columns:[[{field:_3.textField,width:"100%",formatter:function(_4,_5,_6){
return _3.textFormatter?_3.textFormatter(_4,_5,_6):_4;
}}]]}));
};
var _7=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8,_9,_a){
var _b=$.data(_8,"datagrid");
var _c=_b.options;
if(_c.groupField){
var g=this.groupRows(_8,_b.data.rows);
this.groups=g.groups;
_b.data.rows=g.rows;
var _d=[];
for(var i=0;i<g.groups.length;i++){ _d.push(this.rendergroup.call(this,_8,i,g.groups[i],_a)); } $(_9).html(_d.join("")); }else{ $(_9).html(this.rendertable(_8,0,_b.data.rows,_a)); },rendergroup:function(_e,_f,_10,_11){ var _12="$.data(_e," datagrid");" _13="_12.options;" _14="$(_e).datagrid(" getcolumnfields",_11);" _15="[];" _15.push("<div class="\" datagrid-group\"" group-index="+_f+">");
if(!_11){
_15.push("<span class="\" datagrid-group-title\"">");
_15.push(_13.groupFormatter.call(_e,_10.value,_10.rows));
_15.push("</span>");
}
_15.push("");
_15.push(this.renderTable(_e,_10.startIndex,_10.rows,_11));
return _15.join("");
},groupRows:function(_16,_17){
var _18=$.data(_16,"datagrid");
var _19=_18.options;
var _1a=[];
for(var i=0;i</g.groups.length;i++){>