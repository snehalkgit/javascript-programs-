//function declartion 

function addition(x, y) {
   return x + y

}
let q = addition(12, 5)
console.log(q)


//function expression 
let additionA = function (p, q) {
   return p + q
}
let s = additionA(42, 6)
console.log(s)


//arrow function 
let additionB = (p, q) => p + q

let t = additionB(42, 6)
console.log(s)

//program 1

//  let info = {
//     firstname : "snehal",
//     lastname : "kamble",
//    display: function (){
// console.log(this.firstname + this.lastname)

//    }
//  }

// console.log(info.firstname)
// info.display()


//prgoram 2 
var firstName = "sneha"
var lastname = " raut "
let info2 = {
   firstName: "snehal",
   lastname: "kamble",
   display: function () {
      console.log(this.firstName + this.lastname)
      console.log(this)
      let display2 =  ()=> {
         console.log(this.firstName + this.lastname)
      }
      display2()
   }

}

info2.display()



// program 3
let info3 = {
   firstName: 'snehal',
   lastname: "kamble",
   display: () => {
      console.log(this.fetch + this.lastname)
      console.log(this)  //window
      let display2 = () => {
         console.log(this.fetch + this.lastname)

      }
      display2()

   }

}
info3.display()

//program 4 

 function addition(...e){
   console.log(e)
   return e.reduce (function (acc,el,index){
      return acc + el 
   },0)
 }

 let q2 = addition(12,2,4,5,7,8,5,2,4,1,3,6,3)
 console.log(q2)

 function additiond(a,...b){
   return b.filter(function(el,index,array){
      return  el > a
   })
 }
  let q3 = additiond(17,45,5,4,6,3,2,1,5)
  console.log(q3)

  // spread operator 

let names = ["snehal","shirish","ram","rajesh","rohit"]
function printFirstTwoName(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}
printFirstTwoName(...names)

   
