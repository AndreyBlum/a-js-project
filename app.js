// Imports
require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.url

mongoose.connect(url)

const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);

app.get('', (req, res) => {
    res.render('index')
})

app.get('/levi', (req, res) => {
    res.render('levi')
})

app.get('/about', (req, res) => {
    res.render('about')
})

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))