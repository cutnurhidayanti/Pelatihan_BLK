const siswa = require("../data/siswa")
const logikaKategori = require("./logikaKategori")

// kalo data siswanya banyak kayak file siswa di folder data
function biodataKategori(i) {
    console.log("\n=====Biodata Siswa=====");
    console.log("Nama\t\t\t : ", siswa.siswa[i].nama);
    console.log("Umur\t\t\t : ", siswa.siswa[i].umur);
    console.log("Asal\t\t\t : ", siswa.siswa[i].asal);
    console.log("Sekolah\t\t\t : ", siswa.siswa[i].sekolah);
    console.log("Tahun Lulus\t\t : ", siswa.siswa[i].tahunLulus);
    console.log("kategori kondisi \t : ", logikaKategori.pilihKategori(siswa.siswa[i].tahunLulus));
}

// untuk eksekusi folder data file siswa cuma satu orang saja
function biodataKategori_1_orang() {
    console.log("\n=====Biodata Siswa=====");
    console.log("Nama\t\t\t : ", siswa.nama);
    console.log("Umur\t\t\t : ", siswa.umur);
    console.log("Asal\t\t\t : ", siswa.asal);
    console.log("Sekolah\t\t\t : ", siswa.sekolah);
    console.log("Tahun Lulus\t\t : ", siswa.tahunLulus);
    console.log("kategori kondisi \t : ", logikaKategori.pilihKategori(siswa.nama));
}

module.exports = {
    biodataKategori,
    biodataKategori_1_orang
}