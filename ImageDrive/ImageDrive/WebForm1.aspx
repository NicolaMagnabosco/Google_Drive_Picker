<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="ImageDrive.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <script>
        function onApiLoad() {
            gapi.load('auth', {'callback':onAuthApiLoad});
            gapi.load('piker');
        }
        function onAuthApiLoad() {
            window.gapi.auth.authorize({
                'client_id': '638235571242-m20229k40rpse0a8p54b6v3pd6rvun30.apps.googleusercontent.com',
                'scope' : ['https://www.googleapis.com/auth/drive'],
            }, handleAuthResult);
        }
        // function to create the Picker
        function createPicker() {
            // we cab enable/disable picker's features by adding IE '.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)'
            // picker class documentation available here: https://developers.google.com/picker/docs/reference#Feature
            var picker = new google.picker.PickerBuilder()
                .addView(new google.picker.DocsUploadView()) // create a view in the UI form
                .addView(new google.piker.DocsView())
                .setOAuthToken(oauthToken)
                .setDeveloperKey('638235571242-m20229k40rpse0a8p54b6v3pd6rvun30.apps.googleusercontent.com')
                .setCallback(pickerCallback) // designate a callback function
                .build();
            piker.setVisible(true);
        }

        function pickerCallback(data) {
            // check if the action is picked
            if(data.action == google.picker.Action.PICKED) {
                alert('URL:' + data.docs[0].url)
            }	
        }
    </script>
    <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>
    <form id="form1" runat="server">
    <div>
            <h1>Google Dive API with ASP.NET</h1>
    </div>
    </form>
</body>
</html>
