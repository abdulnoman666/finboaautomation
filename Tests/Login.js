let HelperFunction = require('../HelperFunction/HelperFunctions.js');
let Login = require('../Pages/LoginPage.js');
let HomePage = require('../Pages/HomePage.js');
let DisputeSubmission = require('../Pages/DisputeSubmissionPage.js');
let AddTransaction = require('../Pages/AddTransactionPage');
let SelectTransaction = require('../Pages/SelectTransactionPage.js');
describe('Dispute Submission Debit Card', function(){
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    beforeAll(function() {
        HelperFunction.OpenUrl('https://disputev4.azurewebsites.net/#/login');
        HelperFunction.MaximizeBrowser();
        Login.EnterUsername('abdul@finboa.com');
        Login.EnterPassword('P@ssword456');
        Login.ClickLoginButton();

        browser.controlFlow().wait(getLastEmail()).then(function (email) {
            expect(email.subject).toEqual("FINBOA - Verification Code");
            // extract registration code from the email message
            var pattern = /Your Login Authentication Code is: (\w+)/g;
            const regCode = pattern.exec(email['html'])[1];
            console.log(regCode);
            console.log(email['headers'].to);
            console.log(email['headers'].from);
            console.log(email['subject']);
            Login.EnterAuthenticationCode(regCode);
            Login.ClickAuthenticateButton();
      });
})

it('Debit Card - Manual Transactions - Send to Customer', function(doneFn){
    browser.ignoreSynchronization =false;

    HomePage.ClickNewCaseButton();
    
    DisputeSubmission.SelectTransactionMethod("Debit Card");
    DisputeSubmission.ClickFraudRadioButton();
    DisputeSubmission.EnterCardNumber("1001");
    DisputeSubmission.ClickCardNumber();
    DisputeSubmission.EnterName("Abdul Noman - Automated");
    DisputeSubmission.EnterEmail("Abdul@finboa.com");
    DisputeSubmission.EnterPhone("03325166674");
    DisputeSubmission.EnterDetails("Details of Debit Card - Manual Transactions - Send to Customer - Automated");
    DisputeSubmission.ClickAddTransactionButton();
    
    AddTransaction.EnterAmount("5000");
    AddTransaction.EnterDisputedAmount("1000");
    AddTransaction.EnterMerchant("Nike - Automated Test");
    AddTransaction.EnterDetails("Details - Automated Test");
    AddTransaction.ClickForeignTransactionCheckbox();
    AddTransaction.ClickPOSCheckbox();
    AddTransaction.ClickTransactionPostedCheckbox();
    AddTransaction.ClickSaveButton();
    
    DisputeSubmission.ClickSendToCustomerButton();
    browser.sleep(20000);
    doneFn();
});

it('Debit Card - Select Transactions - Send to Customer', function(doneFn){
    browser.ignoreSynchronization =false;

    HomePage.ClickNewCaseButton();
    
    DisputeSubmission.SelectTransactionMethod("Debit Card");
    DisputeSubmission.ClickFraudRadioButton();
    DisputeSubmission.EnterCardNumber("1001");
    DisputeSubmission.ClickCardNumber();
    DisputeSubmission.EnterName("Abdul Noman - Automated");
    DisputeSubmission.EnterEmail("Abdul@finboa.com");
    DisputeSubmission.EnterPhone("03325166674");
    DisputeSubmission.EnterDetails("Details of Debit Card - Select Transactions - Send to Customer - Automated");
    DisputeSubmission.ClickSelectTransactionButton();
    
    SelectTransaction.ClickPlusButton();
    SelectTransaction.ClickCloseButton();
    
    DisputeSubmission.ClickSendToCustomerButton();
    browser.sleep(20000);
    doneFn();
});

})

function getLastEmail() {
    var deferred = protractor.promise.defer();
    console.log("Waiting for an email...");

    mailListener.on("mail", function(mail){
        deferred.fulfill(mail);
    });
    return deferred.promise;
};