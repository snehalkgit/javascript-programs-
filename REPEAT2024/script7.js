//object literal
let info = {
    firstname : "snehal",
    lastname : "kamble",
    displayname : function(){
        console.log(this.firstname+ this.lastname)
    }
}

console.log(info)
console.log(info.firstname)




//function constrcutor 


function PersonA(fn,ln){
    this.firstname = fn
    this.lastname = ln 
    this.displayname = function(){
        console.log(this.firstname + this.lastname)
    }
}


let snehal = new PersonA("snehal","kamble")
 let q1 = snehal.city = "pune"
console.log(q1)

let niki = new PersonA("niki","kamble")
console.log(niki)

// // every object has __proto__ === Parent.protype


console.log(snehal.__proto__ == PersonA.prototype)
console.log(niki.__proto__ == PersonA.prototype)
PersonA.prototype.displayname= function(){
    console.log(this.firstname + this.lastname)
}

PersonA.prototype.city = "pune"
snehal.displayname()


class Person{
    constructor(fn,ln){
        this.firstname = fn
        this.lastname = ln
        this.displayname = function(){
            console.log(this.firstname+  this.lastname)
        }
    }
    displayname(){
        console.log(this.firstname+ this.lastname)
    }
}


let skk = new Person("snehal","kamble")
let nk = new Person("nikita","kamble")
console.log(niki)
console.log(skk)




//object literal

let info3 = {
    init:function(fn,ln){
         this.firstname = fn
         this.lastname = ln
    },
    displayname(){
        console.log(this.firstname + this.lastname)
    }
}


let saru = Object.create(info3)
console.log(saru)

saru.init("saru","warhade")
console.log(saru)













