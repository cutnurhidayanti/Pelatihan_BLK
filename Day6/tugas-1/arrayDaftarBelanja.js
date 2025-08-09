let daftarBelanja = []

daftarBelanja.push("beras", "minyak", "gula")
daftarBelanja.push("telur", "sayur", "buah")
// console.log(daftarBelanja.indexOf());
// console.log(daftarBelanja);
daftarBelanja.splice(1,1)
// console.log(daftarBelanja);

daftarBelanja.sort()

daftarBelanja.forEach((buah, index) => {
    console.log((index+1) +" : "+buah);
 
});
