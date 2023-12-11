module.exports = function (app, conexion) {

    app.get('/incapacidad', (req, res) => {
        const query = `SELECT * FROM incapacidad;`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros de incapacidad`)
            }
        })
    })

    app.get('/incapacidad/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM incapacidad WHERE id=${id};`
        conexion.query(query, (error, resultado) => {
            if (error) return console.error(error.message)

            if (resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay incapacidad con ese ID`)
            }
        })
    })

    app.post('/incapacidad/agregar', (req, res) => {
        const incapacida = {
            paciente: req.body.paciente,
            medico: req.body.medico,

            fecha: req.body.fecha,
            tipo: req.body.tipo,
            detalles: req.body.detalles
        };

        const query = `INSERT INTO incapacidad ( paciente, medico, fecha, tipo, detalles) VALUES ('${incapacida.paciente}', '${incapacida.medico}', '${incapacida.fecha}', '${incapacida.tipo}', '${incapacida.detalles}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar la incapacidad' });
            }

            res.json('Se registró correctamente la incapacidad');
        });
    });

    app.put('/incapacidad/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { paciente, medico, fecha, tipo, detalles } = req.body;

        const query = `
            UPDATE incapacidad SET paciente='${paciente}', medico='${medico}', fecha='${fecha}', tipo='${tipo}', detalles='${detalles}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la incapacidad`);
        });
    });

    app.delete('/incapacidad/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM incapacidad WHERE id=${id};`
        conexion.query(query, (error) => {
            if (error) console.error(error.message)

            res.json(`Se eliminó correctamente la incapacidad`)
        })
    })
}
