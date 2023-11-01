// Type -- Human ---- amol 
// Properties - age , color , gender
// Methods    - talk() , walk(

 //array 

                  // 0          1          2        3        
   let names = [ "snehal","samiksjha","sarika","shubham "]

   // Index always starts from zero

   let q1 = names.length
   console.log(q1)

    let marks = [11,22,33,44,55,66,77,88,99,]
    console.log(marks[2])


     //length-1  is always lastindex 

       for( let i = 0 ; i <marks.length;i ++){
        console.log(marks[i])
       }

       ///
        let city= [ "pune","mumbai","goa","hydrabad","nagpur"]
         for(let i = 0; i < city.length; i ++){
            console.log(city[i])
         }

          for( let i = city.length;i >=0;i--)
{
console.log(city[i])
}

  let city2 = [ "mumbai","pune","nagpur","banglore"]
   console.log(city.length)
   let q2 = city.length
   console.log(q2)

    console.log(city[0])
    console.log(city[city.length-1])

    // length-1 is always the last index


     let flowers=[ "lily","jasmin","rose","sunflower"]
      for(let i = flowers.length-1;i >=0; i --)
{
console.log(flowers[i])
}     


for(let i =0;i >=flowers.length;i ++){
    console.log(i)
}

// push()
// action - add the element at last of array
// new lenth of array


  let city3= ['karachi',"pune","mumbai","nagpur "]
  let q4 = city3.push("wardha")
  console.log(q4)

  // unshift()
// action - add the element at start if array
// return - new length of array
let q5 = city2.unshift("pune")
console.log(q5)
console.log(city2)


// pop()
// action - removes the last element 
// return - same element

let vegetables = ["cabbage","carrot","potato","tomato"]
let q44 = vegetables.pop()
console.log(q44)
console.log(vegetables)

// shift()
// action - removes the firstName element 
// return - return same element

let q55 = vegetables.shift()
console.log(q55)
console.log(vegetables)

 

// includes()
// action - search for element
// if found return true else false 

let city4 = ["goa","banglore","delhi"]
let q66 = city4.includes('Goa')
console.log(q66)

// reverse()
let q77 = city3.reverse()
console.log(q77)

