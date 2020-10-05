let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let CustomerSearch = function(){
    let fldCustomerName = element(by.model('searchCustomerModel.customerName'));
    let btnSearch = element(by.css('[ng-click="searchCustomers()"]'));
    let btnSelectCustomer = element(by.css('[ng-click="selectCust(cust)"]'));

    this.EnterCustomerName = function(value){
        HelperFunction.EnterValue(fldCustomerName, value);
    },

    this.ClickSearchButton = function(){
        HelperFunction.ClickElement(btnSearch);
    },

    this.ClickSelectCustomerButton = function(){
        HelperFunction.ClickElement(btnSelectCustomer);
    }

}
module.exports = new CustomerSearch();