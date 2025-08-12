const tampilkanBiodata = require("./logic/tampilkanBiodata")
const aplikasi = require("./config/aplikasi")
const siswa = require("./data/siswa")

for (let index = 0; index < siswa.siswa.length; index++) {
    tampilkanBiodata.biodataKategori(index)
}

/**
 * kalo folder data file siswa cuma satu orang saja
 */
// tampilkanBiodata.biodataKategori_1_orang()

aplikasi.versi()