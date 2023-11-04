//lexical scope 

 function additionA(){
    let  a = 10
     let b  = 5
      console.log(a+b)
       function additionB(){
        let x = 5
        let y = 12
        console.log(x+y)
       }
     function additionC(){
        let c = 45
        let d = 5
        console.log(c+d)

     }
     additionC()

       additionB()
 }
 additionA()


 /// function declartion

 function additionD(x,y){
    return  x +y 
 }

   let q1 = additionD(12,6)
   console.log(q1)


   //function expression
    
    let q2 =  addE =function (c,d){
        return  c +d
    }
    let q3=  addE(45,8)
    console.log(q3)

    // arrow function 
 let  additionE= (x,y)=>{
        return  x +y 
     }
    
    let q4=  additionE(52,55)
console.log(q4)

//closure 
 
// let add = function(x,y){
//     return x + y
// }

// function additionD(fn,x,y){

//     // let fn  = function(x,y){
//     //     return x + y
//     // }

//     let c = fn(x,y)
//     return c
// }
// let d = additionD(add,34,5)
// console.log(d)


 let sub = function(x,y){
    return x -y 
 }
  function subA(fn,x,y){
    let a = fn(x,y)
    return a 
  }

   let d = subA(sub,45,2)
   console.log(d)


   
// function info(){
//     let firstName = "chinmay"
//     let lastName = "deshpande"

//     let displayName = function(){
//         console.log( firstName + lastName)
//     }
//     let updateFirstName = function(newVal){
//         firstName = newVal
//     }
//     return [displayName,updateFirstName,firstName]
// }
// let [a,b,c] = info()
// a()
// b("ram")
// a()
// console.log(c)

 function info () {
   let  firstname = " snehal "
    let lastname = " kamble "
    let displayName = function(){
console.log(firstname + lastname )
    }
    let updateFirstName= function(newval){
firstname = newval
    }

    return [displayName,updateFirstName]
}
 
 let [a,b,c]=info()
 a()
 b()

// console.log(b)
// console.log(a)

