const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Fetch the Text From UI", function () {
    it("valiadte and Fetch the from UI", async  function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_attributes.asp");
        browser.sleep(5000);
        let textElement = element(by.xpath("//span[contains(text(),'Attributes')]"));
        
        //1st Method
        // textElement.getText().then(function(text){
        //     console.log(text);
        // });
        //2nd Method Use await in the code and async in the function
        //console.log(await textElement.getText() )


        //to fetch Multiple Text Values From the UI

        let navElement = element.all(by.css('.ga-nav')); // it will have 42 elements
        // navElement.map((nelement)=>{   //as like for loop use it when we want process multiple data
        //     nelement.getText().then(function(text){ //normal code
        //         console.log(text);
               
        //     })
        // });
       var count = await navElement.count();
      //  for(let i=0;i<count; i++){
      //   console.log(await (await navElement).at(i).getText())
      //  }
      for(var i=1; i<count;i++){
        console.log(await (await element(by.xpath("(//a[contains(@class,'ga-nav')])["+i+"]"))).getText());
      }
      
        // navElement.count().then(function(countValue){

        //     console.log("Navigation Count is "+ countValue);
        // })

    })
})