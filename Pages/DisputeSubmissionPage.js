let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let DisputeSubmission = function(){
    let drpdwnTransactionMethod = element(by.model('selectedWorkflow'));
    let fldName = element(by.model('customerDispute.customerName'));
    let fldEmail = element(by.model('customerDispute.email'));
    let fldPhone = element(by.model('customerDispute.phone'));
    let fldDetails = element(by.model('customerDispute.disputeReason'));
    let rdBtnFraud = element(by.css('[ng-value="1"]'));
    let rdBtnNonFraud = element(by.css('[ng-value="2"]'));
    let fldCardNumber = element(by.model('selectedCustomer'));
    let btnNewCase = element(by.css('[ng-click="startNewDispute()"]'));
    let btnAddTransaction = element(by.css('[ng-click="addTransaction(selectedWorkflow.transactionType)"]'));
    let cardNumber = element(by.css('[ng-bind-html-unsafe="match.model.cardNumber | typeaheadHighlight:query"]'));
    let btnSelectTransaction = element(by.css('[ng-click="openTransactions()"]'));
    let btnSearchByName = element(by.css('[title="Search by name"]'));

    this.ClickNewCaseButton = function(){
        HelperFunction.ClickElement(btnNewCase);
    },

    this.SelectTransactionMethod = function(value){
        HelperFunction.SelectValue(drpdwnTransactionMethod, value);
    },

    this.EnterName = function(value){
        HelperFunction.EnterValue(fldName, value);
    },

    this.EnterEmail = function(value){
        HelperFunction.EnterValue(fldEmail, value);
    },

    this.EnterPhone = function(value){
        HelperFunction.EnterValue(fldPhone, value);
    },

    this.EnterDetails = function(value){
        HelperFunction.EnterValue(fldDetails, value);
    },

    this.ClickFraudRadioButton = function(){
        HelperFunction.ClickElement(rdBtnFraud);
    },

    this.ClickNonFraudRadioButton = function(){
        HelperFunction.ClickElement(rdBtnNonFraud);
    },

    this.EnterCardNumber = function(value){
        HelperFunction.EnterValue(fldCardNumber, value);
    },

    this.ClickAddTransactionButton = function(){
        HelperFunction.ClickElement(btnAddTransaction);
    },

    this.ClickCardNumber = function(){
        HelperFunction.ClickElement(cardNumber);
    },

    this.ClickSelectTransactionButton = function(){
        HelperFunction.ClickElement(btnSelectTransaction);
    },

    this.ClickSearchByNameButon = function(){
        HelperFunction.ClickElement(btnSearchByName);
    },

    this.ClickNextButton = function(){
        let element1 = element.all(by.css('[ng-click="saveDisputes()"]')).get(1);
        browser.actions().mouseMove(element1).perform();
        element1.click();
    }
}
module.exports = new DisputeSubmission();