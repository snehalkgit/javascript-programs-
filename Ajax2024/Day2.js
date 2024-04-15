// function getinfo() {
//     setTimeout(function () {
//         console.log("user created")
//     }, 3000)
// }
// setTimeout(function () {
//     console.log("getid")
// }, 2000);


// setTimeout(function () {
//     console.log("user info")
// }, 1000)

// // getinfo()


function getinfo() {
    setTimeout(function () {
        console.log("user created"), 
        setTimeout(function () {
            console.log("getid"),
                setTimeout(function () {
                    console.log("user info")
                }, 1000)
        }, 2000);
    }, 3000)
}

//getinfo()


function userCreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)

    })
}

function userId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Get ID")
        },2000)

    })
}

function userInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getinfo")
        }, 1000)

    })
}


// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })


//async await 

// async function userinfoA(){
//     let a = await userCreated()
//     console.log(a)
//     let b = await userId()
//     console.log(b)
//     let c = await userInfo()
//     console.log(c)

// }

// userinfoA()



// async code -------- sync 
// user create  ----- get id ------- get info


//promise  ---- promise combinations -- 4 methods 

//promise.race() The Promise.race() method returns a Promise from a list of promises,
// when the faster promise settles

//proimse.any() The Promise.race() method returns a Promise from a list of promises, 
//when the faster promise settles


//promise.allSettled() // The Promise.allSettled() method returns a single Promise from a list of promises,
// when all promises sette


//promise.all() //The Promise.all() method returns a single Promise from a list of promises, 
//when all promises fulfill.  return array



// promise.all()
 Promise.all([
    Promise.resolve("hello"),
    Promise.resolve("bye bye"),
    Promise.resolve("sad")

 ])
 .then(function(arr){
    console.log(arr)
 })
.catch(function(str){
    console.log("all not resloved")
})

 //promise.allsettled()

 Promise.allSettled([
    Promise.resolve("snehal"),
    Promise.resolve("nikita"),
    Promise.reject("sayali")
 ])
.then(function(arr){
    console.log(arr)
})

//result
// { status: 'fulfilled', value: 'snehal' },
// { status: 'fulfilled', value: 'nikita' },
// { status: 'rejected', reason: 'sayali' }


//promise.race()

function Proone(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hi")
        },1000)
    })
}

function Protwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("no")
        },2000)
    })
}
Promise.race([
    Proone(),
    Protwo()
    
]).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
})

//no is excuted // hi alos if time is short



//promise.any()

Promise.any([
    Promise.reject("snehal"),
    Promise.reject("yes"),
    Promise.reject("aai")
])

//[AggregateError: All promises were rejected] {
  //  [errors]: [ 'snehal', 'yes', 'aai' ]






