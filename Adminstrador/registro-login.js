const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importa el módulo JWT para manejar tokens
const nodemailer = require('nodemailer'); // Importa el módulo Nodemailer para enviar correos electrónicos

module.exports = function (app, conexion) {

    // Endpoint para registrar usuarios
    app.post('/usuarios/agregar', async (req, res) => {
        const users = {
            tipoDoc: req.body.tipoDoc,
            documento: req.body.documento,
            primerNombre: req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            email: req.body.email,
            password: req.body.password,
            numero: req.body.numero,
            status: req.body.status,
            rol: req.body.rol,
            sede: req.body.sede,
        };
    
        const hashedPassword = await bcrypt.hash(users.password, 10);
        users.password = hashedPassword;
    
        // Verificar correo electrónico
        const emailQuery = `SELECT * FROM users WHERE email='${users.email}'`;
        conexion.query(emailQuery, (emailError, emailResult) => {
            if (emailError) {
                console.error(emailError.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
    
            if (emailResult.length > 0) {
                return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
            }
    
            // Verificar número de documento
            const documentoQuery = `SELECT * FROM users WHERE documento='${users.documento}'`;
            conexion.query(documentoQuery, (documentoError, documentoResult) => {
                if (documentoError) {
                    console.error(documentoError.message);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
    
                if (documentoResult.length > 0) {
                    return res.status(400).json({ error: 'El número de documento ya está registrado' });
                }
    
                // Insertar usuario si no hay errores
                const insertQuery = `INSERT INTO users (tipoDoc, documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, password, numero, status, rol, sede) VALUES ('${users.tipoDoc}', '${users.documento}', '${users.primerNombre}', '${users.segundoNombre}', '${users.primerApellido}', '${users.segundoApellido}', '${users.email}', '${users.password}', '${users.numero}', 'True', 'User', 'Pendiente')`;
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
    


    app.post('/login', (req, res) => {
        const { email, password } = req.body;
    
        const query = `SELECT * FROM users WHERE email=?`;
        conexion.query(query, [email], async (error, resultado) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
    
            if (resultado.length > 0) {
                const user = resultado[0];
                const passwordMatch = await bcrypt.compare(password, user.password);
    
                if (passwordMatch) {
                    res.json({ mensaje: 'Inicio de sesión exitoso', usuario: user });
                } else {
                    res.status(401).json({ error: 'Credenciales incorrectas' });
                }
            } else {
                res.status(401).json({ error: 'Credenciales incorrectas' });
            }
        });
    });



    app.post('/recuperacion-contrasena/enviar-token', (req, res) => {
        const { email } = req.body;

        // Generar un token de recuperacion
        const token = jwt.sign({ email }, 'claveSecreta', { expiresIn: '1h' });

        // Enviar el token
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'healineoficial@gmail.com',
                pass: 'pczp jjjw mrut qifv' 
            }
        });

        const mailOptions = {
            from: 'healineoficial@gmail.com', // Correo Electrónico Que Envia Tokens
            to: email,
            subject: 'Recuperación de contraseña',
            text: `Para recuperar tu contraseña, usa este token: ${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al enviar el correo electrónico' });
            }
            console.log('Email enviado: ' + info.response);
            res.json({ mensaje: 'Se ha enviado un correo electrónico con el token de recuperación' });
        });
    });

    app.post('/recuperacion-contrasena/actualizar', async (req, res) => {
        const { token, nuevaContrasena } = req.body;

        try {
            const decodedToken = jwt.verify(token, 'claveSecreta'); 

            // Actualiza la contraseña en la base de datos
            const hashedPassword = await bcrypt.hash(nuevaContrasena, 10);
            const updateQuery = `UPDATE users SET password='${hashedPassword}' WHERE email='${decodedToken.email}'`;
            conexion.query(updateQuery, (updateError, updateResult) => {
                if (updateError) {
                    console.error(updateError.message);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
                if (updateResult.affectedRows === 0) {
                    return res.status(400).json({ error: 'No se pudo actualizar la contraseña' });
                }
                res.json({ mensaje: 'Contraseña actualizada exitosamente' });
            });
        } catch (error) {
            console.error(error.message);
            return res.status(401).json({ error: 'Token inválido o expirado' });
        }
    });
    
    
}
