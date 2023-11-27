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
        database:'crud',
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

app.get('/pqrs', (req, res) => {
    const query = `SELECT * FROM pqrs;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/pqrs/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM pqrs WHERE id_pqrs=${id};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/pqrs/agregar', (req, res) => {
    const pqrs = {
      nombre: req.body.nombre,
      email: req.body.email,
      descripcion: req.body.descripcion,
      telefono: req.body.telefono,
      documento: req.body.documento
    };
  
    
    const query = `INSERT INTO pqrs (descripcion, email , telefono, nombre, documento) VALUES ('${pqrs.nombre}', '${pqrs.email}', '${pqrs.descripcion}', '${pqrs.telefono}', '${pqrs.documento}')`;
  
    conexion.query(query, (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Error al agregar la PQRS' });
      }
  
      res.json(`Se agregó correctamente la PQRS`);
    });
  });

app.put('/pqrs/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion, email, telefono, nombre, documento } = req.body;
  
    const query = `UPDATE pqrs SET descripcion='${descripcion}', email='${email}', telefono='${telefono}', nombre='${nombre}', documento='${documento}' WHERE id_pqrs='${id}';`;
  
    conexion.query(query, (error) => {
      if (error) return console.error(error.message);
  
      res.json(`Se actualizó correctamente el usuario`);
    });
  });
  

app.delete('/pqrs/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM pqrs WHERE id_pqrs=${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el usuario`)
    })
})