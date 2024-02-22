-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2024 a las 04:41:10
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
(79, '2024-02-22', '19:15:00', '03:15:00', '1126447331 Alejandro Ardila Llano', 'La agenda médica del Dr. Alejandro Ardila está configurada para atender pacientes de lunes a viernes, de 7:15 a.m. a 3:15 p.m. Cada día se divide en intervalos de tiempo específicos para consultas médicas, exámenes, procedimientos y tiempo libre para almuerzo y descanso. Durante este horario, el Dr. Pérez se dedica por completo a la atención de sus pacientes, asegurándose de brindarles el mejor cuidado médico posible. Además, la agenda está diseñada para permitir la flexibilidad necesaria para atender emergencias y ajustar horarios según las necesidades de los pacientes.'),
(80, '2024-02-24', '14:00:00', '22:00:00', '1126447331 Alejandro Ardila Llano', ' La agenda médica del Dr. Juan Pérez se extiende de lunes a viernes, de 2:00 p.m. a 10:00 p.m. Este horario permite atender a pacientes en la tarde y noche, ofreciendo flexibilidad a aquellos que trabajan durante el día y necesitan citas médicas fuera del horario laboral tradicional. Durante este período, el Dr. Pérez se dedica a realizar consultas, diagnósticos, tratamientos y seguimientos, asegurando que cada paciente reciba la atención médica adecuada. Además, este horario permite adaptarse a las necesidades de los pacientes y brindarles un servicio médico integral.');

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
(27, '2024-02-23', '07:00:00', '2147483647 Maria Isabel Lopez Lopez', '1126447331 Alejandro Ardila Llano', 'Neurología', 'pagada', 'confirmada'),
(28, '2024-02-25', '06:45:00', '2147483647 Jose Luis Martinez Garcia', '987654321 Juan Carlos Perez Gomez', 'Cirugía General', 'pendiente', 'cancelada');

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
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examenes`
--

INSERT INTO `examenes` (`id`, `cita`, `paciente`, `nombre`, `resultado`, `fecha`) VALUES
(11, '27 2024-02-23T05:00:00.000Z', '2147483647 Maria Isabel Lopez Lopez', 'Prueba de Glucosa en Ayunas', '120 mg/dL (dentro del rango normal)', '2024-02-22'),
(12, '28 2024-02-25T05:00:00.000Z', '2147483647 Jose Luis Martinez Garcia', 'Prueba de Sensibilidad Bacteriana', ' Sensibilidad de la bacteria a Amoxicilina', '2024-02-22');

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
(9, 'Atorvastatina', 'Control del colesterol.', 'Hipercolesterolemia primaria.', 'Tomar 20 mg una vez al día por la noche. Acompañar con una dieta baja en colesterol.'),
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
(7, '2147483647 Jose Luis Martinez Garcia', '987654321 Juan Carlos Perez Gomez', '2024-02-25', 'enfermedad', 'Fecha de inicio de la incapacidad: 02/21/2024\nFecha de finalización de la incapacidad: 03/11/2024'),
(8, '2147483647 Maria Isabel Lopez Lopez', '1126447331 Alejandro Ardila Llano', '2024-02-23', 'enfermedad', 'Fecha de inicio de la incapacidad: 02/22/2024\nFecha de finalización de la incapacidad: 08/22/2024\nTratamiento prescrito: Insulina (o medicación oral, si corresponde) según la dosis y horario indicados por el médico, control estricto de la glucemia, dieta equilibrada y ejercicio regular.');

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
(8, '2147483647 Maria Isabel Lopez Lopez', '10 Insulina glargina', 'Diabetes mellitus tipo 1.', 'Inyectar 30 unidades subcutáneas antes de acostarse.\nFórmula Médica: Loratadina 10mg'),
(9, '2147483647 Jose Luis Martinez Garcia', '8 Amoxicilina', ' Infección bacteriana en las vías respiratorias.', 'Tomar 1 cápsula cada 8 horas durante 7 días.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pqrs`
--

CREATE TABLE `pqrs` (
  `id_pqrs` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `email` varchar(60) NOT NULL,
  `telefono` int(10) NOT NULL,
  `documento` int(11) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pqrs`
--

INSERT INTO `pqrs` (`id_pqrs`, `tipo`, `descripcion`, `email`, `telefono`, `documento`, `estado`) VALUES
(39, 'Peticion', 'sa', 'aardila257@gmail.com', 2147483647, 1126447331, 'Pendiente'),
(40, 'Peticion', 'sa', 'aardila257@gmail.com', 2147483647, 1126447331, 'Pendiente'),
(41, 'Peticion', 'sasa', 'aardila257@gmail.com', 2147483647, 1126447331, 'Pendiente'),
(42, 'Peticion', 'sasa', 'sasa@gmail.com', 2147483647, 2121, 'Pendiente');

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
(9, 'Hospital Universitario San Ignacio', 'Cra. 7 #40-62', '1234567890', 'Hospital'),
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
  `documento` int(11) NOT NULL,
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
(1126447331, 'CC', 'Alejandro', '', 'Ardila', 'Llano', 'aardila257@gmail.com', '$2b$10$J7kzo3.FSJrA5d9DMh3FM.RhDQVmVDxGfwlD.WwIWGGNMUlyK4Uqm', '3125175148', 'True', 'Medico', 'Neurología', 'Hospital Universitario San Ignacio'),
(987654321, 'CC', 'Juan', 'Carlos', 'Perez', 'Gomez', 'juancarlos.perez@example.com', '$2b$10$EJtZ706zgMXe19JzWZppk.m8gnQToLpL.NfIevhBE/QcRCY99hh56', '1234567890', 'True', 'Medico', 'Cirugía General', 'Hospital Militar Central'),
(2147483647, 'CC', 'Maria', 'Isabel', 'Lopez', 'Lopez', 'mariaisabel.lopez@example.com', '$2b$10$WYtL2i2SG2OPXMEvDW1Rv.aoxwiyqBKSuaAUIwwMPJXtBI9lFbq2q', '0987654321', 'True', 'Paciente', '', 'Clínica de Marly'),
(2147483647, 'Pasaporte', 'Jose', 'Luis', 'Martinez', 'Garcia', 'joseluis.martinez@example.com', '$2b$10$YMBn.L148f6xaSviRYJbr.wHt9gwEqY0gxQ7blnqmA5HefoIG111W', '4567890123', 'True', 'Paciente', '', 'Centro de Salud Santa Clara'),
(2147483647, 'CC', 'Ana', 'Maria', 'Perez', 'Gomez', 'anamaria.perez@example.com', '$2b$10$eGX7lFpSKtPanEr.x31SEOBl5.qpAZ3gc9I5UNWcaOx5u2uGW4PRq', '7418529630', 'True', 'Secretaria', '', 'Hospital Universitario San Ignacio'),
(2147483647, 'CC', 'Luisa', 'Fernanda', 'Rodriguez', 'Sanchez', 'luisafernanda.rodriguez@example.com', '$2b$10$J5OkxtsZGnUZ3PlFK/Ghqu0yuj7bWo9hb5PKhd.WFNizupkzgVF0i', '3692581470', 'True', 'Secretaria', '', 'Hospital Militar Central');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `examenes`
--
ALTER TABLE `examenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `formulas`
--
ALTER TABLE `formulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `incapacidad`
--
ALTER TABLE `incapacidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  MODIFY `id_pqrs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
