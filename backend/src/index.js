const express = require('express');

const mongooose = require('mongoose');

const routes = require('./routes');


const app = express();

mongooose.connect('mongodb+srv://projetos:projetos2020@projetos-avdnj.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());
app.use(routes);

app.listen(3333);