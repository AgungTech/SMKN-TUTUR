-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 07 Jan 2017 pada 07.18
-- Versi Server: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `multimedia`
--
CREATE DATABASE IF NOT EXISTS `multimedia` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `multimedia`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengaturan`
--

CREATE TABLE `pengaturan` (
  `kode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_barang`
--

CREATE TABLE `tbl_barang` (
  `kode_barang` int(4) NOT NULL,
  `no_registrasi` int(10) NOT NULL,
  `tgl_registrasi` varchar(10) NOT NULL,
  `tgl_beli` varchar(10) NOT NULL,
  `merk` varchar(20) NOT NULL,
  `tipe` varchar(30) NOT NULL,
  `jenis` varchar(20) NOT NULL,
  `kelengkapan` varchar(50) NOT NULL,
  `jumlah` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Data Inventaris';

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_keperluan`
--

CREATE TABLE `tbl_keperluan` (
  `kode_keperluan` int(3) NOT NULL,
  `nama_keperluan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_siswa`
--

CREATE TABLE `tbl_siswa` (
  `nis` int(11) NOT NULL,
  `nama_siswa` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Laki-Laki','Perempuan') NOT NULL,
  `tmpt_lahir` varchar(30) NOT NULL,
  `tgl_lahir` varchar(10) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `kelas` enum('Sepuluh','Sebelas','DuaBelas') NOT NULL,
  `prg_keahlian` varchar(5) NOT NULL
) COMMENT='Nomor Induk Siswa';

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_transaksi`
--

CREATE TABLE `tbl_transaksi` (
  `id_peminjaman` int(4) NOT NULL,
  `nama_siswa` varchar(50) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `tgl_pinjam` varchar(16) NOT NULL,
  `tgl_kembali` varchar(16) NOT NULL,
  `kode_keperluan` int(4) NOT NULL,
  `keadaan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Data Kegiatan Transaksi';

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(5) NOT NULL,
  `nama_user` varchar(20) NOT NULL,
  `kunci` varchar(11) NOT NULL,
  `level` enum('admin','operator','siswa') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  ADD PRIMARY KEY (`kode_barang`);

--
-- Indexes for table `tbl_siswa`
--
ALTER TABLE `tbl_siswa`
  ADD PRIMARY KEY (`nis`);

--
-- Indexes for table `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  ADD PRIMARY KEY (`id_peminjaman`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  MODIFY `kode_barang` int(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  MODIFY `id_peminjaman` int(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(5) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
