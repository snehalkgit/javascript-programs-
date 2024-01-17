function fetchUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            return new Error('request was not successfull')

        })
        .catch(function (Error) {
            console.log(Error)
        })
}

fetchUser(2)
//promise combinator

function fetchuser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
}
fetchuser(2)


//program 3 
function getuser2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            let a = 10
            let b = 40

            if (a == b) {
                resolve('hii')
            }
            else {
                reject('by')
            }
        }, 1000)
    })
}


//promise all


Promise.all([
    fetchuser(2),
    fetchUser(1),
    fetchuser(3),
 //getuser2()
])
 .then(function(response){
    console.log(response)
 })
 //promise.allsettled
  
  Promise.allSettled([
    fetchUser(3),
    fetchUser(1),
    getuser2()
  ])
  .then(function(response){
    console.log(response)
  })


  //promise.race


  Promise.race([
    fetchuser(3),
    getuser2()
  ])
  .then(function(response){
    console.log(response)
  })


  //promise.any
    
  Promise.any([
    getuser2(),
    getuser2(),
    fetchuser(2),
    fetchUser(3)
  ])
  .then(function(response){
    console.log(response)
  })

