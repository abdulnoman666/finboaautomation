let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let SelectTransaction = function(){
    let btnPlus = element(by.css('[ng-click="selectTransaction($event, tran)"]'));
    let btnClose = element(by.css('[ng-click="close()"]'));

    this.ClickPlusButton = function(){
        HelperFunction.ClickElement(btnPlus);
    },

    this.ClickCloseButton = function(){
        HelperFunction.ClickElement(btnClose);
    }
}

module.exports = new SelectTransaction();
