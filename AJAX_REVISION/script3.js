function getusersId(pagenumber){
return fetch(`https://reqres.in/api/users?page=${pagenumber}`)
.then(function(response){
    return response.json()
}).then(function(response){
    console.log(response.data)
    return response.data
})

}
function getsingleusers(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        return response.data
    })
}
// getsingleusers(5)


function renderHtml(el){
    document.write(`<h1> ${el.id}<h1>`)
    document.write(`<h2> ${el.first_name}${el.last_name}<h2>`)
    document.write(`<h2> ${el.email}<h2>`)
    document.write(`<img src=${el.avatar}>`)
}

//getusersId(1)


async function getusersinfo(pagenumber){
    let arry= await getusersId(pagenumber)
    let user = await getsingleusers(arry[1].id)
    renderHtml(user)
}
 getusersinfo(2)
 //getusersId(2)