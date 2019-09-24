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
var _3=$(_2).data("maskedbox");
var _4=_3.options;
$(_2).textbox(_4);
$(_2).maskedbox("initValue",_4.value);
};
function _5(_6,_7){
var _8=$(_6).maskedbox("options");
var tt=(_7||$(_6).maskedbox("getText")||"").split("");
var vv=[];
for(var i=0;i<_8.mask.length;i++){ if(_8.masks[_8.mask[i]]){ var t="tt[i];" vv.push(t!="_8.promptChar?t:" " "); } return vv.join(""); }; function _9(_a,_b){ _c="$(_a).maskedbox(" options");" cc="_b.split(" ");" tt="[];" for(var i="0;i<_c.mask.length;i++){" m="_c.mask[i];" r="_c.masks[m];" if(r){ c="cc.shift();" if(c!="undefined){" d="new" regexp(r,"i"); if(d.test(c)){ tt.push(c); continue; tt.push(_c.promptchar); }else{ tt.push(m); tt.join(""); _d(_e,c){ _f="$(_e).maskedbox(" _10="$(_e).maskedbox(" getselectionrange");" _11="_12(_e,_10.start);" end="_12(_e,_10.end);" if(_11!="-1){" regexp(_f.masks[_f.mask[_11]],"i"); if(r.test(c)){ vv="_5(_e).split(" _13="_11-_14(_e,_11);" _15="end-_14(_e,end);" vv.splice(_13,_15-_13,c); $(_e).maskedbox("setvalue",_9(_e,vv.join(""))); $(_e).maskedbox("setselectionrange",{start:_11,end:_11}); _16(_17,_18){ _19="$(_17).maskedbox(" _1a="$(_17).maskedbox(" if(_1a.start="=_1a.end){" if(_18){ _1b="_1c(_17,_1a.start);" _1d="_1b-_14(_17,_1b);" if(_1d>=0){
vv.splice(_1d,1);
}
}else{
var _1b=_12(_17,_1a.start);
var end=_1c(_17,_1a.end);
var _1d=_1b-_14(_17,_1b);
var _1e=end-_14(_17,end);
vv.splice(_1d,_1e-_1d+1);
}
$(_17).maskedbox("setValue",_9(_17,vv.join("")));
$(_17).maskedbox("setSelectionRange",{start:_1b,end:_1b});
};
function _14(_1f,pos){
var _20=$(_1f).maskedbox("options");
var _21=0;
if(pos>=_20.mask.length){
pos--;
}
for(var i=pos;i>=0;i--){
if(_20.masks[_20.mask[i]]==undefined){
_21++;
}
}
return _21;
};
function _12(_22,pos){
var _23=$(_22).maskedbox("options");
var m=_23.mask[pos];
var r=_23.masks[m];
while(pos<_23.mask.length&&!r){ pos++; m="_23.mask[pos];" r="_23.masks[m];" } return pos; }; function _1c(_24,pos){ var _25="$(_24).maskedbox(" options");" while(pos>=0&&!r){
pos--;
m=_25.mask[pos];
r=_25.masks[m];
}
return pos<0?0:pos; }; function _26(e){ if(e.metakey||e.ctrlkey){ return; } var _27="e.data.target;" _28="$(_27).maskedbox(" options");" _29="[9,13,35,36,37,39];" if($.inarray(e.keycode,_29)!="-1){" return true; c="String.fromCharCode(e.keyCode);" if(e.keycode>=65&&e.keyCode</0?0:pos;></_23.mask.length&&!r){></_8.mask.length;i++){>