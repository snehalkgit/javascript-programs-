// string -- object 


let first_name = "snehal"
console.log(first_name)
console.log(typeof first_name)

let q1 = first_name.length
console.log(q1)

// Method 
// Action 
// Return type 


let last_name = "kambble"

//program 1
let s1 = last_name.toUpperCase()
console.log(s1)

let middle_name = `nikita`
let s2 = middle_name.toLowerCase()
console.log(s2)

// program 2
let s3 = "snehal".toUpperCase().toLowerCase().length
//let s3 = "hello".toUpperCase().toLowerCase().length.toUpperCase()
console.log(s3)

// program 3
let fruit = "apple"
let s4 = fruit.startsWith("app")
let s5 = fruit.startsWith("a")
let s6 = fruit.startsWith("A")
let s7 = fruit.endsWith("e")
let s8 = fruit.endsWith("le")
let s9 = fruit.endsWith("le")

console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)


// program 4
let vegetable = "tomato"



let s10 = vegetable.includes('t')
let s11 = vegetable.includes('to')
let s12 = vegetable.includes('mat')
console.log(s10)
console.log(s11)
console.log(s12)

let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)
console.log(s14)


// toUpperCase()
// toLowerCase()
// startWith()
// endsWith() 
// includes()
// indexOf()


// program 5
let a11 = ' hiiiii'
console.log(a11)

console.log(a11.length)
s15 = a11.trimStart()
console.log(s15.length)


a11 = ' hello '
console.log(a11.length)
s16 = a11.trimEnd()
console.log(s16.length)


a11 = ' hello '
s17  = a11.trim()
console.log(s17.length)

// program 6
info = 'i am learning sql'
s18 = info.replace("sql","python")
console.log(s18)


//repeat

info ="i am learning js"
console.log(info.repeat(2))


//chartat

let city="chnadrapur"
console.log(city.charAt(2))
console.log(city.charCodeAt(6))

let info4 = "i am learning sql"
console.log(info4.substring(2,9))
console.log(info4.substring(2,4))




