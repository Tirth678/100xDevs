// Node.js runtime and HTTP
// HTTP: Hyper Text Transfer Protocol
// ECMAScript, JavaScript, Node.js, bun
// specification on which js is based

// writing express code here
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This my first code in express!!')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
