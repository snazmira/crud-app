-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2021 at 05:54 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simple-crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeId` int(10) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNum` int(12) NOT NULL,
  `hireDate` date NOT NULL,
  `jobTitle` varchar(50) NOT NULL,
  `managerId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employeeId`, `fname`, `lname`, `email`, `phoneNum`, `hireDate`, `jobTitle`, `managerId`) VALUES
(1, 'Azmira', 'Ahmad', 'azmira@gmail.com', 18984762, '2021-10-24', 'Junior Software', 1),
(3, 'Nabila', 'Amira', 'nabila@gmail.com', 129898123, '2021-10-25', 'Junior Software', 1),
(4, 'Wani', 'Hisham', 'wani@gmail.com', 123232412, '2021-10-25', 'Junior Software', 1),
(7, 'SITI', 'BINTI AYOB', 'tuty31@hotmail.com', 162013183, '2021-10-25', 'SA', 1),
(10, 'SITI', 'BINTI AYOB', 'tuty31@hotmail.com', 162013183, '2021-10-25', 'Software Developer', 2),
(14, 'SITI', 'BINTI AYOB', 'tuty31@hotmail.com', 162013183, '2021-10-25', 'BA', 1),
(16, 'Fatihah', 'Yusoff', 'nfyusoff@gmail.com', 123212312, '2021-10-25', 'HR', 4),
(18, 'nabil', 'amie', 'nabil@gmail.com', 198787654, '2021-10-25', 'Manager', 4),
(23, 'nabila', 'atan', 'nabila@gmail.com', 234567, '2021-10-04', 'SA', 2),
(24, 'Nur Fatihah', 'Yusoff', 'nfyusoff@gmail.com', 198787654, '2021-10-04', 'Angular Developer', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(5) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `email`, `password`) VALUES
(1, 'snazmira00@gmail.com', '1234'),
(2, 'snazmira00@gmail.com', '1234'),
(3, 'snazmira00@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
