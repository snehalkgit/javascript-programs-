///lexical scope

function additionA(){
    let a = 10
    let b = 5
    function additionB(){
        let s = 8 
        let t = 4
        console.log(a+b+s+t)
        // console.log(s1)
        // console.log(s2)
        function additionC(){
            let p = 10
            let q= 5
            console.log(a+b+p+q)
        }
        additionC()
    }
    additionB()
}
additionA()


//program 2 


function additionC(){
    console.log(9+8)
    console.log(55+4)
    return "bye"
    console.log(8+10)

}
let s1= additionC()
console.log(s1)

//program 3 

function additionD(){
    return function(){
        console.log("hello")

    }
}
let q2 = additionD()
let q3 = function(){
    console.log('byeeee')
}
q2()
q3()

//program 4 

//closures

function additionS(){
    let e = 10
    let f = 5
    return function (){
        console.log(e+f)
    }
}
 let a1= additionS()
    console.log(a1)
    let a = function(){
        console.log(e+f)

    }
 
    a1()

    //progrm 4 

    //function addition

    function additionQ(x,y){
        return x + y 
    }
    let e = additionQ(11,5)
    console.log(e)

    // function expression 

let additionF2 = function(x,y){
    return x + y
}
let e2 = additionF2(12,3)
console.log(e2)

// arrow function 


// let additionF3 = (s,t)=>{
//     return s + t
// }
// let e3 = additionF2(12,3)
// console.log(e3)

let additionF3 = (s,t)=> s + t
let e3 = additionF2(12,3)
console.log(e3)

