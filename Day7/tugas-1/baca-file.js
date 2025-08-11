const fs = require("fs")


const baca = fs.readFileSync("film.json", "utf-8")
const data = JSON.parse(baca)

console.log("isi awal : ", data)
data.push({"judul" : "cacacaca", "tahun" : 2034, "genre": "horor, komedi"})

fs.writeFileSync("film.json", JSON.stringify(data, null, 4))


console.log("daftar film");
for (let index = 0; index < data.length; index++) {
    console.log((index+1)+". "+data[index].judul+ "(" +data[index].tahun+") - "+data[index].genre);
}
