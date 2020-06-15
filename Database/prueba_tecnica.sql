-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2020 a las 23:44:52
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_tecnica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`, `description`) VALUES
(1, 'action', 'action movies'),
(2, 'terror', 'scary movies'),
(3, 'humor', 'funny movies'),
(4, 'drama', 'crying movies'),
(5, 'kids', 'kid content');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `id_genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `image`, `created_at`, `id_genre`) VALUES
(16, 'Prueba', 'Prueba 3', 'https://pm1.narvii.com/6713/edc6c81a7038fdf5ab20d078ebe1730ff896571b_hq.jpg', '2020-06-16 06:13:15', 2),
(20, 'Hombres de Negro', 'Pelicula de ciencia ficción y excelentes efectos especiales.', 'https://cinefilocriticon.com/wp-content/uploads/2012/05/Hombres-de-Negro3.jpg', '2020-06-16 02:13:43', 1);

--
-- Disparadores `movies`
--
DELIMITER $$
CREATE TRIGGER `CHANGE` BEFORE DELETE ON `movies` FOR EACH ROW BEGIN
	insert INTO prueba_tecnica.movies_log(movie,  tipe) select title, id_genre from movies where id = old.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies_log`
--

CREATE TABLE `movies_log` (
  `id` int(11) NOT NULL,
  `movie` varchar(100) NOT NULL,
  `tipe` varchar(100) NOT NULL,
  `date_of` timestamp NOT NULL DEFAULT curtime()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `movies_log`
--

INSERT INTO `movies_log` (`id`, `movie`, `tipe`, `date_of`) VALUES
(1, 'a', 'b', '2020-06-14 17:52:37'),
(2, 'probando', '1', '2020-06-14 18:06:44'),
(3, 'fast and forious', '1', '2020-06-14 18:08:00'),
(4, 'John Wick', '1', '2020-06-14 18:08:00'),
(5, 'prueba', '1', '2020-06-14 18:08:00'),
(6, 'a', '3', '2020-06-15 17:25:49'),
(7, 'b', '2', '2020-06-15 18:50:54'),
(8, '', '0', '2020-06-15 20:02:06'),
(9, 'Son como niños', '3', '2020-06-15 20:03:08'),
(10, '', '0', '2020-06-15 20:09:47'),
(11, 'Son como niños', '3', '2020-06-15 20:11:34'),
(12, 'Son como niños', '3', '2020-06-15 20:14:51'),
(13, 'Shrek', '5', '2020-06-15 20:23:32'),
(14, 'Prueba', '3', '2020-06-15 20:29:18'),
(15, 'Taxi Driver', '1', '2020-06-15 20:54:59'),
(16, 'Prueba', '3', '2020-06-15 21:01:50'),
(17, 'El Profesional', '4', '2020-06-15 21:14:41');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies_log`
--
ALTER TABLE `movies_log`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `movies_log`
--
ALTER TABLE `movies_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
