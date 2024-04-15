//program1 

// function additionA(){
//     console.log('A is printed')
// }
// function additionB(){
//     console.log('B is printed')

// }
// additionA()
// additionB()

// additionB()


//program 2
// function additionA(){
//     setTimeout(function(){
//         console.log("A is printed")

//     }, 3000)
// }

// function additionB(){
// setTimeout(() => {
//     console.log("b is printed")
// });
// }

// additionA()
// additionB()



//program 3

//create user, get id, getinfo

// function getinfo() {
//     setTimeout(function () {
//         console.log("create user")
//     }, 3000)
// }
// setTimeout(function () {
//     console.log("get id")
// }, 2000)
// setTimeout(function () {
//     console.log("getinfo")
// }, 1000)



// getinfo()




////program4 
//async code ----- sync----- call back hell

function getinfo() {
    setTimeout(function () {
        console.log('user create'),
            setTimeout(function () {
                console.log("get id"),
                    setTimeout(function () {
                        console.log("get info")
                    }, 1000)
            }, 2000)
    }, 3000)
}

getinfo() //---- call back hell


let pro = new Promise(function(resolve,reject){
 let a = 10
  let b = 10  
   if (a == b){
    resolve ("bye")
   }
   else{
    reject ("hiii")
   }
})
 pro.then(function(str){
    console.log(str)
 },function(str){
    console.log(str)
 })





