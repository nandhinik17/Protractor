const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/upload");
        var chooseElement = element(by.id('file-upload'));
        chooseElement.sendKeys('C:/Users/Nandhini/Documents/QA Study Docs/Protractor/notes.txt');
        takeScreenshot("File Upload");

        
        


    });

});