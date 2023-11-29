
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'healine',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})


app.post('/registrar/agregar', (req, res) => {
    const registrar = {
        documento: req.body.documento,
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email: req.body.email,
        contrasena: req.body.contrasena, // Corregido aquí
        numero: req.body.numero,
    };

    const queryBuscarDocumento = `SELECT * FROM usuarios WHERE documento = '${registrar.documento}';`;

    console.log('Query de búsqueda:', queryBuscarDocumento);

    conexion.query(queryBuscarDocumento, (error, resultado) => {
        if (error) {
            console.error('Error al ejecutar la consulta de búsqueda:', error.message);
            return res.status(500).json({ error: 'Error al verificar el documento' });
        }

        console.log('Resultado de la búsqueda:', resultado);

        const query = `INSERT INTO usuarios (documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, contrasena, numero) VALUES ('${registrar.documento}', '${registrar.primerNombre}', '${registrar.segundoNombre}', '${registrar.primerApellido}', '${registrar.segundoApellido}', '${registrar.email}', '${registrar.contrasena}', '${registrar.numero}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.json('Se registró correctamente el usuario');
        });
    });
});

