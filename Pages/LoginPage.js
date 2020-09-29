let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let Login = function(){
    let fldUsername = element(by.css('[data-ng-model="loginData.userName"]'));
    let fldPassword = element(by.css('[data-ng-model="loginData.password"]'));
    let btnLogin = element(by.css('[data-ng-click="login()"]'));
    let fldAuthentication = element(by.model('otp.value'));
    let btnAuthenticate = element(by.css('[ng-click="otp.auth(form.$valid)"]'));
    

    this.EnterUsername = function(username){
        HelperFunction.EnterValue(fldUsername, username);
    },

    /*this.getUrl = function(url){
        browser.get(url);
    },*/

    this.EnterPassword = function(password){
        //fldPassword.sendKeys(password);
        HelperFunction.EnterValue(fldPassword, password);
    },

    this.EnterAuthenticationCode = function(code){
        //fldAuthentication.sendKeys(code);
        HelperFunction.EnterValue(fldAuthentication, code);
    },

    this.ClickAuthenticateButton = function(){
        //btnAuthenticate.click();
        HelperFunction.ClickElement(btnAuthenticate);
    },

    this.ClickLoginButton = function(){
        //btnLogin.click();
        HelperFunction.ClickElement(btnLogin);
    }
}

module.exports = new Login();

