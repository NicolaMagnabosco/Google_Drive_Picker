using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Threading;
using System.Threading.Tasks;

using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v2;
using Google.Apis.Drive.v2.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;

namespace ImageDrive
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        static String CLIENT_ID = "638235571242-m20229k40rpse0a8p54b6v3pd6rvun30.apps.googleusercontent.com";
        static String CLIENT_SECRET = "t3ZY85JnLG0SYhV9yU1QBbg4";
        static String APP_USER_AGENT = "YourCompany-YourAppname/1.0";
        static String[] SCOPES = new[] { DriveService.Scope.Drive };

        protected void Page_Load(object sender, EventArgs e)
        {
             Task x =  GetCredentials() ;
        }

        /// <summary> Returns the request initializer required for authorized requests. </summary>
        private static async Task<BaseClientService.Initializer> GetCredentials()
        {
            ClientSecrets secrets = new ClientSecrets
            {
                ClientId = CLIENT_ID,
                ClientSecret = CLIENT_SECRET
            };

            IDataStore credentialPersistanceStore = getPersistentCredentialStore();

            UserCredential credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(secrets,
                    SCOPES, getUserId(), CancellationToken.None, credentialPersistanceStore);

            BaseClientService.Initializer initializer = new BaseClientService.Initializer
            {
                HttpClientInitializer = credential,
                ApplicationName = APP_USER_AGENT
            };

            return initializer;
        }

        /// <summary>
        /// Returns an ID string for the current user. IDs are unique within this application.
        /// </summary>
        private static String getUserId()
        {
            // TODO: Generate a unique user ID within your system for this user. The credential
            // data store will use this as a key to look up saved credentials.
            return "1234";
        }

        /// <summary> Returns a persistent data store for user's credentials. </summary>
        private static IDataStore getPersistentCredentialStore()
        {
            // TODO: This uses a local file store to cache credentials. You should replace this with
            // the appropriate IDataStore for your application.
            return new FileDataStore("Drive.Sample.Credentals");
        }
    }
}