// Node.js runtime and HTTP
// HTTP: Hyper Text Transfer Protocol
// ECMAScript, JavaScript, Node.js, bun
// scripting language specification on which js is based
// whoever wants to make a compiler for JS, keep this things in mind said by ECMA


//JS:
// is a scripting lang that conforms to ECMAScript specification, most widely used and implementation of ECMAScript
// JS includes parts which are not part of ECMA standards(setTimeout, DOM, fs.readFile)

// HTTP: Hyper text transfer protocol
// protocol defines for machines to communicate
// how froentend communicates with backend

// DNS Resolution: Domain Name Serivice Resolution

// writing express code here
const express = require('express');
const { a } = require('motion/react-client');
const app = express();
const port = 3000;

app.get("/route-handler", function(req, res){
    res.json({
        name: "Kirat",
        age: 12

    })
})

// ifconfig
app.get("/cal",function(req,res){
    console.log("This are headers\n");
    res.json({msg: "2+2=4"})
    console.log(`${msg}`)
})


app.get("/home", function(req, res){
    res.get("Welcome to the home page\n");
    res.json({
        home: "this is home",
        nothing: "this is meant to be nothing",
        nothing2: "this is meant to be nothing2",
        age: 12
    })

})
app.get('/', function(req, res){
    res.send("Hello world\n");
    req.send("Hello this is an error in your code\n");
    
});
app.listen(port, function(){
    console.log(`Example of app listening on port ${port}`);
});