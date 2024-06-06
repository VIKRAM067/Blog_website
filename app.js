require('dotenv').config();

const express = require('express');
const ExpressLayouts = require('express-ejs-layouts');

const dbconnect = require('./server/config/dbConnection');

dbconnect();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

// templating the ejs:
app.use(ExpressLayouts);

app.set('view engine','ejs');
app.set('layout','./layouts/main');

app.use('/', require('./server/routes/main'));


app.listen(PORT,()=>{
    console.log(`app is listening on PORT: ${PORT}`);
})