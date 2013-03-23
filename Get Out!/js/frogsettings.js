(function () { 
    "use strict"; 
    var page = WinJS.UI.Pages.define("/default.html", { 
        ready: function scenario3AddSettingsFlyout() { 
        WinJS.Application.onsettings = function (e) { 
            e.detail.applicationcommands = { "about": { title: "About Frogsay", href: "default.html" } }; 
            WinJS.UI.SettingsFlyout.populateSettings(e); 
        }; 
        // Make sure the following is called after the DOM has initialized. Typically this would be part of app initialization 
        WinJS.Application.start(); 
 
        // Display a status message in the SDK sample output region 
        WinJS.log && WinJS.log("Legal notices command and settings flyout added from 3-SettingsFlyout-Legal.html", "samples", "status"); 
    } 
    })})(); 