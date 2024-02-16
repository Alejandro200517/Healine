module.exports = function (app, conexion) {

    app.get('/especialidades', (req, res) => {
        const query = `SELECT * FROM especialidades;`;

        conexion.query(query, (error, resultado) => {
            if (error) {
                return console.error(error.message);
            }

            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.json(`No hay registros de especialidades`);
            }
        });
    });

    app.get('/especialidades/:id', (req, res) => {
        const { id } = req.params;

        const query = `SELECT * FROM especialidades WHERE id=${id};`;

        conexion.query(query, (error, resultado) => {
            if (error) {
                return console.error(error.message);
            }

            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.json(`No hay especialidades con ese ID`);
            }
        });
    });

    app.post('/especialidades/agregar', (req, res) => {
        const especialidades = {
            nombre: req.body.nombre,
            salario: req.body.salario,
        };

        const query = `INSERT INTO especialidades (nombre, salario) VALUES ('${especialidades.nombre}', '${especialidades.salario}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar EL ROL' });
            }

            res.json('Se registró correctamente el ROL');
        });
    });

    app.put('/especialidades/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { nombre } = req.body;
        const { salario } = req.body;

        const query = `
            UPDATE especialidades SET nombre='${nombre}', salario='${salario}' WHERE id='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente la especialidad`);
        });
    });

    app.delete('/especialidades/borrar/:id', (req, res) => {
        const { id } = req.params;

        const query = `DELETE FROM especialidades WHERE id=${id};`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
            }

            res.json(`Se eliminó correctamente la especialidad`);
        });
    });
};
