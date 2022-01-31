class Person {
  // add static property
  static isLivingOnEarth = true

  //add constructor method
  constructor(name, address){
    this.name = name
    this.address = address
  }

  //add instance method signature
  introduce(){
    console.log(`Hi, my name is ${this.name}`)
  }

  work(){
    console.log("Work!")
  }
}

console.log(Person.isLivingOnEarth)

//add prototype/instance method
Person.prototype.greet = function(name){
  console.log(`Hi, ${name}, I'm ${this.name}`)
}

//add static method
Person.destroy = function(thing){
  console.log(`${this.name} is destroying ${thing}`)
}

//instantiation of Human class, we create a new object
let mj = new Person("Michael Jackson", "Isekai")

console.log(mj)

//checking instance of class
console.log(mj instanceof Person)

mj.introduce()
mj.greet("Donald Trump")
Person.destroy("Amazon Forest")

//create a child class from Human
class Programmer extends Person{
  constructor(name, address, programmingLanguages){
    super(name, address)
    /* call the super/parent class constructor,
    in this case Person.constructor */
    this.programmingLanguages = programmingLanguages
  }

  //overload the introduce method
  introduce(withDetail){
    super.introduce();
    (Array.isArray(withDetail)) ? console.log(`I can write ${this.programmingLanguages}`) : console.log("Wrong input!")
  }

  //override the work method
  work(){
    super.work()
    //call the super class work instance method
    console.log(`I can write ${this.programmingLanguages}`)
  }

  code(){
    console.log(
      "Code some", this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    )
  }
}

//initiate from Human directly
let Obama = new Person("Barrack Obama", "Washington DC")
Obama.introduce()

let Isyana = new Programmer("Isyana", "Jakarta", ["Javascript", "Kotlin", "Python"])
Isyana.introduce(["Kotlin"])
Isyana.code()
Isyana.work()

try{
  //Obama cant code since Obama is an direct instance of Human, wich dont have code method
  Obama.code()
}
catch(err){
  console.log(err.message)
}

console.log(Isyana instanceof Person)
console.log(Isyana instanceof Programmer)
