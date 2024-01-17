// program A
function additionA() {
    console.log("Hello snehal ...")
}

function additionB() {
    console.log("bye snehal")
}

additionB()
additionA()


//program2

function additionC(){
setTimeout(function(){
    console.log("hello")
},3000)
}

function additionD(){
    console.log("by snehal k")
}

additionC()
additionD()


// program 3
// Async

// user create  ------ id ------- id info
function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get info by id")
    }, 1000)

}
//getInfo()

// program 4

// call back hell (onebyone)
// async ----- sync ----- help
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info by id")
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()


// program 5
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5 
//     if(a == b){
//         resolve("good")
//     }
//     else{
//         reject("bad")
//     }

// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 6
let pro2 = new Promise(function(resolve,reject){
    let a = 10
    let b = 5

    if(a == b){
        resolve([1,2,3,4,5,])
    }
    else {
        reject([55,44,11,22,88,66,33,77])
    }

})

pro2
.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[5])
})

//program 7
let pro3 = new Promise(function(resolve,reject){
    let firstName = "snehal"
    if(firstName.startsWith('s')){
        resolve('starts with s')
    }
    else {
        reject('does not starts with s')
    }
})

pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('I will always execute')
})


// program 8

let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 5

    if(a == b){
        resolve('good one')
    }
    else{
        reject('bad one')
    }
})

pro4
.then(function(str){
    console.log(str)
    return str + "snehal"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('i will always execute')
})
