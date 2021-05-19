-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Maj 2021, 11:26
-- Wersja serwera: 10.4.18-MariaDB
-- Wersja PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `mybase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wisielec`
--

CREATE TABLE `wisielec` (
  `id` int(11) NOT NULL,
  `id_kat` int(11) NOT NULL,
  `kategoria` text COLLATE utf8_polish_ci NOT NULL,
  `haslo` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `wisielec`
--

INSERT INTO `wisielec` (`id`, `id_kat`, `kategoria`, `haslo`) VALUES
(1, 1, 'Roślina', 'Grubosz'),
(2, 2, 'Roślina', 'Aglaonema'),
(3, 3, 'Roślina', 'Kalanchoe'),
(4, 4, 'Roślina', 'Aloes'),
(5, 5, 'Roślina', 'Paproć'),
(6, 6, 'Roślina', 'Storczyk'),
(7, 7, 'Roślina', 'Wężownica'),
(8, 8, 'Roślina', 'Figowiec'),
(9, 9, 'Roślina', 'Palma'),
(10, 10, 'Roślina', 'Bazylia'),
(11, 1, 'Sport', 'Messi'),
(12, 2, 'Sport', 'Ronaldo'),
(13, 3, 'Sport', 'Igrzyska Olimpijskie'),
(14, 4, 'Sport', 'Lekkoatletyka'),
(15, 5, 'Sport', 'Szermierka'),
(16, 6, 'Sport', 'Żeglarstwo'),
(17, 7, 'Sport', 'Wioślarstwo'),
(18, 8, 'Sport', 'Snowboard'),
(19, 9, 'Sport', 'Unihokej'),
(20, 10, 'Sport', 'Saneczkarstwo'),
(21, 1, 'Muzyka', 'Fortepian'),
(22, 2, 'Muzyka', 'Jazz'),
(23, 3, 'Muzyka', 'Dyrygent'),
(24, 4, 'Muzyka', 'Kompozytor'),
(25, 5, 'Muzyka', 'Perkusista'),
(26, 6, 'Muzyka', 'Orkiestra'),
(27, 7, 'Muzyka', 'Kontrabas'),
(28, 8, 'Muzyka', 'Skrzypce'),
(29, 9, 'Muzyka', 'Gitarzysta'),
(30, 10, 'Muzyka', 'Chopin'),
(31, 1, 'Gry', 'Wiedźmin'),
(32, 2, 'Gry', 'Fifa'),
(33, 3, 'Gry', 'Counter Strike'),
(34, 4, 'Gry', 'Minecraft'),
(35, 5, 'Gry', 'Fortnite'),
(36, 6, 'Gry', 'Cyberpunk'),
(37, 7, 'Gry', 'The Sims'),
(38, 8, 'Gry', 'Euro Truck Simulator'),
(39, 9, 'Gry', 'Diablo'),
(40, 10, 'Gry', 'Grand Theft Auto'),
(41, 1, 'Zwierzęta', 'Antylopa'),
(42, 2, 'Zwierzęta', 'Lampart'),
(43, 3, 'Zwierzęta', 'Skorpion'),
(44, 4, 'Zwierzęta', 'Tygrys'),
(45, 5, 'Zwierzęta', 'Nosorożec'),
(46, 6, 'Zwierzęta', 'Kameleon'),
(47, 7, 'Zwierzęta', 'Kangur'),
(48, 8, 'Zwierzęta', 'Koala'),
(49, 9, 'Zwierzęta', 'Krokodyl'),
(50, 10, 'Zwierzęta', 'Żyrafa'),
(51, 1, 'Potrawa', 'Gołąbki'),
(52, 2, 'Potrawa', 'Gulasz'),
(53, 3, 'Potrawa', 'Bigos'),
(55, 5, 'Potrawa', 'Pierogi'),
(56, 6, 'Potrawa', 'Naleśniki'),
(57, 7, 'Potrawa', 'Schabowy'),
(58, 8, 'Potrawa', 'Rojak'),
(59, 9, 'Potrawa', 'Gofry'),
(60, 10, 'Potrawa', 'Rosół'),
(61, 1, 'Państwo', 'Afganistan'),
(62, 2, 'Państwo', 'Albania'),
(63, 3, 'Państwo', 'Białoruś'),
(64, 4, 'Państwo', 'Bahrajn'),
(65, 5, 'Państwo', 'Bahamy'),
(66, 6, 'Państwo', 'Dominikana'),
(67, 7, 'Państwo', 'Barbados'),
(68, 8, 'Państwo', 'Botswana'),
(69, 9, 'Państwo', 'Brazylia'),
(70, 10, 'Państwo', 'Brunei'),
(71, 1, 'Historia', 'Mezopotamia'),
(72, 2, 'Historia', 'Homer'),
(73, 3, 'Historia', 'Sokrates'),
(74, 4, 'Historia', 'Neron'),
(75, 5, 'Historia', 'wiosna ludów'),
(76, 6, 'Historia', 'Józef Piłsudski'),
(77, 7, 'Historia', 'Napoleon Bonaparte'),
(78, 8, 'Historia', 'Pompeje'),
(79, 9, 'Historia', 'Swetoniusz'),
(80, 10, 'Historia', 'Bizancjum'),
(81, 1, 'Kosmos', 'Gwiazdozbiór'),
(82, 2, 'Kosmos', 'Aldebaran'),
(83, 3, 'Kosmos', 'Obłok Oorta'),
(84, 4, 'Kosmos', 'Arktur'),
(85, 5, 'Kosmos', 'Teleskop Hubbla'),
(86, 6, 'Kosmos', 'Astronomia'),
(87, 7, 'Kosmos', 'Biały karzeł'),
(88, 8, 'Kosmos', 'czarna dziura'),
(89, 9, 'Kosmos', 'Wielki wybuch'),
(90, 10, 'Kosmos', 'Słońce');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `wisielec`
--
ALTER TABLE `wisielec`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `wisielec`
--
ALTER TABLE `wisielec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
