const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/hovers");
        var hoverElement=element(by.xpath("(//img[contains(text(),'Hover over the image for additional information')]//following::div)[1]"));
        browser.actions().mouseMove(hoverElement).perform();
        browser.sleep(3000);
        takeScreenshot("Hover Element");


    });

});