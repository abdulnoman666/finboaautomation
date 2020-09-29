let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let AddTransaction = function(){
    let fldTransactionDate = element(by.model('pickerDate'));
    let fldAmount = element(by.model('transaction.amount'));
    let fldDisputedAmount = element(by.model('transaction.disputedAmount'));
    let fldMerchant = element(by.model('transaction.merchant'));
    let fldDetails = element(by.model('transaction.detail'));
    let chkbxForeignTransaction = element(by.model('transaction.foreignTransaction'));
    let chkbxPOS = element(by.model('transaction.pos'));
    let chkbxTransactionPosted = element(by.model('transaction.posted'));
    let btnSave = element(by.css('[ng-click="ok()"]'));

    this.EnterTransactionDate = function(value){
        HelperFunction.EnterValue(fldTransactionDate, value);
    },

    this.EnterAmount = function(value){
        HelperFunction.EnterValue(fldAmount, value);
    },

    this.EnterDisputedAmount = function(value){
        HelperFunction.EnterValue(fldDisputedAmount, value);
    },

    this.EnterMerchant = function(value){
        HelperFunction.EnterValue(fldMerchant, value);
    },

    this.EnterDetails = function(value){
        HelperFunction.EnterValue(fldDetails, value);
    },

    this.ClickForeignTransactionCheckbox = function(){
        HelperFunction.ClickElement(chkbxForeignTransaction);
    },

    this.ClickPOSCheckbox = function(){
        HelperFunction.ClickElement(chkbxPOS);
    },

    this.ClickTransactionPostedCheckbox = function(value){
        HelperFunction.ClickElement(chkbxTransactionPosted);
    },

    this.ClickSaveButton = function(){
        HelperFunction.ClickElement(btnSave);
    }
}
module.exports = new AddTransaction();