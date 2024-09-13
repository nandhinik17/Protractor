const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Window Handling", function(){
    it("valiadte swicthing of windows", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/windows");
        let linkClickHere = element(by.xpath("//a[contains(text(),'Click Here')]"));
        linkClickHere.click();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]);
            takeScreenshot("Switch Window");
        });

       
    })
})