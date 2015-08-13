# ImageDrive
A simple Google Drive Picker application with authentication on client side (Javascript).

## Requirements:
The main goal of the application is being simply to understand and to re-use. For these reason I've used the following technologies:
  - NodeJS Server with Express.js framework: this is a very basic server and should be easy to understand. However, you can start using the app without considering the server side, since all the important "stuff" is done on the client side. In order to run the application, install NodeJS (https://nodejs.org/).
  - Authentication on client side with Javascript
  - A simple HTML page
That's all you need before starting.

## 1 - Setting up a new Google Drive App
Before running the application you need to create a new Drive application. Browse to https://console.developers.google.com/ and do the following steps to set up your application:

### 1.1 - Creating a new project:
  1. Click on "Create Project" and input a name for you new application

### 1.2 - Setting up the project
  1. Select "APIs & auth > APIs"
  2. Click on "Create new Client ID" and select "Web Application"
  3. Fill the form with a product name
  4. Insert "http://localhost:YOUR_PORT_NO/" in the "Authorized JS Engine" (change it with the correct port)
  5. Insert "http://localhost/authorize" in the "Authorized redirect URIs"
  6. Click on "Create client id ''aadfa''//fghjf//

### 1.3 - Enabling the required APIs:
  1. Select APIs & auth > APIs
  2. Enable "Drive API" and "Google Picker API"
