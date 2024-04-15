// //call() bind() apply()

// //object literal

// let snehal ={
//     firstname : "snehal",
//     lastname : " kmable",
//     displayname :function(){
//         console.log(this.firstname+ this.lastname)

//     }
// }

//  let sayli = {
//     firstname : " sayli",
//     lastname : " jogi"
//  }

//  let displayname2 = snehal.displayname
// let sk = function(sayli){
//     console.log(this.firstname+ this.lastname)
//  }
//  console.log(sk)

// bind

// let q1 = displayname2 = snehal.displayname
// console.log(q1)



//call, bind , apply

 

//program2

let snehal={
    firstname : " snehal",
    lastname : " kamble"
}

let sayli={
    firstname : " sayli",
    lastname : " jogi"
}

let ajuu={
    firstname : " ajuu",
    lastname : " gaikwad"
}





// let displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// let q1 = displayName.bind(snehal)()
// let q2 = displayName.bind(sayli)()
// let q3 = displayName.bind(ajuu)()


let displayname1 = function(msg){
console.log(this.firstname+ this.lastname)
console.log(msg)
}

displayname1.call(snehal,"snehal")
displayname1.call(sayli,"hello")
displayname1.call(ajuu,"ajuubhai")


//when we use apply greet value must be in aary form 

displayname1.apply(snehal,["hi"])
displayname1.apply(sayli,["imsayli"])
displayname1.apply(ajuu,["ajay"])


//function declartation

function  displaycolor(cl){
    return cl + "color"
}
let q1 = displaycolor("yello")
console.log(q1)


//function expression

 let addition =function(x,y){
return  x + y  + "msg"
 }

 let q2 = addition(12,5,"hiii")
 console.log(q2)


 //arrow function

 let displaycolor1 = (cl)=>{
    return cl + "msg"

 }
 console.log("balck","ok")

 

let snehu = {

    firstname : "Snehal",
    lastname : "Kamble"

}
let ajay = {

    firstname : "Ajay",
    lastname : "Jawade"

}

let dispname =function(a){


    console.log(`${this .firstname} ${this.lastname}`)
    for (let i = 0 ; i <=4 ;i ++){
        console.log(a)

}
}

let s1 = dispname.bind(snehu)
let s2 = dispname.bind(ajay)


dispname.call(snehu)
let a = [1,2,3,4]
dispname.apply(snehu,a)

let vedant = {
    firstName:"vedant",
    lastName:"gaikwad"
}

let displayName4 = function(a){
    console.log(this.firstName + this.lastName)
    console.log(a)
}
// displayName4.call(shivani,"hello")
// displayName4.call(hrushali,"hello")
// displayName4.call(vedant,"hello")


// // apply
displayName4.apply(vedant,[["bye","hi","bye","good bye","tc"]])