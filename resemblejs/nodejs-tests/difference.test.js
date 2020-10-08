const resemble = require("../resemble");

describe("compareImages", ()=>{
    test("Compare images basic", async () => {
        var diff = resemble("./screenshots/pallete.js/image -- compare.png")
        .compareTo("./screenshots/pallete.js/image -- compare (1).png")
        .ignoreColors()
        .onComplete(function(data) {
            console.log(data);
            /*{
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
            }*/
        });
    });
    test("Compare images basic", async () => {
        var diff = resemble("./screenshots/pallete.js/image -- compare.png")
        .compareTo("./screenshots/pallete.js/image -- compare (2).png")
        .ignoreColors()
        .onComplete(function(data1) {
            console.log(data1);
            /*{
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
            }*/
        });
    });
    test("Compare images basic", async () => {
        var diff = resemble("./screenshots/pallete.js/image -- compare (1).png")
        .compareTo("./screenshots/pallete.js/image -- compare (2).png")
        .ignoreColors()
        .onComplete(function(data2) {
            console.log(data2);
            /*{
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
            }*/
        });
    });
});

