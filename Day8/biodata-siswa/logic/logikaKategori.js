function pilihKategori(tahun) {
    let kondisi
    if (tahun<2019) {
        kondisi = "lulus sebelum covid"
    }else if(tahun>=2019 && tahun<2021){
        kondisi = "lulus saat covid"
    }else{
        kondisi = "lulus setelah covid"
    }
    return kondisi
}

module.exports = {
    pilihKategori
}