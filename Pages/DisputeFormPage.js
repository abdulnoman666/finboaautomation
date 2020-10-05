let HelperFunction = require("../HelperFunction/HelperFunctions.js");
let DisputeForm = function(){
    let rdbtnNo = element(by.css('[id="inPossession"][ng-value="2"]'));
    let rdbtnLost = element(by.css('[id="lostStolen"][ng-value="1"]'));
    let fldDebitCardDiscoveredLostStolen = element(by.css('[id="dateStolen"][ng-model="pickerDate"]'));

    this.ClickNoRadioButton = function(){
        HelperFunction.ClickElement(rdbtnNo);
    },

    this.ClickLostRadioButton = function(){
        HelperFunction.ClickElement(rdbtnLost);
    },

    this.EnterDateDebitCardDiscoveredLostStolen = function(value){
        HelperFunction.SelectValue(fldDebitCardDiscoveredLostStolen, value);
    }

}
module.exports = new DisputeForm();