class car {
    constructor(brand) {
        this.brand = brand
    }

    sound (){
        return "vromm.. bib.. bib.."
    }
}

var pajero = new car("pajerooo")
console.log(pajero.sound());
