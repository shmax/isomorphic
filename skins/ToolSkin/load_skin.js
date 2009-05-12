/*
	Isomorphic SmartClient Tools Skin File
	
    This file contains skinning modifications for SmartClient Tools, allowing controls in
    SmartClient tools to have a different appearance from standard application controls
    
	To load this skin, reference this file in a <SCRIPT> tag immediately
	after your Isomorphic SmartClient loader:
	
		<SCRIPT ...>
*/

isc.loadToolSkin = function (theWindow) {
if (theWindow == null) theWindow = window;
with (theWindow) {
    
    
// ----------------------------------------------------------------------------    
// Load CSS Styles
isc.Page.loadStyleSheet("[ISOMORPHIC]/skins/ToolSkin/skin_styles.css", theWindow);



// ----------------------------------------------------------------------------
// Scrollbar and scroll thumb  
isc.defineClass("TScrollThumb", "ScrollThumb");
isc.TScrollThumb.addProperties({
 		capSize:6,
        vSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tScrollbar/vthumb.png",
        hSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tScrollbar/hthumb.png",
        showRollOver:true,
        showGrip:true,
        gripLength:18,
        gripBreadth:8,
        backgroundColor:"transparent",
        showGrip:true
});

isc.defineClass("THScrollThumb", "TScrollThumb");
isc.THScrollThumb.addProperties({
    vertical:false
});
isc.defineClass("TVScrollThumb", "TScrollThumb");
isc.TVScrollThumb.addProperties({
    vertical:true
});

isc.defineClass("TScrollbar", "Scrollbar");
isc.TScrollbar.addProperties({
        allowThumbDownState:false,
        btnSize:22,
        showTrackEnds:false,
        showRollOver:true,
        thumbMinSize:30,
        thumbInset:2,
        thumbOverlap:7,
        startThumbOverlap:null,endThumbOverlap:null,
        backgroundColor:"#000000",
        cornerSrc:"[ISOMORPHIC]skins/ToolSkin/images/tScrollbar/corner.gif",
        hSrc:"[ISOMORPHIC]skins/ToolSkin/images/tScrollbar/hscroll.gif",
        vSrc:"[ISOMORPHIC]skins/ToolSkin/images/tScrollbar/vscroll.gif",
        hThumbClass: isc.THScrollThumb,
        vThumbClass: isc.TVScrollThumb,
        startImg:{name:"start", width:"btnSize", height:"btnSize"},
        endImg:{name:"end", width:"btnSize", height:"btnSize"},
        trackImg:{name:"track", width:"*", height:"*"}
})
  
// ----------------------------------------------------------------------------  
// TPropertySheet class - subclass of PropertySheet used by SmartClient tools
isc.defineClass("TPropertySheet", "PropertySheet");
isc.TPropertySheet.addProperties({
    scrollbarConstructor:isc.TScrollbar,
    backgroundColor:"#DDDDDD",
    cellStyle:"tPropSheetValue",
    titleStyle:"tPropSheetTitle"
});
   


// ----------------------------------------------------------------------------
// Resizebars

isc.defineClass("TSnapbar", "Snapbar");

isc.TSnapbar.addProperties({
    // modify vSrc / hSrc for custom appearance
    vSrc:"[ISOMORPHIC]skins/ToolSkin/images/Splitbar/vsplit.png",
    hSrc:"[ISOMORPHIC]skins/ToolSkin/images/Splitbar/hsplit.png",
    baseStyle:"tSplitbar",
	items : [
    	{name:"blank", width:"capSize", height:"capSize"},
    	{name:"blank", width:"*", height:"*"},
	    {name:"blank", width:"capSize", height:"capSize"}
    ],
    showGrip:true,
    gripBreadth:7,
    gripLength:41,
    capSize:8
});

isc.defineClass("TLayout", "Layout");
isc.TLayout.addProperties({
    resizeBarSize:9,
    resizeBarClass:"TSnapbar",
    scrollbarConstructor:isc.TScrollbar
})

    
    

// ----------------------------------------------------------------------------
// TSectionItem class - subclass of SectionItem used by SmartClient tools
isc.defineClass("TSectionItem", "SectionItem");
isc.TSectionItem.addProperties({
    sectionHeaderClass:"TImgSectionHeader2",
    height:21
});

// TSectionStack class - subclass of SectionStack used by SmartClient tools
isc.defineClass("TSectionStack", "SectionStack");
isc.TSectionStack.addProperties({
    scrollbarConstructor:isc.TScrollbar,
    sectionHeaderClass:"TImgSectionHeader",
    styleName:"tSectionStack",
    backgroundColor:null,
    headerHeight:21
});

isc.defineClass("TSectionHeader", "SectionHeader");
isc.TSectionHeader.addProperties({
    icon:"[ISOMORPHIC]/skins/ToolSkin/images/tSectionHeader/opener.png"
});

isc.defineClass("TImgSectionHeader", "ImgSectionHeader");
isc.TImgSectionHeader.changeDefaults("backgroundDefaults", {
    showRollOver:true,
    showDown:false,
    showDisabledIcon:false,
    showRollOverIcon:true,
    src:"[ISOMORPHIC]/skins/ToolSkin/images/tImgSectionHeader/header.png",
    icon:"[ISOMORPHIC]/skins/ToolSkin/images/tImgSectionHeader/opener.png",
    iconWidth:15,
    iconHeight:13,
    padding:1,
    capSize:3,
    titleStyle:"tSectionHeaderTitle",
    baseStyle:"tSectionHeader",
    backgroundColor:"#404040"
})
isc.defineClass("TImgSectionHeader2", "TImgSectionHeader");
isc.TImgSectionHeader2.changeDefaults("backgroundDefaults", {
    src:"[ISOMORPHIC]/skins/ToolSkin/images/tImgSectionHeader/header2.png"
});
    


// ----------------------------------------------------------------------------
// TButton - standard button class (subclass of StretchImgButton) used by SmartClient tools
isc.defineClass("TButton", "StretchImgButton");
isc.TButton.addProperties({
    src:"[ISOMORPHIC]/skins/ToolSkin/images/button/button.png",
    height:24,
    width:100,
    capSize:7,
    vertical:false,
    valign:"top",
    labelVPad:4,
    titleStyle:"tButtonTitle",
    showFocused:true,
    showFocusedAsOver:false
});

isc.defineClass("TAutoFitButton", "TButton");
isc.TAutoFitButton.addProperties({
    autoFit: true,
    autoFitDirection: isc.Canvas.HORIZONTAL
});

// ----------------------------------------------------------------------------
// TTabSet - subclass of Tabset used by SmartClient tools
isc.defineClass("TTabSet", "TabSet");
isc.TTabSet.addProperties({
    tabBarThickness:20,
    scrollerButtonSize:18,
    pickerButtonSize:19,
        
    symmetricScroller:true,
    symmetricPickerButton:true,
          
    scrollerVSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/vscroll.png",
    scrollerHSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/hscroll.png",
    pickerButtonHSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/hpicker.png",
    pickerButtonVSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/vpicker.png",
    
    showEdges:false,
    showPaneContainerEdges:false,
    paneContainerClassName:"tTabSetContainer",
    
    paneMargin:5
});


isc.defineClass("TTab", "ImgTab");
isc.TTab.addProperties({
    src:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/tab.png",
    capSize:3,
    showRollOver:true,
    memberOverlap:16,
    showDown:false,
    showDisabled:false,
    titleStyle:"tTabTitle",
    
    items:[
        {name: "start", width: "capSize", height: "capSize"},
        {name: "stretch", width: "*", height: "*"},
        {name: "end", width: "capSize", height: "capSize"}
    ],
    labelLengthPad:null
            
})


isc.TTabSet.changeDefaults("tabBarDefaults",
{
    buttonConstructor:isc.TTab,
    memberOverlap:0,
    symmetricEdges:true, 
    scrollbarConstructor:isc.TScrollbar,
    membersMargin:4,
 
    styleName:"tTabBar",
   
    // keep the tabs from reaching the curved edge of the pane (regardless of align)
    layoutEndMargin:10,

    // have the baseline overlap the top edge of the TabSet, using rounded media
    baseLineConstructor:"Canvas",
    baseLineProperties : { 
        backgroundColor: "4d5258",
        overflow:"hidden",
        height:1
    },
    
    baseLineSrc:"[ISOMORPHIC]/skins/ToolSkin/images/tTabs/top/baseline.png",
    
    baseLineCapSize:2,
    baseLineThickness:1
});

// ----------------------------------------------------------------------------
// DynamicForm / Component Editor

if (isc.DynamicForm) {
    isc.defineClass("TDynamicForm", "DynamicForm");
    isc.TDynamicForm.addProperties({
        scrollbarConstructor:isc.TScrollbar,
        
        // For skinning we currently have to create subclasses of standard editors which have
        // been reskinned using resources from the Toolskin.
        // Override getEditorType() to return these subclasses wherever possible
        // Standard naming: T + base class, so TTextItem, TSelectItem, etc
        getEditorType : function (item) {
            var baseType = this.Super("getEditorType", arguments);
            // Remap from data type to item ClassName
            
            baseType = isc.FormItemFactory.getItemClass(baseType).getClassName();
            
            var toolType = "T" + baseType;        
            // rely on the fact that isA.ClassName will identify a class object as well as an instance
            if (isc[toolType] != null && isc.isA.FormItem(isc[toolType])) return toolType;
            return baseType;
            
        }
    });
}

// TComponentEditor - subclass of ComponentEditor used by SmartClient tools
if (isc.ComponentEditor) {
    isc.defineClass("TComponentEditor", "ComponentEditor");
    isc.TComponentEditor.addProperties({
        
        // black will give me a lot!
        styleName:"tComponentEditor",
        scrollbarConstructor:isc.TScrollbar,
        _delayThumbVisibility:isc.Browser.isIE
        
    });
    isc.TComponentEditor.changeDefaults("autoChildDefaults", { 
            cellStyle:"tPropSheetValue",
            titleStyle:"tPropSheetTitle"
        }
    );
    
    // place labels on left
    isc.TComponentEditor.changeDefaults("TCheckboxItemDefaults", {
        textBoxStyle:"tLabelAnchor",
        showTitle:true, 
        showLabel:false,
        getTitleHTML : function () { // NOTE: copy of FormItem.getTitle()
            if (this[this.form.titleField] != null) return this[this.form.titleField];
            return this[this.form.fieldIdProperty];
        }
    });
    
    isc.TComponentEditor.changeDefaults("TSelectItemDefaults", {
        width:"*"
    });
    isc.TComponentEditor.changeDefaults("TTextItemDefaults", {
        width:"*"
    });
    isc.TComponentEditor.changeDefaults("TExpressionItemDefaults", {
        width:"*"
    });

    
    // Picking up individual form item types (TTextItem, etc) is handled by an override to
    // getEditorType() in ComponentEditor.js
}

// ----------------------------------------------------------------------------
// TListGrid, 
// TEditTree and TListPalette
// Special subclasses of TreeGrid / ListGrid used in editMode
if (isc.ListGrid) {
    isc.tListGridProps = {
        scrollbarConstructor:"TScrollbar",
        
        headerButtonConstructor:"ImgButton",
        sorterConstructor:"ImgButton",
        headerMenuButtonConstructor:"ImgButton",
            
        sortAscendingImage:{src:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/sort_ascending.png",
                            width:8, height:6},
        sortDescendingImage:{src:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/sort_descending.png",
                            width:8, height:6},
            
        backgroundColor:null, bodyBackgroundColor:null,

        baseStyle:"tCell",
        groupNodeStyle:"tGroupNode",
        
        headerHeight:21,
        headerBackgroundColor:null,
        headerBarStyle:"tHeaderBar",
        headerBaseStyle:"tHeaderButton",	// bgcolor tint and borders
        headerTitleStyle:"tHeaderTitle",
            
        styleName:"tListGrid",
        bodyStyleName:"tGridBody",
        
        showHeaderMenuButton:true,
        headerMenuButtonBaseStyle:"tHeaderButton",
        headerMenuButtonTitleStyle:"tHeaderTitle",
        
        headerMenuButtonIcon:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/headerMenuButton_icon.png",
        headerMenuButtonIconWidth:8,
        headerMenuButtonIconHeight:6,
        showRollOverCanvas:false
    };
    isc.tListGridDefaultsBlocks = {
            
        bodyDefaults : {
            scrollbarConstructor:isc.TScrollbar
        },
        sorterDefaults : {
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/header.png",
            baseStyle:"tSorterButton"
        },
        headerButtonDefaults : {
            showTitle:true,
            showDown:false,
            // baseStyle / titleStyle is auto-assigned from headerBaseStyle
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/header.png"
        },
        headerMenuButtonDefaults : {
            showDown:false,
            showTitle:true,
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tListGrid/header.png"
        }
    }
    
    isc.defineClass("TListGrid", "ListGrid");
    isc.TListGrid.addProperties(isc.tListGridProps);
    
    for (var prop in isc.tListGridDefaultsBlocks) {
        isc.TListGrid.changeDefaults(prop, isc.tListGridDefaultsBlocks[prop]);
    }
    
    isc.tTreeGridProps = {
        folderIcon:"[ISOMORPHIC]/skins/ToolSkin/images/tTreeGrid/folder.png",
        nodeIcon:"[ISOMORPHIC]/skins/ToolSkin/images/tTreeGrid/file.png",
        manyItemsImage:"[ISOMORPHIC]/skins/ToolSkin/images/tTreeGrid/folder_file.png"
    };
    
    isc.defineClass("TTreeGrid", "ListGrid");
    isc.TTreeGrid.addProperties(isc.tListGridProps);
    
    for (var prop in isc.tListGridDefaultsBlocks) {
        isc.TTreeGrid.changeDefaults(prop, isc.tListGridDefaultsBlocks[prop]);
    }
    isc.TTreeGrid.addProperties(isc.tTreeGridProps);
    
    
    if (isc.ListPalette) {
        isc.defineClass("TListPalette", "ListPalette");
        isc.TListPalette.addProperties(isc.tListGridProps);
        
        for (var prop in isc.tListGridDefaultsBlocks) {
            isc.TListPalette.changeDefaults(prop, isc.tListGridDefaultsBlocks[prop]);
        }
        
        isc.defineClass("TTreePalette", "TreePalette");
        isc.TTreePalette.addProperties(isc.tListGridProps);
        
        for (var prop in isc.tListGridDefaultsBlocks) {
            isc.TTreePalette.changeDefaults(prop, isc.tListGridDefaultsBlocks[prop]);
        }
        isc.TTreePalette.addProperties(isc.tTreeGridProps);
        
        isc.defineClass("TEditTree", "EditTree");
        isc.TEditTree.addProperties(isc.tListGridProps);
        
        for (var prop in isc.tListGridDefaultsBlocks) {
            isc.TEditTree.changeDefaults(prop, isc.tListGridDefaultsBlocks[prop]);
        }
        isc.TEditTree.addProperties(isc.tTreeGridProps);
    }
}
// Form items

isc.defineClass("TTextItem", "TextItem");
isc.TTextItem.addProperties({
    titleStyle:"tFormTitle",
    textBoxStyle:"tTextItem",
    height:isc.Browser.isSafari ? 22 : 20
    
})

isc.defineClass("TColorItem", "ColorItem");
isc.TColorItem.addProperties({
    titleStyle:"tFormTitle",
    textBoxStyle:"tTextItem",
    width:"*"
})

isc.defineClass("TTextAreaItem", "TextAreaItem");
isc.TTextAreaItem.addProperties({
    titleStyle:"tFormTitle",
    textBoxStyle:"tTextItem"
})

isc.defineClass("TSelectItem", "SelectItem");
isc.TSelectItem.addProperties({
    showFocusedPickerIcon:true,
    titleStyle:"tFormTitle",
    pickerIconSrc:"[ISOMORPHIC]/skins/ToolSkin/images/controls/selectPicker.gif",
    height:20,
    pickerIconWidth:18,
    controlStyle:"tSelectItemControl",
    pickerIconStyle:"tSelectItemPickerIcon",
    textBoxStyle:"tSelectItemText"
})

isc.defineClass("TCheckboxItem", "CheckboxItem");
isc.TCheckboxItem.addProperties({
    checkedImage:"[ISOMORPHIC]/skins/ToolSkin/images/DynamicForm/checked.png",
    uncheckedImage:"[ISOMORPHIC]/skins/ToolSkin/images/DynamicForm/unchecked.png",
    unsetImage:"[ISOMORPHIC]/skins/ToolSkin/images/DynamicForm/unsetcheck.png",
    valueIconWidth:15,
    valueIconHeight:15,
    textBoxStyle:"tLabelAnchor"
    
})

isc.defineClass("TExpressionItem", "ExpressionItem");
isc.TExpressionItem.addProperties({
    titleStyle:"tFormTitle",
    textBoxStyle:"tTextItem"
    
})

isc.defineClass("TButtonItem", "ButtonItem");
isc.TButtonItem.addProperties({
    buttonConstructor:"TButton"
})



// --------------------------------------------
// HTMLFlow
isc.defineClass("THTMLFlow", "HTMLFlow");
isc.THTMLFlow.addProperties({
    styleName:"tNormal",
    scrollbarConstructor:"TScrollbar"
    
});


// ---------------------------------------------
// MenuButton
isc.defineClass("TMenuButton", "MenuButton");
isc.TMenuButton.addProperties({
    baseStyle:"tMenuButton"    
});


// --------------------------------------------
// Window / Save File Dialog
 if (isc.Window) {
    
    isc.tWindowProps = {
        // rounded frame edges
        showEdges:true,
        edgeImage: "[ISOMORPHIC]/skins/ToolSkin/images/tWindow/window.png",
        customEdges:null,
        edgeSize:5,
        edgeTop:20,
        edgeOffsetTop: 0,
        edgeOpacity:85,
        showHeaderBackground:false, // part of edges
        showHeaderIcon:true,

        // clear backgroundColor and style since corners are rounded
        backgroundColor:"transparent",
        
        border: "none",
        styleName:"tNormal",
        edgeCenterBackgroundColor:"#000000",
        bodyColor:null,
        bodyStyle:"tWindowBody",
        headerStyle:"tWindowHeader",

        layoutMargin:0,
        membersMargin:0,

        showFooter:false,

        showShadow:false,
        shadowDepth:5
    }
    
    isc.tWindowDefaultsBlocks = {
        headerDefaults:{
            layoutMargin:0,
            height:20    
        },
        headerLabelDefaults:{
            styleName:"tWindowHeaderText"
        },
        headerIconDefaults:{
            width:13,
            height:13,
            opacity:85,
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tWindow/headerIcon.png"
        },
        restoreButtonDefaults:{
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tWindow/maximize.png",
            opacity:85,
            showRollOver:true,
            showDown:false,
            width:18,
            height:18    
        },
        
        closeButtonDefaults:{ 
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tWindow/close.png",
            opacity:85,
            showRollOver:true,
            showDown:false,
            width:18,
            height:18
        },
        maximizeButtonDefaults:{ 
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tWindow/maximize.png",
            opacity:85,
            showRollOver:true,
            width:18,
            height:18
        },
        minimizeButtonDefaults:{ 
            src:"[ISOMORPHIC]/skins/ToolSkin/images/tWindow/minimize.png",
            opacity:85,
            showRollOver:true,
            showDown:false,
            width:18,
            height:18
        },
        toolbarDefaults:{
            buttonConstructor: "IButton"
        }
        
    }
    

    isc.tSaveFileDialogDefaultsBlocks = {
        actionStripDefaults:{
            styleName: "tToolStrip"
        },
        pathLabelDefaults : {
            styleName:"tLabelAnchor"
        },
        previousFolderButtonDefaults:{
            size: 16,
            src: "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/previousFolder.png"
        },
        
        upOneLevelButtonDefaults: {
            size: 16,
            src: "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/upOneLevel.png"
        },

        createNewFolderButtonDefaults: {
            size: 16,
            src: "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/createNewFolder.png"
        },

        refreshButtonDefaults: {
            size: 16,
            src: "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/refresh.png"
        },
        
        directoryListingDefaults: {
            folderIcon : "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/folder.png",
            fileIcon : "[ISOMORPHIC]/skins/ToolSkin/images/tFileBrowser/file.png"
        }
    }
    
    isc.defineClass("TWindow", "Window");
    isc.TWindow.addProperties(isc.tWindowProps);
    

    isc.defineClass("TSaveFileDialog", "SaveFileDialog");
    isc.TSaveFileDialog.addProperties(isc.tWindowProps);
    isc.TSaveFileDialog.addProperties({actionFormConstructor:"TDynamicForm",
                                       directoryListingConstructor:"TListGrid"});
    
    for (var prop in isc.tWindowDefaultsBlocks) {
        isc.TWindow.changeDefaults(prop, isc.tWindowDefaultsBlocks[prop]);
        isc.TSaveFileDialog.changeDefaults(prop, isc.tWindowDefaultsBlocks[prop]);
    }
    
    for (var prop in isc.tSaveFileDialogDefaultsBlocks) {
        isc.TSaveFileDialog.changeDefaults(prop, isc.tSaveFileDialogDefaultsBlocks[prop]);
    }
    
    isc.defineClass("TLoadFileDialog", "LoadFileDialog");
    isc.TLoadFileDialog.addProperties(isc.tWindowProps);
    isc.TLoadFileDialog.addProperties({actionFormConstructor:"TDynamicForm",
                                       directoryListingConstructor:"TListGrid"});
    
    for (var prop in isc.tWindowDefaultsBlocks) {
        isc.TWindow.changeDefaults(prop, isc.tWindowDefaultsBlocks[prop]);
        isc.TLoadFileDialog.changeDefaults(prop, isc.tWindowDefaultsBlocks[prop]);
    }
    
    for (var prop in isc.tSaveFileDialogDefaultsBlocks) {
        isc.TLoadFileDialog.changeDefaults(prop, isc.tSaveFileDialogDefaultsBlocks[prop]);
    }
    
}

} // End of with(theWindow) block

}   // END of loadToolSkin function definition
// call the loadToolSkin routine
isc.loadToolSkin()
