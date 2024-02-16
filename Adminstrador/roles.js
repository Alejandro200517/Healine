module.exports = function (app, conexion) {

    app.get('/roles', (req, res) => {
        const query = `SELECT * FROM roles;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de roles`)
            }
        })
    })

    app.get('/roles/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM roles WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay roles con ese ID`)
            }
        })
    })

    app.post('/roles/agregar', (req, res) => {
        const roles = {
            nombreRol: req.body.nombreRol,
        };

        const query = `INSERT INTO roles (nombreRol) VALUES ('${roles.nombreRol}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar EL ROL' });
            }

            res.json('Se registró correctamente el ROL');
        });
    });

    app.put('/roles/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { nombreRol } = req.body;

        const query = `
            UPDATE roles SET nombreRol='${nombreRol}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el rol`);
        });
    });

    app.delete('/roles/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM roles WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente el rol`)
        })
    })
}
