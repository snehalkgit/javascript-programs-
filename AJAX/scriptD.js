function getSingleUser(id){
    return fetch ( `https://reqres.in/api/users/${id}`)
.then(function(response){
    return response.json()
})
.then(function(response){
    return response.data
})
}
function getErrorState(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject ("Error happen")
        },3)
    })
} 
 //program 2 

  async function PromiseALL(){
let a = await Promise.all
([
    getSingleUser(1),
    getSingleUser(2),
    getSingleUser(3)
]

)  
console.log(a)
}


//PromiseAll()

// async function PromiseAllSettled(){
//     let b = await Promise.allSettled([
//             getSingleUser(1),
//             getSingleUser(2),
//             getSingleUser(3),
//            
//     ])
//     console.log(b)
// }
// PromiseAllSettled()


async function PromiseRace() {
    try{
        let b = await Promise.race([
            getSingleUser(1),
            getErrorState()
        ])
        console.log(b)
    }
    catch {
        console.log("Error happen")
    }


}
//PromiseRace()


async function PromiseAny(){
    let q1 = await Promise.any([
        getErrorState(),
        getSingleUser(2),
        getSingleUser(3)

    ])
    console.log(q1)
}
PromiseAny()

