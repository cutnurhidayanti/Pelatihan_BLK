class Car {
    constructor(brand) {
        this.brand = brand
    }

    get carname (){
        return this.brand
    }

    set carname(param){
        this.brand = param
    }
}

newcar = new Car('Pajerooo')
console.log(newcar.carname)

newcar.carname ="alpartttt"
console.log(newcar.carname)