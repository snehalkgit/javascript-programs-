function getuser(id){
    return fetch(`https://reqres.in/api/users/${id})`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function getuserinfo(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            reject("bye")
        }, 2000);
    })
}

//promise combinator


//promiseall()


 async function  getuserall(){
try{
    let a = await prmiseall([
        getuser(1),
        getuser(2),
        getuserinfo()
    ])
    console.log(a)

}
catch{
    console.log("error occur")
}
}
getuserall()


//allsettle

async function getuserallsettle(id,id2,id3){
    let b = await Promise.allSettled([
        getuser(id),
        getuser(id2),
        getuserinfo()
    ])
    console.log(b)
}

getuserallsettle(1,2,3)


//race

 async function getuserrace(id){
    try{
        let a = await Promise.race([
            getuser(id),
            getuserinfo()
        ])
        console.log(a)
    }
    catch{
        console.log("error accured")
    }
 }


//getUserRace(1)
// Program - 4
async function getUserAny(){
    let a = await Promise.any([
        getUserInfo(),
        getUser(1),
        getUser(2),
    ])
    console.log(a)

}
getUserAny()


