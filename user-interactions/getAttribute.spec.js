const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_attributes.asp");
        var ele = element.all(by.tagName('a'));
        ele.map((element) => {
            element.getAttribute('href').then(function (link) {
                console.log(link);
            });
        });
        ele.count().then(function (countValue) {
            console.log("Count of the Link " + countValue);
        });

        // console.log(await ele.getAttribute('href'));

        takeScreenshot("Attribute");





    });

});