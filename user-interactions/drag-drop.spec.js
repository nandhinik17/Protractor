const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/drag_and_drop");
        var sourceElement = element(by.id("column-a"))
        var desElement = element(by.id("column-b"))
        browser.actions().dragAndDrop(sourceElement, desElement).perform(); 
        takeScreenshot("DragAndDrop");  

        
        


    });

});