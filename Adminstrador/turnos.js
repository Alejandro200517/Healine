
module.exports = function (app, conexion) {

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
}