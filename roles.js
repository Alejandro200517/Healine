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

app.get('/roles', (req, res) => {
    const query = `SELECT * FROM roles;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/roles/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM roles WHERE id_roles=${id};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/roles/agregar', (req, res) => {
    const roles = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
  
    
    const query = `INSERT INTO roles (nombre, descripcion) VALUES ('${roles.nombre}', '${roles.descripcion}')`;
  
    conexion.query(query, (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Error al registra el rol' });
      }
  
      res.json(`Se registro correctamente el ROL`);
    });
  });

app.put('/roles/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion, nombre } = req.body;
  
    const query = `UPDATE roles SET nombre='${nombre}', descripcion='${descripcion}' WHERE id_roles='${id}';`;
  
    conexion.query(query, (error) => {
      if (error) return console.error(error.message);
  
      res.json(`Se actualizó correctamente el ROL`);
    });
  });
  

app.delete('/roles/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM roles WHERE id_roles=${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el ROL`)
    })
})