const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Scroll Element", function(){
    it("valiadte Scroll Element", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_examples.asp");
        let scrollElement = element(by.xpath("//h3[text()='More HTML Examples']"));
        browser.executeScript('arguments[0].scrollIntoView(true);',scrollElement);
        browser.sleep(4000);
        takeScreenshot("Scroll The Page");
    })
})