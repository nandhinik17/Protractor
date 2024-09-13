const { browser, element } = require("protractor")

describe("Drag and Drop", function(){
    it("valiadte drag and drop", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/drag_and_drop");
        var sourceElement = element(by.id("column-a"));
        var destinationElement = element(by.id("column-b"));
        browser.actions().dragAndDrop(sourceElement, destinationElement).perform();   
        browser.sleep(5000);
    })
})