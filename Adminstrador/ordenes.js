module.exports = function (app, conexion) {

    app.get('/ordenes', (req, res) => {
        const query = `SELECT * FROM ordenes;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de ordenes`)
            }
        })
    })

    app.get('/ordenes/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM ordenes WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay ordenes con ese ID`)
            }
        })
    })

    app.post('/ordenes/agregar', (req, res) => {
        const orden = {
            paciente: req.body.paciente,
            formula: req.body.formula,
            diagnostico: req.body.diagnostico,
            tratamiento: req.body.tratamiento
        };

        const query = `INSERT INTO ordenes (paciente, formula, diagnostico, tratamiento) VALUES ('${orden.paciente}', '${orden.formula}', '${orden.diagnostico}', '${orden.tratamiento}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar la orden' });
            }

            res.json('Se registró correctamente la orden');
        });
    });

    app.put('/ordenes/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { paciente, formula, diagnostico, tratamiento } = req.body;

        const query = `
            UPDATE ordenes SET paciente='${paciente}', formula='${formula}', diagnostico='${diagnostico}', tratamiento='${tratamiento}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la orden`);
        });
    });

    app.delete('/ordenes/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM ordenes WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente la orden`)
        })
    })
}
