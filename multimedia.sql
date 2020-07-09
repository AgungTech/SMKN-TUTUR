-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 13 Agu 2018 pada 05.49
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
DROP DATABASE `multimedia`;
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

--
-- Dumping data untuk tabel `tbl_keperluan`
--

INSERT INTO `tbl_keperluan` (`kode_keperluan`, `nama_keperluan`) VALUES
(101, 'Praktek Kejuruan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_siswa`
--

CREATE TABLE `tbl_siswa` (
  `nisn` varchar(10) NOT NULL,
  `nama_siswa` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Laki-Laki','Perempuan') NOT NULL,
  `tmpt_lahir` varchar(30) NOT NULL,
  `tgl_lahir` varchar(10) NOT NULL,
  `alamat` varchar(150) NOT NULL,
  `kelas` enum('Sepuluh','Sebelas','DuaBelas') NOT NULL,
  `prg_keahlian` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Nomor Induk Siswa';

--
-- Dumping data untuk tabel `tbl_siswa`
--

INSERT INTO `tbl_siswa` (`nisn`, `nama_siswa`, `jenis_kelamin`, `tmpt_lahir`, `tgl_lahir`, `alamat`, `kelas`, `prg_keahlian`) VALUES
('0003707341', 'Aliyah Lusianti', 'Perempuan', 'Surabaya', '2000-10-04', 'Gerdu;RT.01;RW.02;Dsn.Gerdu;Kel.Gendro;Kec.Tutur;Kode-Pos.67165', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_transaksi`
--

CREATE TABLE `tbl_transaksi` (
  `id_peminjaman` int(4) NOT NULL,
  `nama_siswa` varchar(50) NOT NULL,
  `nama_barang` varchar(500) NOT NULL,
  `tgl_pinjam` varchar(16) NOT NULL,
  `tgl_kembali` varchar(16) NOT NULL,
  `kode_keperluan` int(4) NOT NULL,
  `keadaan` varchar(20) NOT NULL,
  `detail` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Data Kegiatan Transaksi';

--
-- Dumping data untuk tabel `tbl_transaksi`
--

INSERT INTO `tbl_transaksi` (`id_peminjaman`, `nama_siswa`, `nama_barang`, `tgl_pinjam`, `tgl_kembali`, `kode_keperluan`, `keadaan`, `detail`) VALUES
(1111, 'Aliyah Lusianti', 'Notebook 11,6" DELL Inspiron 1122;Laptop 14" TOSHIBA L740 Core i3', '2017-01-17,07:00', '2017-01-18,14:00', 101, 'Baik', '0003707341,1001,1002');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(5) NOT NULL,
  `nama_user` varchar(20) NOT NULL,
  `kunci` varchar(11) NOT NULL,
  `level` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `nama_user`, `kunci`, `level`) VALUES
(11111, 'admin', 'admin', 'admin'),
(11112, 'user', 'user', 'user');

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
  ADD PRIMARY KEY (`nisn`);

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
  MODIFY `id_peminjaman` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1112;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11113;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
