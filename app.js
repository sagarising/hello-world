const express = require('express')
const app = express()
const hostname = "127.0.0.1"
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("User requested")
})

app.get('/user/:username', (req, res) => {
  res.send(`Hello ${req.params.username}!`)
  console.log("User requested")
})

app.get('/org/:orgname', (req, res) => {
  res.send(`Hello World with love from ${req.params.orgname}!`)
  console.log("User requested")
})

app.get('/user/:username/org/:orgname', (req, res) => {
  res.send(`Hello ${req.params.username} with love from ${req.params.orgname}!`)
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
