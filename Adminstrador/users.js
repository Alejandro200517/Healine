const bcrypt = require('bcrypt');

module.exports = function (app, conexion) {
    
    app.get('/users', (req, res) => {
        const query = `SELECT * FROM users;`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay registros`)
            }
        })
    })

    app.get('/users/:id', (req, res) => {
        const { id } = req.params

        const query = `SELECT * FROM users WHERE documento=${id};`
        conexion.query(query, (error, resultado) => {
            if(error) return console.error(error.message)

            if(resultado.length > 0) {
                res.json(resultado)
            } else {
                res.json(`No hay usuarios`)
            }
        })
    })

    
    app.post('/users/agregar', async (req, res) => {
        const users = {            
            documento: req.body.documento,
            tipoDoc: req.body.tipoDoc,
            primerNombre: req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            email: req.body.email,
            password: req.body.password,
            numero: req.body.numero,
            status: req.body.status,
            rol: req.body.rol,
            especialidad: req.body.especialidad,
            sede: req.body.sede,
        };
    
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(users.password, 10);
        users.password = hashedPassword;
    
        // Verificar si el documento ya está registrado
        const documentoQuery = `SELECT * FROM users WHERE documento='${users.documento}'`;
        conexion.query(documentoQuery, (documentoError, documentoResult) => {
            if (documentoError) {
                console.error(documentoError.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
    
            if (documentoResult.length > 0) {
                return res.status(400).json({ error: 'El documento ya está registrado' });
            }
    
            // Verificar si el correo electrónico ya está registrado
            const emailQuery = `SELECT * FROM users WHERE email='${users.email}'`;
            conexion.query(emailQuery, (emailError, emailResult) => {
                if (emailError) {
                    console.error(emailError.message);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
    
                if (emailResult.length > 0) {
                    return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
                }
    
                // Si el documento y el correo electrónico no están registrados, insertar el usuario
                const insertQuery = `INSERT INTO users (tipoDoc, documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, password, numero, status, rol, especialidad, sede) VALUES ('${users.tipoDoc}', '${users.documento}', '${users.primerNombre}', '${users.segundoNombre}', '${users.primerApellido}', '${users.segundoApellido}', '${users.email}', '${users.password}', '${users.numero}', 'True', '${users.rol}', '${users.especialidad}', '${users.sede}')`;
                conexion.query(insertQuery, (insertError) => {
                    if (insertError) {
                        console.error(insertError.message);
                        return res.status(500).json({ error: 'Error al registrar el usuario' });
                    }
    
                    res.json('Se registró correctamente el usuario');
                });
            });
        });
    });
    
    

    app.put('/users/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { documento, tipoDoc, primerNombre, segundoNombre, primerApellido, segundoApellido, email, numero, status, rol, especialidad, sede } = req.body;

        const query = `
            UPDATE users SET documento='${documento}', tipoDoc='${tipoDoc}', primerNombre='${primerNombre}', segundoNombre='${segundoNombre}', primerApellido='${primerApellido}', segundoApellido='${segundoApellido}', email='${email}', numero='${numero}', status='${status}', rol='${rol}', especialidad='${especialidad}', sede='${sede}' WHERE documento='${id}';`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el usuario`);
        });
    });

    app.put('/users/inactivar/:id', (req, res) => {
        const { id } = req.params;
    
        const query = `UPDATE users SET status = 'False' WHERE documento = ${id};`;
        conexion.query(query, (error) => {
            if(error) {
                console.error(error.message);
                res.status(500).json({ message: 'Error al inactivar el usuario' });
                return;
            }
    
            res.json({ message: 'Usuario inactivado correctamente' });
        });
    });
    
    
    app.post('/login', (req, res) => {
        const { correo, contrasena } = req.body;

        // Verificar las credenciales del usuario en la base de datos
        const query = `SELECT * FROM users WHERE email=? AND password=?`;
        conexion.query(query, [correo, contrasena], (error, resultado) => {
            if(error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            if(resultado.length > 0) {
                // Usuario autenticado correctamente
                res.json({ mensaje: 'Inicio de sesión exitoso', usuario: resultado[0] });
            } else {
                // Credenciales incorrectas
                res.status(401).json({ error: 'Credenciales incorrectas' });
            }
        });
    });
}
