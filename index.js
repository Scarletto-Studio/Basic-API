const express = require('express')
const app = express()
const port = 8000
const users = require('./users')
const body = require('body-parser')

app.use(body.json())

app.use(body.urlencoded({
    extended: true
}))

app.get('/',(req,res) => {
    res.send('<h1>Hello Server with Node</h1>')
})

app.get('/user', function (req, res) {
    res.json(users.findAll())
})

app.get('/user/:id', function (req, res) {
    var id = req.params.id
    res.json(users.findById(id))
})

app.post('/newuser', function (req, res) {
    var json = req.body
    res.send(`Add new ${json.name} already.`)
})

app.listen(port,() => {
    console.log(`Server Run Complete @ port ${port}`)
})