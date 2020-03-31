-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2020 at 10:53 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_perpus_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `kd_anggota` int(10) NOT NULL,
  `nama_anggota` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `tlpon` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `kd_buku` int(11) NOT NULL,
  `nm_buku` varchar(30) NOT NULL,
  `pengarang` varchar(30) NOT NULL,
  `penerbit` varchar(30) NOT NULL,
  `tarif` int(11) NOT NULL,
  `durasi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `id_pinjam`
--

CREATE TABLE `id_pinjam` (
  `no_pinjam` int(11) DEFAULT NULL,
  `kd_buku` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `peminjam`
--

CREATE TABLE `peminjam` (
  `no_pinjam` int(11) NOT NULL,
  `kd_anggota` int(10) DEFAULT NULL,
  `kd_petugas` int(10) DEFAULT NULL,
  `tgl_pinjam` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `kd_petugas` int(10) NOT NULL,
  `nm_petugas` varchar(30) NOT NULL,
  `jabatan` varchar(30) NOT NULL,
  `tlpn_petugas` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `number` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(1, 'Wulling', 'Wei', 'Male', 'wei@gmail.com', '$2b$10$/48elac7CgMPiIPyjUim2uwll0If3pHQNQzsAQJByhWXYkeCLfEMe', 990099);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`kd_anggota`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`kd_buku`);

--
-- Indexes for table `id_pinjam`
--
ALTER TABLE `id_pinjam`
  ADD KEY `kd_buku` (`kd_buku`),
  ADD KEY `no_pinjam` (`no_pinjam`);

--
-- Indexes for table `peminjam`
--
ALTER TABLE `peminjam`
  ADD PRIMARY KEY (`no_pinjam`),
  ADD KEY `kd_anggota` (`kd_anggota`),
  ADD KEY `kd_petugas` (`kd_petugas`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`kd_petugas`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `id_pinjam`
--
ALTER TABLE `id_pinjam`
  ADD CONSTRAINT `id_pinjam_ibfk_1` FOREIGN KEY (`kd_buku`) REFERENCES `buku` (`kd_buku`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `id_pinjam_ibfk_2` FOREIGN KEY (`no_pinjam`) REFERENCES `peminjam` (`no_pinjam`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `peminjam`
--
ALTER TABLE `peminjam`
  ADD CONSTRAINT `peminjam_ibfk_1` FOREIGN KEY (`kd_anggota`) REFERENCES `anggota` (`kd_anggota`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `peminjam_ibfk_2` FOREIGN KEY (`kd_petugas`) REFERENCES `petugas` (`kd_petugas`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
