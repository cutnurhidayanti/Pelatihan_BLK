let hargaSepatu = [
    {nama : "New Balance NB 530", harga : 390},
    {nama : "Nike Vomero 5", harga : 350},
    {nama : "Adidas Samba", harga : 180},
    {nama : "Onitsula Tiger Mexico", harga :420}
]

// menghitunga diskon
function hitungDiscount(totalBelanja) {
    let diskon
    let totalSetelahDiscount =0   
    if (totalBelanja < 250){
        diskon = 0
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }else if (totalBelanja >= 250 && totalBelanja <= 499) {
        diskon = 5/100
        totalSetelahDiscount = totalBelanja - totalBelanja*diskon
    }else if (totalBelanja >= 500 && totalBelanja <= 799) {
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
    let uang = 1200
    let kembalian

    hargaSepatu.forEach((nama, i) => {
        console.log(count+". "+ hargaSepatu[i]. nama +"- Rp."+hargaSepatu[i].harga+"000");
        totalBelanja += hargaSepatu[i].harga
        count++
    });

    diskon = hitungDiscount(totalBelanja)
    kembalian = pembayaran(uang, diskon[0])

    console.log("\ntotal belanja : Rp."+totalBelanja+"000");
    console.log("diskon : "+(diskon[1]*100)+"%");
    console.log("Total setelah diskon : Rp."+diskon[0]+"000");
    console.log("pembayaran : Rp."+uang+"000");
    console.log("kembaliam : Rp."+kembalian+"000");  

}

tampilkanBarang()