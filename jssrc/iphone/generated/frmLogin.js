function addWidgetsfrmLogin() {
    var HBox1 = new kony.ui.Box({
        "id": "HBox1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    HBox1.add();
    initializeVBox0f70b9a3d5e034c && initializeVBox0f70b9a3d5e034c();
    var Segment0a8b974d5d59c46 = new kony.ui.SegmentedUI2({
        "data": [{
            "lbltxt": "Label"
        }, {
            "lbltxt": "Label"
        }, {
            "lbltxt": "Label"
        }],
        "groupCells": false,
        "id": "Segment0a8b974d5d59c46",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": true,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": VBox0f70b9a3d5e034c,
        "screenLevelWidget": false,
        "scrollingEvents": {
            "onPull": AS_Segment_i995962ed5a44849bdb9ea6db2cd5bb9,
            "onReachingEnd": AS_Segment_dc4561ba0d2a4de2b01e251a60754f91
        },
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lbltxt": "lbltxt"
        },
        "enableReordering": false
    }, {
        "containerHeight": null,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_SWIPE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var Button0f8c9990b581344 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button0f8c9990b581344",
        "isVisible": true,
        "onClick": AS_Button_g84d988c40a34bd5880bb6a138e17de2,
        "skin": "slButtonGlossBlue",
        "text": "Button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "showProgressIndicator": true
    });
    frmLogin.add(HBox1, Segment0a8b974d5d59c46, Button0f8c9990b581344);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "needAppMenu": true,
        "skin": "sknFrmWhite"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};