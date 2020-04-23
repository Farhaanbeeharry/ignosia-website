-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2020 at 11:09 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ignosia`
--

-- --------------------------------------------------------

--
-- Table structure for table `downloads`
--

CREATE TABLE `downloads` (
  `NumberOfDownloads` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `downloads`
--

INSERT INTO `downloads` (`NumberOfDownloads`) VALUES
(7);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(100) NOT NULL,
  `FirstName` varchar(32) NOT NULL,
  `LastName` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `FirstName`, `LastName`) VALUES
('CGe39LnTHOxQs8EftxLHofbf6iDW2S2Uanrb9iquKEfA87aQgPpmCteoqc7tHJPhhLiHnSBbGwE2bmWN5jwAd2C7Rekq1D1KV5Pr', 'Test', 'Testing'),
('Gj9GZ2zMCWuvUHKKmHTjmYwAnrSOgOAeEm7FOUYZmBURjglOcpLQrVXdDvzILg6UGJi57gbn1b2iotNPklbNM84VId9fg88yrLE5', 'Farhaan', 'Beeharry'),
('hHpLHhg8QABeHahLgbX60XEhcKWFu84YKly6NLBg1xMQUDLOPqT1yJQtbQLAa9MOPBRFwgfRgsoAVZ09ALsdHmINsR1e2Jq0iuyE', 'Selenium', 'Testing'),
('Z2CTjBfWxgXYrrc25Drd0voePClYsAGqKVjOeI2bGqPD3EbTrFDTKW5Mfj8YIQfrWcuSljtS4W6RAi4tvyfeKyik4hqXZj6L7pSm', 'Rushaa', 'Mathoo');

-- --------------------------------------------------------

--
-- Table structure for table `usercontact`
--

CREATE TABLE `usercontact` (
  `UserID` varchar(100) NOT NULL,
  `PhoneNumber` int(8) NOT NULL,
  `EmailAddress` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usercontact`
--

INSERT INTO `usercontact` (`UserID`, `PhoneNumber`, `EmailAddress`) VALUES
('CGe39LnTHOxQs8EftxLHofbf6iDW2S2Uanrb9iquKEfA87aQgPpmCteoqc7tHJPhhLiHnSBbGwE2bmWN5jwAd2C7Rekq1D1KV5Pr', 99999999, 'test@testing.com'),
('Gj9GZ2zMCWuvUHKKmHTjmYwAnrSOgOAeEm7FOUYZmBURjglOcpLQrVXdDvzILg6UGJi57gbn1b2iotNPklbNM84VId9fg88yrLE5', 57076881, 'farhaanbeeharry.ms@gmail.com'),
('hHpLHhg8QABeHahLgbX60XEhcKWFu84YKly6NLBg1xMQUDLOPqT1yJQtbQLAa9MOPBRFwgfRgsoAVZ09ALsdHmINsR1e2Jq0iuyE', 1122, 'selenium@test.com'),
('Z2CTjBfWxgXYrrc25Drd0voePClYsAGqKVjOeI2bGqPD3EbTrFDTKW5Mfj8YIQfrWcuSljtS4W6RAi4tvyfeKyik4hqXZj6L7pSm', 51234567, 'rushaa@ignosia.com');

-- --------------------------------------------------------

--
-- Table structure for table `usermessage`
--

