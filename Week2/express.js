// Node.js runtime and HTTP
// HTTP: Hyper Text Transfer Protocol
// ECMAScript, JavaScript, Node.js, bun
// scripting language specification on which js is based

// writing express code here
const exrpess = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res){
    res.send('hello world')
})
app.listen(port)
