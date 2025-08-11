// map
let angka = [10, 20,30]

let kuadrat = angka.map(function(nilai){
    return nilai*nilai
})

console.log(kuadrat);


// filter 
let lulus = angka.filter(function (nilai) {
    return nilai >=25
})

console.log(lulus);

