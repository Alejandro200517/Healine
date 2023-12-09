module.exports = function (app, conexion) {

    // Obtener todas las sedes
    app.get('/sedes', (req, res) => {
        const query = `SELECT * FROM sedes;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de sedes`)
            }
        })
    })

    // Obtener una sede por ID
    app.get('/sedes/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM sedes WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay sedes con ese ID`)
            }
        })
    })

    // Agregar una nueva sede
    app.post('/sedes/agregar', (req, res) => {
        const sede = {
            nombreSede: req.body.nombreSede,
            direccion: req.body.direccion,
            telefonoSede: req.body.telefonoSede,
            tipoServicio: req.body.tipoServicio
        };

        const query = `INSERT INTO sedes (nombreSede, direccion, telefonoSede, tipoServicio) VALUES ('${sede.nombreSede}', '${sede.direccion}', '${sede.telefonoSede}', '${sede.tipoServicio}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar la sede' });
            }

            res.json('Se registró correctamente la sede');
        });
    });

    // Actualizar una sede por ID
    app.put('/sedes/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { nombreSede, direccion, telefonoSede, tipoServicio } = req.body;

        const query = `
            UPDATE sedes SET nombreSede='${nombreSede}', direccion='${direccion}', telefonoSede='${telefonoSede}', tipoServicio='${tipoServicio}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la sede`);
        });
    });

    // Eliminar una sede por ID
    app.delete('/sedes/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM sedes WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente la sede`)
        })
    })
}
