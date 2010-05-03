
/*

  SmartClient Ajax RIA system
  Version SC_SNAPSHOT-2010-05-02/LGPL Development Only (2010-05-02)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_Calendar){isc.module_Calendar=1;isc._moduleStart=isc._Calendar_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log && isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={ message:'Calendar load/parse time: ' + (isc._moduleStart-isc._moduleEnd) + 'ms', category:'loadTime'};
if(isc.Log && isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime')
else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM
else isc._preLog=[isc._pTM]}isc.definingFramework=true;isc.ClassFactory.defineClass("Calendar","Canvas","DataBoundComponent");isc.A=isc.Calendar.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.defaultWidth="100%";isc.A.defaultHeight="100%";isc.A.year=new Date().getFullYear();isc.A.month=new Date().getMonth();isc.A.chosenDate=new Date();isc.A.firstDayOfWeek=0;isc.A.baseStyle="calendar";isc.A.dayHeaderBaseStyle="calMonthDayHeader";isc.A.dayBodyBaseStyle="calMonthDayBody";isc.A.otherDayHeaderBaseStyle="calMonthOtherDayHeader";isc.A.otherDayBodyBaseStyle="calMonthOtherDayBody";isc.A.otherDayBlankStyle="calMonthOtherDayBlank";isc.A.selectedCellStyle="calendarCellSelected";isc.A.eventWindowStyle="eventWindow";isc.A.calMonthEventLinkStyle="calMonthEventLink";isc.A.workdayBaseStyle="calendarWorkday";isc.A.workdayStart="9:00am";isc.A.workdayEnd="5:00pm";isc.A.showWorkday=false;isc.A.workdays=[1,2,3,4,5];isc.A.scrollToWorkday=false;isc.A.nameField="name";isc.A.descriptionField="description";isc.A.startDateField="startDate";isc.A.endDateField="endDate";isc.A.leadingDateField="leadingDate";isc.A.trailingDateField="trailingDate";isc.A.eventTypeField="type";isc.A.eventWindowStyleField="eventWindowStyle";isc.A.canEditField="canEdit";isc.A.canDragEventField="canDrag";isc.A.weekEventBorderOverlap=false;isc.A.eventSnapGap=30;isc.A.showQuickEventDialog=true;isc.A.canCreateEvents=true;isc.A.canEditEvents=true;isc.A.canDeleteEvents=true;isc.A.canDragEvents=true;isc.A.showDateChooser=false;isc.A.disableWeekends=true;isc.A.showWeekends=true;isc.A.showDayHeaders=true;isc.A.showOtherDays=true;isc.A.showControlsBar=true;isc.A.invalidDateMessage="From must be before To";isc.A.eventAutoArrange=true;isc.A.eventOverlap=true;isc.A.eventOverlapPercent=10;isc.A.showTimelineView=false;isc.A.renderEventsOnDemand=true;isc.A.timelineGranularity="day";isc.A.timelineUnitsPerColumn=1;isc.A.canResizeTimelineEvents=false;isc.A.allowEventOverlap=true;isc.A.sizeEventsToGrid=true;isc.A.dayViewTitle="Day";isc.A.weekViewTitle="Week";isc.A.monthViewTitle="Month";isc.A.timelineViewTitle="Timeline";isc.A.eventNameFieldTitle="Event Name";isc.A.saveButtonTitle="Save Event";isc.A.detailsButtonTitle="Edit Details";isc.A.cancelButtonTitle="Cancel";isc.A.previousButtonHoverText="Previous";isc.A.nextButtonHoverText="Next";isc.A.addEventButtonHoverText="Add an event";isc.A.datePickerHoverText="Choose a date";isc.A.dayViewConstructor="DaySchedule";isc.A.weekViewConstructor="WeekSchedule";isc.A.monthViewConstructor="MonthSchedule";isc.A.timelineViewConstructor="TimelineView";isc.A.mainViewDefaults={_constructor:isc.TabSet,defaultWidth:"80%",defaultHeight:"100%",tabBarAlign:"right",selectedTab:1};isc.A.dateChooserConstructor="DateChooser";isc.A.eventDialogDefaults={_constructor:isc.Window,showHeaderIcon:false,showMinimizeButton:false,showMaximumButton:false,canDragReposition:true,overflow:"visible",bodyProperties:{overflow:"visible"},width:400,height:100};isc.A.eventEditorDefaults={_constructor:isc.DynamicForm,padding:4,numCols:4,showInlineErrors:false,width:200};isc.A.eventEditorLayoutDefaults={_constructor:isc.Window,showHeaderIcon:false,showShadow:false,showMinimizeButton:false,showMaximumButton:false,canDragReposition:false};isc.A.addEventButtonDefaults={_constructor:isc.ImgButton,title:"",src:"[SKINIMG]actions/add.png",showRollOver:false,showDown:false,showFocused:false,width:16,height:16};isc.A.datePickerButtonDefaults={_constructor:isc.ImgButton,title:"",src:"[SKIN]/controls/date_control.gif",width:16,height:16,showRollOver:false,showFocused:false};isc.A.controlsBarDefaults={_constructor:isc.HLayout,defaultLayoutAlign:"center",height:25,membersMargin:5};isc.A.previousButtonDefaults={_constructor:isc.ImgButton,title:"",src:"[SKINIMG]actions/back.png",showFocused:false,width:16,height:16,click:"this.creator.previous()",showRollOver:false,showDown:false};isc.A.nextButtonDefaults={_constructor:isc.ImgButton,title:"",src:"[SKINIMG]actions/forward.png",showFocused:false,width:16,height:16,click:"this.creator.next()",showRollOver:false,showDown:false};isc.A.dateDisplayDefaults={_constructor:isc.Label,wrap:false,width:5,contents:"-"};isc.A.DAY="day";isc.A.WEEK="week";isc.A.MONTH="month";isc.B.push(isc.A.initWidget=function(){if(this.chosenDate){this.year=this.chosenDate.getFullYear();this.month=this.chosenDate.getMonth()}
if(!this.data)this.data=this.getDefaultData();this.previousButtonDefaults.prompt=this.previousButtonHoverText;this.nextButtonDefaults.prompt=this.nextButtonHoverText;this.datePickerButtonDefaults.prompt=this.datePickerHoverText;this.addEventButtonDefaults.prompt=this.addEventButtonHoverText;this.$529();this.createChildren();this.$53a();if(!this.initialCriteria&&this.autoFetchData)this.initialCriteria=this.getNewCriteria();this.setData(null);this.invokeSuper(isc.Calendar,"initWidget")}
,isc.A.autoDetectFieldNames=function(){this.dataSource=isc.DS.getDataSource(this.dataSource);var _1=this.dataSource,_2=isc.getValues(_1.getFields()),_3=1024000,_4;if(this.fieldIsMissing(this.nameField,_1)){this.nameField=_1.getTitleField()}
if(this.fieldIsMissing(this.descriptionField,_1)){_2.sortByProperties(["length"],[false]);_4={length:0};for(var i=0;i<_2.length;i++){var _6=_2.get(i);if(!_6.type||_6.type=="text"||_6.type=="string"){if(_6.length>255&&_6.length<_3){this.descriptionField=_6.name;break}else if(_6.length&&_6.length<_3&&_6.length>_4.length){_4=_6}else if(!_6.length){if(!_4)_4=_6}}}
if(this.fieldIsMissing(this.descriptionField,_1)&&_4)
this.descriptionField=_4.name}
if(this.fieldIsMissing(this.startDateField,_1)){_4=null;for(var i=0;i<_2.length;i++){var _6=_2.get(i);if((_6.type=="date"||_6.type=="datetime")){if(_6.name.toLowerCase().indexOf("start")>=0||_6.name.toLowerCase().indexOf("begin")>=0)
{this.startDateField=_6.name;break}else _4=_6}}
if(this.fieldIsMissing(this.startDateField,_1)&&_4)
this.startDateField=_4.name}
if(this.fieldIsMissing(this.endDateField,_1)){_4=null;for(var i=0;i<_2.length;i++){var _6=_2.get(i);if((_6.type=="date"||_6.type=="datetime")){if(_6.name.toLowerCase().indexOf("end")>=0||_6.name.toLowerCase().indexOf("stop")>=0)
{this.endDateField=_6.name;break}else if(_6.name!=this.startDateField)
_4=_6}}
if(this.fieldIsMissing(this.endDateField,_1)&&_4)
this.endDateField=_4.name}}
,isc.A.fieldIsMissing=function(_1,_2){return(!_1||_1==""||(_2&&!_2.getField(_1)))}
,isc.A.getDefaultData=function(){return[]}
,isc.A.setData=function(_1){if(this.data==_1)return;if(this.data){this.ignore(this.data,"dataChanged");if(this.data.$31k&&isc.isA.Function(this.data.destroy))
this.data.destroy()}
if(_1)this.data=_1;if(!this.data)return;this.observe(this.data,"dataChanged","observer.dataChanged()");if(this.hasData()){this.dataChanged()}}
,isc.A.getData=function(){return this.data}
,isc.A.hasData=function(){if(!this.data||(isc.ResultSet&&isc.isA.ResultSet(this.data)&&!this.data.lengthIsKnown()))
{return false}else{return true}}
,isc.A.dataChanged=function(){if(this.$53e){this.logDebug('dataChanged, ignoring','calendar');this.$53e=false}else{this.logDebug('dataChanged, refreshing','calendar');this.refreshSelectedView()}}
,isc.A.refreshSelectedView=function(){if(this.dayViewSelected()){this.dayView.refreshEvents();if(this.monthView)this.monthView.refreshEvents()}else if(this.weekViewSelected()){this.weekView.refreshEvents();if(this.monthView)this.monthView.refreshEvents()}else if(this.monthViewSelected()){this.monthView.refreshEvents()}else if(this.timelineViewSelected()){this.timelineView.refreshEvents()}}
,isc.A.getSelectedView=function(){if(this.dayViewSelected()){return this.dayView}else if(this.weekViewSelected()){return this.weekView}else if(this.monthViewSelected()){return this.monthView}else if(this.timelineViewSelected()){return this.timelineView}}
,isc.A.getCurrentViewName=function(){return this.getSelectedView().viewName}
,isc.A.setCurrentViewName=function(_1){var _2=this.mainView.tabs.find("viewName",_1);if(_2)this.mainView.selectTab(_2);return _1}
,isc.A.getEventWindowID=function(_1){if(!_1)return null;var _2=this.getDataSource();if(_2&&_2.getPrimaryKeyFieldNames().length>0){var _3=_2.getPrimaryKeyFields();var _4="";for(var _5 in _3){_4+=_1[_5]}
return this.$65c[_4]}else{return _1.$65d}}
,isc.A.setEventWindowID=function(_1,_2){if(!this.$65c)this.$65c=[];var _3=this.getDataSource();if(_3&&_3.getPrimaryKeyFieldNames().length>0){var _4=_3.getPrimaryKeyFields();var _5="";for(var _6 in _4){_5+=_1[_6]}
this.$65c[_5]=_2}else{_1.$65d=_2}}
,isc.A.getDayDiff=function(_1,_2,_3){var _4,_5;if(Date.compareDates(_1,_2)>0){_4=new Date(_1.getFullYear(),_1.getMonth(),_1.getDate());_5=new Date(_2.getFullYear(),_2.getMonth(),_2.getDate())}else{_4=new Date(_2.getFullYear(),_2.getMonth(),_2.getDate());_5=new Date(_1.getFullYear(),_1.getMonth(),_1.getDate())}
var _6=Date.UTC(_5.getFullYear(),_5.getMonth(),_5.getDate(),0,0,0);var _7=Date.UTC(_4.getFullYear(),_4.getMonth(),_4.getDate(),0,0,0);var _8=_6-_7;if(_3){var _9=Math.floor(_8/(1000*60*60*24));var _10=Math.floor(_9/ 7);var _11=Date.getWeekendDays();var _12=_9%7,_13=0;var _14=_5.duplicate();_14.setDate(_14.getDate()-_12);for(var i=0;i<_12;i++){if(_11.contains(_14.getDay())){_13++}
_14.setDate(_14.getDate()+1)}
_9-=((_10*2)+_13);return _9}else{var _9=Math.floor(_8/(1000*60*60*24));return _9}}
,isc.A.getEventLeft=function(_1,_2){var _3=(_2?this.weekView:this.dayView);var _4=(_3.showLabelColumn&&_3.labelColumnPosition=="left");var _5=_4?_3.labelColumnWidth:0;var _6=_3.getColumnWidth(_3.isLabelCol(0)?1:0);if(_3.$53i){var _7=this.getDayDiff(_1[this.startDateField],this.chosenWeekStart,(this.showWeekends==false));_5=(_7*_6)+(_4?_3.labelColumnWidth:0)}
if(this.logIsDebugEnabled("calendar")){this.logDebug('calendar.getEventLeft() = '+_5+' for:'+isc.Log.echoFull(_1),'calendar')}
return _5}
,isc.A.setShowWeekends=function(_1){this.showWeekends=_1;if(isc.isA.TabSet(this.mainView)){var _2=this.mainView.getSelectedTabNumber();this.mainView.removeTabs(this.mainView.tabs);if(this.dayView)this.dayView.destroy();if(this.weekView)this.weekView.destroy();if(this.monthView)this.monthView.destroy();var _3=this.$653();this.mainView.addTabs(_3);this.mainView.selectTab(_2)}else{var _4=this.children[0].members[1];var _5=_4.members[1];var _6=this.$653()[0].pane;_4.removeMember(_5);_5.destroy();_4.addMember(_6)}
this.$53a();this.setDateLabel()}
,isc.A.canEditEvent=function(_1){if(!_1)return false;else if(_1[this.canEditField]!=null)return _1[this.canEditField];else return this.canEditEvents}
,isc.A.addEvent=function(_1,_2,_3,_4,_5,_6){if(!isc.isAn.Object(_5))_5={};var _7;if(isc.isA.Date(_1)){_7={};_7[this.startDateField]=_1;_7[this.endDateField]=_2;_7[this.nameField]=_3;_7[this.descriptionField]=_4;isc.addProperties(_7,_5)}else if(isc.isAn.Object(_1)){_7=_1}else{isc.logWarn('addEvent error: startDate parameter must be either a Date or an event record (Object)');return}
var _8=this;var _9=function(_11,_12,_13){var _10;if(isc.isAn.Array(_12))_10=_12[0];else _10=_12;if(!_10)_10=_7;if(_8.logIsDebugEnabled("calendar")){_8.logDebug('event added:'+this.echo(_10),'calendar')}
if(_8.$53b(_10[_8.startDateField],_10[_8.endDateField])){_8.dayView.addEvent(_10)}
if(_8.$53c(_10[_8.startDateField],_10[_8.endDateField])){_8.weekView.addEvent(_10)}
if(_8.$53d(_10[_8.startDateField],_10[_8.endDateField])){_8.monthView.refreshEvents()}
if(_8.eventAdded)_8.eventAdded(_10)}
if(_6)this.$53e=true;if(this.dataSource){isc.DataSource.get(this.dataSource).addData(_7,_9,{componentId:this.ID});return}else{this.$53e=true;this.data.add(_7);_9()}}
,isc.A.removeEvent=function(_1,_2){var _3=_1[this.startDateField],_4=_1[this.endDateField];var _5=this;var _6=function(){if(_5.$53b(_3,_4)){_5.dayView.removeEvent(_1)}
if(_5.$53c(_3,_4)){_5.weekView.removeEvent(_1)}
if(_5.$53d(_3,_4)){_5.monthView.refreshEvents()}
if(_5.eventAutoArrange){_5.dayView.refreshEvents();_5.weekView.refreshEvents()}
if(_5.eventRemoved)_5.eventRemoved(_1)}
if(_2)this.$53e=true;if(this.dataSource){isc.DataSource.get(this.dataSource).removeData(_1,_6,{componentId:this.ID,oldValues:_1});return}else{this.data.remove(_1);_6()}}
,isc.A.updateEvent=function(_1,_2,_3,_4,_5,_6,_7){if(!isc.isAn.Object(_6))_6={};var _8=this;var _9=_1[this.startDateField];var _10=_1[this.endDateField];var _11=function(_17,_18,_19){var _12;if(isc.isAn.Array(_18))_12=_18[0];else _12=_18;if(!_12)_12=_1;if(_8.$53b(_9,_10)||_8.$53b(_2,_3)){_8.dayView.refreshEvents()}
if(_8.$53c(_2,_3)){_8.weekView.updateEventWindow(_12)}
if(_8.$53d(_2,_3)){_8.monthView.refreshEvents()}
if(_8.$664(_2,_3)){_8.timelineView.updateEventWindow(_12)}
if(_8.eventChanged)_8.eventChanged(_12)}
if(_7)this.$53e=true;if(this.dataSource){var _13,_14=isc.DataSource.get(this.dataSource);var _15={};_15[this.startDateField]=_2;_15[this.endDateField]=_3;_15[this.descriptionField]=_5;_15[this.nameField]=_4;var _16=isc.addProperties({},_1,_15,_6);_14.updateData(_16,_11,{oldValues:_1,componentId:this.ID});return}else{_1[this.startDateField]=_2;_1[this.endDateField]=_3;_1[this.descriptionField]=_5;_1[this.nameField]=_4;isc.addProperties(_1,_6);_11()}}
,isc.A.eventsAreSame=function(_1,_2){if(this.dataSource){var _3=isc.DataSource.get(this.dataSource),_4=_3.getPrimaryKeyFieldNames(),_5=true;for(var i=0;i<_4.length;i++){var _7=_4[i];if(_1[_7]!=_2[_7]){_5=false;break}}
return _5}else{return(_1===_2)}}
,isc.A.getEventTitle=function(_1){return _1[this.nameField]}
,isc.A.getEventHoverHTML=function(_1,_2){var _3=this;var _4=_1[_3.startDateField].getHours();var _5=_1[_3.startDateField].getMinutes();var _6=_3.$53n(_4)+(_5<10?":0"+_5:":"+_5)+(_4>11?"PM":"AM");var _7=_1[_3.endDateField].getHours();var _8=_1[_3.endDateField].getMinutes();var _9=_3.$53n(_7)+(_8<10?":0"+_8:":"+_8)+(_7>11?"PM":"AM");return _1[_3.startDateField].toShortDate()+" "+_6+" - "+_9+"</br></br>"+_1[_3.nameField]+"</br></br>"+_1[_3.descriptionField]}
,isc.A.$53b=function(_1,_2){if(!this.dayView)return false;var _3=new Date(this.year,this.month,this.chosenDate.getDate(),0,0);var _4=new Date(this.year,this.month,this.chosenDate.getDate(),23,59);if(this.dayView.body&&_3.getTime()<=_1.getTime()&&_4.getTime()>=_1.getTime()){return true}else return false}
,isc.A.$53c=function(_1,_2){if(!this.weekView)return false;var _3=this.chosenWeekEnd.duplicate();_3.setMinutes(_3.getMinutes()+1);if(this.weekView.body&&this.chosenWeekStart.getTime()<=_1.getTime()&&_3.getTime()>=_2.getTime()){return true}else return false}
,isc.A.$53d=function(_1,_2){if(!this.monthView)return false;var _3=new Date(this.year,this.month,-7);var _4=new Date(this.year,this.month,37);if(_3.getTime()<=_1.getTime()&&_4.getTime()>=_2.getTime()){return true}else return false}
,isc.A.$664=function(_1,_2){if(this.showTimelineView)return true;else return false}
,isc.A.$53f=function(_1){var _2=this.canEditEvent(_1);var _3=this.canDeleteEvents==null?_2:this.canDeleteEvents;var _4=_1[this.eventWindowStyleField]||this.eventWindowStyle;return this.createAutoChild("eventWindow",{calendar:this,className:_4,baseStyle:_4,canDragReposition:_2,canDragResize:_2,_redrawWithParent:false,showCloseButton:_3,event:_1,descriptionText:_1[this.descriptionField]},isc.EventWindow)}
,isc.A.$53g=function(_1,_2){var _3=[];var _4=Date.getWeekendDays();for(var i=0;i<this.data.getLength();i++){var _6=this.data.get(i);if(!_6||!_6[this.startDateField])return[];if(_6[this.startDateField].getTime()>=_1.getTime()&&_6[this.startDateField].getTime()<=_2.getTime()&&(this.showWeekends||!_4.contains(_6[this.startDateField].getDay()))){_3.add(_6)}}
return _3}
,isc.A.$64h=function(_1,_2,_3){var _4=[],_5=Date.getWeekendDays(),_6=_1.getTime(),_7=this.getDayEnd(_1),_8=_2.getHours()!=0?_2.getTime():_7.getTime(),_9=_6,_10=_8,_11=false;var _12=(_2.getHours()==0||Date.compareDates(_1,_2)<0)?_7:_2;while(!_11){for(var i=0;i<this.data.getLength();i++){var _14=this.data.get(i);var _15=_14[this.startDateField],_16=_14[this.endDateField];if(_16.getHours()==0||_16<_15){_16=_7}
if(!_15)return[];if((_15.getTime()>=_6&&_15.getTime()<_8&&_15.getDay()==_1.getDay())||(_16.getTime()>_6&&_16.getTime()<=_8&&_16.getDay()==_2.getDay())||(_15.getTime()<_6&&_16.getTime()>_8&&(_15.getDay()==_1.getDay()||_16.getDay()==_2.getDay()))&&(this.showWeekends||!_5.contains(_15.getDay())))
{_4.add(_14);if(_3){if(_15.getTime()<_9){_9=_15.getTime()}
if(_16.getTime()>_10){_10=_16.getTime()}}}}
if(!_3||(_9==_6&&_10==_8)){_11=true}else{_6=_9;_8=_10;_4.clear()}}
return _4}
,isc.A.$64i=function(_1,_2){var _3=(_2?this.weekView:this.dayView);if(!_3.body||!_3.body.children)return;var _4=_3.body.children;if(this.dataSource)this.$53s=isc.DataSource.get(this.dataSource).getLocalPrimaryKeyFields();for(var i=0;i<_4.length;i++){if(isc.isAn.EventWindow(_4[i])&&_3.areSame(_4[i].event,_1)&&_4[i].$53i==_2){return _4[i]}}
return false}
,isc.A.$64j=function(_1,_2){var _3=[],_4=0,_5=60/this.eventSnapGap,_6=24*_5;for(var i=0;i<_6;i++){_3.add({usedCol:0,assignedCol:0,exactTime:0})}
for(var i=0;i<_1.getLength();i++){var _8=_1.get(i);var _9=_8[this.startDateField].getHours(),_10=_8[this.startDateField].getMinutes(),_11=_10%this.eventSnapGap;if(_11){if(_11<this.eventSnapGap/ 2){_10=_10-_11}else{_10=_10+(this.eventSnapGap-_11);if(_10==60){_10=0;_9++}}}
if(_9==24)_9=0;var _12=_8[this.endDateField].getHours(),_13=_8[this.endDateField].getMinutes(),_14=_13%this.eventSnapGap;if(_14){if(_14<this.eventSnapGap/ 2){_13=_13-_14}else{_13=_13+(this.eventSnapGap-_14);if(_13==60){_13=0;_12++}}}
if(_12==0)_12=24;_8.$64k=0;_8.$64l=0;var _15=(_9*_5)+(_10/ this.eventSnapGap),_16=(_12*_5)+(_13/ this.eventSnapGap);for(var _17=_15;_17<_16;_17++){var _18=_3[_17].usedCol;var _19=_3[_17].assignedCol;var _20=_3[_17].exactTime;if(_17==_15){var _21=_19!=0;_8.$64k=_19;if(this.eventOverlap){if(!this.eventOverlapIdenticalStartTimes){_8.$64m=_20==0}else{_8.$64m=true}
_20=1}
_19++;if(_19>_4){_4=_19}
if(!_21&&_18!=0){_8.$64l=_18;_19=_18+1}else{if(_19<=_18){_8.$64l=_18;_19=_18+1}else{_8.$64l=_4}}}else{if(_21){if(_19==0){if(_18==0){_18=_8.$64k}}else{if(_18==0){if(_8.$64k>_19){_18=_8.$64k}else{_19=_8.$64k+1}}else if(_19<_18){_19=_18+1}}}else{if(_19+1<_18){_19++}else{_19=_18+1}}}
_3[_17].usedCol=_18;_3[_17].assignedCol=_19;_3[_17].exactTime=_20}}
for(var i=0;i<_1.getLength();i++){var _8=_1.get(i);if(!_8.$64l||_8.$64l==0){_8.$64l==_4}}
return _4}
,isc.A.getDayEnd=function(_1){return new Date(_1.getFullYear(),_1.getMonth(),_1.getDate(),23,59,59)}
,isc.A.$64n=function(_1,_2,_3){var _4=(_1?this.weekView:this.dayView);var _5=_4.getRowHeight(1),_6=_4.getColumnWidth(_4.isLabelCol(0)?1:0);var _7=_2,_8=_3;if(Date.compareDates(_7,_8)<0||_8.getHours()==0){_8=this.getDayEnd(_7)}
var _9=this.$64h(_7,_8,true);_9.sortByProperties([this.startDateField,this.endDateField],[true,false]);var _10=this.$64j(_9,_4);if(_10==0)_10=1;_9.unsort();_9.sortByProperties(["$64k"],[true]);var _11=_6/ _10;for(var i=0;i<_9.getLength();i++){var _13=_9.get(i);if(_13.$64l==0)_13.$64l=1;var _14=this.getEventLeft(_13,_1);_14+=(_13.$64k*_11);var _15=(_13.$64l-_13.$64k)*_11;if(this.eventOverlap&&_13.$64m){if(_13.$64k>0){_14-=_11*(this.eventOverlapPercent/ 100);_15+=_11*(this.eventOverlapPercent/ 100)}}
var _16=_13[this.endDateField].getHours()==0?24:_13[this.endDateField].getHours();var _17=false;if(_2.getDate()>_3.getDate()){_17=true;_16=24}
var _18=(_16-_13[this.startDateField].getHours())*(_5*2)
if(this.weekEventBorderOverlap&&_4.$53i)_15+=1;if(_13[this.startDateField].getMinutes()>0){_18-=this.$54g(_13[this.startDateField].getMinutes(),_5)}
if(_13[this.endDateField].getMinutes()>0&&!_17){_18+=this.$54g(_13[this.endDateField].getMinutes(),_5)}
var _19=_13[this.startDateField].getHours()*(_5*2);if(_13[this.startDateField].getMinutes()>0){_19+=this.$54g(_13[this.startDateField].getMinutes(),_5)}
var _20=this.$64i(_13,_1);if(_20){_20.renderEvent(_19,_14,_15,_18)}}}
,isc.A.$529=function(){var _1=this.chosenWeekStart=new Date(this.year,this.month,this.chosenDate.getDate()
-this.chosenDate.getDay()+this.firstDayOfWeek);if(Date.compareDates(this.chosenDate,_1)==1){this.chosenWeekStart.setDate(this.chosenWeekStart.getDate()-7)}
this.chosenWeekEnd=new Date(_1.getFullYear(),_1.getMonth(),_1.getDate()+6,23,59);if(Date.compareDates(this.chosenDate,this.chosenWeekEnd)==-1){this.chosenWeekStart.setDate(this.chosenWeekStart.getDate()+7);this.chosenWeekEnd.setDate(this.chosenWeekEnd.getDate()+7)}}
,isc.A.setChosenDate=function(_1){this.year=_1.getFullYear();this.month=_1.getMonth();this.$53h=this.chosenDate;this.chosenDate=_1;this.$529();if(this.$53h.getFullYear()!=this.year||this.$53h.getMonth()!=this.month){if(this.monthView)this.monthView.refreshEvents()}
var _2=new Date(this.$53h.getFullYear(),this.$53h.getMonth(),this.$53h.getDate()-this.$53h.getDay());var _3=new Date(_2.getFullYear(),_2.getMonth(),_2.getDate()+6);var _4=this.chosenDate.getTime();if(_4<_2.getTime()||_4>_3.getTime()){if(this.weekView){this.weekView.refreshEvents();this.$53a()}}
if(_4!=this.$53h.getTime()){if(this.dayView){this.dayView.refreshStyle();this.dayView.refreshEvents()}}
this.setDateLabel();this.dateChanged()}
,isc.A.dateIsWorkday=function(_1){return this.workdays.contains(_1.getDay())}
,isc.A.adjustCriteria=function(_1){return _1}
,isc.A.getNewCriteria=function(){var _1={},_2;if(this.fetchMode=="timeline"){_2=this.timelineView;var _3={_constructor:"AdvancedCriteria",operator:"and",criteria:[{fieldName:this.startDateField,operator:"greaterThan",value:_2.startDate},{fieldName:this.endDateField,operator:"lessThan",value:_2.endDate}]};_1=this.adjustCriteria(_3)}
return _1}
,isc.A.$53a=function(){if(!this.weekView)return;var _1=this.chosenWeekStart.duplicate();var _2=Date.getShortDayNames();var _3=Date.getWeekendDays();for(var i=1;i<8;i++){if(this.weekView.getFieldNum("day"+i)>=0){var _5=_2[_1.getDay()]+" "+(_1.getMonth()+1)+"/"+_1.getDate();var _6={title:_5,align:"right",$654:_1.getDay(),$658:_1.getDate(),$659:_1.getMonth(),$66a:_1.getFullYear()}
this.weekView.setFieldProperties("day"+i,_6);if(this.weekView.header)this.weekView.header.markForRedraw()}
_1.setDate(_1.getDate()+1)}}
,isc.A.next=function(){var _1;if(this.dayViewSelected()){_1=new Date(this.year,this.month,this.chosenDate.getDate()+1);if(!this.showWeekends){var _2=Date.getWeekendDays();for(var i=0;i<_2.length;i++){if(_2.contains(_1.getDay()))_1.setDate(_1.getDate()+1)}}}else if(this.weekViewSelected()){_1=new Date(this.year,this.month,this.chosenDate.getDate()+7)}else if(this.monthViewSelected()){_1=new Date(this.year,this.month+1,1)}else if(this.timelineViewSelected()){_1=this.chosenDate.duplicate();this.timelineView.nextOrPrev(true)}
this.dateChooser.setData(_1);this.setChosenDate(_1)}
,isc.A.previous=function(){if(this.dayViewSelected()){var _1=new Date(this.year,this.month,this.chosenDate.getDate()-1);if(!this.showWeekends){var _2=Date.getWeekendDays();for(var i=0;i<_2.length;i++){if(_2.contains(_1.getDay()))_1.setDate(_1.getDate()-1)}}}else if(this.weekViewSelected()){var _1=new Date(this.year,this.month,this.chosenDate.getDate()-7)}else if(this.monthViewSelected()){var _1=new Date(this.year,this.month-1,1)}else if(this.timelineViewSelected()){_1=this.chosenDate.duplicate();this.timelineView.nextOrPrev(false)}
this.dateChooser.setData(_1);this.setChosenDate(_1)}
,isc.A.dataArrived=function(){return true}
,isc.A.draw=function(_1,_2,_3,_4){this.invokeSuper(isc.Calendar,"draw",_1,_2,_3,_4);if(isc.ResultSet&&isc.isA.ResultSet(this.data)&&this.dataSource){this.observe(this.data,"dataArrived","observer.dataArrived(arguments[0], arguments[1])")}
if(this.mainView.isA("TabSet")){this.mainView.addChild(this.controlsBar);this.controlsBar.moveAbove(this.mainView.tabBar)}}
,isc.A.$653=function(){var _1=[];if(this.showDayView!=false){this.dayView=this.createAutoChild("dayView",{baseStyle:this.baseStyle,viewName:"day"});_1.add({title:this.dayViewTitle,pane:this.dayView,viewName:"day"})}
if(this.showWeekView!=false){this.weekView=this.createAutoChild("weekView",{$53i:true,baseStyle:this.baseStyle,viewName:"week"});_1.add({title:this.weekViewTitle,pane:this.weekView,viewName:"week"})}
if(this.showMonthView!=false){this.monthView=this.createAutoChild("monthView",{baseStyle:this.baseStyle,viewName:"month",bodyConstructor:"MonthScheduleBody"});_1.add({title:this.monthViewTitle,pane:this.monthView,viewName:"month"})}
if(this.showTimelineView!=false){this.timelineView=this.createAutoChild("timelineView",{baseStyle:this.baseStyle,viewName:"timeline"});_1.add({title:this.timelineViewTitle,pane:this.timelineView,viewName:"timeline"})}
return _1}
,isc.A.$655=function(_1){if(_1.length>1){this.mainView=this.createAutoChild("mainView",{tabs:_1,tabSelected:function(_3,_4,_5,_6){this.creator.$567=_4.viewName;this.creator.setDateLabel()}});if(this.currentViewName){var _2=_1.find("viewName",this.currentViewName);if(_2)this.mainView.selectTab(_2)}}else{this.mainView=_1[0].pane}}
,isc.A.createChildren=function(){var _1=this.$653();this.$655(_1);var _2=20;if(this.showControlsBar!=false){this.dateDisplay=this.createAutoChild("dateDisplay");this.addEventButton=this.createAutoChild("addEventButton",{click:function(){var _3=this.creator;_3.eventDialog.event=null;_3.eventDialog.items[0].createFields(false);var _4=new Date();if(!this.showWeekends){var _5=Date.getWeekendDays();for(var i=0;i<_5.length;i++){if(_5.contains(_4.getDay()))_4.setDate(_4.getDate()+1)}}
_4.setMinutes(0);if(_4.getHours()>22){_4.setDate(_4.getDate()+1);_4.setHours(0)}
else _4.setHours(_4.getHours()+1);_3.eventDialog.setDate(_4);_3.eventDialog.setPageLeft(_3.getPageLeft());_3.eventDialog.setPageTop(this.getPageTop()+this.getVisibleHeight());_3.eventDialog.show()}});this.datePickerButton=this.createAutoChild("datePickerButton",{click:function(){var _3=this.creator;if(this.$54x){this.$54x.setData(_3.chosenDate);this.$54x.draw()}else{this.$54x=isc.DateChooser.create({calendar:this.creator,autoDraw:false,showCancelButton:true,autoClose:true,disableWeekends:this.creator.disableWeekends,firstDayOfWeek:this.creator.firstDayOfWeek,showWeekends:this.creator.showWeekends,dateClick:function(_35,_36,_37){var _7=new Date(_35,_36,_37);this.setData(_7);this.calendar.dateChooser.dateClick(_35,_36,_37);this.close()}});this.$54x.setData(_3.chosenDate);_3.addChild(this.$54x);this.$54x.placeNextTo(this,"bottom",true)}}});this.previousButton=this.createAutoChild("previousButton",{});this.nextButton=this.createAutoChild("nextButton",{})}
var _8=[];if(this.showPreviousButton!=false)_8.add(this.previousButton);if(this.showDateDisplay!=false)_8.add(this.dateDisplay);if(this.showDatePickerButton!=false)_8.add(this.datePickerButton);if(this.canCreateEvents&&this.showAddEventButton!=false)_8.add(this.addEventButton);if(this.showNextButton!=false)_8.add(this.nextButton);if(this.showControlsBar!=false){this.controlsBar=this.createAutoChild("controlsBar",{members:_8})}
this.dateChooser=this.createAutoChild("dateChooser",{disableWeekends:this.disableWeekends,showWeekends:this.showWeekends,chosenDate:this.chosenDate,month:this.month,year:this.year,dateClick:function(_35,_36,_37){var _7=new Date(_35,_36,_37);this.setData(_7);this.creator.setChosenDate(_7)},showPrevYear:function(){this.year--;this.dateClick(this.year,this.month,this.chosenDate.getDate())},showNextYear:function(){this.year++;this.dateClick(this.year,this.month,this.chosenDate.getDate())},showPrevMonth:function(){if(--this.month==-1){this.month=11;this.year--}
this.dateClick(this.year,this.month,1)},showNextMonth:function(){if(++this.month==12){this.month=0;this.year++}
this.dateClick(this.year,this.month,1)}});this.eventDialog=this.createAutoChild("eventDialog",{items:[isc.DynamicForm.create({autoDraw:false,padding:4,calendar:this,saveOnEnter:true,useAllDataSourceFields:true,$642:["name"],getCustomValues:function(){if(!this.calendar.eventDialogFields)return;var _9=this.$642;var _10=this.calendar.eventDialogFields;var _11={}
for(var i=0;i<_10.length;i++){var _12=_10[i];if(_12.name&&!_9.contains(_12.name)){_11[_12.name]=this.getValue(_12.name)}}
return _11},setCustomValues:function(_35){if(!this.calendar.eventDialogFields)return;var _9=this.$642;var _10=this.calendar.eventDialogFields;for(var i=0;i<_10.length;i++){var _12=_10[i];if(_12.name&&!_9.contains(_12.name)){this.setValue(_12.name,_35[_12.name])}}},createFields:function(_35){var _13=_35?"staticText":"text";var _3=this.calendar;var _14=[{name:_3.nameField,title:_3.eventNameFieldTitle,type:_13,width:250},{name:"save",title:_3.saveButtonTitle,type:"SubmitItem",endRow:false},{name:"details",title:_3.detailsButtonTitle,type:"button",startRow:false,click:function(_23,_36){_23.calendar.$53j(_23.calendar.eventDialog.event)}}];if(_35)_14.removeAt(1);var _15=isc.DataSource.create({addGlobalId:false,fields:_14});this.setDataSource(_15);this.setFields(isc.shallowClone(this.calendar.eventDialogFields))},submit:function(){var _3=this.calendar,_16=_3.eventDialog.event,_17=_3.eventDialog.currentStart,_18=_3.eventDialog.currentEnd;if(!this.validate())return;if(_16){_3.updateEvent(_16,_17,_18,this.getItem(this.calendar.nameField).getValue(),_16[_3.descriptionField],this.getCustomValues(),true);_3.eventDialog.hide()}else{_3.addEvent(_17,_18,this.getItem(this.calendar.nameField).getValue(),"",this.getCustomValues(),true);_3.eventDialog.hide()}}})],setDate:function(_35,_36){if(!_36){if(_35.getHours()==23&&_35.getMinutes()==30){_36=new Date(_35.getFullYear(),_35.getMonth(),_35.getDate()+1)}else{_36=new Date(_35.getFullYear(),_35.getMonth(),_35.getDate(),_35.getHours()+1,_35.getMinutes())}}
this.setTitle(this.creator.$53k(_35,_36));this.currentStart=_35;this.currentEnd=_36;this.items[0].getItem(this.creator.nameField).setValue("")},setEvent:function(_35){this.event=_35;var _19=this.items[0];if(this.creator.eventDialogFields){_19.clearErrors(true);_19.setCustomValues(_35)}
this.setDate(_35[this.creator.startDateField],_35[this.creator.endDateField]);_19.getItem(this.creator.nameField).setValue(_35[this.creator.nameField])},closeClick:function(){this.Super('closeClick');this.creator.dayView.clearSelection();this.creator.weekView.clearSelection()},show:function(){if(this.creator.showQuickEventDialog){if(!this.isDrawn())this.draw();this.Super('show');this.items[0].getItem(this.creator.nameField).focusInItem()}else{this.creator.$53j(this.event)}},hide:function(){this.Super('hide');this.moveTo(0,0)}});this.eventEditor=this.createAutoChild("eventEditor",{useAllDataSourceFields:true,initWidget:function(){this.invokeSuper(isc.DynamicForm,"initWidget",arguments);this.timeFormat=this.creator.timeFormat;var _14=[{name:"startHours",title:"From",type:"select",width:60},{name:"startMinutes",showTitle:false,type:"select",width:60},{name:"startAMPM",showTitle:false,type:"select",width:60},{name:"invalidDate",type:"blurb",colSpan:4,visible:false,defaultValue:this.creator.invalidDateMessage},{name:"endHours",title:"To",type:"select",width:60},{name:"endMinutes",showTitle:false,type:"select",width:60},{name:"endAMPM",showTitle:false,type:"select",width:60},{name:"name",title:"Name",type:"text",colSpan:4},{name:"description",title:"Description",type:"textArea",colSpan:4,height:50}];_14[0].valueMap=this.getTimeValues("hours");_14[1].valueMap=this.getTimeValues("minutes");_14[2].valueMap=this.getTimeValues();_14[3].cellStyle=this.errorStyle||"formCellError";_14[4].valueMap=this.getTimeValues("hours");_14[5].valueMap=this.getTimeValues("minutes");_14[6].valueMap=this.getTimeValues();var _20=isc.DataSource.create({addGlobalId:false,fields:_14});this.setDataSource(_20);this.setFields(isc.clone(this.creator.eventEditorFields))},getTimeValues:function(_35,_36){if(!_36)_36=0;var _21={};if(_35=="hours"){for(var i=_36;i<12;i++){_21[(i+1)+""]=(i+1)}}else if(_35=="minutes"){for(var i=0;i<60;i++){var _22=i<10?"0"+i:""+i;_21[i+""]=_22}}else{_21["am"]="am";_21["pm"]="pm"}
return _21},$642:["startHours","startMinutes","startAMPM","endHours","endMinutes","endAMPM","name","description"],getCustomValues:function(){if(!this.creator.eventEditorFields)return;var _9=this.$642;var _10=this.creator.eventEditorFields;var _11={}
for(var i=0;i<_10.length;i++){var _12=_10[i];if(_12.name&&!_9.contains(_12.name)){_11[_12.name]=this.getValue(_12.name)}}
return _11},setCustomValues:function(_35){if(!this.creator.eventEditorFields)return;var _9=this.$642;var _10=this.creator.eventEditorFields;for(var i=0;i<_10.length;i++){var _12=_10[i];if(_12.name&&!_9.contains(_12.name)){this.setValue(_12.name,_35[_12.name])}}}});this.eventEditorLayout=this.createAutoChild("eventEditorLayout",{items:[this.eventEditor,isc.HLayout.create({membersMargin:10,layoutMargin:10,autoDraw:false,members:[isc.IButton.create({autoDraw:false,title:this.saveButtonTitle,calendar:this,click:function(){var _3=this.calendar,_16=_3.eventEditorLayout.event,_23=_3.eventEditor,_24=_23.getItem("startHours").getValue(),_25=_23.getItem("endHours").getValue(),_26=_23.getItem("startMinutes").getValue(),_27=_23.getItem("endMinutes").getValue();var _28,_29;if(!_3.twentyFourHourTime){_28=_23.getItem("startAMPM").getValue();_29=_23.getItem("endAMPM").getValue();_24=_3.$534(_24,_28);_25=_3.$534(_25,_29);if(_25==0)_25=24}
if(!(_24<_25||(_24==_25&&_26<_27))){_23.showItem("invalidDate");return}
if(!_23.validate())return;var _17=_3.eventEditorLayout.currentStart,_18=_3.eventEditorLayout.currentEnd;_17.setHours(_24);_17.setMinutes(_26);_18.setHours(_25);_18.setMinutes(_27);if(_16){var _30=_3.eventEditorLayout.originalStart,_31=_3.eventEditorLayout.originalEnd;_3.updateEvent(_16,_17,_18,_23.getItem("name").getValue(),_23.getItem("description").getValue(),_23.getCustomValues(),true);if(_3.eventAutoArrange){_3.$64n(_3.weekViewSelected(),_30,_31)}
_3.eventEditorLayout.hide()}else{_3.addEvent(_17,_18,_23.getItem("name").getValue(),_23.getItem("description").getValue(),_23.getCustomValues(),true);_3.eventEditorLayout.hide()}}}),isc.IButton.create({autoDraw:false,title:this.cancelButtonTitle,calendar:this,click:function(){this.calendar.eventEditorLayout.hide()}})]})],setDate:function(_35,_36,_37){if(!_37)_37="";if(!_36){_36=new Date(_35.getFullYear(),_35.getMonth(),_35.getDate(),_35.getHours()+1,_35.getMinutes())}
var _3=this.creator;this.setTitle(_3.$53k(_35,_36));this.currentStart=_35;this.currentEnd=_36;this.items[0].getItem("startHours").setValue(this.getHours(_35.getHours()));this.items[0].getItem("endHours").setValue(this.getHours(_36.getHours()));this.items[0].getItem("startMinutes").setValue(_35.getMinutes());this.items[0].getItem("endMinutes").setValue(_36.getMinutes());if(!_3.twentyFourHourTime){this.items[0].getItem("startAMPM").setValue(this.getAMPM(_35.getHours()));this.items[0].getItem("endAMPM").setValue(this.getAMPM(_36.getHours()))}
this.items[0].getItem("name").setValue(_37);this.items[0].getItem("description").setValue("")},getHours:function(_35){if(this.creator.twentyFourHourTime)return _35;else return this.creator.$53n(_35)},getAMPM:function(_35){if(_35<12)return"am";else return"pm"},setEvent:function(_35){this.event=_35;if(this.creator.eventEditorFields){this.items[0].clearErrors(true);this.items[0].setCustomValues(_35)}
this.setDate(_35[this.creator.startDateField],_35[this.creator.endDateField]);this.items[0].getItem("name").setValue(_35[this.creator.nameField]);this.items[0].getItem("description").setValue(_35[this.creator.descriptionField]);this.originalStart=isc.clone(this.currentStart);this.originalEnd=isc.clone(this.currentEnd)},hide:function(){this.Super('hide');if(this.creator.dayView)this.creator.dayView.clearSelection();if(this.creator.weekView)this.creator.weekView.clearSelection();this.creator.eventEditor.hideItem("invalidDate")},sizeMe:function(){this.setWidth(this.creator.mainView.getVisibleWidth());this.setHeight(this.creator.mainView.getVisibleHeight());this.setLeft(this.creator.mainView.getLeft())}});if(!this.children)this.children=[];var _32=[];var _33=[];_33.add(this.dateChooser);if(this.showDateChooser){_32.add(isc.VLayout.create({autoDraw:false,width:"20%",membersMargin:10,layoutTopMargin:10,members:_33}))}
if(this.mainView.isA("TabSet")){_32.add(this.mainView)}else{if(this.showControlsBar!=false){var _34=isc.HLayout.create({autoDraw:false,height:this.controlsBar.getVisibleHeight(),width:"100%"});_34.addMember(isc.LayoutSpacer.create({autoDraw:false,width:"*"}));_34.addMember(this.controlsBar);_34.addMember(isc.LayoutSpacer.create({autoDraw:false,width:"*"}));_32.add(isc.VLayout.create({autoDraw:false,members:[_34,this.mainView]}))}else{_32.add(this.mainView)}}
this.children.add(isc.HLayout.create({autoDraw:false,width:"100%",height:"100%",members:_32}));this.eventEditorLayout.hide();this.setDateLabel()}
,isc.A.setDateLabel=function(){if(!this.dateDisplay)return;if(this.dayViewSelected()){this.dateDisplay.setContents("<b>"+this.chosenDate.getShortMonthName()+" "+this.chosenDate.getDate()+", "+this.chosenDate.getFullYear()+"</b>")}else if(this.weekViewSelected()){var _1=this.$656();var _2=_1[0];var _3=_1[1];if(_2.getMonth()!=_3.getMonth()){this.dateDisplay.setContents("<b>"+_2.getShortMonthName()+" "+_2.getDate()+", "+_2.getFullYear()+" - "+_3.getShortMonthName()+" "+_3.getDate()+", "+_3.getFullYear()+"</b>")}else{this.dateDisplay.setContents("<b>"+_2.getShortMonthName()+" "+_2.getDate()+" - "+_3.getDate()+" "+_2.getFullYear()+"</b>")}}else if(this.monthViewSelected()){this.dateDisplay.setContents("<b>"+this.chosenDate.getShortMonthName()+" "+this.chosenDate.getFullYear()+"</b>")}else if(this.timelineViewSelected()){var _4=this.timelineView,_5=_4.startDate,_6=_4.endDate;var _7="<b>"+_4.formatDateForDisplay(_5)+"</b> through <b>"+_4.formatDateForDisplay(_6)+"</b>";this.dateDisplay.setContents(_7)}}
);isc.evalBoundary;isc.B.push(isc.A.$656=function(){var _1=this.chosenWeekStart.duplicate();var _2=this.chosenWeekEnd.duplicate();if(!this.showWeekends){var _3=Date.getWeekendDays();var _4=7-_3.length;while(_3.contains(_1.getDay())){_1.setDate(_1.getDate()+1)}
var _5=0,_6=_1.duplicate();for(var i=0;i<_4;i++){if(_3.contains(_6.getDay()))_5++;_6.setDate(_6.getDate()+1)}
_2=_1.duplicate();_2.setDate(_2.getDate()+(_4-1)+_5)}
return[_1,_2]}
,isc.A.dayViewSelected=function(){if(!this.mainView.isA("TabSet"))return this.mainView.viewName=="day";else return this.$567=="day"}
,isc.A.weekViewSelected=function(){if(!this.mainView.isA("TabSet"))return this.mainView.viewName=="week";else return this.$567=="week"}
,isc.A.monthViewSelected=function(){if(!this.mainView.isA("TabSet"))return this.mainView.viewName=="month";else return this.$567=="month"}
,isc.A.timelineViewSelected=function(){if(!this.mainView.isA("TabSet"))return this.mainView.viewName=="timeline";else return this.$567=="timeline"}
,isc.A.$53l=function(_1,_2,_3,_4){if(!_4){this.eventDialog.event=null;if(this.eventEditorLayout)this.eventEditorLayout.event=null;this.eventDialog.items[0].createFields(false);var _5,_6;_5=this.$53m(_1,_2);if(this.monthViewSelected()){var _7=new Date();_7=_7.getHours();if(_7>22)_7-=1;_5.setHours(_7)}
if(_3&&_3>1){_6=this.$53m(_1+_3,_2)}
this.eventDialog.setDate(_5,_6)}else{this.eventDialog.eventWindow=_4;this.eventDialog.items[0].createFields(true);this.eventDialog.setEvent(_4.event)}
this.eventDialog.moveTo(0,-10000);this.eventDialog.show();var _8=this.getSelectedView().getCellPageRect(_1,_2);this.eventDialog.placeNear(_8[0],_8[1]);isc.Timer.setTimeout(this.ID+".eventDialog.bringToFront()")}
,isc.A.$53j=function(_1){if(!this.eventEditorLayout.isDrawn())this.eventEditorLayout.draw();this.eventEditorLayout.setWidth(this.mainView.getVisibleWidth());this.eventEditorLayout.setHeight(this.mainView.getVisibleHeight());this.eventEditorLayout.setPageLeft(this.mainView.getPageLeft());this.eventEditorLayout.setPageTop(this.getPageTop());if(_1){this.eventEditorLayout.setEvent(_1)}else{this.eventEditor.clearValues();if(this.eventEditorFields){this.eventEditorLayout.items[0].setCustomValues(this.eventDialog.items[0].getCustomValues())}
this.eventEditorLayout.setDate(this.eventDialog.currentStart,this.eventDialog.currentEnd,this.eventDialog.items[0].getItem("name").getValue())}
this.eventDialog.hide();this.eventEditorLayout.show()}
,isc.A.$53k=function(_1,_2){var _3=Date.getShortDayNames();var _4=Date.getShortMonthNames();var _5=_1.getHours(),_6=_2.getHours(),_7=_1.getMinutes(),_8=_2.getMinutes(),_9,_10;_9=this.$53n(_5)+(_7<10?":0"+_7:":"+_7);_10=this.$53n(_6)+(_8<10?":0"+_8:":"+_8)+(_6>11?"pm":"am");if(!((_5<12&&_6<12)||(_5>11&&_6>11)))_9+=(_5>11?"pm":"am");var _11=_9+" - "+_10;return _3[_1.getDay()]+", "+_4[_1.getMonth()]+" "+_1.getDate()+", "+_11}
,isc.A.$53n=function(_1){if(_1==0)return 12;else if(_1<13)return _1;else return _1-12}
,isc.A.$534=function(_1,_2){_1=parseInt(_1);if(_2.toLowerCase()=="am"&&_1==12){return 0}else if(_2.toLowerCase()=="pm"&&_1<12){return _1+12}else{return _1}}
,isc.A.$53m=function(_1,_2){var _3;if(this.dayViewSelected()){_3=this.chosenDate.duplicate()}else if(this.weekViewSelected()){var _4=this.weekView.getField(_2);if(!_4.$66a)return;_3=new Date(_4.$66a,_4.$659,_4.$658)}else if(this.monthViewSelected()){var _5=this.monthView.data.get(_1);var _6=this.monthView.getField(_2).$66b;_3=_5["date"+_6].duplicate();_3.setHours(0);_3.setMinutes(0);_3.setSeconds(0)}else if(this.timelineViewSelected()){var _7=this.timelineView;_3=this.timelineStartDate.duplicate();if(_7.timelineGranularity=="day"){_3.setDate(_3.getDate()+_2)}else{_3.setHours(_3.getHours()+_2)}}else{return}
if(this.dayViewSelected()||this.weekViewSelected()){var _8,_9=_1,_10=0;if(_1%2==1){_9=_1-1;_10=30}
_3.setHours(_9/ 2,_10)}
return _3}
,isc.A.$54g=function(_1,_2,_3){if(_3=="timeline"){var _4=_2;return Math.round(_4/ 60)*_1}else{return Math.round((_2/ 30)*_1)}}
,isc.A.monthViewEventClick=function(_1,_2,_3){var _4=this.monthView.getEvents(_1,_2);var _5=_4[_3];if(this.eventClick(_5,"month"))this.$53j(_5)}
,isc.A.getDayBodyHTML=function(_1,_2,_3,_4,_5){var _6=_1.getDay();var _7=_2,_8=15,_9=this.monthView.data?this.monthView.data[1]:null,_10=this.monthView.getRowHeight(_9,1);var _11="";for(var i=0;i<_7.length;i++){var _13=_7[i][this.startDateField].getHours();_13=this.$53n(_13)+(_13>11?"P ":" ");if(this.canEditEvent(_7[i])){var _14="<a href='javascript:"+this.ID+".monthViewEventClick("+_4+","+_5+","+i+");' class='"+this.calMonthEventLinkStyle+"'>";_11+=_14+_13+_7[i][this.nameField]+"</a><br/>"}else{_11+=_13+_7[i][this.nameField]+"<br/>"}
if((i+3)*_8>_10)break}
if(i<_7.length-1){_11+="+ "+(_7.length-1-i)+" more..."}
return _11}
,isc.A.getDayHeaderHTML=function(_1,_2,_3,_4,_5){return _1.getDate()}
,isc.A.dayBodyClick=function(_1,_2,_3,_4,_5){return true}
,isc.A.dayHeaderClick=function(_1,_2,_3,_4,_5){return true}
,isc.A.eventClick=function(){return true}
,isc.A.eventRemoveClick=function(){return true}
,isc.A.eventMoved=function(){return true}
,isc.A.eventResized=function(){return true}
,isc.A.timelineEventMoved=function(){return true}
,isc.A.timelineEventResized=function(){return true}
,isc.A.getValidSnapDate=function(_1,_2){var _3=this.eventSnapGap;var _4=((_1.getHours()*60)+_1.getMinutes())%_3;var _5=(_2.getHours()*60)+_2.getMinutes();var _6=Math.round((_5-_4)/_3);var _7=(_6*_3)+_4;var _8=Math.floor(_7/ 60),_9=_7%60;_2.setHours(_8);_2.setMinutes(_9);return _2}
,isc.A.selectTab=function(_1){if(this.mainView&&this.mainView.isA("TabSet")&&this.mainView.tabs.getLength()>_1){this.mainView.selectTab(_1);this.refreshSelectedView();return true}else{return false}}
,isc.A.parentResized=function(){this.Super('parentResized',arguments);if(this.eventEditorLayout.isVisible())this.eventEditorLayout.sizeMe()}
,isc.A.dateChanged=function(){return true}
,isc.A.getActiveDay=function(){var _1=this.getActiveTime();if(_1)return _1.getDay()}
,isc.A.getActiveTime=function(){var _1=this.ns.EH,_2=this.getSelectedView();var _3=_2.getEventColumn();var _4=_2.getEventRow();return this.$53m(_4,_3)}
,isc.A.setTimelineRange=function(_1,_2,_3,_4,_5){if(this.timelineView)this.timelineView.setTimelineRange(_1,_2,_3,_4);if(_5)this.fireCallback(_5)}
);isc.B._maxIndex=isc.C+79;isc.ClassFactory.defineClass("DaySchedule","ListGrid");isc.DaySchedule.changeDefaults("bodyProperties",{childrenSnapToGrid:true,snapToCells:true,redrawOnResize:true});isc.A=isc.DaySchedule.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.autoDraw=false;isc.A.canSort=false;isc.A.canResizeFields=false;isc.A.canReorderFields=false;isc.A.showHeader=false;isc.A.showHeaderContextMenu=false;isc.A.showAllRecords=true;isc.A.fixedRecordHeights=true;isc.A.labelColumnWidth=40;isc.A.labelColumnAlign="right";isc.A.showLabelColumn=true;isc.A.labelColumnPosition="left";isc.A.labelColumnBaseStyle="labelColumn";isc.A.showRollOver=true;isc.A.useCellRollOvers=true;isc.A.canSelectCells=true;isc.B.push(isc.A.initWidget=function(){this.fields=[];var _1={width:this.labelColumnWidth,name:"label",title:" ",cellAlign:"right",formatCellValue:function(_8,_9,_10,_11,_12){var _2=(_10>23?" PM":" AM");if(_10%2==0){if(_10==0||_10==48)return"12 "+_2;else if(_10>24)return((_10/ 2)-12)+_2;else return(_10/ 2)+_2}
else{return""}}}
if(this.showLabelColumn&&this.labelColumnPosition=="left"){this.fields.add(_1)}
this.fields.add({name:"day1",align:"center"});if(this.$53i){var _3=8;for(var i=2;i<_3;i++){this.fields.add({name:"day"+i,align:"center"})}
this.showHeader=true}
if(this.$53i&&!this.creator.showWeekends){var _5=this.showLabelColumn&&this.labelColumnPosition=="left"?1:0;var _6=Date.getWeekendDays();for(var i=_5;i<this.fields.length;i++){var _7=((i-_5)+this.creator.firstDayOfWeek)%7;if(_6.contains(_7)){this.fields[i].showIf="return false;"}}}
if(this.showLabelColumn&&this.labelColumnPosition=="right"){this.fields.add(_1)}
this.data=isc.DaySchedule.$53o;this.Super("initWidget")}
,isc.A.draw=function(_1,_2,_3,_4){this.invokeSuper(isc.DaySchedule,"draw",_1,_2,_3,_4);this.logDebug('draw','calendar');this.refreshEvents();this.setSnapGap();if(this.creator.scrollToWorkday)this.scrollToWorkdayStart()}
,isc.A.setSnapGap=function(){var _1=this.creator.eventSnapGap;this.body.snapVGap=Math.round((_1/ 30)*this.body.getRowSize(0));this.body.snapHGap=null}
,isc.A.scrollToWorkdayStart=function(){var _1=isc.Time.parseInput(this.creator.workdayStart);var _2=_1.getUTCHours()*2;if(_1.getUTCMinutes()>0)_2++;var _3=this.getRowHeight(null,0)*_2;this.body.scrollTo(0,_3)}
,isc.A.getRowHeight=function(_1,_2){if(this.creator.scrollToWorkday){var _3=isc.Time.parseInput(this.creator.workdayEnd).getUTCHours()
-isc.Time.parseInput(this.creator.workdayStart).getUTCHours();if(_3<=0)return this.cellHeight;var _4=Math.floor(this.body.getViewportHeight()/(_3*2));return _4<this.cellHeight?this.cellHeight:_4}else{return this.cellHeight}}
,isc.A.getDayFromCol=function(_1){var _2=this.fields.get(_1).$654;return _2}
,isc.A.getDateFromCol=function(_1){var _2=this.fields.get(_1);var _3=new Date(_2.$66a,_2.$659,_2.$658);return _3}
,isc.A.isLabelCol=function(_1){if(_1==0&&this.showLabelColumn&&this.labelColumnPosition=="left"){return true}else if(_1==this.fields.length-1&&this.showLabelColumn&&this.labelColumnPosition=="right"){return true}else{return false}}
,isc.A.colDisabled=function(_1){var _2=this.$53i?this.getDayFromCol(_1):this.creator.chosenDate.getDay();if(this.creator.disableWeekends&&Date.getWeekendDays().contains(_2)){return true}else{return false}}
,isc.A.refreshStyle=function(){if(!this.body)return;for(var i=0;i<this.data.length;i++){this.body.refreshCellStyle(i,1)}}
,isc.A.headerClick=function(_1,_2){if(this.isLabelCol(_1))return true;var _3=this.getField(_1);var _4=this.creator;_4.dateChooser.dateClick(_3.$66a,_3.$659,_3.$658);_4.selectTab(0);return true}
,isc.A.getCellAlign=function(_1,_2,_3){return this.labelColumnAlign}
,isc.A.cellMouseDown=function(_1,_2,_3){if(this.isLabelCol(_3)||this.colDisabled(_3))return true;if(!this.creator.canCreateEvents)return true;this.clearSelection();this.$53q={};this.$53q.colNum=_3;this.$53q.startRowNum=_2;this.$53q.endRowNum=_2;this.$53r=true;this.refreshCellStyle(_2,_3)}
,isc.A.cellOver=function(_1,_2,_3){if(this.$53r&&this.$53q){var _4;if(this.$53q.startRowNum<this.$53q.endRowNum){if(_2>this.$53q.endRowNum){_4=_2}else{_4=this.$53q.endRowNum}
this.$53q.endRowNum=_2}else{if(_2<this.$53q.endRowNum){_4=_2}else{_4=this.$53q.endRowNum}
this.$53q.endRowNum=_2}
var _5=6;var _3=this.$53q.colNum;for(var i=_4-_5;i<_4+_5;i++){if(i>=0&&i<=47)this.refreshCellStyle(i,_3)}}}
,isc.A.cellMouseUp=function(_1,_2,_3){if(!this.$53q)return true;this.$53r=false;var _4,_5,_6;if(this.$53q.startRowNum>this.$53q.endRowNum){_4=this.$53q.endRowNum;_5=this.$53q.startRowNum}else{_5=this.$53q.endRowNum;_4=this.$53q.startRowNum}
_6=_5-_4+1;this.creator.$53l(_4,this.$53q.colNum,_6)}
,isc.A.getCellStyle=function(_1,_2,_3){var _4=this.getBaseStyle(_1,_2,_3);if(this.isLabelCol(_3))return _4;if(this.colDisabled(_3))return this.baseStyle+"Disabled";if(this.$53q&&this.$53q.colNum==_3){var _5=this.$53q.startRowNum,_6=this.$53q.endRowNum;if(_2>=_5&&_2<=_6||_2>=_6&&_2<=_5){return this.creator.selectedCellStyle}else{return _4}}else{return _4}}
,isc.A.getBaseStyle=function(_1,_2,_3){if(this.isLabelCol(_3))return this.labelColumnBaseStyle;var _4=this.$53i?this.getDayFromCol(_3):this.creator.chosenDate.getDay();var _5=this.$53i?this.getDateFromCol(_3):this.creator.chosenDate.duplicate(),_6=_5.duplicate(),_7=_5.duplicate(),_8=isc.Time.parseInput(this.creator.workdayStart),_9=isc.Time.parseInput(this.creator.workdayEnd);_5.setHours(_8.getHours());_5.setMinutes(_8.getMinutes());_6.setHours(_9.getHours());_6.setMinutes(_9.getMinutes());_7.setHours(Math.floor(_2/ 2));if(_2%2==1)_7.setMinutes(30);else _7.setMinutes(0);var _10=this.creator.dateIsWorkday(_7);_7=_7.getTime();if(this.creator.showWorkday&&_5.getTime()<=_7&&_7<_6.getTime()&&_10){return this.creator.workdayBaseStyle}else{return this.baseStyle}}
,isc.A.clearSelection=function(){if(this.$53q){var _1,_2,_3=this.$53q.colNum;if(this.$53q.startRowNum<this.$53q.endRowNum){_1=this.$53q.startRowNum;_2=this.$53q.endRowNum}else{_1=this.$53q.endRowNum;_2=this.$53q.startRowNum}
this.$53q=null;for(var i=_1;i<_2+1;i++){this.refreshCellStyle(i,_3)}}}
,isc.A.refreshEvents=function(){if(!this.body||!this.creator.hasData())return;this.logDebug('refreshEvents:'+this.viewName,"calendar");this.clearEvents();var _1,_2,_3=this.creator;if(this.$53i){_1=_3.chosenWeekStart;_2=_3.chosenWeekEnd}else{_1=new Date(_3.year,_3.month,_3.chosenDate.getDate(),0,0);_2=new Date(_3.year,_3.month,_3.chosenDate.getDate(),23,59)}
var _4=_3.$53g(_1,_2);for(var i=0;i<_4.length;i++){this.addEvent(_4[i])}}
,isc.A.sizeEventWindow=function(_1){var _2=this.creator,_3=_1.event;if(!_1.$53v){if(_2.eventAutoArrange){_2.$64n(_1.$53i,_3[_2.startDateField],_3[_2.endDateField])}else{var _4=(_1.$53i?_2.weekView:_2.dayView);var _5=_4.getRowHeight(1),_6=_4.getColumnWidth(_4.isLabelCol(0)?1:0);var _7=_3[_2.endDateField].getHours()==0?24:_3[_2.endDateField].getHours();var _8=false;if(_3[_2.endDateField].getDate()>_3[_2.startDateField].getDate()){_8=true;_7=24}
var _9=(_7-_3[_2.startDateField].getHours())*(_5*2),_10=_6;if(_2.weekEventBorderOverlap&&_1.$53i)_10+=1;if(_3[_2.startDateField].getMinutes()>0){_9-=_2.$54g(_3[_2.startDateField].getMinutes(),_5)}
if(_3[_2.endDateField].getMinutes()>0&&!_8){_9+=_2.$54g(_3[_2.endDateField].getMinutes(),_5)}
var _11=_3[_2.startDateField].getHours()*(_5*2);if(_3[_2.startDateField].getMinutes()>0){_11+=_2.$54g(_3[_2.startDateField].getMinutes(),_5)}
var _12=_2.getEventLeft(_3,_1.$53i);_1.renderEvent(_11,_12,_10,_9)}}else{_1.$53v=false}}
,isc.A.clearEvents=function(){if(!this.body||!this.body.children)return;var _1=this.body.children;for(var i=_1.length-1;i>=0;i--){if(isc.isAn.EventWindow(_1[i]))this.body.removeChild(_1[i])}}
,isc.A.addEvent=function(_1){this.clearSelection();var _2=this.creator.$53f(_1);_2.$643=this;if(this.$53i)_2.$53i=true;if(this.body)this.body.addChild(_2);this.sizeEventWindow(_2)}
,isc.A.removeEvent=function(_1){var _2=this.body.children;for(var i=0;i<_2.length;i++){if(isc.isAn.EventWindow(_2[i])&&_2[i].event===_1){var _4=_2[i];_4.parentElement.removeChild(_4);_4.destroy();return true}}
return false}
,isc.A.updateEventWindow=function(_1){if(!this.body||!this.body.children)return;var _2=this.body.children,_3=this.creator;if(_3.dataSource)_3.$53s=_3.getDataSource().getLocalPrimaryKeyFields();for(var i=0;i<_2.length;i++){if(isc.isAn.EventWindow(_2[i])&&this.areSame(_2[i].event,_1)){_2[i].event=_1;this.sizeEventWindow(_2[i]);_2[i].setDescriptionText(_1[_3.descriptionField]);return true}}
return false}
,isc.A.areSame=function(_1,_2){var _3=this.creator;if(_3.dataSource){var _4=_3.$53s,_5=true;for(var _6 in _4){if(_1[_6]!=_2[_6]){_5=false;break}}
return _5}else{return(_1===_2)}}
);isc.B._maxIndex=isc.C+25;isc.ClassFactory.defineClass("WeekSchedule","DaySchedule");isc.ClassFactory.defineClass("MonthSchedule","ListGrid");isc.ClassFactory.defineClass("MonthScheduleBody","GridBody");isc.MonthSchedule.changeDefaults("headerButtonProperties",{showRollOver:false,showDown:false,cursor:"default"});isc.MonthSchedule.changeDefaults("bodyProperties",{redrawOnResize:true});isc.A=isc.MonthSchedule.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.autoDraw=false;isc.A.leaveScrollbarGap=false;isc.A.showAllRecords=true;isc.A.fixedRecordHeights=true;isc.A.showHeader=true;isc.A.showHeaderContextMenu=false;isc.A.canSort=false;isc.A.canResizeFields=false;isc.A.canReorderFields=false;isc.A.canHover=true;isc.A.showHover=true;isc.A.hoverWrap=false;isc.A.showRollOver=true;isc.A.useCellRollOvers=true;isc.A.canSelectCells=true;isc.A.firstDayOfWeek=0;isc.A.dayHeaderHeight=20;isc.A.mimimumDayHeight=80;isc.B.push(isc.A.initWidget=function(){if(this.creator.data)this.data=this.getDayArray();this.fields=[{name:"day1",align:"center"},{name:"day2",align:"center"},{name:"day3",align:"center"},{name:"day4",align:"center"},{name:"day5",align:"center"},{name:"day6",align:"center"},{name:"day7",align:"center"}];this.firstDayOfWeek=this.creator.firstDayOfWeek;var _1=Date.getShortDayNames();var _2=Date.getWeekendDays();for(var i=0;i<7;i++){var _4=(i+this.firstDayOfWeek)%7;this.fields[i].title=_1[_4];this.fields[i].$654=_4;this.fields[i].$66b=i+1;if(!this.creator.showWeekends&&_2.contains(_4)){this.fields[i].showIf="return false;"}}
this.Super("initWidget")}
,isc.A.getDayArray=function(){var _1=[],_2,_3,_4=new Date(this.creator.year,this.creator.month,1);while(_4.getDay()!=this.creator.firstDayOfWeek){_4.setDate(_4.getDate()-1)}
if(!this.creator.showWeekends){var _5=Date.getWeekendDays();var _6=_4.duplicate();var _7=true;for(var i=0;i<7-_5.length;i++){if(_6.getMonth()==this.creator.month){_7=false;break}
_6.setDate(_6.getDate()+1)}
if(_7)_4.setDate(_4.getDate()+7)}
_3=new Date(this.creator.year,this.creator.month,_4.getDate()+40);_2=this.creator.$53g(_4,_3);_2.sortByProperty("name",true,function(_9,_10,_11){return _9[_11.startDateField].getTime()},this.creator);this.$53t=0;for(var i=0;i<6;i++){if(this.creator.showDayHeaders)_1.add(this.getHeaderRowObject(_4));_1.add(this.getEventRowObject(_4,_2));_4.setDate(_4.getDate()+7);if(_4.getMonth()!=this.creator.month)break}
return _1}
,isc.A.getHeaderRowObject=function(_1){var _2={};var _3=_1.duplicate();for(var i=0;i<7;i++){_2["day"+(i+1)]=_3.getDate();_2["date"+(i+1)]=_3.duplicate();_3.setDate(_3.getDate()+1)}
return _2}
,isc.A.getEventRowObject=function(_1,_2){var _3={};var _4=new Date(_1.getFullYear(),_1.getMonth(),_1.getDate());for(var i=0;i<7;i++){var _6=[];while(this.$53t<_2.length){var _7=_2[this.$53t];if(_7[this.creator.startDateField].getMonth()!=_4.getMonth()||_7[this.creator.startDateField].getDate()!=_4.getDate()){break}else{_6.add(_7);this.$53t+=1}}
_3["day"+(i+1)]=_4.getDate();_3["date"+(i+1)]=new Date(_4.getFullYear(),_4.getMonth(),_4.getDate());_3["event"+(i+1)]=_6;_4.setDate(_4.getDate()+1)}
return _3}
,isc.A.getEvents=function(_1,_2){var _3=this.getDayFromCol(_2);var _4=this.fields.get(_2).$66b
var _5=this.data[_1]["event"+_4];return _5}
,isc.A.getEventCell=function(_1){var _2=this.data;for(var _3=0;_3<this.fields.length;_3++){var _4=this.fields[_3].$66b,_5="event"+_4;for(var _6=0;_6<_2.length;_6++){var _7=_2.get(_6)[_5];if(_7!=null&&_7.contains(_1)){return[_6,_3]}}}}
,isc.A.getDayFromCol=function(_1){var _2=this.fields.get(_1).$654;return _2}
,isc.A.colDisabled=function(_1){if(this.creator.disableWeekends&&Date.getWeekendDays().contains(this.getDayFromCol(_1))){return true}else{return false}}
,isc.A.refreshEvents=function(){if(!this.creator.hasData())return;this.logDebug('refreshEvents: month','calendar');this.setData(this.getDayArray())}
,isc.A.rowIsHeader=function(_1){var _2=this.creator;if(!_2.showDayHeaders||(_2.showDayHeaders&&_1%2==1))return false;else return true}
,isc.A.formatCellValue=function(_1,_2,_3,_4){var _5=this.creator,_6=this.fields.get(_4).$66b,_7=_2["event"+_6],_8=_2["date"+_6],_9=_8.getMonth()!=_5.chosenDate.getMonth();if(this.rowIsHeader(_3)){if(!_5.showOtherDays&&_9){return""}else{return _5.getDayHeaderHTML(_8,_7,_5,_3,_4)}}else{if(!_5.showOtherDays&&_9){return""}else{return _5.getDayBodyHTML(_8,_7,_5,_3,_4)}}}
,isc.A.getRowHeight=function(_1,_2){var _3=this.creator.showDayHeaders;if(this.rowIsHeader(_2)){return this.dayHeaderHeight}else{var _4=_3?this.data.length/ 2:this.data.length,_5=_3?this.body.getViewportHeight()
-(this.dayHeaderHeight*_4):this.body.getViewportHeight(),_6=_3?this.mimimumDayHeight-this.dayHeaderHeight:this.minimumDayHeight;if(_5/ _4<=_6){return _6}else{var _7=_5%_4,_8=0,_9=_3?(_2-1)/2:_2;if(_9<_7)_8=1;return(Math.floor(_5/ _4)+_8)}}}
,isc.A.getCellAlign=function(_1,_2,_3){if(this.rowIsHeader(_2))return"right"
else return"left"}
,isc.A.getCellVAlign=function(_1,_2,_3){if(!this.rowIsHeader(_2))return"top";else return"center"}
,isc.A.cellHoverHTML=function(_1,_2,_3){var _4=this.fields.get(_3).$66b;if(!this.rowIsHeader(_2)&&_1["event"+_4]!=null){var _5=_1["event"+_4];var _6="";for(var i=0;i<_5.length;i++){var _8=_5[i][this.creator.startDateField].getHours();_8=this.creator.$53n(_8)+(_8>11?"P ":" ");_6+=_8+_5[i][this.creator.nameField]+"<br/>"}
return _6}}
,isc.A.getBaseStyle=function(_1,_2,_3){var _4=this.creator,_5=this.fields.get(_3).$66b;if(this.rowIsHeader(_2)){if((_2==0&&_1["day"+_5]>7)||(_2==this.data.length-2&&_1["day"+_5]<7)){if(!_4.showOtherDays)return _4.otherDayBlankStyle;else return _4.otherDayHeaderBaseStyle}else return _4.dayHeaderBaseStyle}else{var _6=this.colDisabled(_3),_7=_4.showDayHeaders?1:0,_8=this.data.length-1;if((_2==_7&&this.data[_7]["day"+_5]>7)||(_2==_8&&this.data[_8]["day"+_5]<7)){if(!_4.showOtherDays)return _4.otherDayBlankStyle;else return _6?_4.otherDayBodyBaseStyle+"Disabled":_4.otherDayBodyBaseStyle}else return _6?_4.dayBodyBaseStyle+"Disabled":_4.dayBodyBaseStyle}}
,isc.A.cellClick=function(_1,_2,_3){var _4=this.creator,_5,_6,_7=this.fields.get(_3).$66b,_8=_1["date"+_7],_9=_1["event"+_7],_10=_4.chosenDate.getMonth()!=_8.getMonth(),_11=false;if(this.rowIsHeader(_2)){if(!(!this.creator.showOtherDays&&_10)){_11=_4.dayHeaderClick(_8,_9,_4,_2,_3)}
if(_11){if(_2==0&&_1["day"+_7]>7){if(_4.month==0){_5=_4.year-1;_6=11}else{_5=_4.year;_6=_4.month-1}}else if(_2==this.data.length-2&&_1["day"+_7]<7){if(_4.month==11){_5=_4.year+1;_6=0}else{_5=_4.year;_6=_4.month+1}}else{_5=_4.year;_6=_4.month}
_4.dateChooser.dateClick(_5,_6,_1["day"+_7]);_4.selectTab(0)}}else{if(!this.colDisabled(_3)&&!(!_4.showOtherDays&&_10)){_11=_4.dayBodyClick(_8,_9,_4,_2,_3);if(_11&&_4.canCreateEvents){_4.$53l(_2,_3)}}}}
);isc.B._maxIndex=isc.C+17;isc.ClassFactory.defineClass("EventWindow","Window");isc.EventWindow.changeDefaults("resizerDefaults",{overflow:"hidden",height:3,snapTo:"B",canDragResize:true})
isc.EventWindow.changeDefaults("headerDefaults",{layoutMargin:0,layoutLeftMargin:3,layoutRightMargin:3})
isc.A=isc.EventWindow.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.autoDraw=false;isc.A.minHeight=5;isc.A.minWidth=5;isc.A.showHover=true;isc.A.canHover=true;isc.A.hoverWidth=200;isc.A.showHeaderIcon=false;isc.A.showMinimizeButton=false;isc.A.showMaximimumButton=false;isc.A.canDragResize=true;isc.A.canDragReposition=true;isc.A.resizeFrom=["B"];isc.A.showShadow=false;isc.A.showEdges=false;isc.A.showHeaderBackground=false;isc.A.useBackMask=false;isc.A.keepInParentRect=true;isc.A.headerProperties={height:14};isc.A.closeButtonProperties={height:10,width:10};isc.A.bodyColor=null;isc.A.showFooter=true;isc.A.footerProperties={overflow:"hidden",defaultLayoutAlign:"center",height:7};isc.A.bodyConstructor=isc.HTMLFlow;isc.B.push(isc.A.initWidget=function(){this.bodyStyle=this.baseStyle+"Body";this.headerStyle=this.baseStyle+"Header";if(this.calendar.showDescription!=false){this.bodyProperties={contents:this.descriptionText,valign:"top",overflow:"hidden"}}
if(this.calendar.showEventBody==false){this.showBody=false;this.showTitle=false}
this.headerLabelProperties={styleName:this.className+"Header"};this.Super("initWidget",arguments)}
,isc.A.makeFooter=function(){if(!this.showFooter||this.canDragResize==false)return;var _1=this.createAutoChild("resizer",{dragTarget:this,styleName:this.baseStyle+"Resizer"});this.addChild(_1);if(this.resizer)this.resizer.bringToFront()}
,isc.A.setDescriptionText=function(_1){if(this.calendar.getDescriptionText){_1=this.calendar.getDescriptionText(this.event)}
if(_1){if(this.body){this.descriptionText=_1;this.body.setContents(_1)}else{this.descriptionText=_1;if(this.$734){this.$734.setWidth("100%");this.$734.setContents(_1)}}}}
,isc.A.click=function(){if(this.$53u)return;if(this.$67e){this.$67e=null;return}
var _1=this.calendar;var _2=_1.eventClick(this.event,this.$53i?"week":"day");isc.logWarn("in click");if(_2){if(!_1.canEditEvent(this.event))return;if(this.$53i)_1.weekView.clearSelection();else _1.dayView.clearSelection();var _3=_1.weekView.isLabelCol(0)?1:0;var _4=this.$53i?this.event[_1.startDateField].getDay()-
_1.firstDayOfWeek+_3:_3;if(this.$53i&&_1.showWeekends==false)_4--;var _5=this.event[_1.startDateField].getHours()*2;_1.$53l(_5,_4,null,this)}}
,isc.A.mouseDown=function(){this.calendar.eventDialog.hide();return isc.EH.STOP_BUBBLING}
,isc.A.renderEvent=function(_1,_2,_3,_4){var _5=this.calendar,_6=this.event;if(isc.isA.Number(_3)&&isc.isA.Number(_4)){this.resizeTo(Math.round(_3),Math.round(_4))}
if(isc.isA.Number(_1)&&isc.isA.Number(_2)){this.moveTo(Math.round(_2),Math.round(_1))}
var _7=_6[_5.startDateField].getHours();var _8=_6[_5.startDateField].getMinutes();var _9=_5.$53n(_7)+(_8<10?":0"+_8:":"+_8)+(_7>11?"PM":"AM")+" "+_6[_5.nameField];this.setTitle(_9);this.bringToFront()}
,isc.A.getHoverHTML=function(){return this.calendar.getEventHoverHTML(this.event,this)}
,isc.A.closeClick=function(){var _1=this.calendar;if(_1.eventRemoveClick(this.event)==false){this.$67e=true;return}
this.Super("closeClick",arguments);this.calendar.removeEvent(this.event,true);this.$53u=true}
,isc.A.parentResized=function(){this.Super('parentResized',arguments);this.$643.sizeEventWindow(this)}
,isc.A.getEventLength=function(_1,_2){var _3=_1||this.event[this.calendar.startDateField];var _4=_2||this.event[this.calendar.endDateField];var _5=(_4.getTime()-_3.getTime())/(1000*60);return _5}
,isc.A.dragRepositionStart=function(){var _1=this.getTop()%this.parentElement.snapVGap;this.parentElement.VSnapOrigin=_1}
,isc.A.dragRepositionStop=function(){var _1=this.calendar;var _2=this.event[_1.startDateField],_3=this.event[_1.endDateField];this.Super('dragRepositionStop',arguments);var _4=this.ns.EH,_5=this.parentElement.getEventColumn(),_6=(_4.dragMoveTarget.getTop()-this.parentElement.getPageTop())+this.parentElement.getScrollTop(),_7=this.parentElement.getRowSize(1),_8=Math.floor(_6/ _7),_9=(this.$53i?_1.weekView:_1.dayView);if(_9.isLabelCol(_5)||_9.colDisabled(_5))return false;var _10=_1.$53m(_8,_5);var _11=Math.floor((_6-(_7*_8))*(30/_7));_10.setMinutes(_10.getMinutes()+_11);_10=_1.getValidSnapDate(this.event[_1.startDateField],_10);if(!_1.eventMoved(_10,this.event))return false;var _12=new Date(_10.getFullYear(),_10.getMonth(),_10.getDate(),_10.getHours(),_10.getMinutes());_12.setMinutes(_12.getMinutes()+this.getEventLength());_1.updateEvent(this.event,_10,_12,this.event[_1.nameField],this.event[_1.descriptionField],null,true);if(_1.eventAutoArrange){_1.$64n(this.$53i,_2,_3);_4.dragMoveTarget.setPageRect(this.getPageLeft(),this.getPageTop())}
return true}
,isc.A.dragResizeStart=function(){var _1=(this.getTop()+this.getVisibleHeight())%this.parentElement.snapVGap;this.parentElement.VSnapOrigin=_1}
,isc.A.dragResizeStop=function(){var _1=this.calendar;var _2=this.event[_1.startDateField],_3=this.event[_1.endDateField];this.Super('dragResizeStop',arguments);var _4=this.ns.EH,_5=this.parentElement.getEventColumn(),_6=(_4.dragMoveTarget.getTop()-this.parentElement.getPageTop())+this.parentElement.getScrollTop()+_4.dragMoveTarget.getVisibleHeight(),_7=this.parentElement.getRowSize(1),_8=Math.floor(_6/ _7);var _9=_1.$53m(_8,_5);var _10=Math.floor((_6-(_7*_8))*(30/_7));_9.setMinutes(_9.getMinutes()+_10);_9=_1.getValidSnapDate(this.event[_1.endDateField],_9);if(_4.dragMoveTarget.getVisibleHeight()<_7)return false;if(!_1.eventResized(_9,this.event))return false;_1.updateEvent(this.event,this.event[_1.startDateField],_9,this.event[_1.nameField],this.event[_1.descriptionField],null,true);if(_1.eventAutoArrange){_1.$64n(this.$53i,_2,_3);_4.dragMoveTarget.setPageRect(this.getPageLeft(),this.getPageTop())}
this.$54h=false}
);isc.B._maxIndex=isc.C+14;isc.ClassFactory.defineClass("TimelineWindow","EventWindow");isc.A=isc.TimelineWindow.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.showFooter=false;isc.A.resizeFrom=["L","R"];isc.B.push(isc.A.initWidget=function(){if(this.calendar.showEventWindowHeader==false){this.showBody=false;this.showTitle=false}
this.Super("initWidget")}
,isc.A.draw=function(_1,_2,_3,_4){this.invokeSuper(isc.TimelineWindow,"draw",_1,_2,_3,_4);if(this.calendar.showEventWindowHeader==false){var _5=isc.Canvas.create({autoDraw:false,width:"100%",height:0,top:0,contents:(this.descriptionText?this.descriptionText:" ")});this.addMember(_5);_5.setHeight(0);_5.setTop(0);this.$734=_5}}
,isc.A.click=function(){var _1=this.calendar;var _2=_1.eventClick(this.event,this.$53i?"week":"day");isc.logWarn("in click");if(_2){if(!_1.canEditEvent(this.event))return;if(this.$53i)_1.weekView.clearSelection();else _1.dayView.clearSelection();var _3=_1.weekView.isLabelCol(0)?1:0;var _4=this.$53i?this.event[_1.startDateField].getDay()-
_1.firstDayOfWeek+_3:_3;if(this.$53i&&_1.showWeekends==false)_4--;var _5=this.event[_1.startDateField].getHours()*2;_1.$53l(_5,_4,null,this)}}
,isc.A.dragRepositionStart=function(){this.$8l=this.parentElement.getEventRow();this.$644=this.parentElement.getEventColumn();var _1=0,_2=this.event;if(_2.$646&&_2.$646.slotNum>0){_1=(_2.$646.slotNum-1)*this.getVisibleHeight()}
this.parentElement.VSnapOrigin=_1;this.parentElement.HSnapOrigin=0;this.hideLines();return true}
,isc.A.dragRepositionStop=function(){this.parentElement.HSnapOrigin=0;var _1=this.parentElement.getEventRow(),_2;if(_1!=this.$8l){if(this.calendar.canEditEventType){var _3=this.calendar.eventTypeData.get(_1);_2=_3[this.calendar.eventTypeField]}else{this.showLines();return false}}
var _4=this.calendar,_5=this.event;_4=this.calendar,_5=this.event;var _6=[_5[_4.startDateField].duplicate(),_5[_4.endDateField].duplicate()];if(_5[_4.leadingDateField]&&_5[_4.trailingDateField]){_6.add(_5[_4.leadingDateField].duplicate());_6.add(_5[_4.trailingDateField].duplicate())}
var _7=this.ns.EH;var _8=this.getPageLeft()-this.getLeft();var _9=_7.dragMoveTarget.getLeft()-_8;var _10=_4.timelineView.getDateFromPoint(_9);var _11=_10.duplicate();_11.setMinutes(_11.getMinutes()+this.getEventLength());_6[0]=_10;_6[1]=_11;var _12=Math.floor((_10.getTime()-_5[_4.startDateField].getTime())/(1000*60));if(_5[_4.leadingDateField])_6[2].setMinutes(_6[2].getMinutes()+_12);if(_5[_4.trailingDateField])_6[3].setMinutes(_6[3].getMinutes()+_12);var _13={}
if(_2)_13[_4.eventTypeField]=_2;if(_5[_4.leadingDateField]&&_5[_4.trailingDateField]){_13[_4.leadingDateField]=_6[2];_13[_4.trailingDateField]=_6[3]}
if(_2==null)_2=_5[_4.eventTypeField];if(_4.adjustEventTimes){var _14=_4.adjustEventTimes(_5,this,_6[0],_6[1],_2);if(_14){_6[0]=_14[0].duplicate();_6[1]=_14[1].duplicate()}}
if(_4.allowEventOverlap==false){var _15=this.checkForOverlap(_5,_6[0],_6[1],_2);if(_15==true){if(_4.timelineEventOverlap){_4.timelineEventOverlap(false,_5,this,_6[0],_6[1],_2)}
return false}else if(isc.isAn.Array(_15)){_6[0]=_15[0].duplicate();_6[1]=_15[1].duplicate();if(_4.timelineEventOverlap){_4.timelineEventOverlap(true,_5,this,_6[0],_6[1],_2)}}}
if(!_4.timelineEventMoved(_5,this,_6[0],_6[1],_2))return false;this.calendar.updateEvent(_5,_6[0],_6[1],_5[_4.nameField],_5[_4.descriptionField],_13,true);return true}
,isc.A.checkForOverlap=function(_1,_2,_3,_4){var _5={},_6=this.calendar;_5[_6.startDateField]=_2.duplicate();_5[_6.endDateField]=_3.duplicate();_5[_6.eventTypeField]=_4;var _7=_6.timelineView.findOverlappingEvents(_1,_5);if(_7.length==0){return false}else if(_7.length>1){isc.logWarn("overlap detected:"+_7.length);return true}else{var _8=_7[0];var _9=_6.startDateField,_10=_6.endDateField;if(Date.compareDates(_2,_8[_9])==1&&Date.compareDates(_3,_8[_9])==-1){_3=_8[_9].duplicate();_2=_3.duplicate();_2.setMinutes(_2.getMinutes()-this.getEventLength());isc.logWarn('left overlap:'+[_2]);return[_2,_3]}else if(Date.compareDates(_2,_8[_10])==1&&Date.compareDates(_3,_8[_10])==-1){_2=_8[_10].duplicate();_3=_2.duplicate();_3.setMinutes(_3.getMinutes()+this.getEventLength());isc.logWarn('rigth overlap:'+[_8.id,_8.end,_2,_3]);return[_2,_3]}else{return true}}}
,isc.A.dragResizeStart=function(){var _1=(this.getTop()+this.getVisibleHeight())%this.parentElement.snapVGap;this.parentElement.VSnapOrigin=_1}
,isc.A.dragResizeStop=function(){var _1=this.calendar,_2,_3,_4=this.ns.EH,_5,_6=this.getPageLeft()-this.getLeft(),_7=_4.dragMoveTarget.getLeft()-_6;if(_7==this.getLeft()){_2=this.event[_1.startDateField].duplicate();var _8=(_7+_4.dragMoveTarget.getVisibleWidth());_3=_1.timelineView.getDateFromPoint(_8);if(this.calendar.sizeEventsToGrid){var _9=this.calendar.timelineView.$731();_3.setMinutes(_3.getMinutes()-_9)}}else{_2=_1.timelineView.getDateFromPoint(_7);_3=this.event[_1.endDateField].duplicate()}
if(!_1.timelineEventResized(this.event,this,_2,_3))return false;_1.updateEvent(this.event,_2,_3,this.event[_1.nameField],this.event[_1.descriptionField],null,true)}
,isc.A.destroyLines=function(){if(this.$645){if(this.$645[0])this.$645[0].destroy();if(this.$645[1])this.$645[1].destroy();if(this.$645[2])this.$645[2].destroy();if(this.$645[3])this.$645[3].destroy()}}
,isc.A.hideLines=function(){if(this.$645){if(this.$645[0])this.$645[0].hide();if(this.$645[1])this.$645[1].hide();if(this.$645[2])this.$645[2].hide();if(this.$645[3])this.$645[3].hide()}}
,isc.A.showLines=function(){if(this.$645){if(this.$645[0])this.$645[0].show();if(this.$645[1])this.$645[1].show();if(this.$645[2])this.$645[2].show();if(this.$645[3])this.$645[3].show()}}
,isc.A.hide=function(){this.invokeSuper(isc.TimelineWindow,"hide");this.hideLines()}
,isc.A.show=function(){this.invokeSuper(isc.TimelineWindow,"show");this.showLines()}
,isc.A.parentResized=function(){this.invokeSuper(isc.EventWindow,"parentResized")}
);isc.B._maxIndex=isc.C+14;isc.ClassFactory.defineClass("TimelineView","ListGrid");isc.TimelineView.changeDefaults("bodyProperties",{childrenSnapToGrid:true,snapToCells:false,suppressVSnapOffset:true});isc.A=isc.TimelineView.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.canSort=false;isc.A.canResizeFields=false;isc.A.canReorderFields=false;isc.A.showHeaderContextMenu=false;isc.A.showAllRecords=true;isc.A.fixedRecordHeights=true;isc.A.alternateRecordStyles=true;isc.A.showRollOver=true;isc.A.useCellRollOvers=true;isc.A.canSelectCells=true;isc.A.eventTypeField="eventType";isc.A.eventWidth=60;isc.A.eventHeight=60;isc.A.labelColumnWidth=75;isc.A.labelColumnBaseStyle="labelColumn";isc.A.eventPageSize=30;isc.A.trailIconSize=16;isc.A.leadIconSize=16;isc.A.scrollToToday=false;isc.A.lineImage="[SKINIMG]Stretchbar/hsplit_over_stretch.gif";isc.A.trailingEndPointImage="[SKINIMG]actions/prev.png";isc.A.leadingEndPointImage="[SKINIMG]actions/next.png";isc.B.push(isc.A.initWidget=function(){this.fields=[];if(this.creator.eventTypeField)this.eventTypeField=this.creator.eventTypeField;if(this.creator.timelineStartDate)this.startDate=this.creator.timelineStartDate;if(this.creator.timelineEndDate)this.endDate=this.creator.timelineEndDate;if(this.creator.renderEventsOnDemand)this.renderEventsOnDemand=this.creator.renderEventsOnDemand;this.cellHeight=this.eventHeight;this.fields=this.calcFields();this.data=this.creator.eventTypeData;this.$730();this.Super("initWidget")}
,isc.A.$730=function(){var _1=this.creator.timelineGranularity;if(_1=="day"){this.startDate.setHours(0);this.startDate.setMinutes(0);this.startDate.setSeconds(0);this.startDate.setMilliseconds(0)}else if(_1=="hour"){this.startDate.setMinutes(0);this.startDate.setSeconds(0);this.startDate.setMilliseconds(0)}else if(_1=="minute"){this.startDate.setSeconds(0);this.startDate.setMilliseconds(0)}}
,isc.A.scrollTimelineTo=function(_1){this.bodies[1].scrollTo(_1)}
,isc.A.setEventHeight=function(_1){this.eventHeight=_1;this.setCellHeight(_1);this.refreshEvents()}
,isc.A.setEventWidth=function(_1){this.eventWidth=_1;this.setFields(this.calcFields());this.refreshEvents()}
,isc.A.setTimelineRange=function(_1,_2,_3,_4){this.startDate=_1.duplicate();this.creator.timelineStartDate=_1.duplicate();this.endDate=_2.duplicate();this.creator.timelineEndDate=_2.duplicate();if(_3)this.creator.timelineGranularity=_3;if(_4)this.creator.timelineUnitsPerColumn=_4;isc.logWarn('setTimelineRange:'+[_3,_4,this.creator.timelineGranularity,this.creator.timelineUnitsPerColumn]);var _5=this.calcFields();this.setFields(_5);this.$730();this.refreshVisibleEvents()}
,isc.A.addUnits=function(_1,_2){if(this.creator.timelineGranularity=="day"){_1.setDate(_1.getDate()+_2)}else if(this.creator.timelineGranularity=="hour"){_1.setHours(_1.getHours()+_2)}else if(this.creator.timelineGranularity=="minute"){_1.setMinutes(_1.getMinutes()+_2)}
return _1}
,isc.A.calcFields=function(){var _1=[];if(this.creator.timelineLabelFields){var _2=this.creator.timelineLabelFields;for(var i=0;i<_2.length;i++){_1.add(_2[i])}}else{var _4={width:this.labelColumnWidth,name:this.eventTypeField,title:" ",frozen:true}
_1.add(_4)}
var _5=this.startDate.duplicate();var _6=this.endDate;var _7=0;var _8=this.creator.timelineUnitsPerColumn;while(_5.getTime()<=_6.getTime()){var _9=isc.addProperties({name:"f"+_7,title:this.getDayFieldTitle(_5),width:this.eventWidth},this.getFieldProperties(_5));_1.add(_9);_5=this.addUnits(_5,_8);_7++}
return _1}
,isc.A.getFieldProperties=function(_1){return null}
,isc.A.getDayFieldTitle=function(_1){if(this.creator.timelineGranularity=="day"){return(_1.getMonth()+1)+"/"+_1.getDate()}else{var _2=_1.getMinutes().toString();if(_2.length==1)_2="0"+_2;return _1.getHours()+":"+_2}}
,isc.A.draw=function(_1,_2,_3,_4){this.invokeSuper(isc.TimelineView,"draw",_1,_2,_3,_4);var _5=this.creator.timelineSnapGap;if(_5){this.body.snapHGap=Math.round((_5/ 60)*this.eventWidth)}else{this.body.snapHGap=this.eventWidth}
this.body.snapVGap=this.eventHeight;if(this.scrollToToday){var _6=new Date();_6.setDate(_6.getDate()-(this.scrollToToday+1));var _7=this.creator.getDayDiff(this.startDate,_6)*this.eventWidth;this.bodies[1].scrollTo(_7,0)}
this.logDebug('draw','calendar');this.refreshEvents()}
,isc.A.getCellCSSText=function(_1,_2,_3){var _4=this.startDate.duplicate();_4.setDate(_4.getDate()+_3-1);var _5=new Date();if(_4.toShortDate()==_5.toShortDate()&&this.creator.todayBackgroundColor){return"background-color:"+this.creator.todayBackgroundColor}else return null}
,isc.A.formatDateForDisplay=function(_1){return _1.getShortMonthName()+" "+_1.getDate()+", "+_1.getFullYear()}
,isc.A.isLabelCol=function(_1){if(_1==0)return true;else return false}
,isc.A.getCellStyle=function(_1,_2,_3){var _4=this.getBaseStyle(_1,_2,_3);if(this.isLabelCol(_3))return _4;else{return _4}}
,isc.A.getBaseStyle=function(_1,_2,_3){if(this.isLabelCol(_3))return this.labelColumnBaseStyle;else{return this.baseStyle}}
,isc.A.nextOrPrev=function(_1){var _2=_1?this.eventPageSize:0-this.eventPageSize;this.startDate.setDate(this.startDate.getDate()+_2);this.endDate.setDate(this.endDate.getDate()+_2);this.setFields(this.calcFields());if(this.creator.dataSource){this.creator.data.invalidateCache();this.creator.filterData(this.creator.getNewCriteria())}}
,isc.A.refreshEvents=function(){if(!this.body||!this.creator.hasData())return;var _1=this.startDate,_2=this.endDate,_3=this.creator;var _4=_3.data.getRange(0,_3.data.getLength());this.logDebug('refreshing events','calendar');this.tagDataForOverlap(_4);this.refreshVisibleEvents()}
,isc.A.getVisibleEvents=function(){var _1=this.getVisibleDateRange();var _2=this.getVisibleRowRange();var _3=this.creator;var _4=_3.data;var _5=[];for(var i=0;i<_4.getLength();i++){var _7=_4.get(i);if(!_7){isc.logWarn('getVisibleEvents: potentially invalid index: '+i);break}
var _8={};if(_7[_3.leadingDateField]&&_7[_3.trailingDateField]){_8[_3.leadingDateField]=_1[0];_8[_3.trailingDateField]=_1[1]}else{_8[_3.startDateField]=_1[0];_8[_3.endDateField]=_1[1]}
var _9=this.data.findIndex(_3.eventTypeField,_7[_3.eventTypeField]);if(_9==-1){}
if(this.eventsOverlap(_8,_7)&&_2[0]<=_9&&_9<=_2[1]){_5.add(_7)}}
return _5}
,isc.A.findOverlappingEvents=function(_1,_2){var _3=this.creator;var _4=_3.data;var _5=[];for(var i=0;i<_4.getLength();i++){var _7=_4.get(i);if(!_7){isc.logWarn('getVisibleEvents: potentially invalid index: '+i);break}
if(_3.eventsAreSame(_7,_1)){continue}
var _8={};if(_7[_3.leadingDateField]&&_7[_3.trailingDateField]){_8[_3.leadingDateField]=_2[_3.leadingDateField];_8[_3.trailingDateField]=_2[_3.trailingDateField]}else{_8[_3.startDateField]=_2[_3.startDateField];_8[_3.endDateField]=_2[_3.endDateField]}
if(_2[_3.eventTypeField]==_7[_3.eventTypeField]&&this.eventsOverlap(_8,_7)){_5.add(_7)}}
return _5}
,isc.A.refreshVisibleEvents=function(){var _1=this.getVisibleEvents();var _2=_1.getLength();this.logDebug('refreshing visible events','calendar');for(var i=0;i<_2;i++){var _4=_1.get(i);if(_4.$646)_4.$646.visited=false
this.addEvent(_4,i)}
this.clearEvents(_2)}
,isc.A.tagDataForOverlap=function(_1,_2){if(_1.getLength()==0)return;var _3=this.creator,_4=[],_5=0,_6=0,_7=0,_8=_1.get(0)[_3.eventTypeField];_1.sort(function(_19,_20){var _9;if(_19[_3.leadingDateField]&&_20[_3.leadingDateField])_9=_3.leadingDateField;else _9=_3.startDateField;if(_19[_3.eventTypeField]<_20[_3.eventTypeField])return-1;else if(_19[_3.eventTypeField]>_20[_3.eventTypeField])return 1;else{if(_3.timelineView.secondarySort){return _3.timelineView.secondarySort(_19,_20)}else{if(_19[_9]<_20[_9])return-1;else if(_19[_9]>_20[_9])return 1;else return 0}}});var _10=0,_11=[];if(_2){while(_1.get(_10)[_3.eventTypeField]!=_2&&_10<_1.getLength()){_10++}}
for(var i=_10;i<_1.getLength();i++){var _13=_1.get(i);if(_2&&_13[_3.eventTypeField]!=_2){break}else if(_2)_11.add(_13);if(_13[_3.eventTypeField]!=_8){_5=_6=_7=0;_4=[];_8=_13[_3.eventTypeField]}
var _14=true;var _15=[];for(var j=0;j<_4.length;j++){var _17=_4[j];if(this.allEventsOverlap||this.eventsOverlap(_13,_17)){_15.add(_17)}else{_5--;if(_5==0)_6=1;_14=false}}
_4=_15;_4.add(_13);_5++;if(_14&&_4.length>_6){_6++}
for(var j=0;j<_4.length;j++){var _17=_4[j];if(!_17.$646)_17.$646={};if(!_17.$646.visited){_17.$646.slotNum=null;var _18=this.nextAvailSlot(_4,_6);if(_18<1){isc.logWarn("Calendar.timelineView.tagDataForOverlap, no slot for event:"+isc.Log.echoFull(_17))}
_17.$646.slotNum=_18;_17.$646.visited=true}
_17.$646.totalSlots=_6}
if(_6>_7)_7++}
return _11}
,isc.A.nextAvailSlot=function(_1,_2){var _3=[];for(var i=0;i<_2;i++){_3.add(false)}
for(var i=0;i<_1.length;i++){var _5=_1[i];if(!_5.$646)continue;if(_5.$646.slotNum)_3[_5.$646.slotNum-1]=true}
var _6=_3.indexOf(false)+1;return _6}
,isc.A.eventsOverlap=function(_1,_2){var _3,_4,_5=this.creator;if(_1[_5.leadingDateField]&&_2[_5.leadingDateField])_3=_5.leadingDateField;else _3=_5.startDateField;if(_1[_5.trailingDateField]&&_2[_5.trailingDateField])_4=_5.trailingDateField;else _4=_5.endDateField;if(this.creator.sizeEventsToGrid){if((_1[_3]>=_2[_3]&&_1[_3]<=_2[_4])||(_1[_4]<=_2[_4]&&_1[_4]>=_2[_3])||(_1[_3]<=_2[_3]&&_1[_4]>=_2[_4])){return true}else{return false}}else{if((_1[_3]>_2[_3]&&_1[_3]<_2[_4])||(_1[_4]<_2[_4]&&_1[_4]>_2[_3])||(_1[_3]<_2[_3]&&_1[_4]>_2[_4])){return true}else{return false}}}
,isc.A.compareDates=function(_1,_2,_3){if(_1.getFullYear()<_2.getFullYear()){return 1}else if(_1.getFullYear()>_2.getFullYear()){return-1}
if(_1.getMonth()<_2.getMonth()){return 1}else if(_1.getMonth()>_2.getMonth()){return-1}
if(_1.getDate()<_2.getDate()){return 1}else if(_1.getDate()>_2.getDate()){return-1}
return 0}
,isc.A.getDateFromPoint=function(_1,_2){var _3=this.startDate.duplicate();var _4=this.eventWidth;var _5=this.$731();var _6=0;_6+=Math.floor(_1/ _4)*_5;if(!_2)_6+=((_1%_4)/_4)*_5;_3.setMinutes(_3.getMinutes()+_6);return _3}
,isc.A.$731=function(){var _1=this.creator.timelineUnitsPerColumn;var _2=this.creator.timelineGranularity;var _3;var _4=0;if(_2=="day"){var _5=24*60;_3=_1*_5}else if(_2=="hour"){_3=_1*60}else if(_2=="minute"){_3=_1}
return _3}
,isc.A.$732=function(_1){var _2=this.$731();var _3,_4;if(_1.event[this.creator.startDateField].getTime()<this.startDate.getTime()){_3=this.startDate.duplicate()}else{_3=_1.event[this.creator.startDateField]}
if(_1.event[this.creator.endDateField].getTime()>this.endDate.getTime()){_4=this.endDate.duplicate();_4.setMinutes(_4.getMinutes()+_2)}else{_4=_1.event[this.creator.endDateField].duplicate()}
var _5=_1.getEventLength(_3,_4);var _6=this.eventWidth;var _7=0;var _8=Math.floor(_5/ _2);if(this.creator.sizeEventsToGrid){_8+=1}
_7+=_8*_6;if(this.creator.sizeEventsToGrid==false){_7+=Math.floor(((_5%_2)/_2)*_6)}
return _7}
,isc.A.getEventLeft=function(_1){var _2=(_1[this.creator.startDateField].getTime()-this.startDate.getTime())/(1000*60);var _3=this.eventWidth;var _4=this.$731();var _5=0;_5+=Math.floor(_2/ _4)*_3;if(this.creator.sizeEventsToGrid==false){_5+=Math.floor(((_2%_4)/_4)*_3)}
if(_5<0)_5=0;return _5}
,isc.A.sizeEventWindow=function(_1,_2){var _3=this.creator,_4=_1.event,_5=this.eventWidth,_6=this.eventHeight;var _7=_4[_3.eventWindowStyleField];if(_7)_1.setStyleName(_7);if(_4.eventWindowBackgroundColor){_1.setBackgroundColor(_4.eventWindowBackgroundColor)}else{_1.backgroundColor=null;if(_1.isDrawn()){_1.getStyleHandle().backgroundColor=null}}
_5=this.$732(_1);var _8=this.getEventLeft(_4);_1.setTitle(_3.getEventTitle(_4));if(_2)_1.redraw();var _9=this.data.findIndex(this.eventTypeField,_4[this.eventTypeField]);var _10=_9*_6;this.adjustDimensionsForOverlap(_1,_8,_10,_5,_6);if(_3.showDescription!=false){_1.setDescriptionText(_4[_3.descriptionField])}
if(_4[_3.leadingDateField]&&_4[_3.trailingDateField]){this.addLeadingAndTrailingLines(_1)}}
,isc.A.adjustDimensionsForOverlap=function(_1,_2,_3,_4,_5){var _6=_1.event.$646;if(_6&&_6.totalSlots>0){_5=Math.floor(_5/ _6.totalSlots);_3=_3+Math.floor((_5*(_6.slotNum-1)))}
_1.resizeTo(_4,_5);_1.moveTo(_2,_3)}
,isc.A.addLeadingAndTrailingLines=function(_1){var _2,_3,_4,_5;if(_1.$645){_2=_1.$645[0];_3=_1.$645[1];_4=_1.$645[2];_5=_1.$645[3]}else{_2=this.$65r();_3=this.$65s(_1,"lead");_4=this.$65r();_5=this.$65s(_1,"trail")}
var _6=this.$65t(_3,_2);var _7=this.$65t(_5,_4);if(!_1.$645){this.body.addChild(_2);this.body.addChild(_3);this.body.addChild(_4);this.body.addChild(_5);_1.$645=[_2,_3,_4,_5]}}
,isc.A.$65t=function(_1,_2){var _3=this.creator,_4=_1.$65e,_5=_4.event,_6=_1.type,_7=this.eventWidth,_8=_4.getVisibleHeight(),_9=_4.getTop(),_10=_4.getLeft();var _11,_12,_13=true;if(_6=="trail"){if(this.compareDates(_5[_3.trailingDateField],this.endDate)<0){_11=_3.getDayDiff(this.endDate,_5[_3.startDateField]);if(_11<1)_11=1;_12=_11*_7;_13=false}else{_11=_3.getDayDiff(_5[_3.trailingDateField],_5[_3.startDateField]);_12=(_11*_7)-(Math.round(_7/ 2))}}else{if(this.compareDates(this.startDate,_5[_3.leadingDateField])<0){_11=_3.getDayDiff(this.startDate,_5[_3.startDateField]);if(_11<1)_11=1;_12=_11*_7;_13=false}else{_11=_3.getDayDiff(_5[_3.leadingDateField],_5[_3.startDateField]);_12=(_11*_7)-(Math.round(_7/ 2))}}
var _14=(_6=="trail"?_10+_7:_10-_12);_2.moveTo(_14,_9+(Math.round(_8/ 2)));_2.setWidth(_12);var _15=0;if(_5.$646&&_5.$646.slotNum>0){_15=(_5.$646.slotNum-1)*_8}
var _16=(_6=="trail"?this.trailIconSize:this.leadIconSize);var _17;if(_13==false)_17=-50;else if(_6=="trail")_17=_10+_7+_12-Math.round(_16/ 2);else _17=_10-_12-Math.round(_16/ 2);_1.moveTo(_17,_9+Math.round(_8/ 2)-Math.round(_16/ 2));_1.$647=Math.round(_8/ 2)-Math.round(_16/ 2)+_15;_1.$648=Math.round(_7/ 2)-Math.round(_16/ 2),_1.$65f=_3.getDayDiff(_5[_3.startDateField],this.startDate);return _13}
,isc.A.$65s=function(_1,_2){var _3=(_2=="trail"?this.trailIconSize:this.leadIconSize);var _4=isc.Img.create({$65e:_1,type:_2,autoDraw:false,_redrawWithParent:false,src:(_2=="trail"?this.trailingEndPointImage:this.leadingEndPointImage),width:_3,height:_3,canDragReposition:(this.creator.canEditEvents==true),dragRepositionStart:function(){this.$8l=this.parentElement.getEventRow();this.$644=this.parentElement.getEventColumn();this.parentElement.VSnapOrigin=this.$647;this.parentElement.HSnapOrigin=this.$648},dragRepositionStop:function(){var _5=this.$65f,_6=this.$644,_7=this.parentElement.getEventColumn(),_8=_7-_6,_9=this.$65e.event,_10=this.$65e.calendar,_11=this.type=="trail"?_7-_5:_5-_7;if(_11<1)return false;var _12={};var _13=this.type=="trail"?_10.trailingDateField:_10.leadingDateField;var _14=_9[_13].duplicate();_14.setDate(_14.getDate()+_8);_12[_13]=_14;_10.updateEvent(_9,_9[_10.startDateField],_9[_10.endDateField],_9[_10.nameField],_9[_10.descriptionField],_12,true);return true}});return _4}
,isc.A.$65r=function(){var _1=isc.Canvas.create({autoDraw:false,_redrawWithParent:false,height:2,overflow:"hidden",styleName:"eventLine"});return _1}
,isc.A.clearEvents=function(_1){if(!this.body||!this.body.children||!this.$65u)return;if(!_1)_1=0;for(var i=_1;i<this.$65u.length;i++){this.$65u[i].hide()}}
,isc.A.addEvent=function(_1,_2){if(!this.$65u)this.$65u=[];var _3,_4=false;if(this.renderEventsOnDemand&&this.$65u[_2]){_3=this.$65u[_2];this.creator.setEventWindowID(_1,_3.ID);_3.event=_1;_4=true}else{var _3=this.getNewEventWindow(_1);_3.$643=this;this.$65u.add(_3)}
this.sizeEventWindow(_3,_4);if(this.body&&!_4)this.body.addChild(_3);_3.show()}
,isc.A.removeEvent=function(_1){var _2=this.body.children;for(var i=0;i<_2.length;i++){if(isc.isAn.EventWindow(_2[i])&&_2[i].event===_1){var _4=_2[i];_4.parentElement.removeChild(_4);_4.destroy();return true}}
return false}
,isc.A.getNewEventWindow=function(_1){var _2=_1[this.creator.eventWindowStyleField]||this.creator.eventWindowStyle;var _3,_4;if(this.creator.showDescription==false){_3={height:0,overflow:"hidden"};_4={height:"*"}}
var _5=(this.creator.canDragEvents==true&&_1[this.creator.canDragEventField]!=false);var _6={calendar:this.creator,_redrawWithParent:false,styleName:_2,canDragReposition:_5,canDragResize:this.creator.canResizeTimelineEvents,edgeMarginSize:10,showCloseButton:false,event:_1,descriptionText:_1[this.creator.descriptionField]||"",headerProperties:_4,bodyProperties:_3}
if(_1.eventWindowBackgroundColor){_6.backgroundColor=_1.eventWindowBackgroundColor}
var _7=isc.TimelineWindow.create(_6);this.creator.setEventWindowID(_1,_7.ID);return _7}
,isc.A.updateEventWindow=function(_1){if(!this.body||!this.body.children)return;var _2=this.creator,_3=this.tagDataForOverlap(_2.data.getRange(0,_2.data.getLength()),_1[_2.eventTypeField]);if(this.renderEventsOnDemand){this.refreshVisibleEvents()}else{for(var i=0;i<_3.length;i++){var _1=_3.get(i),_5=_2.getEventWindowID(_1),_6=window[_5];if(_1.$646)_1.$646.visited=false;_6.event=_1;this.sizeEventWindow(_6)}}}
,isc.A.areSame=function(_1,_2){var _3=this.creator;if(_3.dataSource){var _4=_3.$53s,_5=true;for(var _6 in _4){if(_1[_6]!=_2[_6]){_5=false;break}}
return _5}else{return(_1===_2)}}
,isc.A.resized=function(){this.Super('resized',arguments);if(this.isDrawn()&&this.creator.hasData()&&this.renderEventsOnDemand){this.refreshVisibleEvents()}}
,isc.A.scrolled=function(){if(this.renderEventsOnDemand){if(this.$57s)isc.Timer.clear(this.$57s);this.$57s=isc.Timer.setTimeout(this.ID+".refreshVisibleEvents()")}}
,isc.A.getVisibleDateRange=function(){if(!this.renderEventsOnDemand){return[this.startDate.duplicate(),this.endDate.duplicate()]}
var _1=this.body.getScrollLeft();var _2=_1+this.body.getVisibleWidth();var _3=this.getDateFromPoint(_1,true);var _4=this.getDateFromPoint(_2);return[_3,_4]}
,isc.A.getVisibleRowRange=function(){if(!this.renderEventsOnDemand){return[0,this.data.getLength()]}
var _1=this.bodies[1].getScrollTop();var _2=this.eventHeight;var _3=this.bodies[1].getVisibleHeight();var _4=Math.floor(_1/ _2);var _5=Math.floor((_1+_3)/_2);return[_4,_5]}
);isc.B._maxIndex=isc.C+45;isc.Calendar.registerStringMethods({getDayBodyHTML:"date,events,calendar,rowNum,colNum",getDayHeaderHTML:"date,events,calendar,rowNum,colNum",dayBodyClick:"date,events,calendar,rowNum,colNum",dayHeaderClick:"date,events,calendar,rowNum,colNum",eventClick:"event,viewName",eventChanged:"event",eventMoved:"newDate,event",eventResized:"newDate,event"});isc.A=isc.DaySchedule;isc.A.$53o=[{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""},{label:"",day1:"",day2:"",day3:"",day4:"",day5:"",day6:"",day7:""}];isc.AutoTest.customizeCalendar();isc._moduleEnd=isc._Calendar_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('Calendar module init time: ' + (isc._moduleEnd-isc._moduleStart) + 'ms','loadTime');delete isc.definingFramework;}else{if(window.isc && isc.Log && isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'Calendar'.");}

/*

  SmartClient Ajax RIA system
  Version SC_SNAPSHOT-2010-05-02/LGPL Development Only (2010-05-02)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

