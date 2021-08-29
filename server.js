const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const webRoutes = require('./routes/web')
const expressLayouts = require('express-ejs-layouts')

//Static
app.use(express.static('public'));
//view engine

app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use(webRoutes)


//Listing on Port
app.listen(port , ()=> console.log('app is running on ' + port))