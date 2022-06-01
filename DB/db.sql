-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2022 a las 18:55:42
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concessionaire`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `matricula` varchar(7) NOT NULL,
  `km` int(6) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `color` varchar(20) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `puertas` int(2) NOT NULL,
  `cv` int(3) NOT NULL,
  `fecha_matr` varchar(100) NOT NULL,
  `precio` int(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `city` varchar(100) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `modelo`, `marca`, `matricula`, `km`, `estado`, `color`, `tipo`, `puertas`, `cv`, `fecha_matr`, `precio`, `img`, `lat`, `lng`, `city`, `count`) VALUES
(1, 'leon cupra', 'Seat', '7876PCD', 100, 'Km0', 'Black', 'Gasolina', 5, 120, '10/08/2020', 10000, 'seatblack.jpg', 38.8866, -0.494137, 'Montaverner', 48),
(2, 'fiesta', 'Ford', '7654LKL', 2000, 'Km0', 'White', 'Electrico', 3, 200, '20/09/2021', 10000, 'fordfiwhite.jfif', 38.8683, -0.516332, 'Bufali', 211),
(3, 'leon', 'Seat', '7876PCD', 100, 'Km0', 'Green', 'Gasolina', 5, 120, '10/08/2020', 10000, 'seatgreen.jpg', 38.8405, -0.520858, 'Albaida', 19),
(4, 'fiesta', 'Ford', '7654LKL', 2000, 'Km0', 'Blue', 'Electrico', 4, 200, '20/09/2021', 10000, 'fordfiblue.jpg', 38.8209, -0.601907, 'Ontinyent', 153),
(6, '206', 'Peugeot', '2046BXX', 13000, 'Segundamano', 'Blue', 'Diesel', 5, 90, '02/02/2022', 11800, 'peugeot206blue.jpg', 38.8795, -0.591374, 'Aielo de Malferit', 4),
(7, 'mustang', 'Ford', '9874MKM', 500, 'km0', 'Blue', 'Gasolina', 3, 450, '20/02/2022', 350000, 'mustang1.jpg', 38.9129, -0.548704, 'Olleria', 2),
(8, 'Multipla', 'Fiat', '8764KJM', 90, 'Renta', 'Black', 'Diesel', 2, 70, '10/02/1970', 76000, 'multipla.jpg', 38.8328, -0.498102, 'Adzaneta', 5),
(9, '150º', 'Ferrari', '9999MVP', 0, 'Km0', 'Red', 'Adaptado', 2, 998, '23/02/2022', 1600000, 'francesco.jpg', 42.5008, 1.52803, 'Andorra la Vella', 7),
(10, 'supra mk5', 'Toyota', '6532JKS', 3000, 'km0', 'Red', 'gasolina', 3, 190, '10/12/2022', 7000, 'suprared.jpg', 38.7429, -0.439148, 'Cocentaina', 3),
(11, 'i3', 'BMW', '8532YLS', 300, 'Segundamano', 'Blue', 'Electrico', 4, 120, '10/12/2020', 9000, 'i3blue.jpg', 38.7075, -0.463754, 'Alcoi', 4),
(12, 'renegade', 'Jeep', '7632KHV', 20000, 'Renta', 'White', 'Diesel', 3, 100, '10/12/2020', 90000, 'renegadewhite.jpg', 38.7806, -0.435848, 'Muro de Alcoy', 4),
(13, 'a5', 'Audi', '6352PYT', 12332, 'Renta', 'Green', 'Adaptado', 5, 120, '10/12/2020', 799234, 'a5green.jpg', 38.7864, -0.523464, 'Agres', 4),
(14, 'Astra', 'Opel', '8623PYL', 800, 'Segundamano', 'Yellow', 'Adaptado', 2, 180, '31/03/2022', 26000, 'astrayellow.jpg', 38.9193, -0.480158, 'Sempere', 4),
(16, 'Roadster', 'Mercedes', '7523KYR', 12000, 'Renta', 'White', 'Gasolina', 3, 220, '30/03/2022', 90000, 'roadsterwhite.jpg', 38.9235, -0.488611, 'Guadassequies', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `img`) VALUES
('Km0', 'km0.jfif'),
('Renta', 'renta.jpeg'),
('Segundamano', 'segundamano.jpg'),
('Seminuevo', 'seminuevo.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exceptions`
--

