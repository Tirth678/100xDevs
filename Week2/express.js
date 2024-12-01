// Node.js runtime and HTTP
// HTTP: Hyper Text Transfer Protocol
// ECMAScript, JavaScript, Node.js, bun
// scripting language specification on which js is based

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
