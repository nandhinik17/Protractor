const { takeScreenshot } = require('./../util.js');
const {logBrowserConsole } = require('./../log-file.js');
describe("Login functionality", function () {
    it("Verify the email field of login", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        var protractortext = element(by.xpath("//h1[contains(text(),'Protractor Tutorial')]"));
        protractortext.click();
        logBrowserConsole('exampleTestLog');
        takeScreenshot("Protractor-Click");
        var ecommerceText = element(by.xpath("//h5[contains(text(),'eCommerce')]"));
        const expectedValue = "Protractor Tutorial";
        expect(protractortext.getText()).toEqual(expectedValue);
        takeScreenshot("Protractor-Text");

        element(by.xpath("//a[contains(text(),'Shop')]")).click();
        browser.sleep(20000);
       
       







    });



});