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
var _3=$("<div class="\" slider\"">"+"<div class="\" slider-inner\"">"+"<a href="\" javascript:;\"" class="\" slider-handle\""></a>"+"<span class="\" slider-tip\""></span>"+"</div>"+"<div class="\" slider-rule\""></div>"+"<div class="\" slider-rulelabel\""></div>"+"<div style="\" clear:both\""></div>"+"<input type="\" hidden\"" class="\" slider-value\"">"+"</div>").insertAfter(_2);
var t=$(_2);
t.addClass("slider-f").hide();
var _4=t.attr("name");
if(_4){
_3.find("input.slider-value").attr("name",_4);
t.removeAttr("name").attr("sliderName",_4);
}
_3.bind("_resize",function(e,_5){
if($(this).hasClass("easyui-fluid")||_5){
_6(_2);
}
return false;
});
return _3;
};
function _6(_7,_8){
var _9=$.data(_7,"slider");
var _a=_9.options;
var _b=_9.slider;
if(_8){
if(_8.width){
_a.width=_8.width;
}
if(_8.height){
_a.height=_8.height;
}
}
_b._size(_a);
if(_a.mode=="h"){
_b.css("height","");
_b.children("div").css("height","");
}else{
_b.css("width","");
_b.children("div").css("width","");
_b.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_b._outerHeight());
}
_c(_7);
};
function _d(_e){
var _f=$.data(_e,"slider");
var _10=_f.options;
var _11=_f.slider;
var aa=_10.mode=="h"?_10.rule:_10.rule.slice(0).reverse();
if(_10.reversed){
aa=aa.slice(0).reverse();
}
_12(aa);
function _12(aa){
var _13=_11.find("div.slider-rule");
var _14=_11.find("div.slider-rulelabel");
_13.empty();
_14.empty();
for(var i=0;i<aa.length;i++){ var _15="i*100/(aa.length-1)+" %";" _16="$(" <span">").appendTo(_13);
_16.css((_10.mode=="h"?"left":"top"),_15);
if(aa[i]!="|"){
_16=$("<span></span>").appendTo(_14);
_16.html(aa[i]);
if(_10.mode=="h"){
_16.css({left:_15,marginLeft:-Math.round(_16.outerWidth()/2)});
}else{
_16.css({top:_15,marginTop:-Math.round(_16.outerHeight()/2)});
}
}
}
};
};
function _17(_18){
var _19=$.data(_18,"slider");
var _1a=_19.options;
var _1b=_19.slider;
_1b.removeClass("slider-h slider-v slider-disabled");
_1b.addClass(_1a.mode=="h"?"slider-h":"slider-v");
_1b.addClass(_1a.disabled?"slider-disabled":"");
var _1c=_1b.find(".slider-inner");
_1c.html("<a href="\" javascript:;\"" class="\" slider-handle\""></a>"+"<span class="\" slider-tip\""></span>");
if(_1a.range){
_1c.append("<a href="\" javascript:;\"" class="\" slider-handle\""></a>"+"<span class="\" slider-tip\""></span>");
}
_1b.find("a.slider-handle").draggable({axis:_1a.mode,cursor:"pointer",disabled:_1a.disabled,onDrag:function(e){
var _1d=e.data.left;
var _1e=_1b.width();
if(_1a.mode!="h"){
_1d=e.data.top;
_1e=_1b.height();
}
if(_1d<0||_1d>_1e){
return false;
}else{
_1f(_1d,this);
return false;
}
},onStartDrag:function(){
_19.isDragging=true;
_1a.onSlideStart.call(_18,_1a.value);
},onStopDrag:function(e){
_1f(_1a.mode=="h"?e.data.left:e.data.top,this);
_1a.onSlideEnd.call(_18,_1a.value);
_1a.onComplete.call(_18,_1a.value);
_19.isDragging=false;
}});
_1b.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_19.isDragging||_1a.disabled){
return;
}
var pos=$(this).offset();
_1f(_1a.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
_1a.onComplete.call(_18,_1a.value);
});
function _20(_21){
var dd=String(_1a.step).split(".");
var _22=dd.length>1?dd[1].length:0;
return parseFloat(_21.toFixed(_22));
};
function _1f(pos,_23){
var _24=_25(_18,pos);
var s=Math.abs(_24%_1a.step);
if(s<_1a.step 2){ _24-="s;" }else{ _24="_24-s+_1a.step;" } if(_1a.range){ var v1="_1a.value[0];" v2="_1a.value[1];" m="parseFloat((v1+v2)/2);" if(_23){ _26="$(_23).nextAll(" .slider-handle").length">0;
if(_24<=v2&&_26){ v1="_24;" }else{ if(_24>=v1&&(!_26)){
v2=_24;
}
}
}else{
if(_24<v1){ v1="_24;" }else{ if(_24>v2){
v2=_24;
}else{
_24<m?v1=_24:v2=_24; } $(_18).slider("setvalues",[v1,v2]); }else{ $(_18).slider("setvalue",_24); }; function _27(_28,_29){ var _2a="$.data(_28," slider");" _2b="_2a.options;" _2c="_2a.slider;" _2d="$.isArray(_2b.value)?_2b.value:[_2b.value];" _2e="[];" if(!$.isarray(_29)){ _29="$.map(String(_29).split(_2b.separator),function(v){" return parsefloat(v); }); _2c.find(".slider-value").remove(); _2f="$(_28).attr(" slidername")||"";" for(var i="0;i<_29.length;i++){" _30="_29[i];" if(_30<_2b.min){ if(_30>_2b.max){
_30=_2b.max;
}
var _31=$("<input type="\" hidden\"" class="\" slider-value\"">").appendTo(_2c);
_31.attr("name",_2f);
_31.val(_30);
_2e.push(_30);
var _32=_2c.find(".slider-handle:eq("+i+")");
var tip=_32.next();
var pos=_33(_28,_30);
if(_2b.showTip){
tip.show();
tip.html(_2b.tipFormatter.call(_28,_30));
}else{
tip.hide();
}
if(_2b.mode=="h"){
var _34="left:"+pos+"px;";
_32.attr("style",_34);
tip.attr("style",_34+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _34="top:"+pos+"px;";
_32.attr("style",_34);
tip.attr("style",_34+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
_2b.value=_2b.range?_2e:_2e[0];
$(_28).val(_2b.range?_2e.join(_2b.separator):_2e[0]);
if(_2d.join(",")!=_2e.join(",")){
_2b.onChange.call(_28,_2b.value,(_2b.range?_2d:_2d[0]));
}
};
function _c(_35){
var _36=$.data(_35,"slider").options;
var fn=_36.onChange;
_36.onChange=function(){
};
_27(_35,_36.value);
_36.onChange=fn;
};
function _33(_37,_38){
var _39=$.data(_37,"slider");
var _3a=_39.options;
var _3b=_39.slider;
var _3c=_3a.mode=="h"?_3b.width():_3b.height();
var pos=_3a.converter.toPosition.call(_37,_38,_3c);
if(_3a.mode=="v"){
pos=_3b.height()-pos;
}
if(_3a.reversed){
pos=_3c-pos;
}
return pos;
};
function _25(_3d,pos){
var _3e=$.data(_3d,"slider");
var _3f=_3e.options;
var _40=_3e.slider;
var _41=_3f.mode=="h"?_40.width():_40.height();
var pos=_3f.mode=="h"?(_3f.reversed?(_41-pos):pos):(_3f.reversed?pos:(_41-pos));
var _42=_3f.converter.toValue.call(_3d,pos,_41);
return _42;
};
$.fn.slider=function(_43,_44){
if(typeof _43=="string"){
return $.fn.slider.methods[_43](this,_44);
}
_43=_43||{};
return this.each(function(){
var _45=$.data(this,"slider");
if(_45){
$.extend(_45.options,_43);
}else{
_45=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_43),slider:_1(this)});
$(this).removeAttr("disabled");
}
var _46=_45.options;
_46.min=parseFloat(_46.min);
_46.max=parseFloat(_46.max);
if(_46.range){
if(!$.isArray(_46.value)){
_46.value=$.map(String(_46.value).split(_46.separator),function(v){
return parseFloat(v);
});
}
if(_46.value.length</m?v1=_24:v2=_24;></v1){></=v2&&_26){></_1a.step></0||_1d></aa.length;i++){>