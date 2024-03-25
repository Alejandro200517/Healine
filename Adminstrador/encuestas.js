module.exports = function (app, conexion) {


    app.get('/encuestas', (req, res) => {
        const query = `SELECT * FROM encuestas;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de encuestas`)
            }
        })
    })

    app.get('/encuestas/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM encuestas WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay encuestas con ese ID`)
            }
        })
    })

    app.post('/encuestas/agregar', (req, res) => {
        const encuesta = {
            documento: req.body.documento,
            email: req.body.email,
            rol: req.body.rol,
            calificacion: req.body.calificacion,
            facilidad: req.body.facilidad,
            seguridad: req.body.seguridad,
            velocidad: req.body.velocidad,
            opinion: req.body.opinion
        };

        // Verificar si ya existe una encuesta para el documento o el email proporcionado
        const queryExistencia = `SELECT * FROM encuestas WHERE documento='${encuesta.documento}' OR email='${encuesta.email}'`;
        conexion.query(queryExistencia, (error, resultado) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            if (resultado.length > 0) {
                return res.status(500).json({ error: 'Ya existe una encuesta registrada para este usuario' });
            }

            // Si no hay encuesta registrada, se procede a agregarla
            const query = `INSERT INTO encuestas (documento, email, rol, calificacion, facilidad, seguridad, velocidad, opinion) VALUES ('${encuesta.documento}', '${encuesta.email}', '${encuesta.rol}', '${encuesta.calificacion}' , '${encuesta.facilidad}' , '${encuesta.seguridad}' , '${encuesta.velocidad}', '${encuesta.opinion}')`;

            conexion.query(query, (error) => {
                if (error) {
                    console.error(error.message);
                    return res.status(500).json({ error: 'Error al registrar la encuesta' });
                }

                res.json('Se registró correctamente la encuesta');
            });
        });
    });

    app.put('/encuestas/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { documento, email, rol, calificacion, facilidad, seguridad, velocidad, opinion } = req.body;

        const query = `
            UPDATE encuestas SET documento='${documento}', email='${email}', rol='${rol}', calificacion='${calificacion}', facilidad='${facilidad}', seguridad='${seguridad}', velocidad='${velocidad}', opinion='${opinion}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la encuesta`);
        });
    });

    app.delete('/encuestas/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM encuestas WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente la encuesta`)
        })
    })
}
