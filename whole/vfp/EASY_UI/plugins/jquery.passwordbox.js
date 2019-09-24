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
var _3=$.data(_2,"passwordbox");
var _4=_3.options;
var _5=$.extend(true,[],_4.icons);
if(_4.showEye){
_5.push({iconCls:"passwordbox-open",handler:function(e){
_4.revealed=!_4.revealed;
_6(_2);
}});
}
$(_2).addClass("passwordbox-f").textbox($.extend({},_4,{icons:_5}));
_6(_2);
};
function _7(_8,_9,_a){
var t=$(_8);
var _b=t.passwordbox("options");
if(_b.revealed){
t.textbox("setValue",_9);
return;
}
var _c=unescape(_b.passwordChar);
var cc=_9.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i