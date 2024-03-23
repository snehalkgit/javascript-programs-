

// program 1 
let names = ["snehal","nikita","sayli","pratik"]
let a = names[0]
let b = names[1]
let c = names[2]
let d = names[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)


let [a1,b2,c1,d1]=names
console.log(a1)
console.log(b2)


//program 2 

let fruits = ["mango","apple","chiku","banana"]
let [e1,e2,e3,e4] = fruits
console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)


//program 3

let cities=[["nagpur","mumbai"],["goa","hydrabad"],["agra","wardha"]]
let[[f1,f2],[f3,f4],[f5,f6]] = cities

console.log(f1)
console.log(f3)
console.log(f4)
console.log(f5)
console.log(f6)

//program 4 

let info={
    firstname : "nikita",
    lastname : "kamble"
}
 let {firstname,lastname}= info
 console.log(firstname)
 console.log(lastname)


 //example

 let Vehicle={
    color:"white",
    type:"altroz"
 }

 let{color:co1,type:ty1}=Vehicle

 console.log(co1)
 console.log(ty1)

//example 2 

let info2 ={
    fullname : "snehal kamble",
    parent:{
        mother: "jyotsna kamble",
        fathername : "kawadu kamble"
    }
}

let={fullname , parent:{mother,fathername}} = info2
console.log(fullname)
console.log(mother)
console.log(fathername)


let students=[{
fn : "snehal",
ln : "kamble"
},
{fn : "niki",
ln :"dote"

}]

let[{fn:f11,ln:l22},{fn:f33,ln:f44}]= students
console.log(f11)
console.log(l22)
console.log(f33)
console.log(f44)

// program 6
let info3 = {
    firstName:"kartiki",
    lastName:"kale",
    skills:["sql","javascript"]

}
let {firstName:s1,lastName:s2,skills:[sub1,sub2]}  = info3
console.log(s1)
console.log(s2)
console.log(sub1)
console.log(sub2)







