function addWidgetsPopup0ha12702b45354e() {
    var Button0d47ce7e069514b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button0d47ce7e069514b",
        "isVisible": true,
        "onClick": AS_Button_gf4860ba073f43eb94a945fc4612e6f5,
        "skin": "slButtonGlossBlue",
        "text": "close"
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
    initializeVBox0f3565f43138642 && initializeVBox0f3565f43138642();
    var Segment0c3e8614c5a1a47 = new kony.ui.SegmentedUI2({
        "data": [{
            "Button0h4054566dbf440": "Button"
        }, {
            "Button0h4054566dbf440": "Button"
        }, {
            "Button0h4054566dbf440": "Button"
        }, {
            "Button0h4054566dbf440": "Button"
        }, {
            "Button0h4054566dbf440": "Button"
        }, {
            "Button0h4054566dbf440": "Button"
        }],
        "groupCells": false,
        "id": "Segment0c3e8614c5a1a47",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": VBox0f3565f43138642,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Button0h4054566dbf440": "Button0h4054566dbf440"
        }
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    Popup0ha12702b45354e.add(Button0d47ce7e069514b, Segment0c3e8614c5a1a47);
};

function Popup0ha12702b45354eGlobals() {
    Popup0ha12702b45354e = new kony.ui.Popup({
        "addWidgets": addWidgetsPopup0ha12702b45354e,
        "id": "Popup0ha12702b45354e",
        "isModal": false,
        "skin": "CopyslPopup0b2e7c5e1bb3445",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendTop": false,
        "footerOverlap": false,
        "headerOverlap": true,
        "inTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionMoveIn"
        },
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionMoveOut"
        }
    });
};