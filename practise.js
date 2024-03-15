//promises...

let pro = new Promise(function(resolve,reject){
    let a = 10
    b = 5
    if(a ==b){
        resolve("hii")
    }
    else{
        reject("bye")
    }
})
// console.log(pro)
// let x = new Promise()
// console.log(x)
pro
.then(function(str){
    console.log(str)
}).catch
(function(str){
    console.log(str)
}).finally(function(){
    console.log("im always excutive")
  
})




 






