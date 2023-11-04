//setting the keywords manually 

//bind() , call , apply 
 //object 

  let info = {
    fistname : " snehal",
    lastname : " kamble ",
    displayname(){
        console.log(this.firstname + this . lastname )
    }
  }
   let info2 = {
        fistname : " kirti",
    lastname : " malavi ",
   }

 let info3 = {
    fistname : " priti",
    lastname : " lohakare  ",
 }

 console.log(info.fistname)
 console.log(info.lastname)

 info.displayname()

  //let fn = info.displayname
 // let fn = function (){
  //  console.log(this.firstname + this.lastname)
   // fn()

 // }

//   fn = fn.bind(info2)
//   let fn = function(){
// console.log(info2.fistname+ info2.lastname)
//   }
//   fn()

//  let fn = function(){
//     console.log(info3.fistname+info3.lastname)
//  }
//  fn = fn.bind(info3)
//  fn()


//    let car = {name : "BMW" , color: "white" }
//    let car1 = {name : "audi" , color: "balck" }
//    let car2 = {name : "altroz" , color: "gray" }
//    let car3 = {name : "volvo" , color: "matt  black"}

    let displaycolor = function(){
        console.log(this.color)
//console.log(x)
    }

    // displaycolor()
    // displaycolor.call(car,"hi")
    // displaycolor.call(car1,"bye")
    // displaycolor.call(car2,"hwllo")
    // displaycolor.call(car3,"good")
     
    let car = {name : "BMW" , color: "white" }
    let car1 = {name : "audi" , color: "balck" }
    let car2 = {name : "altroz" , color: "gray" }
    let car3 = {name : "volvo" , color: "matt  black"}
 
let displayname = function(a,b,c,d){
    console.log(this.name)
    console.log(car2.name)
    console.log(car1.name)
    console.log(car3.name)
}
displayname.apply(car,)

