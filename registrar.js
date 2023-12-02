module.exports = function (app, conexion) {
    app.post('/registrar/agregar', (req, res) => {
        const registrar = {
            tipo: req.body.tipo,
            documento: req.body.documento,
            primerNombre: req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            email: req.body.email,
            contrasena: req.body.contrasena,
            numero: req.body.numero,
        };

        const query = `INSERT INTO usuarios (tipo, documento, primerNombre, segundoNombre, primerApellido, segundoApellido, email, contrasena, numero) VALUES ('${registrar.tipo}', '${registrar.documento}', '${registrar.primerNombre}', '${registrar.segundoNombre}', '${registrar.primerApellido}', '${registrar.segundoApellido}', '${registrar.email}', '${registrar.contrasena}', '${registrar.numero}')`;

        conexion.query(query, (error) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.json('Se registró correctamente el usuario');
        });
    });
};
