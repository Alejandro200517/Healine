
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

app.get('/turno', (req, res) => {
    const query = `SELECT * FROM turnomedico;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay agenda`)
        }
    })
})

app.get('/turno/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM turnomedico WHERE idturnoMedico=${id};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay agenda`)
        }
    })
})

app.post('/turno/agregar', (req, res) => {
    const turno = {
      tiempEst: req.body.tiempEst,
      numeroTurn: req.body.numeroTurn,
    };
  
    
    const query = `INSERT INTO turnomedico (tiempEst, numeroTurn) VALUES ('${turno.tiempEst}', '${turno.numeroTurn}')`;
  
    conexion.query(query, (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Error al registra el turno' });
      }
  
      res.json(`Se registro correctamente el turno`);
    });
  });

app.put('/turno/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { tiempEst, numeroTurn } = req.body;
  
    const query = `UPDATE turnomedico SET tiempEst='${tiempEst}', numeroTurn='${numeroTurn}' WHERE idturnoMedico='${id}';`;
  
    conexion.query(query, (error) => {
      if (error) return console.error(error.message);
  
      res.json(`Se actualizó correctamente el turno`);
    });
  });
  

app.delete('/turno/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM turnomedico WHERE idturnoMedico=${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el turno`)
    })
})