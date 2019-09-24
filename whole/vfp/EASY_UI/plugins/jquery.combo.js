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
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_1(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _2(_3){
var _4=$.data(_3,"combo");
var _5=_4.options;
if(!_4.panel){
_4.panel=$("<div class="\" combo-panel\""></div>").appendTo("body");
_4.panel.panel({minWidth:_5.panelMinWidth,maxWidth:_5.panelMaxWidth,minHeight:_5.panelMinHeight,maxHeight:_5.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _6=$(this).panel("options").comboTarget;
var _7=$.data(_6,"combo");
if(_7){
_7.options.onShowPanel.call(_6);
}
},onBeforeClose:function(){
_1($(this).parent());
},onClose:function(){
var _8=$(this).panel("options").comboTarget;
var _9=$(_8).data("combo");
if(_9){
_9.options.onHidePanel.call(_8);
}
}});
}
var _a=$.extend(true,[],_5.icons);
if(_5.hasDownArrow){
_a.push({iconCls:"combo-arrow",handler:function(e){
_10(e.data.target);
}});
}
$(_3).addClass("combo-f").textbox($.extend({},_5,{icons:_a,onChange:function(){
}}));
$(_3).attr("comboName",$(_3).attr("textboxName"));
_4.combo=$(_3).next();
_4.combo.addClass("combo");
_4.panel.unbind(".combo");
for(var _b in _5.panelEvents){
_4.panel.bind(_b+".combo",{target:_3},_5.panelEvents[_b]);
}
};
function _c(_d){
var _e=$.data(_d,"combo");
var _f=_e.options;
var p=_e.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!_f.cloned){
p.panel("destroy");
}
$(_d).textbox("destroy");
};
function _10(_11){
var _12=$.data(_11,"combo").panel;
if(_12.is(":visible")){
var _13=_12.combo("combo");
_14(_13);
if(_13!=_11){
$(_11).combo("showPanel");
}
}else{
var p=$(_11).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_12).not(p).panel("close");
$(_11).combo("showPanel");
}
$(_11).combo("textbox").focus();
};
function _1(_15){
$(_15).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _16(e){
var _17=e.data.target;
var _18=$.data(_17,"combo");
var _19=_18.options;
if(!_19.editable){
_10(_17);
}else{
var p=$(_17).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _1a=$(this).combo("combo");
if(_1a!=_17){
_14(_1a);
}
});
}
};
function _1b(e){
var _1c=e.data.target;
var t=$(_1c);
var _1d=t.data("combo");
var _1e=t.combo("options");
_1d.panel.panel("options").comboTarget=_1c;
switch(e.keyCode){
case 38:
_1e.keyHandler.up.call(_1c,e);
break;
case 40:
_1e.keyHandler.down.call(_1c,e);
break;
case 37:
_1e.keyHandler.left.call(_1c,e);
break;
case 39:
_1e.keyHandler.right.call(_1c,e);
break;
case 13:
e.preventDefault();
_1e.keyHandler.enter.call(_1c,e);
return false;
case 9:
case 27:
_14(_1c);
break;
default:
if(_1e.editable){
if(_1d.timer){
clearTimeout(_1d.timer);
}
_1d.timer=setTimeout(function(){
var q=t.combo("getText");
if(_1d.previousText!=q){
_1d.previousText=q;
t.combo("showPanel");
_1e.keyHandler.query.call(_1c,q,e);
t.combo("validate");
}
},_1e.delay);
}
}
};
function _1f(e){
var _20=e.data.target;
var _21=$(_20).data("combo");
if(_21.timer){
clearTimeout(_21.timer);
}
};
function _22(_23){
var _24=$.data(_23,"combo");
var _25=_24.combo;
var _26=_24.panel;
var _27=$(_23).combo("options");
var _28=_26.panel("options");
_28.comboTarget=_23;
if(_28.closed){
_26.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_26.panel("resize",{width:(_27.panelWidth?_27.panelWidth:_25._outerWidth()),height:_27.panelHeight});
_26.panel("panel").hide();
_26.panel("open");
}
(function(){
if(_28.comboTarget==_23&&_26.is(":visible")){
_26.panel("move",{left:_29(),top:_2a()});
setTimeout(arguments.callee,200);
}
})();
function _29(){
var _2b=_25.offset().left;
if(_27.panelAlign=="right"){
_2b+=_25._outerWidth()-_26._outerWidth();
}
if(_2b+_26._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
_2b=$(window)._outerWidth()+$(document).scrollLeft()-_26._outerWidth();
}
if(_2b<0){ _2b="0;" } return _2b; }; function _2a(){ var top="_25.offset().top+_25._outerHeight();" if(top+_26._outerheight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_25.offset().top-_26._outerHeight();
}
if(top<$(document).scrolltop()){ top="_25.offset().top+_25._outerHeight();" } return top; }; function _14(_2c){ var _2d="$.data(_2c," combo").panel;" _2d.panel("close"); _2e(_2f,_30){ _31="$.data(_2f," combo");" _32="$(_2f).textbox(" gettext");" if(_32!="_30){" $(_2f).textbox("settext",_30); _31.previoustext="_30;" _33(_34){ _35="$.data(_34," _36="_35.options;" _37="$(_34).next();" _38="[];" _37.find(".textbox-value").each(function(){ _38.push($(this).val()); }); if(_36.multivalue){ _38; }else{ _38.length?_38[0].split(_36.separator):_38; _39(_3a,_3b){ _3c="$.data(_3a," _3d="_3c.combo;" _3e="$(_3a).combo(" options");" if(!$.isarray(_3b)){ _3b="_3b.split(_3e.separator);" _3f="_33(_3a);" _3d.find(".textbox-value").remove(); if(_3b.length){ if(_3e.multivalue){ for(var i="0;i<_3b.length;i++){" _40(_3b[i]); _40(_3b.join(_3e.separator)); _40(_41){ _42="$(_3a).attr(" textboxname")||"";" _43="$(" <input" type="\" hidden\"" class="\" textbox-value\"">").appendTo(_3d);
_43.attr("name",_42);
if(_3e.disabled){
_43.attr("disabled","disabled");
}
_43.val(_41);
};
var _44=(function(){
if(_3f.length!=_3b.length){
return true;
}
for(var i=0;i</$(document).scrolltop()){></0){>