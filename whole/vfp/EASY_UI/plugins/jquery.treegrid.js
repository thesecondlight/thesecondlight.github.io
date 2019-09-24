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
var _3=$.data(_2,"treegrid");
var _4=_3.options;
$(_2).datagrid($.extend({},_4,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_5,_6){
_16(_2);
_4.onResizeColumn.call(_2,_5,_6);
},onBeforeSortColumn:function(_7,_8){
if(_4.onBeforeSortColumn.call(_2,_7,_8)==false){
return false;
}
},onSortColumn:function(_9,_a){
_4.sortName=_9;
_4.sortOrder=_a;
if(_4.remoteSort){
_15(_2);
}else{
var _b=$(_2).treegrid("getData");
_56(_2,null,_b);
}
_4.onSortColumn.call(_2,_9,_a);
},onClickCell:function(_c,_d){
_4.onClickCell.call(_2,_d,_37(_2,_c));
},onDblClickCell:function(_e,_f){
_4.onDblClickCell.call(_2,_f,_37(_2,_e));
},onRowContextMenu:function(e,_10){
_4.onContextMenu.call(_2,e,_37(_2,_10));
}}));
var _11=$.data(_2,"datagrid").options;
_4.columns=_11.columns;
_4.frozenColumns=_11.frozenColumns;
_3.dc=$.data(_2,"datagrid").dc;
if(_4.pagination){
var _12=$(_2).datagrid("getPager");
_12.pagination({pageNumber:_4.pageNumber,pageSize:_4.pageSize,pageList:_4.pageList,onSelectPage:function(_13,_14){
_4.pageNumber=_13;
_4.pageSize=_14;
_15(_2);
}});
_4.pageSize=_12.pagination("options").pageSize;
}
};
function _16(_17,_18){
var _19=$.data(_17,"datagrid").options;
var dc=$.data(_17,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!_19.nowrap||_19.autoRowHeight)){
if(_18!=undefined){
var _1a=_1b(_17,_18);
for(var i=0;i<_1a.length;i++){ _1c(_1a[i][_19.idfield]); } $(_17).datagrid("fixrowheight",_18); function _1c(_1d){ var tr1="_19.finder.getTr(_17,_1d," body",1);" tr2="_19.finder.getTr(_17,_1d," body",2);" tr1.css("height",""); tr2.css("height",""); _1e="Math.max(tr1.height(),tr2.height());" tr1.css("height",_1e); tr2.css("height",_1e); }; _1f(_20){ dc="$.data(_20," datagrid").dc;" _21="$.data(_20," treegrid").options;" if(!_21.rownumbers){ return; dc.body1.find("div.datagrid-cell-rownumber").each(function(i){ $(this).html(i+1); }); _22(_23){ return function(e){ $.fn.datagrid.defaults.rowevents[_23?"mouseover":"mouseout"](e); tt="$(e.target);" fn="_23?" addclass":"removeclass";" if(tt.hasclass("tree-hit")){ tt.hasclass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover"); _24(e){ tr="tt.closest(" tr.datagrid-row");" if(!tr.length||!tr.parent().length){ _25="tr.attr(" node-id");" _26="_27(tr);" _28(_26,_25); }else{ if(tt.hasclass("tree-checkbox")){ _29(_26,_25); _2a="$(_26).datagrid(" options");" if(!tt.parent().hasclass("datagrid-cell-check")&&!_2a.singleselect&&e.shiftkey){ _2b="$(_26).treegrid(" getchildren");" _2c="$.easyui.indexOfArray(_2b,_2a.idField,_2a.lastSelectedIndex);" _2d="$.easyui.indexOfArray(_2b,_2a.idField,_25);" _2e="Math.min(Math.max(_2c,0),_2d);" to="Math.max(_2c,_2d);" row="_2b[_2d];" td="tt.closest(" td[field]",tr);" if(td.length){ _2f="td.attr(" field");" _2a.onclickcell.call(_26,_25,_2f,row[_2f]); $(_26).treegrid("clearselections"); for(var i="_2e;i<=to;i++){" $(_26).treegrid("selectrow",_2b[i][_2a.idfield]); _2a.onclickrow.call(_26,row); $.fn.datagrid.defaults.rowevents.click(e); _27(t){ $(t).closest("div.datagrid-view").children(".datagrid-f")[0]; _29(_30,_31,_32,_33){ _34="$.data(_30," treegrid");" _35="_34.checkedRows;" _36="_34.options;" if(!_36.checkbox){ if(!row.checkstate){ ck="tr.find(" .tree-checkbox");" if(_32="=undefined){" if(ck.hasclass("tree-checkbox1")){ _32="false;" if(ck.hasclass("tree-checkbox0")){ if(row._checked="=undefined){" row._checked="ck.hasClass(" tree-checkbox1");" if(_32){ if(!_33){ if(_36.onbeforechecknode.call(_30,row,_32)="=false){" if(_36.cascadecheck){ _38(_30,row,_32); _39(_30,row); _3a(_30,row,_32?"1":"0"); _36.onchecknode.call(_30,row,_32); _3a(_3b,row,_3c){ _3d="$.data(_3b," _3e="_3d.checkedRows;" _3f="_3d.options;" if(!row.checkstate||_3c="=undefined){" if(!ck.length){ row.checkstate="[" unchecked","checked","indeterminate"][_3c];" row.checked="(row.checkState==" checked");" ck.removeclass("tree-checkbox0 tree-checkbox1 tree-checkbox2"); ck.addclass("tree-checkbox"+_3c); if(_3c="=0){" $.easyui.removearrayitem(_3e,_3f.idfield,row[_3f.idfield]); $.easyui.addarrayitem(_3e,_3f.idfield,row); _38(_40,row,_41){ _42="_41?1:0;" _3a(_40,row,_42); $.easyui.foreach(row.children||[],true,function(r){ _3a(_40,r,_42); _39(_43,row){ _44="$.data(_43," _45="_46(_43,row[_44.idField]);" if(_45){ _3a(_43,_45,_47(_45)); _39(_43,_45); _47(row){ len="0;" c0="0;" c1="0;" $.easyui.foreach(row.children||[],false,function(r){ if(r.checkstate){ len++; if(r.checkstate="=" checked"){" c1++; c0++; if(len="=0){" undefined; _48="0;" if(c0="=len){" if(c1="=len){" _48; _49(_4a,_4b){ _4c="$.data(_4a," if(!_4c.checkbox){ if(_4c.view.hascheckbox(_4a,row)){ $("<span class="\" tree-checkbox\"">").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_29(_4a,_4b,true,true);
}else{
if(row.checkState=="unchecked"){
_29(_4a,_4b,false,true);
}else{
var _4d=_47(row);
if(_4d===0){
_29(_4a,_4b,false,true);
}else{
if(_4d===1){
_29(_4a,_4b,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_39(_4a,row);
}
};
function _4e(_4f,_50){
var _51=$.data(_4f,"treegrid").options;
var tr1=_51.finder.getTr(_4f,_50,"body",1);
var tr2=_51.finder.getTr(_4f,_50,"body",2);
var _52=$(_4f).datagrid("getColumnFields",true).length+(_51.rownumbers?1:0);
var _53=$(_4f).datagrid("getColumnFields",false).length;
_54(tr1,_52);
_54(tr2,_53);
function _54(tr,_55){
$("<tr class="\" treegrid-tr-tree\"">"+"<td style="\" border:0px\"" colspan="\" "+_55+"\"">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _56(_57,_58,_59,_5a,_5b){
var _5c=$.data(_57,"treegrid");
var _5d=_5c.options;
var dc=_5c.dc;
_59=_5d.loadFilter.call(_57,_59,_58);
var _5e=_37(_57,_58);
if(_5e){
var _5f=_5d.finder.getTr(_57,_58,"body",1);
var _60=_5d.finder.getTr(_57,_58,"body",2);
var cc1=_5f.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_60.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_5a){
_5e.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_5a){
_5c.data=[];
}
}
if(!_5a){
cc1.empty();
cc2.empty();
}
if(_5d.view.onBeforeRender){
_5d.view.onBeforeRender.call(_5d.view,_57,_58,_59);
}
_5d.view.render.call(_5d.view,_57,cc1,true);
_5d.view.render.call(_5d.view,_57,cc2,false);
if(_5d.showFooter){
_5d.view.renderFooter.call(_5d.view,_57,dc.footer1,true);
_5d.view.renderFooter.call(_5d.view,_57,dc.footer2,false);
}
if(_5d.view.onAfterRender){
_5d.view.onAfterRender.call(_5d.view,_57);
}
if(!_58&&_5d.pagination){
var _61=$.data(_57,"treegrid").total;
var _62=$(_57).datagrid("getPager");
if(_62.pagination("options").total!=_61){
_62.pagination({total:_61});
}
}
_16(_57);
_1f(_57);
$(_57).treegrid("showLines");
$(_57).treegrid("setSelectionState");
$(_57).treegrid("autoSizeColumn");
if(!_5b){
_5d.onLoadSuccess.call(_57,_5e,_59);
}
};
function _15(_63,_64,_65,_66,_67){
var _68=$.data(_63,"treegrid").options;
var _69=$(_63).datagrid("getPanel").find("div.datagrid-body");
if(_64==undefined&&_68.queryParams){
_68.queryParams.id=undefined;
}
if(_65){
_68.queryParams=_65;
}
var _6a=$.extend({},_68.queryParams);
if(_68.pagination){
$.extend(_6a,{page:_68.pageNumber,rows:_68.pageSize});
}
if(_68.sortName){
$.extend(_6a,{sort:_68.sortName,order:_68.sortOrder});
}
var row=_37(_63,_64);
if(_68.onBeforeLoad.call(_63,row,_6a)==false){
return;
}
var _6b=_69.find("tr[node-id=\""+_64+"\"] span.tree-folder");
_6b.addClass("tree-loading");
$(_63).treegrid("loading");
var _6c=_68.loader.call(_63,_6a,function(_6d){
_6b.removeClass("tree-loading");
$(_63).treegrid("loaded");
_56(_63,_64,_6d,_66);
if(_67){
_67();
}
},function(){
_6b.removeClass("tree-loading");
$(_63).treegrid("loaded");
_68.onLoadError.apply(_63,arguments);
if(_67){
_67();
}
});
if(_6c==false){
_6b.removeClass("tree-loading");
$(_63).treegrid("loaded");
}
};
function _6e(_6f){
var _70=_71(_6f);
return _70.length?_70[0]:null;
};
function _71(_72){
return $.data(_72,"treegrid").data;
};
function _46(_73,_74){
var row=_37(_73,_74);
if(row._parentId){
return _37(_73,row._parentId);
}else{
return null;
}
};
function _1b(_75,_76){
var _77=$.data(_75,"treegrid").data;
if(_76){
var _78=_37(_75,_76);
_77=_78?(_78.children||[]):[];
}
var _79=[];
$.easyui.forEach(_77,true,function(_7a){
_79.push(_7a);
});
return _79;
};
function _7b(_7c,_7d){
var _7e=$.data(_7c,"treegrid").options;
var tr=_7e.finder.getTr(_7c,_7d);
var _7f=tr.children("td[field=\""+_7e.treeField+"\"]");
return _7f.find("span.tree-indent,span.tree-hit").length;
};
function _37(_80,_81){
var _82=$.data(_80,"treegrid");
var _83=_82.options;
var _84=null;
$.easyui.forEach(_82.data,true,function(_85){
if(_85[_83.idField]==_81){
_84=_85;
return false;
}
});
return _84;
};
function _86(_87,_88){
var _89=$.data(_87,"treegrid").options;
var row=_37(_87,_88);
var tr=_89.finder.getTr(_87,_88);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(_89.onBeforeCollapse.call(_87,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(_89.animate){
cc.slideUp("normal",function(){
$(_87).treegrid("autoSizeColumn");
_16(_87,_88);
_89.onCollapse.call(_87,row);
});
}else{
cc.hide();
$(_87).treegrid("autoSizeColumn");
_16(_87,_88);
_89.onCollapse.call(_87,row);
}
};
function _8a(_8b,_8c){
var _8d=$.data(_8b,"treegrid").options;
var tr=_8d.finder.getTr(_8b,_8c);
var hit=tr.find("span.tree-hit");
var row=_37(_8b,_8c);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(_8d.onBeforeExpand.call(_8b,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _8e=tr.next("tr.treegrid-tr-tree");
if(_8e.length){
var cc=_8e.children("td").children("div");
_8f(cc);
}else{
_4e(_8b,row[_8d.idField]);
var _8e=tr.next("tr.treegrid-tr-tree");
var cc=_8e.children("td").children("div");
cc.hide();
var _90=$.extend({},_8d.queryParams||{});
_90.id=row[_8d.idField];
_15(_8b,row[_8d.idField],_90,true,function(){
if(cc.is(":empty")){
_8e.remove();
}else{
_8f(cc);
}
});
}
function _8f(cc){
row.state="open";
if(_8d.animate){
cc.slideDown("normal",function(){
$(_8b).treegrid("autoSizeColumn");
_16(_8b,_8c);
_8d.onExpand.call(_8b,row);
});
}else{
cc.show();
$(_8b).treegrid("autoSizeColumn");
_16(_8b,_8c);
_8d.onExpand.call(_8b,row);
}
};
};
function _28(_91,_92){
var _93=$.data(_91,"treegrid").options;
var tr=_93.finder.getTr(_91,_92);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_86(_91,_92);
}else{
_8a(_91,_92);
}
};
function _94(_95,_96){
var _97=$.data(_95,"treegrid").options;
var _98=_1b(_95,_96);
if(_96){
_98.unshift(_37(_95,_96));
}
for(var i=0;i<_98.length;i++){ _86(_95,_98[i][_97.idfield]); } }; function _99(_9a,_9b){ var _9c="$.data(_9a," treegrid").options;" _9d="_1b(_9a,_9b);" if(_9b){ _9d.unshift(_37(_9a,_9b)); for(var i="0;i<_9d.length;i++){" _8a(_9a,_9d[i][_9c.idfield]); _9e(_9f,_a0){ _a1="$.data(_9f," ids="[];" p="_46(_9f,_a0);" while(p){ id="p[_a1.idField];" ids.unshift(id); _8a(_9f,ids[i]); _a2(_a3,_a4){ _a5="$.data(_a3," treegrid");" _a6="_a5.options;" if(_a4.parent){ tr="_a6.finder.getTr(_a3,_a4.parent);" if(tr.next("tr.treegrid-tr-tree").length="=0){" _4e(_a3,_a4.parent); _a7="tr.children(" td[field="\""+_a6.treeField+"\"]").children("div.datagrid-cell");"" _a8="_a7.children(" span.tree-icon");" if(_a8.hasclass("tree-file")){ _a8.removeclass("tree-file").addclass("tree-folder tree-folder-open"); hit="$(" <span" class="\" tree-hit" tree-expanded\">").insertBefore(_a8);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_56(_a3,_a4.parent,_a4.data,_a5.data.length>0,true);
};
function _a9(_aa,_ab){
var ref=_ab.before||_ab.after;
var _ac=$.data(_aa,"treegrid").options;
var _ad=_46(_aa,ref);
_a2(_aa,{parent:(_ad?_ad[_ac.idField]:null),data:[_ab.data]});
var _ae=_ad?_ad.children:$(_aa).treegrid("getRoots");
for(var i=0;i<_ae.length;i++){ if(_ae[i][_ac.idfield]="=ref){" var _af="_ae[_ae.length-1];" _ae.splice(_ab.before?i:(i+1),0,_af); _ae.splice(_ae.length-1,1); break; } _b0(true); _b0(false); _1f(_aa); $(_aa).treegrid("showlines"); function _b0(_b1){ _b2="_b1?1:2;" tr="_ac.finder.getTr(_aa,_ab.data[_ac.idField]," body",_b2);" _b3="tr.closest(" table.datagrid-btable");" _b4="_ac.finder.getTr(_aa,ref," if(_ab.before){ tr.insertbefore(_b4); }else{ sub="_b4.next(" tr.treegrid-tr-tree");" tr.insertafter(sub.length?sub:_b4); _b3.remove(); }; _b5(_b6,_b7){ _b8="$.data(_b6," treegrid");" _b9="_b8.options;" _ba="_46(_b6,_b7);" $(_b6).datagrid("deleterow",_b7); $.easyui.removearrayitem(_b8.checkedrows,_b9.idfield,_b7); _1f(_b6); if(_ba){ _49(_b6,_ba[_b9.idfield]); _b8.total-="1;" $(_b6).datagrid("getpager").pagination("refresh",{total:_b8.total}); $(_b6).treegrid("showlines"); _bb(_bc){ t="$(_bc);" _bd="t.treegrid(" options");" if(_bd.lines){ t.treegrid("getpanel").addclass("tree-lines"); t.treegrid("getpanel").removeclass("tree-lines"); return; t.treegrid("getpanel").find("span.tree-indent").removeclass("tree-line tree-join tree-joinbottom"); t.treegrid("getpanel").find("div.datagrid-cell").removeclass("tree-node-last tree-root-first tree-root-one"); _be="t.treegrid(" getroots");" if(_be.length>1){
_bf(_be[0]).addClass("tree-root-first");
}else{
if(_be.length==1){
_bf(_be[0]).addClass("tree-root-one");
}
}
_c0(_be);
_c1(_be);
function _c0(_c2){
$.map(_c2,function(_c3){
if(_c3.children&&_c3.children.length){
_c0(_c3.children);
}else{
var _c4=_bf(_c3);
_c4.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_c2.length){
var _c5=_bf(_c2[_c2.length-1]);
_c5.addClass("tree-node-last");
_c5.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _c1(_c6){
$.map(_c6,function(_c7){
if(_c7.children&&_c7.children.length){
_c1(_c7.children);
}
});
for(var i=0;i<_c6.length-1;i++){ var _c8="_c6[i];" _c9="t.treegrid(" getlevel",_c8[_bd.idfield]);" tr="_bd.finder.getTr(_bc,_c8[_bd.idField]);" cc="tr.next().find(" tr.datagrid-row" td[field="\" "+_bd.treefield+"\"]" div.datagrid-cell"); cc.find("span:eq("+(_c9-1)+")").addclass("tree-line"); } }; function _bf(_ca){ _cb="tr.find(" return _cb; $.fn.treegrid="function(_cc,_cd){" if(typeof _cc="=" string"){" _ce="$.fn.treegrid.methods[_cc];" if(_ce){ _ce(this,_cd); }else{ this.datagrid(_cc,_cd); this.each(function(){ _cf="$.data(this," treegrid");" if(_cf){ $.extend(_cf.options,_cc); _1(this); if(_cf.options.data){ $(this).treegrid("loaddata",_cf.options.data); _15(this); }); $.fn.treegrid.methods="{options:function(jq){" $.data(jq[0],"treegrid").options; },resize:function(jq,_d0){ jq.each(function(){ $(this).datagrid("resize",_d0); },fixrowheight:function(jq,_d1){ _16(this,_d1); },loaddata:function(jq,_d2){ _56(this,_d2.parent,_d2); },load:function(jq,_d3){ $(this).treegrid("options").pagenumber="1;" $(this).treegrid("getpager").pagination({pagenumber:1}); $(this).treegrid("reload",_d3); },reload:function(jq,id){ _d4="$(this).treegrid(" options");" _d5="{};" id="=" object"){" _d5.id="id;" if(_d5.id){ _d6="$(this).treegrid(" find",_d5.id);" if(_d6.children){ _d6.children.splice(0,_d6.children.length); _d4.queryparams="_d5;" tr.next("tr.treegrid-tr-tree").remove(); tr.find("span.tree-hit").removeclass("tree-expanded tree-expanded-hover").addclass("tree-collapsed"); _8a(this,_d5.id); _15(this,null,_d5); },reloadfooter:function(jq,_d7){ _d8="$.data(this," treegrid").options;" dc="$.data(this," datagrid").dc;" if(_d7){ $.data(this,"treegrid").footer="_d7;" if(_d8.showfooter){ _d8.view.renderfooter.call(_d8.view,this,dc.footer1,true); _d8.view.renderfooter.call(_d8.view,this,dc.footer2,false); if(_d8.view.onafterrender){ _d8.view.onafterrender.call(_d8.view,this); $(this).treegrid("fixrowheight"); },getdata:function(jq){ $.data(jq[0],"treegrid").data; },getfooterrows:function(jq){ $.data(jq[0],"treegrid").footer; },getroot:function(jq){ _6e(jq[0]); },getroots:function(jq){ _71(jq[0]); },getparent:function(jq,id){ _46(jq[0],id); },getchildren:function(jq,id){ _1b(jq[0],id); },getlevel:function(jq,id){ _7b(jq[0],id); },find:function(jq,id){ _37(jq[0],id); },isleaf:function(jq,id){ _d9="$.data(jq[0]," hit="tr.find(" span.tree-hit");" hit.length="=0;" },select:function(jq,id){ $(this).datagrid("selectrow",id); },unselect:function(jq,id){ $(this).datagrid("unselectrow",id); },collapse:function(jq,id){ _86(this,id); },expand:function(jq,id){ _8a(this,id); },toggle:function(jq,id){ _28(this,id); },collapseall:function(jq,id){ _94(this,id); },expandall:function(jq,id){ _99(this,id); },expandto:function(jq,id){ _9e(this,id); },append:function(jq,_da){ _a2(this,_da); },insert:function(jq,_db){ _a9(this,_db); },remove:function(jq,id){ _b5(this,id); },pop:function(jq,id){ row="jq.treegrid(" find",id);" jq.treegrid("remove",id); row; },refresh:function(jq,id){ _dc="$.data(this," _dc.view.refreshrow.call(_dc.view,this,id); },update:function(jq,_dd){ _de="$.data(this," _de.view.updaterow.call(_de.view,this,_dd.id,row); if(row.checked!="undefined){" $.extend(row,{checkstate:row.checked?"checked":(row.checked="==false?" unchecked":undefined)});" _49(this,_dd.id); },beginedit:function(jq,id){ $(this).datagrid("beginedit",id); $(this).treegrid("fixrowheight",id); },endedit:function(jq,id){ $(this).datagrid("endedit",id); },canceledit:function(jq,id){ $(this).datagrid("canceledit",id); },showlines:function(jq){ _bb(this); },setselectionstate:function(jq){ $(this).datagrid("setselectionstate"); _df="$(this).data(" for(var i="0;i<_df.tmpIds.length;i++){" _29(this,_df.tmpids[i],true,true); _df.tmpids="[];" },getcheckednodes:function(jq,_e0){ _e0="_e0||" checked";" _e1="[];" $.easyui.foreach(jq.data("treegrid").checkedrows,false,function(row){ if(row.checkstate="=_e0){" _e1.push(row); _e1; },checknode:function(jq,id){ _29(this,id,true); },unchecknode:function(jq,id){ _29(this,id,false); },clearchecked:function(jq){ _e2="this;" _e3="$(_e2).treegrid(" $(_e2).datagrid("clearchecked"); $.map($(_e2).treegrid("getcheckednodes"),function(row){ _29(_e2,row[_e3.idfield],false,true); }}; $.fn.treegrid.parseoptions="function(_e4){" $.extend({},$.fn.datagrid.parseoptions(_e4),$.parser.parseoptions(_e4,["treefield",{checkbox:"boolean",cascadecheck:"boolean",onlyleafcheck:"boolean"},{animate:"boolean"}])); _e5="$.extend({},$.fn.datagrid.defaults.view,{render:function(_e6,_e7,_e8){" _e9="$.data(_e6," _ea="$(_e6).datagrid(" getcolumnfields",_e8);" _eb="$.data(_e6," datagrid").rowidprefix;" if(_e8){ if(!(_e9.rownumbers||(_e9.frozencolumns&&_e9.frozencolumns.length))){ return; _ec="this;" if(this.treenodes&&this.treenodes.length){ _ed="_ee.call(this,_e8,this.treeLevel,this.treeNodes);" $(_e7).append(_ed.join("")); _ee(_ef,_f0,_f1){ _f2="$(_e6).treegrid(" getparent",_f1[0][_e9.idfield]);" _f3="(_f2?_f2.children.length:$(_e6).treegrid(" getroots").length)-_f1.length;" _f4="[" <table" class="\" datagrid-btable\"" cellspacing="\" 0\"" cellpadding="\" border="\"><tbody>"];
for(var i=0;i<_f1.length;i++){ var row="_f1[i];" if(row.state!="open" &&row.state!="closed" ){ row.state="open" ; } css="_e9.rowStyler?_e9.rowStyler.call(_e6,row):" ";" cs="this.getStyleValue(css);" cls="class=\" datagrid-row "+(_f3++%2&&_e9.striped?"datagrid-row-alt ":" ")+cs.c+"\""; _f5="cs.s?" style="\""+cs.s+"\"":"";"" _f6="_eb+" -"+(_ef?1:2)+"-"+row[_e9.idfield];" _f4.push("<tr id="\" "+_f6+"\"" node-id="\" "+row[_e9.idfield]+"\"" "+cls+" "+_f5+">");
_f4=_f4.concat(_ec.renderRow.call(_ec,_e6,_ea,_ef,_f0,row));
_f4.push("");
if(row.children&&row.children.length){
var tt=_ee.call(this,_ef,_f0+1,row.children);
var v=row.state=="closed"?"none":"block";
_f4.push("<tr class="\" treegrid-tr-tree\""><td style="\" border:0px\"" colspan="+(_ea.length+(_e9.rownumbers?1:0))+"><div style="\" display:"+v+"\"">");
_f4=_f4.concat(tt);
_f4.push("</div></td></tr>");
}
}
_f4.push("</_f1.length;i++){></tbody>");
return _f4;
};
},renderFooter:function(_f7,_f8,_f9){
var _fa=$.data(_f7,"treegrid").options;
var _fb=$.data(_f7,"treegrid").footer||[];
var _fc=$(_f7).datagrid("getColumnFields",_f9);
var _fd=["<table class="\" datagrid-ftable\"" cellspacing="\" 0\"" cellpadding="\" border="\"><tbody>"];
for(var i=0;i<_fb.length;i++){ var row="_fb[i];" row[_fa.idfield]="row[_fa.idField]||(" foot-row-id"+i);" _fd.push("<tr class="\" datagrid-row\"" node-id="\" "+row[_fa.idfield]+"\"">");
_fd.push(this.renderRow.call(this,_f7,_fc,_f9,0,row));
_fd.push("");
}
_fd.push("</_fb.length;i++){></tbody></table>");
$(_f8).html(_fd.join(""));
},renderRow:function(_fe,_ff,_100,_101,row){
var _102=$.data(_fe,"treegrid");
var opts=_102.options;
var cc=[];
if(_100&&opts.rownumbers){
cc.push("<td class="\" datagrid-td-rownumber\""><div class="\" datagrid-cell-rownumber\"">0</div></td>");
}
for(var i=0;i<_ff.length;i++){ var _103="_ff[i];" col="$(_fe).datagrid(" getcolumnoption",_103);" if(col){ css="col.styler?(col.styler(row[_103],row)||" "):"";" cs="this.getStyleValue(css);" cls="cs.c?" class="\""+cs.c+"\"":"";"" _104="col.hidden?" style="\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");"" cc.push("<td field="\" "+_103+"\"" "+cls+" "+_104+">");
var _104="";
if(!col.checkbox){
if(col.align){
_104+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_104+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_104+="height:auto;";
}
}
}
cc.push("<div style="\" "+_104+"\"" "); if(col.checkbox){ cc.push("class="\" datagrid-cell-check" }else{ "+col.cellclass); } cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type="\" checkbox\"" checked="\" checked\"");" }else{ cc.push("<input } cc.push(" name="\" "+_103+"\"" value="\" "+(row[_103]!="undefined?row[_103]:"")+"\""">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_103],row);
}else{
val=row[_103];
}
if(_103==opts.treeField){
for(var j=0;j<_101;j++){ cc.push("<span class="\" tree-indent\"">");
}
if(row.state=="closed"){
cc.push("<span class="\" tree-hit" tree-collapsed\"></span>");
cc.push("<span class="\" tree-icon" tree-folder "+(row.iconcls?row.iconcls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class="\" tree-hit" tree-expanded\"></span>");
cc.push("<span class="\" tree-icon" tree-folder tree-folder-open "+(row.iconcls?row.iconcls:"")+"\"></span>");
}else{
cc.push("<span class="\" tree-indent\""></span>");
cc.push("<span class="\" tree-icon" tree-file "+(row.iconcls?row.iconcls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_fe,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_102.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
row.checkState=crow.checkState;
row.checked=crow.checked;
$.easyui.addArrayItem(_102.checkedRows,opts.idField,row);
}else{
var prow=$.easyui.getArrayItem(_102.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_102.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_102.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class="\" tree-checkbox" tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class="\" tree-title\"">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</_101;j++){></div>");
cc.push("");
}
}
return cc.join("");
},hasCheckbox:function(_105,row){
var opts=$.data(_105,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_105,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_106,id){
this.updateRow.call(this,_106,id,{});
},updateRow:function(_107,id,row){
var opts=$.data(_107,"treegrid").options;
var _108=$(_107).treegrid("find",id);
$.extend(_108,row);
var _109=$(_107).treegrid("getLevel",id)-1;
var _10a=opts.rowStyler?opts.rowStyler.call(_107,_108):"";
var _10b=$.data(_107,"datagrid").rowIdPrefix;
var _10c=_108[opts.idField];
function _10d(_10e){
var _10f=$(_107).treegrid("getColumnFields",_10e);
var tr=opts.finder.getTr(_107,id,"body",(_10e?1:2));
var _110=tr.find("div.datagrid-cell-rownumber").html();
var _111=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_107,_10f,_10e,_109,_108));
tr.attr("style",_10a||"");
tr.find("div.datagrid-cell-rownumber").html(_110);
if(_111){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_10c!=id){
tr.attr("id",_10b+"-"+(_10e?1:2)+"-"+_10c);
tr.attr("node-id",_10c);
}
};
_10d.call(this,true);
_10d.call(this,false);
$(_107).treegrid("fixRowHeight",id);
},deleteRow:function(_112,id){
var opts=$.data(_112,"treegrid").options;
var tr=opts.finder.getTr(_112,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _113=del(id);
if(_113){
if(_113.children.length==0){
tr=opts.finder.getTr(_112,_113[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class="\" tree-indent\""></span>").prependTo(cell);
}
}
this.setEmptyMsg(_112);
function del(id){
var cc;
var _114=$(_112).treegrid("getParent",id);
if(_114){
cc=_114.children;
}else{
cc=$(_112).treegrid("getData");
}
for(var i=0;i<cc.length;i++){ if(cc[i][opts.idfield]="=id){" cc.splice(i,1); break; } return _114; }; },onbeforerender:function(_115,_116,data){ if($.isarray(_116)){ data="{total:_116.length,rows:_116};" _116="null;" if(!data){ false; var _117="$.data(_115," treegrid");" opts="_117.options;" if(data.length="=undefined){" if(data.footer){ _117.footer="data.footer;" if(data.total){ _117.total="data.total;" }else{ function _118(_119,_11a){ for(var i="0;i<_119.length;i++){" row="_119[i];" row._parentid="_11a;" if(row.children&&row.children.length){ _118(row.children,row[opts.idfield]); _118(data,_116); this.sort(_115,data); this.treenodes="data;" this.treelevel="$(_115).treegrid(" getlevel",_116);" node="_37(_115,_116);" if(node){ if(node.children){ node.children="node.children.concat(data);" _117.data="_117.data.concat(data);" },sort:function(_11b,data){ if(!opts.remotesort&&opts.sortname){ _11c="opts.sortName.split(" ,");" _11d="opts.sortOrder.split(" _11e(data); _11e(rows){ rows.sort(function(r1,r2){ r="0;" sn="_11c[i];" so="_11d[i];" col="$(_11b).treegrid(" getcolumnoption",sn);" _11f="col.sorter||function(a,b){" a="=b?0:(a">b?1:-1);
};
r=_11f(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i</cc.length;i++){></_ff.length;i++){></_c6.length-1;i++){></_ae.length;i++){></_98.length;i++){></_1a.length;i++){>