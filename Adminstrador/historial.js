module.exports = function (app, conexion) {

    // Obtener todos los usuarios
    app.get('/usuarios', (req, res) => {
        const query = `SELECT * FROM usuarios;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de usuarios`)
            }
        })
    })

    // Obtener un usuario por documento
    app.get('/usuarios/documento/:documento', (req, res) => {
        const { documento } = req.params

        const query = `SELECT * FROM usuarios WHERE documento='${documento}';`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado[0])
            } else {
                res.json(`No hay usuarios con ese documento`)
            }
        })
    })

    // Agregar un nuevo usuario
    app.post('/usuarios/agregar', (req, res) => {
        const usuario = {
            documento: req.body.documento,
            primerNombre: req.body.primerNombre,
            primerApellido: req.body.primerApellido,
            // Agregar más campos según sea necesario
        };

        const query = `INSERT INTO usuarios (documento, primerNombre, primerApellido) VALUES ('${usuario.documento}', '${usuario.primerNombre}', '${usuario.primerApellido}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.json('Se registró correctamente el usuario');
        });
    });

    // Actualizar un usuario por documento
    app.put('/usuarios/actualizar/:documento', (req, res) => {
        const { documento } = req.params;
        const { primerNombre, primerApellido } = req.body;

        const query = `
            UPDATE usuarios SET primerNombre='${primerNombre}', primerApellido='${primerApellido}' WHERE documento='${documento}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el usuario`);
        });
    });

    // Eliminar un usuario por documento
    app.delete('/usuarios/borrar/:documento', (req, res) => {
        const { documento } = req.params

        const query = `DELETE FROM usuarios WHERE documento='${documento}';`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente el usuario`)
        })
    })
}
