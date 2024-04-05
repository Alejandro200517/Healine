-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-04-2024 a las 01:14:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `healine`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `medico` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`id`, `fecha`, `hora_inicio`, `hora_fin`, `medico`, `descripcion`) VALUES
(87, '2024-04-05', '07:00:00', '15:00:00', '1126447331 Alejandro Ardila Llano', 'El Dr. Alejandro Ardila Llano, especialista en Cirugia General, atenderá consultas médicas durante el horario comprendido entre las 7:00 a.m. y las 3:00 p.m. en su consultorio ubicado en el Hospital Universitario San Ignacio. '),
(88, '2024-04-07', '17:00:00', '01:00:00', '1006004005 Juan Carlos Rodriguez Rodriguez', 'El Dr. Alejandro Ardila Llano, especialista en Neurología, atenderá consultas médicas durante el horario comprendido entre las 5:00 pm. y la 1:00 am en su consultorio ubicado en el Hospital Militar Central');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `paciente` varchar(255) NOT NULL,
  `medico` varchar(255) NOT NULL,
  `especialidad` varchar(255) NOT NULL,
  `facturacion` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id`, `fecha`, `hora`, `paciente`, `medico`, `especialidad`, `facturacion`, `estado`) VALUES
(38, '2024-04-06', '07:00:00', '1234567890 Sara Nicole Sar Ramirez', '1126447331 Alejandro Ardila Llano', 'Cirugía General', 'pendiente', 'cancelada'),
(39, '2024-04-06', '09:00:00', '2147483647 Daniel Vera Vera', '1006004005 Juan Carlos Rodriguez Rodriguez', 'Neurología', 'pendiente', 'pendiente'),
(40, '2024-03-28', '03:12:00', '2147483647 - Daniel Vera Vera', '1126447331 - Alejandro Ardilaa Llano', 'Ginecología', 'pendiente', 'confirmada'),
(41, '2024-03-28', '06:13:00', '2147483647 - Daniel Vera Vera', '1006004005 - Juan Carlos Rodriguez Rodriguez', 'Cardiología', 'pendiente', 'pendiente'),
(42, '2024-03-28', '20:18:00', '2147483647 - Daniel Vera Vera', '1126447331 - Alejandro Ardilaa Llano', 'Cirugía General', 'pendiente', 'cancelada'),
(43, '2024-03-28', '03:20:00', '2147483647 - Daniel Vera Vera', '1126447331 - Alejandro Ardilaa Llano', 'Neurología', 'pendiente', 'confirmada'),
(44, '2024-03-30', '11:11:00', '2147483647 - Daniel Vera Vera', '1126447331 - Alejandro Ardilaa Llano', 'Pediatría', 'pendiente', 'cancelada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

CREATE TABLE `encuestas` (
  `id` int(11) NOT NULL,
  `documento` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `calificacion` varchar(50) NOT NULL,
  `facilidad` varchar(250) NOT NULL,
  `seguridad` varchar(250) NOT NULL,
  `velocidad` varchar(250) NOT NULL,
  `opinion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `encuestas`
--

