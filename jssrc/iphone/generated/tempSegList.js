function initializetempSegList() {
    flxSegTemp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxSegTemp",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox"
    }, {}, {});
    flxSegTemp.setDefaultUnit(kony.flex.DP);
    var imgCountryList = new kony.ui.Image2({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "150dp",
        "id": "imgCountryList",
        "isVisible": true,
        "left": "24dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 2, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCountryList = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "id": "lblCountryList",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "5dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxSegTemp.add(imgCountryList, lblCountryList);
}