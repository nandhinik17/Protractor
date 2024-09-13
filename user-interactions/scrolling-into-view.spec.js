const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_examples.asp");
        browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        // const scrollToElement = element(by.xpath("//h3[contains(text(),'More HTML Examples')]")); 

        // browser.executeScript('arguments[0].scrollIntoView(true);', scrollToElement);
        takeScreenshot("Scroll");


    });

});