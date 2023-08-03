const express = require('express')
const app = express()
const hostname = "127.0.0.1"
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:username', (req, res) => {
  res.send(`Hello ${req.params.username}!`)
})

app.get('/org/:orgname', (req, res) => {
  res.send(`Hello World with love from ${req.params.orgname}!`)
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
