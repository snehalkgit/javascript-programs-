//object literal

let snehal = {
    firstName:"snehal",
    lastName:"kamble",
    age:24,
    rollNo:45
}

let kawadu = {
    firstName:"kawadu",
    lastName:"kamble",
    age:55,
    rollNo:48
}

// 1 object ------> 4 lines 
// 100 object ------> 400 lines 
// template ------> object

// user defined data type 

// program 2
// comment
// class Person {
//     firstName
//     lastName
//     age 
//     rollNo

// }

// let snehal = new Person()
// console.log(snehal)
// amolA.firstName = "snehal"
// amolA.lastName = "kamble"
// amolA.age = 45
// amolA.rollNo = 44
// console.log(snehal)

// // retrive  // dot notation and bracket notation
// console.log(snehal.firstName)
// console.log(snehal['firstName'])
// // add   // dot notation and bracket notation
// snehal.language = "Marathi"
// snehal['city'] = "Pune"
// // update  // dot notation and bracket notation
// snehal['city'] = "nagpur"
// amosnehallA.language = "Hindi"
// //delete  // dot notation and bracket notation
// delete amolsnehal.city
// delete snehal['city']

// Program 2

class PersonB {
    // properties 
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
    }
    // method
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sarang = new PersonB("sarang","kadu",34,55)
console.log(sarang)
sarang.city = "pune"
sarang.displayName()

// set and get method

class PersonC{
    // properties value - set
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }

    // properties values - get
    getAge(){
        console.log(this.age)
    }

    getRollNo(){
        console.log(this.rollNo)
    }

    getFirstName(){
        console.log(this.firstName)
    }

    getLastName(){
        console.log(this.lastName)
    }

}

let saru = new PersonC()
console.log(saru)

saru.setAge(13)
saru.setFirstName("saru")
saru.setLastName("kadu")
saru.setRollNo(2)
console.log(saru)

saru.getAge()
saru.getFirstName()
saru.getLastName()
saru.getRollNo()

// program 4


let info = {
    fullName:'nikita',
    lastName:'kamble'
}
info.city = "mumbai"


// set and get


class PersonD {

    set firstN(fn){
        this.firstName = fn
    }
    get firstN(){
        return this.firstName
    }


    set lastN(ln){
        this.lastName = ln
    }
    get lastN(){
      return this.lastName 
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
       return this.age
    }
    set RollN(rn){
        this.rollNo = rn
    }
    get RollN(){
        return this.rollNo
    }

}

let nikita = new PersonD()

nikita.Age = 42
nikita.lastN = "nikita"
nikita.firstN = "kamble"
nikita.RollN = 24

console.log(nikita)

console.log(nikita.Age)
console.log(nikita.lastN)
console.log(nikita.firstN)
console.log(nikita)