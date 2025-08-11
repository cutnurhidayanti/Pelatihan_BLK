const fs = require("fs") //untuk meminta akses ke file system

const tesk = fs.readFileSync("data.json", "utf-8")// membuka dan membaca file json
const data = JSON.parse(tesk)

console.log("isi awal : ", data)

data.push({id:4, nama : "yanti", usia : 23}) // untuk add data baru
fs.writeFileSync("data.json", JSON.stringify(data, null, 4)) // diigunakan untuk read // stringify digunakan untuk convert data ke bentuk json => modelan string

console.log("data berhasil di simpan ulang :")
console.log("isi akhir ", data)

data.pop() // untuk hapus data paling akhir
fs.writeFileSync("data.json",JSON.stringify(data, null, 4)) // digunakan untuk write

console.log("data berhasil di simpan ulang :")
console.log("isi akhir ", data)


// hanya menampilkan nama sajaa
data.forEach((halo, i, array) => {
    console.log(array[i].nama) 
});

for (let index = 0; index < data.length; index++) {
    console.log(data[index].nama);
}
