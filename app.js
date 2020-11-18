const morgan = require('morgan')
const express = require('express')
const app = express()
const path = require('path')



app.use(morgan("dev")); //logging middleware
// app.use(require('method-override')('_method'));
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = app