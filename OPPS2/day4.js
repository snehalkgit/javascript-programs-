//object literal 
let x = {
    firstname :"snehal",
    lastname : "kamble",
    age :24,
    displayaname :function(){
console.log(this.firstname+this.lastname)
    }
}
console.log(x.firstname)
console.log(x.lastname)



//function constructor

 
function person(fn,ln){
    this.firstname=fn,
    this.lastname = ln,
    this.displayaname=function(){
        console.log(this.firstname+this.lastname)
    }
}
let snehal = new person("nikita","kamble")
console.log(snehal.firstname)
console.log(snehal.lastname)

console.log(snehal)


// Everything in js is object 
// Object__proto__ == Parent.Proptype

console.log(snehal.__proto__== person.prototype)
person.prototype.displayname=function(){
    console.log(this.firstname+this.lastname)
}
person.prototype.age=25
snehal.displayname()
console.log(snehal.age)



console.log(snehal instanceof person)

let info=["snehal","kamble"]
console.log(info.prototype==info.__proto__)
console.log(info)
