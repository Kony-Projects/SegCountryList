function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var FlexContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a5c678abb3904d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer1.setDefaultUnit(kony.flex.DP);
    var Button1 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button1",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_i3b4fdb18d634a07b66e0cd94d3901e1,
        "skin": "slButtonGlossBlue",
        "text": "M",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer1.add(Button1);
    var Calendar1 = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateComponents": [4, 6, 2018, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 4,
        "formattedDate": "04/06/2018",
        "height": "40dp",
        "hour": 0,
        "id": "Calendar1",
        "isVisible": true,
        "left": "10%",
        "minutes": 0,
        "month": 6,
        "seconds": 0,
        "skin": "slCalendar",
        "top": "137dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "80%",
        "year": 2018,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    var FlexScrollContainer2 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "110%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0beb77f4030544b",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer2.setDefaultUnit(kony.flex.DP);
    var Button0ddd4f55079af4b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0ddd4f55079af4b",
        "isVisible": true,
        "left": "53dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "0dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0d6fb8ff47fc548 = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0d6fb8ff47fc548",
        "isVisible": true,
        "left": "64dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Phone0beacbc0f2c9748 = new kony.ui.Button({
        "height": "50dp",
        "id": "Phone0beacbc0f2c9748",
        "isVisible": true,
        "left": "55dp",
        "onClick": makeCall,
        "skin": "CopyslPhone0ef019ed1781a42",
        "text": "+91-9843624155",
        "top": "229dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Switch0e6a01a83f49e46 = new kony.ui.Switch({
        "height": "32dp",
        "id": "Switch0e6a01a83f49e46",
        "isVisible": true,
        "left": "58dp",
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "slSwitch",
        "top": "378dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var DataGrid0f5ce6bbd4eec48 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Col 1",
            "columnHeaderType": "text",
            "columnID": "col1",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "ide_onClick": null,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Col 2",
            "columnHeaderType": "text",
            "columnID": "col2",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 34,
            "ide_onClick": null,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Col 3",
            "columnHeaderType": "text",
            "columnID": "col3",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "ide_onClick": null,
            "isColumnSortable": false
        }, ],
        "data": [{
            "col1": "RC 11",
            "col2": "calbtn.png",
            "col3": "RC 13"
        }, {
            "col1": "RC 21",
            "col2": "RC 22",
            "col3": "RC 23"
        }, {
            "col1": "RC 31",
            "col2": "RC 32",
            "col3": "RC 33"
        }, {
            "col1": "RC 41",
            "col2": "RC 42",
            "col3": "RC 43"
        }],
        "headerSkin": "slDataGridHead",
        "height": "219dp",
        "id": "DataGrid0f5ce6bbd4eec48",
        "isMultiSelect": false,
        "isVisible": true,
        "left": "29dp",
        "rowAlternateSkin": "slDataGridAltRow",
        "rowCount": 4,
        "rowFocusSkin": "slDataGridFocusedRow",
        "rowNormalSkin": "slDataGridRow",
        "showColumnHeaders": true,
        "top": "320dp",
        "width": "83.25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0d89e64d57bd34d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0d89e64d57bd34d",
        "isVisible": true,
        "left": "51dp",
        "onClick": AS_Button_de2597c6b9a5474e8aea0ec6a9102cf2,
        "skin": "slButtonGlossBlue",
        "text": "Play",
        "top": "157dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0i9871d82f1534f = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "CopyButton0i9871d82f1534f",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e4fa3f108fc94591a896753c19fa3b04,
        "skin": "slButtonGlossBlue",
        "text": "M",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer2.add(Button0ddd4f55079af4b, Button0d6fb8ff47fc548, Phone0beacbc0f2c9748, Switch0e6a01a83f49e46, DataGrid0f5ce6bbd4eec48, Button0d89e64d57bd34d, CopyButton0i9871d82f1534f);
    var TextFieldVal = new com.txtfieldANI.TextFieldVal({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "TextFieldVal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "7dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox",
        "top": "98dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TextFieldVal.visiblelblName = false;
    TextFieldVal.visiblelblNameErr = false;
    TextFieldVal.minCharLen = "3";
    frmHome.add(FlexContainer1, Calendar1, FlexScrollContainer2, TextFieldVal);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "allowVerticalBounce": false,
        "contentSize": {
            "width": "50%"
        },
        "enabledForIdleTimeout": false,
        "headers": [FlexContainer0ade744f6691e49],
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "sknFrmWhite"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};