CREATE TABLE `exceptions` (
  `id` int(11) NOT NULL,
  `error` varchar(100) NOT NULL,
  `fecha` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `exceptions`
--

INSERT INTO `exceptions` (`id`, `error`, `fecha`) VALUES
(6, 'error_list', '19:59:13'),
(7, 'error_list', '19:59:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `id_car` int(11) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `img`
--

INSERT INTO `img` (`id`, `id_car`, `img`) VALUES
(1, 1, 'seatblack.jpg'),
(2, 1, 'seatblack2.jpg'),
(6, 7, 'mustang.jpg'),
(7, 7, 'mustang1.jpg'),
(8, 2, 'fordfiwhite.jfif'),
(9, 2, 'fordfiwhite1.jpg'),
(10, 3, 'seatgreen.jpg'),
(11, 3, 'seatgreen1.jpg'),
(12, 4, 'fordfiblue.jpg'),
(13, 4, 'fordfiblue1.jpg'),
(16, 6, 'peugeot206blue.jpg'),
(17, 6, 'peugeot206blue1.jpg'),
(18, 8, 'multipla.jpg'),
(19, 8, 'multipla1.jpg'),
(20, 9, 'francesco.jpg'),
(21, 9, 'francesco1.jpg'),
(22, 10, 'suprared.jpg'),
(23, 10, 'supraredinterior.jpg'),
(24, 11, 'i3blue.jpg'),
(25, 11, 'i3blue1.jpg'),
(32, 12, 'renegadewhite.jpg'),
(33, 13, 'a5green.jpg'),
(34, 13, 'a5green1.jpg'),
(35, 14, 'astrayellow.jpg'),
(36, 14, 'astrayellow2.jpg'),
(37, 16, 'roadsterwhite.jpg'),
(38, 16, 'roadsterwhite2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `id_usu` int(11) NOT NULL,
  `id_car` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `id_usu`, `id_car`) VALUES
(27, 14, 2),
(32, 14, 4),
(33, 14, 10),
(53, 14, 3),
(54, 14, 9),
(65, 13, 13),
(73, 13, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `img`) VALUES
('Audi', 'audi.png'),
('BMW', 'bmw.png'),
('Ferrari', 'ferrari.png'),
('Fiat', 'Fiat.png'),
('Ford', 'ford.png'),
('Jeep', 'jeep.png'),
('Mercedes', 'mercedes.png'),
('Opel', 'opel.png'),
('Peugeot', 'peugeot.png'),
('Renault', 'renault.png'),
('Seat', 'seat.png'),
('Toyota', 'toyota.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `old_user`
--

CREATE TABLE `old_user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `passwd` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `avatar` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `old_user`
--

INSERT INTO `old_user` (`id`, `username`, `passwd`, `email`, `type`, `avatar`) VALUES
(7, '20934389', '$2y$12$TT7Q7sV/dgBsXTHFXRnpSuozU.xskjxMIvHEv3GAaJ/M9jemH3m5e', 'santimartinezalbert@gmail.com', 'client', ''),
(8, '20934389', '$2y$12$4RYxFusms7WHWjD2BUVs2u/7JTeUFHmeyi9Zb80nmYbCuRdxaL.zi', 'santimartinezalbert02@gmail.com', 'client', ''),
(9, '10687406', '$2y$12$RA2JO5lyveGB06vBxRrGzuQfwA23s136UFcJhYGM8JONX3kOORecu', 'santimartinezalbert023@gmail.com', 'client', 'https://randomuser.me/da4162f7a8b4d6fbf152947c8f5301d4'),
(10, '10687406', '$2y$12$WURYffGEIDxk1/Zoa2LmzOQUAfP5yU2N864PZ08FP15YHBYATetOS', 'santimartinezalbert03@gmail.com', 'client', 'https://placeimg.com/400/400/38676ed959e5cad4d04c7011fb4b5acb'),
(11, '10687406', '$2y$12$45iThl/O/D5lkbdUhroqbOMLN3Ko4qltMQXbkuDMsdCuTVoCTdLM6', 'santimartinezalbert04@gmail.com', 'client', 'https://placeimg.com/400/400/96d9cfe14c4a9daff4fe9beefa1fde6b'),
(12, '111', '$2y$12$DV7WGNLh/URo9Qtz9mrgYO89E0f9s2EC6LP3nsbB3GOVa/7F/3VCi', 'santimartinezalbert@gmail.com', 'client', 'https://placeimg.com/400/400/1eddbc3f1eb5b3f7b4c918f4d305453b'),
(13, '123', '$2y$12$7j0yhZCHCOTuWi9/esLOFeuQ21Ofz37.t..VtxgzwYusddfTOupee', 'santimartinezalbert@gmail.com', 'admin', 'https://placeimg.com/400/400/1eddbc3f1eb5b3f7b4c918f4d305453b'),
(14, '1234', '$2y$12$KA8nm77JV0MDEU0xiGyyKuMvk5fNIVp7S/utMQ6N9I2FNAiuoVoS.', 'a@gmail.com', 'client', 'https://placeimg.com/400/400/70b03db954aa45fc2559e85f5d5bd13e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id`, `img`) VALUES
('Adaptado', 'adaptado.jpg'),
('Diesel', 'diesel.jpg'),
('Electrico', 'electrico.jpg'),
('Gasolina', 'gasolina.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `passwd` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `avatar` varchar(300) NOT NULL,
  `token_email` varchar(100) NOT NULL,
  `activate` varchar(100) DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `passwd`, `email`, `type`, `avatar`, `token_email`, `activate`) VALUES
('0598', 'popo', '$2y$10$507HO.MOFyGWerz0OIE..ecN7nsdJ8TShLdNxUoc1/y4pXLyk5wam', 'santimartinezalbert02@gmail.com', 'client', 'https://placeimg.com/400/400/d0d30f696d17094995414b6f068f7912', 'ab8fe7a59ecf513a5d84', 'false'),
('07', '20934389', '$2y$12$TT7Q7sV/dgBsXTHFXRnpSuozU.xskjxMIvHEv3GAaJ/M9jemH3m5e', 'santimartinezalbert@gmail.com', 'client', '', '8949fd6bf35752cb106d', 'false'),
('08', '20934389', '$2y$12$4RYxFusms7WHWjD2BUVs2u/7JTeUFHmeyi9Zb80nmYbCuRdxaL.zi', 'santimartinezalbert02@gmail.com', 'client', '', '14a035045bbe3f93039c', 'false'),
('09', '10687406', '$2y$12$RA2JO5lyveGB06vBxRrGzuQfwA23s136UFcJhYGM8JONX3kOORecu', 'santimartinezalbert023@gmail.com', 'client', 'https://randomuser.me/da4162f7a8b4d6fbf152947c8f5301d4', '', 'false'),
('10', '10687406', '$2y$12$WURYffGEIDxk1/Zoa2LmzOQUAfP5yU2N864PZ08FP15YHBYATetOS', 'santimartinezalbert03@gmail.com', 'client', 'https://placeimg.com/400/400/38676ed959e5cad4d04c7011fb4b5acb', '', 'false'),
('11', '10687406', '$2y$12$45iThl/O/D5lkbdUhroqbOMLN3Ko4qltMQXbkuDMsdCuTVoCTdLM6', 'santimartinezalbert04@gmail.com', 'client', 'https://placeimg.com/400/400/96d9cfe14c4a9daff4fe9beefa1fde6b', '', 'false'),
('12', '111', '$2y$12$DV7WGNLh/URo9Qtz9mrgYO89E0f9s2EC6LP3nsbB3GOVa/7F/3VCi', 'test@gmail.com', 'client', 'https://placeimg.com/400/400/1eddbc3f1eb5b3f7b4c918f4d305453b', '5d8540e402852d5566bb', 'false'),
('13', '123', '$2y$12$7j0yhZCHCOTuWi9/esLOFeuQ21Ofz37.t..VtxgzwYusddfTOupee', 'asdf@gmail.com', 'admin', 'https://placeimg.com/400/400/1eddbc3f1eb5b3f7b4c918f4d305453b', '8949fd6bf35752cb106d', 'false'),
('14', '1234', '$2y$12$KA8nm77JV0MDEU0xiGyyKuMvk5fNIVp7S/utMQ6N9I2FNAiuoVoS.', 'a@gmail.com', 'client', 'https://placeimg.com/400/400/70b03db954aa45fc2559e85f5d5bd13e', '48eda23e7e0ca8a7b93d', 'false'),
('2a8c', 'popo', '$2y$10$y2ZXusmbN1dxm0F29Xdwfu9EHXvr.kqHpv.G0y3925QRKNjDDbXMa', 'santimartinezalbert02@gmail.com', 'client', 'https://placeimg.com/400/400/d0d30f696d17094995414b6f068f7912', 'f1310754e714b0992504', 'false'),
('bf1e', 'popop', '$2y$10$mpFHkD7M.Ybdsp5Gs4MUwOnO4hMMxhE7O5xLTiWFyU3zgCbK6t/.S', 'santimartinezalbert@gmail.com', 'client', 'https://placeimg.com/400/400/1eddbc3f1eb5b3f7b4c918f4d305453b', '8949fd6bf35752cb106d', 'false'),
('cdcb', 'vicent', '$2y$10$goQYE4mv7YTv5G8Ay6TXwOTVpnklq4wEnhjhDDmS.ijYVjzqjnKOa', 'vinet@gmail.com', 'client', 'https://placeimg.com/400/400/057242498e2fe990afc032c49a89cc92', 'de4666bcbba2f1258551', 'false'),
('gmail |cn54LQVZj8PzNnIraK5Di0aIxNj2', 'gmail |Santi Martínez Albert', '', '', 'client', 'https://lh3.googleusercontent.com/a-/AOh14GhYQhrtJTop8TuWEbPkOK2dlOJ0Gc1EQmYx090FSw=s96-c', '', 'true');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marca` (`marca`),
  ADD KEY `estado` (`estado`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `exceptions`
--
ALTER TABLE `exceptions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_car` (`id_car`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_car` (`id_car`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `old_user`
--
ALTER TABLE `old_user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `exceptions`
--
ALTER TABLE `exceptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `old_user`
--
ALTER TABLE `old_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`marca`) REFERENCES `marcas` (`id`),
  ADD CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`estado`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `cars_ibfk_3` FOREIGN KEY (`tipo`) REFERENCES `tipo` (`id`);

--
-- Filtros para la tabla `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`);

--
-- Filtros para la tabla `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
