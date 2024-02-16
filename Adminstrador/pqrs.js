module.exports = function (app, conexion) {
    
    app.get('/pqrs', (req, res) => {
        const query = `SELECT * FROM pqrs;`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.get('/pqrs/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM pqrs WHERE id_pqrs=${id};`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.post('/pqrs/agregar', (req, res) => {
        const pqrs = {
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            email: req.body.email,
            telefono: req.body.telefono,
            documento: req.body.documento,
            estado: req.body.estado,            
        };

        const query = `INSERT INTO pqrs (tipo, descripcion, email, telefono, documento, estado) VALUES ('${pqrs.tipo}', '${pqrs.descripcion}', '${pqrs.email}', '${pqrs.telefono}', '${pqrs.documento}', 'Pendiente')`;

        conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al agregar la PQRS' });
        }
    
        res.json(`Se agregó correctamente la PQRS`);
        });
    });

    app.put('/pqrs/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { tipo, descripcion, email, telefono, documento, estado } = req.body;
    
        const query = `UPDATE pqrs SET tipo='${tipo}', descripcion='${descripcion}', email='${email}', telefono='${telefono}', documento='${documento}' , estado='${estado}' WHERE id_pqrs='${id}';`;
    
        conexion.query(query, (error) => {
        if (error) return console.error(error.message);
    
        res.json(`Se actualizó correctamente el PQRS`);
        });
    });
    

    app.delete('/pqrs/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM pqrs WHERE id_pqrs=${id};`
        conexion.query(query, (error) => {
            if(error) console.error(error.message)

            res.json(`Se eliminó correctamente el PQRS`)
        })
    })
}