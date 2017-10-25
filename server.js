const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./routes/v1');
// const expressValidator = require('express-validator/check');
const port =  3000;

//initiate app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(expressValidator());


//routes middleware
app.use('/api', v1Routes);


app.listen(port, () => {
    console.log('listen at port no. -> ', port);
});