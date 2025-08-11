let hargaSepatu = [
    {nama : "New Balance NB 530", harga : 390000},
    {nama : "Nike Vomero 5", harga : 350000},
    {nama : "Adidas Samba", harga : 180000},
    {nama : "Onitsula Tiger Mexico", harga :420000}
]

// menghitunga diskon
function hitungDiscount(totalBelanja) {
    let diskon
    let totalSetelahDiscount =0   
    if (totalBelanja < 250000){
        diskon = 0
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }else if (totalBelanja >= 250000 && totalBelanja <= 499000) {
        diskon = 5/100
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }else if (totalBelanja >= 500000 && totalBelanja <= 799000) {
        diskon = 10/100
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }else{
        diskon = 15/100
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }
    return [totalSetelahDiscount, diskon]
}

// hitung pembayaran
function pembayaran(uang, diskon) {
    return (uang - diskon)
}

// menampilkan barang
function  tampilkanBarang() {
    let count = 1
    let totalBelanja = 0
    let diskon  =[]
    let uang = 1200000
    let kembalian

    hargaSepatu.forEach((nama, i) => {
        console.log(count+". "+ hargaSepatu[i]. nama +"- Rp."+hargaSepatu[i].harga);
        totalBelanja += hargaSepatu[i].harga
        count++
    });

    diskon = hitungDiscount(totalBelanja)
    kembalian = pembayaran(uang, diskon[0])

    // .toLocaleString("id-ID") => untuk merubah number menjadi nilai mata rupiah
    // https://www.w3schools.com/jsref/jsref_tolocalestring.asp

    console.log("\ntotal belanja : Rp."+totalBelanja.toLocaleString("id-ID"));
    console.log("diskon : "+(diskon[1]*100)+"%");
    console.log("Total setelah diskon : Rp."+diskon[0].toLocaleString("id-ID"));
    console.log("pembayaran : Rp."+uang.toLocaleString("id-ID"));
    console.log("kembaliam : Rp."+kembalian.toLocaleString("id-ID"));  

}

tampilkanBarang()