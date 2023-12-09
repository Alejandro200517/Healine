// index.js
const express = require('express');
const bodyParser = require('body-parser');
const conexion = require('./conexion');

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

const PUERTO = 3000;

require('./registrar')(app, conexion);
require('./roles')(app, conexion);
require('./turnos')(app, conexion);
require('./pqrs')(app, conexion);
require('./usuarios')(app, conexion);
require('./agenda')(app, conexion);
require('./sedes')(app, conexion);
require('./historia')(app, conexion);
require('./especialidades')(app, conexion);
require('./citas')(app, conexion);



app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

app.get('/', (req, res) => {
    res.send('API');
});
