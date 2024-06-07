-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2024 a las 06:52:41
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
(88, '2024-04-07', '17:00:00', '01:00:00', '1006004005 Juan Carlos Rodriguez Rodriguez', 'El Dr. Alejandro Ardila Llano, especialista en Neurología, atenderá consultas médicas durante el horario comprendido entre las 5:00 pm. y la 1:00 am en su consultorio ubicado en el Hospital Militar Central'),
(89, '2024-06-07', '08:00:00', '10:00:00', '1126447331 Alejandro Ardila Llano', 'Cirugía General en Hospital Universitario San Ignacio'),
(90, '2024-06-07', '09:00:00', '11:00:00', '1004567890 María Isabel López Fernández', 'Ortopedia en Hospital Militar Central'),
(91, '2024-06-08', '10:00:00', '12:00:00', '1005678901 Carlos Andrés Martínez Gómez', 'Oftalmología en Centro de Salud Santa Clara'),
(92, '2024-06-08', '08:00:00', '10:00:00', '1008901234 Laura Patricia Sánchez Jiménez', 'Oncología en Hospital de la Misericordia'),
(93, '2024-06-09', '09:00:00', '11:00:00', '1010123456 Valeria Andrea Vargas Guerrero', 'Gastroenterología en Clínica del Occidente'),
(94, '2024-06-09', '10:00:00', '12:00:00', '1011234567 Diego Fernando Ruiz Navarro', 'Nefrología en Hospital El Tunal'),
(95, '2024-06-09', '11:00:00', '13:00:00', '1013456789 Tomás Eduardo Suárez Cortés', 'Urología en Clínica de Marly'),
(96, '2024-06-10', '12:00:00', '14:00:00', '1014567890 Alejandra Valentina Herrera Cardozo', 'Psiquiatría en Hospital Militar Central'),
(97, '2024-06-10', '08:00:00', '10:00:00', '1017890123 Esteban Mateo Castaño Vargas', 'Neumología en Clínica del Country'),
(98, '2024-06-11', '09:00:00', '11:00:00', '1021234567 Ricardo Alonso Ramírez López', 'Reumatología en Hospital El Tunal'),
(99, '2024-06-11', '10:00:00', '12:00:00', '1023456789 Diego Andrés Suárez Martínez', 'Pediatría en Clínica de Marly'),
(100, '2024-06-11', '11:00:00', '13:00:00', '1126447331 Alejandro Ardila Llano', 'Cirugía General en Hospital Universitario San Ignacio');

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
(45, '2024-06-07', '08:00:00', '1002345678 Pedro Alonso Ramírez López', '1126447331 Alejandro Ardila Llano', 'Cirugía General', 'pendiente', 'cancelada'),
(46, '2024-06-07', '09:30:00', '1003456789 Lucía Fernanda García Martínez', '1005678901 Carlos Andrés Martínez Gómez', 'Oftalmología', 'pendiente', 'pendiente'),
(47, '2024-06-07', '10:45:00', '1011234567 Diego Fernando Ruiz Navarro', '1014567890 Alejandra Valentina Herrera Cardozo', 'Psiquiatría', 'pendiente', 'pendiente'),
(48, '2024-06-07', '12:00:00', '1006789012 Ana Carolina Rodríguez Hernández', '1013456789 Tomás Eduardo Suárez Cortés', 'Urología', 'pendiente', 'pendiente'),
(49, '2024-06-07', '13:15:00', '1007890123 Jorge Luis Pérez Díaz', '1017890123 Esteban Mateo Castaño Vargas', 'Neumología', 'pendiente', 'pendiente'),
(50, '2024-06-07', '14:30:00', '1021234567 Ricardo Alonso Ramírez López', '1028901234 Andrés Felipe Moreno Ortiz', 'Gastroenterología', 'pendiente', 'pendiente'),
(51, '2024-06-07', '15:45:00', '1022345678 Gabriela María Torres Gómez', '1004567890 María Isabel López Fernández', 'Ortopedia', 'pendiente', 'pendiente'),
(52, '2024-06-07', '17:00:00', '1023456789 Diego Andrés Suárez Martínez', '1017890123 Esteban Mateo Castaño Vargas', 'Neumología', 'pendiente', 'pendiente'),
(53, '2024-06-08', '08:00:00', '1024567890 Valentina Isabella Rojas Fernández', '1011234567 Diego Fernando Ruiz Navarro', 'Nefrología', 'pendiente', 'pendiente'),
(54, '2024-06-08', '09:30:00', '1025678901 José Manuel González Rodríguez', '1009012345 Andrés Felipe Moreno Ortiz', 'Gastroenterología', 'pendiente', 'pendiente'),
(55, '2024-06-08', '10:45:00', '1026789012 Ana Isabel Gómez Hernández', '1010123456 Valeria Andrea Vargas Guerrero', 'Gastroenterología', 'pendiente', 'pendiente'),
(56, '2024-06-08', '12:00:00', '1027890123 Luisa Fernanda Alvarez Martínez', '1013456789 Tomás Eduardo Suárez Cortés', 'Urología', 'pendiente', 'pendiente'),
(57, '2024-06-08', '13:15:00', '1019012345 Antonio Javier Moreno Ramírez', '1021234567 Ricardo Alonso Ramírez López', 'Reumatología', 'pendiente', 'pendiente'),
(58, '2024-06-08', '14:30:00', '1028901234 Andrés Felipe Pérez Díaz', '1005678901 Carlos Andrés Martínez Gómez', 'Oftalmología', 'pendiente', 'pendiente'),
(59, '2024-06-08', '15:45:00', '1004567890 María Isabel López Fernández', '1013456789 Tomás Eduardo Suárez Cortés', 'Urología', 'pendiente', 'pendiente'),
(60, '2024-06-08', '17:00:00', '1008901234 Laura Patricia Sánchez Jiménez', '1014567890 Alejandra Valentina Herrera Cardozo', 'Oncología', 'pendiente', 'pendiente'),
(61, '2024-06-09', '08:00:00', '1006789012 Ana Carolina Rodríguez Hernández', '1015678901 Santiago Javier Navarro López', 'Psiquiatría', 'pendiente', 'pendiente'),
(62, '2024-06-09', '09:30:00', '1011234567 Diego Fernando Ruiz Navarro', '1024567890 Valentina Isabella Rojas Fernández', 'Neumología', 'pendiente', 'pendiente'),
(63, '2024-06-09', '10:45:00', '1025678901 José Manuel González Rodríguez', '1025678901 José Manuel González Rodríguez', 'Neumología', 'pendiente', 'pendiente'),
(64, '2024-06-09', '12:00:00', '1026789012 Ana Isabel Gómez Hernández', '1026789012 Ana Isabel Gómez Hernández', 'Reumatología', 'pendiente', 'pendiente'),
(65, '2024-06-08', '18:40:00', '1006789012 Ana Carolina Rodríguez Hernández', '1126447331 Alejandro Ardilaa Llano', 'Ortopedia', 'pendiente', 'pendiente'),
(66, '2024-06-08', '22:40:00', '1019012345 Antonio Javier Moreno Ramírez', '1126447331 Alejandro Ardilaa Llano', 'Oftalmología', 'pendiente', 'pendiente');

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
(24, '1002345678', 'pedro.ramirez@example.com', 'Paciente', 'Muy Bueno', 'Excelente', 'Bueno', 'Muy Bueno', 'Colores Muy Palidos'),
(25, '1003456789', 'lucia.garcia@example.com', 'Paciente', 'Excelente', 'Bueno', 'Regular', 'Deficiente', 'Faltan Cosas'),
(26, '1004567890', 'maria.lopez@example.com', 'Medico', 'Excelente', 'Bueno', 'Bueno', 'Bueno', 'Quiero Mas Accesibilidad'),
(27, '1005678901', 'carlos.martinez@example.com', 'Medico', 'Muy Bueno', 'Excelente', 'Bueno', 'Muy Bueno', 'Satisfactorio'),
(28, '1006789012', 'ana.rodriguez@example.com', 'Medico', 'Excelente', 'Bueno', 'Regular', 'Bueno', 'Buena experiencia'),
(29, '1007890123', 'jorge.perez@example.com', 'Paciente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Muy satisfecho'),
(30, '1008901234', 'laura.sanchez@example.com', 'Secretaria', 'Bueno', 'Bueno', 'Regular', 'Bueno', 'Aceptable'),
(31, '1009012345', 'andres.moreno@example.com', 'Medico', 'Muy Bueno', 'Muy Bueno', 'Excelente', 'Muy Bueno', 'Altamente recomendado'),
(32, '1010123456', 'valeria.vargas@example.com', 'Paciente', 'Bueno', 'Bueno', 'Bueno', 'Bueno', 'Buena atención'),
(33, '1011234567', 'diego.ruiz@example.com', 'Medico', 'Muy Bueno', 'Excelente', 'Bueno', 'Muy Bueno', 'Excelente servicio'),
(34, '1012345678', 'tomas.suarez@example.com', 'Medico', 'Excelente', 'Bueno', 'Regular', 'Bueno', 'Satisfecho con la atención'),
(35, '1013456789', 'alejandra.herrera@example.com', 'Medico', 'Excelente', 'Bueno', 'Regular', 'Bueno', 'Servicio adecuado'),
(36, '1014567890', 'santiago.navarro@example.com', 'Medico', 'Excelente', 'Bueno', 'Bueno', 'Bueno', 'Agradable experiencia'),
(37, '1015678901', 'esteban.castano@example.com', 'Paciente', 'Muy Bueno', 'Excelente', 'Excelente', 'Excelente', 'Totalmente satisfecho'),
(38, '1016789012', 'antonio.moreno@example.com', 'Medico', 'Bueno', 'Bueno', 'Regular', 'Bueno', 'Recomendado'),
(39, '1017890123', 'ricardo.ramirez@example.com', 'Paciente', 'Bueno', 'Regular', 'Regular', 'Bueno', 'Buena atención recibida'),
(40, '1018901234', 'gabriela.torres@example.com', 'Medico', 'Muy Bueno', 'Muy Bueno', 'Excelente', 'Muy Bueno', 'Excelente trato'),
(41, '1019012345', 'diego.suarez@example.com', 'Paciente', 'Excelente', 'Bueno', 'Regular', 'Bueno', 'Buena atención médica');

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
(1, 'Ortopedia', '8500000'),
(2, 'Oftalmología', '7200000'),
(3, 'Oncología', '10500000'),
(4, 'Gastroenterología', '9300000'),
(5, 'Nefrología', '8800000'),
(6, 'Urología', '8100000'),
(7, 'Psiquiatría', '9500000'),
(8, 'Endocrinología', '9000000'),
(9, 'Neumología', '8700000'),
(10, 'Reumatología', '8200000');

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
(20, '45 2024-06-07T05:00:00.000Z', '1002345678 Pedro Alonso Ramírez López', 'Radiografía de tórax PA', 'Opacidad en lóbulo superior derecho', '2024-06-06', 'Pendiente'),
(21, '45 2024-06-07T05:00:00.000Z', '1002345678 Pedro Alonso Ramírez López', 'Examen de Sangre', 'Dentro de los valores normales', '2024-06-06', 'Pendiente'),
(22, '46 2024-06-07T05:00:00.000Z', '1003456789 Lucía Fernanda García Martínez', 'Ecografía abdominal', 'Cálculos biliares presentes', '2024-06-06', 'Pendiente'),
(23, '48 2024-06-07T05:00:00.000Z', '1006789012 Ana Carolina Rodríguez Hernández', 'Electrocardiograma (ECG)', 'Ritmo sinusal regular', '2024-06-06', 'Pendiente');

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
(1, 'Paracetamol', 'Alivio del dolor y la fiebre.', 'Dolor leve a moderado, fiebre.', 'Tomar 500 mg cada 4-6 horas según sea necesario, no exceder 4 g al día.'),
(2, 'Loratadina', 'Tratamiento de alergias.', 'Rinitis alérgica, urticaria.', 'Tomar 10 mg una vez al día con o sin alimentos.'),
(3, 'Metformina', 'Control de la glucosa en sangre.', 'Diabetes tipo 2.', 'Tomar 500 mg dos veces al día con las comidas.'),
(4, 'Simvastatina', 'Reducción de los niveles de colesterol.', 'Hiperlipidemia.', 'Tomar 20 mg una vez al día por la noche.'),
(5, 'Losartan', 'Tratamiento de la hipertensión.', 'Hipertensión arterial.', 'Tomar 50 mg una vez al día con o sin alimentos.'),
(6, 'Levotiroxina', 'Tratamiento del hipotiroidismo.', 'Hipotiroidismo primario y secundario.', 'Tomar 50 mcg una vez al día en ayunas.'),
(7, 'Aspirina', 'Prevención de eventos cardiovasculares.', 'Prevención secundaria de infarto de miocardio.', 'Tomar 81 mg una vez al día.'),
(8, 'Furosemida', 'Tratamiento de la retención de líquidos.', 'Edema asociado con insuficiencia cardíaca, renal o hepática.', 'Tomar 20-80 mg una vez al día en la mañana.'),
(9, 'Ranitidina', 'Reducción de la producción de ácido gástrico.', 'Úlcera péptica, reflujo gastroesofágico.', 'Tomar 150 mg dos veces al día.'),
(10, 'Ciprofloxacino', 'Tratamiento de infecciones bacterianas.', 'Infecciones del tracto urinario, respiratorio y gastrointestinal.', 'Tomar 500 mg cada 12 horas durante 7-14 días.'),
(11, 'Alprazolam', 'Tratamiento de la ansiedad.', 'Trastornos de ansiedad.', 'Tomar 0.25-0.5 mg tres veces al día según necesidad.'),
(12, 'Lisinopril', 'Tratamiento de la hipertensión y la insuficiencia cardíaca.', 'Hipertensión, insuficiencia cardíaca congestiva.', 'Tomar 10 mg una vez al día.'),
(13, 'Warfarina', 'Prevención de trombosis y embolia.', 'Prevención de tromboembolismo venoso.', 'Dosis individualizada basada en INR, usualmente 2-5 mg al día.'),
(14, 'Gabapentina', 'Tratamiento del dolor neuropático y epilepsia.', 'Dolor neuropático, epilepsia focal.', 'Tomar 300 mg tres veces al día.'),
(15, 'Clopidogrel', 'Prevención de eventos aterotrombóticos.', 'Prevención de infarto de miocardio, accidente cerebrovascular.', 'Tomar 75 mg una vez al día.'),
(16, 'Prednisona', 'Tratamiento de enfermedades inflamatorias.', 'Asma, enfermedades autoinmunes.', 'Dosis inicial de 5-60 mg al día, ajustar según respuesta.'),
(17, 'Albuterol', 'Broncodilatador para el alivio del asma.', 'Asma, enfermedad pulmonar obstructiva crónica (EPOC).', 'Inhalar 2 puffs cada 4-6 horas según necesidad.'),
(18, 'Duloxetina', 'Tratamiento de la depresión y la ansiedad.', 'Depresión mayor, trastorno de ansiedad generalizada.', 'Tomar 60 mg una vez al día.'),
(19, 'Esomeprazol', 'Reducción de la producción de ácido gástrico.', 'Reflujo gastroesofágico, úlcera péptica.', 'Tomar 40 mg una vez al día una hora antes del desayuno.'),
(20, 'Amiodarona', 'Tratamiento de arritmias cardíacas.', 'Arritmias ventriculares y supraventriculares.', 'Tomar 200 mg una vez al día.');

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
(12, '1002345678 Pedro Alonso Ramírez López', '1126447331 - Alejandro Ardilaa Llano', '2024-06-07', 'enfermedad', 'VIH'),
(13, '1006789012 Ana Carolina Rodríguez Hernández', '1126447331 - Alejandro Ardilaa Llano', '2024-06-07', 'maternidad', 'Maternidad');

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
(15, '1002345678 Pedro Alonso Ramírez López', '2 Loratadina', 'Rinitis alérgica, urticaria', 'Tomar 10 mg una vez al día con o sin alimentos'),
(16, '1003456789 Lucía Fernanda García Martínez', '3 Metformina', 'Diabetes tipo 2', 'Tomar 500 mg dos veces al día con las comidas'),
(17, '1006789012 Ana Carolina Rodríguez Hernández', '4 Simvastatina', 'Hiperlipidemia', 'Tomar 20 mg una vez al día por la noche'),
(18, '1009012345 Andrés Felipe Moreno Ortiz', '5 Losartan', 'Hipertensión arterial', 'Tomar 50 mg una vez al día con o sin alimentos'),
(19, '1015678901 Santiago Javier Navarro López', '6 Levotiroxina', 'Hipotiroidismo primario y secundario', 'Tomar 50 mcg una vez al día en ayunas'),
(20, '1019012345 Antonio Javier Moreno Ramírez', '7 Aspirina', 'Prevención secundaria de infarto de miocardio', 'Tomar 81 mg una vez al día'),
(21, '1022345678 Gabriela María Torres Gómez', '8 Furosemida', 'Edema asociado con insuficiencia cardíaca, renal o hepática', 'Tomar 20-80 mg una vez al día en la mañana'),
(22, '1024567890 Valentina Isabella Rojas Fernández', '9 Ranitidina', 'Úlcera péptica, reflujo gastroesofágico', 'Tomar 150 mg dos veces al día'),
(23, '1025678901 José Manuel González Rodríguez', '10 Ciprofloxacino', 'Infecciones del tracto urinario, respiratorio y gastrointestinal', 'Tomar 500 mg cada 12 horas durante 7-14 días'),
(24, '1026789012 Ana Isabel Gómez Hernández', '11 Alprazolam', 'Trastornos de ansiedad', 'Tomar 0.25-0.5 mg tres veces al día según necesidad');

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
(12, 'Centro de Salud Santa Clara', 'Transversal 6 #12-35', '5544332211', 'Centro De Salud'),
(13, 'Hospital Santa Fe de Bogotá', 'Calle 119 #7-75', '9876543210', 'Hospital'),
(14, 'Clínica del Country', 'Calle 85 #19-15', '2233445566', 'Clínica'),
(15, 'Hospital de la Misericordia', 'Av. Caracas #1-99', '3344556677', 'Hospital'),
(16, 'Centro de Salud San Cristóbal', 'Calle 34 #7-20', '4455667788', 'Centro De Salud'),
(17, 'Clínica del Occidente', 'Cra. 72 #18-60', '5566778899', 'Clínica'),
(18, 'Hospital El Tunal', 'Calle 47B #23-90', '6677889900', 'Hospital');

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
(1126447331, 'CC', 'Alejandro', '', 'Ardila', 'Llano', 'aardila257@gmail.com', '$2b$10$x4NPR7Qd2Bz2IS9Bzg4Z3OFUs2Sgu2uFpZGSTspQPdNUT/GdGHwz6', '3125175148', 'True', 'Medico', 'Cirugía General', 'Hospital Universitario San Ignacio'),
(1002345678, 'CC', 'Pedro', 'Alonso', 'Ramirez', 'Lopez', 'pedro.ramirez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3101234567', 'False', 'Paciente', '', 'Hospital Universitario San Ignacio'),
(1003456789, 'TI', 'Lucía', 'Fernanda', 'García', 'Martínez', 'lucia.garcia@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3112345678', 'True', 'Paciente', '', 'Clínica de Marly'),
(1004567890, 'CC', 'María', 'Isabel', 'López', 'Fernández', 'maria.lopez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3123456789', 'True', 'Medico', 'Ortopedia', 'Hospital Militar Central'),
(1005678901, 'TI', 'Carlos', 'Andrés', 'Martínez', 'Gómez', 'carlos.martinez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3134567890', 'True', 'Medico', 'Oftalmología', 'Centro de Salud Santa Clara'),
(1006789012, 'NIT', 'Ana', 'Carolina', 'Rodríguez', 'Hernández', 'ana.rodriguez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3145678901', 'True', 'Paciente', '', 'Hospital Santa Fe de Bogotá'),
(1007890123, 'Pasaporte', 'Jorge', 'Luis', 'Pérez', 'Díaz', 'jorge.perez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3156789012', 'True', 'Secretaria', '', 'Clínica del Country'),
(1008901234, 'CC', 'Laura', 'Patricia', 'Sánchez', 'Jiménez', 'laura.sanchez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3167890123', 'True', 'Medico', 'Oncología', 'Hospital de la Misericordia'),
(1009012345, 'TI', 'Andrés', 'Felipe', 'Moreno', 'Ortiz', 'andres.moreno@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3178901234', 'True', 'Paciente', '', 'Centro de Salud San Cristóbal'),
(1010123456, 'NIT', 'Valeria', 'Andrea', 'Vargas', 'Guerrero', 'valeria.vargas@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3189012345', 'True', 'Medico', 'Gastroenterología', 'Clínica del Occidente'),
(1011234567, 'Pasaporte', 'Diego', 'Fernando', 'Ruiz', 'Navarro', 'diego.ruiz@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3190123456', 'True', 'Medico', 'Nefrología', 'Hospital El Tunal'),
(1013456789, 'TI', 'Tomás', 'Eduardo', 'Suárez', 'Cortés', 'tomas.suarez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3212345678', 'True', 'Medico', 'Urología', 'Clínica de Marly'),
(1014567890, 'NIT', 'Alejandra', 'Valentina', 'Herrera', 'Cardozo', 'alejandra.herrera@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3223456789', 'True', 'Medico', 'Psiquiatría', 'Hospital Militar Central'),
(1015678901, 'Pasaporte', 'Santiago', 'Javier', 'Navarro', 'López', 'santiago.navarro@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3234567890', 'True', 'Paciente', '', 'Centro de Salud Santa Clara'),
(1017890123, 'TI', 'Esteban', 'Mateo', 'Castaño', 'Vargas', 'esteban.castano@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3256789012', 'True', 'Medico', 'Neumología', 'Clínica del Country'),
(1019012345, 'Pasaporte', 'Antonio', 'Javier', 'Moreno', 'Ramírez', 'antonio.moreno@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3278901234', 'True', 'Paciente', '', 'Centro de Salud San Cristóbal'),
(1021234567, 'TI', 'Ricardo', 'Alonso', 'Ramírez', 'López', 'ricardo.ramirez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3290123456', 'True', 'Medico', 'Reumatología', 'Hospital El Tunal'),
(1022345678, 'CC', 'Gabriela', 'María', 'Torres', 'Gómez', 'gabriela.torres@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3301234567', 'True', 'Paciente', '', 'Hospital Universitario San Ignacio'),
(1023456789, 'TI', 'Diego', 'Andrés', 'Suárez', 'Martínez', 'diego.suarez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3312345678', 'True', 'Medico', 'Pediatría', 'Clínica de Marly'),
(1024567890, 'CC', 'Valentina', 'Isabella', 'Rojas', 'Fernández', 'valentina.rojas@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3323456789', 'True', 'Paciente', '', 'Hospital Militar Central'),
(1025678901, 'TI', 'José', 'Manuel', 'González', 'Rodríguez', 'jose.gonzalez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3334567890', 'True', 'Paciente', '', 'Centro de Salud Santa Clara'),
(1026789012, 'NIT', 'Ana', 'Isabel', 'Gómez', 'Hernández', 'ana.gomez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3345678901', 'True', 'Paciente', '', 'Hospital Santa Fe de Bogotá'),
(1027890123, 'Pasaporte', 'Luisa', 'Fernanda', 'Alvarez', 'Martínez', 'luisa.alvarez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3356789012', 'True', 'Paciente', '', 'Clínica del Country'),
(1028901234, 'CC', 'Andrés', 'Felipe', 'Pérez', 'Díaz', 'andres.perez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3367890123', 'True', 'Paciente', '', 'Hospital de la Misericordia'),
(1029012345, 'TI', 'Mariana', 'Alejandra', 'Jiménez', 'Ramírez', 'mariana.jimenez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3378901234', 'True', 'Paciente', '', 'Centro de Salud San Cristóbal'),
(1030123456, 'NIT', 'Camilo', 'Andrés', 'Ortega', 'García', 'camilo.ortega@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3389012345', 'True', 'Paciente', '', 'Clínica del Occidente'),
(1031234567, 'Pasaporte', 'Juliana', 'Isabella', 'Castro', 'Sánchez', 'juliana.castro@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3390123456', 'True', 'Paciente', '', 'Hospital El Tunal'),
(1032345678, 'CC', 'Gabriel', 'Andrés', 'Gutiérrez', 'Martínez', 'gabriel.gutierrez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3401234567', 'True', 'Paciente', '', 'Hospital Universitario San Ignacio'),
(1033456789, 'TI', 'Valentina', 'Sofía', 'Hernández', 'Gómez', 'valentina.hernandez@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3412345678', 'True', 'Paciente', '', 'Clínica de Marly'),
(1034567890, 'NIT', 'Juan', 'Pablo', 'Cortés', 'Díaz', 'juan.cortes@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3423456789', 'True', 'Paciente', '', 'Hospital Militar Central'),
(1035678901, 'Pasaporte', 'María', 'José', 'Vargas', 'Hernández', 'maria.vargas@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3434567890', 'True', 'Paciente', '', 'Centro de Salud Santa Clara'),
(1036789012, 'CC', 'David', 'Alejandro', 'Rojas', 'Gómez', 'david.rojas@example.com', '$2b$10$4h/FtmLSuM9Mj.nvrGuXWO1a8FbRGgRUenvIRhw3Mdj...', '3445678901', 'True', 'Paciente', '', 'Hospital Santa Fe de Bogotá');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `examenes`
--
ALTER TABLE `examenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `formulas`
--
ALTER TABLE `formulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `incapacidad`
--
ALTER TABLE `incapacidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `turnomedico`
--
ALTER TABLE `turnomedico`
  MODIFY `idturnoMedico` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
