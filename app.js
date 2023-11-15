const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/students', function (req, res) {
  var data = [
    {id:1, name:'crazy'},
    {id:2, name:'mhamd'},
    {id:3, name:'ahmad'},
    {id:4, name:'khaled'},
  ]
  res.send(data)
})

app.listen(port)