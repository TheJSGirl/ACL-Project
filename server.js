const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./routes/v1');
const port =  3000;

//initiate app
const app = express();

//middleware
app.use('/api', v1Routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log('listen at port no. -> ', port);
});