const bcrypt = require('bcrypt');

module.exports = function (app, conexion) {

    app.post('/signup', (req, res) => {
        let user = req.body;
        const selectQuery = "SELECT email FROM users WHERE email=?";
    
        conexion.query(selectQuery, [user.email], (err, results) => {
          if (err) {
            return res.status(500).json(err);
          }
    
          if (results.length === 0) {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
            
            const insertQuery = "INSERT INTO users (documento, tipoDoc, primerNombre, segundoNombre, primerApellido, segundoApellido, email, password, numero, status, rol, sede) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
            if (user.primerNombre) {
              conexion.query(insertQuery, [user.documento, user.tipoDoc, user.primerNombre, user.segundoNombre, user.primerApellido, user.segundoApellido, user.email, hashedPassword, user.numero, 'true', 'user', 'pendiente'], (err, results) => {
                if (!err) {
                  return res.status(200).json({ message: "User registered successfully" });
                } else {
                  return res.status(500).json(err);
                }
              });
            } else {
              return res.status(400).json({ message: "First name is required" });
            }
          } else {
            return res.status(400).json({ message: "Email already exists." });
          }
        });
      });

    

      app.post('/login', (req, res) => {
        const { correo, contrasena } = req.body;
    
        const selectQuery = "SELECT * FROM users WHERE email=?";
        conexion.query(selectQuery, [correo], (err, results) => {
          if (err) {
            return res.status(500).json(err);
          }
    
          if (results.length > 0) {
            const user = results[0];
            const passwordMatch = bcrypt.compareSync(contrasena, user.password);
    
            if (passwordMatch) {
              // Usuario autenticado correctamente
              return res.status(200).json({
                documento: user.documento,
                tipoDoc: user.tipoDoc,
                primerNombre: user.primerNombre,
                segundoNombre: user.segundoNombre,
                primerApellido: user.primerApellido,
                segundoApellido: user.segundoApellido,
                email: user.email,
                numero: user.numero,
                status: user.status,
                rol: user.rol,
                sede: user.sede,
              });
            } else {
              // Contraseña incorrecta
              return res.status(401).json({ message: 'Contraseña incorrecta' });
            }
          } else {
            // Usuario no encontrado
            return res.status(401).json({ message: 'Usuario no encontrado' });
          }
        });
      });



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

    app.put('/users/actualizar/:id', (req, res) => {
        const { id } = req.params;
        const { documento, tipoDoc,  primerNombre, segundoNombre, primerApellido, segundoApellido, email, numero, status, rol, sede } = req.body;

        const query = `UPDATE users SET documento='${documento}', tipoDoc='${tipoDoc}', primerNombre='${primerNombre}', segundoNombre='${segundoNombre}', primerApellido='${primerApellido}', segundoApellido='${segundoApellido}', email='${email}', numero='${numero}', status='${status}', rol='${rol}', sede='${sede}' WHERE documento='${id}';`;
    
        conexion.query(query, (error) => {
            if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
            }

            res.json(`Se actualizó correctamente el usuario`);
        });
    }); 

    

    app.delete('/users/borrar/:id', (req, res) => {
        const { id } = req.params

        const query = `DELETE FROM users WHERE documento=${id};`
        conexion.query(query, (error) => {
            if(error) console.error(error.message)

            res.json(`Se eliminó correctamente el usuario`)
        })
    })
    

};
