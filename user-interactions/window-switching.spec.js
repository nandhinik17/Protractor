const { element, browser } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("Window Switching", function () {

    it("Window Switching", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/windows");
        browser.sleep(4000);
        var elementWindow = element(by.xpath("//a[contains(text(),'Click Here')]"));
        elementWindow.click();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]);
            takeScreenshot("Switch Window");
        });
       
        




        
        


    });

});