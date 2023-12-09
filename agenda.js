module.exports = function (app, conexion) {
    
    app.get('/agenda', (req, res) => {
        const query = `SELECT * FROM agenda;`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay agenda`)
            }
        })
    })

    app.get('/agenda/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM agenda WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay agenda`)
            }
        })
    })

    app.post('/agenda/agregar', (req, res) => {
        const agenda = {
        fecha: req.body.fecha,
        hora_inicio: req.body.hora_inicio,
        hora_fin: req.body.hora_fin,
        medico: req.body.medico,
        descripcion: req.body.descripcion,
        };
    
        const query = `INSERT INTO agenda (fecha, hora_inicio, hora_fin, medico, descripcion) VALUES ('${agenda.fecha}', '${agenda.hora_inicio}', '${agenda.hora_fin}', '${agenda.medico}', '${agenda.descripcion}')`;
    
        conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al agregar la agenda' });
        }
    
        res.json(`Se agregó correctamente la agenda`);
        });
    });

    app.put('/agenda/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { fecha, hora_inicio, hora_fin, medico, descripcion } = req.body;

        const query = `
            UPDATE agenda SET fecha='${fecha}', hora_inicio='${hora_inicio}', hora_fin='${hora_fin}', medico='${medico}', descripcion='${descripcion}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la agenda`);
        });
    });

    

    app.delete('/agenda/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM agenda WHERE id=${id};`
        conexion.query(query, (error) => {
            if(error) console.error(error.message)

            res.json(`Se eliminó correctamente la agenda`)
        })
    })

    // Agrega esta nueva ruta en tu archivo del servidor

    
}