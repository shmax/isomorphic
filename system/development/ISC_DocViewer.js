
/*

  SmartClient Ajax RIA system
  Version 7.0RC/LGPL Development Only (2009-04-21)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_DocViewer){isc.module_DocViewer=1;isc._moduleStart=isc._DocViewer_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log && isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={ message:'DocViewer load/parse time: ' + (isc._moduleStart-isc._moduleEnd) + 'ms', category:'loadTime'};
if(isc.Log && isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime')
else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM
else isc._preLog=[isc._pTM]}isc.defineClass("DocCookieState").addProperties({init:function(){isc.ClassFactory.addGlobalID(this);if(!this.cookieName){this.logError("You must set the 'cookieName' property");return}
if(!isc.Page.isLoaded()){isc.Page.setEvent("load",this.getID()+".pageLoaded()")}else{this.load();this.delayCall("processCallback")}},pageLoaded:function(){this.load();this.processCallback()},processCallback:function(){if(this.onload){this.fireCallback(this.onload,["state","data"],[this,this.data])}},load:function(){var _1=isc.Cookie.get(this.cookieName);this.logDebug("loaded: "+_1)
if(_1){try{var _2=new Function("return "+_1);this.data=_2()}catch(e){this.logWarn("state cookie corrupt, clearing out and defaulting state.");this.clear()}}
if(!this.data)this.data=isc.clone(this.defaultData);return this.data},canUpdate:function(){return isc.Page.isLoaded()},store:function(_1){if(!this.canUpdate())return;if(!_1&&!this.data)return;if(_1)this.data=_1;if(!this.disableCookieStore){var _2=isc.Comm.serialize(this.data);this.logDebug("storing: "+_2+" - length: "+_2.length);isc.Cookie.set(this.cookieName,_2,this.cookiePath,this.cookieDomain,this.cookieExpiration)}},add:function(_1){if(!this.canUpdate())return;if(!this.data)this.data={};isc.addProperties(this.data,_1);this.store()},clear:function(){if(!this.canUpdate())return;this.data=null;isc.Cookie.clear(this.cookieName)},reset:function(){if(!this.canUpdate())return;this.data=isc.clone(this.defaultData);this.store()},getStoredSize:function(_1){if(!_1)_1=this.data;if(!_1)return 0;return isc.Comm.serialize(_1).length}});isc.defineClass("DocFilterField","Canvas");isc.A=isc.DocFilterField.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.height=24;isc.A.overflow="hidden";isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);var _1=isc.StretchImg.create({autoDraw:false,left:2,top:2,height:20,width:200,src:"[ISO_DOCS_SKIN]/images/DocFilterField/filterfield.png",canHover:true,hoverHeight:1,prompt:"Filter by name (filters as you type)",vertical:false,items:[{width:18,name:"start"},{width:"*",name:"stretch"},{width:7,name:"end"}]});this.form=isc.FormLayout.create({autoDraw:false,left:2,top:3,height:20,width:290,colWidths:[172,"*"],styleName:"filterForm",cellPadding:0,cellSpacing:0,cellBorder:0,fields:[{name:this.fieldName,textBoxStyle:"searchField",height:16,width:"*",showTitle:true,titleOrientation:"right",title:"Filter results"}]},this.formProps);this.addChild(_1);this.addChild(this.form)}
);isc.B._maxIndex=isc.C+1;isc.defineClass("DocPrefsDialog",isc.Window);isc.A=isc.DocPrefsDialog.getPrototype();isc.A.title="Preferences";isc.A.autoCenter=true;isc.A.showMinimizeButton=false;isc.A.height=140;isc.A.width=500;isc.A.isModal=true;isc.A.bodyDefaults={layoutMargin:0,membersMargin:10};isc.A=isc.DocPrefsDialog.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);this.addItem(this.$46n());this.addItem(this.$46o())}
,isc.A.show=function(){var _1=this.docViewer.state;var _2=_1.tab==1?"api":"overview";this.form.setValue("classView",_2);this.Super("show",arguments)}
,isc.A.$46n=function(){this.form=isc.DynamicForm.create({autoDraw:false,width:300,height:"*",overflow:"visible",numCols:2,colWidths:[120,"*"],fields:[{name:"classView",title:"Default class view",type:"radioGroup",defaultValue:"overview",valueMap:{overview:"Overview Tab",api:"API Tab"},titleHoverHTML:function(){return"When showing a class, should the Overview or API tab be opened by default?"}}]});return this.form}
,isc.A.$46o=function(){this.buttons=isc.HStack.create({autoDraw:false,membersMargin:5,members:[isc.LayoutSpacer.create(),isc.IButton.create({autoDraw:false,icon:"[ISO_DOCS_SKIN]/images/DocPrefsDialog/ok.png",title:"OK",docPrefs:this,click:"this.docPrefs.okClick()"}),isc.IButton.create({autoDraw:false,icon:"[ISO_DOCS_SKIN]/images/DocPrefsDialog/cancel.png",title:"Cancel",docPrefs:this,click:"this.docPrefs.cancelClick()"}),isc.IButton.create({autoDraw:false,width:150,icon:"[ISO_DOCS_SKIN]/images/DocPrefsDialog/revert.png",title:"Revert To Defaults",docPrefs:this,click:"this.docPrefs.revertClick()"})]});return this.buttons}
,isc.A.okClick=function(){var _1=this.form.getValues();this.docViewer.state.add({tab:_1.classView=="overview"?0:1});this.hide()}
,isc.A.cancelClick=function(){this.hide()}
,isc.A.revertClick=function(){this.$46p=isc.ask("Clear all state and revert to defaults?"+" This will clear saved tree state, size, selection, and other remembered state.",this.getID()+".revertCallback(value)")}
,isc.A.revertCallback=function(_1){if(_1){this.docViewer.state.reset();this.hide()}}
);isc.B._maxIndex=isc.C+8;isc.defineClass("DocHelpDialog",isc.Window);isc.A=isc.DocHelpDialog.getPrototype();isc.A.title="Help";isc.A.autoCenter=true;isc.A.autoSize=true;isc.A=isc.DocHelpDialog.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);this.addItem(this.$46q())}
,isc.A.$46q=function(){var _1=isc.jsdoc.getDocItem("group:docViewerHelp");return isc.Canvas.create({overflow:"visible",dynamicContents:true,contents:isc.jsdoc.getAttribute(_1,"description")})}
);isc.B._maxIndex=isc.C+2;isc.defineClass("DocGrid","ListGrid");isc.A=isc.DocGrid.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.alternateRecordStyles=true;isc.A.autoDraw=false;isc.B.push(isc.A.rowOver=function(_1){if(this.updateOnRowOver){if(this.mouseLock)return;this.previewRecord(_1)}}
,isc.A.rowClick=function(_1,_2,_3){if(this.updateOnRowOver)this.mouseLock=true;if(_1.ref&&this.docViewer&&!this.docViewer.noHistory&&this.docViewer.trackHistory)
isc.History.addHistoryEntry(this.docViewer.encodeHistoryID(_1.ref));this.previewRecord();return this.Super("rowClick",arguments)}
,isc.A.mouseOut=function(){if(this.updateOnRowOver){delete this.mouseLock;var _1=this.getSelectedRecord();if(_1)this.previewRecord()}}
,isc.A.previewRecord=function(_1){var _2;if(_1)var _2=isc.jsdoc.hoverHTML(_1.ref,null,this.linkNames);else{var _3=this.getSelection();var _4=isc.StringBuffer.create();for(var i=0;i<_3.length;i++){_4.append(isc.jsdoc.hoverHTML(_3[i].ref,null,this.linkNames));if(i+1<_3.length)_4.append("<HR>")}
_2=_4.toString()}
if(this.searchRegexes&&_2){var _6=[];var i,_7="<",_8=">";var _9;while((i=_2.indexOf(_7))!=-1){var j=_2.indexOf(_8);if(j==-1){_9=true;break}
if(i!=0){_6[_6.length]=_2.substring(0,i)}
_6[_6.length]=_2.substring(i,j+1);_2=_2.substring(j+1)}
if(!_9){for(var j=0;j<_6.length;j++){_2=_6[j];if(_2.startsWith(_7))continue;for(var i=0;i<this.searchRegexes.length;i++){var _11=this.searchRegexes[i];_2=_2.replace(_11,"$1<span class='searchHilight'>$2</span>$3")}
_6[j]=_2}
_2=_6.join(isc.emptyString)}}
this.docPreview.setContents(_2)}
,isc.A.keyPress=function(_1,_2){if(_1.keyName.length>1)return;var _3=0;var _4=this.getSelectedRecord();if(_4)_3=this.data.indexOf(_4)+1;var _5=this.shortcutField;var _6;for(var i=_3;i<this.data.getLength();i++){var _8=this.data.get(i);var _9=_8[this.shortcutField];if(_9==null)continue;if(_9.startsWith(_1.keyName.toLowerCase())||_9.startsWith(_1.keyName))
{_6=_8;break}}
if(!_6){for(var i=0;i<_3-1;i++){var _8=this.data.get(i);var _9=_8[this.shortcutField];if(_9==null)continue;if(_9.startsWith(_1.keyName.toLowerCase())||_9.startsWith(_1.keyName))
{_6=_8;break}}}
if(_6){if(_4)this.deselectRecord(_4);this.selectRecord(_6);this.scrollRecordIntoView(this.data.indexOf(_6),true);this.previewRecord(_6)}}
);isc.B._maxIndex=isc.C+5;isc.defineClass("DocTabSet","TabSet");isc.A=isc.DocTabSet.getPrototype();isc.A.tabBarDefaults={baseLineSrc:"[ISO_DOCS_SKIN]/images/explorerTabs/top/baseline.png",tabDefaults:{src:"[ISO_DOCS_SKIN]/images/explorerTabs/top/tab.png",titleStyle:"explorerTabTitle",showRollOver:true}};isc.A.symmetricEdges=true;isc.A.paneContainerProperties={backgroundColor:"white",edgeImage:"[SKIN]/rounded/frame/FFFFFF/4.png"};isc.A=isc.DocTabSet.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.tabBarControls=["tabScroller","tabPicker","helpLauncher"];isc.B.push(isc.A.getControl=function(_1){if(_1=="helpLauncher"){if(!this.helpLauncher){this.helpLauncher=isc.ImgButton.create({width:16,height:16,autoDraw:false,canHover:true,prompt:"<nobr>Show help</nobr>",hoverHeight:20,src:"[ISO_DOCS_SKIN]/images/DocTabSet/help.png",layoutAlign:"center",click:"isc.DocViewer.instance.showHelpDialog()"})}
return this.helpLauncher}
return this.Super("getControl",arguments)}
);isc.B._maxIndex=isc.C+1;isc.ClassFactory.defineClass("DocUtils");isc.addGlobal("doc",isc.DocUtils);isc.A=isc.DocUtils;isc.A.nativeClasses=["Object","Boolean","RegEx"];isc.A.offsetMap={};isc.A.extraOffsetMap={};isc.A=isc.DocUtils;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.externalLink=function(_1,_2){if(!_2)_2=_1;return"<a href='"+_1+"' onclick=\"window.open('"+_1+"');return false;\">"+_2+"</a>"}
,isc.A.linkForStandaloneExample=function(_1,_2){if(!_2)_2=_1;var _3="<a href='"+_1+"' onclick=\"window.open('"+_1+"');return false;\">"+_2+"</a>";if(!_1.startsWith("http")){_3+="&nbsp;"+isc.Canvas.imgHTML("[ISO_DOCS_SKIN]/images/text_code.gif",16,16,null,"onclick='isc.DocUtils.showExampleSource(\""+_1+"\")'"+" onmouseover='isc.Hover.setAction(isc.DocUtils, isc.DocUtils.doSourceHover,null,300)'"+" onmouseout='isc.Hover.clear()'"+" style='cursor:"+isc.Canvas.HAND+"'")}
return _3}
,isc.A.doSourceHover=function(){isc.Hover.show("<nobr>View example source</nobr>")}
,isc.A.showExampleSource=function(_1){window.open("/isomorphic/Source.Viewer?file="+_1)}
,isc.A.buildTableHeader=function(_1,_2,_3){if(!this.$46r){this.$46r=["<table id='",null,"' BORDER='1' CELLPADDING='0' CELLSPACING='0' WIDTH='100%'>"]}
var t=this.$46r;t[1]=this.idForRef(_2);if(!_3)_3=isc.StringBuffer.newInstance();return _3.append(t)}
,isc.A.lookupValue=function(_1){if(!_1)return;var _2;if(_1.contains(".")){var _3=_1.split(".");var _4=_3[0];var _5=_3[1];var _6=isc.ClassFactory.getClass(_4);if(this.nativeClasses.contains(_4))_6=isc.eval(_4);if(_3.length==2&&_6){_2=_6[_5];var _7;if(_2===_7){this.logWarn("attribute: "+_1+" evals to undefined");return"undefined"}
if(isc.isA.String(_2))_2='"'+_2+'"';if(_2===null)_2="null";return _2}}
return _1}
,isc.A.offsetCanvasForRef=function(_1,_2){if(!_1)return null;if(_2)this.offsetMap[_1]=_2;return this.offsetMap[_1]}
,isc.A.extraOffsetForRef=function(_1,_2){if(!_1)return null;if(_2)this.extraOffsetMap[_1]=_2;return this.extraOffsetMap[_1]}
,isc.A.idForRef=function(_1){return _1.replace(/\:|\.| /g,"_")}
,isc.A.linkForRef=function(_1,_2,_3){if(!_1)return _2;var _4=_1.indexOf("#");var _5;if(_4!=-1){var _6=_1.substring(_4+1);var _7;var _8=_6.indexOf("#");if(_8!=-1){_7=_6.substring(_8+1);_6=_6.substring(0,_8)}
if(!_2)_2=_1;_1=_1.substring(0,_4);_5=isc.jsdoc.getDocItem(_1);if(!_5)return _2;_3=_1+"_"+_6+(_7?"_"+_7:"")}
if(!_5)_5=isc.jsdoc.getDocItem(_1);if(!_2){_2=_1;var _9=_5?isc.jsdoc.getAttribute(_5,"type"):null;if(_9=="method"||_9=="classMethod")_2+="()";_2=_2.substring(_2.indexOf(":")+1);var _10=_5?isc.jsdoc.getAttribute(_5,"title"):null;if(_10)_2=_10}
if(!_5)return _2;return isc.StringBuffer.concat("<a href='' "," onmouseout='isc.Hover.clear()' onmouseover='isc.DocUtils.$46s(\"",_1,"\")'"," onclick='isc.Hover.clear();isc.DocViewer.instance.$46t(\"",_1,"\"",(_3?",\""+_3+"\"":""),");return false;'>",_2,"</a>")}
,isc.A.$46s=function(_1){var _2=isc.JSDoc.hoverHTML(_1);if(_2)isc.Hover.setAction(isc.Hover,isc.Hover.show,[_2,{width:500,baseStyle:"docHover"}],300)}
,isc.A.linkForDocNode=function(_1,_2){if(!isc.DocViewer)return _2?_2:_1;if(!_2){var _3=isc.DocViewer.instance.$46u;_2=_3.getTitle(_3.find(_3.idField,_1))}
return isc.StringBuffer.concat("<a href='' "," onclick='isc.DocUtils.$46v(\"",_1,"\");return false;'>",_2,"</a>")}
,isc.A.$46v=function(_1){var _2=isc.DocViewer.instance.$46u,_3=isc.DocViewer.instance.$46w;var _4=_2.find(_2.idField,_1);_3.deselectAllRecords();_3.selectRecord(_4)}
,isc.A.linkForExampleId=function(_1,_2){if(!_2){var _3=window.exampleTree;if(_3){var _4=_1.startsWith("|")?_3.find(_1):_3.findById(_1);_2=_4.title+" Example"}else{_2=_1+" Example"}}
if(isc.DocViewer&&isc.DocViewer.instance){return"<a target='_blank' href='"+isc.DocViewer.instance.featureExplorerURL+"#"+_1+"'>"+_2+"</a>"}else{return _2}}
,isc.A.textForFlags=function(_1){var _2=_1;_1=this.getCanonicalFlags(_1);if((!_1||!_2)&&!(_2&&_2.contains("A")))return isc.emptyString;var _3=isc.StringBuffer.create();if(_1!=isc.emptyString){_3.append("&nbsp;",this.linkForRef("group:flags",_1))}
if(_2.contains("A"))_3.append("&nbsp;<span style='color:red'>[Advanced]</span>");return _3.toString()}
,isc.A.getCanonicalFlags=function(_1){if(!_1||_1==isc.emptyString)return isc.emptyString;var _2="[";if(_1.contains("I"))_2+="I";if(_1.contains("R"))_2+="R";if(_1.contains("W"))_2+="W";_2+="]";if(_2=="[]")return isc.emptyString;return _2}
,isc.A.reportMissingModules=function(_1,_2){var _3=isc.StringBuffer.create();this.reportMissingModulesStart(_3,_2);_3.append(_1);this.reportMissingModulesEnd(_3,_2);return _3.toString()}
,isc.A.getMissingModules=function(_1){var _2;var _3=_1.requiresModules;if(!_3&&_1.definingClass){var c=isc.jsdoc.getDocItem(_1.definingClass);if(c)_3=isc.jsdoc.getList(c,"requiresModules")}
if(_3){if(!isc.hasOptionalModules(_3)){_2=isc.getMissingModules(_3).getProperty("name").join(", ")}}
return _2}
,isc.A.reportMissingModulesStart=function(_1,_2){var _3=this.getMissingModules(_2);if(_3){_1.append("<div style='background-color:lightgrey;'><br><span style='color:red;'><b>&nbsp;This API requires: <a href='",isc.licensingPage,"' target=_blank>",_3,"</a></b></span><p>")}}
,isc.A.reportMissingModulesEnd=function(_1,_2){if(this.getMissingModules(_2))_1.append("</div>")}
);isc.B._maxIndex=isc.C+20;isc.defineClass("JSDoc");isc.jsdoc=isc.JSDoc;isc.A=isc.JSDoc;isc.A.$46x="group";isc.A.$46y="type";isc.A.$46z="class";isc.A.$460="pseudoClass";isc.A.$461="object";isc.A.$462="interface";isc.A.$463="method";isc.A.$464="classMethod";isc.A.$465="attr";isc.A.$466="classAttr";isc.A=isc.JSDoc;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.addPropertiesOnInit=false;isc.A.$467=["class","interface","object","pseudoClass","type","group"];isc.A.$468=["method","classMethod"];isc.A.$469=["attr","method","classAttr","classMethod"];isc.A.$47a=[,":",,".",isc.emtptyString];isc.A.$47b=[,":",isc.emptyString];isc.B.push(isc.A.init=function(_1){if(!_1)return;if(this.data)return;this.data=_1;var _2=this.refs=[];if(_1.documentElement){this.dataIsXML=true;var _3=this.items=isc.xml.selectNodes(this.data,"/docItems/docItem");var _4=this.docItems={};var _5="ref";for(var i=0;i<_3.length;i++){var _7=_3[i];var _8=_7.getAttribute(_5);_2[i]=_8;_3[i]=_7;_4[_8]=_7}}else{var _4=this.docItems=this.data;var _3=this.items=[];for(var _8 in this.docItems){var i=_2.length;_2[i]=_8;_3[i]=_4[_8]}}}
,isc.A.getRefs=function(){return this.refs}
,isc.A.hasData=function(){return this.docItems!=null}
,isc.A.getAttributes=function(_1,_2){if(this.dataIsXML)return isc.xml.getAttributes(_1,_2);return _1}
,isc.A.getAttribute=function(_1,_2){if(this.dataIsXML)return _1.getAttribute(_2);return _1[_2]}
,isc.A.toJS=function(_1,_2){if(this.dataIsXML)return isc.xml.toJS(_1,false,_2);return _1}
,isc.A.setAttribute=function(_1,_2,_3){if(this.dataIsXML)_1.setAttribute(_2,_3);else _1[_2]=_3}
,isc.A.removeAttribute=function(_1,_2){if(this.dataIsXML)_1.removeAttribute(_2);else delete _1[_2]}
,isc.A.getList=function(_1,_2){if(this.dataIsXML)return isc.xml.selectScalarList(_1,_2+"/text()");var _3=_1[_2];if(!_3)_3=[];if(!isc.isAn.Array(_3))_3=[_3];return _3}
,isc.A.addToList=function(_1,_2,_3){if(this.dataIsXML){var _4=this.data.nativeDoc;var _5=_4.createElement(_2);var s=_4.createTextNode(_3);_5.appendChild(s);_1.appendChild(_5)}else{if(!_1[_2])_1[_2]=[];_1[_2].add(_3)}}
,isc.A.hoverHTML=function(_1,_2,_3){if(_1==null)return null;var _4=this.getDocItem(_1,_2),_5;if(!_4){var _6=_1;var _7=_1.indexOf(isc.colon);if(_7!=-1){var _8=_1.indexOf(isc.dot);_6=_1.substring(_7+1,_8);_2=_1.substring(_8+1,_1.length)}
var _9=isc.ClassFactory.getClass(_6);if(_9){var _10=_9.getSuperClass();if(_10){return this.hoverHTML(_10.getClassName(),_2,_3)}}
return null}
var _11=this.getAttribute(_4,this.$46y);if(this.isMethod(_11))_5=isc.MethodFormatter.hoverHTML(this.toJS(_4),_3);else if(this.isAttr(_11))_5=isc.AttrFormatter.hoverHTML(this.toJS(_4),_3);else if(this.isType(_11))_5=isc.TypeViewer.hoverHTML(this.toJS(_4),_3);else if(this.isClass(_11)||this.isObject(_11)||this.isPseudoClass(_11)||this.isInterface(_11))
{_5=isc.ClassViewer.hoverHTML(this.toJS(_4),_3)}
else if(this.isGroup(_11))_5=isc.GroupViewer.hoverHTML(this.toJS(_4),_3);return _5?_5.evalDynamicString():null}
,isc.A.isMethod=function(_1){return _1==this.$463||_1==this.$464}
,isc.A.isInstance=function(_1){return _1==this.$463||_1==this.$465}
,isc.A.isAttr=function(_1){return _1==this.$465||_1==this.$466}
,isc.A.isType=function(_1){return _1==this.$46y}
,isc.A.isClass=function(_1){return _1==this.$46z}
,isc.A.isObject=function(_1){return _1==this.$461}
,isc.A.isPseudoClass=function(_1){return _1==this.$460}
,isc.A.isInterface=function(_1){return _1==this.$462}
,isc.A.isGroup=function(_1){return _1==this.$46x}
,isc.A.addDocItem=function(_1,_2){this.docItems[_1]=_2;this.items.add(_2);this.refs.add(_1);if(this.dataIsXML)this.data.documentElement.appendChild(_2)}
,isc.A.getType=function(_1){return this.getAttribute(_1,this.$46y)}
,isc.A.getDocItem=function(_1,_2,_3){if(!this.docItems){this.logWarn("documentation not available");return null}
var _4=this.docItems[_1];if(_4)return _4;if(!isc.isA.String(_1))return null;var _5,_6;if(_2==null&&_1.indexOf(isc.dot)==-1){for(var i=0;i<this.$467.length;i++){_6=this.$467[i];_4=this.docItems[this.makeRef(_6,_1)]
if(_4)return _4}}else{var _8=_1,_9=_2;;if(!_9){if(_1.contains(isc.dot)){var s=_1.split(isc.dot);_8=s[0];_9=s[1]}else{this.logWarn("No item specified and container: "+_1+" not in dot notation");return null}}
var _11=false;var _12=_9.indexOf("()");if(_12!=-1){_9=_9.substring(0,_12);_11=true}
var _13=_11?this.$468:this.$469;for(var i=0;i<_13.length;i++){_6=_13[i];_4=this.docItems[this.makeRef(_6,_8,_9)];if(_4)return _4}
if(_3&&_8!=null){var c=isc.ClassFactory.getClass(_8);if(c){var _15=c.getSuperClass();if(_15)return this.getDocItem(_15.getClassName(),_9,true)}}}
this.logDebug("getDocItem: couldn't find docItem from params (container: "+_1+", item: "+_2+")");return null}
,isc.A.makeRef=function(_1,_2,_3){var t;if(_3!=null){t=this.$47a;t[0]=_1;t[2]=_2;t[4]=_3}else{t=this.$47b;t[0]=_1;t[2]=_2}
return t.join(isc.emptyString)}
,isc.A.getGroupForAttribute=function(_1,_2){var _3=this.getAttributeItem(_1,_2);if(_3!=null){var _4=this.getList(_3,"groups");return _4?_4[0]:"other"}
var _5=isc.DS.get(_1);if(_5==null)return null;if(_5.inheritsFrom)return this.getGroupForAttribute(_5.inheritsFrom,_2);else return null}
,isc.A.getGroupItem=function(_1){return this.getDocItem(this.makeRef(this.$46x,_1))}
,isc.A.getAttributeItem=function(_1,_2){return this.getDocItem(this.makeRef(this.$465,_1,_2))}
,isc.A.isAdvancedAttribute=function(_1){return this.attributeContainsAllFlags(_1,"A")}
,isc.A.attributeContainsAllFlags=function(_1,_2){var _3=_1;if(_3==null)return false;if(_2==null||isc.isAn.emptyString(_2))return true;var _4=this.getAttribute(_3,"flags");if(_4==null||isc.isAn.emptyString(_4))return false;for(var i=0;i<_2.length;i++){if(_4.indexOf(_2.charAt(i))==-1)return false}
return true}
,isc.A.docItemForDSField=function(_1,_2){_1=isc.DS.get(_1);if(_1){var _3=_1.getField(_2);if(_3){var _4=isc.clone(_3);_4.definingClass=_1.Constructor?_1.Constructor:_1.ID;_4.ref="attr:"+_3.definitionClass+"."+_2;_4.valueType=_4.type;_4.type="attr";return _4}}
return null}
,isc.A.docItemForDSMethod=function(_1,_2){_1=isc.DS.get(_1);if(_1){var _3=_1.methods.find("name",_2);if(_3){_3.definingClass=_1.Constructor?_1.Constructor:_1.ID;_3.ref="method:"+_3.definitionClass+"."+_2;return _3}}
return null}
,isc.A.getSuperClassName=function(_1){var _2=_1.inheritsFrom;if(!_2){var _3=isc.ClassFactory.getClass(_1.name);if(_3){var _4=_3.getSuperClass();if(_4)_2=_4.getClassName()}}
return _2}
,isc.A.addDocItem=function(_1,_2){}
,isc.A.genScriptDoc=function(_1,_2){var _3=isc.JSDoc.refs;var _4={};var _5=this;this.options=_1||{};var _6=isc.getValues(isc.JSDoc.docItems);var _7=_6.findAll("type","class");_7=_7.concat(_6.findAll("type","object"));_7=_7.concat(_6.findAll("type","interface"));this.logWarn("classItems: "+this.echo(_7));for(var i=0;i<_7.length;i++){if(!_1.classes||_1.classes.contains(_7[i].name)){this.addScriptDocItem(isc.clone(_7[i]),_4)}}
isc.Timer.setTimeout(function(){var _9=_6.duplicate();_9.removeAll(_7);_5.logWarn(_5.echoLeaf(_9));for(var i=0;i<_9.length;i++){if(!_1.classes||_1.classes.contains(_9[i].definingClass)){_5.addScriptDocItem(_9[i],_4)}}
isc.Timer.setTimeout(function(){_5.genScriptDocXML(_4)})})}
,isc.A.genScriptDocXML=function(_1){isc.DataSource.create({ID:"sdocParam",tagName:"parameter",fields:[{name:"name",xmlAttribute:"true"},{name:"usage",xmlAttribute:"true"},{name:"type",xmlAttribute:"true"}]});isc.DataSource.create({ID:"sdocReturnType",tagName:"return-type",fields:[{name:"type",xmlAttribute:"true"}]});isc.DataSource.create({ID:"sdocMethod",tagName:"method",fields:[{name:"name",xmlAttribute:"true"},{name:"scope",xmlAttribute:"true"},{name:"stringMethod",xmlAttribute:"true"},{name:"event",xmlAttribute:"true"},{name:"bubbles",xmlAttribute:"true"},{name:"parameters",multiple:true,type:"sdocParam"},{name:"return-types",multiple:true,type:"sdocReturnType"}]});isc.DataSource.create({ID:"sdocProperty",tagName:"property",fields:[{name:"name",xmlAttribute:"true"},{name:"scope",xmlAttribute:"true"},{name:"access",xmlAttribute:"true"},{name:"type",xmlAttribute:"true"}]});isc.DataSource.create({ID:"sdocClass",tagName:"class",fields:[{name:"type",xmlAttribute:"true"},{name:"superclass",xmlAttribute:"true"},{name:"properties",multiple:true,type:"sdocProperty"},{name:"methods",multiple:true,type:"sdocMethod"}]});var _2=sdocClass.xmlSerialize(isc.getValues(_1));_2='<?xml version="1.0" encoding="UTF-8"?>\n<javascript>\n'+_2+"\n</javascript>";var _3=1024*512;var _4=0;isc.DMI.callBuiltin({methodName:"saveFile",arguments:["/tools/aptana/SmartClient"+this.options.version+"API.xml",_2.length>_3?_2.substring(0,_3):_2]});_4=_3;while(_2.length>_4){isc.DMI.callBuiltin({methodName:"appendToFile",arguments:["/tools/aptana/SmartClient"+this.options.version+"API.xml",_4+_3>_2.length?_2.substring(_4):_2.substring(_4,_4+_3)]});_4+=_3}}
,isc.A.addScriptDocItem=function(_1,_2){var _3=_1.ref;var _4=_3.substring(_3.indexOf(_1.type)+_1.type.length+1);var _5=_4.substring(0,_4.indexOf("."));var _6=_4.substring(_4.indexOf(".")+1);isc.logWarn("Adding to ScriptDoc: "+_1.ref);var _7=_1.type;switch(_1.type){case"class":case"object":var _8=_4;var _9=isc.ClassFactory.getClass(_8);var _10=_9&&_9.getSuperClass()
if(_10==null&&_7!="object")this.logWarn("no Super: "+_8);var _11=_2[_8]=_2[_8]||{type:"isc."+_4,superclass:_10?"isc."+_10.Class:"Object",description:this.stripDescription(_1.description)}
if(!_9||!_9.isA("FormItem")){if(!_11.methods)_11.methods=[];var _12={name:"create",description:"Create a new instance of "+_8,scope:"static"}
_12["return-types"]={type:"isc."+_8,description:"The newly-created instance"}
_11.methods.add(_12)}
if(this.options.duplicate=="most"||this.options.duplicate=="all"){this.documentInheritanceRecursively(_11,_10)}
break;case"classAttr":case"attr":var _11=_2[_5];if(_11==null){this.logWarn("No class definition: "+_3);break}
if(!_11.properties)_11.properties=[];_11.properties.add({name:_6,description:this.stripDescription(_1.description),scope:_7=="classAttr"?"static":"instance",access:_1.flags&&_1.flags.contains("W")?"read-write":"read",type:_1.valueType})
break;case"method":case"classMethod":if(_5=="FormItem"||_6!="create"){var _11=_2[_5];if(_11==null){this.logWarn("No class definition: "+_3);break}
if(!_11.methods)
_11.methods=[];_12={name:_6,description:this.stripDescription(_1.description),scope:_7=="classMethod"?"static":"instance"}
_12["return-types"]={type:this.normalizeType(_1.returns?_1.returns.type:null),description:_1.returns?this.stripDescription(_1.returns.description):""}
this.addParameters(_12,_1);if(this.options.scMode){this.scModeExtras(_12,_5,_6)}
_11.methods.add(_12)}
break}}
,isc.A.addParameters=function(_1,_2){if(isc.isAn.Array(_2.params)){var _3=[];for(var i=0;i<_2.params.length;i++){var p=_2.params[i];if(!p.type){isc.logWarn(_2.ref+", parameter "+p.name+" has null type");var _6="unspecified"}else{_6=this.normalizeType(p.type)}
_3.add({name:p.name,usage:p.optional?"optional":"required",type:_6,description:this.stripDescription(p.description)});_1["parameters"]=_3}}}
,isc.A.scModeExtras=function(_1,_2,_3){var _4=isc.ClassFactory.getClass(_2);if(_4&&_4._stringMethodRegistry[_3]!=null){_1.stringMethod=true;if(_4.getInstanceProperty(_3)==null||_4[_3]==isc.noOp){_1.event=true}else{var _5=isc.Func.getBody(_4.getInstanceProperty(_3)).trim();if(_5==isc.emptyString){_1.event=true}}
if(_1.event&&isc.EH.reverseEventTypes[_3]){_1.bubbles=true}}}
,isc.A.normalizeType=function(_1){if(!_1)return"null";if(_1.toLowerCase().startsWith("string")||_1.toLowerCase().startsWith("number")||_1.toLowerCase().startsWith("int")||_1.toLowerCase().startsWith("boolean")||_1.toLowerCase().startsWith("text")||_1.toLowerCase().startsWith("object")){return _1}else{return"isc."+_1}}
,isc.A.documentInheritanceRecursively=function(_1,_2){var _3=_2?_2.getClassName():null;if(_3){this.documentInheritanceRecursively(_1,_2.getSuperClass());var _4=isc.getValues(isc.JSDoc.docItems);_1.methods=_1.methods||[];_1.properties=_1.properties||[];var _5=_4.findAll({definingClass:"class:"+_3,type:"method"});_5=_5||[];_5.addList(_4.findAll({definingClass:"class:"+_3,type:"classMethod"}));for(var i=0;i<_5.length;i++){var _7=_5[i];if((_3!="Class"&&_3!="Canvas")||(this.options.duplicate=="all"||_7.name=="create"||this.options.pickedMethods.contains(_7.name))&&(_3=="FormItem"||_7.name!="create")){var _8={name:_7.name,description:this.stripDescription(_7.description),scope:_7.type=="classMethod"?"static":"instance"}
_8["return-types"]={type:_7.returns?this.normalizeType(_7.returns.type):"null",description:_7.returns?_7.returns.description:""}
this.addParameters(_8,_7);if(this.options.scMode){this.scModeExtras(_8,_3,_7.name)}
_1.methods.add(_8)}}
var _9=_4.findAll({definingClass:"class:"+_3,type:"attr"});_9=_9||[];_9.addList(_4.findAll({definingClass:"class:"+_3,type:"classAttr"}));for(var i=0;i<_9.length;i++){var _10=_9[i];if((_3!="Class"&&_3!="Canvas")||this.options.duplicate=="all"||this.options.pickedAttrs.contains(_10.name)){_1.properties.add({name:_10.name,description:this.stripDescription(_10.description),scope:_10.type=="classAttr"?"static":"instance",access:_10.flags&&_10.flags.contains("W")?"read-write":"read",type:_10.valueType})}}}}
,isc.A.stripDescription=function(_1){if(_1==null)return null;var _2=true,_3=isc.clone(_1);while(_2){var _4=_3.indexOf('${isc.DocUtils');if(_4<0)_2=false;else{var _5=_3.indexOf('}',_4);if(_5>_4){var _6=_3.substring(_4,_5);var _7=_6.lastIndexOf("'");var _8=_6.lastIndexOf('&apos;');if(_7<_8){_7=_8}
var _9=1;_6=_6.substring(0,_7);_7=_6.lastIndexOf("'");_8=_6.lastIndexOf('&apos;');var _10=_6.lastIndexOf(':');if(_7<_8){_7=_8;_9=6}
if(_7<_10){_7=_10;_9=1}
_6=_6.substring(_7+_9);_3=_3.substring(0,_4)+_6+_3.substring(_5+1)}}}
return _3.trim()}
);isc.B._maxIndex=isc.C+41;if(window.docItems)isc.jsdoc.init(window.docItems);isc.ClassFactory.defineClass("DetailFormatter");isc.A=isc.DetailFormatter.getPrototype();isc.A.detailItems=null;isc.A.summary=false;isc.A=isc.DetailFormatter.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.generateHTML=function(_1,_2){if(!_2)_2=isc.StringBuffer.newInstance();for(var i=0;i<this.detailItems.length;i++){var _4=this.detailItems[i];var _5=_1[_4];if(_5&&(isc.isAn.Array(_5)?_5.length>0:1)){this["generate_"+_4](_1,_2);if(i+1<this.detailItems.length)_2.append("<br><br>")}}
return _2}
,isc.A.generate_examples=function(_1,_2){_2.append("<b>Examples:</b><br><ul>");if(!isc.isAn.Array(_1.examples))_1.examples=[_1.examples];for(var i=0;i<_1.examples.length;i++){_2.append("<li>",_1.examples[i])}
_2.append("</ul>")}
,isc.A.generate_groups=function(_1,_2){if(!isc.isAn.Array(_1.groups))_1.groups=[_1.groups];_2.append("<b>Groups:&nbsp;</b>",_1.groups.join(", "))}
,isc.A.generate_seeAlso=function(_1,_2){var _3=isc.DocViewer.docData;_2.append("<b>See Also:</b>");if(!isc.isAn.Array(_1.seeAlso))_1.seeAlso=[_1.seeAlso];for(var i=0;i<_1.seeAlso.length;i++){var _5=_1.seeAlso[i];if(isc.isA.String(_5)){_2.append("<br>&nbsp;&nbsp;",_5)}else{var _6=isc.DocUtils.linkForRef(_5.ref);if(_6){_2.append("<br>&nbsp;&nbsp;",_6," ",(_5.description?_5.description:isc.emptyString))}}}}
,isc.A.generate_platformNotes=function(_1,_2){_2.append("<b>Platform-Specific Notes:</b><br>",_1.platformNotes)}
,isc.A.generate_values=function(_1,_2){_2.append("<b>Valid values:</b><p><table cellpadding=2 class='normal'>");if(!isc.isAn.Array(_1.values))_1.values=[_1.values];for(var i=0;i<_1.values.length;i++){var _4=_1.values[i];var _5=isc.DocUtils.lookupValue(_4.value);var _6=_4.description;if(this.summary&&_6&&_6.indexOf(". ")!=-1){_6=_6.slice(0,_6.indexOf(". ")+1)}
_2.append("<tr><td valign='top'><i>",_5,"</i></td><td>",_6,"</td></tr>")}
_2.append("</table>")}
,isc.A.generate_params=function(_1,_2){_2.append("<b>Parameters:</b>");if(!isc.isAn.Array(_1.params))_1.params=[_1.params];for(var i=0;i<_1.params.length;i++){var _4=_1.params[i];var _5=isc.DocUtils.lookupValue(_4.defaultValue);if(isc.isA.String(_5))_5=_5.convertTags();_2.append("<br>&nbsp;&nbsp;&nbsp;&nbsp;<b><i>",_4.name,"</i></b>&nbsp;",(_4.optional!=null&&_4.optional.toString()=="true"?"(optional) ":isc.emptyString),"&nbsp;",(_4.type||_4.description||_5?"-&nbsp;":isc.emptyString),(_4.type?"type:&nbsp;<b>"+isc.TypeViewer.linkForType(_4.type)+"</b>":isc.emptyString),(_5||_4.description?"&nbsp;":isc.emptyString),(_5?", defaultValue:&nbsp;<b>"+_5+"</b>":isc.emptyString),"<br>",(_4.description?"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+_4.description:isc.emptyString))}}
,isc.A.generate_returns=function(_1,_2){var _3=_1.returns;_2.append("<b>Returns:</b><br>&nbsp;&nbsp;&nbsp;&nbsp;");if(_3.type){_2.append("type:&nbsp;<b>",isc.TypeViewer.linkForType(_3.type),"</b>",(_3.description?"&nbsp;-&nbsp;":isc.emptyString))}
if(_3.description)_2.append(_3.description)}
,isc.A.generate_getter=function(_1,_2){var _3=_1["getter"];if(!isc.isAn.Array(_3))_3=[_3];var _4=_1.type=="attr"?"method":"classMethod";_2.append("<b>Getter:</b><code> ");var _5=isc.jsdoc.getAttribute(isc.jsdoc.getDocItem(_1.definingClass),"name");for(var i=0;i<_3.length;i++){_2.append(isc.DocUtils.linkForRef(_4+":"+_5+"."+_3[i]));if(i+1<_3.length)_2.append(", ")}
_2.append("</code>")}
,isc.A.generate_setter=function(_1,_2){var _3=_1["setter"];if(!isc.isAn.Array(_3))_3=[_3];var _4=_1.type=="attr"?"method":"classMethod";_2.append("<b>Setter:</b><code> ");var _5=isc.jsdoc.getAttribute(isc.jsdoc.getDocItem(_1.definingClass),"name");for(var i=0;i<_3.length;i++){_2.append(isc.DocUtils.linkForRef(_4+":"+_5+"."+_3[i]));if(i+1<_3.length)_2.append(", ")}
_2.append("</code>")}
);isc.B._maxIndex=isc.C+10;isc.ClassFactory.defineClass("AttrFormatter","Canvas");isc.A=isc.AttrFormatter;isc.A.detailItems=["values","getter","setter","examples","seeAlso","platformNotes"];isc.A=isc.AttrFormatter;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.hoverHTML=function(_1,_2){return this.attrHTML(_1,null,_2)}
,isc.A.attrHTML=function(_1,_2,_3){var _4;if(_2==null){_4=true;_2=isc.StringBuffer.create()}
if(this.$47c==null){this.$47c=["<table BORDER='0' CELLSPACING='0' WIDTH='100%' class='normal'><tr><td><b>",null,"</b>",null,"</td><td align='right'><code><i>type:</i>",null,null,"</code></td></tr></table>","<table BORDER='0' CELLSPACING='0' WIDTH='100%' class='normal'>","<col width='15'><col width='*'><tr><td></td><td>",null,null,"<br><br>",null,"</td></tr></table>"]}
var _5=this.$47c;isc.DocUtils.reportMissingModulesStart(_2,_1);_2.append(_5[0],_3?isc.DocUtils.linkForRef(_1.ref):_1.name,_5[2],isc.DocUtils.textForFlags(_1.flags),_5[4],isc.TypeViewer.linkForType(_1.valueType),this.formatDefaultValue(_1),_5[7],_5[8],_5[9],_1.deprecated?"<br><B>DEPRECATED:&nbsp;"+_1.deprecated+"</B><BR><BR>":"<br>",_1.description?_1.description:isc.emptyString,_5[12]);isc.DetailFormatter.newInstance({detailItems:this.detailItems}).generateHTML(_1,_2);_2.append(_5[14]);isc.DocUtils.reportMissingModulesEnd(_2,_1);return _4?_2.toString():_2}
,isc.A.formatDefaultValue=function(_1){var _2=isc.DocUtils.lookupValue(_1.defaultValue);if(isc.isA.String(_2))_2=_2.convertTags();if(_2)_2=", <i>defaultValue</i>: "+_2;return _2}
);isc.B._maxIndex=isc.C+3;isc.A=isc.AttrFormatter.getPrototype();isc.A.type=null;isc.A.headerName=null;isc.A.attrs=null;isc.A.$47d="other";isc.A.$ag="_";isc.A.$47e="group:";isc.A=isc.AttrFormatter.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.$47f()}
,isc.A.$47f=function(){if(!this.attrsByGroup){this.groupList=Array.newInstance({sortUnique:true});this.attrsByGroup={};this.attrsByGroup[this.$47d]=[];for(var i=0;i<this.attrs.length;i++){var _2=isc.jsdoc.getDocItem(this.attrs[i]);var _3=isc.jsdoc.toJS(_2);if(_3.groups){if(!isc.isAn.Array(_3.groups))_3.groups=[_3.groups];this.groupList.addList(_3.groups)}
var _4=_3.groups||[this.$47d];for(var j=0;j<_4.length;j++){var _6=_4[j];if(!this.attrsByGroup[_6])this.attrsByGroup[_6]=Array.newInstance({sortUnique:true});this.attrsByGroup[_6].add(_3)}}
if(this.attrsByGroup.other.length>0)this.groupList.add(this.$47d)}}
,isc.A.contents=function(){if(this.generatedContents)return this.generatedContents;var _1=isc.DocUtils;var _2=isc.StringBuffer.create();_2.maxStreamLength=1000000;var _3=isc.StringBuffer.concat(this.classDoc.ref,this.$ag,this.type);_1.offsetCanvasForRef(_3,this);_1.buildTableHeader(this.headerName,_3,_2);if(isc.AttrFormatter.$47g==null){isc.AttrFormatter.$47g=["<tr id='",null,"'><td>","<table border='1' width='100%'>","<tr BGCOLOR='lightgrey' class='normal'><td colspan='2'>Group: <b>",null,"</b></td></tr>"]}
var _4=isc.AttrFormatter.$47g;for(var i=0;i<this.groupList.length;i++){var _6=this.groupList[i];var _7=isc.StringBuffer.concat(this.classDoc.ref,this.$ag,this.type,this.$ag,_6);var _8=_1.idForRef(_7);_1.offsetCanvasForRef(_7,this);_2.append(_4[0],_8,_4[2],_4[3],_4[4],_1.linkForRef(this.$47e+_6),_4[6]);if(isc.AttrFormatter.$47h==null){isc.AttrFormatter.$47h=["<tr id='",null,"'><td>",null,"</td></tr>"]}
var _9=isc.AttrFormatter.$47h;for(var j=0;j<this.attrsByGroup[_6].length;j++){var _11=this.attrsByGroup[_6][j];_1.offsetCanvasForRef(_11.ref,this);_1.extraOffsetForRef(_11.ref,_8);_2.append(_9[0],_1.idForRef(_11.ref),_9[2],_9[3]);isc.AttrFormatter.attrHTML(_11,_2);_2.append(_9[4])}
_2.append("</table>")}
this.generatedContents=_2.toString();return this.generatedContents}
);isc.B._maxIndex=isc.C+3;isc.ClassFactory.defineClass("MethodFormatter","Canvas");isc.A=isc.MethodFormatter;isc.A.detailItems=["params","returns","examples","seeAlso","platformNotes"];isc.A=isc.MethodFormatter;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.hoverHTML=function(_1,_2){var _3=_1.definingClass.contains(":")?isc.jsdoc.getAttribute(isc.jsdoc.getDocItem(_1.definingClass),"name"):_1.definingClass;var _4=isc.ClassFactory.getClass(_3);return this.methodHTML(_1,null,_4,_2)}
,isc.A.methodHTML=function(_1,_2,_3,_4){var _5;if(!_2){_2=isc.StringBuffer.newInstance();_5=true}
if(!this.$47c){this.$47c=["<table BORDER='0' CELLSPACING='0' WIDTH='100%' class='normal'>","<col width='15'><col width='*'><tr><td colspan='2'><i>",null,"</i>&nbsp;<b>",null,"</b>&nbsp;",null,null,null,"</td></tr><tr><td></td><td>",null,null,null,null,"<br><br>",null,"</td></tr></table>"]}
var _6=this.$47c;isc.DocUtils.reportMissingModulesStart(_2,_1);_2.append(_6[0],_6[1],_1.returns&&_1.returns.type?isc.TypeViewer.linkForType(_1.returns.type):"void",_6[3],_4?isc.DocUtils.linkForRef(_1.ref):_1.name,_6[5],this.formatMethodParams(_1),this.formatStringMethodText(_1,_3),isc.DocUtils.textForFlags(_1.flags),_6[9],_1.deprecated?"<br><B>DEPRECATED:&nbsp;"+_1.deprecated+"</B><BR><BR>":"<br>",_1.description?_1.description:isc.emptyString);if(_1.overridden)_2.append(_1.overridden);if(_1.override)_2.append("<br><br>",isc.emptyString);_2.append(_6[14]);isc.DetailFormatter.newInstance({docViewer:this.docViewer,detailItems:isc.MethodFormatter.detailItems,classDoc:this.classDoc}).generateHTML(_1,_2);_2.append(_6[16]);isc.DocUtils.reportMissingModulesEnd(_2,_1);return _5?_2.toString():_2}
,isc.A.formatMethodParams=function(_1){var _2=isc.StringBuffer.newInstance().append("(");if(_1.params&&!isc.isAn.Array(_1.params))
_1.params=[_1.params];if(_1.params){var _3=false;var _4=false;for(var k=0;k<_1.params.length;k++){var _6=_1.params[k];if(_6.optional!=null&&_6.optional.toString()=="true"&&!_3){_3=true;_2.append("<span style='color:gray'>[")}
if(_4)_2.append(", ");_2.append(_6.name);_4=true}
if(_3)_2.append("]</span>")}
return _2.append(")").toString()}
,isc.A.formatStringMethodText=function(_1,_2){var _3=isc.emptyString;if(_2&&_2._stringMethodRegistry[_1.name]!=null){if(this.$47i==null){this.$47i="&nbsp;"+isc.DocUtils.linkForRef("group:stringMethods","[String Method]")}
_3=this.$47i}
return _3}
);isc.B._maxIndex=isc.C+4;isc.A=isc.MethodFormatter.getPrototype();isc.A.$47d="other";isc.A.$ag="_";isc.A.$47e="group:";isc.A=isc.MethodFormatter.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.$47j()}
,isc.A.$47j=function(){if(!this.methodsByGroup){this.groupList=Array.newInstance({sortUnique:true});this.methodsByGroup={};this.methodsByGroup[this.$47d]=[];for(var i=0;i<this.methods.length;i++){var _2=isc.jsdoc.getDocItem(this.methods[i]);var _3=isc.jsdoc.toJS(_2);if(_3.groups){if(!isc.isAn.Array(_3.groups))_3.groups=[_3.groups];this.groupList.addList(_3.groups)}
var _4=_3.groups||[this.$47d];for(var j=0;j<_4.length;j++){var _6=_4[j];if(!this.methodsByGroup[_6])this.methodsByGroup[_6]=Array.newInstance({sortUnique:true});this.methodsByGroup[_6].add(_3)}}
if(this.methodsByGroup.other.length>0)this.groupList.add(this.$47d)}}
,isc.A.contents=function(){if(this.generatedContents)return this.generatedContents;var _1=isc.DocUtils;var _2=isc.StringBuffer.create();_2.maxStreamLength=1000000;var _3=isc.StringBuffer.concat(this.classDoc.ref,this.$ag,this.type);_1.offsetCanvasForRef(_3,this);_1.buildTableHeader(this.headerName,_3,_2);if(isc.MethodFormatter.$47k==null){isc.MethodFormatter.$47k=["<tr id='",null,"'><td>","<table border='1' width='100%'>","<tr BGCOLOR='lightgrey' class='normal'><td colspan='2'>Group: <b>",null,"</b></td></tr>"];isc.MethodFormatter.$47l="</table>"}
var _4=isc.MethodFormatter.$47k;var _5=isc.ClassFactory.getClass(this.classDoc.name);for(var i=0;i<this.groupList.length;i++){var _7=this.groupList[i];var _8=isc.StringBuffer.concat(this.classDoc.ref,this.$ag,this.type,this.$ag,_7);var _9=_1.idForRef(_8);_1.offsetCanvasForRef(_8,this);_2.append(_4[0],_9,_4[2],_4[3],_4[4],_1.linkForRef(this.$47e+_7),_4[6]);if(isc.MethodFormatter.$47m==null){isc.MethodFormatter.$47m=["<tr id='",null,"'><td>",null,"</td></tr>"]}
var _10=isc.MethodFormatter.$47m;var _11=isc.StringBuffer.create();for(var j=0;j<this.methodsByGroup[_7].length;j++){var _13=this.methodsByGroup[_7][j];_1.offsetCanvasForRef(_13.ref,this);_1.extraOffsetForRef(_13.ref,_9);_2.append(_10[0],_1.idForRef(_13.ref),_10[2]);isc.MethodFormatter.methodHTML(_13,_2,_5);_2.append(_10[4])}
_2.append("</table>")}
this.generatedContents=_2.toString();return this.generatedContents}
);isc.B._maxIndex=isc.C+3;isc.defineClass("DocSearchBar","Canvas");isc.A=isc.DocSearchBar.getPrototype();isc.A.height=24;isc.A.overflow="hidden";isc.A=isc.DocSearchBar.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);var _1=isc.StretchImg.create({autoDraw:false,height:24,width:"100%",src:"[ISO_DOCS_SKIN]/images/DocSearchBar/searchfield.png",canHover:true,hoverHeight:1,prompt:"Search all documentation (type some search terms and hit Enter)",vertical:false,items:[{width:30,name:"start"},{width:"*",name:"stretch"},{width:11,name:"end"}]});this.form=isc.FormLayout.create({autoFocus:true,autoDraw:false,top:3,height:20,width:"100%",numCols:1,className:"searchForm",cellPadding:0,cellSpacing:0,cellBorder:0,searchBar:this,overflow:isc.Browser.isSafari?"hidden":"visible",fields:[{name:"searchString",textBoxStyle:"searchField",height:16,width:"*",showTitle:false,keyPress:function(_2,_3,_4){if(_4=="Enter")_3.searchBar.doSearch()}}]});this.addChild(_1);this.addChild(this.form);if(this.initialValue)this.form.setValue('searchString',this.initialValue)}
,isc.A.doSearch=function(_1){if(_1){this.form.setValue("searchString",_1)}else{_1=this.form.getValue("searchString")}
if(_1==null||_1==""){isc.warn("Please enter a search string");return}
isc.showPrompt('Searching...');this.delayCall("search")}
,isc.A.search=function(_1){var _1=this.form.getValue("searchString");var _2=[];var _3=[];var _4=_1.split(/\s+|,|\./);for(var i=0;i<_4.length;i++){if(_4[i].length==0)continue;try{_3.add(new RegExp("(^|\\s|>)?("+_4[i]+")($|\\s|<)?","ig"))}catch(e){var _6=_4[i].replace(/([^A-Za-z0-9])/g,"\\$1");_3.add(new RegExp("(^|\\s|>)?("+_6+")($|\\s|<)?","ig"))}}
var _7={name:10,title:3,description:0.5,definingClass:0.1};var _8=isc.getKeys(_7);var _9=[];var _10=isc.jsdoc.getRefs();for(var k=0;k<_10.length;k++){var _12=_10[k];var m,_14=0;var _15=isc.jsdoc.getDocItem(_12);var _16=isc.jsdoc.getAttributes(_15,_8);for(var i=0;i<_3.length;i++){var _17=_3[i];for(var _18 in _7){_17.lastIndex=0;var _19=_16[_18];if(!_19)continue;var _20=_7[_18];while((m=_17.exec(_19))!=null){_14+=_20;if((m[1]&&m[3])||m[2].length==_19.length){_14+=_20}}}}
if(_14!=0){var _21=isc.jsdoc.getDocItem(_12);var _22=isc.jsdoc.getAttribute(_21,"name");var _23=isc.jsdoc.getAttribute(_21,"type");var _24=isc.jsdoc.getAttribute(_21,"definingClass");if(_24){_24=isc.jsdoc.getDocItem(_24);if(_24)_22=isc.jsdoc.getAttribute(_24,"name")+"."+_22}
if(isc.jsdoc.isMethod(_23)){var _25=isc.jsdoc.toJS(_21);_22+=isc.MethodFormatter.formatMethodParams(_25)}
_2[_2.length]={ref:_12,type:_23,name:_22,score:_14}}}
isc.clearPrompt();if(this.searchResultsGrid){this.searchResultsGrid.setData(_2);return}
var _26=this.docViewer.searchResults=isc.DocSearchResults.create({autoDraw:false,nocache:true,overflow:"auto",width:"100%",height:"100%",ref:"Search Results",searchString:_1,searchRegexes:_3,hits:_2});this.docViewer.$46t(_26);if(this.lastSearchResults)this.lastSearchResults.destroy();this.lastSearchResults=_26}
);isc.B._maxIndex=isc.C+3;isc.defineClass("DocSearchResults","DocTabSet");isc.A=isc.DocSearchResults.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);var _1=isc.StringBuffer.create();_1.append("<B>Search Results</B><br><br>");if(this.hits.length==0){this.addTab({title:"Search Results",pane:isc.Canvas.create({autoDraw:false,contents:"<br><br>&nbsp;&nbsp;<b>No matches</b>"})});return}
this.searchPreview=isc.Canvas.create({ID:this.getID()+"searchPreview",canSelectText:true,autoDraw:false,overflow:"auto",contents:"<br><br><br>&nbsp;&nbsp;&nbsp;<B>Click a record in the Grid above to see full docs here."+"<br>&nbsp;&nbsp;&nbsp;Shift-click or Control-click to see more than one description at a time."+"<br>&nbsp;&nbsp;&nbsp;Double-click to navigate to a documentation entry."+"<br>&nbsp;&nbsp;&nbsp;You can click and drag the resize bar above to make more room.</b>"});var _2=isc.DataSource.create({ID:this.getID()+"$47n",clientOnly:true,fields:[{name:"score",title:"Score",width:50},{name:"name",canGroupBy:false,title:"Name",width:"*"},{name:"type",title:"Type",width:80},{name:"ref",title:"Match",width:"*",showIf:"false"}]});var _3=_2.getFields();for(var _4 in _3){_3[_4].filterEditorProperties={keyPress:function(){isc.Timer.clearTimeout(this.grid.filterTimer);this.grid.filterTimer=isc.Timer.setTimeout(this.grid.getID()+".performFilter()",100)}}}
this.searchResultsGrid=isc.DocGrid.create({autoDraw:false,docPreview:this.searchPreview,height:300,data:this.hits,sortFieldNum:0,shortcutField:"name",sortDirection:"descending",emptyMessage:"No matches.",searchRegexes:this.searchRegexes,rowDoubleClick:"isc.DocViewer.instance.$46t(record.ref);",dataSource:_2,showResizeBar:true,linkNames:true,data:isc.LocalResultSet.create({dataSource:_2,allRows:this.hits,context:{textMatchStyle:"substring"}})});var _5=isc.DocFilterField.create({autoDraw:false,fieldName:"name",formProps:{grid:this.searchResultsGrid,itemChange:function(_6,_7,_8){isc.Timer.clearTimeout(this.$47o);this.$47o=isc.Timer.setTimeout(this.getID()+".doSetCriteria()",100)},doSetCriteria:function(){if(this.grid.isGrouped)this.grid.ungroup();this.grid.data.setCriteria(this.getValuesAsCriteria())}}});this.searchBar=isc.DocSearchBar.create({autoDraw:false,height:20,docViewer:isc.DocViewer.instance,initialValue:this.searchString,searchResultsGrid:this.searchResultsGrid}),this.addTab({title:"&nbsp;Search Results&nbsp;",pane:isc.VLayout.create({autoDraw:false,members:[_5,this.searchResultsGrid,this.searchPreview]})})}
);isc.B._maxIndex=isc.C+1;isc.ClassFactory.defineClass("DocNavBar","HLayout");isc.A=isc.DocNavBar.getPrototype();isc.A.history=[];isc.A.maxHistorySize=5;isc.A.currentPosition=-1;isc.A=isc.DocNavBar.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.$47p=this.$47q();this.addMember(this.$47p);this._label=isc.Canvas.create({autoDraw:false,align:"center",className:"mainTitle",height:this.getHeight(),overflow:"hidden",width:"*"});this.addMember(this._label);this.$47r=this.$47s();this.addMember(this.$47r)}
,isc.A.updateNav=function(_1,_2){if(this.ignoreUpdate){this.ignoreUpdate=false;return}
if(this.history[this.currentPosition]&&_1==this.history[this.currentPosition].ref)return;this.currentPosition++;this.history[this.currentPosition]={ref:_1,title:_2};if(this.currentPosition<this.history.length-1){this.history.removeRange(this.currentPosition+1,this.history.length)}
while(this.history.length>this.maxHistorySize){var _3=this.history.shift();if(_3.ref!=_1&&!this.history.find("ref",_1)){this.docViewer.delayCall("$47t",[_3.ref])}
this.currentPosition--}
this.$47u()}
,isc.A.goBack=function(){this.go(--this.currentPosition)}
,isc.A.goForward=function(){this.go(++this.currentPosition)}
,isc.A.go=function(_1){var _2=this.history[_1].ref;this.ignoreUpdate=true;this.$47v=true;this.docViewer.$46t(_2);this.$47v=false;this.$47u()}
,isc.A.$47u=function(){if(this.currentPosition==this.history.length-1){this.$47r.hide()}else{this.$47r.show();var _1=this.history[this.currentPosition+1].title;this.$47r.setTitle(_1)}
if(this.currentPosition==0){this.$47p.hide()}else{this.$47p.show();var _1=this.history[this.currentPosition-1].title;this.$47p.setTitle(_1)}}
,isc.A.$47q=function(){var _1=isc.Button.create({autoDraw:false,height:16,width:1,icon:"[ISO_DOCS_SKIN]/images/DocNavBar/back.png",showDisabledIcon:false,showRollOverIcon:false,showDownIcon:false,baseStyle:"backLabel",overflow:"visible",visibility:"hidden",click:this.getID()+".goBack()"});return _1}
,isc.A.$47s=function(){var _1=isc.Button.create({autoDraw:false,height:16,width:1,icon:"[ISO_DOCS_SKIN]/images/DocNavBar/forward.png",iconOrientation:"right",showDisabledIcon:false,showRollOverIcon:false,showDownIcon:false,baseStyle:"forwardLabel",overflow:"visible",visibility:"hidden",click:this.getID()+".goForward()"});return _1}
);isc.B._maxIndex=isc.C+8;isc.ClassFactory.defineClass("GroupViewer","DocTabSet");isc.A=isc.GroupViewer;isc.A.detailItems=["examples","seeAlso"];isc.A=isc.GroupViewer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.getHTML=function(_1,_2){var _3=isc.StringBuffer.newInstance();isc.DocUtils.reportMissingModulesStart(_3,_1);var _4=_1.title?null:"<i>group</i>&nbsp;";var _5=_1.title?_1.title:_1.name;_3.append("<table class='normal'><tr><td>&nbsp;</td><td>","<font size='+1'>",this.prefix,"<b>",_2?isc.DocUtils.linkForRef(_1.ref):_5,"</b></font><br><p>",(_1.description?_1.description:""),"<p><br>");isc.DetailFormatter.newInstance({detailItems:isc.GroupViewer.detailItems}).generateHTML(_1,_3);var _6=_1.refs;if(!isc.isAn.Array(_6))_6=_6?[_6]:[];if(_6&&_6.length!=0){_3.append("<br><br><br><b>Methods and Properties referencing group ",_5," </b><br><br>");for(var i=0;i<_6.length;i++){var _8=_6[i];var _9=isc.DocUtils.linkForRef(_8);if(_9)_3.append("&nbsp;&nbsp;",_9,"<br>")}}
_3.append("</td><td>&nbsp;</td></tr></table>");isc.DocUtils.reportMissingModulesEnd(_3,_1);return _3.toString()}
,isc.A.hoverHTML=function(_1,_2){return this.getHTML(_1,_2)}
);isc.B._maxIndex=isc.C+2;isc.A=isc.GroupViewer.getPrototype();isc.A.doc=null;isc.A.exampleViewerHeight=350;isc.A.forceFill=false;isc.A=isc.GroupViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);var _1=this.doc=isc.jsdoc.toJS(this.docItem);this.title=_1.title?_1.title:_1.name;this.header=_1.title?_1.title:"group&nbsp;<b>"+_1.name+"</b>";this.$47w=this.$47x(_1);this.addTab({title:"&nbsp;Description&nbsp;",pane:this.$47w})}
,isc.A.$47x=function(_1){var _2=isc.DocUtils.getMissingModules(this.doc)==null?null:"lightgrey";var _3=isc.Canvas.create({autoDraw:false,canSelectText:true,overflow:"auto",dynamicContents:true,backgroundColor:_2,contents:isc.GroupViewer.getHTML(_1)});if(!(this.doc.exampleConfig&&isc.ExampleViewer)||isc.DocUtils.getMissingModules(this.doc))return _3;var _4=isc.ExampleViewer.create({autoDraw:false,height:this.exampleViewerHeight,url:this.doc.exampleConfig,showPaneContainerEdges:false,symmetricEdges:true,paneContainerProperties:{backgroundColor:"white",edgeImage:"[SKIN]/rounded/frame/FFFFFF/4.png"},tabBarProperties:{baseLineCapSize:0}});var _5=isc.SectionStack.create({visibilityMode:"multiple",autoDraw:false,sections:[{showHeader:false,expanded:true,items:[_3]},{showHeader:true,expanded:true,title:this.title+" Example",items:[_4]}]});return _5}
);isc.B._maxIndex=isc.C+2;isc.ClassFactory.defineClass("TypeViewer","DocTabSet");isc.A=isc.TypeViewer;isc.A.detailItems=["values","examples","groups","seeAlso"];isc.A.refTypes=["type","class","object","pseudoclass","interface","group"];isc.A.typeCache={};isc.A.$47y=" ";isc.A.$47z={"string":"String","array":"Array","boolean":"Boolean","float":"Float","integer":"Integer","number":"Number","object":"Object","url":"URL"};isc.A=isc.TypeViewer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.linkForType=function(_1,_2){if(!_1)return _2?_2:_1;var s=_1.split(/\s+/);if(s.length>1){for(var i=0;i<s.length;i++)s[i]=this.linkForType(s[i],_2);return s.join(this.$47y)}
var _5=this.typeCache[_1];if(_5===null)return _2?_2:_1;if(_5!=null)return _5;var _6=this.refTypes;var _7=this.$47z[_1];var _8;if(_7)_8=_7;else _8=_1.substring(0,1).toLocaleUpperCase()+_1.substring(1);for(var i=0;i<_6.length;i++){var _9=isc.jsdoc.makeRef(_6[i],_8);if(isc.jsdoc.getDocItem(_9)){_5=isc.DocUtils.linkForRef(_9,_8);if(_5!=null){this.typeCache[_1]=_5;return _5}}}
if(_7){this.typeCache[_1]=_7;return _7}
this.typeCache[_1]=null;return _2?_2:_1}
,isc.A.hoverHTML=function(_1,_2){return this.$470(_1,_2)}
,isc.A.$470=function(_1,_2){var _3=isc.StringBuffer.newInstance();isc.DocUtils.reportMissingModulesStart(_3,_1);_3.append("<table class='normal'><tr><td>&nbsp;</td><td>","<font size='+1'><i>type</i>&nbsp;<b>",_2?isc.DocUtils.linkForRef(_1.ref):_1.name,"</b></font><br><p>",(_1.description?_1.description:""),"<br><br>");isc.DetailFormatter.newInstance({detailItems:this.detailItems}).generateHTML(_1,_3);_3.append("</td><td>&nbsp;</td></tr></table>");isc.DocUtils.reportMissingModulesEnd(_3,_1);return _3.toString()}
);isc.B._maxIndex=isc.C+3;isc.A=isc.TypeViewer.getPrototype();isc.A.hideUsingDisplayNone=isc.Browser.isMoz;isc.A=isc.TypeViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.doc=isc.jsdoc.toJS(this.docItem);this.title=this.doc.name;this.header="type&nbsp;<b>"+this.title+"</b>";this.addTab({title:"&nbsp;Description&nbsp;",pane:this.$471()})}
,isc.A.$471=function(){var _1=isc.DocUtils.getMissingModules(this.doc)==null?null:"lightgrey";var _2=isc.Canvas.create({autoDraw:false,overflow:"auto",dynamicContents:true,canSelectText:true,backgroundColor:_1,contents:isc.TypeViewer.$470(this.doc)});return _2}
,isc.A.scrolled=function(){if(this.hideUsingDisplayNone)this.$472=this.getScrollTop()}
);isc.B._maxIndex=isc.C+3;isc.defineClass("ClassViewer","DocTabSet");isc.A=isc.ClassViewer;isc.A.detailItems=["examples","groups","seeAlso","platformNotes"];isc.A=isc.ClassViewer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.showGroupHover=function(){var _1="Show all members of this group belonging to this class only.";isc.Hover.show(_1)}
,isc.A.hoverHTML=function(_1,_2){if(this.$473==null){this.$473=["<table class='normal' BORDER='0' WIDTH='100%'><tr><td width='1'></td><td>","<div style='font-size:16px'><table><tr><td><i>",null,"</i>&nbsp;<b>",null,"</td><td>",null,"</b></td></tr><tr><td></td><td>",null,"</td></tr></table></div><p>",null,null,"<br><br>",null,"</td><td width='1'></td></tr></table>"]}
var _3=this.$473;var _4;var _5=isc.ClassFactory.getClass(_1.name);var _6=isc.jsdoc.getSuperClassName(_1);if(_6){_4="<i>extends</i>&nbsp;<b>"+isc.DocUtils.linkForRef("class:"+_6,_6)+"</b>"}
var _7;var _8=_1.implementsInterfaces;if(_8){_7="<i>implements</i>&nbsp;<b>";if(!isc.isAn.Array(_8))_8=[_8];for(var i=0;i<_8.length;i++){_7+=isc.DocUtils.linkForRef("interface:"+_8[i],_8[i]);if(i+1<_8.length)_7+=", "}
_7+="</b>"}
_3[2]=_1.type;_3[4]=_2?isc.DocUtils.linkForRef(_1.ref):_1.name;_3[6]=(_4?_4:_7);_3[8]=(_4?_7:isc.emptyString);_3[10]=_1.description?_1.description:isc.emptyString;if(_1.deprecated){_3[11]="<br><br><B>DEPRECATED:&nbsp;"+_1.deprecated+"</B><br>"}else{_3[11]=null}
_3[13]=isc.DetailFormatter.newInstance({detailItems:this.detailItems}).generateHTML(_1).toString();var _10=_3.join(isc.emptyString);return isc.DocUtils.reportMissingModules(_10,_1)}
,isc.A.getOverrideProperties=function(_1){var _2=isc.ClassFactory.getClass(_1);if(!_2){return}
var _3=_2.getSuperClass();if(_3==null)return;var _4=[];var _5=[];var _6="classMethod:"+_1+".";for(var _7 in _2){var _8=_2[_7];if(!isc.isA.Function(_8))continue;if(_8==_3[_7])continue;var _9=this.getImplementingSuper(_8,_3,_7);if(_9!=null){var _10="classMethod:"+_9.getClassName()+"."+_7;var _11=isc.jsdoc.getDocItem(_10);if(_11&&!isc.jsdoc.getAttribute(_11,"override")){_5.add(_10);_4.add(_6+_7)}}}
var _12=_2.getPrototype();var _13=_3.getPrototype();_6="method:"+_1+".";for(var _7 in _12){var _8=_12[_7];if(!isc.isA.Function(_8))continue;if(_8==_13[_7])continue;var _9=this.getImplementingSuper(_8,_13,_7);if(_9!=null){var _14=_9.getClassName();var _10="method:"+_14+"."+_7;var _11=isc.jsdoc.getDocItem(_10);if(_11&&isc.jsdoc.getAttribute(_11,"ref")!="method:Class.init"){_5.add(_10);_4.add(_6+_7)}}else{if(_2._stringMethodRegistry[_7]!=null){var _10="method:"+_9.getClassName()+"."+_7;var _11=isc.jsdoc.getDocItem(_10);if(_11&&!isc.jsdoc.getAttribute(_11,"override")){_5.add(_10);_4.add(_6+_7)}else{this.logWarn("Instance method "+_1+"."+_7+" overrides stringMethod of same"+" name, but the stringMethod is undocumented")}}}}
return{overridden:_5,overrides:_4}}
,isc.A.getImplementingSuper=function(_1,_2,_3){if(_2==null)return null;var _4=isc.isA.ClassObject(_2);var _5="_indirect_"+_3,_6,_7;for(;;){_6=_2[_5]||_2[_3];if(_6!=null&&_6!=_1)break;var _7=(_4?_2.getSuperClass():_2.getClass().getSuperClass());if(_7==null)break;_2=_4?_7:_7.getPrototype()}
var _8=_2;for(;;){var _7=(_4?_8.getSuperClass():_8.getClass().getSuperClass());if(_7==null)break;var _9=_4?_7:_7.getPrototype();var _10=_9[_5]||_9[_3];if(_10!=_6)break;_8=_9}
return _8}
);isc.B._maxIndex=isc.C+4;isc.A=isc.ClassViewer.getPrototype();isc.A.exampleViewerHeight=350;isc.A=isc.ClassViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.$474();this.doc=isc.jsdoc.toJS(this.docItem);this.cName=this.doc.name;this.header=this.doc.type+"&nbsp;<B>"+this.cName+"</B>";this.title=this.cName;this.hasInstanceAPIs=this.getInheritedDocItems("attrs").length>0||this.getInheritedDocItems("methods").length>0;this.hasClassAPIs=this.getInheritedDocItems("classAttrs").length>0||this.getInheritedDocItems("classMethods").length>0;this.addTab({ID:this.cName+"$475",title:"Overview&nbsp;",width:100,icon:"[ISO_DOCS_SKIN]/images/DocTabBar/overview.png"});if(this.hasInstanceAPIs){this.addTab({ID:this.cName+"$476",title:"Instance APIs&nbsp;",width:120,icon:"[ISO_DOCS_SKIN]/images/DocTabBar/instanceAPI.png"})}
if(this.hasClassAPIs){this.addTab({ID:this.cName+"$477",title:"Class APIs&nbsp;",width:120,icon:"[ISO_DOCS_SKIN]/images/DocTabBar/classAPI.png"})}}
,isc.A.tabSelected=function(_1,_2,_3){if(!_2){switch(_3){case this.cName+"$475":_2=this.initOverviewPane(this,_3);break;case this.cName+"$476":_2=this.initAPIPane(this,"instance",_3);break;case this.cName+"$477":_2=this.initAPIPane(this,"class",_3);break}}
var _4=this.docTree.refToID[this.ref];var _5=this.docViewer.state;if(_4!=null&&_5.data){if(_5.data.tabs==null)_5.data.tabs={};if(_1==0){delete _5.data.tabs[_4];_5.data.ts=this.ref}else{_5.data.tabs[_4]=_1;var _6=_2.getMember(1);var _7=_6.getSelectedRecord();if(_7!=null)_5.data.ts=_7.ref}
_5.store()}}
,isc.A.initOverviewPane=function(_1,_2){var _3=isc.ClassViewer.hoverHTML(this.doc);if(this.hasInstanceAPIs){_3+="<br>&nbsp;&nbsp;<b><a href='' onclick='"+this.getID()+".selectTab(1);return false;'>"+this.cName+" instance APIs</a></b>"}
if(this.hasClassAPIs){var _4=this.hasInstanceAPIs?2:1;_3+="<br>&nbsp;&nbsp;<b><a href='' onclick='"+this.getID()+".selectTab("+_4+");return false;'>"+this.cName+" class APIs</a></b>"}
var _5=isc.DocUtils.getMissingModules(this.doc)==null?null:"lightgrey";var _6=isc.Canvas.create({ID:"classDescription_"+this.doc.name,autoDraw:false,overflow:"auto",canSelectText:true,dynamicContents:true,backgroundColor:_5,contents:_3});if(!(this.doc.exampleConfig&&isc.ExampleViewer)||isc.DocUtils.getMissingModules(this.doc)){_1.updateTab(_2,_6);return}
if(window.location.protocol=="file:"){if(!isc.ClassViewer.examplesNotAvailableNotified&&!isc.ClassViewer.suppressExamplesNotAvailableNotify){this.logInfo("Running in client-only mode - examples not available.");isc.warn("The examples that are part of the SmartClient reference documentation"+" require the SmartClient server to be running.  You can browse"+" the documentation without the examples.  To enable examples, start"+" the server (See the Quickstart section of the Release Notes for"+" instructions).");isc.ClassViewer.examplesNotAvailableNotified=true}
_1.updateTab(_2,_6);return}
var _7=isc.ExampleViewer.create({autoDraw:false,height:this.exampleViewerHeight,url:this.doc.exampleConfig,showPaneContainerEdges:false,symmetricEdges:true,paneContainerProperties:{backgroundColor:"white",edgeImage:"[SKIN]/rounded/frame/FFFFFF/4.png"},tabBarProperties:{baseLineCapSize:0}});var _8=isc.SectionStack.create({visibilityMode:"multiple",autoDraw:false,sections:[{showHeader:false,expanded:true,items:[_6]},{showHeader:true,expanded:true,title:this.cName+" Example",items:[_7]}]});_1.updateTab(_2,_8)}
,isc.A.getInheritedDocItems=function(_1){if(!this.$478)this.$478={};if(this.$478[_1])return this.$478[_1];var _2=this.doc[_1]?isc.clone(this.doc[_1]):[];if(!isc.isAn.Array(_2))_2=[_2];var _3=this.cName;var _4=this.doc;while(1&&_4.showSuperProps!="false"){var _5=isc.jsdoc.getSuperClassName(_4);if(!_5||_5=="Canvas"||_5=="Class")break;var _6=isc.jsdoc.getDocItem(_5);if(!_6)break;var _7=_4=isc.jsdoc.toJS(_6);var _8=_7[_1];if(_8&&!isc.isAn.Array(_8))_8=[_8];_2.addList(_8);_3=_5}
this.$478[_1]=_2;return _2}
,isc.A.initAPIPane=function(_1,_2,_3){var _4,_5;if(_2=="instance"){_4=this.getInheritedDocItems("attrs");_5=this.getInheritedDocItems("methods")}else{_4=this.getInheritedDocItems("classAttrs");_5=this.getInheritedDocItems("classMethods")}
var _6={};var _7=[];if(_4){if(!isc.isAn.Array(_4))_4=[_4];for(var i=0;i<_4.length;i++){var _9=isc.jsdoc.getDocItem(_4[i]);if(!_9)continue;var _10=isc.jsdoc.toJS(_9);if(_6[_10.name])continue;_6[_10.name]=1;if(isc.isAn.Array(_10.groups))_10.groups=_10.groups[0];_7.add(_10)}}
if(_5){if(!isc.isAn.Array(_5))_5=[_5];for(var i=0;i<_5.length;i++){var _9=isc.jsdoc.getDocItem(_5[i]);if(!_9)continue;var _11=isc.jsdoc.toJS(_9);if(_6[_11.name])continue;_6[_11.name]=1;if(isc.isAn.Array(_11.groups))_11.groups=_11.groups[0];_11.isMethod=true;_7.add(_11)}}
var _12=isc.DocUtils.getMissingModules(this.doc)==null?null:"lightgrey";var _13=isc.Canvas.create({ID:this.getID()+_2+"$479",canSelectText:true,autoDraw:false,overflow:"auto",backgroundColor:_12,contents:"<br><br><br>&nbsp;&nbsp;&nbsp;<B>Click a method or attribute above to see its documentation here."+"<br>&nbsp;&nbsp;&nbsp;Shift-click or Control-click to see more than one description at a time."+"<br>&nbsp;&nbsp;&nbsp;You can click and drag the resize bar above to make more room.</b>"});var _14=isc.DataSource.create({ID:this.getID()+_2+"$48a",clientOnly:true,fields:[{name:"type",title:" ",summaryTitle:"Attribute / Method",width:60,showIf:"false"},{name:"definingClass",title:"Defining Class",showIf:"false"},{name:"valueType",title:"Type/Return Type",width:120,formatCellValue:function(_35,_36){var _2=_35;if(_36.isMethod){if(!(_36.returns&&_36.returns.type))return"void";_2=_36.returns.type}else{_2=_35}
return isc.TypeViewer.linkForType(_2)}},{name:"name",canGroupBy:false,primaryKey:true,title:"Name",width:"*",definingClass:this.doc.ref,showHover:true,hoverHTML:function(_35,_36){if(this.definingClass!=_35.definingClass){return"Inherited&nbsp;from&nbsp;"+_35.definingClass}
return null},formatCellValue:function(_35,_36){if(this.definingClass!=_36.definingClass)_35="<i>"+_35+"</i>";if(_36.isMethod){return"<span style='color:blue'>"+_35+"&nbsp;<span style='color:black'>"+isc.MethodFormatter.formatMethodParams(_36)+"</span></span>"}
return"<span style='color:green'>"+_35+"</span>"}},{name:"groups",title:"Group",width:110,formatCellValue:function(_35,_36,_37,_38,_39){if(!_35)return isc.emptyString;var _15=isc.jsdoc.makeRef("group",_35);var _16="onmouseout='isc.Hover.clear()' style='cursor:"+isc.Canvas.HAND+"'"+" onmouseover='isc.Hover.setAction(isc.ClassViewer, isc.ClassViewer.showGroupHover, null, 300)'"+" onclick='isc.Hover.clear();"+_39.getID()+".showClassGroup(\""+_15+"\");'";return isc.Canvas.imgHTML(isc.Page.getIsomorphicDocsDir()+"skin/images/DocGrid/funnel.png",16,16,null,_16)+isc.DocUtils.linkForRef(_15)}},{name:"flags",title:"Flags",width:50,showIf:"false",formatCellValue:function(_35,_36){var _17=isc.DocUtils.getCanonicalFlags(_35);if(!_17)return isc.emptyString;return isc.DocUtils.linkForRef("group:flags",_17)}}]});var _18=this[_2+"Grid"]=isc.DocGrid.create({ID:this.getID()+_2+"Grid",autoDraw:false,showResizeBar:true,classViewer:this,docPreview:_13,docViewer:this.docViewer,sortFieldNum:1,shortcutField:"name",dataSource:_14,data:isc.LocalResultSet.create({dataSource:_14,allRows:_7,context:{textMatchStyle:"substring"}}),showClassGroup:function(_35){var _19=isc.jsdoc.getDocItem(_35);if(!_19)return;var _20=isc.jsdoc.getAttribute(_19,"name");var _21=isc.jsdoc.getAttribute(_19,"title");if(!_21)_21=_20;var _22=this.data.allRows;var _23=[];for(var i=0;i<_22.length;i++){var _24=_22[i];var _25=_24.groups;if(_25!=null){if(isc.isAn.Array(_25))_25=_25[0];if(_25==_20)_23.add(_24)}}
_23.sortByProperty("name","ascending");var _26=isc.StringBuffer.create();for(var i=0;i<_23.length;i++){_26.append(isc.jsdoc.hoverHTML(_23[i].ref),"<HR>")}
if(this.updateOnRowOver)this.mouseLock=true;this.docPreview.setContents(_26.toString());this.deselectAllRecords()},rowClick:function(_35){this.Super("rowClick",arguments);this.docViewer.state.add({ts:_35.ref})}});var _27=this[_2+"Filter"]=isc.DocFilterField.create({autoDraw:false,fieldName:"name",formProps:{grid:_18,itemChange:function(_9,_35,_36){isc.Timer.clearTimeout(this.$47o);this.$47o=isc.Timer.setTimeout(this.getID()+".doSetCriteria()",100)},doSetCriteria:function(){var _28=isc.addProperties({},this.grid.data.getCriteria()),_29=this.getValuesAsCriteria();if(!_29.name)delete _28.name;else isc.addProperties(_28,_29);if(this.grid.isGrouped)this.grid.ungroup();this.grid.data.setCriteria(_28)}}});var _30=isc.DynamicForm.create({height:24,autoDraw:false,numCols:6,grid:_18,doc:this.doc,itemChange:function(_9,_35,_36){this.delayCall("doSetCriteria",[_9])},doSetCriteria:function(_9){var _31=this.getValuesAsCriteria(),_29={};if(_31.showAttributes&&_31.showMethods)_29={};else if(_31.showAttributes)_29={type:"attr"};else if(_31.showMethods)_29={type:"method"};else if(!_31.showMethods&&!_31.showAttributes){var _32=_9.name=="showAttributes"?"showMethods":"showAttributes";this.setValue(_32,true);this.doSetCriteria();return}
var _28=isc.addProperties({},this.grid.data.getCriteria());if(!_29.type)delete _28.type;else isc.addProperties(_28,_29);if(!_31.showSuperclass)_28.definingClass=this.doc.ref;else delete _28.definingClass;if(this.grid.isGrouped)this.grid.ungroup();this.grid.data.setCriteria(_28)},fields:[{name:"showSuperclass",title:"Show Superclass APIs",type:"checkbox",defaultValue:true,hoverWidth:200,itemHoverHTML:function(){return"Toggle Superclass APIs.  Note: APIs from Canvas and Class are not shown."}},{name:"showAttributes",title:"Attributes",type:"checkbox",defaultValue:true},{name:"showMethods",title:"Methods",type:"checkbox",defaultValue:true}]});var _33=isc.HLayout.create({height:24,autoDraw:false,members:[_27,_30]});var _34=this[_2+"Layout"]=isc.VLayout.create({autoDraw:false,members:[_33,_18,_13]});_1.updateTab(_3,_34);return _34}
,isc.A.$474=function(){var _1=isc.jsdoc.getAttribute(this.docItem,"name");var _2=isc.ClassViewer.getOverrideProperties(_1);if(!_2)return;var _3=_2.overridden;var _4=_2.overrides;for(var i=0;i<_3.length;i++){var _6=_3[i],_7=_4[i],_8=isc.jsdoc.getDocItem(_6),_9=isc.jsdoc.getDocItem(_7),_10=isc.jsdoc.getAttribute(_8,"name");var _11="<i>This method is an override of ${isc.DocUtils.linkForRef('"+_6+"')} - directly overriding this method without calling"+" </i><code>this.Super('"+_10+"', arguments)</code><i> may destroy"+" functionality in this class.</i>";if(_9!=null){isc.jsdoc.setAttribute(_9,"overridden","<br><br>"+_11)}else{_9=isc.jsdoc.dataIsXML?_8.cloneNode(true):isc.addProperties({},_8);isc.jsdoc.setAttribute(_9,"overridden",_11);isc.jsdoc.setAttribute(_9,"ref",_7);isc.jsdoc.setAttribute(_9,"definingClass","class:"+_1);isc.jsdoc.removeAttribute(_9,"override");isc.jsdoc.setAttribute(_9,"description",isc.emptyString);isc.jsdoc.addDocItem(_7,_9);var _12=isc.jsdoc.getAttribute(_9,"type")=="method"?"methods":"classMethods";isc.jsdoc.addToList(this.docItem,_12,_7)}}}
);isc.B._maxIndex=isc.C+6;isc.ClassFactory.defineClass("SummaryViewer","DocTabSet");isc.A=isc.SummaryViewer.getPrototype();isc.A.hideUsingDisplayNone=isc.Browser.isMoz;isc.A=isc.SummaryViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.Super(this.$oc);this.title=this.node.title?this.node.title:this.node.name;if(this.title.endsWith("/"))this.title=this.title.substring(0,this.title.length-1);this.addTab({title:"&nbsp;"+this.title+"&nbsp;",pane:this.$48b()})}
,isc.A.$48b=function(){var _1=isc.StringBuffer.newInstance();var _2=this.$46u.getChildren(this.node);_1.append("<br>");for(var i=0;i<_2.length;i++){var _4=_2[i];_1.append("&nbsp;&nbsp;<nobr>");if(_4.ref){_1.append(isc.DocUtils.linkForRef(_4.ref,_4.name))}else{_1.append("<a href='' onclick='",this.docViewer.getID(),".$48c(\"",this.$46u.getPath(_4),"\");return false;'>",_4.title,"</a>")}
_1.append("</nobr><br>")}
var _5=isc.Canvas.create({autoDraw:false,canSelectText:true,contents:_1.toString()});return _5}
);isc.B._maxIndex=isc.C+2;if(!isc.GrippySplitbar){isc.defineClass("GrippySplitbar","ImgSplitbar");isc.A=isc.GrippySplitbar.getPrototype();isc.A.imageWidth=7;isc.A.imageHeight=16}
isc.defineClass("DocViewer","HLayout");isc.A=isc.DocViewer.getPrototype();isc.A.docRoot=isc.emptyString;isc.A.referenceRoot=isc.Page.getIsomorphicDocsDir();isc.A.featureExplorerURL=isc.Page.getIsomorphicDocsDir()+"SmartClient_Explorer.html";isc.A.$48d={};isc.A.skinDir="[ISO_DOCS_SKIN]/";isc.A.jumpToTopicInURL=true;isc.A.topic=null;isc.A.visibility="hidden";isc.A.resizeBarSize=8;isc.A.resizeBarClass="GrippySplitbar";isc.A.backgroundColor="#606060";isc.A=isc.DocViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){this.skinImgDir=this.skinDir+"images/";var _1;this.Super(this.$oc);isc.DocViewer.instance=this;if(this.docItems||this.docLookup||window.docItems)
isc.jsdoc.init(this.docItems||this.docLookup||window.docItems);this.$48e=this.$48f();this.$48g=this.$48h();this.addMembers([this.$48e,this.$48g]);this.state=isc.DocCookieState.create({disableCookieStore:this.disableCookieStore,defaultData:{v:isc.version,tab:0,lpw:280},cookieName:"docViewerState",onload:this.getID()+".restoreState(data)"});if(!isc.jsdoc.data){this.observe(isc.jsdoc,"init","observer.docDataAvailable()")}else{this.docDataAvailable()}
if(this.trackHistory){isc.History.registerCallback({method:this.historyCallback,target:this})}}
,isc.A.restoreState=function(_1,_2){this.$48e.setWidth(_1.lpw);this.initTreeState();this.delayCall("setVisibility",["inherit"])}
,isc.A.docDataAvailable=function(){isc.FL.hideThrobber();var _1=false;if(this.topic){this.showTopic(this.topic);_1=true}
if(!_1&&this.jumpToTopicInURL){var _2=location.toString().match(/[?&](topic|ref|search)=([^&]*)/);if(_2){if(_2[1]=="search"){this.$48i.doSearch(decodeURIComponent(_2[2]))}else{this.showTopic(decodeURIComponent(_2[2]))}
_1=true}else{_2=decodeURIComponent(location.href).match(/#search=(.*)/);if(_2){this.$48i.doSearch(this.decodeHistoryID(_2[1]));_1=true}}}
var _2=location.href.match(/([^#]*)#(.*)/);if(!_1&&(this.state.data.ts||(this.trackHistory&&isc.History.getCurrentHistoryId()!=null))){var _3=this.state.data.ts;if(_3==null||(this.trackHistory&&isc.History.getCurrentHistoryId()!=null)){_3=this.decodeHistoryID(isc.History.getCurrentHistoryId());this.noHistory=true}
if(_3!=null&&_3.startsWith("/")){var _4=this.$46u.find(_3);if(_4){this.$46w.selectRecord(_4);this.$46t(_4.ref?_4.ref:_4,true);_1=true}else{this.logWarn("Can't find previously selected node at path: "+_3)}}else{_1=true;this.$46t(_3)}
this.noHistory=false}
if(!_1){this.showHelpDialog()}}
,isc.A.initTreeState=function(){var _1=this.$46u;if(this.treeStateInitialized||!_1||!isc.Page.isLoaded())return;if(!this.state.data)return;var _2=this.state.data.op;if(!_2)return;_1.ignoreDataVisibilityChange=true;var _3=_1.getOpenFolders();for(var i=0;i<_3.length;i++){var _5=_3[i];var _6=_1.getPath(_5);if(!_2.contains(_6)){_1.closeFolder(_5)}}
for(var i=0;i<_2.length;i++){var _6=_2[i];var _5=_1.find(_6);if(!_5){this.logWarn("restoring tree state: couldn't find node for path: "+_6+" - ignoring.");continue}
_1.openFolder(_5)}
delete _1.ignoreDataVisibilityChange;this.treeStateInitialized=true}
,isc.A.$48j=function(_1,_2,_3){var _4=isc.jsdoc.getDocItem(_2);var _5=isc.jsdoc.getType(_4);if(!(isc.jsdoc.isMethod(_5)||isc.jsdoc.isAttr(_5))){var _6=this.$46u.refToID[_3];var _7=0;if(this.state.data.tabs)
_7=this.state.data.tabs[_6]||0;_1.selectTab(_7);return}
var _8=isc.jsdoc.isInstance(_5)?"instance":"class";var _9=0;if(_8=="instance")_9=1;else _9=_1.hasInstanceAPIs?2:1;_1.selectTab(_9);if(!_1.isDrawn()){var _10=_1.getTabObject(_9);_1.tabSelected(_9,_10.pane,_10.ID)}
var _11=_1[_8+"Grid"];var _12=_11.getData();_12.setCriteria({});var _13=_12.localData.find("ref",_2);_11.deselectAllRecords();_11.selectRecord(_13);_11.previewRecord(_13);_11.mouseLock=true;this.delayCall("scrollGrid",[_11,_13])}
,isc.A.scrollGrid=function(_1,_2){_1.scrollRecordIntoView(_1.getData().indexOf(_2),true)}
,isc.A.$48c=function(_1){if(isc.isA.String(_1))_1=this.$46u.find(_1);this.$46t(_1)}
,isc.A.showTopic=function(_1){if(_1==null){this.logWarn("showTopic(null) - ignored");return}
if(isc.jsdoc.getDocItem(_1)==null){this.logWarn("Can't jump to topic: "+_1+" - ref does not resolve.");return}
this.$46t(_1)}
,isc.A.$47t=function(_1){var _2=this.$48d[_1];if(_2){_2.destroy();delete this.$48d[_1];if(this.logIsDebugEnabled()){this.logDebug("destroying view: "+_2.getID()+", cache contents: "+isc.Log.echoAll(this.$48d))}}}
,isc.A.encodeHistoryID=function(_1){return _1.replace(/\//g,"_").replace(/ /g,"-").replace(/:/g,"..")}
,isc.A.decodeHistoryID=function(_1){if(_1==null||_1=="init")return null;return _1.replace(/_/g,"/").replace(/-/g," ").replace(/\.\./g,":")}
,isc.A.historyCallback=function(_1,_2){_1=this.decodeHistoryID(_1)
if(_1==null){this.showHelpDialog();return}
if(!isc.Page.isLoaded())return;this.noHistory=true;if(_1.startsWith("/")){var _3=this.$46u.find(_1);if(_3){this.$46w.selectRecord(_3);this.$46t(_3.ref?_3.ref:_3,true);var _4=this.noHistory;var _5=this.$46w;var _6=this.$46u.indexOf(_3);isc.Timer.setTimeout(function(){var h=isc.DocViewer.instance.noHistory;isc.DocViewer.instance.noHistory=_4;_5.selection.deselectAll();_5.selectRecord(_6);_5.scrollRecordIntoView(_6);isc.DocViewer.instance.noHistory=h},0)}}else if(_1.startsWith("search")){this.$46t("searchResults")}else{this.$46t(_1)}
this.noHistory=false}
,isc.A.$46t=function(_1,_2){var _3,_4=false,_5=false,_6=_1,_7=null;if(_1=="searchResults"||_1==this.searchResults){this.replaceCurrentView(this.searchResults);if(!this.noHistory&&this.trackHistory){isc.History.addHistoryEntry(this.encodeHistoryID("search="+this.searchResults.searchString))}
return}
if(isc.isA.Canvas(_1)){this.replaceCurrentView(_1);return}if(isc.isAn.Object(_1)){var _8=_1;_7=this.$46w.getMissingModules(_8);if(_8.contentsURL){if(_7){isc.say("This API requires: <a href='"+isc.licensingPage+"' target=_blank>"+_7+"</a></b></span>");return}
if(_1.contentsURL.startsWith("[docRoot]"))
_1.contentsURL=this.docRoot+_1.contentsURL.substring(9);if(_1.contentsURL.startsWith("[referenceRoot]"))
_1.contentsURL=this.referenceRoot+_1.contentsURL.substring(15);if(isc.Browser.isMac&&_1.contentsURL.endsWith("pdf")){window.location.replace(_1.contentsURL);return null}else{window.open(_1.contentsURL)}
return}else{_3=isc.SummaryViewer.create({$46u:this.$46u,docViewer:this,node:_8,autoDraw:false,width:"100%",height:"100%"});var _9=this.$46u.getPath(_8);this.state.add({ts:_9});if(!this.noHistory&&this.trackHistory)isc.History.addHistoryEntry(this.encodeHistoryID(_9));this.replaceCurrentView(_3);return}}else{var _10=isc.jsdoc.getDocItem(_1),_11=isc.jsdoc.getType(_10);_1=isc.jsdoc.getAttribute(_10,"ref");if(isc.jsdoc.isMethod(_11)||isc.jsdoc.isAttr(_11)){_6=isc.jsdoc.getAttribute(_10,"definingClass");_5=true}
_3=this.$48d[_6];var _12=this.$46u.refToID[_6];if(_12!=null){var _13=this.$46u,_14=this.$46w;var _15=_13.findById(_12);if(_15)_7=this.$46w.getMissingModules(_15);if(!_2){_13.openFolders(_13.getParents(_15));var _16=this.noHistory||_5;var _17=_13.indexOf(_15);isc.Timer.setTimeout(function(){var h=isc.DocViewer.instance.noHistory;isc.DocViewer.instance.noHistory=_16;_14.selection.deselectAll();_14.selectRecord(_17);_14.scrollRecordIntoView(_17);isc.DocViewer.instance.noHistory=h},0)}}
this.state.add({ts:_1});if(!this.noHistory&&this.trackHistory)isc.History.addHistoryEntry(this.encodeHistoryID(_1))}
var _19=this.noHistory;if(_5)this.noHistory=true;if(!_3){if(_4){isc.showPrompt("Loading...");this.delayCall("$48k",[_1,_6,_7])}else{this.$48k(_1,_6,_7)}
this.noHistory=_19;return}else{this.replaceCurrentView(_3,_6);if(!this.$48l.$47v)this.$48j(_3,_1,_6)}
this.noHistory=_19}
,isc.A.$48k=function(_1,_2,_3){var _4=this.$48m(_2,_3);if(isc.isA.ClassViewer(_4)){if(!this.$48l.$47v)this.$48j(_4,_1,_2);this.$48d[_2]=_4}
this.replaceCurrentView(_4)}
,isc.A.replaceCurrentView=function(_1){if(_1==this.$48n)return;if(this.$48n){if(isc.isA.DocSearchResults(this.$48n)||isc.isA.ClassViewer(this.$48n))
{this.$48n.hide()}else{this.$48n.destroy()}}
this.$48n=_1;this.$48o.addChild(_1);_1.show();if(isc.isA.GroupViewer(_1)||isc.isA.TypeViewer(_1)||isc.isA.ClassViewer(_1))
{this.$48l.updateNav(_1.ref,_1.title)}
if(isc.isA.DocSearchResults(_1)){this.$48l.updateNav("searchResults","Search Results")}
var _2=isc.emptyString;if(isc.isA.GroupViewer(_1)&&_1.doc.title){_2="<b>"+_1.title+"</b>"}else if(isc.isA.DocSearchResults(_1)){_2="<b>Search Results</b>"}else if(_1.title){if(isc.isA.SummaryViewer(_1))_2="<b>"+_1.title+"</b>";else{_2="<span style='color:#e0e0e0'>";if(isc.isA.ClassViewer(_1))_2+=_1.doc.type;else if(isc.isA.TypeViewer(_1))_2+="type";else _2+="group";_2+="</span> <b>"+_1.title+"</b>"}}
this.$48l._label.setContents(_2);isc.clearPrompt()}
,isc.A.$48m=function(_1,_2){if(!this.$48p)this.$48p={overflow:"hidden",autoDraw:false,docViewer:this,docTree:this.$46u,docRoot:this.docRoot,width:"100%",height:"100%",missingModules:_2};var _3=isc.jsdoc.getDocItem(_1);var _4=isc.jsdoc.getAttribute(_3,"type");var _5;if(isc.jsdoc.isType(_4))_5=isc.TypeViewer;else if(isc.jsdoc.isGroup(_4))_5=isc.GroupViewer;else _5=isc.ClassViewer;return _5.create(this.$48p,{ref:_1,docItem:_3})}
,isc.A.$48f=function(){this.$48i=isc.DocSearchBar.create({ID:"searchForm",autoDraw:false,height:24,docViewer:this});this.$46u=window.docTree;this.$46u.addProperties({docViewer:this,changeDataVisibility:function(_7,_13){this.Super("changeDataVisibility",arguments);if(this.ignoreDataVisibilityChange)return;var _1=this.docViewer.state.data;if(!_1)return;var _2=_1.op;if(!_2){var _3=this.getOpenFolders();_2=[];for(var i=0;i<_3.length;i++)
_2[i]=this.getPath(_3[i])}
var _5=this.getPath(_7);if(_13)_2.add(_5);else _2.remove(_5);this.docViewer.state.add({op:_2})}});var _6=this.$46u.getDescendants(this.root);for(var i=0;i<_6.length;i++){var _7=_6[i];if(_7.requiresModules){if(!isc.hasOptionalModules(_7.requiresModules));_7.missingModules=isc.getMissingModules(_7.requiresModules).getProperty("name").join(", ")}}
var _8=this.$46u.find("/optionalModules");if(_8&&_8.children.length==0){this.$46u.remove(_8,true)}
this.$46w=isc.TreeGrid.create({autoDraw:false,showHeader:false,animateFolders:false,edgeImage:"[SKIN]/rounded/frame/FFFFFF/4.png",edgeSize:4,showEdges:true,className:null,emptyMessage:"<i>Loading Doc Tree...</i>",skinImgDir:this.skinImgDir,selectionType:"single",leaveScrollbarGap:false,data:this.$46u,docViewer:this,selectionChanged:function(){var _9=this.getSelectedRecord();if(_9)this.docViewer.$46t(_9.ref?_9.ref:_9,true)},getMissingModules:function(_9){var _10=_9.missingModules;if(!_10){var _11=this.data.getParents(_9);for(var i=0;i<_11.length;i++){if(_11[i].missingModules){_10=_9.missingModules=_11[i].missingModules;break}}}
return _10}},this.docTreeProperties);var _12=isc.VLayout.create({ID:"leftPane",docViewer:this,autoDraw:false,membersMargin:6,width:280,backgroundColor:"#606060",resized:function(){this.Super("resized",arguments);if(this.docViewer.state)this.docViewer.state.add({lpw:this.getWidth()})},showResizeBar:true,members:[this.$48i,this.$46w]});return _12}
,isc.A.$48h=function(){this.$48l=isc.DocNavBar.create({autoDraw:false,height:30,layoutMargin:3,membersMargin:3,overflow:"hidden",docViewer:this});isc.DocNavBar.instance=this.$48l;this.$48o=isc.Canvas.create({ID:"viewArea",autoDraw:false,backgroundColor:"#606060",overflow:"hidden"});var _1=isc.VLayout.create({ID:"rightPane",autoDraw:false,backgroundColor:"#606060",width:"*",overflow:"hidden",members:[this.$48l,this.$48o]});return _1}
,isc.A.showPrefsDialog=function(){if(!this.$48q)this.$48q=isc.DocPrefsDialog.create({autoDraw:false,docViewer:this});this.$48q.show()}
,isc.A.showHelpDialog=function(){this.$46t("group:docViewerHelp",true)}
);isc.B._maxIndex=isc.C+20;isc._moduleEnd=isc._DocViewer_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('DocViewer module init time: ' + (isc._moduleEnd-isc._moduleStart) + 'ms','loadTime');}else{if(window.isc && isc.Log && isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'DocViewer'.");}

/*

  SmartClient Ajax RIA system
  Version 7.0RC/LGPL Development Only (2009-04-21)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

