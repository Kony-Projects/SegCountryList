function addWidgetsfrmAddSeg() {
    frmAddSeg.setDefaultUnit(kony.flex.DP);
    var segAdd = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }, {
            "imgCountryList": "imagedrag.png",
            "lblCountryList": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segAdd",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxSegTemp,
        "scrollingEvents": {
            "onReachingEnd": AS_Segment_d12c421bf1f34e95a85069db3129d64d
        },
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxSegTemp": "flxSegTemp",
            "imgCountryList": "imgCountryList",
            "lblCountryList": "lblCountryList"
        },
        "widgetSkin": "Copyseg0h427844c44734b",
        "width": "100%",
        "zIndex": 1,
        "enableReordering": false
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmAddSeg.add(segAdd);
};

function frmAddSegGlobals() {
    frmAddSeg = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAddSeg,
        "enabledForIdleTimeout": false,
        "id": "frmAddSeg",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_da2f06840898437690d226ee5261971f,
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