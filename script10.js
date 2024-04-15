

// //object literal 


// // program 1 
// let info={
//     firstname : "snehal",
//     lastname : "kamble",
//     displayName(){
//         console.log(this.firstname+this.lastname)
//     }
// }

// //program 2 

// class person{
//     first_name = "snehal"
//     last_name = "kamble"
//     displayName(){
//         console.log(this.first_name+ this.last_name)
//     }

// }

// let snehal = new person()
// console.log(snehal)

// snehal.first_name="rishi"
// console.log(snehal)
// //program 3

// //constructor

// class personA{
//     constructor(fn,ln){
//         this.first_name = fn
//         this.last_name= ln 
//     }
//     displayName(){
//         console.log(this.first_name+ this.last_name)
//     }
// }

// let snehal2 = new personA("sneha","dani")
// console.log(snehal2)


// let ajay= new personA("AJAY","jawade")
// console.log(ajay)


//program 4 

class personB{
    setFirstname(fn){
        this.firstname= fn
    }
    setLastname(ln){
        this.lastname= ln
    }

    getFirstName(){
        return this.firstname
    }
    getLastname(){
        return this.lastname
    }
}

let sayli = new personB()
sayli.firstname="saylii"
console.log(sayli)

sayli.lastname = "jogi"
console.log(sayli)

sayli.city="hinganghat"
console.log(sayli)
console.log(sayli)


let nikita = new personB()
nikita.fn = "niki"
nikita.ln = "kamble"
console.log(nikita)






