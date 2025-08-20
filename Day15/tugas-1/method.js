class Person {
    constructor(nama, age) {
        this.name = nama
        this.age = age
    }

    say (){
        return "helo my name is "+this.name+ " and i am "+this.age + " years old"
    }
}

var person1 = new Person("alice", 30)
console.log(person1.say());
