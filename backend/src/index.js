const express = require('express');
const mongooose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setubWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setubWebsocket(server);

mongooose.connect('mongodb+srv://projetos:projetos2020@projetos-avdnj.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
//app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

server.listen(3333);