INSERT INTO `encuestas` (`id`, `documento`, `email`, `rol`, `calificacion`, `facilidad`, `seguridad`, `velocidad`, `opinion`) VALUES
(21, '2147483647', 'nicole@gmail.com', 'Secretaria', 'Muy Bueno', 'Excelente', 'Bueno', 'Muy Bueno', 'Colores Muy Palidos'),
(22, '1126447331', 'aardila257@gmail.com', 'Medico', 'Excelente', 'Bueno', 'Regular', 'Deficiente', 'Faltan Cosas'),
(23, '1234567890', 'sergio@gmail.com', 'Paciente', 'Excelente', 'Bueno', 'Bueno', 'Bueno', 'Quiero Mas Accesibilidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `salario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `nombre`, `salario`) VALUES
(11, 'Dermatología', '6.500.000'),
(12, 'Ginecología', '8.200.000'),
(13, 'Cirugía General', '10.000.000'),
(14, 'Cardiología', '9.500.000'),
(15, 'Pediatría', '7.800.000'),
(16, 'Neurología', '11.300.000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examenes`
--

CREATE TABLE `examenes` (
  `id` int(11) NOT NULL,
  `cita` varchar(255) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `resultado` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` varchar(222) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examenes`
--

INSERT INTO `examenes` (`id`, `cita`, `paciente`, `nombre`, `resultado`, `fecha`, `estado`) VALUES
(16, '38 2024-04-06T05:00:00.000Z', '1234567890 Sara Nicole Sar Ramirez', 'Diabetes', 'NA', '2024-03-26', 'Autorizado'),
(17, '39 2024-04-06T05:00:00.000Z', '2147483647 Daniel Vera Vera', 'Ulceras estomacales', 'NA', '2024-03-26', 'No Autorizada'),
(18, '43 2024-03-28T05:00:00.000Z', '2147483647 Daniel Vera Vera', 'Rastawa', 'RastawaRastawaRastawaRastawa', '2024-04-05', 'Autorizado'),
(19, '38 2024-04-06T05:00:00.000Z', '1234567890 Sara Yulieth Sar Ramirez', 'sasasara', 'sasasara', '2024-04-05', 'Autorizado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulas`
--

CREATE TABLE `formulas` (
  `id` int(11) NOT NULL,
  `nombreMedicamento` varchar(255) NOT NULL,
  `tratamiento` varchar(255) NOT NULL,
  `diagnostico` varchar(255) NOT NULL,
  `instrucciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `formulas`
--

INSERT INTO `formulas` (`id`, `nombreMedicamento`, `tratamiento`, `diagnostico`, `instrucciones`) VALUES
(7, 'Ibuprofeno', 'Reducción del dolor y la inflamación.', 'Dolor leve a moderado, inflamación asociada con lesiones musculoesqueléticas.', 'Tomar 1 tableta de 400 mg cada 6 horas con alimentos, no exceder 3,200 mg en 24 horas.'),
(8, 'Amoxicilina', 'Infecciones bacterianas.', 'Infección de garganta bacteriana confirmada por cultivo de frotis faríngeo.', 'Tomar 500 mg cada 8 horas durante 10 días. Siempre tome la dosis completa, incluso si se siente mejor antes.'),
(10, 'Insulina glargina', 'Control de la diabetes.', 'Diabetes tipo 1.', 'Administre 10 unidades subcutáneas antes de la cena. Ajuste la dosis según las indicaciones del médico.'),
(11, 'Omeprazol', 'Reflujo gastroesofágico.', 'Esofagitis por reflujo confirmada por endoscopia.', 'Tomar 20 mg una vez al día antes del desayuno durante 4 semanas. Si los síntomas persisten, consulte a su médico.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incapacidad`
--

CREATE TABLE `incapacidad` (
  `id` int(11) NOT NULL,
  `paciente` varchar(255) NOT NULL,
  `medico` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `detalles` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incapacidad`
--

INSERT INTO `incapacidad` (`id`, `paciente`, `medico`, `fecha`, `tipo`, `detalles`) VALUES
(10, '1234567890 Sara Nicole Sar Ramirez', '1126447331 Alejandro Ardila Llano', '2024-04-06', 'enfermedad', 'NA'),
(11, '2147483647 Daniel Vera Vera', '1006004005 Juan Carlos Rodriguez Rodriguez', '2024-04-06', 'otros', 'NA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `id` int(11) NOT NULL,
  `paciente` varchar(255) NOT NULL,
  `formula` varchar(255) NOT NULL,
  `diagnostico` varchar(255) NOT NULL,
  `tratamiento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`id`, `paciente`, `formula`, `diagnostico`, `tratamiento`) VALUES
(12, '1234567890 Sara Nicole Sar Ramirez', '10 Insulina glargina', 'NA', 'NA'),
(13, '2147483647 Daniel Vera Vera', '11 Omeprazol', 'NA', 'NA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pqrs`
--

CREATE TABLE `pqrs` (
  `id_pqrs` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `email` varchar(60) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `documento` int(11) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombreRol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombreRol`) VALUES
(10, 'Administrador'),
(11, 'Medico'),
(12, 'Paciente'),
(13, 'Secretaria'),
(14, 'User');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sedes`
--

CREATE TABLE `sedes` (
  `id` int(11) NOT NULL,
  `nombreSede` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefonoSede` varchar(10) NOT NULL,
  `tipoServicio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sedes`
--

INSERT INTO `sedes` (`id`, `nombreSede`, `direccion`, `telefonoSede`, `tipoServicio`) VALUES
(9, 'Hospital Universitario San Ignacio', 'Cra. 7 #40-62', '1234567891', 'Hospital'),
(10, 'Clínica de Marly', 'Av. Carrera 9 # 9-03', '0987654321', 'Clínica'),
(11, 'Hospital Militar Central', 'Cra. 49 #50-00', '1122334455', 'Hospital'),
(12, 'Centro de Salud Santa Clara', 'Transversal 6 #12-35', '5544332211', 'Centro De Salud');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnomedico`
--

CREATE TABLE `turnomedico` (
  `idturnoMedico` int(10) UNSIGNED NOT NULL,
  `tiempEst` int(10) UNSIGNED NOT NULL,
  `numeroTurn` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnomedico`
--

INSERT INTO `turnomedico` (`idturnoMedico`, `tiempEst`, `numeroTurn`) VALUES
(1, 301, 12),
(16, 21, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `documento` bigint(250) NOT NULL,
  `tipoDoc` varchar(100) DEFAULT NULL,
  `primerNombre` varchar(100) DEFAULT NULL,
  `segundoNombre` varchar(100) NOT NULL,
  `primerApellido` varchar(100) DEFAULT NULL,
  `segundoApellido` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `numero` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL,
  `especialidad` varchar(250) NOT NULL,
  `sede` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`documento`, `tipoDoc`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `email`, `password`, `numero`, `status`, `rol`, `especialidad`, `sede`) VALUES
(123456789, 'NIT', 'Healine', '', 'Healine', 'Healine', 'healine@gmail.com', '$2b$10$etLsNUTmzbPbRCquX4b/hefNOuI2TrcjG8K3rsbUwydjSYc8msM.m', '1234567890', 'True', 'Administrador', '', ''),
(1126447331, 'CC', 'Alejandro', '', 'Ardilaa', 'Llano', 'aardila257@gmail.com', '$2b$10$trpcgcyge.IkiyK2D2MNRO5yF9DEvWv4GH5B61s5ChOkB83mnH.vO', '3125175148', 'True', 'Medico', 'Cirugía General', 'Hospital Universitario San Ignacio'),
(1234567890, 'CC', 'Sara', 'Yulieth', 'Sar', 'Ramirez', 'sara@gmail.com', '$2b$10$M4.ISX0Fhb2WlTGO1/L12OvlKAYt4LPq4lJqmtQ1dN1KS7nvG03z2', '3125147854', 'True', 'Paciente', '', 'Hospital Universitario San Ignacio'),
(2147483647, 'CC', 'Nicole', '', 'Toro', 'Toro', 'nicole@gmail.com', '$2b$10$ByKpzFGQRI1bgNlzRYktfulh4fs5XWs80qpRLzgjTiQTrzNZ3ZtZa', '1597532148', 'True', 'Secretaria', '', 'Hospital Universitario San Ignacio'),
(30406555, 'CC', 'Luz', 'Stella', 'Llano', 'Flores', 'luzllano@gmail.com', '$2b$10$4H25ukbWaDHWzV2RjJQcTu0bnitjGGPD26XzXnKw56irc42ENWAS.', '3125147854', 'True', 'Secretaria', '', 'Centro de Salud Santa Clara'),
(2147483647, 'Pasaporte', 'Daniel', '', 'Vera', 'Vera', 'vera@gmail.com', '$2b$10$Dxoc9PksCM5x2sxOON7xN.QLLKGvOm2CsNwBb2PrtFgUwUE8EKA9m', '3145748156', 'True', 'Paciente', '', 'Clínica de Marly'),
(1006004005, 'CC', 'Juan', 'Carlos', 'Rodriguez', 'Rodriguez', 'carlos21@gmail.com', '$2b$10$cJvhEo6c7rH4PLoUIlJYgOVCk5fGNwgkCGdtzYBoLkTT0JfJU7oyS', '3162541511', 'True', 'Medico', 'Cardiología', 'Hospital Militar Central'),
(2147483647, 'CC', 'Juan', 'Pablo', 'García', 'López', 'juan@example.com', '$2b$10$/4rQ74KzmLV7ZqyADmikMuoNuhtn0kc5r2chksGNZR2HjUWQ1pMc2', '987654321', 'True', 'Médico', 'Pediatría', 'Sede Principal'),
(0, '4812400007', 'Juan', 'Pablo', 'García', 'López', 'juan7@example.com', '$2b$10$HmIuTq3U3qdqCXKEA31F0eB5usMEtrKYW.5cYkpCqrr7lUMnEFtUq', '987654321', 'True', 'Médico', 'Pediatría', 'Sede Principal'),
(2147483647, 'CC', 'Juan', 'Pablo', 'García', 'López', 'juan8@example.com', '$2b$10$eI0ozDZNBYHP2AIfpwpE6eGonOB4oOwBsQiFZKmLQaS6w8qTcrzTq', '987654321', 'activo', 'Médico', 'Pediatría', 'Sede Principal'),
(2147483647, 'CC', 'Juan', 'Pablo', 'García', 'López', 'juan9@example.com', '$2b$10$vrA2lhw/F7r9hsh9W3ZcXOF9yUsWvtY0cBy29X4ozSZLk08t1VqkS', '987654321', 'activo', 'Médico', 'Pediatría', 'Sede Principal'),
(4812400002, 'CC', 'Juan', 'Pablo', 'García', 'López', 'juan2@example.com', '$2b$10$bxtqD0VCnvu.VM3q7Ml4aOdjMtY7whDt1fEAXgksxTUZdcih8k19m', '987654321', 'False', 'Médico', 'Pediatría', 'Sede Principal'),
(3213213213, 'CC', 'sa', 'as', 'sa', 'a', '321312@gmail.com', '$2b$10$gAlzIwipl22ERlEqwZWke.SIME0V2QhOazF8ThvNezb76xY16/BAm', '32131321', '', 'User', '', 'Centro de Salud Santa Clara'),
(1126447447, 'CC', 'Alejandro', '', 'Lopez', '', 'aardila25@gmail.com', '$2b$10$2qsxq/xvxXcig63C8AYKVeEeUyFgTvU0I2FvPCyI10rxK82WS9S.m', '3125175148', 'True', 'User', '', 'Pendiente'),
(1126447332, 'CC', 'Alejandro', '', 'Ardila', '', 'aardila255@gmail.com', '$2b$10$eexkYV61E.RG.z1nW3NJR.L5N9ZVbtLUzv39Bz83GABkNLlaABGjK', '3125175148', 'True', 'User', '', 'Pendiente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `examenes`
--
ALTER TABLE `examenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formulas`
--
ALTER TABLE `formulas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `incapacidad`
--
ALTER TABLE `incapacidad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  ADD PRIMARY KEY (`id_pqrs`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sedes`
--
ALTER TABLE `sedes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turnomedico`
--
ALTER TABLE `turnomedico`
  ADD PRIMARY KEY (`idturnoMedico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `examenes`
--
ALTER TABLE `examenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `formulas`
--
ALTER TABLE `formulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `incapacidad`
--
ALTER TABLE `incapacidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  MODIFY `id_pqrs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `sedes`
--
ALTER TABLE `sedes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `turnomedico`
--
ALTER TABLE `turnomedico`
  MODIFY `idturnoMedico` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
