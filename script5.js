 let names =["sarika","shubham","snehal","suresh","jatin"]
 console.log(names)

names.pop()
console.log(names)
names.shift()
console.log(names)


names.splice(2,2,"ram","rishi")
console.log(names)


//flat()
 let fruits = [["nagpur", "wardha "],["pune","mumbai"],["hydrabad","mysore"],]
 let q1 = fruits.flat()
 console.log(q1)


 //at()

let info = ["snehal","kamble",9287745625] // mix array
 let q2 = info.at(2)
 console.log(q2)
// / info.at(1)
 console.log(info)

let info2  = [11,2,55,88,77]// arry of number 


 // map 

let number = [11,55,54,77]
let q3= number.map(function(el,index,array){
    return el -1
})

console.log(q3)


// sort() // alphabetical order 
 let names3 = ["pune","mumbai","goa"]

 names3.sort()
 console.log(names3)


