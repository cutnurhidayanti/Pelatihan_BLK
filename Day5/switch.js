let bulan = 6
let namaBulan

switch (bulan) {
    case 1:
        namaBulan ="januari"
        break;
    case 2:
        namaBulan ="februari"
        break;
    case 3:
        namaBulan ="maret"
        break;
    case 4:
        namaBulan ="april"
        break;
    case 5:
        namaBulan ="Mei"
        break;
    case 6:
        namaBulan ="Juni"
        break;
    case 7:
        namaBulan ="Juli"
        break;
    case 8:
        namaBulan ="Agustus"
        break;
    case 9:
        namaBulan ="September"
        break;
    case 10:
        namaBulan ="oktober"
        break;
    case 12:
        namaBulan ="november"
        break;
    case 13:
        namaBulan ="desember"
        break;

    default:
        namaBulan = "Nomor bulan tidak valid"

}

console.log("Bulak ke -" +bulan+" adalah "+namaBulan)