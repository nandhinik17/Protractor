const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/dropdown");
        var dropdownElement = element(by.id("dropdown"));
        var elementtoBeSelected = element(by.xpath("//option[contains(text(),'Option 1')]"));
        dropdownElement.click();
        elementtoBeSelected.click();

        // dropdownElement.element(by.cssContainingText('option[value="1"]','Option 1')).click();
         takeScreenshot("Dropwdown Select");

        
        


    });

});