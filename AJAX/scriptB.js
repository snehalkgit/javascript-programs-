function getUserPageWise(pageNumber){
return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
.then(function(response){
    //console.log(response)
    return response.json()
}).
then(function (response){
    return response.data
   // console.log (response.data)
})
}

function getSingle(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
       return  response.json()
    })
    .then(function(response){
        //console.log(response.data)
        return response.data
    })
}

 function renderHtml(obj ){
    document.write(`<h1>${obj.first_name}${obj.last_name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.id}</p>`)
    document.write(`<img src = "${obj.avatar}">`)
 }

 getUserPageWise(2)
 .then(function(response){
    let idA= response[0].id
    return getSingle (idA)
 })
 .then(function(el){
    console.log(el)
    renderHtml(el)
 })