module.exports = function (app, conexion) {


    app.get('/historia', (req, res) => {
        const query = `SELECT * FROM histmedico;`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.get('/historia/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM histmedico WHERE idhistMedico=${id};`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.post('/historia/agregar', (req, res) => {
        const historia = {
        nombre: req.body.nombre,
        sexo: req.body.sexo,
        edad: req.body.edad, // Agrega las demás propiedades según tu modelo de datos
        cuarto: req.body.cuarto,
        sala: req.body.sala,
        motivo: req.body.motivo,
        ocupacion: req.body.ocupacion

        };
    
        // Ahora, puedes realizar la inserción en la base de datos
        const query = `INSERT INTO histmedico (nombre, sexo, edad, cuarto, sala, motivo, ocupacion) VALUES ('${historia.nombre}', '${historia.sexo}', '${historia.edad}', '${historia.cuarto}', '${historia.sala}', '${historia.motivo}', '${historia.ocupacion}')`;
    
        conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al agregar la PQRS' });
        }
    
        res.json(`Se agregó correctamente la PQRS`);
        });
    });

    app.put('/historia/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { nombre, sexo, edad, cuarto, sala, motivo, ocupacion } = req.body;
    
        const query = `UPDATE histmedico SET nombre='${nombre}', sexo='${sexo}', edad='${edad}', cuarto='${cuarto}', sala='${sala}', motivo='${motivo}', ocupacion='${ocupacion}' WHERE idhistMedico='${id}';`;
    
        conexion.query(query, (error) => {
        if (error) return console.error(error.message);
    
        res.json(`Se actualizó correctamente el usuario`);
        });
    });
    

    app.delete('/historia/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM histmedico WHERE idhistMedico=${id};`
        conexion.query(query, (error) => {
            if(error) console.error(error.message)

            res.json(`Se eliminó correctamente el usuario`)
        })
    })
}