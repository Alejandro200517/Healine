module.exports = function (app, conexion) {

    app.get('/formulas', (req, res) => {
        const query = `SELECT * FROM formulas;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de formulas`)
            }
        })
    })

    app.get('/formulas/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM formulas WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay formula con ese ID`)
            }
        })
    })

    app.post('/formulas/agregar', (req, res) => {
        const formula = {
            nombreMedicamento: req.body.nombreMedicamento,
            tratamiento: req.body.tratamiento,
            diagnostico: req.body.diagnostico,
            instrucciones: req.body.instrucciones
        };

        const query = `INSERT INTO formulas (nombreMedicamento, tratamiento, diagnostico, instrucciones) VALUES ('${formula.nombreMedicamento}', '${formula.tratamiento}', '${formula.diagnostico}', '${formula.instrucciones}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar la formula' });
            }

            res.json('Se registró correctamente la formula');
        });
    });

    app.put('/formulas/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { nombreMedicamento, tratamiento, diagnostico, instrucciones } = req.body;

        const query = `
            UPDATE formulas SET nombreMedicamento='${nombreMedicamento}', tratamiento='${tratamiento}', diagnostico='${diagnostico}', instrucciones='${instrucciones}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la formula`);
        });
    });

    app.delete('/formulas/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM formulas WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente la formula`)
        })
    })
}
