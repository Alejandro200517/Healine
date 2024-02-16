module.exports = function (app, conexion) {

    app.get('/examenes', (req, res) => {
        const query = `SELECT * FROM examenes;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de examenes`)
            }
        })
    })

    app.get('/examenes/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM examenes WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay examenes con ese ID`)
            }
        })
    })

    app.post('/examenes/agregar', (req, res) => {
        const examen = {
            cita: req.body.cita,
            paciente: req.body.paciente,
            nombre: req.body.nombre,
            resultado: req.body.resultado,
            fecha: req.body.fecha
        };

        const query = `INSERT INTO examenes (cita, paciente, nombre, resultado, fecha) VALUES ('${examen.cita}', '${examen.paciente}', '${examen.nombre}', '${examen.resultado}', '${examen.fecha}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar el examen' });
            }

            res.json('Se registró correctamente el examen');
        });
    });

    app.put('/examenes/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { cita, paciente, nombre, resultado, fecha } = req.body;

        const query = `
            UPDATE examenes SET cita='${cita}', paciente='${paciente}', nombre='${nombre}', resultado='${resultado}', fecha='${fecha}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el examen`);
        });
    });

    app.delete('/examenes/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM examenes WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente el examen`)
        })
    })
}
