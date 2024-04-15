// object literal
// let snehal = {
//     firstName:"snehal",
//     lastName:"kamble",
//     age:24,
//     rollNo:8
// }

let sayli = {
    firstName:"sayli",
    lastName:"jogi",
    age:22,
    rollNo:35
}
// 100 ----- 400 lines

//Es6 class
class Person1 {
    first_name = "snehal"
    last_name = "kamble"
    age = 24
    rollNo = 6

    display_name(){
        console.log(this.first_name+this.last_name)
    }
}

let snehal = new Person1()
// let sayli = new Person()


console.log(snehal.first_name)
console.log(snehal.last_name)
console.log(snehal.age)
console.log(snehal.rollNo)
console.log(snehal)
snehal.display_name()
console.log(sayli)


// program 3
// Es6 class with constuctor
class Person {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo =rollNo 
        this.age = age

    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sarika = new Person("sarika","mahajan",34,66)
let nikita = new Person("nikita","kamble",36,31)
nikita.city = "nagpur"
console.log(nikita)







