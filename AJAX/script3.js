//  function additionA(){
//     console.log ("A")
//  } 

//   function additionB(){
//     console.log ("B")
//   }
//    additionA()
//    additionB()


//    function additionA(){
//     setTimeout (function(){
//         console.log("A")
//     },3000)
//    }

//    function additionB(){
//     console.log('B')
//    }

//    additionA()
//    additionB()


// async----- sync 

// function getInfo() {
//   setTimeout(function () {
//     console.log("user created")
//   }, 3000)
// }

// setTimeout(function () {
//   console.log("get id ")
// }, 2000)


// setTimeout(function () {
//   console.log("get info ")
// }, 1000)

// getInfo()


// let pro = new Promise(function (resolve, reject) {
//   let a = 10
//   let b = 10
//   if (a == b) {
//     resolve(" hello")
//   }
//   else {
//     reject("bye")
//   }
// })
// pro.then(function (str) {
//   console.log(str)
// }), function (str) {
//   console.log(str)
// }


// pro.then(function (str) {
//   console.log(str)
//   return "hello"
// })
//   .catch(function (str) {
//     console.log(str)
//     return "hi"
//   })

//   .then(function (str) {
//     console.log(str)
//     return "hi"
//   })

//   .catch(function (str) {
//     console.log(str)
//   })
//   .finally(function (str) {
//     console.log("i will always execute")
//   })



// function createUser() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("user created")
//     }, 3000)
//   })
// }

// function getId() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("get id")
//     }, 2000)
//   })
// }

// function getInfo() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("get info")
//     }, 1000)
//   })
// }

//  createUser()
//  .then(function(str){
//   console.log(str)
//   return getId()
//  })
//   .then(function(str){
//     console.log(str)
//     return getInfo()
//   })
//   .then(function(str){
//     console.log(str)
//   })
//    . catch(function(str){
//     console.log("error")
//    })
//    .finally(function(){
//     console.log("i will always execute")
//    })

//-- async function

 async function getusers(){
  let a =  await ("creat user")
  console.log(a)
   let b = await  (" get id")
   console.log(b)
    let c = await (" get info")
    console.log(c)
 }
 getusers()
 
 