CREATE TABLE `usermessage` (
  `UserID` varchar(100) NOT NULL,
  `Subscription` enum('Subscribed','Unsubscribed') NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usermessage`
--

INSERT INTO `usermessage` (`UserID`, `Subscription`, `Message`) VALUES
('CGe39LnTHOxQs8EftxLHofbf6iDW2S2Uanrb9iquKEfA87aQgPpmCteoqc7tHJPhhLiHnSBbGwE2bmWN5jwAd2C7Rekq1D1KV5Pr', 'Subscribed', 'Ut ac magna vel nisi luctus ultrices at ac ex. Donec porta, mauris sed commodo auctor, massa metus consectetur diam, at tristique risus justo sit amet tortor. Etiam elementum efficitur enim, vitae sollicitudin nisi volutpat ornare. Nunc imperdiet accumsan dui, ut interdum ligula eleifend at. Nulla nec interdum lacus, quis scelerisque arcu. Vivamus vitae neque in mi finibus aliquam. Proin diam lectus, vehicula vitae viverra ut, porttitor sed elit.'),
('Gj9GZ2zMCWuvUHKKmHTjmYwAnrSOgOAeEm7FOUYZmBURjglOcpLQrVXdDvzILg6UGJi57gbn1b2iotNPklbNM84VId9fg88yrLE5', 'Subscribed', 'Aliquam sed auctor massa, at finibus nunc. Nunc sit amet lorem at dolor viverra molestie at dictum sapien. Nullam dictum, metus vitae vehicula viverra, tortor felis convallis ex, at gravida turpis urna et odio. Donec blandit tempor nulla, ac mattis mauris consectetur nec. Nullam vestibulum massa vel elit efficitur, vitae pulvinar dolor hendrerit. Donec vestibulum pulvinar consequat. Quisque quis imperdiet turpis, a porttitor dui. Integer nec quam semper, auctor justo sed, consequat dui. Mauris bibendum dolor eget enim facilisis pulvinar. Quisque egestas tellus id risus egestas laoreet.'),
('hHpLHhg8QABeHahLgbX60XEhcKWFu84YKly6NLBg1xMQUDLOPqT1yJQtbQLAa9MOPBRFwgfRgsoAVZ09ALsdHmINsR1e2Jq0iuyE', 'Unsubscribed', 'Suspendisse vulputate metus nunc, sit amet fermentum tellus commodo vel. Cras tempus tortor sed libero vehicula, in mollis felis dictum. Morbi finibus suscipit ligula a dapibus. Vivamus interdum nisi augue, ut pretium felis ultricies sed. Mauris dapibus, ex et ultricies luctus, diam nunc dignissim enim, nec porta leo purus eget dolor. Maecenas consequat elementum ipsum. Maecenas sit amet urna gravida, lacinia lorem sit amet, consectetur purus.'),
('Z2CTjBfWxgXYrrc25Drd0voePClYsAGqKVjOeI2bGqPD3EbTrFDTKW5Mfj8YIQfrWcuSljtS4W6RAi4tvyfeKyik4hqXZj6L7pSm', 'Unsubscribed', 'Aenean justo lectus, commodo ut sollicitudin in, scelerisque fringilla purus. Donec et lacus sit amet magna vulputate ultrices at nec tellus. Vivamus id ante tortor. Nam vulputate enim ac diam condimentum, ut malesuada ipsum vehicula. Aenean eu porta nisi, ac volutpat nulla.');

-- --------------------------------------------------------

--
-- Table structure for table `userpersonal`
--

CREATE TABLE `userpersonal` (
  `UserID` varchar(100) NOT NULL,
  `Gender` enum('Male','Female','Other') NOT NULL,
  `Device` enum('iOS','Android') NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Country` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userpersonal`
--

INSERT INTO `userpersonal` (`UserID`, `Gender`, `Device`, `DateOfBirth`, `Country`) VALUES
('CGe39LnTHOxQs8EftxLHofbf6iDW2S2Uanrb9iquKEfA87aQgPpmCteoqc7tHJPhhLiHnSBbGwE2bmWN5jwAd2C7Rekq1D1KV5Pr', 'Male', 'iOS', '2001-01-01', 'Mauritius'),
('Gj9GZ2zMCWuvUHKKmHTjmYwAnrSOgOAeEm7FOUYZmBURjglOcpLQrVXdDvzILg6UGJi57gbn1b2iotNPklbNM84VId9fg88yrLE5', 'Male', 'Android', '1998-05-22', 'Mauritius'),
('hHpLHhg8QABeHahLgbX60XEhcKWFu84YKly6NLBg1xMQUDLOPqT1yJQtbQLAa9MOPBRFwgfRgsoAVZ09ALsdHmINsR1e2Jq0iuyE', 'Other', 'Android', '1998-05-05', 'Selenium World'),
('Z2CTjBfWxgXYrrc25Drd0voePClYsAGqKVjOeI2bGqPD3EbTrFDTKW5Mfj8YIQfrWcuSljtS4W6RAi4tvyfeKyik4hqXZj6L7pSm', 'Female', 'Android', '1998-06-23', 'Mauritius');

-- --------------------------------------------------------

--
-- Table structure for table `userreview`
--

CREATE TABLE `userreview` (
  `UserID` varchar(100) NOT NULL,
  `Happiness` enum('Happy','Unhappy') NOT NULL,
  `Satisfaction` enum('Excellent','Poor') NOT NULL,
  `Review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userreview`
--

INSERT INTO `userreview` (`UserID`, `Happiness`, `Satisfaction`, `Review`) VALUES
('CGe39LnTHOxQs8EftxLHofbf6iDW2S2Uanrb9iquKEfA87aQgPpmCteoqc7tHJPhhLiHnSBbGwE2bmWN5jwAd2C7Rekq1D1KV5Pr', 'Happy', 'Poor', 'Fusce in dictum erat. Donec sodales tortor sed interdum consectetur. Nunc ac feugiat massa, at vehicula turpis. Aliquam erat volutpat. Integer pharetra cursus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at dapibus urna. Morbi at odio ut nisl ultrices molestie et id nibh. Ut viverra bibendum dictum. In convallis turpis dolor, a venenatis arcu porttitor id.'),
('Gj9GZ2zMCWuvUHKKmHTjmYwAnrSOgOAeEm7FOUYZmBURjglOcpLQrVXdDvzILg6UGJi57gbn1b2iotNPklbNM84VId9fg88yrLE5', 'Happy', 'Excellent', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan mattis dui in blandit. Nunc id nisi eros. Integer id lobortis augue, ut lobortis ex. Cras erat enim, sodales eu dui et, luctus elementum sem. Quisque placerat, elit et pharetra cursus, lorem ligula sollicitudin ex, tempor ultricies nibh sem a lacus.'),
('hHpLHhg8QABeHahLgbX60XEhcKWFu84YKly6NLBg1xMQUDLOPqT1yJQtbQLAa9MOPBRFwgfRgsoAVZ09ALsdHmINsR1e2Jq0iuyE', 'Unhappy', 'Excellent', 'Mauris faucibus lacinia mauris, vel sagittis ex vulputate sit amet. Phasellus dapibus, elit non placerat sagittis, felis felis mattis mi, at aliquam tortor nulla in velit. Donec augue urna, rutrum in orci suscipit, condimentum dignissim sapien. Integer non nisi luctus augue dignissim pharetra. Morbi justo dui, sodales sed nisl id, suscipit gravida metus. Phasellus ultricies feugiat mauris eu rutrum. In laoreet eros vitae enim vestibulum, sed cursus ligula lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'),
('Z2CTjBfWxgXYrrc25Drd0voePClYsAGqKVjOeI2bGqPD3EbTrFDTKW5Mfj8YIQfrWcuSljtS4W6RAi4tvyfeKyik4hqXZj6L7pSm', 'Happy', 'Excellent', 'Aliquam turpis magna, elementum a lectus vel, tincidunt finibus nunc. Aenean ornare felis eros, eu malesuada elit maximus vel. Ut vulputate luctus bibendum. Vivamus at hendrerit enim. Sed nec lacus eget magna gravida porta in nec urna. Nullam vulputate congue consequat.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `usercontact`
--
ALTER TABLE `usercontact`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `EmailAddress` (`EmailAddress`);

--
-- Indexes for table `usermessage`
--
ALTER TABLE `usermessage`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `userpersonal`
--
ALTER TABLE `userpersonal`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `userreview`
--
ALTER TABLE `userreview`
  ADD PRIMARY KEY (`UserID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usercontact`
--
ALTER TABLE `usercontact`
  ADD CONSTRAINT `usercontact_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `usermessage`
--
ALTER TABLE `usermessage`
  ADD CONSTRAINT `usermessage_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `userpersonal`
--
ALTER TABLE `userpersonal`
  ADD CONSTRAINT `userpersonal_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `userreview`
--
ALTER TABLE `userreview`
  ADD CONSTRAINT `userreview_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
