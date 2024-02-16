-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-02-2024 a las 09:43:59
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
(50, '2023-12-29', '11:04:00', '14:22:00', '21212121', '++++++++++'),
(52, '0111-11-11', '11:11:00', '14:22:00', '7784594', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum!'),
(54, '3333-03-31', '14:22:00', '11:11:00', '212121215', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum!'),
(55, '2023-12-12', '07:00:00', '15:00:00', '1126447331', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum!');

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
(17, '2023-12-12', '07:00:00', '456789456', '1126447331', '8', 'pagada', 'confirmada'),
(18, '2023-12-12', '10:00:00', '123456789', '1126447331', '8', 'pendiente', 'confirmada'),
(19, '2024-12-12', '07:00:00', '112212121', '30406555', '5', 'pendiente', 'confirmada');

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
(5, 'Cirugía General', '7800000'),
(6, 'Psicologia', '6500000'),
(7, 'Enfermera', '2500000'),
(8, 'Medicina General', '5100000');

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
(3, '18', '987654321', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n', '2023-12-12'),
(4, '17', '456789456', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n', '2023-12-12');

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
(3, 'Lumbalis', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n'),
(4, 'Pzer', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n'),
(5, 'Inis', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.\n');

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
(2, '987654321', '1126447331', '2023-12-12', 'enfermedad', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n'),
(3, '456789456', '1126447331', '2023-12-12', 'maternidad', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n');

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
(4, '987654321', '3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga.\n');

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
(2, 'Secretaria'),
(3, 'Administrador'),
(7, 'Paciente'),
(8, 'Medico');

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
(8, 'Suba', 'Cll 115 N45', '3125175148', 'Centro De Salud');

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
  `sede` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`documento`, `tipoDoc`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `email`, `password`, `numero`, `status`, `rol`, `sede`) VALUES
(1126447331, 'CC', 'Alejandro', 'Alejandro', 'Ardila', 'Llano', 'aardila257@gmail.com', '$2b$10$qzBeHf8eQsKmgEAFDh2/QeI4c0rftUpg6iHlSh9NUhZsrf7kHb3/S', '3125175148', 'True', 'Administrador', 'Suba'),
(123456789, 'NIT', 'Healine', 'Healine', 'Healine', 'Healine', 'healine@gmail.com', '$2b$10$8kOXv9OJHaC9eX/EwLSrLenQmuUeLARscSUw7bu33L2pt/Ubetp8q', '123456789', 'False', 'Administrador', 'Suba');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `examenes`
--
ALTER TABLE `examenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `formulas`
--
ALTER TABLE `formulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `incapacidad`
--
ALTER TABLE `incapacidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  MODIFY `id_pqrs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sedes`
--
ALTER TABLE `sedes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `turnomedico`
--
ALTER TABLE `turnomedico`
  MODIFY `idturnoMedico` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
