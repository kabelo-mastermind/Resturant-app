-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 10:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `quantity` int(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `name`, `category`, `quantity`, `price`, `created_at`, `updated_at`, `image`, `amount`) VALUES
(9, 'meat', 'beef', 20, 50.60, '2024-02-24 22:11:46', '2024-02-24 22:11:46', 'IMG-20230416-WA0008.jpg', 1),
(10, 'juice 100%', 'drink', 60, 20.00, '2024-02-25 10:31:51', '2024-03-01 08:58:40', 'IMG-20230416-WA0020.jpg', 1),
(11, 'cola update', 'drink', 67, 90.00, '2024-02-25 10:32:17', '2024-02-25 10:46:53', 'IMG-20230416-WA0010.jpg', 1),
(12, 'phuthu', 'lunch', 500, 30.69, '2024-02-25 15:17:45', '2024-02-25 15:17:45', 'bucket hats 3.png', 1),
(13, 'rice', 'meal', 50, 15.00, '2024-03-01 09:01:25', '2024-03-01 09:01:25', 'elementor.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oderId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`oderId`, `name`, `category`, `price`, `quantity`, `amount`, `customer_email`, `customer_name`, `address`, `phone_number`) VALUES
(1, 'juice', 'drink', 20.00, 89, 1, '', '', '', ''),
(2, 'cola update', 'drink', 90.00, 67, 2, '', '', '', ''),
(3, 'meat', 'beef', 50.60, 20, 1, '', '', '', ''),
(4, 'phuthu', 'lunch', 30.69, 500, 4, '', '', '', ''),
(5, 'meat', 'beef', 50.60, 20, 1, '', '', '', ''),
(6, 'juice', 'drink', 20.00, 89, 1, '', '', '', ''),
(7, 'cola update', 'drink', 90.00, 67, 3, '', '', '', ''),
(8, 'juice 100%', 'drink', 20.00, 60, 1, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'kabelo', 'test@example.com', '123456789', 'visitor'),
(2, 'admin7777', '0604749776kb@gmail.com', '12345678', 'admin'),
(3, 'kabelo', 'test2@example.com', '12345678', 'driver');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oderId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `oderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
