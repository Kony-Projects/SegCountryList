//startup.js file
var appConfig = {
    appId: "VoiceOver",
    appName: "VoiceOver",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.182",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "VoiceOver"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 730210
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                frmHome.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								