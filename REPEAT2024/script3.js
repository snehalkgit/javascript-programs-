//string

let firstname = "snehal"
console.log(firstname)


let middle_name = 'kawadu'
console.log(middle_name)

let last_name = `kamble`
console.log(last_name)


let FN = "SNEHAL"
let LN = "KAMBLE"

//concat method
console.log("my firstname is " + FN + " and my lastname is " + LN)

//by concat method

console.log(`my firstname is ${FN} and my lastname is %{LN}`)


//program3 

// string + number  ----> string 
// number + string  ----> string 
// string + string  ----> string
// number + number  ----> number

let a = 15
let b = 20
let c = "maths"
console.log(a+b+c)
console.log(b+c+a)
console.log(c+b+a)

//string ------ object---- prtperties and method

let city= "nagpur"
console.log(city)

let c1 = city[0]
console.log(c1)
console.log(city[1])
console.log(city[2])
console.log(city[3])

//program2 

// string -----> object -----> properties and methods 
// action and return type


let city2="aurangabad"
console.log(city2.length)
for(let i =0;i<city2.length;i ++){
    console.log(city2[i])
    console.log(i)
}

for(let i= city2.length-1;i >=0;i --){
    console.log(i)
    console.log(city2[i])
}

//program 3

let city3="nagpur"
let i1=0
while(i1<city3.length){
    console.log(city3[i1])
    i1=i1+1
}
//----------------------

 let i2= city3.length-1
 while(i2>=0){
    console.log(city3[i2])
    i2= i2-1
 }









