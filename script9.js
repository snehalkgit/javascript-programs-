
// ///object litreal

// let snehal = {
//     firstname : "snehal",
//     lastname : "kamble",
//     displayName:function(){
//       console.log(  this.firstname + this.lastname)
//     }
// }


// class person{
//     firstname = "snehal"
//     lastname = "kamble"
//     displayName(){
//         console.log(this.firstname + this.las)
//     }
// }

// let sk = new person()

// sk.firstname = "snehal kmable"
// sk.lastname = "kamble"
// console.log(sk)


///program 2

class personA{
    constructor(fn,ln){
        this.firstname = fn
        this.lastname = ln 
    }
    displayName(){
        console.log(this.firstname + this.lastname)
    }

}
let A= new personA("snehalk","kamable")
let B = new personA("nikita","kamble")
B.displayName()
A.displayName()


//program 3
class PersonC 
{
SetFirstname(fn){
this.firstname = fn
}
setLastname(ln){
this.lastname= ln

} 
getFirstname(){
    return this.firstname
}
getLastname(){
    return this.lastname
}
displayName(){
    console.log(this.firstname+this.lastname)
}
}

let xyz=new PersonC()
console.log(xyz)

xyz.SetFirstname("snehal")
xyz.setLastname("kamble")
let  a = xyz.getFirstname()
let b = xyz.getLastname()
console.log(a)
console.log(b)


let snehal = new PersonC()
snehal.SetFirstname("niki")
snehal.setLastname("kamble")

console.log(snehal)



