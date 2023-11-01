//conditional statements
// one and multiple outcomes

let num = 45
if (num > 0 && num <= 5) {
   console.log("10 % discount")
}
if (num > 5 && num <= 46) {
   console.log("20 % discount")
}
if (num > 45 && num <= 50) {
   console.log("30 % discount")
}




let num1 = -45
if (num1 > 0 && num1 <= 5) {
   console.log("10 % discount")
}
if (num1 > 5 && num1 <= 46) {
   console.log("20 % discount")
}
else if (num1 > 10) {
   console.log("30 % discount")
}

else {
   console.log("incorrect input")
}


let marks = 45
if (marks > 90) {
   console.log('A is grater  ')
}
if (marks > 50) {
   console.log('B is greater ')
}
if (marks > 40) {
   console.log('  C is greater')
}


let marks1 = 96

if (marks > 90) {
   console.log('A is grater  ')
}
else if (marks < 50) {
   console.log('B is greater ')
}
else if (marks > 40) {
   console.log('  C is greater')
}

else {
   console.log('fail')
}

let a = 10
let b = 22
if (a < b) {
   console.log('A is greater')
}
else {
   console.log('B is greater')

   // program 4

let x = 100
let y = 50
let z = 30

if(x > y && x > z){
    console.log("x is greater")
}
else if(y > x && y >z){
    console.log("y is greater")
}
else{
    console.log("z is greater")
}



x = 100
y = 50
z = 30

if(x > y){
    if(x > z){
        console.log("x is greater")
    }
    else {
        console.log("z is greater")
    }
}
else if(y > z){
    console.log("y is greater")
}
else {
    console.log("z is greater")
}
}
 let q = 8
  let r = 4
   q > r ? console.log("q is greater"):console.log("r is greater")
