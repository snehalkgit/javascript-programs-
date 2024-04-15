// function additionA(){
//     console.log("a")
// }
// function additionB(){
//     console.log("b")
// }


// additionA()
// additionB()


// additionB()
// additionA()


//programm2 

// function additionC(){
//     setTimeout(function(){
//         console.log("c is called")
//     },3000)
// }

// function additionD(){
//     console.log('d is called')
// }

// additionC()
// additionD()

// additionD()
// additionC()


// program 3 

// function info() {

//     setTimeout(function () {
//         console.log("create user")
//     }, 3000)

//     setTimeout(function () {
//         console.log("getId")
//     }, 2000)

//     setTimeout(function () {
//         console.log("getInfo")
//     }, 1000)

// }
// info()

//async function

// function info() {
//     setTimeout(function () {
//         console.log("create user")
//         setTimeout(function () {
//             console.log("getId")
//             setTimeout(function () {
//             console.log("getInfo")
//             }, 1000)
//         }, 2000)
//     }, 3000)

// } 

// info()

//promisess
let pro = new Promise(function(resolve,reject){
    let a = 10 
      let b = 10

      if(a == b){
        resolve("snehal")
      }
      else{
        reject("bye")
      }
})

// pro.then(function(str){
//     console.log(str)
// })
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("always exceute")

// })



// pro
// .then(function(str){
//     console.log(str)
//     return "snehalkk"
// })
// .then(function(){

// })
// .catch(function(str){
// consolelog(str)
// })
// .finally(function(str){
//     console.log("heeloo im skk")
// })

// function createUser(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//              resolve("byebye")
//         },3000)
//     })
//  }
 
//  function getId(){
//      return new Promise(function(resolve,reject){
//          setTimeout(function(){
//               resolve("Get Id")
//          },2000)
//      })
//   }
 
//   function getInfo(){
//      return new Promise(function(resolve,reject){
//          setTimeout(function(){
//               resolve("Get Info")
//          },1000)
//      })
//   }
 
//   createUser()
//   .then(function(str){
//      console.log(str)
//      return getId()
//   })
//   .then(function(str){
//      console.log(str)
//      return getInfo()
//   })
//   .then(function(str){
//      console.log(str)
//   })
 
//  async function getUser(){
 
//      let p = await createUser()
//      console.log(p)
//      let q = await getId()()
//      console.log(q)
//      let r = await getInfo()
//      console.log(r)
     
//  }
 
 // promise combinators

// Promise.all()
// Promise.race()
// Promise.any()
// Promise.allSettled()
 
async function pAll(){
    let a1 = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("bye"),
        Promise.resolve("hello2"),

    ])
}
pAll()



// program 2


// async function pAllSettled(){
//     let a = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.reject("bye"),
//         Promise.resolve("hello2"),

//     ])
//     console.log(a)
// }
// pAll()


async function pAllRace(){
    let b = await Promise.race([
        Promise.resolve("hello"),
        Promise.reject("bye")
    
    ])
    console.log(b)
}
pAllRace()


async function pAllAny(){
    let a = await Promise.any([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.reject("bye2"),
        Promise.resolve("hello2")
    
    ])
    console.log(a)
}
pAllAny()