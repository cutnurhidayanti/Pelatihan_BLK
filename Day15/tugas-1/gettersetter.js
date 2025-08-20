class Car {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
    }

    get carname(){
        return this.brand
    }

    set carname(param){
        this.brand = param
    }

    get factoryy (){
        return this.factory
    }

    set factoryy(param){
        this.factory = param
    }
}

newcar = new Car("paheri", "mitsubitsi")

newcar.carname = "alpart"
newcar.factoryy = "toyota"

console.log(newcar.carname)
console.log(newcar.factoryy)
