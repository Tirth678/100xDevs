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
const port = 3000
const app = express();


app.get('/', function(req, res){
    res.send('hello world')
    res.json({
        name: "tirth",
        age: 21,
        roll: 326
    })
})

app.listen(port)
