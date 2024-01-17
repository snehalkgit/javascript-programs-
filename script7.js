// //program1 
// var x = 10
// console.log(x)

// //program 2

// console.log(x)
// var x = 100
// console.log(x)

// //execution steps 
// var x 
// console.log(x)
// x = 100
// console.log(x)

// //console.log(x)
// let x = 10 
// console.log(x)

//program 3

function sayHello(){
    console.log("hello")
}

// sayHello2()
var sayHello2 = function(){
    console.log("hello")
}

//program 4
var myFunction = "bye"
function myFunction(){
    console.log("hello")
}
console.log(typeof myFunction)

//program 5 
// console.log(a) //
// console.log(b) // before intilization is not work 

// var a = 10;
// let b = 2;


//program 6 
function outer(){
    //var inner;
    console.log(inner) // undefined
    if(true){
        var inner = "inner variable"
    }
    console.log(inner) // "inner variable"
} 
outer()