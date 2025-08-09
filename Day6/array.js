console.log("===========array of object==============")

let contoh3 = [
    {
        nama : "yanto",
        umur : 13,              //array ke 0
        hobi : "belajar"
    },
    {
        nama : "egi",
        umur : 17,                 //array ke 1
        hobi : "ngoding"
    }
]

// console.log(contoh3[0])
// console.log(contoh3[0].nama) //mau tampilin array ke satu nama
                            // outputnya yanto
let angka = [10,20,30]

// angka.forEach(function (nilai, index) {
//     console.log("Index ke-"+index+" : "+nilai)
// })

contoh3.forEach(function(nama, index, array){
    console.log(array[index].nama)
})