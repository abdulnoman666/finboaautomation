var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {args: ['--window-size=1920,1080'] }
  },
  allScriptsTimeout: 120000,
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../Tests/Login.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  // Setup the report before any tests start
beforeLaunch: function() {

  return new Promise(function(resolve){
    reporter.beforeLaunch(resolve);
  });
},

// Assign the test reporter to each running instance

onPrepare: function () {
  var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    
  jasmine.getEnv().addReporter(reporter);
  var MailListener = require("mail-listener2");

  // here goes your email connection configuration
  var mailListener = new MailListener({
      username: "abdul@finboa.com",
      password: "$Pak35tan$",
      host: "imap.gmail.com",
      port: 993, // imap port 
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
      mailbox: "INBOX", // mailbox to monitor 
      searchFilter: ["UNSEEN", ["FROM", "support@finboa.com"],["SUBJECT","FINBOA - Verification Code"]], 
      connTimeout: 10000,
      authTimeout: 5000, 
      markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
      fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
      mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib. 
      attachments: true, // download attachments as they are encountered to the project directory 
      attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
  });

  mailListener.start();

  mailListener.on("server:connected", function(){
      console.log("Mail listener initialized");
  });

  global.mailListener = mailListener;
},

// Close the report after all tests finish
afterLaunch: function(exitCode) {
  return new Promise(function(resolve){
    reporter.afterLaunch(resolve.bind(this, exitCode));
  
  });
},

onCleanUp: function () {
  mailListener.stop();
}
}
