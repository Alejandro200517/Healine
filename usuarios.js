module.exports = function (app, conexion) {
    
    app.get('/usuarios', (req, res) => {
        const query = `SELECT * FROM usuarios;`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.get('/usuarios/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM usuarios WHERE documento=${id};`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay usuarios`)
            }
        })
    })

    app.post('/usuarios/agregar', (req, res) => {
        const usuarios = {
            tipo: req.body.tipo,
            documento: req.body.documento,
            primerNombre: req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            email: req.body.email,
            contrasena: req.body.contrasena,
            numero: req.body.numero,
            rol: req.body.rol,
            sede: req.body.sede,

        };

        const query = `INSERT INTO usuarios (tipo, documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, contrasena, numero, rol, sede) VALUES ('${usuarios.tipo}', '${usuarios.documento}', '${usuarios.primerNombre}', '${usuarios.segundoNombre}', '${usuarios.primerApellido}', '${usuarios.segundoApellido}', '${usuarios.email}', '${usuarios.contrasena}', '${usuarios.numero}', '${usuarios.rol}', '${usuarios.sede}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.json('Se registró correctamente el usuario');
        });
    });

    app.put('/usuarios/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { tipo, documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, numero, rol, sede } = req.body;

        const query = `
            UPDATE usuarios SET tipo='${tipo}', documento='${documento}', primerNombre='${primerNombre}', segundoNombre='${segundoNombre}', primerApellido='${primerApellido}', segundoApellido='${segundoApellido}', email='${email}', numero='${numero}', rol='${rol}', sede='${sede}' WHERE documento='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el usuario`);
        });
    });

    

    app.delete('/usuarios/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM usuarios WHERE documento=${id};`
        conexion.query(query, (error) => {
            if(error) console.error(error.message)

            res.json(`Se eliminó correctamente el usuario`)
        })
    })
}