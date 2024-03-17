-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2024 at 02:07 PM
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
(15, 'Chicken Caesar Salad', 'Lunch', 198, 50.50, '2024-03-16 20:40:00', '2024-03-16 21:10:21', 'salad.jpg', NULL),
(16, 'Avocado Toast', 'Breakfast', 300, 30.00, '2024-03-16 20:48:53', '2024-03-16 20:48:53', 'avocado.jpg', 1),
(17, 'Strawberry Banana Smoothie', 'Drinks', 249, 18.60, '2024-03-16 20:57:52', '2024-03-16 21:03:46', 'strawberry.jpg', 1),
(18, 'Hummus and Veggie Sticks', 'Snacks', 150, 80.00, '2024-03-16 21:00:25', '2024-03-16 21:00:25', 'Hummus.jpg', 1),
(19, 'Chocolate Chip Cookies', 'Dessert', 278, 10.50, '2024-03-16 21:01:20', '2024-03-16 21:10:22', 'chocolate.jpeg', 1),
(20, 'Margherita Pizza', 'Lunch', 120, 140.00, '2024-03-16 21:02:15', '2024-03-16 21:02:15', 'pizza.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(255) DEFAULT 'Pending',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `name`, `category`, `price`, `quantity`, `amount`, `user_id`, `created_at`, `status`, `updated_at`) VALUES
(17, 'Chocolate Chip Cookies', 'Dessert', 10.50, 280, 1, 2, '2024-03-16 21:03:46', 'delivering', '2024-03-16 21:11:53'),
(18, 'Strawberry Banana Smoothie', 'Drinks', 18.60, 250, 1, 2, '2024-03-16 21:03:46', 'delivering', '2024-03-16 21:11:50'),
(19, 'Chicken Caesar Salad', 'Lunch', 50.50, 200, 2, 3, '2024-03-16 21:10:21', 'Pending', '2024-03-16 21:10:21'),
(20, 'Chocolate Chip Cookies', 'Dessert', 10.50, 279, 1, 3, '2024-03-16 21:10:21', 'Pending', '2024-03-16 21:10:21');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `delivery_address` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `user_id`, `payment_method`, `delivery_address`, `phone_number`, `created_at`) VALUES
(10, 2, 'cash', 'Block L soshanguve', '0713340401', '2024-03-16 21:05:29'),
(11, 3, 'card', '273 stead Ave queenswood', '0713340402', '2024-03-16 21:10:49');

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
(3, 'kabelo', 'test2@example.com', '12345678', 'driver'),
(4, 'kabza', 'kabelodavidnkoane@gmail.com', '1234567891', '1'),
(5, 'kabza', 'kabelodavidnkoane@gmail.com', '1234567891', 'visitor');

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
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
