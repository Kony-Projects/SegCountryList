//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "VoiceOver",
    appName: "VoiceOver",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.182",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "VoiceOver",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializetempSegList();
    initializeTemp1();
    frmAddSegGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmSegGlobals();
    Popup0ha12702b45354eGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 730210
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmAddSeg.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("ar", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;