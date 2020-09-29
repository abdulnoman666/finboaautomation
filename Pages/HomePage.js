let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let HomePage = function(){
    let btnNewCase = element(by.css('[ng-click="startNewDispute()"]'));


    this.ClickNewCaseButton = function(){
        HelperFunction.ClickElement(btnNewCase);
    }

}
module.exports = new HomePage();