const { takeScreenshot } = require("../util.js");

var TextValuePage = function(){

    let ele = element.all(by.css('[class="ga-nav"]'));
    
    this.fetchTextValue = function(){
        ele.map((element)=>{
            element.getText().then(function(text){
               console.log(text);
            });
        });

        takeScreenshot("gettext");
    }

}

module.exports = new TextValuePage();