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

module.exports = {
    biodataKategori
}