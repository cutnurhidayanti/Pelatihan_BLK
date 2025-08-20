CREATE TABLE `Anggota` (
  `id_anggota` integer PRIMARY KEY,
  `nama` varchar(255),
  `alamat` varchar(255),
  `telepon` integer
);

CREATE TABLE `Peminjaman` (
  `id_peminjaman` integer PRIMARY KEY,
  `tgl_pinjam` date,
  `tgl_kembali` date,
  `id_anggota` integer,
  `id_buku` integer,
  `id_petugas` integer
);

CREATE TABLE `Petugas` (
  `id_petugas` integer PRIMARY KEY,
  `username` varchar(255),
  `hak_akses` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `Buku` (
  `id_buku` integer PRIMARY KEY,
  `judul` varchar(255),
  `pengarang` varchar(255),
  `kategori` varchar(255),
  `penerbit` varchar(255),
  `tahun` year
);

ALTER TABLE `Peminjaman` ADD FOREIGN KEY (`id_anggota`) REFERENCES `Anggota` (`id_anggota`);

ALTER TABLE `Peminjaman` ADD FOREIGN KEY (`id_petugas`) REFERENCES `Petugas` (`id_petugas`);

ALTER TABLE `Buku` ADD FOREIGN KEY (`id_buku`) REFERENCES `Peminjaman` (`id_buku`);
