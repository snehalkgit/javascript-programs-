//creating promise

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("equal")
    }
    else {
        reject("not equal ")
    }
})
pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})


let pro2 = new Promise(function (resolve, reject) {
    let name = "snehaal"
    if (name.startsWith("s")) {
        console.log("pass")
        resolve([1, 2, 3])
    }

    else {
        console.log("fail")
        reject([-1, -2, -3])
    }
})

//program4

let pro4 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 5
    if (a == b) {
        resolve(true)
    }
    else {
        reject(false)
    }
})
pro4
    .then(function (a) {
        console.log(a)
        return "hello"
    })
    .then(function (str) {
        console.log(str)
    })
    .catch(function (b) {
        console.log(b)
    })
    .finally(function () {
        console.log("i will run any way")
    })


pro2
    .then(function (a) {
        console.log(a)
        console.log(a[0])
    })
    .catch(function (b) {
        console.log(b)
        console.log(b[0])
    })

//program 3
let pro3 = new Promise(function (resolve, reject) {
    let cities = ["jaipur", "udaipur", "banglore", "chennai"]

    if (cities.includes('jaipur')) {
        resolve({ firstName: "snehal", lastName: "kamble" })
    }
    else {
        reject({ firstName: "monika", lastName: "naik" })
    }
})
pro3.then(function (obj) {
    console.log(obj)
    let { firstName, lastName } = obj
    console.log(firstName)
    console.log(lastName)
})
    .catch(function (obj) {
        let { firstName, lastName } = obj
        console.log(firstName)
        console.log(lastName)
    })
    .finally(function () {
        console.log("i will run any way")
    })


     let pro5 = new Promise(function(resolve,reject){
         let a = 10
          let b = 10
          if(a==b){
            resolve("equal")
          }
          else{
            reject("not equal")
          }
     })
      pro5
      .then(function(str){
        console.log(str)
        return "proceed"
      })
       .then(function(str){
        console.log(str)
       })
       
       .catch(function(str){
        console.log(str)
       })
       .finally(function(){
        console.log("i will run")

       })
       