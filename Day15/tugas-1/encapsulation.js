class Person {
    #age
    constructor(name, age) {
        this.name = name
        this.#age = age      
    }

    getAge(){
        return this.#age
    }

    setAge(newAge){
        if (newAge<0 || newAge>150) {
            console.log("umur tidak valid");
        } else {
            this.#age = newAge
        }
    }
}

var orang = new Person('yanti', 17)
console.log(orang.name)
console.log(orang.getAge());

