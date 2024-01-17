function getuserpagewise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
        })

    .then(function(response){
        console.log(response)
        return response.data
    })
}
//getuserpagewise(2)

function getsingleuser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function (response){
        return  response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data
    })

}
//getsingleuser(3)

function renderHtml(user){
    document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
    document.write(`<p>${user.email}${user.id}</p>`)
    document.write(`<img src=${user.avatar}>`)
}


getuserpagewise(1)
.then(function(user){
    let id = user[1].id
    return getsingleuser(id)
})
.then(function (user){
renderHtml(user)
})

//asyync await 
async function getinfo(pageNumber){
       let users = await getUserPageWise(pageNumber)
       let id = users[0].id
       let user = await getSingleUser(id)
       renderHtml(user)
} 

// Promise.all()
// async function PromiseAny(){
//    let users =  await Promise.all([
//         Promise.resolve('snehal'),
//         Promise.reject('bye'),
//         Promise.resolve('hello3')
//     ])
//     console.log(users)
// }
// PromiseAny()


// Program 2
function addTime(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('hello')
        },3000)
    })
}
function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Bye')
        },2000)
    })
}

async function PromiseRace(){
    let c = await Promise.race([
        addTime(),
        addTime2()
    ])
    console.log(c)
}
PromiseRace()

// Promise.any()
// share - 1 second -------> 3 second
async function PromiseAny(){
    let a = await Promise.any([
        Promise.reject("bye"),
        Promise.resolve("hiii"),
        Promise.reject("bye")
    ])
    console.log(a)
}
PromiseAny()


// Promise.allSettled()
async function PromiseAllSettled(){
    let a = await Promise.allSettled([
        Promise.reject("hiii"),
        Promise.resolve("snehal"),
        Promise.resolve("kmble")
    ])
    console.log(a)
}
PromiseAllSettled()