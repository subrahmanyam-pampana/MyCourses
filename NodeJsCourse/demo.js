var cal = require("./calc.js")
var fs =require('fs')

fs.writeFile('calc.js','console.log("New data")',function(err){
    console.log("Data writing Done");
})

// console.log(cal.add(10,20));