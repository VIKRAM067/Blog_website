require('dotenv').config();

const express = require('express');
const ExpressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

// templating the ejs:
app.use(ExpressLayouts);
app.set('layouts','./layouts/main');
app.set('view engine','ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log(`app is listening on PORT: ${PORT}`);
})