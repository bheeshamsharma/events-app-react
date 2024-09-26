class Person{
    name;
    age;
    
    constructor(name,age){
        this.name = name
        this.age = age
    }

    get Name(){
        return this.name
    }

    set Name(name){
        this.name = name
    }

    getFullName(){
        return `My name is ${this.name}`
    }
}

let person = new Person("Bheesham", 32)
let person2 = new Person("Test")
console.log(person.Name = "Bheesham Sharma")
console.log(person)
console.log(person2)
