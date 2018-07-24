function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f5b4bedd0cf045 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0f5b4bedd0cf045",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b986bbe6ab8b49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f5b4bedd0cf045.setDefaultUnit(kony.flex.DP);
    var Button0a019f6ad4d3242 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0a019f6ad4d3242",
        "isVisible": true,
        "left": "46dp",
        "onClick": AS_Button_c036d677ec334cb4b3d265ea163dce12,
        "skin": "CopyslButtonGlossBlue0cd2b4710b3db47",
        "text": "Button",
        "top": "95dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "CopyslButtonGlossBlue0a64d049345414e"
    });
    var Calendar0ba34b13950aa49 = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateComponents": [13, 6, 2018, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 13,
        "formattedDate": "13/06/2018",
        "height": "40dp",
        "hour": 0,
        "id": "Calendar0ba34b13950aa49",
        "isVisible": true,
        "left": "975dp",
        "minutes": 0,
        "month": 6,
        "seconds": 0,
        "skin": "slCalendar",
        "top": "80%",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "260dp",
        "year": 2018,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "noOfMonths": 1
    });
    FlexContainer0f5b4bedd0cf045.add(Button0a019f6ad4d3242, Calendar0ba34b13950aa49);
    var Button0df28e5d4e20949 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0df28e5d4e20949",
        "isVisible": true,
        "left": "139dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "191dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(FlexContainer0f5b4bedd0cf045, Button0df28e5d4e20949);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0c6756e8af86248"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};