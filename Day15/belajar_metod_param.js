class Car {
    constructor(brand) {
        this.brand = brand
    }

    sound (suaranya){
        return suaranya + ", boommmmmmmmmmm"
    }
}

var pajero =  new Car("pajeroo")
console.log(pajero.sound("niu niu niu"));
