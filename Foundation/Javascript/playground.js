const fs = require("fs")
function readFunction(){
    return new Promise(function(resolve){
        fs.readFile("index.html", "utf-8", function(err, data){
            console.log(data);
        });
    })
}