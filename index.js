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


// API Administrador
require('./Adminstrador/roles')(app, conexion);
require('./Adminstrador/turnos')(app, conexion);
require('./Adminstrador/pqrs')(app, conexion);
require('./Adminstrador/registro-login')(app, conexion);
require('./Adminstrador/agenda')(app, conexion);
require('./Adminstrador/sedes')(app, conexion);
require('./Adminstrador/historia')(app, conexion);
require('./Adminstrador/especialidades')(app, conexion);
require('./Adminstrador/citas')(app, conexion);
require('./Adminstrador/formulas')(app, conexion);
require('./Adminstrador/ordenes')(app, conexion);
require('./Adminstrador/examenes')(app, conexion);
require('./Adminstrador/incapacidad')(app, conexion);
require('./Adminstrador/users')(app, conexion);





app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

app.get('/', (req, res) => {
    res.send('API');
});
