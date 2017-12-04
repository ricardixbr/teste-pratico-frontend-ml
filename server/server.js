'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// Registrando rota
app.use('/api', api);

// Iniciando Servidor
app.listen(port);
console.log('Conexão estabelecida na porta ' + port);
console.log('Para encerrar, digite CTRL/COMMAND + V');