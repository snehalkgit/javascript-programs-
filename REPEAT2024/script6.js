let info={
    firstname : "snehal",
    lastname : "kamble",
    displayname:function(){
console.log(this.firstname + this.lastname)
    }

}

console.log(info.firstname)
console.log(info.lastname) ////object literal


 //function 


 function person(fn,ln){
    this.firstname= fn 
    this.lastname = ln 
    this.displayname = function(){
        console.log(this.firstname + this.lastname)
    }
 }

  let snehal = new person("nikita","kamble")
  console.log(snehal.firstname)
  console.log(snehal.lastname)


  ///program 3 
  // every object has one property __proto__ === Parent.protype

function PersonA(fn,ln){
this.firstname = fn 
 this.lastname = ln 
//  this.displayname = function(){
//     console.log(this.firstname+ this.lastname)
 

}

let sayli = new PersonA("sayli","jogi")
console.log(sayli)


console.log(sayli.__proto__ == PersonA.prototype)


PersonA.prototype.displayname = function(){
    console.log(this.firstname + this.lastname)
}

let info2 = ["snehal","sayli","chinmay","vrushali","sushnat"]
console.log(info2)

console.log(info2.__proto__== Array.prototype)






