let Helper = function(){
    this.EnterValue = function(element, value){
        element.clear();
        element.sendKeys(value);
    },

    this.SelectValue = function(element, value){
        element.sendKeys(value);
    },

    this.ClickElement = function(element){
        element.click();
    },

    this.ClickElementMouseMove = function(element){
        browser.actions().mouseMove(element).click().perform();
    },

    this.OpenUrl = function(url){
        browser.get(url);
    },
    
    this.MaximizeBrowser = function(){
        browser.driver.manage().window().maximize();
    }
};

module.exports = new Helper();