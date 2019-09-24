/**
 * EasyUI for jQuery 1.5.4.5
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function(){
var _1={draggable:{js:"jquery.draggable.js"},droppable:{js:"jquery.droppable.js"},resizable:{js:"jquery.resizable.js"},linkbutton:{js:"jquery.linkbutton.js",css:"linkbutton.css"},progressbar:{js:"jquery.progressbar.js",css:"progressbar.css"},tooltip:{js:"jquery.tooltip.js",css:"tooltip.css"},pagination:{js:"jquery.pagination.js",css:"pagination.css",dependencies:["linkbutton"]},datagrid:{js:"jquery.datagrid.js",css:"datagrid.css",dependencies:["panel","resizable","linkbutton","pagination"]},treegrid:{js:"jquery.treegrid.js",css:"tree.css",dependencies:["datagrid"]},propertygrid:{js:"jquery.propertygrid.js",css:"propertygrid.css",dependencies:["datagrid"]},datalist:{js:"jquery.datalist.js",css:"datalist.css",dependencies:["datagrid"]},panel:{js:"jquery.panel.js",css:"panel.css"},window:{js:"jquery.window.js",css:"window.css",dependencies:["resizable","draggable","panel"]},dialog:{js:"jquery.dialog.js",css:"dialog.css",dependencies:["linkbutton","window"]},messager:{js:"jquery.messager.js",css:"messager.css",dependencies:["linkbutton","dialog","progressbar"]},layout:{js:"jquery.layout.js",css:"layout.css",dependencies:["resizable","panel"]},form:{js:"jquery.form.js"},menu:{js:"jquery.menu.js",css:"menu.css"},tabs:{js:"jquery.tabs.js",css:"tabs.css",dependencies:["panel","linkbutton"]},menubutton:{js:"jquery.menubutton.js",css:"menubutton.css",dependencies:["linkbutton","menu"]},splitbutton:{js:"jquery.splitbutton.js",css:"splitbutton.css",dependencies:["menubutton"]},switchbutton:{js:"jquery.switchbutton.js",css:"switchbutton.css"},accordion:{js:"jquery.accordion.js",css:"accordion.css",dependencies:["panel"]},calendar:{js:"jquery.calendar.js",css:"calendar.css"},textbox:{js:"jquery.textbox.js",css:"textbox.css",dependencies:["validatebox","linkbutton"]},passwordbox:{js:"jquery.passwordbox.js",css:"passwordbox.css",dependencies:["textbox"]},filebox:{js:"jquery.filebox.js",css:"filebox.css",dependencies:["textbox"]},combo:{js:"jquery.combo.js",css:"combo.css",dependencies:["panel","textbox"]},combobox:{js:"jquery.combobox.js",css:"combobox.css",dependencies:["combo"]},combotree:{js:"jquery.combotree.js",dependencies:["combo","tree"]},combogrid:{js:"jquery.combogrid.js",dependencies:["combo","datagrid"]},combotreegrid:{js:"jquery.combotreegrid.js",dependencies:["combo","treegrid"]},tagbox:{js:"jquery.tagbox.js",dependencies:["combobox"]},validatebox:{js:"jquery.validatebox.js",css:"validatebox.css",dependencies:["tooltip"]},numberbox:{js:"jquery.numberbox.js",dependencies:["textbox"]},searchbox:{js:"jquery.searchbox.js",css:"searchbox.css",dependencies:["menubutton","textbox"]},spinner:{js:"jquery.spinner.js",css:"spinner.css",dependencies:["textbox"]},numberspinner:{js:"jquery.numberspinner.js",dependencies:["spinner","numberbox"]},timespinner:{js:"jquery.timespinner.js",dependencies:["spinner"]},tree:{js:"jquery.tree.js",css:"tree.css",dependencies:["draggable","droppable"]},datebox:{js:"jquery.datebox.js",css:"datebox.css",dependencies:["calendar","combo"]},datetimebox:{js:"jquery.datetimebox.js",dependencies:["datebox","timespinner"]},slider:{js:"jquery.slider.js",dependencies:["draggable"]},parser:{js:"jquery.parser.js"},mobile:{js:"jquery.mobile.js"}};
var _2={"af":"easyui-lang-af.js","ar":"easyui-lang-ar.js","bg":"easyui-lang-bg.js","ca":"easyui-lang-ca.js","cs":"easyui-lang-cs.js","cz":"easyui-lang-cz.js","da":"easyui-lang-da.js","de":"easyui-lang-de.js","el":"easyui-lang-el.js","en":"easyui-lang-en.js","es":"easyui-lang-es.js","fr":"easyui-lang-fr.js","it":"easyui-lang-it.js","jp":"easyui-lang-jp.js","nl":"easyui-lang-nl.js","pl":"easyui-lang-pl.js","pt_BR":"easyui-lang-pt_BR.js","ru":"easyui-lang-ru.js","sv_SE":"easyui-lang-sv_SE.js","tr":"easyui-lang-tr.js","zh_CN":"easyui-lang-zh_CN.js","zh_TW":"easyui-lang-zh_TW.js"};
var _3={};
function _4(_5,_6){
var _7=false;
var _8=document.createElement("script");
_8.type="text/javascript";
_8.language="javascript";
_8.src=_5;
_8.onload=_8.onreadystatechange=function(){
if(!_7&&(!_8.readyState||_8.readyState=="loaded"||_8.readyState=="complete")){
_7=true;
_8.onload=_8.onreadystatechange=null;
if(_6){
_6.call(_8);
}
}
};
document.getElementsByTagName("head")[0].appendChild(_8);
};
function _9(_a,_b){
_4(_a,function(){
document.getElementsByTagName("head")[0].removeChild(this);
if(_b){
_b();
}
});
};
function _c(_d,_e){
var _f=document.createElement("link");
_f.rel="stylesheet";
_f.type="text/css";
_f.media="screen";
_f.href=_d;
document.getElementsByTagName("head")[0].appendChild(_f);
if(_e){
_e.call(_f);
}
};
function _10(_11,_12){
_3[_11]="loading";
var _13=_1[_11];
var _14="loading";
var _15=(easyloader.css&&_13["css"])?"loading":"loaded";
if(easyloader.css&&_13["css"]){
if(/^http/i.test(_13["css"])){
var url=_13["css"];
}else{
var url=easyloader.base+"themes/"+easyloader.theme+"/"+_13["css"];
}
_c(url,function(){
_15="loaded";
if(_14=="loaded"&&_15=="loaded"){
_16();
}
});
}
if(/^http/i.test(_13["js"])){
var url=_13["js"];
}else{
var url=easyloader.base+"plugins/"+_13["js"];
}
_4(url,function(){
_14="loaded";
if(_14=="loaded"&&_15=="loaded"){
_16();
}
});
function _16(){
_3[_11]="loaded";
easyloader.onProgress(_11);
if(_12){
_12();
}
};
};
function _17(_18,_19){
var mm=[];
var _1a=false;
if(typeof _18=="string"){
add(_18);
}else{
for(var i=0;i