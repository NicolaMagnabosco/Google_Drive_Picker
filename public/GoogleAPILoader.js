/*
* Author: Nick Magnabosco
* Date: 13/08/2015
* Project: Sample Google Drive Picker
* Licenced GPLv2
*/

/* BEFORE RUNNING
    1. Modify the 'client_id' with your Client ID  --> https://console.developers.google.com/
    2. Modify the developer_key with your developer key (see link point 1) 
*/
var oauthtoken;
var client_id = 'REPLACE_WITH_YOUR_CLIENT_ID.apps.googleusercontent.com';
var scope = ['https://www.googleapis.com/auth/drive'];
var developer_key = 'REPLACE_WITH_YOUR_DEVELOPER_KEY';

function onApiLoad() {
    gapi.load('auth', {'callback':onAuthApiLoad});
    gapi.load('picker');
    // alert('onApiLoad() called'); --> ok, it is called
}
function onAuthApiLoad() {
    //alert('onAuthApiLoad() called');
    window.gapi.auth.authorize({
        'client_id': client_id,
        'scope' : scope
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        oauthtoken = authResult.access_token;
        createPicker();
    }

}
// function to create the Picker
function createPicker() {
            
    // we cab enable/disable picker's features by adding IE '.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)'
    // picker class documentation available here: https://developers.google.com/picker/docs/reference#Feature
    var picker = new google.picker.PickerBuilder();

    picker.addView(new google.picker.DocsUploadView()) // create a view in the UI form
        .addView(new google.picker.DocsView())
        .setOAuthToken(oauthtoken)
        .setDeveloperKey(developer_key)
        .setCallback(pickerCallback) // designate a callback function
        .build()
        .setVisible(true);            
}

function pickerCallback(data) {
    // check if the action is picked
    if(data.action == google.picker.Action.PICKED) {
        //alert('URL:' + data.docs[0].url);
        document.getElementById("status_value").innerText = 'Picked';
    }
    if (data.action == google.picker.Action.CANCEL) {
        document.getElementById("status_value").innerText = 'Canceled';
    }
}
