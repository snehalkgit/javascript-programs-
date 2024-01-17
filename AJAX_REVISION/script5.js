function getUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}
function getUserInfo2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("I am rejected")
        }, 1000)
    })
}

//program 1
Promise.all([
    getUserInfo(1),
    getUserInfo(2),
    getUserInfo(3),
    getUserInfo2()

])
.then(function(response){
    console.log(response)
})
.catch(function(err){
    console.log(err)
})

// Program.allSettled()

// Promise.allSettled([
//     getUserInfo(1),
//     getUserInfo(2),
//     getUserInfo2(),
//     getUserInfo(3),
// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.race()
// Promise
// .race([
//     getUserInfo(1),
//     getUserInfo2()
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(response){
//     console.log("i am rejected")
// })

// Promise.any()
// Promise.any([
//     getUserInfo2(),
//     getUserInfo(1),
//     getUserInfo(2),
// ])
// .then(function(response){
//     console.log(response)
// })

