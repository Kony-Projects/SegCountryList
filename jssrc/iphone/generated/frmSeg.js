function addWidgetsfrmSeg() {
    var HBox0d1b9c387a0c246 = new kony.ui.Box({
        "id": "HBox0d1b9c387a0c246",
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
    var VBox0ecb6d4f994a144 = new kony.ui.Box({
        "id": "VBox0ecb6d4f994a144",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
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
    VBox0ecb6d4f994a144.add();
    HBox0d1b9c387a0c246.add(VBox0ecb6d4f994a144);
    var Line0f843fc1496294b = new kony.ui.Line({
        "id": "Line0f843fc1496294b",
        "isVisible": true,
        "skin": "CopyslLine0d74898b462d646"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 2
    }, {});
    frmSeg.add(HBox0d1b9c387a0c246, Line0f843fc1496294b);
};

function frmSegGlobals() {
    frmSeg = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSeg,
        "enabledForIdleTimeout": false,
        "id": "frmSeg",
        "needAppMenu": true,
        "skin": "slForm",
        "statusBarHidden": false
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